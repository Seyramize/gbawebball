import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import * as jose from "jose" // Using jose instead of jsonwebtoken for better Edge compatibility

// Paths that require admin authentication
const ADMIN_PATHS = ["/admin/dashboard", "/admin/orders", "/admin/inventory", "/admin/analytics", "/admin/discounts"]

// Exclude these paths from middleware processing
const EXCLUDED_PATHS = ["/admin/login", "/admin/setup"]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for non-admin paths and excluded paths
  if (!pathname.startsWith("/admin") || EXCLUDED_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Check if the path is an admin path that needs protection
  if (ADMIN_PATHS.some((path) => pathname.startsWith(path))) {
    // Get the admin token from cookies
    const adminToken = request.cookies.get("admin_token")?.value

    // If no token is present, redirect to admin login
    if (!adminToken) {
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("from", pathname)
      return NextResponse.redirect(url)
    }

    try {
      // Get JWT secret from environment variable
      const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

      // Create a TextEncoder
      const textEncoder = new TextEncoder()

      // Convert the secret to Uint8Array
      const secretKey = textEncoder.encode(JWT_SECRET)

      // Verify the token using jose
      const { payload } = await jose.jwtVerify(adminToken, secretKey)

      // Check if the user has admin role
      if (payload.role !== "admin") {
        throw new Error("Not authorized")
      }

      // User is authenticated and authorized, proceed
      return NextResponse.next()
    } catch (error) {
      // Token is invalid or expired, redirect to login
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("from", pathname)
      return NextResponse.redirect(url)
    }
  }

  // For other admin paths that don't need protection, proceed normally
  return NextResponse.next()
}

export const config = {
  // Only run middleware on admin routes
  matcher: ["/admin/:path*"],
}
