import { NextResponse } from "next/server"
import { clearAdminSession } from "@/lib/admin-auth"
import { logger } from "@/lib/logger"

export async function POST() {
  try {
    // Clear admin session
    clearAdminSession()

    logger.info("Admin logged out successfully")

    return NextResponse.json({
      success: true,
      redirectUrl: "/", // Add redirect URL to homepage
    })
  } catch (error) {
    logger.error("Error in admin logout API", { error })
    return NextResponse.json({ error: "An error occurred during logout" }, { status: 500 })
  }
}
