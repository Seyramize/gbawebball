"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Send, Trophy } from "lucide-react"

export function BootCampForm() {
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
            <Trophy className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Registration Submitted Successfully!</h3>
          <p className="text-green-800 mb-4">
            Thank you for registering for the GBAWE Basketball Academy Summer Boot Camp 2024!
          </p>
          <p className="text-sm text-green-700">
            A confirmation message will be sent to your email after review. We look forward to seeing you at Dansoman
            Court from June 6-11, 2024!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required />
        </div>

        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input id="fullName" name="fullName" required />
        </div>

        <div>
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input id="dateOfBirth" name="dateOfBirth" type="date" required />
        </div>

        <div>
          <Label htmlFor="age">Age</Label>
          <Input id="age" name="age" type="number" min="6" max="50" />
        </div>

        <div>
          <Label htmlFor="ageGroup">Select Age Group *</Label>
          <Select name="ageGroup" required>
            <SelectTrigger>
              <SelectValue placeholder="Select your age group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hunter-cubs">Hunter Cubs (6–9)</SelectItem>
              <SelectItem value="hunter-apprentices">Hunter Apprentices (10–13)</SelectItem>
              <SelectItem value="hunter-elite">Hunter Elite (14–17)</SelectItem>
              <SelectItem value="master-hunters">Master Hunters (18+)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Parent/Guardian Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Parent/Guardian Information</h3>

        <div>
          <Label htmlFor="parentName">Parent/Guardian Name</Label>
          <Input id="parentName" name="parentName" />
        </div>

        <div>
          <Label htmlFor="phoneNumber">Phone Number *</Label>
          <Input id="phoneNumber" name="phoneNumber" type="tel" required />
        </div>

        <div>
          <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
          <Input id="whatsappNumber" name="whatsappNumber" type="tel" />
        </div>

        <div>
          <Label htmlFor="emailAddress">Email Address</Label>
          <Input id="emailAddress" name="emailAddress" type="email" />
        </div>
      </div>

      {/* Health and Emergency Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Health & Emergency Information</h3>

        <div>
          <Label htmlFor="healthConditions">Any health conditions we should know about? *</Label>
          <Textarea
            id="healthConditions"
            name="healthConditions"
            placeholder="Please describe any medical conditions, allergies, or medications we should be aware of..."
            rows={3}
            required
          />
        </div>

        <div>
          <Label htmlFor="emergencyContact">Emergency Contact Number *</Label>
          <Input id="emergencyContact" name="emergencyContact" type="tel" required />
        </div>
      </div>

      {/* Payment Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Payment Options</h3>

        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <p className="text-sm text-amber-800 mb-3">
            Please select your preferred payment method. Payment details will be provided upon registration
            confirmation.
          </p>

          <div>
            <Label className="text-base font-medium">Select Payment Method *</Label>
            <RadioGroup name="paymentMethod" className="mt-2" required>
              <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="mobile-money" id="mobile-money" />
                <Label htmlFor="mobile-money" className="flex-1 cursor-pointer">
                  <div className="font-medium">Mobile Money</div>
                  <div className="text-sm text-gray-600">
                    Pay via MTN Mobile Money, Vodafone Cash, or AirtelTigo Money
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="flex-1 cursor-pointer">
                  <div className="font-medium">Cash</div>
                  <div className="text-sm text-gray-600">Pay in cash at the academy or during registration</div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Consent and Support */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Consent & Support</h3>

        <div>
          <Label className="text-base font-medium">
            Do you consent to your child being photographed for academy use?
          </Label>
          <RadioGroup name="photoConsent" className="mt-2" required>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="photo-yes" />
              <Label htmlFor="photo-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="photo-no" />
              <Label htmlFor="photo-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-base font-medium">
            Would you like to support the academy with a donation? (Optional)
          </Label>
          <RadioGroup name="donation" className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="donation-yes" />
              <Label htmlFor="donation-yes">Yes, I'd like to support</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="donation-no" />
              <Label htmlFor="donation-no">Not at this time</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting Registration...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Register for the Academy
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        * Required fields. A confirmation message will be sent after review.
      </p>
    </form>
  )
}
