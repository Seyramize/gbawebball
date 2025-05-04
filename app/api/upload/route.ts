import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"
import { v4 as uuidv4 } from "uuid"
import { logger } from "@/lib/logger"
import { isAdminAuthenticated } from "@/lib/admin-auth"

export async function POST(request: Request) {
  try {
    // Check if user is authenticated as admin
    const isAdmin = await isAdminAuthenticated()
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Process the form data
    const formData = await request.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"]
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, WebP, and GIF are supported." },
        { status: 400 },
      )
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "File size exceeds 5MB limit" }, { status: 400 })
    }

    // Create a unique filename
    const fileExtension = file.name.split(".").pop()
    const fileName = `${uuidv4()}.${fileExtension}`
    const relativePath = `/images/shop/products/${fileName}`
    const absolutePath = join(process.cwd(), "public", relativePath)

    // Convert the file to a Buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Save the file to the public directory
    await writeFile(absolutePath, buffer)

    logger.info("Image uploaded successfully", { fileName, size: file.size })

    // Return the relative path to the file
    return NextResponse.json({
      success: true,
      filePath: relativePath,
      fileName,
      fileSize: file.size,
      fileType: file.type,
    })
  } catch (error) {
    logger.error("Error uploading image", { error })
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 })
  }
}
