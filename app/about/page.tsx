import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-96 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/12.jpg?height=600&width=1920" alt="Basketball court" fill className="object-cover object-top" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Where Warriors Are Forged.
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Who We Are</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Gbawe Basketball Academy is a high-performance training ground where discipline, culture, and basketball
                collide. Based in the heart of Gbawe, Ghana, our academy was built to raise Hunters — athletes who
                understand the value of effort, imagination, and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                To prepare athletes to trust the process, obey the principles, and become their best selves — not just
                in the game, but in life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Identity */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
              Our Identity: The Way of the Hunter
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>Everything we do is rooted in the Hunter's Philosophy:</p>
              <ul>
                <li>
                  <strong>Track:</strong> Set goals with clarity.
                </li>
                <li>
                  <strong>Stalk:</strong> Train with patience, focus, and intention.
                </li>
                <li>
                  <strong>Strike:</strong> Execute when it counts.
                </li>
                <li>
                  <strong>Become:</strong> Live out your potential.
                </li>
              </ul>
              <p>With every drill, every chant, and every game, we enforce our code:</p>
              <p className="text-xl font-bold text-amber-900">Trust. Obey. Become.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Roots */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Our Roots in Gbawe</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                We draw from the power of our local culture — the traditional stool that symbolizes leadership and the
                hunter that represents wisdom, discipline, and execution. Our identity isn't just on the court — it's in
                our blood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-900">Meet the Founders</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  name: "Thomas Nii Adu Cofie",
                  role: "Founder",
                  image: "/tommy.jpg?height=400&width=400",
                },
                {
                  name: "Nii Okai Cofie",
                  role: "Co-Founder",
                  image: "/gidi.jpg?height=400&width=400",
                },
              ].map((founder, i) => (
                <div key={i} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image src={founder.image || "/tommy.jpg"} alt={founder.name} fill className="object-cover" />
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="text-gray-600">{founder.role}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 prose prose-lg max-w-none">
              <p className="text-center">
                Nii Okai Cofie and Thomas Nii Adu Cofie established the academy with a shared dream: to raise a
                new generation of focused, fearless, and future-ready African athletes.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/team">Meet Our Full Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
