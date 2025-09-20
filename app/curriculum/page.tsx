import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CurriculumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-96 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/curr.jpg?height=600&width=1920" alt="Basketball training" fill className="object-cover object-top" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <p className="mb-4 text-xl text-amber-300 font-medium">
            "Our curriculum is not built just to create players- but Hunters prepared for life's biggest challenges."
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Train the Body. Shape the Mind. Strengthen the Spirit.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-center text-gray-900">
              Welcome to The Hunter's Path
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                This is the foundation of every session, chant, drill, and lesson at Gbawe Basketball Academy. It is not
                just about basketball — it is about shaping focused, relentless, imaginative athletes prepared for life.
              </p>
              <p>We train our players using the Hunter's Path:</p>
              <ul>
                <li>
                  <strong>Track</strong> - Discover your dream
                </li>
                <li>
                  <strong>Stalk</strong> - Train with strategy and patience
                </li>
                <li>
                  <strong>Strike</strong> - Execute with boldness
                </li>
                <li>
                  <strong>Become</strong> - Own your identity and purpose
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Themes */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-900">
              Core Curriculum Themes
            </h2>

            {/* Theme 1 */}
            <div className="mb-12 p-8 bg-white rounded-lg shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-amber-900">1. Mental Toughness & Leadership</h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  Athletes are taught to master their emotions, push through pressure, and lead themselves before
                  leading others.
                </p>
                <ul>
                  <li>Daily affirmations and chants</li>
                  <li>Situational pressure drills</li>
                  <li>Team leadership roles</li>
                  <li>Weekly "Hunter's Focus" lessons</li>
                </ul>
              </div>
            </div>

            {/* Theme 2 */}
            <div className="mb-12 p-8 bg-white rounded-lg shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-amber-900">2. Imagination Before Execution</h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  We teach players to see the game in their minds before they act. Off-ball movement, silent leadership,
                  and visualizing success are taught before on-ball play.
                </p>
                <ul>
                  <li>Off-ball movement drills</li>
                  <li>Mirror visualization exercises</li>
                  <li>Self-guided imagination routines</li>
                </ul>
              </div>
            </div>

            {/* Theme 3 */}
            <div className="mb-12 p-8 bg-white rounded-lg shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-amber-900">3. Hunter-Themed Drills</h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  All drills follow the Track → Stalk → Strike → Become format. From defense to shooting, players train
                  like they're on the hunt.
                </p>
                <ul>
                  <li>
                    <strong>Track:</strong> Skill acquisition
                  </li>
                  <li>
                    <strong>Stalk:</strong> Repetition with intention
                  </li>
                  <li>
                    <strong>Strike:</strong> Competitive application
                  </li>
                  <li>
                    <strong>Become:</strong> Reflective mastery
                  </li>
                </ul>
              </div>
            </div>

            {/* Theme 4 */}
            <div className="mb-12 p-8 bg-white rounded-lg shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-amber-900">4. 100% Always or Rest</h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  We instill the principle that Hunters give everything — or take time to recover. There is no halfway.
                </p>
                <ul>
                  <li>Consistent performance expectations</li>
                  <li>Recovery and rest education</li>
                  <li>Self-check accountability logs</li>
                </ul>
              </div>
            </div>

            {/* Theme 5 */}
            <div className="mb-12 p-8 bg-white rounded-lg shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-amber-900">5. Execution Training</h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  Every athlete must know what to do in high-pressure moments. Players train for game day scenarios, not
                  just technique.
                </p>
                <ul>
                  <li>4th quarter drills</li>
                  <li>Game-day situational breakdowns</li>
                  <li>Competitive scrimmages with consequences</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <blockquote className="p-6 bg-amber-900 text-white rounded-lg">
                <p className="text-xl font-bold italic">
                  "A Hunter is not made by talent. A Hunter is made by intention, execution, and heart."
                </p>
              </blockquote>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/programs">Explore Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
