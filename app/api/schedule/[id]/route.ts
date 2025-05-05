import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { verifyAdminSession } from "@/lib/admin-auth"

const dataFilePath = path.join(process.cwd(), "data", "schedule.json")

// Get a specific game
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Check if the data file exists
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 })
    }

    // Read the data file
    const data = fs.readFileSync(dataFilePath, "utf8")
    const games = JSON.parse(data)

    // Find the game
    const game = games.find((g: any) => g.id === id)

    if (!game) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 })
    }

    return NextResponse.json({ game })
  } catch (error) {
    console.error("Error fetching game:", error)
    return NextResponse.json({ error: "Failed to fetch game" }, { status: 500 })
  }
}

// Update a game
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify admin session
    const sessionValid = await verifyAdminSession()
    if (!sessionValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = params.id
    const body = await request.json()

    // Validate required fields
    if (!body.team || !body.opponent || !body.location || !body.date || !body.time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if the data file exists
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 })
    }

    // Read the data file
    const data = fs.readFileSync(dataFilePath, "utf8")
    const games = JSON.parse(data)

    // Find the game index
    const gameIndex = games.findIndex((g: any) => g.id === id)

    if (gameIndex === -1) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 })
    }

    // Update the game
    games[gameIndex] = {
      ...games[gameIndex],
      team: body.team,
      opponent: body.opponent,
      location: body.location,
      date: body.date,
      time: body.time,
      result: body.result,
      score: body.score,
      imageUrl: body.imageUrl,
      featured: body.featured,
      updatedAt: new Date().toISOString(),
    }

    // Write to file
    fs.writeFileSync(dataFilePath, JSON.stringify(games, null, 2))

    return NextResponse.json({ game: games[gameIndex] })
  } catch (error) {
    console.error("Error updating game:", error)
    return NextResponse.json({ error: "Failed to update game" }, { status: 500 })
  }
}

// Delete a game
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify admin session
    const sessionValid = await verifyAdminSession()
    if (!sessionValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = params.id

    // Check if the data file exists
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 })
    }

    // Read the data file
    const data = fs.readFileSync(dataFilePath, "utf8")
    const games = JSON.parse(data)

    // Find the game index
    const gameIndex = games.findIndex((g: any) => g.id === id)

    if (gameIndex === -1) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 })
    }

    // Remove the game
    games.splice(gameIndex, 1)

    // Write to file
    fs.writeFileSync(dataFilePath, JSON.stringify(games, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting game:", error)
    return NextResponse.json({ error: "Failed to delete game" }, { status: 500 })
  }
}
