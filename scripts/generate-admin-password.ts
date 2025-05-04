import { hash } from "bcryptjs"

// This script is meant to be run from the command line
// It generates a bcrypt hash for the admin password
// Usage: npx ts-node scripts/generate-admin-password.ts yourpassword

async function generatePasswordHash() {
  const password = process.argv[2]

  if (!password) {
    console.error("Please provide a password as an argument")
    process.exit(1)
  }

  try {
    const hashedPassword = await hash(password, 10)
    console.log("\nHashed Password:")
    console.log(hashedPassword)
    console.log("\nAdd this to your .env file as ADMIN_PASSWORD_HASH")
  } catch (error) {
    console.error("Error generating hash:", error)
  }
}

generatePasswordHash()
