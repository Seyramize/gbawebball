"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play, Volume2, VolumeX } from "lucide-react"

type VideoPlayerProps = {
  videoUrl: string
  thumbnailUrl: string
  title: string
}

export function VideoPlayer({ videoUrl, thumbnailUrl, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Check if the video URL is a local file or YouTube URL
  const isLocalVideo = videoUrl.startsWith('/') || videoUrl.includes('.mp4') || videoUrl.includes('.mov') || videoUrl.includes('.webm')

  const handlePlayClick = () => {
    setIsPlaying(true)
    if (isLocalVideo && videoRef.current) {
      videoRef.current.play()
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (isLocalVideo && videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  return (
    <div className="relative w-full h-full">
      {!isPlaying ? (
        <>
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <button
              onClick={handlePlayClick}
              className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center transform transition-transform hover:scale-110"
              aria-label="Play video"
            >
              <Play className="h-8 w-8 text-white" />
            </button>
          </div>
        </>
      ) : isLocalVideo ? (
        <video
          ref={videoRef}
          src={videoUrl}
          title={title}
          controls
          muted={isMuted}
          className="absolute top-0 left-0 w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
        />
      ) : (
        <iframe
          ref={iframeRef}
          src={`${videoUrl}${isMuted ? "?mute=1" : ""}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        ></iframe>
      )}

      {isPlaying && !isLocalVideo && (
        <div className="absolute bottom-4 right-4 z-10">
          <button
            onClick={toggleMute}
            className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
          </button>
        </div>
      )}
    </div>
  )
}
