"use client"

import { PlayIcon } from "@heroicons/react/24/solid"

interface VideoPlayerProps {
  thumbnailUrl: string
  onPlay?: () => void
}


export function VideoPlayer({ thumbnailUrl, onPlay }: VideoPlayerProps) {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
      {/* Thumbnail image */}
      <img src={thumbnailUrl || "/placeholder.svg"} alt="Video thumbnail" className="w-full h-full object-cover" />

      {/* Play button overlay */}
      <button
        onClick={onPlay}
        className="absolute inset-0 flex items-center justify-center group"
        aria-label="Play video"
      >
        <div className="w-16 h-16 bg-[#7c7c7cca] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <PlayIcon className="w-7 h-7 text-transparent stroke-white ml-1" />
        </div>
      </button>
    </div>
  )
}
