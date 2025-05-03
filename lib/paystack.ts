import { logger } from "./logger"

// This secret should be stored in environment variables
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || "sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

/**
 * Verify a Paystack payment using their API
 */
export async function verifyPaystackPayment(reference: string): Promise<boolean> {
  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()

    if (data.status && data.data.status === "success") {
      logger.info("Payment verified successfully", { reference, amount: data.data.amount })
      return true
    } else {
      logger.warn("Payment verification failed", { reference, status: data.data?.status })
      return false
    }
  } catch (error) {
    logger.error("Error verifying payment", { error, reference })
    return false
  }
}

/**
 * Initialize a Paystack transaction
 */
export async function initializePaystackTransaction(params: {
  email: string
  amount: number
  reference: string
  callbackUrl: string
  metadata?: any
}) {
  try {
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })

    const data = await response.json()

    if (data.status) {
      logger.info("Payment initialized", { reference: params.reference })
      return { success: true, data: data.data }
    } else {
      logger.warn("Payment initialization failed", {
        reference: params.reference,
        error: data.message,
      })
      return { success: false, error: data.message }
    }
  } catch (error) {
    logger.error("Error initializing payment", { error, reference: params.reference })
    return { success: false, error: "Failed to initialize payment" }
  }
}
