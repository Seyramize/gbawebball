"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ImageUpload } from "@/components/admin/image-upload"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type Game = {
  id: string
  team: string
  opponent: string
  location: string
  date: string
  time: string
  result?: "win" | "loss" | "draw"
  score?: string
  imageUrl?: string
  featured: boolean
}

interface EditGameModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  game: Game
  onGameUpdated: () => void
}

export function EditGameModal({ open, onOpenChange, game, onGameUpdated }: EditGameModalProps) {
  const [team, setTeam] = useState(game.team)
  const [opponent, setOpponent] = useState(game.opponent)
  const [location, setLocation] = useState(game.location)
  const [date, setDate] = useState(game.date)
  const [time, setTime] = useState(game.time)
  const [result, setResult] = useState(game.result || "")
  const [score, setScore] = useState(game.score || "")
  const [imageUrl, setImageUrl] = useState(game.imageUrl || "")
  const [featured, setFeatured] = useState(game.featured)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  // Update state when game prop changes
  useEffect(() => {
    setTeam(game.team)
    setOpponent(game.opponent)
    setLocation(game.location)
    setDate(game.date)
    setTime(game.time)
    setResult(game.result || "")
    setScore(game.score || "")
    setImageUrl(game.imageUrl || "")
    setFeatured(game.featured)
  }, [game])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!team || !opponent || !location || !date || !time) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      })
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`/api/schedule/${game.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team,
          opponent,
          location,
          date,
          time,
          result: result || undefined,
          score: score || undefined,
          imageUrl,
          featured,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to update game")
      }

      onGameUpdated()
    } catch (error) {
      console.error("Error updating game:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update game",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleImageUploaded = (path: string) => {
    setImageUrl(path)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Game</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="team" className="text-right">
                Team
              </Label>
              <div className="col-span-3">
                <Select value={team} onValueChange={setTeam}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select team" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Vipers">Vipers</SelectItem>
                    <SelectItem value="Hunter Elites">Hunter Elites</SelectItem>
                    <SelectItem value="Hunter Apprentices">Hunter Apprentices</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="opponent" className="text-right">
                Opponent
              </Label>
              <Input
                id="opponent"
                value={opponent}
                onChange={(e) => setOpponent(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="result" className="text-right">
                Result
              </Label>
              <div className="col-span-3">
                <Select value={result} onValueChange={setResult}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select result (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no_result">No result yet</SelectItem>
                    <SelectItem value="win">Win</SelectItem>
                    <SelectItem value="loss">Loss</SelectItem>
                    <SelectItem value="draw">Draw</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="score" className="text-right">
                Score
              </Label>
              <Input
                id="score"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="e.g. 76-68"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="featured" className="text-right">
                Featured
              </Label>
              <div className="flex items-center space-x-2 col-span-3">
                <Switch id="featured" checked={featured} onCheckedChange={setFeatured} />
                <Label htmlFor="featured">Show as featured game</Label>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <Label className="text-right pt-4">Game Image</Label>
              <div className="col-span-3">
                <ImageUpload onImageUploaded={handleImageUploaded} defaultImage={imageUrl} />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Game"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
