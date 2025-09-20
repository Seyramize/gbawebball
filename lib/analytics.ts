import { logger } from "./logger"

// In a real application, this would interact with a database
// For this example, we'll use in-memory stores
const salesData: SalesRecord[] = []
const productViews: ProductViewRecord[] = []
const cartEvents: CartEventRecord[] = []

export interface SalesRecord {
  id: string
  orderId: string
  productId: string
  productName: string
  category: string
  quantity: number
  unitPrice: number
  totalPrice: number
  discountAmount: number
  finalPrice: number
  timestamp: string
  customerId?: string
}

export interface ProductViewRecord {
  id: string
  productId: string
  timestamp: string
  userId?: string
  sessionId: string
}

export interface CartEventRecord {
  id: string
  type: "add" | "remove" | "update" | "checkout" | "abandon"
  productId: string
  quantity: number
  timestamp: string
  userId?: string
  sessionId: string
}

// Record a sale
export async function recordSale(saleData: Omit<SalesRecord, "id">): Promise<SalesRecord> {
  const id = `sale_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

  const sale: SalesRecord = {
    ...saleData,
    id,
  }

  salesData.push(sale)

  logger.info("Sale recorded", {
    id,
    orderId: sale.orderId,
    productId: sale.productId,
    amount: sale.finalPrice,
  })

  return sale
}

// Record a product view
export async function recordProductView(
  productId: string,
  sessionId: string,
  userId?: string,
): Promise<ProductViewRecord> {
  const id = `view_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

  const view: ProductViewRecord = {
    id,
    productId,
    timestamp: new Date().toISOString(),
    userId,
    sessionId,
  }

  productViews.push(view)

  return view
}

// Record a cart event
export async function recordCartEvent(
  type: "add" | "remove" | "update" | "checkout" | "abandon",
  productId: string,
  quantity: number,
  sessionId: string,
  userId?: string,
): Promise<CartEventRecord> {
  const id = `cart_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

  const event: CartEventRecord = {
    id,
    type,
    productId,
    quantity,
    timestamp: new Date().toISOString(),
    userId,
    sessionId,
  }

  cartEvents.push(event)

  return event
}

// Get sales by date range
export async function getSalesByDateRange(startDate: string, endDate: string): Promise<SalesRecord[]> {
  return salesData.filter((sale) => sale.timestamp >= startDate && sale.timestamp <= endDate)
}

// Get total revenue by date range
export async function getTotalRevenue(startDate: string, endDate: string): Promise<number> {
  const sales = await getSalesByDateRange(startDate, endDate)
  return sales.reduce((total, sale) => total + sale.finalPrice, 0)
}

// Get sales by product
export async function getSalesByProduct(productId: string): Promise<SalesRecord[]> {
  return salesData.filter((sale) => sale.productId === productId)
}

// Get sales by category
export async function getSalesByCategory(category: string): Promise<SalesRecord[]> {
  return salesData.filter((sale) => sale.category === category)
}

// Get top selling products
export async function getTopSellingProducts(limit = 5): Promise<
  {
    productId: string
    productName: string
    totalQuantity: number
    totalRevenue: number
  }[]
> {
  const productSales: Record<
    string,
    {
      productId: string
      productName: string
      totalQuantity: number
      totalRevenue: number
    }
  > = {}

  salesData.forEach((sale) => {
    if (!productSales[sale.productId]) {
      productSales[sale.productId] = {
        productId: sale.productId,
        productName: sale.productName,
        totalQuantity: 0,
        totalRevenue: 0,
      }
    }

    productSales[sale.productId].totalQuantity += sale.quantity
    productSales[sale.productId].totalRevenue += sale.finalPrice
  })

  return Object.values(productSales)
    .sort((a, b) => b.totalRevenue - a.totalRevenue)
    .slice(0, limit)
}

// Get most viewed products
export async function getMostViewedProducts(limit = 5): Promise<
  {
    productId: string
    viewCount: number
  }[]
> {
  const productViewCounts: Record<string, number> = {}

  productViews.forEach((view) => {
    if (!productViewCounts[view.productId]) {
      productViewCounts[view.productId] = 0
    }

    productViewCounts[view.productId] += 1
  })

  return Object.entries(productViewCounts)
    .map(([productId, viewCount]) => ({ productId, viewCount }))
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, limit)
}

// Get cart abandonment rate
export async function getCartAbandonmentRate(): Promise<{
  abandonmentRate: number
  totalCarts: number
  abandonedCarts: number
}> {
  // Group cart events by session
  const cartsBySession: Record<
    string,
    {
      hasCheckout: boolean
      hasAbandon: boolean
      items: CartEventRecord[]
    }
  > = {}

  cartEvents.forEach((event) => {
    if (!cartsBySession[event.sessionId]) {
      cartsBySession[event.sessionId] = {
        hasCheckout: false,
        hasAbandon: false,
        items: [],
      }
    }

    if (event.type === "checkout") {
      cartsBySession[event.sessionId].hasCheckout = true
    }

    if (event.type === "abandon") {
      cartsBySession[event.sessionId].hasAbandon = true
    }

    cartsBySession[event.sessionId].items.push(event)
  })

  // Count carts with items that were abandoned (no checkout)
  const totalCarts = Object.values(cartsBySession).filter((cart) => cart.items.length > 0).length
  const abandonedCarts = Object.values(cartsBySession).filter(
    (cart) => cart.items.length > 0 && !cart.hasCheckout && cart.hasAbandon,
  ).length

  const abandonmentRate = totalCarts > 0 ? abandonedCarts / totalCarts : 0

  return {
    abandonmentRate,
    totalCarts,
    abandonedCarts,
  }
}

// Get sales by time period (daily, weekly, monthly)
export async function getSalesByTimePeriod(
  period: "daily" | "weekly" | "monthly",
  startDate: string,
  endDate: string,
): Promise<
  {
    period: string
    totalSales: number
    totalRevenue: number
  }[]
> {
  const sales = await getSalesByDateRange(startDate, endDate)
  const periodSales: Record<
    string,
    {
      period: string
      totalSales: number
      totalRevenue: number
    }
  > = {}

  sales.forEach((sale) => {
    const date = new Date(sale.timestamp)
    let periodKey: string

    if (period === "daily") {
      periodKey = date.toISOString().split("T")[0] // YYYY-MM-DD
    } else if (period === "weekly") {
      // Get the week number
      const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
      const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000
      const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
      periodKey = `${date.getFullYear()}-W${weekNumber}`
    } else {
      // Monthly
      periodKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`
    }

    if (!periodSales[periodKey]) {
      periodSales[periodKey] = {
        period: periodKey,
        totalSales: 0,
        totalRevenue: 0,
      }
    }

    periodSales[periodKey].totalSales += sale.quantity
    periodSales[periodKey].totalRevenue += sale.finalPrice
  })

  return Object.values(periodSales).sort((a, b) => a.period.localeCompare(b.period))
}

