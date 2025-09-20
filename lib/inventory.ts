import { logger } from "./logger"
import { sendLowStockAlert } from "./email"

// In a real application, this would interact with a database
// For this example, we'll use an in-memory store
const inventory: Record<string, Product> = {}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  lowStockThreshold: number
  options: string[]
  category: string
  featured: boolean
  imageUrl: string
  createdAt: string
  updatedAt: string
}

// Initialize with some sample products
export function initializeInventory() {
  const products = [
    {
      id: "prod_001",
      name: "Official Vipers Jersey",
      description: "Official game jersey worn by the Vipers Basketball team.",
      price: 65.0,
      stock: 50,
      lowStockThreshold: 10,
      options: ["S", "M", "L", "XL", "XXL"],
      category: "apparel",
      featured: true,
      imageUrl: "/placeholder.svg?height=600&width=600",
    },
    {
      id: "prod_002",
      name: "Hunter Elites Practice Tee",
      description: "Breathable performance tee for training sessions.",
      price: 35.0,
      stock: 75,
      lowStockThreshold: 15,
      options: ["S", "M", "L", "XL"],
      category: "apparel",
      featured: false,
      imageUrl: "/placeholder.svg?height=600&width=600",
    },
    {
      id: "prod_003",
      name: "Hunter's Fuel - Mango",
      description: "100% natural mango juice with a hint of ginger. 500ml bottle.",
      price: 5.0,
      stock: 100,
      lowStockThreshold: 20,
      options: ["Single Bottle", "6-Pack", "12-Pack"],
      category: "fuel",
      featured: true,
      imageUrl: "/placeholder.svg?height=600&width=600",
    },
  ]

  products.forEach((product) => {
    inventory[product.id] = {
      ...product,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  })

  logger.info("Inventory initialized", { productCount: products.length })
}

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  return Object.values(inventory)
}

// Get products by category
export async function getProductsByCategory(category: string): Promise<Product[]> {
  return Object.values(inventory).filter((product) => product.category === category)
}

// Get a product by ID
export async function getProductById(id: string): Promise<Product | null> {
  return inventory[id] || null
}

// Create a new product
export async function createProduct(productData: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> {
  const id = `prod_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

  const product: Product = {
    ...productData,
    id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  inventory[id] = product
  logger.info("Product created", { productId: id, name: product.name })

  return product
}

// Update a product
export async function updateProduct(id: string, updates: Partial<Product>): Promise<Product> {
  if (!inventory[id]) {
    throw new Error(`Product with ID ${id} not found`)
  }

  inventory[id] = {
    ...inventory[id],
    ...updates,
    updatedAt: new Date().toISOString(),
  }

  logger.info("Product updated", { productId: id, updates: Object.keys(updates) })

  return inventory[id]
}

// Delete a product
export async function deleteProduct(id: string): Promise<boolean> {
  if (!inventory[id]) {
    return false
  }

  delete inventory[id]
  logger.info("Product deleted", { productId: id })

  return true
}

// Update stock when an order is placed
export async function updateStockForOrder(productId: string, quantity: number, option: string): Promise<boolean> {
  const product = inventory[productId]

  if (!product) {
    logger.error("Product not found when updating stock", { productId })
    return false
  }

  if (product.stock < quantity) {
    logger.error("Insufficient stock", { productId, currentStock: product.stock, requestedQuantity: quantity })
    return false
  }

  // Update stock
  product.stock -= quantity
  product.updatedAt = new Date().toISOString()

  logger.info("Stock updated", {
    productId,
    previousStock: product.stock + quantity,
    newStock: product.stock,
    option,
  })

  // Check if stock is below threshold and send alert
  if (product.stock <= product.lowStockThreshold) {
    logger.warn("Product stock below threshold", {
      productId,
      name: product.name,
      stock: product.stock,
      threshold: product.lowStockThreshold,
    })

    await sendLowStockAlert(product)
  }

  return true
}

// Restock a product
export async function restockProduct(id: string, quantity: number): Promise<Product> {
  if (!inventory[id]) {
    throw new Error(`Product with ID ${id} not found`)
  }

  const previousStock = inventory[id].stock
  inventory[id].stock += quantity
  inventory[id].updatedAt = new Date().toISOString()

  logger.info("Product restocked", {
    productId: id,
    previousStock,
    newStock: inventory[id].stock,
    addedQuantity: quantity,
  })

  return inventory[id]
}

// Initialize inventory on startup
initializeInventory()
