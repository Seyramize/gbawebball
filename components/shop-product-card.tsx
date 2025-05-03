"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ProductProps = {
  product: {
    id: number
    name: string
    price: number
    image: string
    description: string
    options: string[]
    featured: boolean
  }
}

export function ShopProductCard({ product }: ProductProps) {
  const [selectedOption, setSelectedOption] = useState(product.options[0])
  const [quantity, setQuantity] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePurchase = () => {
    setIsProcessing(true)
    // Redirect to the payment page with product details
    window.location.href = `/checkout?product=${encodeURIComponent(
      JSON.stringify({
        id: product.id,
        name: product.name,
        price: product.price,
        option: selectedOption,
        quantity: quantity,
      }),
    )}`
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-amber-500 text-amber-950">Featured</Badge>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-1">{product.name}</h3>
        <p className="text-xl font-bold text-amber-900 mb-3">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {product.options.length > 0 && (
          <div className="mb-4">
            <label htmlFor="option" className="block text-sm font-medium text-gray-700 mb-1">
              Options
            </label>
            <select
              id="option"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {product.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mr-3">
            Quantity
          </label>
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              type="button"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="px-3 py-1 text-gray-600 hover:text-amber-900 focus:outline-none"
            >
              -
            </button>
            <span className="px-3 py-1 text-gray-700">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 text-gray-600 hover:text-amber-900 focus:outline-none"
            >
              +
            </button>
          </div>
        </div>

        <Button
          onClick={handlePurchase}
          disabled={isProcessing}
          className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950"
        >
          {isProcessing ? "Processing..." : "Purchase Now"}
        </Button>
      </div>
    </div>
  )
}
