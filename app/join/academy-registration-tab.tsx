"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { PaymentDetailsForm } from "./payment-details-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import type { RegistrationFormData } from "./join-academy-client"
import Link from "next/link"

interface Props {
  formData: RegistrationFormData
  updateFormData: (updates: Partial<RegistrationFormData>) => void
}

export function AcademyRegistrationTab({ formData, updateFormData }: Props) {
  const [playerPhotoPreview, setPlayerPhotoPreview] = useState<string | null>(null)

  const handlePlayerPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    updateFormData({ playerPhoto: file })

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPlayerPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPlayerPhotoPreview(null)
    }
  }

  const handleSubmit = () => {
    // Validate required fields
    const requiredFields = ["playerName", "age", "guardianContact", "trainingCategory", "homeLocation", "paymentMethod", "playerPhoto"]

    const missingFields = requiredFields.filter((field) => !formData[field as keyof RegistrationFormData])

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`)
      return
    }

    if (!formData.registrationAgreed || !formData.paymentTermsAgreed) {
      alert("Please agree to all terms and conditions")
      return
    }

    // Here you would typically send the data to your backend
    console.log("Registration form submitted:", formData)
    alert("Registration submitted successfully! You will receive a confirmation email shortly.")
  }

  return (
    <div className="space-y-8">
      {/* Player Information */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Player Information</h3>
              <p className="text-sm text-blue-800">
                Please provide accurate information about the player joining the academy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="playerName">Player Full Name *</Label>
                <Input
                  id="playerName"
                  value={formData.playerName}
                  onChange={(e) => updateFormData({ playerName: e.target.value })}
                  placeholder="Enter player's full name"
                />
              </div>

              <div>
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  value={formData.age}
                  onChange={(e) => updateFormData({ age: e.target.value })}
                  placeholder="Enter player's age"
                  type="number"
                  min="6"
                  max="99"
                />
              </div>

              <div>
                <Label htmlFor="guardianContact">Parent/Guardian Contact *</Label>
                <Input
                  id="guardianContact"
                  value={formData.guardianContact}
                  onChange={(e) => updateFormData({ guardianContact: e.target.value })}
                  placeholder="Enter contact number"
                />
              </div>

              <div>
                <Label htmlFor="trainingCategory">Training Category *</Label>
                <Select
                  value={formData.trainingCategory}
                  onValueChange={(value) => updateFormData({ trainingCategory: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select age category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cubs">Hunter Cubs (Ages 6-9)</SelectItem>
                    <SelectItem value="apprentice">Hunter Apprentices (Ages 10-13)</SelectItem>
                    <SelectItem value="elite">Hunter Elite (Ages 14-17)</SelectItem>
                    <SelectItem value="master">Master Hunters (18+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="playerPhoto">Player Photo *</Label>
                <Input
                  id="playerPhoto"
                  type="file"
                  accept="image/*"
                  required
                  onChange={handlePlayerPhotoChange}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {playerPhotoPreview && (
                  <div className="mt-2">
                    <img
                      src={playerPhotoPreview || "/placeholder.svg"}
                      alt="Player preview"
                      className="w-24 h-24 object-cover rounded-full border-2 border-blue-500"
                    />
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="homeLocation">Home Location *</Label>
                <Input
                  id="homeLocation"
                  value={formData.homeLocation}
                  onChange={(e) => updateFormData({ homeLocation: e.target.value })}
                  placeholder="Enter home location"
                />
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="registrationAgreed"
                checked={formData.registrationAgreed}
                onCheckedChange={(checked) => updateFormData({ registrationAgreed: checked as boolean })}
              />
              <Label htmlFor="registrationAgreed" className="text-sm leading-relaxed">
                I agree to the Academy's registration terms and conditions, including the use of player photos for
                academy purposes. *
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Details */}
      <Card>
        <CardContent className="pt-6">
          <PaymentDetailsForm formData={formData} updateFormData={updateFormData} />
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end gap-4">
        <Button onClick={handleSubmit} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
          Complete Registration
        </Button>
      </div>
    </div>
  )
}
