import { NextResponse } from "next/server"
import { getSalesByDateRange } from "@/lib/analytics"
import { logger } from "@/lib/logger"
import { prepareSalesPdfData } from "@/lib/pdf-generator"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("startDate") || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
    const endDate = searchParams.get("endDate") || new Date().toISOString()

    // Get sales data
    const salesData = await getSalesByDateRange(startDate, endDate)

    // Prepare data for PDF
    const pdfData = prepareSalesPdfData(salesData)

    // In a real-world scenario, we'd generate a PDF here
    // For this example, we'll just return the structured data
    // that would be used to create the PDF
    return NextResponse.json(pdfData)
  } catch (error) {
    logger.error("Error generating sales report", { error })
    return NextResponse.json({ error: "Failed to generate report" }, { status: 500 })
  }
}
