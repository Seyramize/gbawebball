"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      {/* Overlay with blur effect for main content when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
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

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${isActive("/") ? "text-amber-900" : "hover:text-amber-900"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-amber-900" : "hover:text-amber-900"}`}
            >
              About
            </Link>
            <Link
              href="/programs"
              className={`text-sm font-medium transition-colors ${isActive("/programs") ? "text-amber-900" : "hover:text-amber-900"}`}
            >
              Programs
            </Link>
            <Link
              href="/curriculum"
              className={`text-sm font-medium transition-colors ${isActive("/curriculum") ? "text-amber-900" : "hover:text-amber-900"}`}
            >
              Curriculum
            </Link>
            <Link
              href="/culture"
              className={`text-sm font-medium transition-colors ${isActive("/culture") ? "text-amber-900" : "hover:text-amber-900"}`}
            >
              Culture
            </Link>
            <Link
              href="/team"
              className={`text-sm font-medium transition-colors ${isActive("/team") ? "text-amber-900" : "hover:text-amber-900"}`}
            >
              Team
            </Link>
            <Link
              href="/shop"
              className={`text-sm font-medium transition-colors ${isActive("/shop") ? "text-amber-900" : "hover:text-amber-900"}`}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors ${isActive("/blog") ? "text-amber-900" : "hover:text-amber-900"}`}
            >
              Blog & Media
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-amber-900" : "hover:text-amber-900"}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild size="sm" className="hidden md:flex bg-amber-500 hover:bg-amber-600 text-amber-950">
              <Link href="/join">Join the Academy</Link>
            </Button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu - separate from button for better styling control */}
        <div
          id="mobile-menu"
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl transform transition-transform duration-200 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-end p-4 border-b">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-6">
            <nav className="grid gap-6">
              <Link
                href="/"
                className={`text-lg font-medium ${isActive("/") ? "text-amber-900" : "hover:text-amber-900"}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-lg font-medium ${isActive("/about") ? "text-amber-900" : "hover:text-amber-900"}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/programs"
                className={`text-lg font-medium ${isActive("/programs") ? "text-amber-900" : "hover:text-amber-900"}`}
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/curriculum"
                className={`text-lg font-medium ${isActive("/curriculum") ? "text-amber-900" : "hover:text-amber-900"}`}
                onClick={() => setIsOpen(false)}
              >
                Curriculum
              </Link>
              <Link
                href="/culture"
                className={`text-lg font-medium ${isActive("/culture") ? "text-amber-900" : "hover:text-amber-900"}`}
                onClick={() => setIsOpen(false)}
              >
                Culture
              </Link>
              <Link
                href="/team"
                className={`text-lg font-medium ${isActive("/team") ? "text-amber-900" : "hover:text-amber-900"}`}
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/shop"
                className={`text-lg font-medium ${isActive("/shop") ? "text-amber-900" : "hover:text-amber-900"}`}
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/blog"
                className={`text-lg font-medium ${isActive("/blog") ? "text-amber-900" : "hover:text-amber-900"}`}
                onClick={() => setIsOpen(false)}
              >
                Blog & Media
              </Link>
              <Link
                href="/contact"
                className={`text-lg font-medium ${isActive("/contact") ? "text-amber-900" : "hover:text-amber-900"}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Button asChild className="mt-4 bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/join" onClick={() => setIsOpen(false)}>
                  Join the Academy
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
