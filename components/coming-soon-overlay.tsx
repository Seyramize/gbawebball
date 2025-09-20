"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X, ShoppingBag, Clock, Bell } from "lucide-react"

interface ComingSoonOverlayProps {
  title?: string
  description?: string
  expectedLaunch?: string
}

export function ComingSoonOverlay({
  title = "Shop Coming Soon",
  description = "We're putting the finishing touches on our shop. Get ready for exclusive Gbawe Basketball Academy merchandise!",
  expectedLaunch = "Coming Soon",
}: ComingSoonOverlayProps) {
  const [showNotifyForm, setShowNotifyForm] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleClose = () => {
    router.push("/")
  }

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the email to your backend
      console.log("Notify email:", email)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubscribed(true)

      // After successful submission, wait 2 seconds then redirect to homepage
      setTimeout(() => {
        router.push("/")
      }, 2000)
    } catch (error) {
      console.error("Error submitting email:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 xs:p-3 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg xs:max-w-xl sm:max-w-2xl mx-2 xs:mx-4 md:mx-8 lg:mx-auto max-h-screen overflow-y-auto flex flex-col">
        {/* Close Button on Card */}
        <div className="w-full flex justify-end mb-2">
          <Button
            onClick={handleClose}
            variant="outline"
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-amber-500/90 hover:text-amber-950 hover:border-amber-400 transition-all duration-200 font-semibold px-4 py-2 xs:px-6 xs:py-3 flex"
          >
            <X className="h-5 w-5 mr-2" />
            Close
          </Button>
        </div>

        {/* Main Coming Soon Card */}
        <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white rounded-2xl shadow-2xl overflow-hidden border border-amber-700/50">
          <div className="relative p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400&query=basketball-pattern')] bg-repeat opacity-20"></div>
            </div>

            <div className="relative z-10 text-center flex flex-col">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 mb-3 xs:mb-4 sm:mb-6 bg-amber-500/20 rounded-full border border-amber-500/30 mx-auto">
                <ShoppingBag className="h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 text-amber-300" />
              </div>

              {/* Title */}
              <h1 className="mb-2 xs:mb-3 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h1>

              {/* Description */}
              <p className="mb-3 xs:mb-4 sm:mb-6 text-sm xs:text-base sm:text-lg md:text-xl text-amber-100 max-w-lg mx-auto leading-relaxed">{description}</p>

              {/* Expected Launch */}
              <div className="inline-flex items-center gap-2 px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 mb-4 xs:mb-6 sm:mb-8 bg-amber-500/20 rounded-full border border-amber-500/30">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
                <span className="text-amber-200 font-medium text-xs xs:text-sm sm:text-base">{expectedLaunch}</span>
              </div>

              {/* Features Preview */}
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-6 sm:mb-8 text-xs xs:text-sm">
                <div className="p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <h3 className="font-semibold text-amber-200 mb-1 sm:mb-2">Official Apparel</h3>
                  <p className="text-amber-100">Jerseys, hoodies, and practice gear</p>
                </div>
                <div className="p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <h3 className="font-semibold text-amber-200 mb-1 sm:mb-2">Hunter's Fuel</h3>
                  <p className="text-amber-100">Natural fruit juices for athletes</p>
                </div>
                <div className="p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <h3 className="font-semibold text-amber-200 mb-1 sm:mb-2">Accessories</h3>
                  <p className="text-amber-100">Wristbands, notebooks, and more</p>
                </div>
              </div>

              {/* Notify Me Form */}
              {!showNotifyForm ? (
                <Button
                  onClick={() => setShowNotifyForm(true)}
                  size="lg"
                  className="w-full sm:w-auto bg-amber-500 hover:text-white text-amber-950 font-bold px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 transition-all duration-200 transform hover:scale-105"
                >
                  <Bell className="h-5 w-5 mr-2" />
                  <span className="text-xs xs:text-sm sm:text-base md:text-lg">Notify Me When Available</span>
                </Button>
              ) : (
                <div className="max-w-md mx-auto w-full">
                  {!isSubscribed ? (
                    <form onSubmit={handleNotifySubmit}>
                      <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 mb-3 xs:mb-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          disabled={isSubmitting}
                          className="flex-1 px-3 py-2 xs:px-4 xs:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:opacity-50 w-full text-xs xs:text-sm"
                        />
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full xs:w-auto bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-4 py-2 xs:px-6 xs:py-3 disabled:opacity-50 transition-all duration-200"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-950 mr-2"></div>
                              Submitting...
                            </>
                          ) : (
                            "Notify Me"
                          )}
                        </Button>
                      </div>
                      <p className="text-amber-200 text-sm">We'll notify you as soon as the shop launches!</p>
                    </form>
                  ) : (
                    <div className="p-3 xs:p-4 sm:p-6 bg-green-500/20 border border-green-400/30 rounded-lg">
                      <div className="flex items-center justify-center mb-2 xs:mb-3">
                        <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-green-500/30 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-green-200 font-medium text-sm xs:text-base sm:text-lg mb-1 xs:mb-2">Thank you for subscribing!</p>
                      <p className="text-green-300 text-xs sm:text-sm mb-2 xs:mb-3">We'll notify you when the shop launches.</p>
                      <p className="text-green-400 text-xs">Redirecting to homepage...</p>
                    </div>
                  )}
                </div>
              )}

              {/* Social Media */}
              <div className="mt-4 xs:mt-6 sm:mt-8 pt-3 xs:pt-4 sm:pt-6 border-t border-amber-700/50">
                <p className="text-amber-200 mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm">Follow us for updates:</p>
                <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4">
                  <a
                    href="https://www.instagram.com/gbawe_basketballacademy/"
                    className="text-amber-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.315.315.49.753.49 1.243 0 .49-.175.928-.49 1.243-.369.315-.807.49-1.297.49z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/17DsvuX15q/?mibextid=LQQJ4d"
                    className="text-amber-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@GbaweBasketballAcademy"
                    className="text-amber-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@gbawebasketballacademy?is_from_webapp=1&sender_device=pc"
                    className="text-amber-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  >
                    <span className="sr-only">TikTok</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Additional Close Option */}
              <div className="mt-3 xs:mt-4 sm:mt-6 w-full flex justify-center">
                <Button
                  onClick={handleClose}
                  variant="ghost"
                  className="w-full max-w-xs text-amber-300 hover:text-white hover:bg-amber-600 focus:text-white focus:bg-amber-600 active:text-white active:bg-amber-700 transition-all duration-200 text-xs xs:text-sm sm:text-base block"
                >
                  Return to Homepage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
