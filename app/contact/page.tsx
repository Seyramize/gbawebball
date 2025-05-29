import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Facebook, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BasicContactForm } from "./basic-contact-form"
import { ContactFAQs } from "./contact-faqs"

export const metadata: Metadata = {
  title: "Contact Us | Gbawe Basketball Academy",
  description: "Get in touch with Gbawe Basketball Academy. Find our location, contact details, and send us a message.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-amber-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mb-8 max-w-2xl mx-auto text-xl text-amber-100">
            Get in touch with Gbawe Basketball Academy. We're here to help you start your basketball journey.
          </p>
        </div>
      </section>

      <div className="container px-4 mx-auto py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Academy Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Gbawe Basketball Academy</p>
                  <p className="text-gray-600">Near Gbawe Cluster of Schools</p>
                  <p className="text-gray-600">Gbawe, Ghana</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Training Venue:</strong> Gbawe Basketball Court
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contact Details
                </CardTitle>
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

            {/* Enhanced Training Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Training Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Disclaimer */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-red-900 mb-1">Important Notice</p>
                    <p className="text-sm text-red-800">
                      Training times are subject to change based on weather conditions, court availability, and special
                      events. All registered players will be notified of any schedule changes via WhatsApp or SMS at
                      least 24 hours in advance.
                    </p>
                  </div>
                </div>

                {/* Schedule Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          6-9 years
                        </Badge>
                        <h4 className="font-semibold text-blue-900">Hunter Cubs</h4>
                      </div>
                      <div className="space-y-1 text-sm text-blue-800">
                        <p>
                          <strong>Saturdays:</strong> 8:00 AM - 9:00 AM
                        </p>
                        <p>
                          <strong>Tuesdays:</strong> 4:00 PM - 5:00 PM
                        </p>
                        <p className="text-xs mt-2 italic">Focus: Basic skills, fun games, teamwork</p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          10-13 years
                        </Badge>
                        <h4 className="font-semibold text-green-900">Hunter Apprentices</h4>
                      </div>
                      <div className="space-y-1 text-sm text-green-800">
                        <p>
                          <strong>Saturdays:</strong> 9:00 AM - 10:30 AM
                        </p>
                        <p>
                          <strong>Tue/Thu:</strong> 4:00 PM - 5:30 PM
                        </p>
                        <p className="text-xs mt-2 italic">Focus: Skill development, strategy basics</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                          14-17 years
                        </Badge>
                        <h4 className="font-semibold text-purple-900">Hunter Elite</h4>
                      </div>
                      <div className="space-y-1 text-sm text-purple-800">
                        <p>
                          <strong>Saturdays:</strong> 10:30 AM - 12:00 PM
                        </p>
                        <p>
                          <strong>Mon/Wed/Fri:</strong> 5:00 PM - 6:30 PM
                        </p>
                        <p className="text-xs mt-2 italic">Focus: Advanced skills, competitive play</p>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                          18+ years
                        </Badge>
                        <h4 className="font-semibold text-amber-900">Master Hunters</h4>
                      </div>
                      <div className="space-y-1 text-sm text-amber-800">
                        <p>
                          <strong>Saturdays:</strong> 6:00 AM - 7:30 AM
                        </p>
                        <p>
                          <strong>Mon-Fri:</strong> 6:30 PM - 8:00 PM
                        </p>
                        <p className="text-xs mt-2 italic">Focus: Elite training, leadership development</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Schedule Info */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">Additional Information</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Private sessions available by appointment</li>
                    <li>• Make-up sessions for missed classes (conditions apply)</li>
                    <li>• Special tournament preparation sessions</li>
                    <li>• Holiday camps during school breaks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 p-3 text-amber-900 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50 border border-amber-200"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-3 text-amber-900 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50 border border-amber-200"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="text-sm font-medium">YouTube</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-3 text-amber-900 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50 border border-amber-200"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and FAQs */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <BasicContactForm />
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">Ready to Join the Academy?</h3>
              <p className="text-blue-800 mb-4">
                Start your basketball journey with us! Complete our registration process to become part of the Gbawe
                Basketball Academy family.
              </p>
              <a
                href="/join"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors"
              >
                Join the Academy
              </a>
            </div>

            {/* FAQs Section */}
            <ContactFAQs />
          </div>
        </div>
      </div>
    </div>
  )
}
