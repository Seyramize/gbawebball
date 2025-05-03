import { logger } from "./logger"

// In a real application, this would interact with a database
// For this example, we'll use an in-memory store
const discountCodes: Record<string, DiscountCode> = {}

export interface DiscountCode {
  id: string
  code: string
  type: "percentage" | "fixed"
  value: number
  minPurchase?: number
  maxDiscount?: number
  validFrom: string
  validUntil: string
  usageLimit?: number
  usageCount: number
  productCategories?: string[]
  createdAt: string
  updatedAt: string
  isActive: boolean
}

// Create a new discount code
export async function createDiscountCode(
  discountData: Omit<DiscountCode, "id" | "usageCount" | "createdAt" | "updatedAt">,
): Promise<DiscountCode> {
  // Check if code already exists
  const existingCode = Object.values(discountCodes).find(
    (discount) => discount.code.toLowerCase() === discountData.code.toLowerCase(),
  )

  if (existingCode) {
    throw new Error("Discount code already exists")
  }

  const id = `disc_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

  const discountCode: DiscountCode = {
    ...discountData,
    id,
    usageCount: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  discountCodes[id] = discountCode

  logger.info("Discount code created", { id, code: discountCode.code })

  return discountCode
}

// Get all discount codes
export async function getAllDiscountCodes(): Promise<DiscountCode[]> {
  return Object.values(discountCodes)
}

// Get active discount codes
export async function getActiveDiscountCodes(): Promise<DiscountCode[]> {
  const now = new Date().toISOString()

  return Object.values(discountCodes).filter(
    (discount) =>
      discount.isActive &&
      discount.validFrom <= now &&
      discount.validUntil >= now &&
      (!discount.usageLimit || discount.usageCount < discount.usageLimit),
  )
}

// Get discount code by ID
export async function getDiscountCodeById(id: string): Promise<DiscountCode | null> {
  return discountCodes[id] || null
}

// Get discount code by code
export async function getDiscountCodeByCode(code: string): Promise<DiscountCode | null> {
  const discountCode = Object.values(discountCodes).find(
    (discount) => discount.code.toLowerCase() === code.toLowerCase(),
  )

  return discountCode || null
}

// Update discount code
export async function updateDiscountCode(
  id: string,
  updates: Partial<Omit<DiscountCode, "id" | "code" | "createdAt" | "updatedAt">>,
): Promise<DiscountCode> {
  if (!discountCodes[id]) {
    throw new Error(`Discount code with ID ${id} not found`)
  }

  discountCodes[id] = {
    ...discountCodes[id],
    ...updates,
    updatedAt: new Date().toISOString(),
  }

  logger.info("Discount code updated", { id, updates: Object.keys(updates) })

  return discountCodes[id]
}

// Delete discount code
export async function deleteDiscountCode(id: string): Promise<boolean> {
  if (!discountCodes[id]) {
    return false
  }

  delete discountCodes[id]

  logger.info("Discount code deleted", { id })

  return true
}

// Validate and apply discount code
export async function validateDiscountCode(
  code: string,
  orderAmount: number,
  productCategory?: string,
): Promise<{
  valid: boolean
  discountAmount?: number
  message?: string
}> {
  const discountCode = await getDiscountCodeByCode(code)

  if (!discountCode) {
    return { valid: false, message: "Invalid discount code" }
  }

  const now = new Date().toISOString()

  // Check if code is active
  if (!discountCode.isActive) {
    return { valid: false, message: "Discount code is inactive" }
  }

  // Check validity period
  if (discountCode.validFrom > now) {
    return { valid: false, message: "Discount code is not yet valid" }
  }

  if (discountCode.validUntil < now) {
    return { valid: false, message: "Discount code has expired" }
  }

  // Check usage limit
  if (discountCode.usageLimit && discountCode.usageCount >= discountCode.usageLimit) {
    return { valid: false, message: "Discount code usage limit reached" }
  }

  // Check minimum purchase
  if (discountCode.minPurchase && orderAmount < discountCode.minPurchase) {
    return {
      valid: false,
      message: `Minimum purchase amount of $${discountCode.minPurchase.toFixed(2)} required`,
    }
  }

  // Check product category restriction
  if (
    discountCode.productCategories &&
    discountCode.productCategories.length > 0 &&
    productCategory &&
    !discountCode.productCategories.includes(productCategory)
  ) {
    return {
      valid: false,
      message: "Discount code not applicable for this product category",
    }
  }

  // Calculate discount amount
  let discountAmount = 0

  if (discountCode.type === "percentage") {
    discountAmount = orderAmount * (discountCode.value / 100)
  } else {
    discountAmount = discountCode.value
  }

  // Apply maximum discount if specified
  if (discountCode.maxDiscount && discountAmount > discountCode.maxDiscount) {
    discountAmount = discountCode.maxDiscount
  }

  // Ensure discount doesn't exceed order amount
  if (discountAmount > orderAmount) {
    discountAmount = orderAmount
  }

  logger.info("Discount code validated and applied", {
    code: discountCode.code,
    orderAmount,
    discountAmount,
  })

  return {
    valid: true,
    discountAmount,
    message: `Discount of $${discountAmount.toFixed(2)} applied`,
  }
}

// Use discount code (increment usage count)
export async function useDiscountCode(code: string): Promise<boolean> {
  const discountCode = await getDiscountCodeByCode(code)

  if (!discountCode) {
    return false
  }

  discountCode.usageCount += 1
  discountCode.updatedAt = new Date().toISOString()

  logger.info("Discount code usage incremented", {
    code: discountCode.code,
    usageCount: discountCode.usageCount,
  })

  return true
}

// Add sample discount codes
function addSampleDiscountCodes() {
  const now = new Date()
  const oneMonthFromNow = new Date()
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1)

  createDiscountCode({
    code: "WELCOME10",
    type: "percentage",
    value: 10,
    validFrom: now.toISOString(),
    validUntil: oneMonthFromNow.toISOString(),
    isActive: true,
  })

  createDiscountCode({
    code: "APPAREL20",
    type: "percentage",
    value: 20,
    minPurchase: 50,
    validFrom: now.toISOString(),
    validUntil: oneMonthFromNow.toISOString(),
    productCategories: ["apparel"],
    isActive: true,
  })

  createDiscountCode({
    code: "FREESHIPPING",
    type: "fixed",
    value: 5,
    validFrom: now.toISOString(),
    validUntil: oneMonthFromNow.toISOString(),
    isActive: true,
  })

  logger.info("Sample discount codes added")
}

// Initialize sample discount codes
addSampleDiscountCodes()
