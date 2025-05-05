"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import { Pencil, Trash2, Plus, CalendarIcon, Clock, MapPin } from "lucide-react"

// Sample data for games
const sampleGames = [
  {
    id: "game_001",
    team: "Vipers",
    opponent: "Accra Lions",
    date: "April 25, 2025",
    time: "4:00 PM",
    location: "Gbawe Community Court",
    isHome: true,
    competition: "Accra Division 2 League",
  },
  {
    id: "game_002",
    team: "Vipers",
    opponent: "Tema Sharks",
    date: "May 2, 2025",
    time: "6:30 PM",
    location: "Tema Community 4 Court",
    isHome: false,
    competition: "Accra Division 2 League",
  },
  {
    id: "game_003",
    team: "Hunter Elite",
    opponent: "Accra Academy",
    date: "April 22, 2025",
    time: "2:00 PM",
    location: "Gbawe Community Court",
    isHome: true,
    competition: "Greater Accra Youth League",
  },
  {
    id: "game_004",
    team: "Hunter Apprentices",
    opponent: "Dansoman Youth",
    date: "April 18, 2025",
    time: "10:00 AM",
    location: "Gbawe Community Court",
    isHome: true,
    competition: "Junior Development League",
  },
  // Past games with results
  {
    id: "game_005",
    team: "Vipers",
    opponent: "Osu Clippers",
    date: "April 11, 2025",
    time: "4:00 PM",
    location: "Gbawe Community Court",
    isHome: true,
    competition: "Accra Division 2 League",
    result: "W",
    score: "78-65",
  },
  {
    id: "game_006",
    team: "Hunter Elite",
    opponent: "Presec Legon",
    date: "April 8, 2025",
    time: "3:30 PM",
    location: "Presec Legon Court",
    isHome: false,
    competition: "Greater Accra Youth League",
    result: "W",
    score: "65-58",
  },
]

export default function ScheduleManagement() {
  const [games, setGames] = useState(sampleGames)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  // Get games from local storage if available
  useEffect(() => {
    const storedGames = localStorage.getItem("gbawe_games")
    if (storedGames) {
      try {
        setGames(JSON.parse(storedGames))
      } catch (error) {
        console.error("Error parsing stored games:", error)
      }
    }
  }, [])

  // Add dummy data
  const addDummyGame = () => {
    const newGame = {
      id: `game_${Date.now()}`,
      team: "Vipers",
      opponent: `Opponent ${Math.floor(Math.random() * 100)}`,
      date: "May 15, 2025",
      time: "7:00 PM",
      location: "Gbawe Community Court",
      isHome: true,
      competition: "Friendly Match",
    }

    const updatedGames = [...games, newGame]
    setGames(updatedGames)
    localStorage.setItem("gbawe_games", JSON.stringify(updatedGames))
    toast({
      title: "Game added",
      description: "New game has been added to the schedule.",
    })
  }

  // Delete game
  const deleteGame = (id: string) => {
    const updatedGames = games.filter((game) => game.id !== id)
    setGames(updatedGames)
    localStorage.setItem("gbawe_games", JSON.stringify(updatedGames))
    toast({
      title: "Game deleted",
      description: "Game has been removed from the schedule.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Schedule Management</h2>
        <Button onClick={addDummyGame}>
          <Plus className="mr-2 h-4 w-4" /> Add Game
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Games</TabsTrigger>
          <TabsTrigger value="past">Past Games</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Games</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Team</TableHead>
                    <TableHead>Opponent</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {games
                    .filter((game) => !game.result)
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .map((game) => (
                      <TableRow key={game.id}>
                        <TableCell>{game.team}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {game.opponent}
                            <Badge variant={game.isHome ? "default" : "outline"}>{game.isHome ? "HOME" : "AWAY"}</Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                            {game.date}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                            {game.time}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                            {game.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => deleteGame(game.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past">
          <Card>
            <CardHeader>
              <CardTitle>Past Games</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Team</TableHead>
                    <TableHead>Opponent</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Result</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {games
                    .filter((game) => game.result)
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((game) => (
                      <TableRow key={game.id}>
                        <TableCell>{game.team}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {game.opponent}
                            <Badge variant={game.isHome ? "default" : "outline"}>{game.isHome ? "HOME" : "AWAY"}</Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                            {game.date}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              game.result === "W"
                                ? "bg-green-100 text-green-800"
                                : game.result === "L"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-amber-100 text-amber-800"
                            }
                          >
                            {game.result === "W" ? "WIN" : game.result === "L" ? "LOSS" : "DRAW"}
                          </Badge>
                        </TableCell>
                        <TableCell>{game.score}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => deleteGame(game.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
