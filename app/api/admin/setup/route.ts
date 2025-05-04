import { NextResponse } from "next/server"
import { setupAdmin } from "@/lib/admin-auth"
import { logger } from "@/lib/logger"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Set up admin account
    const result = await setupAdmin(email, password)

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 })
    }

    // Return success
    return NextResponse.json({
      success: true,
      message: "Admin account created successfully",
    })
  } catch (error) {
    logger.error("Error in admin setup API", { error })
    return NextResponse.json({ error: "An error occurred during setup" }, { status: 500 })
  }
}
