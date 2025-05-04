import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Only apply middleware to admin routes
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next()
  }

  // Don't apply middleware to admin login or setup routes
  if (request.nextUrl.pathname.startsWith("/admin/login") || request.nextUrl.pathname.startsWith("/admin/setup")) {
    return NextResponse.next()
  }

  const token = request.cookies.get("admin_token")?.value

  if (!token) {
    // Redirect to login if no token
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  try {
    // Verify the token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "fallback_secret_for_development_only")
    await jwtVerify(token, secret)

    // If verification passes, continue
    return NextResponse.next()
  } catch (error) {
    // If verification fails, redirect to login
    console.error("Token verification failed:", error)
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }
}

// Only run middleware on admin routes
export const config = {
  matcher: "/admin/:path*",
}
