import { NextResponse } from "next/server"
import { getProductById, restockProduct } from "@/lib/inventory"
import { logger } from "@/lib/logger"

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { quantity } = body

    if (!quantity || typeof quantity !== "number" || quantity <= 0) {
      return NextResponse.json({ error: "Valid quantity required" }, { status: 400 })
    }

    const product = await getProductById(params.id)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const updatedProduct = await restockProduct(params.id, quantity)

    return NextResponse.json({ product: updatedProduct })
  } catch (error) {
    logger.error("Error restocking product", { error, productId: params.id })
    return NextResponse.json({ error: "Failed to restock product" }, { status: 500 })
  }
}
