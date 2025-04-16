"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type MediaGalleryProps = {
  images: {
    src: string
    alt: string
  }[]
}

export function MediaGallery({ images }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setActiveIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setActiveIndex(null)
    document.body.style.overflow = "auto"
  }

  const goToPrevious = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % images.length)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (activeIndex === null) return

    if (e.key === "ArrowLeft") {
      goToPrevious()
    } else if (e.key === "ArrowRight") {
      goToNext()
    } else if (e.key === "Escape") {
      closeLightbox()
    }
  }

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-gray-800 z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-gray-800 z-10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="relative w-full max-w-4xl max-h-[80vh]">
              <Image
                src={images[activeIndex].src || "/placeholder.svg"}
                alt={images[activeIndex].alt}
                width={1200}
                height={800}
                className="object-contain w-full h-auto max-h-[80vh]"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-gray-800 z-10"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-sm">{images[activeIndex].alt}</p>
              <p className="text-xs text-gray-400">
                {activeIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
