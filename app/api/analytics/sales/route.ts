import { NextResponse } from "next/server"
import { getTotalRevenue, getTopSellingProducts, getSalesByTimePeriod } from "@/lib/analytics"
import { logger } from "@/lib/logger"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("startDate") || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
    const endDate = searchParams.get("endDate") || new Date().toISOString()
    const period = (searchParams.get("period") as "daily" | "weekly" | "monthly") || "daily"
    const topProducts = searchParams.get("topProducts") === "true"

    if (topProducts) {
      const limit = Number.parseInt(searchParams.get("limit") || "5")
      const products = await getTopSellingProducts(limit)
      return NextResponse.json({ products })
    }

    const sales = await getSalesByTimePeriod(period, startDate, endDate)
    const totalRevenue = await getTotalRevenue(startDate, endDate)

    return NextResponse.json({
      sales,
      totalRevenue,
      period,
      startDate,
      endDate,
    })
  } catch (error) {
    logger.error("Error fetching sales analytics", { error })
    return NextResponse.json({ error: "Failed to fetch sales analytics" }, { status: 500 })
  }
}
