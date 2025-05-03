import { NextResponse } from "next/server"
import crypto from "crypto"
import { updateOrderStatus } from "@/lib/orders"
import { logger } from "@/lib/logger"

// This secret should be stored in environment variables
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || "sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const hash = crypto.createHmac("sha512", PAYSTACK_SECRET_KEY).update(body).digest("hex")

    const signature = request.headers.get("x-paystack-signature")

    // Verify that the request is from Paystack
    if (!signature || hash !== signature) {
      logger.warn("Invalid Paystack signature", { signature })
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
    }

    const event = JSON.parse(body)
    const { event: eventType, data } = event

    logger.info("Received Paystack webhook", { eventType, reference: data.reference })

    // Handle different event types
    switch (eventType) {
      case "charge.success":
        // Payment was successful
        await updateOrderStatus(data.reference, "paid", data)
        break

      case "charge.failed":
        // Payment failed
        await updateOrderStatus(data.reference, "failed", data)
        break

      case "transfer.success":
        // Handle transfer success if needed
        break

      case "transfer.failed":
        // Handle transfer failure if needed
        break

      default:
        // Log unknown event types
        logger.info("Unhandled Paystack event", { eventType })
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    logger.error("Error processing Paystack webhook", { error })
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
