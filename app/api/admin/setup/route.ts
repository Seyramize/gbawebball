import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { logger } from "@/lib/logger"

// In a real app, you would store this in a database
// For this example, we'll use environment variables
let isSetupComplete = false

export async function POST(request: Request) {
  try {
    // Check if setup is already complete
    if (isSetupComplete) {
      return NextResponse.json({ error: "Admin setup has already been completed" }, { status: 400 })
    }

    const body = await request.json()
    const { email, password } = body

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 })
    }

    // Hash the password
    const hashedPassword = await hash(password, 10)

    // In a real app, you would save these to a database
    // For this example, we'll just log them
    logger.info("Admin account created", { email })
    console.log("\n--- ADMIN ACCOUNT CREATED ---")
    console.log("Email:", email)
    console.log("Password Hash:", hashedPassword)
    console.log("Add this hash to your .env file as ADMIN_PASSWORD_HASH")
    console.log("Add this email to your .env file as ADMIN_EMAIL")
    console.log("-----------------------------\n")

    // Mark setup as complete
    isSetupComplete = true

    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error("Error in admin setup", { error })
    return NextResponse.json({ error: "An error occurred during setup" }, { status: 500 })
  }
}
