import type { SalesRecord } from "./analytics"

// This file would typically use a PDF generation library
// For a real implementation, you would use a library like pdfkit, jspdf, or puppeteer
// Since we're in a browser environment with Next.js, we'll use a simplified approach

export interface PdfData {
  title: string
  subtitle?: string
  data: any[]
  columns: {
    key: string
    header: string
    width?: number
  }[]
}

// Helper to format currency
export const formatCurrency = (amount: number): string => {
  return `₵${amount.toFixed(2)}`
}

// Helper to format dates
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

// For sales data specifically
export const prepareSalesPdfData = (sales: SalesRecord[]): PdfData => {
  return {
    title: "Sales Report",
    subtitle: `Generated on ${new Date().toLocaleDateString()}`,
    columns: [
      { key: "orderId", header: "Order ID", width: 80 },
      { key: "productName", header: "Product", width: 150 },
      { key: "category", header: "Category", width: 80 },
      { key: "quantity", header: "Qty", width: 40 },
      { key: "unitPrice", header: "Unit Price", width: 80 },
      { key: "finalPrice", header: "Total", width: 80 },
      { key: "timestamp", header: "Date", width: 100 },
    ],
    data: sales.map((sale) => ({
      ...sale,
      unitPrice: formatCurrency(sale.unitPrice),
      totalPrice: formatCurrency(sale.totalPrice),
      finalPrice: formatCurrency(sale.finalPrice),
      timestamp: formatDate(sale.timestamp),
    })),
  }
}

// For inventory data
export const prepareInventoryPdfData = (inventory: any[]): PdfData => {
  return {
    title: "Inventory Report",
    subtitle: `Generated on ${new Date().toLocaleDateString()}`,
    columns: [
      { key: "name", header: "Product", width: 150 },
      { key: "category", header: "Category", width: 100 },
      { key: "sku", header: "SKU", width: 100 },
      { key: "price", header: "Price", width: 80 },
      { key: "stock", header: "Stock", width: 60 },
      { key: "status", header: "Status", width: 80 },
    ],
    data: inventory.map((item) => ({
      ...item,
      price: formatCurrency(item.price),
      status: item.status.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    })),
  }
}
