"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Send } from "lucide-react"

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <div className="text-green-600 mb-4">
            <Send className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Thank You for Your Interest!</h3>
          <p className="text-green-800">We've received your inquiry and will get back to you within 24 hours.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Parent/Guardian Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Parent/Guardian Information</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="parent-name">Full Name *</Label>
            <Input id="parent-name" name="parentName" required />
          </div>
          <div>
            <Label htmlFor="parent-phone">Phone Number *</Label>
            <Input id="parent-phone" name="parentPhone" type="tel" required />
          </div>
        </div>

        <div>
          <Label htmlFor="parent-email">Email Address *</Label>
          <Input id="parent-email" name="parentEmail" type="email" required />
        </div>
      </div>

      {/* Player Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Player Information</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="player-name">Player's Full Name *</Label>
            <Input id="player-name" name="playerName" required />
          </div>
          <div>
            <Label htmlFor="player-age">Age *</Label>
            <Select name="playerAge" required>
              <SelectTrigger>
                <SelectValue placeholder="Select age" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => i + 6).map((age) => (
                  <SelectItem key={age} value={age.toString()}>
                    {age} years old
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="experience">Basketball Experience</Label>
          <Select name="experience">
            <SelectTrigger>
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No experience</SelectItem>
              <SelectItem value="beginner">Beginner (less than 1 year)</SelectItem>
              <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
              <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Interest and Questions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Your Interest</h3>

        <div>
          <Label htmlFor="program-interest">Which program interests you?</Label>
          <Select name="programInterest">
            <SelectTrigger>
              <SelectValue placeholder="Select a program" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cubs">Hunter Cubs (Ages 6-9)</SelectItem>
              <SelectItem value="apprentices">Hunter Apprentices (Ages 10-13)</SelectItem>
              <SelectItem value="elite">Hunter Elites (Ages 14-17)</SelectItem>
              <SelectItem value="unsure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="questions">Questions or Additional Information</Label>
          <Textarea
            id="questions"
            name="questions"
            placeholder="Tell us about your goals, ask any questions, or share anything else you'd like us to know..."
            rows={4}
          />
        </div>
      </div>

      {/* Preferences */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Contact Preferences</h3>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="visit" name="preferences" value="visit" />
            <Label htmlFor="visit">I'd like to schedule a facility visit</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="trial" name="preferences" value="trial" />
            <Label htmlFor="trial">I'm interested in a trial session</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" name="preferences" value="newsletter" />
            <Label htmlFor="newsletter">Send me academy updates and news</Label>
          </div>
        </div>
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
            Send Inquiry
          </>
        )}
      </Button>
    </form>
  )
}