// Add sample sales data for testing
function addSampleSalesData() {
  // Create dates for the past 30 days
  const today = new Date()
  const dates = []

  for (let i = 0; i < 30; i++) {
    const date = new Date()
    date.setDate(today.getDate() - i)
    dates.push(date.toISOString())
  }

  // Sample product IDs
  const products = [
    { id: "prod_001", name: "Official Vipers Jersey", category: "apparel", price: 65.0 },
    { id: "prod_002", name: "Hunter Elites Practice Tee", category: "apparel", price: 35.0 },
    { id: "prod_003", name: "Hunter's Fuel - Mango", category: "fuel", price: 5.0 },
  ]

  // Generate random sales
  for (let i = 0; i < 100; i++) {
    const product = products[Math.floor(Math.random() * products.length)]
    const quantity = Math.floor(Math.random() * 5) + 1
    const discountAmount = Math.random() > 0.7 ? product.price * quantity * 0.1 : 0

    recordSale({
      orderId: `order_${Math.floor(Math.random() * 50) + 1}`,
      productId: product.id,
      productName: product.name,
      category: product.category,
      quantity,
      unitPrice: product.price,
      totalPrice: product.price * quantity,
      discountAmount,
      finalPrice: product.price * quantity - discountAmount,
      timestamp: dates[Math.floor(Math.random() * dates.length)],
      customerId: Math.random() > 0.5 ? `user_${Math.floor(Math.random() * 10) + 1}` : undefined,
    })
  }

  // Generate random product views
  for (let i = 0; i < 500; i++) {
    const product = products[Math.floor(Math.random() * products.length)]
    const userId = Math.random() > 0.3 ? `user_${Math.floor(Math.random() * 10) + 1}` : undefined

    recordProductView(product.id, `session_${Math.floor(Math.random() * 100) + 1}`, userId)
  }

  // Generate random cart events
  for (let i = 0; i < 200; i++) {
    const product = products[Math.floor(Math.random() * products.length)]
    const userId = Math.random() > 0.3 ? `user_${Math.floor(Math.random() * 10) + 1}` : undefined
    const sessionId = `session_${Math.floor(Math.random() * 50) + 1}`
    const eventType = ["add", "remove", "update", "checkout", "abandon"][Math.floor(Math.random() * 5)] as any

    recordCartEvent(eventType, product.id, Math.floor(Math.random() * 3) + 1, sessionId, userId)
  }

  logger.info("Sample sales data added")
}

// Initialize sample sales data
addSampleSalesData()
