import { NextResponse } from "next/server"
import { getOrderById, updateOrder } from "@/lib/orders"
import { verifyPaystackPayment } from "@/lib/paystack"
import { logger } from "@/lib/logger"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const order = await getOrderById(params.id)

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json({ order })
  } catch (error) {
    logger.error("Error fetching order", { error, orderId: params.id })
    return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { status } = body

    if (!status) {
      return NextResponse.json({ error: "Status is required" }, { status: 400 })
    }

    const order = await getOrderById(params.id)

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    // If changing to "processing" or "completed", verify payment first
    if (["processing", "completed"].includes(status) && order.status === "pending") {
      const isVerified = await verifyPaystackPayment(order.paymentReference)

      if (!isVerified) {
        logger.warn("Payment verification failed", {
          orderId: params.id,
          reference: order.paymentReference,
        })

        return NextResponse.json({ error: "Payment verification failed" }, { status: 400 })
      }
    }

    const updatedOrder = await updateOrder(params.id, { status })

    logger.info("Order status updated", {
      orderId: params.id,
      oldStatus: order.status,
      newStatus: status,
    })

    return NextResponse.json({ order: updatedOrder })
  } catch (error) {
    logger.error("Error updating order", { error, orderId: params.id })
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 })
  }
}
