import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function SchedulePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920"
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
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Vipers Basketball (Senior Team)</h3>
                  <div className="space-y-4">
                    {[
                      {
                        opponent: "Accra Lions",
                        date: "April 25, 2025",
                        time: "4:00 PM",
                        location: "Gbawe Community Court",
                        isHome: true,
                        competition: "Accra Division 2 League",
                      },
                      {
                        opponent: "Tema Sharks",
                        date: "May 2, 2025",
                        time: "6:30 PM",
                        location: "Tema Community 4 Court",
                        isHome: false,
                        competition: "Accra Division 2 League",
                      },
                      {
                        opponent: "Legon Knights",
                        date: "May 9, 2025",
                        time: "4:00 PM",
                        location: "Gbawe Community Court",
                        isHome: true,
                        competition: "Accra Division 2 League",
                      },
                    ].map((game, i) => (
                      <div
                        key={i}
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
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hunter Elite Games */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Hunter Elite (U17 Team)</h3>
                  <div className="space-y-4">
                    {[
                      {
                        opponent: "Accra Academy",
                        date: "April 22, 2025",
                        time: "2:00 PM",
                        location: "Gbawe Community Court",
                        isHome: true,
                        competition: "Greater Accra Youth League",
                      },
                      {
                        opponent: "Achimota School",
                        date: "April 29, 2025",
                        time: "3:30 PM",
                        location: "Achimota School Court",
                        isHome: false,
                        competition: "Greater Accra Youth League",
                      },
                    ].map((game, i) => (
                      <div
                        key={i}
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
                              {game.isHome ? "Hunter Elite vs " : ""}
                              {game.opponent}
                              {!game.isHome ? " vs Hunter Elite" : ""}
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
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hunter Apprentices Games */}
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Hunter Apprentices (U13 Team)</h3>
                  <div className="space-y-4">
                    {[
                      {
                        opponent: "Dansoman Youth",
                        date: "April 18, 2025",
                        time: "10:00 AM",
                        location: "Gbawe Community Court",
                        isHome: true,
                        competition: "Junior Development League",
                      },
                      {
                        opponent: "Kaneshie Stars",
                        date: "May 2, 2025",
                        time: "11:00 AM",
                        location: "Kaneshie Sports Complex",
                        isHome: false,
                        competition: "Junior Development League",
                      },
                    ].map((game, i) => (
                      <div
                        key={i}
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Past Results */}
            <TabsContent value="results" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Results</h2>

                {/* Vipers Results */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Vipers Basketball (Senior Team)</h3>
                  <div className="space-y-4">
                    {[
                      {
                        opponent: "Osu Clippers",
                        date: "April 11, 2025",
                        score: "78-65",
                        result: "W",
                        isHome: true,
                        competition: "Accra Division 2 League",
                      },
                      {
                        opponent: "Dansoman Bulls",
                        date: "April 4, 2025",
                        score: "82-79",
                        result: "W",
                        isHome: false,
                        competition: "Accra Division 2 League",
                      },
                      {
                        opponent: "Tudu Galaxy",
                        date: "March 28, 2025",
                        score: "71-75",
                        result: "L",
                        isHome: true,
                        competition: "Accra Division 2 League",
                      },
                      {
                        opponent: "Nungua Warriors",
                        date: "March 21, 2025",
                        score: "88-72",
                        result: "W",
                        isHome: false,
                        competition: "Accra Division 2 League",
                      },
                    ].map((game, i) => (
                      <div
                        key={i}
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
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hunter Elite Results */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Hunter Elite (U17 Team)</h3>
                  <div className="space-y-4">
                    {[
                      {
                        opponent: "Presec Legon",
                        date: "April 8, 2025",
                        score: "65-58",
                        result: "W",
                        isHome: false,
                        competition: "Greater Accra Youth League",
                      },
                      {
                        opponent: "St. Augustine's College",
                        date: "April 1, 2025",
                        score: "72-54",
                        result: "W",
                        isHome: true,
                        competition: "Greater Accra Youth League",
                      },
                      {
                        opponent: "Mfantsipim School",
                        date: "March 25, 2025",
                        score: "61-68",
                        result: "L",
                        isHome: false,
                        competition: "Greater Accra Youth League",
                      },
                    ].map((game, i) => (
                      <div
                        key={i}
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
                              {game.isHome ? "Hunter Elite vs " : ""}
                              {game.opponent}
                              {!game.isHome ? " vs Hunter Elite" : ""}
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
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hunter Apprentices Results */}
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Hunter Apprentices (U13 Team)</h3>
                  <div className="space-y-4">
                    {[
                      {
                        opponent: "Teshie Youth",
                        date: "April 4, 2025",
                        score: "45-38",
                        result: "W",
                        isHome: true,
                        competition: "Junior Development League",
                      },
                      {
                        opponent: "Madina Stars",
                        date: "March 28, 2025",
                        score: "42-42",
                        result: "D",
                        isHome: false,
                        competition: "Junior Development League",
                      },
                      {
                        opponent: "Labadi Youngsters",
                        date: "March 21, 2025",
                        score: "39-44",
                        result: "L",
                        isHome: true,
                        competition: "Junior Development League",
                      },
                    ].map((game, i) => (
                      <div
                        key={i}
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
