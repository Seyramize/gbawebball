import { NextResponse } from "next/server"
import { getAdminSetupStatus } from "@/lib/admin-auth"
import { logger } from "@/lib/logger"

export async function GET() {
  try {
    const status = await getAdminSetupStatus()

    return NextResponse.json(status)
  } catch (error) {
    logger.error("Error in admin setup status API", { error })
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
