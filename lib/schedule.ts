import { logger } from "./logger"

// In a real application, this would interact with a database
// For this example, we'll use an in-memory store
const schedules: Record<string, GameSchedule> = {}

export interface GameSchedule {
  id: string
  team: "Vipers" | "Hunter Elites" | "Hunter Apprentices"
  opponent: string
  date: string
  time: string
  location: string
  isHome: boolean
  competition: string
  result?: string
  score?: string
  imageUrl?: string
  createdAt: string
  updatedAt: string
}

// Initialize with some sample schedules
export function initializeSchedules() {
  const games = [
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
      team: "Hunter Elites",
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
      team: "Hunter Elites",
      opponent: "Presec Legon",
      date: "April 8, 2025",
      time: "3:30 PM",
      location: "Presec Legon Court",
      isHome: false,
      competition: "Greater Accra Youth League",
      result: "W",
      score: "65-58",
    },
  ] as const

  games.forEach((game) => {
    schedules[game.id] = {
      ...game,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  })

  logger.info("Game schedules initialized", { gameCount: games.length })
}

// Get all games
export async function getAllGames(): Promise<GameSchedule[]> {
  return Object.values(schedules)
}

// Get upcoming games (no result)
export async function getUpcomingGames(): Promise<GameSchedule[]> {
  return Object.values(schedules).filter((game) => !game.result)
}

// Get past games (with result)
export async function getPastGames(): Promise<GameSchedule[]> {
  return Object.values(schedules).filter((game) => game.result)
}

// Get games by team
export async function getGamesByTeam(team: string): Promise<GameSchedule[]> {
  return Object.values(schedules).filter((game) => game.team === team)
}

// Get a game by ID
export async function getGameById(id: string): Promise<GameSchedule | null> {
  return schedules[id] || null
}

// Create a new game
export async function createGame(
  gameData: Omit<GameSchedule, "id" | "createdAt" | "updatedAt">,
): Promise<GameSchedule> {
  const id = `game_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

  const game: GameSchedule = {
    ...gameData,
    id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  schedules[id] = game
  logger.info("Game created", { gameId: id, opponent: game.opponent })

  return game
}

// Update a game
export async function updateGame(id: string, updates: Partial<GameSchedule>): Promise<GameSchedule> {
  if (!schedules[id]) {
    throw new Error(`Game with ID ${id} not found`)
  }

  schedules[id] = {
    ...schedules[id],
    ...updates,
    updatedAt: new Date().toISOString(),
  }

  logger.info("Game updated", { gameId: id, updates: Object.keys(updates) })

  return schedules[id]
}

// Delete a game
export async function deleteGame(id: string): Promise<boolean> {
  if (!schedules[id]) {
    return false
  }

  delete schedules[id]
  logger.info("Game deleted", { gameId: id })

  return true
}

// Initialize schedules on startup
initializeSchedules()
