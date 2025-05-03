import { hash, compare } from "bcryptjs"
import { sign, verify } from "jsonwebtoken"
import { logger } from "./logger"

// In a real application, this would interact with a database
// For this example, we'll use an in-memory store
const users: Record<string, User> = {}

export interface User {
  id: string
  name: string
  email: string
  password: string // Hashed password
  phone?: string
  addresses: Address[]
  createdAt: string
  updatedAt: string
}

export interface Address {
  id: string
  name: string
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
}

// JWT secret key - in production, use a strong secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"
const JWT_EXPIRES_IN = "7d" // Token expires in 7 days

// Register a new user
export async function registerUser(userData: {
  name: string
  email: string
  password: string
  phone?: string
}): Promise<{ user: Omit<User, "password">; token: string } | { error: string }> {
  try {
    // Check if user already exists
    const existingUser = Object.values(users).find((user) => user.email === userData.email)
    if (existingUser) {
      return { error: "Email already in use" }
    }

    // Hash password
    const hashedPassword = await hash(userData.password, 10)

    // Create user
    const id = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
    const newUser: User = {
      id,
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      phone: userData.phone,
      addresses: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    users[id] = newUser

    // Generate JWT token
    const token = sign({ userId: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

    logger.info("User registered", { userId: id, email: userData.email })

    // Return user without password and token
    const { password, ...userWithoutPassword } = newUser
    return { user: userWithoutPassword, token }
  } catch (error) {
    logger.error("Error registering user", { error, email: userData.email })
    return { error: "Failed to register user" }
  }
}

// Login user
export async function loginUser(
  email: string,
  password: string,
): Promise<{ user: Omit<User, "password">; token: string } | { error: string }> {
  try {
    // Find user by email
    const user = Object.values(users).find((user) => user.email === email)
    if (!user) {
      return { error: "Invalid email or password" }
    }

    // Verify password
    const isPasswordValid = await compare(password, user.password)
    if (!isPasswordValid) {
      return { error: "Invalid email or password" }
    }

    // Generate JWT token
    const token = sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

    logger.info("User logged in", { userId: user.id, email })

    // Return user without password and token
    const { password: _, ...userWithoutPassword } = user
    return { user: userWithoutPassword, token }
  } catch (error) {
    logger.error("Error logging in user", { error, email })
    return { error: "Failed to login" }
  }
}

// Verify JWT token
export function verifyToken(token: string): { userId: string; email: string } | null {
  try {
    const decoded = verify(token, JWT_SECRET) as { userId: string; email: string }
    return decoded
  } catch (error) {
    logger.error("Invalid token", { error })
    return null
  }
}

// Get user by ID
export async function getUserById(id: string): Promise<Omit<User, "password"> | null> {
  const user = users[id]
  if (!user) return null

  const { password, ...userWithoutPassword } = user
  return userWithoutPassword
}

// Update user
export async function updateUser(
  id: string,
  updates: Partial<Omit<User, "id" | "email" | "password" | "createdAt" | "updatedAt">>,
): Promise<Omit<User, "password"> | null> {
  if (!users[id]) return null

  users[id] = {
    ...users[id],
    ...updates,
    updatedAt: new Date().toISOString(),
  }

  logger.info("User updated", { userId: id, updates: Object.keys(updates) })

  const { password, ...userWithoutPassword } = users[id]
  return userWithoutPassword
}

// Add address to user
export async function addUserAddress(userId: string, address: Omit<Address, "id">): Promise<Address | null> {
  if (!users[userId]) return null

  const addressId = `addr_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
  const newAddress: Address = {
    ...address,
    id: addressId,
  }

  // If this is the first address or set as default, make sure it's the only default
  if (newAddress.isDefault || users[userId].addresses.length === 0) {
    users[userId].addresses = users[userId].addresses.map((addr) => ({
      ...addr,
      isDefault: false,
    }))
    newAddress.isDefault = true
  }

  users[userId].addresses.push(newAddress)
  users[userId].updatedAt = new Date().toISOString()

  logger.info("Address added to user", { userId, addressId })

  return newAddress
}

// Update user address
export async function updateUserAddress(
  userId: string,
  addressId: string,
  updates: Partial<Omit<Address, "id">>,
): Promise<Address | null> {
  if (!users[userId]) return null

  const addressIndex = users[userId].addresses.findIndex((addr) => addr.id === addressId)
  if (addressIndex === -1) return null

  // If setting as default, update other addresses
  if (updates.isDefault) {
    users[userId].addresses = users[userId].addresses.map((addr) => ({
      ...addr,
      isDefault: addr.id === addressId,
    }))
  }

  users[userId].addresses[addressIndex] = {
    ...users[userId].addresses[addressIndex],
    ...updates,
  }

  users[userId].updatedAt = new Date().toISOString()

  logger.info("Address updated", { userId, addressId, updates: Object.keys(updates) })

  return users[userId].addresses[addressIndex]
}

// Delete user address
export async function deleteUserAddress(userId: string, addressId: string): Promise<boolean> {
  if (!users[userId]) return false

  const initialLength = users[userId].addresses.length
  users[userId].addresses = users[userId].addresses.filter((addr) => addr.id !== addressId)

  if (users[userId].addresses.length === initialLength) {
    return false
  }

  // If we deleted the default address and there are other addresses, make the first one default
  if (users[userId].addresses.length > 0 && !users[userId].addresses.some((addr) => addr.isDefault)) {
    users[userId].addresses[0].isDefault = true
  }

  users[userId].updatedAt = new Date().toISOString()

  logger.info("Address deleted", { userId, addressId })

  return true
}

// Change password
export async function changePassword(userId: string, currentPassword: string, newPassword: string): Promise<boolean> {
  if (!users[userId]) return false

  // Verify current password
  const isPasswordValid = await compare(currentPassword, users[userId].password)
  if (!isPasswordValid) {
    return false
  }

  // Hash new password
  const hashedPassword = await hash(newPassword, 10)
  users[userId].password = hashedPassword
  users[userId].updatedAt = new Date().toISOString()

  logger.info("Password changed", { userId })

  return true
}

// Add some sample users for testing
async function addSampleUsers() {
  await registerUser({
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    phone: "+233123456789",
  })

  await registerUser({
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password456",
    phone: "+233987654321",
  })

  logger.info("Sample users added")
}

// Initialize sample users
addSampleUsers()
