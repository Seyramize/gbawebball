import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlayerProfileCard } from "@/components/player-profile-card"
import { VideoPlayer } from "@/components/video-player"
import { MediaGallery } from "@/components/media-gallery"

export default function InsideHuntPage() {
  // Sample player data
  const players = [
    {
      name: "Emmanuel Basepoaw",
      position: "Combo Guard",
      number: 5,
      image: "/amb.jpg?height=400&width=400",
      bio: "Team captain and floor general. Known for his leadership and court vision.",
      stats: {
        ppg: "18.5",
        apg: "7.2",
        spg: "2.1",
      },
      quote: "The game is won in practice, not just on game day.",
    },
    {
      name: "William Agyapong Ntiamoah",
      position: "Forward/Center",
      number: 23,
      image: "/wil.jpg?height=400&width=400",
      bio: "Assistant captain and defensive specialist. Heart and soul of our defense.",
      stats: {
        ppg: "14.2",
        rpg: "6.5",
        bpg: "1.3",
      },
      quote: "Defense isn't just about stopping your man, it's about protecting your brothers.",
    },
    {
      name: "Jeffery Nana Sey",
      position: "Combo Guard",
      number: 8,
      image: "/sey.jpg?height=400&width=400",
      bio: "Sharpshooter with unlimited range. Works tirelessly on his craft.",
      stats: {
        ppg: "22.3",
        apg: "3.1",
        spg: "1.8",
      },
      quote: "Every shot I take, I've made 1000 times in practice.",
    },
    {
      name: "Samuel Boateng",
      position: "Power Forward",
      number: 34,
      image: "/placeholder.svg?height=400&width=400&query=basketball+player+dunking",
      bio: "Athletic forward with a versatile skill set. Can score inside and out.",
      stats: {
        ppg: "16.8",
        rpg: "9.3",
        bpg: "1.7",
      },
      quote: "Play with passion or don't play at all.",
    },
    {
      name: "Emmanuel Adjei",
      position: "Center",
      number: 42,
      image: "/placeholder.svg?height=400&width=400&query=basketball+player+center",
      bio: "Dominant presence in the paint. Controls the boards and protects the rim.",
      stats: {
        ppg: "12.5",
        rpg: "11.2",
        bpg: "2.8",
      },
      quote: "The paint is my home. I protect it at all costs.",
    },
    {
      name: "Joseph Mensah",
      position: "Sixth Man",
      number: 11,
      image: "/placeholder.svg?height=400&width=400&query=basketball+player+celebration",
      bio: "Spark plug off the bench. Brings energy and scoring punch to the second unit.",
      stats: {
        ppg: "14.3",
        rpg: "4.2",
        spg: "1.5",
      },
      quote: "Whether I start or come off the bench, my job is to change the game.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920&query=basketball+team+huddle"
            alt="Basketball team huddle"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Inside The Hunt</h1>
          <p className="mx-auto mt-4 text-xl text-gray-200 max-w-3xl">
            Meet the players, coaches, and staff that make up the Gbawe Basketball Academy family
          </p>
        </div>
      </section>

      {/* Player Profiles */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Meet Our Players</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {players.map((player, i) => (
              <PlayerProfileCard key={i} player={player} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
              <Link href="/team">View Full Team Roster</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Training Day */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Training Day: Behind the Scenes</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative mb-8">
              <VideoPlayer
                videoUrl="https://www.youtube.com/@GbaweBasketballAcademy"
                thumbnailUrl="/placeholder.svg?key=6dcta"
                title="A Day in the Life: Hunter Elites Training"
              />
            </div>
            <div className="prose prose-amber max-w-none mb-8">
              <p className="text-lg text-gray-700">
                Follow our Hunter Elites squad through a typical training day. From morning strength and conditioning to
                afternoon skill work and evening scrimmages, see what it takes to become a Hunter.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6">The Hunter Elites Training Schedule</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>6:00 AM - 7:30 AM:</strong> Strength and conditioning with Coach Daniel
                </li>
                <li>
                  <strong>8:00 AM - 9:00 AM8:00 AM - 9:00 AM:</strong> Breakfast and recovery
                </li>
                <li>
                  <strong>9:30 AM - 11:30 AM:</strong> Individual skill development with position coaches
                </li>
                <li>
                  <strong>12:00 PM - 1:00 PM:</strong> Lunch and film study
                </li>
                <li>
                  <strong>2:00 PM - 4:00 PM:</strong> Team practice and scrimmages
                </li>
                <li>
                  <strong>4:30 PM - 5:30 PM:</strong> Recovery and treatment
                </li>
                <li>
                  <strong>6:00 PM - 7:00 PM:</strong> Study hall and academic support
                </li>
              </ul>
            </div>
            <MediaGallery
              images={[
                {
                  src: "/placeholder.svg?height=600&width=800&query=basketball+morning+workout",
                  alt: "Morning workout",
                },
                {
                  src: "/placeholder.svg?height=600&width=800&query=basketball+skill+development",
                  alt: "Skill development",
                },
                { src: "/placeholder.svg?height=600&width=800&query=basketball+team+scrimmage", alt: "Team scrimmage" },
                {
                  src: "/placeholder.svg?height=600&width=800&query=basketball+recovery+session",
                  alt: "Recovery session",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Meet Our Coaches</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Coach Daniel Adjei",
                title: "Head Coach, Hunter Elites",
                image: "/placeholder.svg?height=400&width=400&query=basketball+coach",
                bio: "Former professional player with 15 years of coaching experience. Known for developing elite defenders.",
                quote: "We don't just build players, we build character.",
              },
              {
                name: "Coach Mercy Tagoe",
                title: "Head Coach, Hunter Apprentices",
                image: "/placeholder.svg?height=400&width=400&query=female+basketball+coach",
                bio: "Former national team player. Specializes in player development and offensive strategy.",
                quote: "Basketball is a language. We teach our players to be fluent in it.",
              },
              {
                name: "Coach Benjamin Osei",
                title: "Head Coach, Hunter Cubs",
                image: "/placeholder.svg?height=400&width=400&query=youth+basketball+coach",
                bio: "Youth development specialist with a background in physical education. Focuses on fundamentals and fun.",
                quote: "The love of the game comes first. Skills follow passion.",
              },
            ].map((coach, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900">{coach.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{coach.title}</p>
                  <p className="text-gray-700 mb-4">{coach.bio}</p>
                  <blockquote className="italic text-gray-600 border-l-4 border-amber-500 pl-4 py-2">
                    "{coach.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
              <Link href="/team#coaches">Meet All Coaches</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Join The Hunt</h2>
          <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Want to be part of the Gbawe Basketball Academy family? Register today for tryouts or contact us to learn
            more about our programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-amber-900 hover:bg-amber-800 text-white">
                Register for Tryouts
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
