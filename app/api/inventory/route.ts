import { NextResponse } from "next/server"
import { getAllProducts, getProductsByCategory, getProductById, createProduct } from "@/lib/inventory"
import { logger } from "@/lib/logger"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const id = searchParams.get("id")

    if (id) {
      const product = await getProductById(id)

      if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 })
      }

      return NextResponse.json({ product })
    }

    if (category) {
      const products = await getProductsByCategory(category)
      return NextResponse.json({ products })
    }

    const products = await getAllProducts()
    return NextResponse.json({ products })
  } catch (error) {
    logger.error("Error fetching products", { error })
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Check for required fields
    const requiredFields = ["name", "description", "price", "stock", "lowStockThreshold", "options", "category"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    const product = await createProduct(body)

    return NextResponse.json({ product }, { status: 201 })
  } catch (error) {
    logger.error("Error creating product", { error })
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
