"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src="/images/gbawe-logo.png"
                  alt="Gbawe Basketball Academy Logo"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-amber-400">Gbawe Basketball Academy</h3>
            </div>
            <p className="text-gray-400">
              Train Like a Hunter.
              <br />
              Trust. Obey. Become.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="text-gray-400 hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-amber-400">Contact</h3>
            <address className="not-italic text-gray-400">
              Near Gbawe Cluster of Schools
              <br />
              Gbawe, Ghana
              <br />
              <br />
              <a href="mailto:gbaweacademy@huntmail.com" className="hover:text-white transition-colors">
                gbaweacademy@huntmail.com
              </a>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-amber-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gbawe Basketball Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
