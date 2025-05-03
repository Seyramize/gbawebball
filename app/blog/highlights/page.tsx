import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { MediaGallery } from "@/components/media-gallery"

export default function BlogHighlightsPage() {
  // Sample highlights data - in a real app, this would come from a database
  const highlights = [
    {
      id: 1,
      title: "Vipers vs. Titans Championship Game",
      description: "Watch the thrilling final minutes of our championship victory against the Titans.",
      thumbnailUrl: "/basketball-championship.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "March 15, 2023",
      views: 1245,
      category: "Championship",
    },
    {
      id: 2,
      title: "Hunter Elite Tournament Highlights",
      description: "Our Hunter Elite squad showing their skills at the regional tournament.",
      thumbnailUrl: "/placeholder.svg?key=e0a6z",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "February 22, 2023",
      views: 987,
      category: "Tournament",
    },
    {
      id: 3,
      title: "Master Hunters Showcase",
      description: "Highlights from our Master Hunters showcase event featuring top talent.",
      thumbnailUrl: "/placeholder.svg?key=3uil9",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "January 10, 2023",
      views: 756,
      category: "Showcase",
    },
    {
      id: 4,
      title: "Hunter Cubs Exhibition Game",
      description: "Our youngest athletes showing their developing skills in a fun exhibition game.",
      thumbnailUrl: "/placeholder.svg?key=mx9b9",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "December 5, 2022",
      views: 543,
      category: "Exhibition",
    },
    {
      id: 5,
      title: "Vipers vs. Eagles - Game Winning Shot",
      description: "Watch the incredible buzzer-beater that secured our victory against the Eagles.",
      thumbnailUrl: "/placeholder.svg?key=p702z",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "November 18, 2022",
      views: 1876,
      category: "Regular Season",
    },
    {
      id: 6,
      title: "Hunter Apprentices Skills Challenge",
      description: "Highlights from our annual skills challenge featuring our Hunter Apprentices.",
      thumbnailUrl: "/basketball-skills-challenge.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "October 30, 2022",
      views: 654,
      category: "Skills Challenge",
    },
    {
      id: 7,
      title: "Vipers vs. Accra Lions - Full Game Highlights",
      description: "Complete highlights from our thrilling victory against the Accra Lions.",
      thumbnailUrl: "/basketball-game-highlights.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "October 15, 2022",
      views: 932,
      category: "Regular Season",
    },
    {
      id: 8,
      title: "Hunter Elite Training Session",
      description: "Behind-the-scenes look at an intense Hunter Elite training session.",
      thumbnailUrl: "/placeholder.svg?key=lxa3t",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "September 28, 2022",
      views: 721,
      category: "Training",
    },
  ]

  // Featured highlight
  const featuredHighlight = highlights[0]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920&query=basketball+court+arena"
            alt="Basketball court"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Game Highlights</h1>
          <p className="mx-auto mt-4 text-xl text-gray-200 max-w-3xl">
            Relive the most exciting moments from our games and events
          </p>
        </div>
      </section>

      {/* Featured Highlight */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Featured Highlight</h2>
          <div className="max-w-5xl mx-auto bg-amber-50 rounded-lg overflow-hidden shadow-md">
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
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{featuredHighlight.date}</span>
                  <span className="text-sm text-gray-500">{featuredHighlight.views} views</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{featuredHighlight.description}</p>
              <div className="flex justify-between items-center">
                <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {featuredHighlight.category}
                </span>
                <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Watch Full Game</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">All Game Highlights</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {highlights.slice(1).map((highlight) => (
              <div key={highlight.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">{highlight.date}</span>
                    <span className="text-sm text-gray-500">{highlight.views} views</span>
                  </div>
                  <p className="text-gray-600 mb-4">{highlight.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {highlight.category}
                    </span>
                    <Link
                      href={`/blog/highlights/${highlight.id}`}
                      className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                      View full highlights →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Photo Gallery: Recent Games</h2>
          <MediaGallery
            images={[
              {
                src: "/placeholder.svg?height=600&width=800&query=basketball+action+shot+1",
                alt: "Game action shot 1",
              },
              {
                src: "/placeholder.svg?height=600&width=800&query=basketball+action+shot+2",
                alt: "Game action shot 2",
              },
              {
                src: "/placeholder.svg?height=600&width=800&query=basketball+action+shot+3",
                alt: "Game action shot 3",
              },
              {
                src: "/placeholder.svg?height=600&width=800&query=basketball+action+shot+4",
                alt: "Game action shot 4",
              },
              {
                src: "/placeholder.svg?height=600&width=800&query=basketball+action+shot+5",
                alt: "Game action shot 5",
              },
              {
                src: "/placeholder.svg?height=600&width=800&query=basketball+action+shot+6",
                alt: "Game action shot 6",
              },
              {
                src: "/placeholder.svg?height=600&width=800&query=basketball+action+shot+7",
                alt: "Game action shot 7",
              },
              {
                src: "/placeholder.svg?height=600&width=800&query=basketball+action+shot+8",
                alt: "Game action shot 8",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Want to See More?</h2>
          <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Follow us on our social media channels for more highlights, behind-the-scenes content, and updates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-amber-900 hover:bg-amber-800 text-white">
                Contact Us
              </Button>
            </Link>
            <Link href="/blog" passHref>
              <Button size="lg" variant="outline" className="border-amber-900 text-amber-900 hover:bg-amber-100">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
