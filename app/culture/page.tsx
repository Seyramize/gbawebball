import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CulturePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-96 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/culpic.jpg?height=600&width=1920"
            alt="Basketball team culture"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">The Way of the Hunter</h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            "We don't just train players. We raise hunters."
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            At Gbawe Basketball Academy, culture is our foundation. It shapes how we think, move, grow, and lead — on
            and off the court. Every child enters the academy as a learner. Those who stay… become hunters.
          </p>
        </div>
      </section>

      {/* The Hunter's Identity */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-900">
              The Hunter's Path – Our Age-Based Journey
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-amber-900 text-white">
                    <th className="p-4 text-left">Division</th>
                    <th className="p-4 text-left">Symbolic Trait</th>
                    <th className="p-4 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Hunter Cubs (6–9)</td>
                    <td className="p-4 text-amber-700 font-medium">Focus</td>
                    <td className="p-4">Learn to follow, listen, and move with intention</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Hunter Apprentices (10–13)</td>
                    <td className="p-4 text-amber-700 font-medium">Obedience</td>
                    <td className="p-4">Build habits, discipline, and trust in structure</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Hunter Elites (14–17)</td>
                    <td className="p-4 text-amber-700 font-medium">Leadership</td>
                    <td className="p-4">Lead with presence, confidence, and example</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Master Hunters (18+)</td>
                    <td className="p-4 text-amber-700 font-medium">Execution</td>
                    <td className="p-4">Dominate with maturity, focus, and consistency</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Vipers (Senior Team)</td>
                    <td className="p-4 text-amber-700 font-medium">Legacy</td>
                    <td className="p-4">Inspire, represent, and carry the brand publicly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Our Traditions */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-900">
              The Traditions That Shape Us
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* The Hunter's Oath */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">The Hunter's Oath</h3>
                <p className="text-gray-600 mb-4">Spoken when a player joins the academy and before the Hunt.</p>
                <div className="bg-amber-50 p-6 rounded-lg italic">
                  <p className="mb-2">"I am a Hunter.</p>
                  <p className="mb-2">I move with purpose.</p>
                  <p className="mb-2">I trust the mission.</p>
                  <p className="mb-2">I obey the discipline.</p>
                  <p className="mb-2">I become what I was born to be.</p>
                  <p className="mb-2">I do not chase-</p>
                  <p className="mb-2">I track, I stalk, I strike.</p>
                  <p className="mb-2">In silence or storm- I stay ready.</p>
                  <p className="mb-2">I hunt for greatness.</p>
                  <p>I own my dream."</p>
                </div>
              </div>

              {/* The Hunter's Trail */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">The Hunter's Trail</h3>
                <p className="text-gray-600 mb-2">Our annual rite of passage.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Players compete in skill, focus, discipline, and leadership.</li>
                  <li>One winner per category is crowned "Hunter of the Year."</li>
                  <li>Their name is etched in history.</li>
                </ul>
              </div>

              {/* Crown & Cut Ceremony */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Crown & Cut Ceremony</h3>
                <p className="text-gray-600 mb-2">When a player levels up, we crown the new role and cut away the band of their old self.</p>
                <p className="text-gray-600 font-medium mt-4">To rise, we must release.</p>
              </div>

              {/* Hunter's Fire Circles */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Hunter's Fire Circles</h3>
                <p className="text-gray-600 mb-2">
                  Every month, players gather by age group to reflect, speak, and listen.
                </p>
                <p className="text-gray-600">These story sessions build unity, emotional maturity, and wisdom.</p>
              </div>

              {/* The Dream Wall */}
              <div className="bg-white p-8 rounded-lg shadow-sm col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">The Dream Wall</h3>
                <p className="text-gray-600 mb-2">Once a year, every player writes their dream on the academy wall.</p>
                <p className="text-gray-600 mb-2">Those who are crowned remain.</p>
                <p className="text-gray-600">All others wipe clean — and return stronger.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture in Motion */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">Culture in Motion</h2>
            <h3 className="text-xl font-bold text-amber-900 mb-6">This Is What Lives In Our Gym</h3>

            <ul className="space-y-4 text-lg text-gray-700 mb-10">
              <li>Discipline in the warm-up</li>
              <li>Unity in the chants</li>
              <li>Fire in the eyes</li>
              <li>Ritual in the rhythm</li>
              <li>Loyalty in silence</li>
            </ul>

            <p className="text-xl font-bold text-amber-900 mb-2">This is more than basketball.</p>
            <p className="text-xl font-bold text-amber-900 mb-10">This is becoming.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Every child can learn to dribble.</h2>
          <p className="mb-8 text-xl">But not every child learns to hunt.</p>
          <p className="mb-10 text-lg">Ready to begin the path?</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
              <Link href="/curriculum">Explore Our Curriculum</Link>
            </Button>
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
              <Link href="/team">Meet the Coaches</Link>
            </Button>
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
              <Link href="/join">Register for the Academy</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
