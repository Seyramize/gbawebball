"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageUpload } from "@/components/admin/image-upload"
import { Loader2, Trash2, Copy, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type MediaFile = {
  name: string
  path: string
  url: string
  size: number
  type: string
  createdAt: string
  updatedAt: string
}

export function MediaLibrary() {
  const [files, setFiles] = useState<MediaFile[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchMediaFiles(activeTab)
  }, [activeTab])

  const fetchMediaFiles = async (category: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/media?category=${category}`)
      if (!response.ok) {
        throw new Error("Failed to fetch media files")
      }
      const data = await response.json()
      setFiles(data.files)
    } catch (error) {
      console.error("Error fetching media files:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch media files",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleImageUploaded = (imagePath: string) => {
    if (imagePath) {
      setUploadDialogOpen(false)
      fetchMediaFiles(activeTab)
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      })
    }
  }

  const handleDeleteFile = async (filePath: string) => {
    if (!confirm("Are you sure you want to delete this file?")) {
      return
    }

    try {
      const response = await fetch("/api/media", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filePath }),
      })

      if (!response.ok) {
        throw new Error("Failed to delete file")
      }

      toast({
        title: "Success",
        description: "File deleted successfully",
      })

      fetchMediaFiles(activeTab)
    } catch (error) {
      console.error("Error deleting file:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete file",
      })
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied",
      description: "Path copied to clipboard",
    })
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Media Library</h1>
        <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button>Upload New Image</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Image</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <ImageUpload onImageUploaded={handleImageUploaded} />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Files</TabsTrigger>
          <TabsTrigger value="image">Images</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
          <TabsTrigger value="document">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
            </div>
          ) : files.length === 0 ? (
            <div className="text-center py-12 border rounded-md bg-gray-50">
              <p className="text-gray-500">No files found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {files.map((file) => (
                <Card key={file.path} className="overflow-hidden">
                  <div className="relative aspect-square bg-gray-100">
                    {file.type === "image" ? (
                      <>
                        <Image
                          src={file.url || "/placeholder.svg"}
                          alt={file.name}
                          fill
                          className="object-cover cursor-pointer"
                          onClick={() => setPreviewImage(file.url)}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200" />
                      </>
                    ) : file.type === "video" ? (
                      <div className="flex items-center justify-center h-full">
                        <video src={file.url} className="max-h-full max-w-full" controls />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-4xl text-gray-400">{file.type === "document" ? "📄" : "📁"}</div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <p className="text-sm font-medium truncate" title={file.name}>
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" size="icon" onClick={() => copyToClipboard(file.url)} title="Copy path">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.open(file.url, "_blank")}
                        title="Open in new tab"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDeleteFile(file.path)}
                        title="Delete file"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Image Preview Dialog */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src={previewImage || "/placeholder.svg"}
              alt="Preview"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain"
            />
            <Button className="absolute top-4 right-4" variant="destructive" onClick={() => setPreviewImage(null)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
