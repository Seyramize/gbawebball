import { NextResponse } from "next/server"
import { registerUser } from "@/lib/auth"
import { logger } from "@/lib/logger"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password, phone } = body

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 })
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

    const result = await registerUser({ name, email, password, phone })

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 400 })
    }

    // Set JWT token in HTTP-only cookie
    const response = NextResponse.json(
      {
        user: result.user,
        message: "Registration successful",
      },
      { status: 201 },
    )

    response.cookies.set({
      name: "auth_token",
      value: result.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    })

    return response
  } catch (error) {
    logger.error("Error registering user", { error })
    return NextResponse.json({ error: "Failed to register user" }, { status: 500 })
  }
}
