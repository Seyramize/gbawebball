"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Users, Calendar } from "lucide-react"
import { BootCampForm } from "./bootcamp-form"
import { MerchandiseForm } from "./merchandise-form"
import { BasicContactForm } from "./basic-contact-form"
import { FAQsSection } from "@/components/faqs-section"

export function ContactPageClient() {
  const [activeTab, setActiveTab] = useState("bootcamp")

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-amber-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Join the Academy</h1>
          <p className="mb-8 max-w-2xl mx-auto text-xl text-amber-100">
            Register for our Summer Boot Camp 2024 or preorder official academy merchandise!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-amber-100 text-amber-900 px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              June 6-11, 2024
            </Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-900 px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              10:00 AM - 11:00 AM
            </Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-900 px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              Dansoman Court
            </Badge>
          </div>
        </div>
      </section>

      <div className="container px-4 mx-auto py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Information Panel */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-amber-900">Summer Boot Camp 2024</CardTitle>
                <CardDescription>5-Day intensive basketball training program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Dates</p>
                    <p className="text-gray-600">June 6-11, 2024</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Time</p>
                    <p className="text-gray-600">10:00 AM - 11:00 AM daily</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Dansoman Court</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Age Groups</p>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>• Hunter Cubs (6-9)</p>
                      <p>• Hunter Apprentices (10-13)</p>
                      <p>• Hunter Elite (14-17)</p>
                      <p>• Master Hunters (18+)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academy Info */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-amber-900">Academy Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Gbawe Basketball Academy</p>
                    <p className="text-gray-600">Near Gbawe Cluster of Schools</p>
                    <p className="text-gray-600">Gbawe, Ghana</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-amber-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Phone/WhatsApp</p>
                    <p className="text-gray-600">+233 (XXX) XXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">gbaweacademy@huntmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-amber-900">Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="p-2 text-amber-900 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>

                  <a
                    href="#"
                    className="p-2 text-amber-900 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12 0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="sr-only">YouTube</span>
                  </a>

                  <a
                    href="#"
                    className="p-2 text-amber-900 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>

                  <a
                    href="#"
                    className="p-2 text-amber-900 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </a>

                  <a
                    href="#"
                    className="p-2 text-amber-900 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.206 1.5c1.284.003 4.392.08 5.986 3.574.52 1.136.425 3.039.284 4.585l-.035.391c-.025.287-.046.543-.059.787.087.044.342.164.815.164.3 0 .662-.062 1.048-.184.193-.061.364-.092.513-.092.215 0 .39.046.525.137.22.145.356.37.356.59 0 .398-.36.798-1.444 1.118-.14.041-.302.09-.47.142-.51.157-.76.295-.76.462 0 .073.035.18.103.27.292.39 1.263 1.013 2.44 1.226.12.022.22.133.22.255 0 .405-.44.621-.532.703-.33.3-.772.453-1.957.453-.257 0-.514-.012-.763-.024l-.136-.007c-.157-.007-.31-.015-.456-.015-.319 0-.573.035-.784.107-.42.142-.794.283-1.178.43-1.004.385-2.147.821-3.834.821-.063 0-.124-.001-.185-.004-.057.003-.115.004-.174.004-1.687 0-2.83-.436-3.834-.821-.384-.147-.758-.288-1.179-.43-.207-.071-.459-.105-.775-.105-.147 0-.3.008-.458.015l-.135.007c-.25.012-.506.024-.764.024-1.184 0-1.626-.152-1.956-.453-.091-.082-.532-.298-.532-.703 0-.122.1-.233.22-.255 1.178-.213 2.148-.835 2.44-1.226.068-.09.103-.197.103-.27 0-.167-.25-.305-.76-.462-.168-.052-.33-.101-.47-.142-1.084-.32-1.444-.72-1.444-1.118 0-.22.136-.445.356-.59.135-.09.31-.137.525-.137.15 0 .32.03.513.092.386.122.748.184 1.048.184.473 0 .728-.12.815-.164-.013-.244-.034-.5-.06-.787l-.034-.391c-.141-1.546-.236-3.449.284-4.585 1.594-3.494 4.702-3.571 5.986-3.574.033 0 .066 0 .099.001.033-.001.066-.001.099-.001z" />
                    </svg>
                    <span className="sr-only">Snapchat</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-amber-900">Quick Contact</CardTitle>
                <CardDescription>Send us a quick message</CardDescription>
              </CardHeader>
              <CardContent>
                <BasicContactForm />
              </CardContent>
            </Card>

            {/* FAQs Section */}
            <FAQsSection />
          </div>

          {/* Forms Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">Registration & Merchandise</CardTitle>
                <CardDescription>
                  Register for the Summer Boot Camp or preorder official academy merchandise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger
                      value="bootcamp"
                      className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900"
                    >
                      Boot Camp Registration
                    </TabsTrigger>
                    <TabsTrigger
                      value="merchandise"
                      className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900"
                    >
                      Merchandise Preorder
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="bootcamp" className="space-y-6">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h3 className="font-semibold text-amber-900 mb-2">Summer Boot Camp 2024 Registration</h3>
                      <p className="text-sm text-amber-800">
                        Register for our 5-day intensive basketball training program. Open to all age groups from 6
                        years and above. A confirmation message will be sent after review.
                      </p>
                    </div>
                    <BootCampForm />
                  </TabsContent>

                  <TabsContent value="merchandise" className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">Official Academy Merchandise</h3>
                      <p className="text-sm text-blue-800">
                        Preorder official Gbawe Basketball Academy summer camp merchandise. Limited quantities available
                        — place your order early to secure your gear. Payment will be confirmed via MoMo or at camp.
                      </p>
                    </div>
                    <MerchandiseForm />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
