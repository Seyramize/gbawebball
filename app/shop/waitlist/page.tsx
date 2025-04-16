"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: {
      tshirts: false,
      toteBags: false,
      stickers: false,
      caps: false,
      other: false,
    },
    otherInterests: "",
    notifications: true,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [name]: checked,
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          interests: {
            tshirts: false,
            toteBags: false,
            stickers: false,
            caps: false,
            other: false,
          },
          otherInterests: "",
          notifications: true,
        })
      }, 5000)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Kingdom of Us merchandise"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Kingdom of Us - Coming Soon
          </h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            Join the waitlist for our exclusive cultural merchandise collection.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container px-4 mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/shop" className="hover:text-amber-900">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-900">Kingdom of Us Waitlist</span>
          </div>
        </div>
      </div>

      {/* About the Collection */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Collection</h2>
              <p className="text-lg text-gray-700">
                Kingdom of Us is our upcoming merchandise line that celebrates Ghanaian culture and heritage. Each piece
                features authentic African symbols, traditional patterns, and cultural motifs that tell the story of our
                roots and identity.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="bg-amber-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-amber-900 mb-3">T-shirts with Cultural Prints</h3>
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Cultural T-shirts"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">Premium cotton tees featuring traditional Adinkra symbols and patterns.</p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Tote Bags with African Symbols</h3>
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="African Symbol Tote Bags"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  Canvas tote bags with hand-printed symbols representing wisdom, strength, and unity.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Heritage Stickers</h3>
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Heritage Stickers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-gray-700">
                  Vinyl stickers featuring cultural symbols and inspirational phrases in local languages.
                </p>
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="bg-amber-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Join the Waitlist</h2>
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Joining!</h3>
                  <p className="text-gray-700 mb-4">
                    You've been added to our waitlist. We'll notify you as soon as the Kingdom of Us collection
                    launches.
                  </p>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <Link href="/shop">Continue Shopping</Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>I'm interested in (select all that apply):</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="tshirts"
                          checked={formData.interests.tshirts}
                          onCheckedChange={(checked) => handleCheckboxChange("tshirts", checked as boolean)}
                        />
                        <Label htmlFor="tshirts" className="cursor-pointer">
                          T-shirts with Cultural Prints
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="toteBags"
                          checked={formData.interests.toteBags}
                          onCheckedChange={(checked) => handleCheckboxChange("toteBags", checked as boolean)}
                        />
                        <Label htmlFor="toteBags" className="cursor-pointer">
                          Tote Bags with African Symbols
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="stickers"
                          checked={formData.interests.stickers}
                          onCheckedChange={(checked) => handleCheckboxChange("stickers", checked as boolean)}
                        />
                        <Label htmlFor="stickers" className="cursor-pointer">
                          Heritage Stickers
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="caps"
                          checked={formData.interests.caps}
                          onCheckedChange={(checked) => handleCheckboxChange("caps", checked as boolean)}
                        />
                        <Label htmlFor="caps" className="cursor-pointer">
                          Caps & Headwear
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="other"
                          checked={formData.interests.other}
                          onCheckedChange={(checked) => handleCheckboxChange("other", checked as boolean)}
                        />
                        <Label htmlFor="other" className="cursor-pointer">
                          Other Items
                        </Label>
                      </div>
                    </div>
                  </div>

                  {formData.interests.other && (
                    <div className="space-y-2">
                      <Label htmlFor="otherInterests">Please specify other items you're interested in:</Label>
                      <Textarea
                        id="otherInterests"
                        name="otherInterests"
                        value={formData.otherInterests}
                        onChange={handleChange}
                        placeholder="Tell us what other items you'd like to see"
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="notifications"
                      checked={formData.notifications}
                      onCheckedChange={(checked) => {
                        setFormData((prev) => ({ ...prev, notifications: checked as boolean }))
                      }}
                    />
                    <Label htmlFor="notifications" className="cursor-pointer">
                      Notify me when the collection launches
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Join the Waitlist"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
