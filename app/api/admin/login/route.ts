import { NextResponse } from "next/server"
import { verifyAdminCredentials, createAdminSession } from "@/lib/admin-auth"
import { logger } from "@/lib/logger"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate inputs
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Verify admin credentials
    const verifyResult = await verifyAdminCredentials(email, password)

    if (!verifyResult.success) {
      return NextResponse.json({ error: verifyResult.error }, { status: 401 })
    }

    // Create admin session
    const sessionResult = await createAdminSession(email)

    if (!sessionResult.success) {
      return NextResponse.json({ error: sessionResult.error }, { status: 500 })
    }

    // Return success
    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error("Error in admin login API", { error })
    return NextResponse.json(
      {
        error: "An error occurred during login",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
