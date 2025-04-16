import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Youtube, Facebook } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Basketball court" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Step Into the Hunt - Let's Talk.
          </h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-center text-gray-900">
              Got Questions? Want to Join or Visit the Academy?
            </h2>
            <p className="mb-10 text-lg text-center text-gray-600">
              Whether you're a parent, coach, athlete, or fan — we're here to connect.
            </p>

            <div className="grid gap-10 md:grid-cols-2">
              {/* Form */}
              <div className="p-6 bg-amber-50 rounded-lg">
                <h3 className="mb-6 text-xl font-bold text-amber-900">Contact Form</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                      Phone Number (Optional)
                    </label>
                    <Input id="phone" placeholder="Your phone number" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="w-full min-h-[120px]" />
                  </div>

                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-amber-900">Academy Address</h3>
                  <p className="text-gray-700">
                    Gbawe Basketball Academy
                    <br />
                    Near Gbawe Cluster of Schools
                    <br />
                    Gbawe, Ghana
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-amber-900">Phone/WhatsApp</h3>
                  <p className="text-gray-700">+233 (XXX) XXX-XXXX</p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-amber-900">Email</h3>
                  <p className="text-gray-700">gbaweacademy@huntmail.com</p>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-amber-900">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 text-amber-900 hover:text-amber-600 transition-colors">
                      <Instagram className="w-6 h-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="p-2 text-amber-900 hover:text-amber-600 transition-colors">
                      <Youtube className="w-6 h-6" />
                      <span className="sr-only">YouTube</span>
                    </a>
                    <a href="#" className="p-2 text-amber-900 hover:text-amber-600 transition-colors">
                      <Facebook className="w-6 h-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 italic">
                Every hunter starts with a question. Reach out — we're listening.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
