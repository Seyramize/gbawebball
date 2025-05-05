import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { logger } from "@/lib/logger"

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

const dataFilePath = path.join(process.cwd(), "data", "schedule.json")

// Ensure the data directory exists
const ensureDataDir = () => {
  try {
    const dataDir = path.join(process.cwd(), "data")
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    return true
  } catch (error) {
    logger.error("Error creating data directory:", error)
    return false
  }
}

// Initialize the schedule data file if it doesn't exist
const initializeScheduleData = () => {
  try {
    if (!fs.existsSync(dataFilePath)) {
      if (ensureDataDir()) {
        fs.writeFileSync(dataFilePath, JSON.stringify(sampleGames, null, 2))
        logger.info("Schedule data file initialized with sample data")
      }
    }
  } catch (error) {
    logger.error("Error initializing schedule data:", error)
  }
}

// Get all games
export async function GET() {
  try {
    // Initialize data file if it doesn't exist
    initializeScheduleData()

    // Try to read from the data file
    if (fs.existsSync(dataFilePath)) {
      try {
        const data = fs.readFileSync(dataFilePath, "utf8")
        const games = JSON.parse(data)
        return NextResponse.json({ games })
      } catch (readError) {
        logger.error("Error reading schedule data file:", readError)
        // Fall back to sample data if file read fails
        return NextResponse.json({ games: sampleGames })
      }
    } else {
      // Fall back to sample data if file doesn't exist
      return NextResponse.json({ games: sampleGames })
    }
  } catch (error) {
    logger.error("Error in GET /api/schedule:", error)
    // Always return something valid to prevent client errors
    return NextResponse.json({ games: sampleGames })
  }
}

// Create a new game
export async function POST(request: Request) {
  try {
    // Initialize data file if it doesn't exist
    initializeScheduleData()

    const body = await request.json()

    // Validate required fields
    if (!body.team || !body.opponent || !body.location || !body.date || !body.time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create new game object with a unique ID
    const newGame = {
      id: `game_${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Read existing games or create empty array
    let games = []
    if (fs.existsSync(dataFilePath)) {
      try {
        const data = fs.readFileSync(dataFilePath, "utf8")
        games = JSON.parse(data)
      } catch (readError) {
        logger.error("Error reading schedule data file:", readError)
        games = [...sampleGames] // Use sample data if read fails
      }
    } else {
      games = [...sampleGames] // Use sample data if file doesn't exist
    }

    // Add new game
    games.push(newGame)

    // Write to file
    try {
      ensureDataDir()
      fs.writeFileSync(dataFilePath, JSON.stringify(games, null, 2))
    } catch (writeError) {
      logger.error("Error writing schedule data:", writeError)
      return NextResponse.json({ error: "Failed to save game" }, { status: 500 })
    }

    return NextResponse.json({ game: newGame })
  } catch (error) {
    logger.error("Error in POST /api/schedule:", error)
    return NextResponse.json({ error: "Failed to create game" }, { status: 500 })
  }
}
