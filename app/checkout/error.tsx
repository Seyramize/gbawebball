"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CheckoutError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h1>
        <p className="text-gray-700 mb-6">
          We encountered an error while processing your checkout. Please try again or contact support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-amber-500 hover:bg-amber-600 text-amber-950">
            Try again
          </Button>
          <Button asChild variant="outline" className="border-amber-500 text-amber-900">
            <Link href="/shop">Return to Shop</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
