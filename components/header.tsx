"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react" // Import the X icon
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo with menu close functionality */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/images/gbawe-logo.png"
              alt="Gbawe Academy Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center justify-between space-x-3 lg:space-x-4 whitespace-nowrap">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-amber-900" : "hover:text-amber-900"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${pathname === "/about" ? "text-amber-900" : "hover:text-amber-900"}`}
          >
            About
          </Link>
          <Link
            href="/programs"
            className={`text-sm font-medium transition-colors ${pathname === "/programs" ? "text-amber-900" : "hover:text-amber-900"}`}
          >
            Programs
          </Link>
          <Link
            href="/curriculum"
            className={`text-sm font-medium transition-colors ${pathname === "/curriculum" ? "text-amber-900" : "hover:text-amber-900"}`}
          >
            Curriculum
          </Link>
          <Link
            href="/team"
            className={`text-sm font-medium transition-colors ${pathname === "/team" ? "text-amber-900" : "hover:text-amber-900"}`}
          >
            Team
          </Link>
          <Link
            href="/shop"
            className={`text-sm font-medium transition-colors ${pathname === "/shop" ? "text-amber-900" : "hover:text-amber-900"}`}
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors ${pathname === "/blog" ? "text-amber-900" : "hover:text-amber-900"}`}
          >
            Blog & Media
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${pathname === "/contact" ? "text-amber-900" : "hover:text-amber-900"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild size="sm" className="hidden md:flex bg-amber-500 hover:bg-amber-600 text-amber-950">
            <Link href="/contact">Join the Academy</Link>
          </Button>

          <div className="md:hidden">
            {/* Toggle between Menu and X icons */}
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>

            {isOpen && (
              <div className="fixed inset-0 top-16 z-50 bg-black/50 backdrop-blur-md">
                <nav className="container grid gap-6 p-6 bg-background rounded-lg shadow-lg">
                  <Link
                    href="/"
                    className={`text-lg font-medium ${pathname === "/" ? "text-amber-900" : "hover:text-amber-900"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`text-lg font-medium ${pathname === "/about" ? "text-amber-900" : "hover:text-amber-900"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/programs"
                    className={`text-lg font-medium ${pathname === "/programs" ? "text-amber-900" : "hover:text-amber-900"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Programs
                  </Link>
                  <Link
                    href="/curriculum"
                    className={`text-lg font-medium ${pathname === "/curriculum" ? "text-amber-900" : "hover:text-amber-900"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Curriculum
                  </Link>
                  <Link
                    href="/team"
                    className={`text-lg font-medium ${pathname === "/team" ? "text-amber-900" : "hover:text-amber-900"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Team
                  </Link>
                  <Link
                    href="/shop"
                    className={`text-lg font-medium ${pathname === "/shop" ? "text-amber-900" : "hover:text-amber-900"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-lg font-medium ${pathname === "/blog" ? "text-amber-900" : "hover:text-amber-900"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Blog & Media
                  </Link>
                  <Link
                    href="/contact"
                    className={`text-lg font-medium ${pathname === "/contact" ? "text-amber-900" : "hover:text-amber-900"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>

                  <Button asChild className="mt-4 bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Join the Academy
                    </Link>
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
