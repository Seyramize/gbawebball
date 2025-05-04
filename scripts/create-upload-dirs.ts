import fs from "fs"
import path from "path"
import { logger } from "../lib/logger"

// Define the directories to create
const directories = ["public/images/shop/products", "public/images/uploads", "public/images/uploads/temp"]

// Create directories if they don't exist
directories.forEach((dir) => {
  const fullPath = path.join(process.cwd(), dir)

  if (!fs.existsSync(fullPath)) {
    try {
      fs.mkdirSync(fullPath, { recursive: true })
      logger.info(`Created directory: ${fullPath}`)
    } catch (error) {
      logger.error(`Failed to create directory: ${fullPath}`, { error })
    }
  } else {
    logger.info(`Directory already exists: ${fullPath}`)
  }
})

logger.info("Upload directories setup complete")
