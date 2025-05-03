import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Basketball community"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Support Our Mission</h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            Help us build the next generation of leaders through basketball
          </p>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How You Can Help</h2>
            <p className="text-lg text-gray-700">
              Gbawe Basketball Academy is more than just a sports program - it's a movement to transform lives through
              discipline, leadership, and basketball. Your support helps us expand our impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Donate */}
            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Financial Support</h3>
              <p className="text-gray-700 mb-4">
                Your donations help us provide scholarships, equipment, and facility improvements for our athletes.
              </p>
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="#donate-form">Donate Now</Link>
              </Button>
            </div>

            {/* Volunteer */}
            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Volunteer Your Time</h3>
              <p className="text-gray-700 mb-4">
                We welcome coaches, mentors, tutors, and administrative volunteers to help our program thrive.
              </p>
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/contact">Volunteer</Link>
              </Button>
            </div>

            {/* Sponsor */}
            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Corporate Sponsorship</h3>
              <p className="text-gray-700 mb-4">
                Partner with us as a sponsor and help us grow while connecting your brand to our community impact.
              </p>
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/contact">Become a Sponsor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Your Support Makes a Difference</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Scholarship recipient"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Kofi's Story</h3>
                  <p className="text-gray-700 mb-4">
                    "The scholarship I received from Gbawe Academy changed my life. Not only did I improve as a player,
                    but I learned discipline and leadership that helped me earn a college scholarship."
                  </p>
                  <p className="text-sm text-gray-500 italic">- Kofi Mensah, Academy Graduate 2022</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Community impact"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Community Impact</h3>
                  <p className="text-gray-700 mb-4">
                    "The academy has transformed our neighborhood. Kids who used to roam the streets now have purpose,
                    discipline, and a safe place to grow. The impact goes far beyond basketball."
                  </p>
                  <p className="text-sm text-gray-500 italic">- Sarah Owusu, Parent & Community Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donate-form" className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Make a Donation</h2>

            <div className="bg-amber-50 rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>

                <div className="space-y-2">
                  <Label>Donation Amount</Label>
                  <RadioGroup defaultValue="50" className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="25" id="amount-25" />
                      <Label htmlFor="amount-25">$25</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="50" id="amount-50" />
                      <Label htmlFor="amount-50">$50</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="100" id="amount-100" />
                      <Label htmlFor="amount-100">$100</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="250" id="amount-250" />
                      <Label htmlFor="amount-250">$250</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="amount-custom" />
                      <Label htmlFor="amount-custom">Custom Amount</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Share why you're supporting Gbawe Basketball Academy"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950">
                    Complete Donation
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-8 text-center text-gray-700">
              <p>Gbawe Basketball Academy is a registered non-profit organization.</p>
              <p>All donations are tax-deductible where applicable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Other Ways to Support</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-8 text-lg">
              Beyond financial contributions, there are many ways to support our mission. Consider donating equipment,
              providing transportation, offering professional services, or becoming an ambassador for our cause.
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
              <Link href="/contact">Contact Us to Discuss</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
