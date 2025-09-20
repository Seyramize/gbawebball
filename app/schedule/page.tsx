import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

type Game = {
  id: string
  team: string
  opponent: string
  location: string
  date: string
  time: string
  isHome?: boolean
  competition?: string
  result?: string
  score?: string
  imageUrl?: string
}

// Sample data for games - used when API is not available
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
]

// No client-side fetching - directly use the sample data
async function getGames() {
  // Always use the sample data directly since we're in a server component
  // and API route won't be accessible in preview mode
  return sampleGames
}

export default async function SchedulePage() {
  // Get games from the sample data
  const games = await getGames()

  // Sort games by date (assuming date format is consistent)
  const sortedGames = [...games].sort((a, b) => {
    // This is a simple sort that works with dates in format "Month Day, Year"
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })

  const upcomingGames = sortedGames.filter((game) => !game.result)
  const pastGames = sortedGames.filter((game) => game.result)

  // Group games by team
  const upcomingByTeam = {
    Vipers: upcomingGames.filter((game) => game.team === "Vipers"),
    "Hunter Elites": upcomingGames.filter((game) => game.team === "Hunter Elites"),
    "Hunter Apprentices": upcomingGames.filter((game) => game.team === "Hunter Apprentices"),
  }

  const pastByTeam = {
    Vipers: pastGames.filter((game) => game.team === "Vipers"),
    "Hunter Elites": pastGames.filter((game) => game.team === "Hunter Elites"),
    "Hunter Apprentices": pastGames.filter((game) => game.team === "Hunter Apprentices"),
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/outdoor-basketball-court.png"
            alt="Basketball court"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Game Schedule & Results
          </h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            Follow the Vipers and our academy teams as they compete throughout the season.
          </p>
        </div>
      </section>

      {/* Schedule Tabs */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="upcoming">Upcoming Games</TabsTrigger>
                <TabsTrigger value="results">Past Results</TabsTrigger>
              </TabsList>
            </div>

            {/* Upcoming Games */}
            <TabsContent value="upcoming" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Fixtures</h2>

                {/* Vipers Games */}
                {upcomingByTeam["Vipers"].length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Vipers Basketball (Senior Team)</h3>
                    <div className="space-y-4">
                      {upcomingByTeam["Vipers"].map((game) => (
                        <div
                          key={game.id}
                          className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-3 md:mb-0">
                              <div className="flex items-center">
                                <Badge variant={game.isHome ? "default" : "outline"} className="mr-2">
                                  {game.isHome ? "HOME" : "AWAY"}
                                </Badge>
                                <span className="text-sm text-gray-500">{game.competition}</span>
                              </div>
                              <h4 className="text-lg font-bold mt-1">
                                {game.isHome ? "Vipers vs " : ""}
                                {game.opponent}
                                {!game.isHome ? " vs Vipers" : ""}
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-4">
                              <div className="text-center">
                                <p className="text-xs text-gray-500">DATE</p>
                                <p className="font-medium">{game.date}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500">TIME</p>
                                <p className="font-medium">{game.time}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500">VENUE</p>
                                <p className="font-medium">{game.location}</p>
                              </div>
                            </div>
                          </div>
                          {game.imageUrl && (
                            <div className="mt-4">
                              <Image
                                src={game.imageUrl || "/placeholder.svg"}
                                alt={`${game.team} vs ${game.opponent}`}
                                width={800}
                                height={400}
                                className="rounded-md object-cover w-full h-auto"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hunter Elites Games */}
                {upcomingByTeam["Hunter Elites"].length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Hunter Elites (U17 Team)</h3>
                    <div className="space-y-4">
                      {upcomingByTeam["Hunter Elites"].map((game) => (
                        <div
                          key={game.id}
                          className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-3 md:mb-0">
                              <div className="flex items-center">
                                <Badge variant={game.isHome ? "default" : "outline"} className="mr-2">
                                  {game.isHome ? "HOME" : "AWAY"}
                                </Badge>
                                <span className="text-sm text-gray-500">{game.competition}</span>
                              </div>
                              <h4 className="text-lg font-bold mt-1">
                                {game.isHome ? "Hunter Elites vs " : ""}
                                {game.opponent}
                                {!game.isHome ? " vs Hunter Elites" : ""}
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-4">
                              <div className="text-center">
                                <p className="text-xs text-gray-500">DATE</p>
                                <p className="font-medium">{game.date}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500">TIME</p>
                                <p className="font-medium">{game.time}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500">VENUE</p>
                                <p className="font-medium">{game.location}</p>
                              </div>
                            </div>
                          </div>
                          {game.imageUrl && (
                            <div className="mt-4">
                              <Image
                                src={game.imageUrl || "/placeholder.svg"}
                                alt={`${game.team} vs ${game.opponent}`}
                                width={800}
                                height={400}
                                className="rounded-md object-cover w-full h-auto"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hunter Apprentices Games */}
                {upcomingByTeam["Hunter Apprentices"].length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Hunter Apprentices (U13 Team)</h3>
                    <div className="space-y-4">
                      {upcomingByTeam["Hunter Apprentices"].map((game) => (
                        <div
                          key={game.id}
                          className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-3 md:mb-0">
                              <div className="flex items-center">
                                <Badge variant={game.isHome ? "default" : "outline"} className="mr-2">
                                  {game.isHome ? "HOME" : "AWAY"}
                                </Badge>
                                <span className="text-sm text-gray-500">{game.competition}</span>
                              </div>
                              <h4 className="text-lg font-bold mt-1">
                                {game.isHome ? "Apprentices vs " : ""}
                                {game.opponent}
                                {!game.isHome ? " vs Apprentices" : ""}
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-4">
                              <div className="text-center">
                                <p className="text-xs text-gray-500">DATE</p>
                                <p className="font-medium">{game.date}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500">TIME</p>
                                <p className="font-medium">{game.time}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500">VENUE</p>
                                <p className="font-medium">{game.location}</p>
                              </div>
                            </div>
                          </div>
                          {game.imageUrl && (
                            <div className="mt-4">
                              <Image
                                src={game.imageUrl || "/placeholder.svg"}
                                alt={`${game.team} vs ${game.opponent}`}
                                width={800}
                                height={400}
                                className="rounded-md object-cover w-full h-auto"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {Object.values(upcomingByTeam).every((team) => team.length === 0) && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No upcoming games scheduled at this time.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Past Results */}
            <TabsContent value="results" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Results</h2>

                {/* Vipers Results */}
                {pastByTeam["Vipers"].length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Vipers Basketball (Senior Team)</h3>
                    <div className="space-y-4">
                      {pastByTeam["Vipers"].map((game) => (
                        <div
                          key={game.id}
                          className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-3 md:mb-0">
                              <div className="flex items-center">
                                <Badge variant={game.isHome ? "default" : "outline"} className="mr-2">
                                  {game.isHome ? "HOME" : "AWAY"}
                                </Badge>
                                <span className="text-sm text-gray-500">{game.competition}</span>
                              </div>
                              <h4 className="text-lg font-bold mt-1">
                                {game.isHome ? "Vipers vs " : ""}
                                {game.opponent}
                                {!game.isHome ? " vs Vipers" : ""}
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-4 items-center">
                              <div className="text-center">
                                <p className="text-xs text-gray-500">DATE</p>
                                <p className="font-medium">{game.date}</p>
                              </div>
                              <div className="text-center">
                                <p
                                  className={`text-xl font-bold ${
                                    game.result === "W"
                                      ? "text-green-600"
                                      : game.result === "L"
                                        ? "text-red-600"
                                        : "text-amber-600"
                                  }`}
                                >
                                  {game.score}
                                </p>
                                <Badge
                                  className={`${
                                    game.result === "W"
                                      ? "bg-green-100 text-green-800"
                                      : game.result === "L"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-amber-100 text-amber-800"
                                  }`}
                                >
                                  {game.result === "W" ? "WIN" : game.result === "L" ? "LOSS" : "DRAW"}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          {game.imageUrl && (
                            <div className="mt-4">
                              <Image
                                src={game.imageUrl || "/placeholder.svg"}
                                alt={`${game.team} vs ${game.opponent}`}
                                width={800}
                                height={400}
                                className="rounded-md object-cover w-full h-auto"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hunter Elites Results */}
                {pastByTeam["Hunter Elites"].length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Hunter Elites (U17 Team)</h3>
                    <div className="space-y-4">
                      {pastByTeam["Hunter Elites"].map((game) => (
                        <div
                          key={game.id}
                          className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-3 md:mb-0">
                              <div className="flex items-center">
                                <Badge variant={game.isHome ? "default" : "outline"} className="mr-2">
                                  {game.isHome ? "HOME" : "AWAY"}
                                </Badge>
                                <span className="text-sm text-gray-500">{game.competition}</span>
                              </div>
                              <h4 className="text-lg font-bold mt-1">
                                {game.isHome ? "Hunter Elites vs " : ""}
                                {game.opponent}
                                {!game.isHome ? " vs Hunter Elites" : ""}
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-4 items-center">
                              <div className="text-center">
                                <p className="text-xs text-gray-500">DATE</p>
                                <p className="font-medium">{game.date}</p>
                              </div>
                              <div className="text-center">
                                <p
                                  className={`text-xl font-bold ${
                                    game.result === "W"
                                      ? "text-green-600"
                                      : game.result === "L"
                                        ? "text-red-600"
                                        : "text-amber-600"
                                  }`}
                                >
                                  {game.score}
                                </p>
                                <Badge
                                  className={`${
                                    game.result === "W"
                                      ? "bg-green-100 text-green-800"
                                      : game.result === "L"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-amber-100 text-amber-800"
                                  }`}
                                >
                                  {game.result === "W" ? "WIN" : game.result === "L" ? "LOSS" : "DRAW"}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          {game.imageUrl && (
                            <div className="mt-4">
                              <Image
                                src={game.imageUrl || "/placeholder.svg"}
                                alt={`${game.team} vs ${game.opponent}`}
                                width={800}
                                height={400}
                                className="rounded-md object-cover w-full h-auto"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hunter Apprentices Results */}
                {pastByTeam["Hunter Apprentices"].length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Hunter Apprentices (U13 Team)</h3>
                    <div className="space-y-4">
                      {pastByTeam["Hunter Apprentices"].map((game) => (
                        <div
                          key={game.id}
                          className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-3 md:mb-0">
                              <div className="flex items-center">
                                <Badge variant={game.isHome ? "default" : "outline"} className="mr-2">
                                  {game.isHome ? "HOME" : "AWAY"}
                                </Badge>
                                <span className="text-sm text-gray-500">{game.competition}</span>
                              </div>
                              <h4 className="text-lg font-bold mt-1">
                                {game.isHome ? "Apprentices vs " : ""}
                                {game.opponent}
                                {!game.isHome ? " vs Apprentices" : ""}
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-4 items-center">
                              <div className="text-center">
                                <p className="text-xs text-gray-500">DATE</p>
                                <p className="font-medium">{game.date}</p>
                              </div>
                              <div className="text-center">
                                <p
                                  className={`text-xl font-bold ${
                                    game.result === "W"
                                      ? "text-green-600"
                                      : game.result === "L"
                                        ? "text-red-600"
                                        : "text-amber-600"
                                  }`}
                                >
                                  {game.score}
                                </p>
                                <Badge
                                  className={`${
                                    game.result === "W"
                                      ? "bg-green-100 text-green-800"
                                      : game.result === "L"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-amber-100 text-amber-800"
                                  }`}
                                >
                                  {game.result === "W" ? "WIN" : game.result === "L" ? "LOSS" : "DRAW"}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          {game.imageUrl && (
                            <div className="mt-4">
                              <Image
                                src={game.imageUrl || "/placeholder.svg"}
                                alt={`${game.team} vs ${game.opponent}`}
                                width={800}
                                height={400}
                                className="rounded-md object-cover w-full h-auto"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {Object.values(pastByTeam).every((team) => team.length === 0) && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No past game results to display.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
