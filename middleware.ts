import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import * as jose from "jose"

// Update to also allow root admin path
export async function middleware(request: NextRequest) {
  // Only apply middleware to admin routes that need protection
  if (
    !request.nextUrl.pathname.startsWith("/admin") ||
    request.nextUrl.pathname === "/admin" || // Allow root admin path
    request.nextUrl.pathname.startsWith("/admin/login") ||
    request.nextUrl.pathname.startsWith("/admin/setup") ||
    request.nextUrl.pathname.startsWith("/admin/debug")
  ) {
    if (request.nextUrl.pathname === "/admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url))
    }
    return NextResponse.next()
  }

  try {
    // Get token from cookie
    const token = request.cookies.get("admin_token")?.value

    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    // Verify the token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "fallback_secret_for_development_only")

    const { payload } = await jose.jwtVerify(token, secret)

    // Check if the user has admin role
    if (payload.role !== "admin") {
      throw new Error("Not authorized")
    }

    // If verification passes, continue
    return NextResponse.next()
  } catch (error) {
    console.error("Token verification failed:", error)

    // If verification fails, redirect to login
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }
}

// Only run middleware on admin routes
export const config = {
  matcher: "/admin/:path*",
}
