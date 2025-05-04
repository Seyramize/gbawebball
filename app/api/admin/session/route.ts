import { NextResponse } from "next/server"
import { getAdminSession } from "@/lib/admin-auth"
import { logger } from "@/lib/logger"

export async function GET() {
  try {
    const session = await getAdminSession()

    return NextResponse.json(session)
  } catch (error) {
    logger.error("Error in admin session API", { error })
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
