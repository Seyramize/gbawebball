"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type PlayerStats = {
  ppg?: string
  rpg?: string
  apg?: string
  spg?: string
  bpg?: string
}

type PlayerProfileProps = {
  player: {
    name: string
    position: string
    number: number
    image: string
    bio: string
    stats: PlayerStats
    quote?: string
  }
}

export function PlayerProfileCard({ player }: PlayerProfileProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative">
        <div className="relative h-80">
          <Image
            src={player.image || "/placeholder.svg"}
            alt={player.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
          />
        </div>
        <div className="absolute top-0 right-0 bg-amber-900 text-white text-xl font-bold w-10 h-10 flex items-center justify-center">
          {player.number}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900">{player.name}</h3>
        <p className="text-amber-700 mb-3">{player.position}</p>
        <p className="text-gray-600 mb-4 line-clamp-2">{player.bio}</p>

        <Button
          onClick={() => setShowDetails(!showDetails)}
          variant="outline"
          className="w-full border-amber-500 text-amber-900 hover:bg-amber-50"
        >
          {showDetails ? "Hide Details" : "View Details"}
        </Button>

        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {player.stats.ppg && (
                <div className="text-center">
                  <p className="text-xl font-bold text-amber-900">{player.stats.ppg}</p>
                  <p className="text-xs text-gray-500">PPG</p>
                </div>
              )}
              {player.stats.rpg && (
                <div className="text-center">
                  <p className="text-xl font-bold text-amber-900">{player.stats.rpg}</p>
                  <p className="text-xs text-gray-500">RPG</p>
                </div>
              )}
              {player.stats.apg && (
                <div className="text-center">
                  <p className="text-xl font-bold text-amber-900">{player.stats.apg}</p>
                  <p className="text-xs text-gray-500">APG</p>
                </div>
              )}
              {player.stats.spg && (
                <div className="text-center">
                  <p className="text-xl font-bold text-amber-900">{player.stats.spg}</p>
                  <p className="text-xs text-gray-500">SPG</p>
                </div>
              )}
              {player.stats.bpg && (
                <div className="text-center">
                  <p className="text-xl font-bold text-amber-900">{player.stats.bpg}</p>
                  <p className="text-xs text-gray-500">BPG</p>
                </div>
              )}
            </div>

            {player.quote && (
              <div className="bg-amber-50 p-3 rounded-lg italic text-gray-700 text-sm">"{player.quote}"</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
