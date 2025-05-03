"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { CheckCircle } from "lucide-react"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const [reference, setReference] = useState("")
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchOrderDetails = async (ref: string) => {
      try {
        // In a real app, you would fetch the order details from your API
        // For this example, we'll just simulate a successful order
        setOrderDetails({
          id: `order_${Date.now()}`,
          status: "paid",
          createdAt: new Date().toISOString(),
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
      setError("No payment reference found")
      setIsLoading(false)
    }
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg">Verifying your payment...</p>
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
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your payment has been processed successfully.
            </p>

            {reference && (
              <div className="bg-gray-50 rounded-md p-4 mb-6">
                <p className="text-sm text-gray-500 mb-1">Transaction Reference:</p>
                <p className="font-mono text-gray-700">{reference}</p>
              </div>
            )}

            {orderDetails && (
              <div className="bg-gray-50 rounded-md p-4 mb-6">
                <p className="text-sm text-gray-500 mb-1">Order ID:</p>
                <p className="font-mono text-gray-700">{orderDetails.id}</p>
                <p className="text-sm text-gray-500 mt-2 mb-1">Status:</p>
                <p className="font-medium text-green-600">
                  {orderDetails.status === "paid" ? "Payment Confirmed" : orderDetails.status}
                </p>
              </div>
            )}

            <p className="text-gray-600 mb-6">
              A confirmation email has been sent to your email address with your order details.
            </p>

            <div className="flex flex-col space-y-3">
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/shop">Continue Shopping</Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-500 text-amber-900 hover:bg-amber-50">
                <Link href={`/orders/track?reference=${reference}`}>Track Your Order</Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-500 text-amber-900 hover:bg-amber-50">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
