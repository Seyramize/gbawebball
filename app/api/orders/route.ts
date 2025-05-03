import { NextResponse } from "next/server"
import { createOrder, getOrders } from "@/lib/orders"
import { logger } from "@/lib/logger"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { product, customer, paymentReference } = body

    if (!product || !customer || !paymentReference) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create a new order
    const order = await createOrder({
      product,
      customer,
      paymentReference,
      status: "pending",
      createdAt: new Date().toISOString(),
    })

    logger.info("Order created", { orderId: order.id, reference: paymentReference })

    return NextResponse.json({ success: true, order })
  } catch (error) {
    logger.error("Error creating order", { error })
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const customerId = searchParams.get("customerId")

    const orders = await getOrders({ status, customerId })

    return NextResponse.json({ orders })
  } catch (error) {
    logger.error("Error fetching orders", { error })
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}
