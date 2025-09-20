import Image from "next/image"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// This would come from a database in a real application
const highlights = [
  {
    id: 1,
    title: "Vipers vs. Titans Championship Game",
    description: "Watch the thrilling final minutes of our championship victory against the Titans.",
    fullDescription: `
      The championship game against the Titans was one for the history books. After trailing by 15 points at halftime, 
      our Vipers showed incredible heart and determination to mount a comeback for the ages.
      
      Led by team captain Kwesi Amankwah's 28 points and David Acheampong's lockdown defense in the second half, 
      the Vipers slowly chipped away at the lead. The turning point came with 4 minutes remaining when Michael Osei 
      hit back-to-back three-pointers to tie the game.
      
      In the final minute, with the score tied at 78-78, Kwesi drove to the basket, drew a double team, and kicked 
      out to Samuel Boateng who knocked down the go-ahead three-pointer with just 5.2 seconds remaining. The Titans' 
      last-second heave fell short, and the Vipers were crowned champions!
      
      This victory marks our third championship in the last five years and cements the Vipers' legacy as one of the 
      premier basketball programs in Ghana.
    `,
    thumbnailUrl: "/basketball-championship.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "March 15, 2023",
    views: 1245,
    category: "Championship",
    relatedHighlights: [2, 5, 7],
  },
  {
    id: 2,
    title: "Hunter Elites Tournament Highlights",
    description: "Our Hunter Elites squad showing their skills at the regional tournament.",
    fullDescription: `
      The Hunter Elites Tournament brought together the best youth basketball teams from across the region, and our 
      Elite squad did not disappoint. Facing stiff competition from teams with older and more experienced players, 
      our young hunters showed why they're considered one of the most promising groups in the academy's history.
      
      The tournament featured a round-robin format followed by knockout stages. Our Elite squad went undefeated in 
      the group stage, winning all three games by an average margin of 18 points. The semifinal against the Accra 
      Sharks proved to be a tough test, but clutch free throws in the final minute secured a narrow 65-62 victory.
      
      In the final, we faced the defending champions, the Tema Tigers. Despite falling behind early, our Elite squad 
      showed remarkable poise and teamwork to battle back. The highlight of the game came when our youngest player, 
      14-year-old Emmanuel Adjei, scored 12 consecutive points in the fourth quarter to help seal the victory.
      
      This tournament victory is a testament to the development program at Gbawe Academy and the hard work of both 
      the players and coaching staff.
    `,
    thumbnailUrl: "/placeholder.svg?key=8bch4",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "February 22, 2023",
    views: 987,
    category: "Tournament",
    relatedHighlights: [1, 3, 8],
  },
  // Additional highlights data would be here
]

export default function HighlightDetailPage({ params }: { params: { id: string } }) {
  const highlightId = Number.parseInt(params.id)
  const highlight = highlights.find((h) => h.id === highlightId)

  if (!highlight) {
    notFound()
  }

  // Find related highlights
  const relatedHighlightsData = highlight.relatedHighlights
    ? highlight.relatedHighlights.map((id) => highlights.find((h) => h.id === id)).filter(Boolean)
    : []

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-16 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920&query=basketball+court+arena"
            alt="Basketball court"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <Link href="/blog/highlights" className="inline-flex items-center text-amber-300 hover:text-amber-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to All Highlights
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{highlight.title}</h1>
          <div className="flex flex-wrap items-center mt-4 text-amber-200">
            <span className="mr-6">{highlight.date}</span>
            <span className="mr-6">{highlight.views} views</span>
            <span className="inline-block bg-amber-800 text-amber-100 px-3 py-1 rounded-full text-sm font-medium">
              {highlight.category}
            </span>
          </div>
        </div>
      </section>

      {/* Video and Description */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative mb-8 rounded-lg overflow-hidden shadow-lg">
              <VideoPlayer
                videoUrl={highlight.videoUrl}
                thumbnailUrl={highlight.thumbnailUrl}
                title={highlight.title}
              />
            </div>

            <div className="prose prose-amber max-w-none">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Game Summary</h2>
              {highlight.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/contact">Contact Us for Full Game Footage</Link>
              </Button>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-amber-500 text-amber-500">
                  Share
                </Button>
                <Button variant="outline" size="sm" className="border-amber-500 text-amber-500">
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Highlights */}
      {relatedHighlightsData.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Highlights</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedHighlightsData.map((related) => (
                  <div key={related.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={related.thumbnailUrl || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-white opacity-80"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-amber-900 mb-1">{related.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{related.date}</p>
                      <Link
                        href={`/blog/highlights/${related.id}`}
                        className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                      >
                        View highlights →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-amber-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Join the Gbawe Basketball Academy</h2>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Want to be part of our next highlight reel? Join the Gbawe Basketball Academy and start your journey to
            becoming a basketball star.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-amber-900 hover:bg-amber-800 text-white">
                Register Today
              </Button>
            </Link>
            <Link href="/programs" passHref>
              <Button size="lg" variant="outline" className="border-amber-900 text-amber-900 hover:bg-amber-100">
                View Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
