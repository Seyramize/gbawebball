"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm } from "../actions/contact-form"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    errors?: Record<string, string[]>
  } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      const formData = new FormData(event.currentTarget)
      const result = await submitContactForm(formData)

      setFormStatus(result)

      if (result.success) {
        // Reset the form on success
        event.currentTarget.reset()
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
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
            <AlertDescription>{formStatus.message}</AlertDescription>
          </div>
        </Alert>
      )}

      <div>
        <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input id="name" name="name" placeholder="Your name" className="w-full" required />
        {formStatus?.errors?.name && <p className="mt-1 text-sm text-red-600">{formStatus.errors.name[0]}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input id="email" name="email" type="email" placeholder="Your email" className="w-full" required />
        {formStatus?.errors?.email && <p className="mt-1 text-sm text-red-600">{formStatus.errors.email[0]}</p>}
      </div>

      <div>
        <Label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
          Phone Number (Optional)
        </Label>
        <Input id="phone" name="phone" placeholder="Your phone number" className="w-full" />
        {formStatus?.errors?.phone && <p className="mt-1 text-sm text-red-600">{formStatus.errors.phone[0]}</p>}
      </div>

      <div>
        <Label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea id="message" name="message" placeholder="Your message" className="w-full min-h-[120px]" required />
        {formStatus?.errors?.message && <p className="mt-1 text-sm text-red-600">{formStatus.errors.message[0]}</p>}
      </div>

      <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
