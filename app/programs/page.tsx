import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-60 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Basketball court" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            From Cubs to Vipers - The Hunter's Path Begins Here.
          </h1>
        </div>
      </section>

      {/* Training Path Intro */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-center text-gray-900">Our Training Path</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                At Gbawe Basketball Academy, every athlete walks the sacred path of the Hunter. From the playful
                curiosity of our Cubs to the fierce execution of our Vipers, each stage is crafted to build skill,
                discipline, leadership, and legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Hunter Cubs */}
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-96 md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/cub.jpg?height=600&width=800"
                  alt="Hunter Cubs training"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-amber-900">1. Hunter Cubs (Ages 6-9)</h3>
                <p className="mb-4 text-lg italic text-gray-700">Where the dream begins.</p>
                <div className="prose prose-lg">
                  <p>
                    Our youngest Hunters are introduced to the basics of basketball through imagination, fun, and
                    movement. We focus on sparking joy and helping them fall in love with the game.
                  </p>
                  <ul>
                    <li>
                      <strong>Core Skills:</strong> Footwork, dribbling, passing, layups
                    </li>
                    <li>
                      <strong>Values:</strong> Listening, effort, sportsmanship
                    </li>
                    <li>
                      <strong>Hunter Stage:</strong> Track - Discover the dream
                    </li>
                    <li>
                      <strong>Format:</strong> Weekend training + Fun competitions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hunter Apprentices */}
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="order-1 md:order-2 relative h-96 md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/apprent.jpg?height=600&width=800"
                  alt="Hunter Apprentices training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-2 md:order-1">
                <h3 className="mb-2 text-2xl font-bold text-amber-900">2. Hunter Apprentices (Ages 10-13)</h3>
                <p className="mb-4 text-lg italic text-gray-700">Where habits are built.</p>
                <div className="prose prose-lg">
                  <p>
                    This stage introduces structure, repetition, and team concepts. Apprentices begin to understand
                    basketball as a craft - and themselves as disciplined learners.
                  </p>
                  <ul>
                    <li>
                      <strong>Core Skills:</strong> Shooting technique, ball-handling combos, basic defense, passing
                      with purpose
                    </li>
                    <li>
                      <strong>Mental Work:</strong> Focus, visualization, intro to leadership
                    </li>
                    <li>
                      <strong>Hunter Stage:</strong> Stalk - Learn the discipline
                    </li>
                    <li>
                      <strong>Format:</strong> Weekly training + Intra-academy league
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hunter Elite */}
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-96 md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/elitee.jpg?height=600&width=800"
                  alt="Hunter Elite training"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-amber-900">3. Hunter Elite (Ages 14-17)</h3>
                <p className="mb-4 text-lg italic text-gray-700">Where potential is sharpened.</p>
                <div className="prose prose-lg">
                  <p>
                    At this level, athletes train with intensity and intent. We emphasize tactical IQ, conditioning, and
                    competitive play. Hunters learn to thrive under pressure and lead others.
                  </p>
                  <ul>
                    <li>
                      <strong>Core Skills:</strong> Full-court offense/defense, game situations, advanced conditioning
                    </li>
                    <li>
                      <strong>Mental Work:</strong> Pressure management, leadership voice, team identity
                    </li>
                    <li>
                      <strong>Hunter Stage:</strong> Strike - Execute with precision
                    </li>
                    <li>
                      <strong>Format:</strong> Academy league + External matchups
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Master Hunters */}
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="order-1 md:order-2 relative h-96 md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/master.jpg?height=600&width=800"
                  alt="Master Hunters training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-2 md:order-1">
                <h3 className="mb-2 text-2xl font-bold text-amber-900">4. Master Hunters (Ages 18+)</h3>
                <p className="mb-4 text-lg italic text-gray-700">Where purpose meets performance.</p>
                <div className="prose prose-lg">
                  <p>
                    These athletes are mentors-in-training. They receive advanced coaching and represent the academy
                    with maturity, leadership, and professionalism. They prepare for Vipers Basketball or other elite
                    pathways.
                  </p>
                  <ul>
                    <li>
                      <strong>Focus:</strong> Advanced systems, scouting, mentorship
                    </li>
                    <li>
                      <strong>Role:</strong> Training + Assisting with Cubs & Apprentices
                    </li>
                    <li>
                      <strong>Hunter Stage:</strong> Become - Carry the legacy
                    </li>
                    <li>
                      <strong>Format:</strong> Competitive play + Community leadership
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vipers Basketball */}
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-96 md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/viper.jpg?height=600&width=800"
                  alt="Vipers Basketball team"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-amber-900">5. Vipers Basketball (Senior Team)</h3>
                <p className="mb-4 text-lg italic text-gray-700">The pride of the Hunt.</p>
                <div className="prose prose-lg">
                  <p>
                    Our Accra Division 2 senior team, Vipers Basketball, is the embodiment of everything the academy
                    stands for. Built from the ground up through our system, the Vipers are hunters who have become
                    warriors - leading, performing, and inspiring the next generation.
                  </p>
                  <ul>
                    <li>
                      <strong>Focus:</strong> League competition, elite execution, legacy building
                    </li>
                    <li>
                      <strong>Identity:</strong> Discipline. Unity. Relentless pursuit
                    </li>
                    <li>
                      <strong>Format:</strong> Full-season play + Brand & community leadership
                    </li>
                    <li>
                      <strong>Hunter Motto:</strong> 100% Always or Rest
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Choose Your Path. Train Like a Hunter.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/join" passHref>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
                Register Today
              </Button>
            </Link>
            <Link href="/team" passHref>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
                Meet the Coaches
              </Button>
            </Link>
            <Link href="/culture" passHref>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
                Become a Viper
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
