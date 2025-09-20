import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/hoop1.jpg?height=1080&width=1920"
            alt="Basketball court"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative h-36 w-36 overflow-hidden rounded-full">
              <Image
                src="/images/gbawe-logo.png"
                alt="Gbawe Academy Logo"
                width={144}
                height={144}
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Train Like a Hunter. Trust. Obey. Become.
          </h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            The journey begins in Gbawe — where young athletes transform into disciplined warriors on and off the court.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-amber-500 hover:bg-amber-600 hover:scale-105 hover:shadow-lg transition-all duration-300 text-amber-950 font-bold"
            >
              <Link href="/join">Join The Hunt</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-amber-800 hover:bg-amber-900 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white font-medium shadow-md"
            >
              <Link href="/team">Meet the Hunters</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-amber-700 hover:bg-amber-800 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white font-medium shadow-md"
            >
              <Link href="/schedule">Game Schedule</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-amber-600 hover:bg-amber-700 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white font-medium shadow-md flex items-center gap-2"
            >
              <Link href="/our-story">
                <Play className="h-4 w-4" /> Watch our story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">More Than Basketball</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                At Gbawe Basketball Academy, we develop more than skills — we shape mindsets. Every athlete is trained
                to think like a hunter: to track their goals, stalk them with discipline, strike with focus, and become
                the best version of themselves.
              </p>
              <p>
                Guided by the motto "Trust. Obey. Become.", our training blends elite basketball development with
                leadership, mental toughness, and cultural pride rooted in our heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-gray-900">Why Train With Us?</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Hunter's Training Curriculum",
                description: "A unique skill-building system rooted in discipline and execution",
              },
              {
                title: "Elite Coaching",
                description: "Mentors who care about your growth, on and off the court",
              },
              {
                title: "Pathway to Excellence",
                description: "From Gbawe to global courts",
              },
              {
                title: "Team Culture",
                description: "Built on unity, respect, and the hunter's spirit",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden p-6"
              >
                <h3 className="mb-2 text-xl font-bold text-amber-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Our Programs</h2>
            <p className="text-lg text-gray-600">
              From our youngest Cubs to our elite Vipers, we have a program for every stage of development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Hunter Cubs",
                ages: "Ages 6-9",
                description: "Where the dream begins. Fun, fundamentals, and falling in love with the game.",
              },
              {
                title: "Hunter Apprentices",
                ages: "Ages 10-13",
                description: "Where habits are built. Structure, repetition, and team concepts.",
              },
              {
                title: "Hunter Elitess",
                ages: "Ages 14-17",
                description: "Where potential is sharpened. Intensity, tactical IQ, and competitive play.",
              },
            ].map((program, i) => (
              <div
                key={i}
                className="bg-amber-50 rounded-lg overflow-hidden p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="mb-1 text-xl font-bold text-amber-900">{program.title}</h3>
                <p className="mb-4 text-sm font-medium text-amber-700">{program.ages}</p>
                <p className="mb-6 text-gray-600">{program.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-amber-500 text-amber-900 hover:bg-amber-100 hover:border-amber-600 hover:shadow-sm transition-all duration-300"
                >
                  <Link href="/programs">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 hover:scale-105 hover:shadow-lg transition-all duration-300 text-amber-950"
            >
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Preview */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">The Way of the Hunter</h2>
            <p className="mb-8 text-xl">"We don't just train players. We raise hunters."</p>
            <p className="mb-8 text-lg">
              At Gbawe Basketball Academy, culture is our foundation. It shapes how we think, move, grow, and lead — on
              and off the court. Every child enters the academy as a learner. Those who stay… become hunters.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300 text-amber-900 font-bold"
            >
              <Link href="/culture" className="flex items-center gap-2">
                Explore Our Culture{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Ready to Join the Hunt?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700">
            Take the first step in your journey to becoming a disciplined, focused, and skilled athlete.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 hover:scale-105 hover:shadow-lg transition-all duration-300 text-amber-950 font-bold"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            
          </div>
        </div>
      </section>
    </div>
  )
}
