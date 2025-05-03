import { type NextRequest, NextResponse } from "next/server"
import { validateDiscountCode } from "@/lib/discounts"
import { logger } from "@/lib/logger"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { code, orderAmount, productCategory, apply = false } = body

    if (!code || typeof orderAmount !== "number") {
      return NextResponse.json({ valid: false, message: "Invalid request parameters" }, { status: 400 })
    }

    // Validate the discount code
    const result = await validateDiscountCode(code, orderAmount, productCategory)

    logger.info("Discount code validation", {
      code,
      orderAmount,
      productCategory,
      valid: result.valid,
      discountAmount: result.discountAmount,
    })

    return NextResponse.json({
      valid: result.valid,
      discountAmount: result.discountAmount,
      message: result.message,
    })
  } catch (error) {
    logger.error("Error validating discount code", { error })
    return NextResponse.json({ valid: false, message: "Failed to validate discount code" }, { status: 500 })
  }
}
