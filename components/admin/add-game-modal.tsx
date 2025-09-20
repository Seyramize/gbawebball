"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ImageUpload } from "@/components/admin/image-upload"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AddGameModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onGameAdded: () => void
}

export function AddGameModal({ open, onOpenChange, onGameAdded }: AddGameModalProps) {
  const [team, setTeam] = useState("")
  const [opponent, setOpponent] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [featured, setFeatured] = useState(false)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

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
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team,
          opponent,
          location,
          date,
          time,
          imageUrl,
          featured,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to add game")
      }

      resetForm()
      onGameAdded()
    } catch (error) {
      console.error("Error adding game:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add game",
      })
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setTeam("")
    setOpponent("")
    setLocation("")
    setDate("")
    setTime("")
    setImageUrl("")
    setFeatured(false)
  }

  const handleImageUploaded = (path: string) => {
    setImageUrl(path)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Game</DialogTitle>
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
                  Adding...
                </>
              ) : (
                "Add Game"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
