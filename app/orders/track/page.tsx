"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { CheckCircle, Clock, Package, Truck, XCircle } from "lucide-react"

export default function TrackOrderPage() {
  const searchParams = useSearchParams()
  const [reference, setReference] = useState("")
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchOrderDetails = async (ref: string) => {
      try {
        // In a real app, you would fetch the order details from your API
        // For this example, we'll just simulate an order
        setOrderDetails({
          id: `order_${Date.now()}`,
          status: "processing",
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
          updatedAt: new Date().toISOString(),
          product: {
            name: "Hunter's Fuel - Mango",
            quantity: 2,
            price: 5.0,
            option: "6-Pack",
          },
          customer: {
            name: "John Doe",
            email: "john@example.com",
          },
          paymentReference: ref,
          estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
        })
      } catch (err) {
        setError("Failed to load order details")
      } finally {
        setIsLoading(false)
      }
    }

    const ref = searchParams.get("reference")
    if (ref) {
      setReference(ref)
      fetchOrderDetails(ref)
    } else {
      setError("No order reference provided")
      setIsLoading(false)
    }
  }, [searchParams])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-8 w-8 text-yellow-500" />
      case "paid":
        return <CheckCircle className="h-8 w-8 text-blue-500" />
      case "processing":
        return <Package className="h-8 w-8 text-purple-500" />
      case "completed":
        return <CheckCircle className="h-8 w-8 text-green-500" />
      case "failed":
        return <XCircle className="h-8 w-8 text-red-500" />
      default:
        return <Clock className="h-8 w-8 text-gray-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Your order is pending payment confirmation"
      case "paid":
        return "Payment received, order is being prepared"
      case "processing":
        return "Your order is being processed and prepared for shipping"
      case "completed":
        return "Your order has been delivered"
      case "failed":
        return "There was an issue with your payment"
      default:
        return "Order status unknown"
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg">Loading order details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700 mb-6">{error}</p>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Track Your Order</h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Order #{orderDetails.id}</h2>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date(orderDetails.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(orderDetails.status)}
                  <span className="ml-2 font-medium">
                    {orderDetails.status.charAt(0).toUpperCase() + orderDetails.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Status</h3>
                <p className="text-gray-700 mb-4">{getStatusText(orderDetails.status)}</p>

                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
                  <ul className="space-y-6 relative">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center z-10">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">Order Placed</h4>
                        <p className="text-xs text-gray-500">{new Date(orderDetails.createdAt).toLocaleString()}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center z-10">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">Payment Confirmed</h4>
                        <p className="text-xs text-gray-500">{new Date(orderDetails.createdAt).toLocaleString()}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div
                        className={`flex-shrink-0 h-8 w-8 rounded-full ${
                          orderDetails.status === "processing" || orderDetails.status === "completed"
                            ? "bg-green-100"
                            : "bg-gray-100"
                        } flex items-center justify-center z-10`}
                      >
                        {orderDetails.status === "processing" || orderDetails.status === "completed" ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Clock className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">Processing</h4>
                        {orderDetails.status === "processing" || orderDetails.status === "completed" ? (
                          <p className="text-xs text-gray-500">{new Date(orderDetails.updatedAt).toLocaleString()}</p>
                        ) : (
                          <p className="text-xs text-gray-500">Pending</p>
                        )}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div
                        className={`flex-shrink-0 h-8 w-8 rounded-full ${
                          orderDetails.status === "completed" ? "bg-green-100" : "bg-gray-100"
                        } flex items-center justify-center z-10`}
                      >
                        {orderDetails.status === "completed" ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Truck className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">Delivered</h4>
                        {orderDetails.status === "completed" ? (
                          <p className="text-xs text-gray-500">{new Date(orderDetails.updatedAt).toLocaleString()}</p>
                        ) : (
                          <p className="text-xs text-gray-500">
                            Estimated: {new Date(orderDetails.estimatedDelivery).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Details</h3>
                <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
                  <div className="w-16 h-16 bg-amber-100 rounded flex items-center justify-center mr-4">
                    <span className="text-amber-900 font-bold">{orderDetails.product.quantity}x</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{orderDetails.product.name}</h4>
                    <p className="text-gray-600">Option: {orderDetails.product.option}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      ${(orderDetails.product.price * orderDetails.product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-amber-900">
                    ${(orderDetails.product.price * orderDetails.product.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-amber-950">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
