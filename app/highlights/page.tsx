import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"

export default function HighlightsPage() {
  // Sample highlights data - in a real app, this would come from a database
  const highlights = [
    {
      id: 1,
      title: "Vipers vs. Titans Championship Game",
      description: "Watch the thrilling final minutes of our championship victory against the Titans.",
      thumbnailUrl: "/placeholder.svg?key=3awlg",
      videoUrl: "https://www.youtube.com/@GbaweBasketballAcademy",
      date: "March 15, 2023",
    },
    {
      id: 2,
      title: "Hunter Elites Tournament Highlights",
      description: "Our Hunter Elites squad showing their skills at the regional tournament.",
      thumbnailUrl: "/placeholder.svg?key=dvjjr",
      videoUrl: "https://www.youtube.com/@GbaweBasketballAcademy",
      date: "February 22, 2023",
    },
    {
      id: 3,
      title: "Master Hunters Showcase",
      description: "Highlights from our Master Hunters showcase event featuring top talent.",
      thumbnailUrl: "/placeholder.svg?key=rcqbp",
      videoUrl: "https://www.youtube.com/@GbaweBasketballAcademy",
      date: "January 10, 2023",
    },
    {
      id: 4,
      title: "Hunter Cubs Exhibition Game",
      description: "Our youngest athletes showing their developing skills in a fun exhibition game.",
      thumbnailUrl: "/placeholder.svg?key=e47i3",
      videoUrl: "https://www.youtube.com/@GbaweBasketballAcademy",
      date: "December 5, 2022",
    },
    {
      id: 5,
      title: "Vipers vs. Eagles - Game Winning Shot",
      description: "Watch the incredible buzzer-beater that secured our victory against the Eagles.",
      thumbnailUrl: "/placeholder.svg?key=cxggl",
      videoUrl: "https://www.youtube.com/@GbaweBasketballAcademy",
      date: "November 18, 2022",
    },
    {
      id: 6,
      title: "Hunter Apprentices Skills Challenge",
      description: "Highlights from our annual skills challenge featuring our Hunter Apprentices.",
      thumbnailUrl: "/placeholder.svg?height=480&width=640&query=basketball+skills+challenge",
      videoUrl: "https://www.youtube.com/@GbaweBasketballAcademy",
      date: "October 30, 2022",
    },
  ]

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
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Game Highlights</h1>
          <p className="mx-auto mt-4 text-xl text-gray-200 max-w-3xl">
            Relive the most exciting moments from our games and events
          </p>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-48 sm:h-64">
                  <VideoPlayer
                    videoUrl={highlight.videoUrl}
                    thumbnailUrl={highlight.thumbnailUrl}
                    title={highlight.title}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div>
                    <p className="text-sm font-medium text-amber-600">{highlight.date}</p>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">{highlight.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            <Link href="/" passHref>
              <Button size="lg" variant="outline" className="border-amber-900 text-amber-900 hover:bg-amber-100">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
