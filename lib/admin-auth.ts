import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { logger } from "./logger"
import { compare, hash } from "bcryptjs"

// In-memory storage for admin accounts (in a real app, use a database)
const adminAccounts: { email: string; passwordHash: string }[] = []

// Maximum number of admin accounts allowed
const MAX_ADMIN_ACCOUNTS = 2

export async function setupAdmin(email: string, password: string) {
  try {
    // Check if we've reached the maximum number of admin accounts
    if (adminAccounts.length >= MAX_ADMIN_ACCOUNTS) {
      return {
        success: false,
        error: `Maximum number of admin accounts (${MAX_ADMIN_ACCOUNTS}) reached`,
      }
    }

    // Check if admin with this email already exists
    const existingAdmin = adminAccounts.find((admin) => admin.email === email)
    if (existingAdmin) {
      return {
        success: false,
        error: "An admin with this email already exists",
      }
    }

    const passwordHash = await hash(password, 10)

    // Store admin credentials
    adminAccounts.push({ email, passwordHash })

    logger.info(`Admin account created for ${email}`)

    return {
      success: true,
    }
  } catch (error) {
    logger.error("Error in setupAdmin", { error })
    return {
      success: false,
      error: "Failed to set up admin account",
    }
  }
}

export async function verifyAdminCredentials(email: string, password: string) {
  try {
    // Find admin account
    const adminAccount = adminAccounts.find((admin) => admin.email === email)

    if (!adminAccount) {
      // Check environment variables as fallback
      if (process.env.ADMIN_EMAIL === email && process.env.ADMIN_PASSWORD) {
        const isPasswordValid = password === process.env.ADMIN_PASSWORD
        if (!isPasswordValid) {
          return { success: false, error: "Invalid credentials" }
        }
        return { success: true }
      }
      return { success: false, error: "Invalid credentials" }
    }

    // Verify password
    const isPasswordValid = await compare(password, adminAccount.passwordHash)
    if (!isPasswordValid) {
      return { success: false, error: "Invalid credentials" }
    }

    return { success: true }
  } catch (error) {
    logger.error("Error in verifyAdminCredentials", { error })
    return { success: false, error: "Authentication error" }
  }
}

export async function createAdminSession(email: string) {
  try {
    // Create session token
    const token = await new SignJWT({ email, role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("8h") // 8 hour session
      .sign(new TextEncoder().encode(process.env.JWT_SECRET || "fallback-secret-change-this"))

    // Set cookie
    cookies().set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/",
    })

    return { success: true }
  } catch (error) {
    logger.error("Error in createAdminSession", { error })
    return { success: false, error: "Failed to create session" }
  }
}

export async function verifyAdminSession(
  request: Request,
): Promise<{ isValid: boolean; email?: string; error?: string }> {
  try {
    const token = request.cookies.get("admin_token")?.value

    if (!token) {
      return { isValid: false, error: "No token found" }
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "fallback_secret_for_development_only")
    const { payload } = await jwtVerify(token, secret)

    if (payload.role !== "admin") {
      return { isValid: false, error: "Not an admin" }
    }

    return { isValid: true, email: payload.email as string }
  } catch (error) {
    logger.error("Token verification failed:", error)
    return { isValid: false, error: "Invalid token" }
  }
}

export async function clearAdminSession() {
  cookies().set("admin_token", "", {
    expires: new Date(0),
    path: "/",
  })

  return { success: true }
}

export function isAdminSetup() {
  // Check if admin is set up
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH
  const hasInMemoryAccounts = adminAccounts.length > 0

  return !!((adminEmail && adminPasswordHash) || hasInMemoryAccounts)
}

export async function getAdminSession(): Promise<{ isValid: boolean; email?: string; error?: string }> {
  try {
    const token = cookies().get("admin_token")?.value

    if (!token) {
      return { isValid: false, error: "No token found" }
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "fallback_secret_for_development_only")
    const { payload } = await jwtVerify(token, secret)

    if (payload.role !== "admin") {
      return { isValid: false, error: "Not an admin" }
    }

    return { isValid: true, email: payload.email as string }
  } catch (error) {
    logger.error("Token verification failed:", error)
    return { isValid: false, error: "Invalid token" }
  }
}

export async function getAdminSetupStatus(): Promise<{
  adminSetup: boolean
  currentCount: number
  maxAllowed: number
}> {
  const adminSetup = isAdminSetup()
  return {
    adminSetup,
    currentCount: adminAccounts.length,
    maxAllowed: MAX_ADMIN_ACCOUNTS,
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const session = await getAdminSession()
  return session.isValid
}
