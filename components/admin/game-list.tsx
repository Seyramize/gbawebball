"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Edit, Trash2, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { AddGameModal } from "./add-game-modal"
import { EditGameModal } from "./edit-game-modal"
import { DeleteGameModal } from "./delete-game-modal"
import { format } from "date-fns"

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

export function GameList() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("upcoming")
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/schedule")
      if (!response.ok) {
        throw new Error("Failed to fetch games")
      }
      const data = await response.json()
      setGames(data.games || [])
    } catch (error) {
      console.error("Error fetching games:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch games",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleAddGame = () => {
    setAddModalOpen(true)
  }

  const handleEditGame = (game: Game) => {
    setSelectedGame(game)
    setEditModalOpen(true)
  }

  const handleDeleteGame = (game: Game) => {
    setSelectedGame(game)
    setDeleteModalOpen(true)
  }

  const handleGameAdded = () => {
    fetchGames()
    setAddModalOpen(false)
    toast({
      title: "Success",
      description: "Game added successfully",
    })
  }

  const handleGameUpdated = () => {
    fetchGames()
    setEditModalOpen(false)
    toast({
      title: "Success",
      description: "Game updated successfully",
    })
  }

  const handleGameDeleted = () => {
    fetchGames()
    setDeleteModalOpen(false)
    toast({
      title: "Success",
      description: "Game deleted successfully",
    })
  }

  const isUpcoming = (game: Game) => {
    if (game.result) return false
    const gameDate = new Date(`${game.date}T${game.time}`)
    return gameDate > new Date()
  }

  const isPast = (game: Game) => {
    if (game.result) return true
    const gameDate = new Date(`${game.date}T${game.time}`)
    return gameDate <= new Date()
  }

  const upcomingGames = games.filter(isUpcoming)
  const pastGames = games.filter(isPast)

  const formatGameDate = (dateStr: string) => {
    try {
      return format(new Date(dateStr), "MMMM d, yyyy")
    } catch (e) {
      return dateStr
    }
  }

  const formatGameTime = (timeStr: string) => {
    try {
      return format(new Date(`2000-01-01T${timeStr}`), "h:mm a")
    } catch (e) {
      return timeStr
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Games</h2>
        <Button onClick={handleAddGame}>
          <Plus className="h-4 w-4 mr-2" />
          Add Game
        </Button>
      </div>

      <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Games ({upcomingGames.length})</TabsTrigger>
          <TabsTrigger value="past">Past Games ({pastGames.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
            </div>
          ) : upcomingGames.length === 0 ? (
            <div className="text-center py-12 border rounded-md bg-gray-50">
              <p className="text-gray-500">No upcoming games</p>
              <Button variant="outline" className="mt-4" onClick={handleAddGame}>
                Add Game
              </Button>
            </div>
          ) : (
            <div className="grid gap-4">
              {upcomingGames.map((game) => (
                <Card key={game.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{game.team}</span>
                          <span>vs</span>
                          <span className="font-semibold">{game.opponent}</span>
                          {game.featured && (
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Featured</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {formatGameDate(game.date)} at {formatGameTime(game.time)}
                        </div>
                        <div className="text-sm text-gray-500">{game.location}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleEditGame(game)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => handleDeleteGame(game)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {game.imageUrl && (
                      <div className="mt-4">
                        <img
                          src={game.imageUrl || "/placeholder.svg"}
                          alt={`${game.team} vs ${game.opponent}`}
                          className="w-full h-40 object-cover rounded-md"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
            </div>
          ) : pastGames.length === 0 ? (
            <div className="text-center py-12 border rounded-md bg-gray-50">
              <p className="text-gray-500">No past games</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {pastGames.map((game) => (
                <Card key={game.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{game.team}</span>
                          <span>vs</span>
                          <span className="font-semibold">{game.opponent}</span>
                          {game.featured && (
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Featured</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {formatGameDate(game.date)} at {formatGameTime(game.time)}
                        </div>
                        <div className="text-sm text-gray-500">{game.location}</div>
                        {game.result && (
                          <div className="mt-2">
                            <span
                              className={`text-xs px-2 py-1 rounded ${
                                game.result === "win"
                                  ? "bg-green-100 text-green-800"
                                  : game.result === "loss"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {game.result.toUpperCase()}
                            </span>
                            {game.score && <span className="ml-2 text-sm font-medium">{game.score}</span>}
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleEditGame(game)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => handleDeleteGame(game)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {game.imageUrl && (
                      <div className="mt-4">
                        <img
                          src={game.imageUrl || "/placeholder.svg"}
                          alt={`${game.team} vs ${game.opponent}`}
                          className="w-full h-40 object-cover rounded-md"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <AddGameModal open={addModalOpen} onOpenChange={setAddModalOpen} onGameAdded={handleGameAdded} />

      {selectedGame && (
        <>
          <EditGameModal
            open={editModalOpen}
            onOpenChange={setEditModalOpen}
            game={selectedGame}
            onGameUpdated={handleGameUpdated}
          />
          <DeleteGameModal
            open={deleteModalOpen}
            onOpenChange={setDeleteModalOpen}
            gameId={selectedGame.id}
            onGameDeleted={handleGameDeleted}
          />
        </>
      )}
    </div>
  )
}
