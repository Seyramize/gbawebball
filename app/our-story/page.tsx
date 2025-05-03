"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function OurStoryPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Basketball court" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Our Story</h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            From humble beginnings to a movement that's changing lives
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-center text-gray-900">Watch Our Story</h2>

            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
              {!isPlaying ? (
                <>
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Gbawe Basketball Academy Story"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <Button
                      onClick={handlePlayClick}
                      className="w-20 h-20 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center"
                    >
                      <Play className="h-10 w-10 ml-1" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Gbawe Basketball Academy Story"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-center">
                This video tells the story of how Gbawe Basketball Academy was founded, the challenges we've overcome,
                and the impact we're making in our community. From training in open fields to building a program that
                develops complete athletes and leaders, our journey is just beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-gray-900">Our Journey</h2>

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="relative pl-8 border-l-2 border-amber-500">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                <div className="mb-1 text-sm font-medium text-amber-700">2018</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Beginning</h3>
                <p className="text-gray-700">
                  Godwin and Thomas Cofie start training 8 local kids on a dirt court in Gbawe with just one basketball.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8 border-l-2 border-amber-500">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                <div className="mb-1 text-sm font-medium text-amber-700">2019</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">First Community Court</h3>
                <p className="text-gray-700">
                  With help from local leaders, we build our first community court and expand to 25 youth players.
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-8 border-l-2 border-amber-500">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                <div className="mb-1 text-sm font-medium text-amber-700">2020</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Hunter's Philosophy</h3>
                <p className="text-gray-700">
                  Development of our core training philosophy and curriculum based on the Hunter's Path.
                </p>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative pl-8 border-l-2 border-amber-500">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                <div className="mb-1 text-sm font-medium text-amber-700">2021</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vipers Basketball Founded</h3>
                <p className="text-gray-700">
                  Launch of our senior team, Vipers Basketball, competing in Accra Division 2.
                </p>
              </div>

              {/* Timeline Item 5 */}
              <div className="relative pl-8 border-l-2 border-amber-500">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                <div className="mb-1 text-sm font-medium text-amber-700">2022</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full Academy Structure</h3>
                <p className="text-gray-700">
                  Establishment of our complete age-group system from Cubs to Master Hunters.
                </p>
              </div>

              {/* Timeline Item 6 */}
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                <div className="mb-1 text-sm font-medium text-amber-700">Today</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Growing the Movement</h3>
                <p className="text-gray-700">
                  Over 100 youth athletes in our program, with our first graduates receiving college scholarships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Be Part of Our Story</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-200">
            Join us as we continue to build a legacy of excellence, discipline, and community impact through basketball.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
              <Link href="/contact">Join the Academy</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-amber-800">
              <Link href="/support">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
