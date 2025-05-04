import { NextResponse } from "next/server"
import { getProductById, updateProduct, deleteProduct } from "@/lib/inventory"
import { logger } from "@/lib/logger"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const product = await getProductById(params.id)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ product })
  } catch (error) {
    logger.error("Error fetching product", { error, productId: params.id })
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()

    const product = await getProductById(params.id)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const updatedProduct = await updateProduct(params.id, body)

    return NextResponse.json({ product: updatedProduct })
  } catch (error) {
    logger.error("Error updating product", { error, productId: params.id })
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

// Add PUT method for full updates
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()

    const product = await getProductById(params.id)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const updatedProduct = await updateProduct(params.id, body)

    return NextResponse.json({ product: updatedProduct })
  } catch (error) {
    logger.error("Error updating product", { error, productId: params.id })
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const success = await deleteProduct(params.id)

    if (!success) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error("Error deleting product", { error, productId: params.id })
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
