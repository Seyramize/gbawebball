"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react"

export function BasicContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormStatus({
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      })

      // Reset the form on success
      event.currentTarget.reset()
    } catch (error) {
      setFormStatus({
        success: false,
        message: "Failed to send message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formStatus && (
        <Alert
          className={
            formStatus.success ? "bg-green-50 text-green-800 border-green-200" : "bg-red-50 text-red-800 border-red-200"
          }
        >
          <div className="flex items-center gap-2">
            {formStatus.success ? (
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertDescription className="text-sm">{formStatus.message}</AlertDescription>
          </div>
        </Alert>
      )}

      <div>
        <Label htmlFor="quick-name" className="text-sm font-medium text-gray-700">
          Name *
        </Label>
        <Input id="quick-name" name="name" placeholder="Your name" className="mt-1" required />
      </div>

      <div>
        <Label htmlFor="quick-email" className="text-sm font-medium text-gray-700">
          Email *
        </Label>
        <Input id="quick-email" name="email" type="email" placeholder="Your email" className="mt-1" required />
      </div>

      <div>
        <Label htmlFor="quick-phone" className="text-sm font-medium text-gray-700">
          Phone (Optional)
        </Label>
        <Input id="quick-phone" name="phone" type="tel" placeholder="Your phone number" className="mt-1" />
      </div>

      <div>
        <Label htmlFor="quick-message" className="text-sm font-medium text-gray-700">
          Message *
        </Label>
        <Textarea
          id="quick-message"
          name="message"
          placeholder="Your message..."
          className="mt-1 min-h-[80px]"
          required
        />
      </div>

      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
