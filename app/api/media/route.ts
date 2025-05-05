import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { verifyAdminSession } from "@/lib/admin-auth"

// Get all media files
export async function GET(request: NextRequest) {
  try {
    // Verify admin session
    const sessionValid = await verifyAdminSession()
    if (!sessionValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category") || "all"

    // Define the uploads directory
    const uploadsDir = path.join(process.cwd(), "public", "uploads")

    // Check if directory exists
    if (!fs.existsSync(uploadsDir)) {
      return NextResponse.json({ files: [] })
    }

    // Read all files in the directory
    const files = fs.readdirSync(uploadsDir)

    // Filter files by category if needed
    const mediaFiles = files
      .map((file) => {
        const filePath = `/uploads/${file}`
        const stats = fs.statSync(path.join(uploadsDir, file))
        const fileType = getFileType(file)

        return {
          name: file,
          path: filePath,
          url: filePath,
          size: stats.size,
          type: fileType,
          createdAt: stats.birthtime,
          updatedAt: stats.mtime,
        }
      })
      .filter((file) => {
        if (category === "all") return true
        return file.type === category
      })
      .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())

    return NextResponse.json({ files: mediaFiles })
  } catch (error) {
    console.error("Error fetching media files:", error)
    return NextResponse.json({ error: "Failed to fetch media files" }, { status: 500 })
  }
}

// Delete a media file
export async function DELETE(request: NextRequest) {
  try {
    // Verify admin session
    const sessionValid = await verifyAdminSession()
    if (!sessionValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { filePath } = await request.json()

    if (!filePath) {
      return NextResponse.json({ error: "File path is required" }, { status: 400 })
    }

    // Extract the filename from the path
    const filename = filePath.split("/").pop()

    // Define the file path
    const fullPath = path.join(process.cwd(), "public", "uploads", filename)

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 })
    }

    // Delete the file
    fs.unlinkSync(fullPath)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting media file:", error)
    return NextResponse.json({ error: "Failed to delete media file" }, { status: 500 })
  }
}

// Helper function to determine file type
function getFileType(filename: string): string {
  const extension = filename.split(".").pop()?.toLowerCase() || ""

  const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp", "svg"]
  const videoExtensions = ["mp4", "webm", "ogg", "mov"]
  const documentExtensions = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt"]

  if (imageExtensions.includes(extension)) return "image"
  if (videoExtensions.includes(extension)) return "video"
  if (documentExtensions.includes(extension)) return "document"

  return "other"
}
