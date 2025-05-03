import { NextResponse } from "next/server"
import { loginUser } from "@/lib/auth"
import { logger } from "@/lib/logger"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const result = await loginUser(email, password)

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 401 })
    }

    // Set JWT token in HTTP-only cookie
    const response = NextResponse.json({
      user: result.user,
      message: "Login successful",
    })

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
    logger.error("Error logging in user", { error })
    return NextResponse.json({ error: "Failed to login" }, { status: 500 })
  }
}
