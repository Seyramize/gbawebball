import { logger } from "./logger"
import { updateStockForOrder } from "./inventory"
import { sendOrderConfirmationEmail, sendOrderStatusUpdateEmail } from "./email"
import { recordSale } from "./analytics"
import { validateDiscountCode, useDiscountCode } from "./discounts"

// In a real application, this would interact with a database
// For this example, we'll use an in-memory store
const orders: Record<string, Order> = {}

export type OrderStatus = "pending" | "paid" | "processing" | "completed" | "failed" | "refunded"

export interface Order {
  id: string
  product: {
    id: number
    name: string
    price: number
    option: string
    quantity: number
  }
  customer: {
    name: string
    email: string
    phone: string
    id?: string // Optional user ID for registered users
  }
  paymentReference: string
  status: OrderStatus
  createdAt: string
  updatedAt: string
  paymentData?: any
  discountCode?: string
  discountAmount?: number
  shippingAddress?: {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  trackingNumber?: string
  estimatedDelivery?: string
}

export async function createOrder(orderData: Omit<Order, "id" | "updatedAt">): Promise<Order> {
  const id = `order_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

  const order: Order = {
    ...orderData,
    id,
    updatedAt: new Date().toISOString(),
  }

  orders[id] = order

  logger.info("Order created", { orderId: id, status: order.status })

  // Send order confirmation email
  try {
    await sendOrderConfirmationEmail(order)
  } catch (error) {
    logger.error("Failed to send order confirmation email", { error, orderId: id })
  }

  // Update inventory
  try {
    if (order.product && order.product.id) {
      await updateStockForOrder(order.product.id.toString(), order.product.quantity, order.product.option)
    }
  } catch (error) {
    logger.error("Failed to update inventory", { error, orderId: id })
  }

  // Record sale for analytics
  try {
    if (order.status === "paid" || order.status === "processing") {
      await recordSale({
        orderId: order.id,
        productId: order.product.id.toString(),
        productName: order.product.name,
        category: "unknown", // In a real app, you'd get this from the product
        quantity: order.product.quantity,
        unitPrice: order.product.price,
        totalPrice: order.product.price * order.product.quantity,
        discountAmount: order.discountAmount || 0,
        finalPrice: order.product.price * order.product.quantity - (order.discountAmount || 0),
        timestamp: order.createdAt,
        customerId: order.customer?.id,
      })
    }
  } catch (error) {
    logger.error("Failed to record sale", { error, orderId: id })
  }

  return order
}

export async function getOrders(filters?: { status?: string | null; customerId?: string | null }): Promise<Order[]> {
  let result = Object.values(orders)

  if (filters?.status) {
    result = result.filter((order) => order.status === filters.status)
  }

  if (filters?.customerId) {
    result = result.filter((order) => order.customer.id === filters.customerId)
  }

  return result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function getOrderById(id: string): Promise<Order | null> {
  return orders[id] || null
}

export async function updateOrder(id: string, updates: Partial<Order>): Promise<Order> {
  if (!orders[id]) {
    throw new Error(`Order with ID ${id} not found`)
  }

  const previousStatus = orders[id].status

  orders[id] = {
    ...orders[id],
    ...updates,
    updatedAt: new Date().toISOString(),
  }

  logger.info("Order updated", { orderId: id, updates: Object.keys(updates) })

  // If status changed, send notification email
  if (updates.status && updates.status !== previousStatus) {
    try {
      await sendOrderStatusUpdateEmail(orders[id])
    } catch (error) {
      logger.error("Failed to send status update email", { error, orderId: id })
    }

    // If order is now completed or processing, record the sale for analytics if not already done
    if (
      (updates.status === "completed" || updates.status === "processing") &&
      previousStatus !== "completed" &&
      previousStatus !== "processing"
    ) {
      try {
        await recordSale({
          orderId: orders[id].id,
          productId: orders[id].product.id.toString(),
          productName: orders[id].product.name,
          category: "unknown", // In a real app, you'd get this from the product
          quantity: orders[id].product.quantity,
          unitPrice: orders[id].product.price,
          totalPrice: orders[id].product.price * orders[id].product.quantity,
          discountAmount: orders[id].discountAmount || 0,
          finalPrice: orders[id].product.price * orders[id].product.quantity - (orders[id].discountAmount || 0),
          timestamp: orders[id].updatedAt,
          customerId: orders[id].customer?.id,
        })
      } catch (error) {
        logger.error("Failed to record sale", { error, orderId: id })
      }
    }
  }

  return orders[id]
}

export async function updateOrderStatus(
  reference: string,
  status: OrderStatus,
  paymentData?: any,
): Promise<Order | null> {
  const orderArray = Object.values(orders).filter((order) => order.paymentReference === reference)

  if (orderArray.length === 0) {
    logger.warn("Order not found for payment reference", { reference })
    return null
  }

  const order = orderArray[0]
  const previousStatus = order.status
  const id = order.id

  orders[order.id] = {
    ...order,
    status,
    paymentData,
    updatedAt: new Date().toISOString(),
  }

  logger.info("Order status updated via payment reference", {
    orderId: order.id,
    reference,
    oldStatus: previousStatus,
    newStatus: status,
  })

  // Send status update email
  try {
    await sendOrderStatusUpdateEmail(orders[order.id])
  } catch (error) {
    logger.error("Failed to send status update email", { error, orderId: order.id })
  }

  // If order is now completed or processing, record the sale for analytics if not already done
  if (
    (status === "completed" || status === "processing") &&
    previousStatus !== "completed" &&
    previousStatus !== "processing"
  ) {
    try {
      await recordSale({
        orderId: order.id,
        productId: order.product.id.toString(),
        productName: order.product.name,
        category: "unknown", // In a real app, you'd get this from the product
        quantity: order.product.quantity,
        unitPrice: order.product.price,
        totalPrice: order.product.price * order.product.quantity,
        discountAmount: order.discountAmount || 0,
        finalPrice: order.product.price * order.product.quantity - (orders[id].discountAmount || 0),
        timestamp: order.updatedAt,
        customerId: order.customer?.id,
      })
    } catch (error) {
      logger.error("Failed to record sale", { error, orderId: order.id })
    }
  }

  return orders[order.id]
}

// Apply discount code to order
export async function applyDiscountCode(
  orderId: string,
  code: string,
): Promise<{
  success: boolean
  message: string
  discountAmount?: number
}> {
  const order = orders[orderId]

  if (!order) {
    return { success: false, message: "Order not found" }
  }

  // Calculate order amount
  const orderAmount = order.product.price * order.product.quantity

  // Validate discount code
  const result = await validateDiscountCode(code, orderAmount)

  if (!result.valid) {
    return { success: false, message: result.message || "Invalid discount code" }
  }

  let usedDiscount = false
  // Apply discount code
  order.discountCode = code
  order.discountAmount = result.discountAmount
  order.updatedAt = new Date().toISOString()
  usedDiscount = true

  // Mark code as used
  try {
    if (usedDiscount) {
      await useDiscountCode(code)
    }
  } catch (error) {
    logger.error("Failed to mark discount code as used", { error, code, orderId })
  }

  logger.info("Discount code applied to order", {
    orderId,
    code,
    discountAmount: result.discountAmount,
  })

  return {
    success: true,
    message: result.message || "Discount applied successfully",
    discountAmount: result.discountAmount,
  }
}

// Add tracking information to order
export async function addTrackingInfo(
  orderId: string,
  trackingNumber: string,
  estimatedDelivery: string,
): Promise<Order> {
  if (!orders[orderId]) {
    throw new Error(`Order with ID ${orderId} not found`)
  }

  orders[orderId] = {
    ...orders[orderId],
    trackingNumber,
    estimatedDelivery,
    updatedAt: new Date().toISOString(),
  }

  logger.info("Tracking information added to order", { orderId, trackingNumber })

  // Send status update email with tracking info
  try {
    await sendOrderStatusUpdateEmail(orders[orderId])
  } catch (error) {
    logger.error("Failed to send tracking update email", { error, orderId })
  }

  return orders[orderId]
}
