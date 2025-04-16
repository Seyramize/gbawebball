"use client"

import Image from "next/image"
import { useState } from "react"

// This component demonstrates how to implement a simple image gallery
// You can use this pattern throughout your site for displaying multiple images
export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Replace these with your actual image paths
  const images = [
    {
      src: "/images/academy-court.jpg",
      alt: "Gbawe Basketball Academy Court",
      caption: "Our main training court",
    },
    {
      src: "/images/training-session.jpg",
      alt: "Hunter Cubs Training Session",
      caption: "Young athletes developing their skills",
    },
    {
      src: "/images/team-huddle.jpg",
      alt: "Team Huddle",
      caption: "Unity and teamwork in action",
    },
    {
      src: "/images/coach-instruction.jpg",
      alt: "Coach Instruction",
      caption: "Learning the Hunter's Way",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={images[activeIndex].src || "/placeholder.svg"}
          alt={images[activeIndex].alt}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={activeIndex === 0}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
          <p>{images[activeIndex].caption}</p>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border-2 ${
              index === activeIndex ? "border-amber-500" : "border-transparent"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
