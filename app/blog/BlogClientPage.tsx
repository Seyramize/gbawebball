"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayerProfileCard } from "@/components/player-profile-card"
import { MediaGallery } from "@/components/media-gallery"
import { VideoPlayer } from "@/components/video-player"
import { SubmitStoryForm } from "@/components/submit-story-form"

export default function BlogClientPage() {
  // Sample featured content
  const featuredHighlight = {
    title: "Vipers vs. Accra Lions - Game Highlights",
    description: "Watch the full highlights from our thrilling victory against the Accra Lions.",
    date: "April 10, 2025",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    thumbnailUrl: "/placeholder.svg?height=600&width=1200",
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Basketball game"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Inside the Hunt - Stories, Highlights & Lessons from the Court
          </h1>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-center text-gray-900">Featured Highlight</h2>

            <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video relative">
                <VideoPlayer
                  videoUrl={featuredHighlight.videoUrl}
                  thumbnailUrl={featuredHighlight.thumbnailUrl}
                  title={featuredHighlight.title}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-amber-900">{featuredHighlight.title}</h3>
                  <span className="text-sm text-gray-500">{featuredHighlight.date}</span>
                </div>
                <p className="text-gray-700 mb-4">{featuredHighlight.description}</p>
                <div className="flex justify-end">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Watch Full Game</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-gray-900">Browse Our Content</h2>

          <Tabs defaultValue="highlights" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-4xl grid-cols-3 md:grid-cols-5">
                <TabsTrigger value="highlights">Game Highlights</TabsTrigger>
                <TabsTrigger value="inside-hunt">Inside The Hunt</TabsTrigger>
                <TabsTrigger value="coach">Coach's Corner</TabsTrigger>
                <TabsTrigger value="journal">Hunter's Journal</TabsTrigger>
                <TabsTrigger value="dream">Dream Diaries</TabsTrigger>
              </TabsList>
            </div>

            {/* Game Day Highlights Tab */}
            <TabsContent value="highlights" className="space-y-8">
              <div className="max-w-5xl mx-auto">
                <div className="grid gap-8 md:grid-cols-2">
                  {[
                    {
                      title: "Vipers vs. Tema Sharks",
                      date: "March 28, 2025",
                      description: "Highlights from our dominant performance against the Sharks.",
                      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                      thumbnailUrl: "/placeholder.svg?height=600&width=800",
                    },
                    {
                      title: "Hunter Elite Tournament Finals",
                      date: "March 15, 2025",
                      description: "Our Elite squad takes home the trophy in a nail-biting finish.",
                      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                      thumbnailUrl: "/placeholder.svg?height=600&width=800",
                    },
                  ].map((highlight, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="aspect-video relative">
                        <VideoPlayer
                          videoUrl={highlight.videoUrl}
                          thumbnailUrl={highlight.thumbnailUrl}
                          title={highlight.title}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-bold text-amber-900">{highlight.title}</h3>
                          <span className="text-sm text-gray-500">{highlight.date}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{highlight.description}</p>
                        <Link
                          href={`/blog/highlights/${i}`}
                          className="text-amber-600 hover:text-amber-700 font-medium"
                        >
                          View full highlights →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Photo Gallery: Recent Games</h3>
                  <MediaGallery
                    images={[
                      { src: "/placeholder.svg?height=600&width=800", alt: "Game action shot 1" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Game action shot 2" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Game action shot 3" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Game action shot 4" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Game action shot 5" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Game action shot 6" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Game action shot 7" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Game action shot 8" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Game action shot 9" },
                    ]}
                  />
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <Link href="/blog/highlights">View All Game Highlights</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Inside The Hunt Tab */}
            <TabsContent value="inside-hunt" className="space-y-8">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Player Profiles</h3>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Kwesi Amankwah",
                      position: "Point Guard",
                      number: 5,
                      image: "/placeholder.svg?height=400&width=400",
                      bio: "Team captain and floor general. Known for his leadership and court vision.",
                      stats: {
                        ppg: "18.5",
                        apg: "7.2",
                        spg: "2.1",
                      },
                      quote: "The game is won in practice, not just on game day.",
                    },
                    {
                      name: "David Acheampong",
                      position: "Shooting Guard",
                      number: 23,
                      image: "/placeholder.svg?height=400&width=400",
                      bio: "Sharpshooter with unlimited range. Works tirelessly on his craft.",
                      stats: {
                        ppg: "22.3",
                        apg: "3.1",
                        spg: "1.8",
                      },
                      quote: "Every shot I take, I've made 1000 times in practice.",
                    },
                    {
                      name: "Michael Osei",
                      position: "Small Forward",
                      number: 8,
                      image: "/placeholder.svg?height=400&width=400",
                      bio: "Defensive specialist who can guard multiple positions. Heart and soul of our defense.",
                      stats: {
                        ppg: "14.2",
                        rpg: "6.5",
                        bpg: "1.3",
                      },
                      quote: "Defense isn't just about stopping your man, it's about protecting your brothers.",
                    },
                  ].map((player, i) => (
                    <PlayerProfileCard key={i} player={player} />
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Training Day: Behind the Scenes</h3>
                  <div className="aspect-video relative mb-6">
                    <VideoPlayer
                      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      thumbnailUrl="/placeholder.svg?height=600&width=1200"
                      title="A Day in the Life: Hunter Elite Training"
                    />
                  </div>
                  <p className="text-gray-700 mb-6">
                    Follow our Hunter Elite squad through a typical training day. From morning strength and conditioning
                    to afternoon skill work and evening scrimmages, see what it takes to become a Hunter.
                  </p>
                  <MediaGallery
                    images={[
                      { src: "/placeholder.svg?height=600&width=800", alt: "Morning workout" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Skill development" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Team scrimmage" },
                      { src: "/placeholder.svg?height=600&width=800", alt: "Recovery session" },
                    ]}
                  />
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <Link href="/blog/inside-hunt">Meet All Players</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Coach's Corner Tab */}
            <TabsContent value="coach" className="space-y-8">
              <div className="max-w-5xl mx-auto">
                <div className="grid gap-8 md:grid-cols-2">
                  {[
                    {
                      title: "Defensive Principles: The Hunter's Approach",
                      coach: "Coach Daniel Adjei",
                      date: "April 5, 2025",
                      description:
                        "Breaking down our defensive philosophy and key principles that make our defense elite.",
                      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                      thumbnailUrl: "/placeholder.svg?height=600&width=800",
                    },
                    {
                      title: "Building Basketball IQ: Reading the Game",
                      coach: "Coach Mercy Tagoe",
                      date: "March 22, 2025",
                      description: "How we develop decision-making skills and game intelligence in our players.",
                      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                      thumbnailUrl: "/placeholder.svg?height=600&width=800",
                    },
                  ].map((post, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="aspect-video relative">
                        <VideoPlayer videoUrl={post.videoUrl} thumbnailUrl={post.thumbnailUrl} title={post.title} />
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-amber-600 font-medium">{post.coach}</span>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-bold text-amber-900">{post.title}</h3>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{post.description}</p>
                        <Link href={`/blog/coach/${i}`} className="text-amber-600 hover:text-amber-700 font-medium">
                          Read full breakdown →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Drill of the Week: Defensive Shell</h3>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-gray-700 mb-4">
                        Coach Daniel breaks down our signature defensive shell drill that builds communication,
                        rotation, and help defense principles.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                        <li>Develops proper defensive stance and positioning</li>
                        <li>Teaches communication and team defense concepts</li>
                        <li>Builds defensive rotations and help principles</li>
                        <li>Simulates game-like defensive scenarios</li>
                      </ul>
                      <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Download Drill Sheet</Button>
                    </div>
                    <div className="aspect-video relative">
                      <VideoPlayer
                        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        thumbnailUrl="/placeholder.svg?height=400&width=600"
                        title="Defensive Shell Drill Demonstration"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <Link href="/blog/coach">View All Coach's Corner</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Hunter's Journal Tab */}
            <TabsContent value="journal" className="space-y-8">
              <div className="max-w-5xl mx-auto">
                <div className="grid gap-8 md:grid-cols-2">
                  {[
                    {
                      title: "The Mental Game: Preparing for Pressure",
                      author: "Kwesi Amankwah, Team Captain",
                      date: "April 2, 2025",
                      excerpt: "How I prepare mentally for big games and high-pressure moments on the court.",
                      image: "/placeholder.svg?height=600&width=800",
                    },
                    {
                      title: "My Journey: From Hunter Cub to Viper",
                      author: "Samuel Boateng, Power Forward",
                      date: "March 18, 2025",
                      excerpt:
                        "Reflecting on my 10-year journey through the Gbawe Academy system and the lessons learned.",
                      image: "/placeholder.svg?height=600&width=800",
                    },
                  ].map((journal, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="relative h-64">
                        <Image
                          src={journal.image || "/placeholder.svg"}
                          alt={journal.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-amber-600 font-medium">{journal.author}</span>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-bold text-amber-900">{journal.title}</h3>
                          <span className="text-sm text-gray-500">{journal.date}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{journal.excerpt}</p>
                        <Link href={`/blog/journal/${i}`} className="text-amber-600 hover:text-amber-700 font-medium">
                          Read full journal →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Leadership Lessons: Captain's Notes</h3>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>
                      Each week, our team captains share leadership insights and lessons from their experiences. Here's
                      this week's entry:
                    </p>
                    <blockquote className="border-l-4 border-amber-500 pl-4 italic">
                      "Leadership isn't about being the best player. It's about making everyone around you better. It's
                      about setting the standard in practice, being the first one in and the last one out. It's about
                      holding yourself and your teammates accountable to the Hunter's Way."
                      <footer className="text-right font-normal not-italic">— Kwesi Amankwah, Vipers Captain</footer>
                    </blockquote>
                    <p>
                      This week, we focus on communication as a leadership tool. How clear communication on and off the
                      court builds trust, prevents mistakes, and creates a culture of accountability.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Team huddle"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Captain leading drill"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Team discussion"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <Link href="/blog/journal">Read All Journals</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Dream Diaries Tab */}
            <TabsContent value="dream" className="space-y-8">
              <div className="max-w-5xl mx-auto">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Kofi, Age 8",
                      dream: "I want to play for the Ghana national team and win a medal.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Ama, Age 10",
                      dream: "I want to be the first woman from Ghana to play in the WNBA.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Kwame, Age 12",
                      dream: "I want to get a scholarship to study and play basketball in America.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                  ].map((child, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="relative h-64">
                        <Image
                          src={child.image || "/placeholder.svg"}
                          alt={child.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">{child.name}</h3>
                        <p className="text-gray-600 italic">"{child.dream}"</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <Link href="/blog/dreams">Read All Dream Diaries</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-900">Featured Series</h2>

            <div className="space-y-12">
              {[
                {
                  title: "A Week With the Vipers",
                  description:
                    "Full behind-the-scenes series following our senior team through a week of preparation, practice, and game day.",
                  image: "/placeholder.svg?height=600&width=1200",
                  episodes: 5,
                  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                },
                {
                  title: "Hunter's Work",
                  description:
                    "Training day with a Master Hunter. Follow our elite players through their specialized training regimens.",
                  image: "/placeholder.svg?height=600&width=1200",
                  episodes: 3,
                  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                },
                {
                  title: "From Gbawe to Greatness",
                  description:
                    "Alumni journeys & impact stories. See where our former players are now and how the academy shaped their paths.",
                  image: "/placeholder.svg?height=600&width=1200",
                  episodes: 4,
                  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                },
              ].map((series, i) => (
                <div key={i} className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-video relative">
                      <VideoPlayer videoUrl={series.videoUrl} thumbnailUrl={series.image} title={series.title} />
                    </div>
                    <div className="p-6 flex flex-col">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-2xl font-bold text-amber-900">{series.title}</h3>
                          <span className="bg-amber-900 text-white text-xs px-2 py-1 rounded-full">
                            {series.episodes} Episodes
                          </span>
                        </div>
                        <p className="text-gray-700 mb-6">{series.description}</p>
                      </div>
                      <div className="mt-auto flex justify-between items-center">
                        <Link href={`/blog/series/${i}`} className="text-amber-600 hover:text-amber-700 font-medium">
                          View all episodes →
                        </Link>
                        <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Watch Trailer</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-6 text-lg text-gray-700">
                We don't just document results - we share the work behind the wins.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-amber-950 transform transition-transform hover:scale-105"
                >
                  <Link href="/blog/all">Read More</Link>
                </Button>
                <Button
                  onClick={() => document.getElementById("submit-story-modal")?.classList.remove("hidden")}
                  size="lg"
                  variant="outline"
                  className="border-amber-500 text-amber-900 hover:bg-amber-50 transform transition-transform hover:scale-105"
                >
                  Submit a Story
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-amber-500 text-amber-900 hover:bg-amber-50 transform transition-transform hover:scale-105"
                >
                  <Link href="/blog/highlights">Watch All Highlights</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Submit Story Modal */}
      <div
        id="submit-story-modal"
        className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-amber-900">Submit Your Story</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById("submit-story-modal")?.classList.add("hidden")}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </Button>
            </div>
            <SubmitStoryForm />
          </div>
        </div>
      </div>
    </div>
  )
}
