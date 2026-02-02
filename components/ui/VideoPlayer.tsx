'use client'

import { useState, useRef } from 'react'
import { Play } from 'lucide-react'

interface VideoPlayerProps {
  videoSrc: string
  thumbnailSrc: string
  alt: string
  loop?: boolean
  autoPlayOnClick?: boolean
  showControls?: boolean
  className?: string
}

export default function VideoPlayer({
  videoSrc,
  thumbnailSrc,
  alt,
  loop = true,
  autoPlayOnClick = true,
  showControls = false,
  className = '',
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [thumbnailError, setThumbnailError] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoError) return // Don't try to play if video doesn't exist
    setIsPlaying(true)
    if (videoRef.current && autoPlayOnClick) {
      videoRef.current.play().catch(() => {
        setVideoError(true)
        setIsPlaying(false)
      })
    }
  }

  const handleVideoError = () => {
    setVideoError(true)
    setIsPlaying(false)
  }

  // Placeholder component for when thumbnail doesn't exist
  const Placeholder = () => (
    <div className="w-full aspect-video bg-gradient-to-br from-dark-200 via-dark-300 to-dark-200 flex flex-col items-center justify-center">
      <span className="text-6xl mb-4">🦊</span>
      <p className="text-gray-400 text-sm font-medium">Video bientot disponible</p>
      <p className="text-gray-500 text-xs mt-1">{alt}</p>
    </div>
  )

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
      {!isPlaying ? (
        <>
          {/* Thumbnail or Placeholder */}
          {thumbnailSrc && !thumbnailError ? (
            <img
              src={thumbnailSrc}
              alt={alt}
              className="w-full aspect-video object-cover"
              onError={() => setThumbnailError(true)}
            />
          ) : (
            <Placeholder />
          )}

          {/* Play button overlay */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
            aria-label={`Lire la video: ${alt}`}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-accent/30">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-dark fill-dark ml-1" />
            </div>
          </button>
        </>
      ) : videoError ? (
        // Show placeholder if video fails to load
        <div className="relative">
          <Placeholder />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <p className="text-white text-sm bg-dark-300 px-4 py-2 rounded-lg">
              Video en cours de chargement...
            </p>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={videoSrc}
          loop={loop}
          controls={showControls}
          autoPlay
          muted
          playsInline
          className="w-full aspect-video object-cover"
          onError={handleVideoError}
        >
          Votre navigateur ne supporte pas la lecture video.
        </video>
      )}
    </div>
  )
}
