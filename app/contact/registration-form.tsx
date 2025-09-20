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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2, Send, FileText } from "lucide-react"

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <div className="text-green-600 mb-4">
            <FileText className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Registration Submitted Successfully!</h3>
          <p className="text-green-800 mb-4">
            Dear Hunter, thank you for completing your registration.Kindly note that registration starts on 3rd November,2025.Our team will get back to you soon.
          </p>
          <p className="text-sm text-green-700">Regards,
Gbawe Basketball 
Trust .Obey.Become</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Player Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Player Information</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="reg-player-first">First Name *</Label>
            <Input id="reg-player-first" name="playerFirstName" required />
          </div>
          <div>
            <Label htmlFor="reg-player-last">Last Name *</Label>
            <Input id="reg-player-last" name="playerLastName" required />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="reg-player-dob">Date of Birth *</Label>
            <Input id="reg-player-dob" name="playerDOB" type="date" required />
          </div>
          <div>
            <Label htmlFor="reg-player-gender">Gender *</Label>
            <Select name="playerGender" required>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="reg-player-height">Height (cm)</Label>
            <Input id="reg-player-height" name="playerHeight" type="number" placeholder="e.g., 150" />
          </div>
        </div>

        <div>
          <Label htmlFor="reg-player-school">Current School *</Label>
          <Input id="reg-player-school" name="playerSchool" required />
        </div>
      </div>

      {/* Parent/Guardian Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Parent/Guardian Information</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="reg-parent-first">First Name *</Label>
            <Input id="reg-parent-first" name="parentFirstName" required />
          </div>
          <div>
            <Label htmlFor="reg-parent-last">Last Name *</Label>
            <Input id="reg-parent-last" name="parentLastName" required />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="reg-parent-phone">Primary Phone *</Label>
            <Input id="reg-parent-phone" name="parentPhone" type="tel" required />
          </div>
          <div>
            <Label htmlFor="reg-parent-phone2">Secondary Phone</Label>
            <Input id="reg-parent-phone2" name="parentPhone2" type="tel" />
          </div>
        </div>

        <div>
          <Label htmlFor="reg-parent-email">Email Address *</Label>
          <Input id="reg-parent-email" name="parentEmail" type="email" required />
        </div>

        <div>
          <Label htmlFor="reg-address">Home Address *</Label>
          <Textarea id="reg-address" name="address" required rows={3} />
        </div>
      </div>

      {/* Basketball Experience */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basketball Experience</h3>

        <div>
          <Label className="text-base font-medium">Previous Basketball Experience *</Label>
          <RadioGroup name="experience" className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="exp-none" />
              <Label htmlFor="exp-none">No previous experience</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="recreational" id="exp-rec" />
              <Label htmlFor="exp-rec">Recreational/School basketball</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="club" id="exp-club" />
              <Label htmlFor="exp-club">Club/Academy experience</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="competitive" id="exp-comp" />
              <Label htmlFor="exp-comp">Competitive league experience</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="reg-teams">Previous Teams/Clubs (if any)</Label>
          <Textarea id="reg-teams" name="previousTeams" rows={2} />
        </div>

        <div>
          <Label htmlFor="reg-position">Preferred Position(s)</Label>
          <Input id="reg-position" name="position" placeholder="e.g., Point Guard, Center, etc." />
        </div>
      </div>

      {/* Program Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Program Selection</h3>

        <div>
          <Label htmlFor="reg-program">Preferred Program *</Label>
          <Select name="program" required>
            <SelectTrigger>
              <SelectValue placeholder="Select a program" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cubs">Hunter Cubs (Ages 6-9)</SelectItem>
              <SelectItem value="apprentices">Hunter Apprentices (Ages 10-13)</SelectItem>
              <SelectItem value="elite">Hunter Elites (Ages 14-17)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="reg-schedule">Preferred Training Schedule</Label>
          <Select name="schedule">
            <SelectTrigger>
              <SelectValue placeholder="Select preferred schedule" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekday-evening">Weekday Evenings</SelectItem>
              <SelectItem value="saturday-morning">Saturday Mornings</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Goals and Motivation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Goals & Motivation</h3>

        <div>
          <Label htmlFor="reg-goals">Player's Basketball Goals</Label>
          <Textarea
            id="reg-goals"
            name="goals"
            placeholder="What does the player hope to achieve through basketball?"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="reg-motivation">What motivates the player?</Label>
          <Textarea
            id="reg-motivation"
            name="motivation"
            placeholder="Tell us what drives the player's interest in basketball..."
            rows={3}
          />
        </div>
      </div>

      {/* Medical Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Medical Information</h3>

        <div>
          <Label htmlFor="reg-medical">Medical Conditions/Allergies</Label>
          <Textarea
            id="reg-medical"
            name="medical"
            placeholder="Please list any medical conditions, allergies, or medications we should be aware of..."
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="reg-emergency">Emergency Contact</Label>
          <Input id="reg-emergency" name="emergencyContact" placeholder="Name and phone number" />
        </div>
      </div>

      {/* Agreements */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Agreements & Consent</h3>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox id="waiver" name="agreements" value="waiver" required />
            <Label htmlFor="waiver" className="text-sm leading-relaxed">
              I understand that basketball involves physical activity and accept responsibility for any risks involved.
              I agree to the academy's liability waiver. *
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="photos" name="agreements" value="photos" />
            <Label htmlFor="photos" className="text-sm leading-relaxed">
              I consent to the academy using photos/videos of my child for promotional purposes.
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="communication" name="agreements" value="communication" />
            <Label htmlFor="communication" className="text-sm leading-relaxed">
              I agree to receive communications from the academy regarding training, events, and updates.
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="terms" name="agreements" value="terms" required />
            <Label htmlFor="terms" className="text-sm leading-relaxed">
              I have read and agree to the academy's terms and conditions. *
            </Label>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting Registration...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit Registration
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our terms of service and privacy policy.
      </p>
    </form>
  )
}
