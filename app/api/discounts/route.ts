import { NextResponse } from "next/server"
import { createDiscountCode, getAllDiscountCodes, getActiveDiscountCodes } from "@/lib/discounts"
import { logger } from "@/lib/logger"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const activeOnly = searchParams.get("active") === "true"

    if (activeOnly) {
      const discounts = await getActiveDiscountCodes()
      return NextResponse.json({ discounts })
    }

    const discounts = await getAllDiscountCodes()
    return NextResponse.json({ discounts })
  } catch (error) {
    logger.error("Error fetching discount codes", { error })
    return NextResponse.json({ error: "Failed to fetch discount codes" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Check for required fields
    const requiredFields = ["code", "type", "value", "validFrom", "validUntil", "isActive"]
    for (const field of requiredFields) {
      if (body[field] === undefined) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Validate discount type
    if (!["percentage", "fixed"].includes(body.type)) {
      return NextResponse.json({ error: "Discount type must be 'percentage' or 'fixed'" }, { status: 400 })
    }

    // Validate discount value
    if (typeof body.value !== "number" || body.value <= 0) {
      return NextResponse.json({ error: "Discount value must be a positive number" }, { status: 400 })
    }

    // Validate percentage discount
    if (body.type === "percentage" && body.value > 100) {
      return NextResponse.json({ error: "Percentage discount cannot exceed 100%" }, { status: 400 })
    }

    try {
      const discount = await createDiscountCode(body)
      return NextResponse.json({ discount }, { status: 201 })
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 400 })
    }
  } catch (error) {
    logger.error("Error creating discount code", { error })
    return NextResponse.json({ error: "Failed to create discount code" }, { status: 500 })
  }
}
