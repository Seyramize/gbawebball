"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSearchParams, useRouter } from "next/navigation"
import { PaystackButton } from "react-paystack"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type ProductDetails = {
  id: number
  name: string
  price: number
  option: string
  quantity: number
  category?: string
}

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [product, setProduct] = useState<ProductDetails | null>(null)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "mobile_money">("card")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [paymentError, setPaymentError] = useState("")
  const [isCreatingOrder, setIsCreatingOrder] = useState(false)

  // New state for discount code
  const [discountCode, setDiscountCode] = useState("")
  const [discountAmount, setDiscountAmount] = useState(0)
  const [discountMessage, setDiscountMessage] = useState("")
  const [isApplyingDiscount, setIsApplyingDiscount] = useState(false)
  const [discountSuccess, setDiscountSuccess] = useState(false)

  // New state for shipping address
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState("Ghana")

  // New state for user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [savedAddresses, setSavedAddresses] = useState<any[]>([])
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  // Calculate derived values outside of useEffect
  const subtotalAmount = product ? product.price * product.quantity : 0
  const totalAmount = subtotalAmount - discountAmount

  // Generate a unique reference for this transaction - do this once, not on every render
  const reference = `tx_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

  // Load product data and user data
  useEffect(() => {
    try {
      const productParam = searchParams.get("product")
      if (productParam) {
        const decodedProduct = JSON.parse(decodeURIComponent(productParam)) as ProductDetails
        setProduct(decodedProduct)
      } else {
        setError("No product information found")
      }

      // Check if user is logged in - only run this once when component mounts
      const token = localStorage.getItem("auth_token")
      if (token) {
        // Fetch user data
        fetch("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.user) {
              setIsLoggedIn(true)
              setUser(data.user)
              setName(data.user.name)
              setEmail(data.user.email)
              setPhone(data.user.phone || "")

              // Set saved addresses
              if (data.user.addresses && data.user.addresses.length > 0) {
                setSavedAddresses(data.user.addresses)

                // Set default address if available
                const defaultAddress = data.user.addresses.find((addr: any) => addr.isDefault)
                if (defaultAddress) {
                  setSelectedAddress(defaultAddress.id)
                  setStreet(defaultAddress.street)
                  setCity(defaultAddress.city)
                  setState(defaultAddress.state)
                  setPostalCode(defaultAddress.postalCode)
                  setCountry(defaultAddress.country)
                }
              }
            }
          })
          .catch((err) => {
            console.error("Error fetching user data:", err)
          })
          .finally(() => {
            setIsLoading(false)
          })
      } else {
        setIsLoading(false)
      }
    } catch (err) {
      setError("Failed to parse product information")
      setIsLoading(false)
    }
  }, [searchParams]) // Only depend on searchParams, not on any state that changes frequently

  // Paystack configuration - create this object only when needed values change
  const config = {
    reference,
    email: email,
    amount: totalAmount * 100, // Paystack amount is in kobo (smallest currency unit)
    publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Replace with your Paystack public key
    label: name,
    phone: phone,
    channels: paymentMethod === "card" ? ["card"] : ["mobile_money"],
    currency: "GHS", // Ghana Cedis
    metadata: {
      product_id: product?.id,
      product_name: product?.name,
      product_option: product?.option,
      product_quantity: product?.quantity,
      customer_name: name,
      discount_code: discountCode || undefined,
      discount_amount: discountAmount || undefined,
    },
  }

  const createOrder = async (paymentReference: string) => {
    try {
      setIsCreatingOrder(true)

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product,
          customer: {
            name,
            email,
            phone,
            id: user?.id, // Include user ID if logged in
          },
          paymentReference,
          discountCode: discountCode || undefined,
          discountAmount: discountAmount || undefined,
          shippingAddress: {
            street,
            city,
            state,
            postalCode,
            country,
          },
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create order")
      }

      return data.order
    } catch (error) {
      console.error("Error creating order:", error)
      throw error
    } finally {
      setIsCreatingOrder(false)
    }
  }

  const handlePaystackSuccess = async (response: any) => {
    try {
      // Create order in our system
      await createOrder(response.reference)

      // Redirect to success page
      router.push(`/checkout/success?reference=${response.reference}`)
    } catch (error) {
      setPaymentError("Payment was successful, but we couldn't create your order. Please contact support.")
    }
  }

  const handlePaystackClose = () => {
    // Handle when payment modal is closed
    console.log("Payment closed")
  }

  // Handle discount code application
  const applyDiscountCode = async () => {
    if (!discountCode.trim()) return

    setIsApplyingDiscount(true)
    setDiscountMessage("")
    setDiscountSuccess(false)

    try {
      const response = await fetch("/api/discounts/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: discountCode,
          orderAmount: subtotalAmount,
          productCategory: product?.category,
          apply: false, // Don't mark as used yet, only on successful checkout
        }),
      })

      const data = await response.json()

      if (data.valid) {
        setDiscountAmount(data.discountAmount)
        setDiscountMessage(data.message)
        setDiscountSuccess(true)
      } else {
        setDiscountAmount(0)
        setDiscountMessage(data.message || "Invalid discount code")
        setDiscountSuccess(false)
      }
    } catch (error) {
      setDiscountAmount(0)
      setDiscountMessage("Error validating discount code")
      setDiscountSuccess(false)
    } finally {
      setIsApplyingDiscount(false)
    }
  }

  // Handle address selection
  const handleAddressSelect = (addressId: string) => {
    setSelectedAddress(addressId)

    const address = savedAddresses.find((addr) => addr.id === addressId)
    if (address) {
      setStreet(address.street)
      setCity(address.city)
      setState(address.state)
      setPostalCode(address.postalCode)
      setCountry(address.country)
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg">Loading checkout...</p>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700 mb-6">{error || "Failed to load product information"}</p>
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-amber-950">
            <Link href="/shop">Return to Shop</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Checkout</h1>

          {paymentError && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Payment Error</AlertTitle>
              <AlertDescription>{paymentError}</AlertDescription>
            </Alert>
          )}

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
                <div className="w-16 h-16 bg-amber-100 rounded flex items-center justify-center mr-4">
                  <span className="text-amber-900 font-bold">{product.quantity}x</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">Option: {product.option}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold text-gray-900">${subtotalAmount.toFixed(2)}</span>
              </div>

              {/* Discount Code Section */}
              <div className="mb-4">
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <Input
                      type="text"
                      placeholder="Discount Code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      disabled={isApplyingDiscount || discountSuccess}
                    />
                  </div>
                  <Button
                    onClick={applyDiscountCode}
                    disabled={isApplyingDiscount || discountSuccess || !discountCode.trim()}
                    className="bg-amber-500 hover:bg-amber-600 text-amber-950"
                  >
                    {isApplyingDiscount ? "Applying..." : discountSuccess ? "Applied" : "Apply"}
                  </Button>
                </div>

                {discountMessage && (
                  <div className={`mt-2 text-sm ${discountSuccess ? "text-green-600" : "text-red-600"}`}>
                    {discountSuccess && <CheckCircle className="inline-block h-4 w-4 mr-1" />}
                    {!discountSuccess && <AlertCircle className="inline-block h-4 w-4 mr-1" />}
                    {discountMessage}
                  </div>
                )}
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-bold text-green-600">-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-amber-900">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                    disabled={isLoggedIn}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                    disabled={isLoggedIn}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Address</h2>

              {/* Saved Addresses (for logged in users) */}
              {isLoggedIn && savedAddresses.length > 0 && (
                <div className="mb-6">
                  <Label className="block text-sm font-medium text-gray-700 mb-2">Select a saved address</Label>
                  <div className="space-y-3">
                    {savedAddresses.map((address) => (
                      <div
                        key={address.id}
                        className={`p-3 border rounded-md cursor-pointer ${
                          selectedAddress === address.id ? "border-amber-500 bg-amber-50" : "border-gray-300"
                        }`}
                        onClick={() => handleAddressSelect(address.id)}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{address.name}</span>
                          {address.isDefault && (
                            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Default</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          {address.street}, {address.city}, {address.state} {address.postalCode}, {address.country}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-sm">
                    <button
                      type="button"
                      className="text-amber-600 hover:text-amber-700"
                      onClick={() => setSelectedAddress(null)}
                    >
                      Use a different address
                    </button>
                  </div>
                </div>
              )}

              {/* Address Form (shown if no saved address is selected) */}
              {!selectedAddress && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="street">Street Address</Label>
                    <Input id="street" value={street} onChange={(e) => setStreet(e.target.value)} required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                    </div>
                    <div>
                      <Label htmlFor="state">State/Region</Label>
                      <Input id="state" value={state} onChange={(e) => setState(e.target.value)} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
                    </div>
                  </div>

                  {isLoggedIn && (
                    <div className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        id="saveAddress"
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                      />
                      <label htmlFor="saveAddress" className="ml-2 block text-sm text-gray-700">
                        Save this address for future orders
                      </label>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  />
                  <label htmlFor="card" className="ml-2 block text-sm font-medium text-gray-700">
                    Credit/Debit Card
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="mobile_money"
                    name="paymentMethod"
                    checked={paymentMethod === "mobile_money"}
                    onChange={() => setPaymentMethod("mobile_money")}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  />
                  <label htmlFor="mobile_money" className="ml-2 block text-sm font-medium text-gray-700">
                    Mobile Money
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            {email && name && phone && street && city && state && postalCode && country ? (
              <PaystackButton
                {...config}
                text={isCreatingOrder ? "Processing..." : "Pay Now"}
                onSuccess={handlePaystackSuccess}
                onClose={handlePaystackClose}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-950 bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isCreatingOrder}
              />
            ) : (
              <Button disabled className="bg-amber-300 text-amber-950">
                Please fill all required fields
              </Button>
            )}
          </div>

          <div className="mt-6 text-center">
            <Link href="/shop" className="text-amber-600 hover:text-amber-700 font-medium">
              ← Return to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
