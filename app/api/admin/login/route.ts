import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { compare } from "bcryptjs"
import * as jose from "jose" // Using jose instead of jsonwebtoken
import { logger } from "@/lib/logger"

// In a real app, you would fetch this from a database
// For this example, we'll use environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@gbaweacademy.com"
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH // This should be a bcrypt hash

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"
const JWT_EXPIRES_IN = "24h" // Token expires in 24 hours

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Check if email matches admin email
    if (email !== ADMIN_EMAIL) {
      logger.warn("Admin login attempt with incorrect email", { email })
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // If we have a hashed password in env vars, verify it
    if (ADMIN_PASSWORD_HASH) {
      const isPasswordValid = await compare(password, ADMIN_PASSWORD_HASH)
      if (!isPasswordValid) {
        logger.warn("Admin login attempt with incorrect password", { email })
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
      }
    } else {
      // Fallback to a default admin password for development
      // In production, always use ADMIN_PASSWORD_HASH
      const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"
      if (password !== DEFAULT_ADMIN_PASSWORD) {
        logger.warn("Admin login attempt with incorrect default password", { email })
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
      }
      logger.warn("Using default admin password. Consider setting ADMIN_PASSWORD_HASH for security.")
    }

    // Create a new JWT token using jose
    const textEncoder = new TextEncoder()
    const secretKey = textEncoder.encode(JWT_SECRET)

    const token = await new jose.SignJWT({
      userId: "admin",
      email,
      role: "admin",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(secretKey)

    logger.info("Admin logged in successfully", { email })

    // Set JWT token in HTTP-only cookie
    const cookieStore = cookies()
    cookieStore.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error("Error in admin login", { error })
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}
