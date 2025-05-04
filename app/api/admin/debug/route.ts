import { NextResponse } from "next/server"
import { isAdminSetup, verifyAdminSession } from "@/lib/admin-auth"
import { logger } from "@/lib/logger"

export async function GET(request: Request) {
  try {
    // Check if admin is set up
    const adminSetup = isAdminSetup()

    // Check environment variables (without exposing sensitive data)
    const envInfo = {
      ADMIN_EMAIL: process.env.ADMIN_EMAIL ? "Set" : "Not set",
      ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH ? "Set" : "Not set",
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? "Set" : "Not set",
      JWT_SECRET: process.env.JWT_SECRET ? "Set" : "Not set",
    }

    // Check current session
    const sessionResult = await verifyAdminSession(request)

    return NextResponse.json({
      adminSetup,
      envInfo,
      session: {
        isValid: sessionResult.isValid,
        email: sessionResult.isValid ? sessionResult.email : undefined,
        error: sessionResult.error,
      },
    })
  } catch (error) {
    logger.error("Error in admin debug API", { error })
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
