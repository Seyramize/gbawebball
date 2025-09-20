import { NextResponse } from "next/server"
import { logger } from "@/lib/logger"
import { prepareInventoryPdfData } from "@/lib/pdf-generator"

// Sample inventory data
const sampleInventory = [
  {
    id: "prod_001",
    name: "Official Vipers Jersey",
    category: "apparel",
    price: 65.0,
    stock: 32,
    sku: "VIP-JER-001",
    status: "in_stock",
  },
  {
    id: "prod_002",
    name: "Hunter Elites Practice Tee",
    category: "apparel",
    price: 35.0,
    stock: 24,
    sku: "VIP-TEE-001",
    status: "in_stock",
  },
  {
    id: "prod_003",
    name: "Vipers Hoodie",
    category: "apparel",
    price: 50.0,
    stock: 5,
    sku: "VIP-HOO-001",
    status: "low_stock",
  },
  {
    id: "prod_004",
    name: "Basketball Shorts",
    category: "apparel",
    price: 30.0,
    stock: 0,
    sku: "VIP-SHO-001",
    status: "out_of_stock",
  },
  // Add more products as needed
]

export async function GET() {
  try {
    // In a real implementation, you would fetch this from your database
    const inventoryData = sampleInventory

    // Prepare data for PDF
    const pdfData = prepareInventoryPdfData(inventoryData)

    return NextResponse.json(pdfData)
  } catch (error) {
    logger.error("Error generating inventory report", { error })
    return NextResponse.json({ error: "Failed to generate report" }, { status: 500 })
  }
}
