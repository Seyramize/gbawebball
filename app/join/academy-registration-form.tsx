"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import type { RegistrationFormData } from "./join-academy-client"

interface Props {
  formData: RegistrationFormData
  updateFormData: (updates: Partial<RegistrationFormData>) => void
}

export function AcademyRegistrationForm({ formData, updateFormData }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    updateFormData({ playerPhoto: file })
  }

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-2">Join the Academy</h3>
        <p className="text-sm text-amber-800">
          Complete your one-time registration to become part of the Gbawe Basketball Academy family.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="playerName">Name of Player *</Label>
          <Input
            id="playerName"
            value={formData.playerName}
            onChange={(e) => updateFormData({ playerName: e.target.value })}
            placeholder="Enter player's full name"
            required
          />
        </div>

        <div>
          <Label htmlFor="age">Age *</Label>
          <Input
            id="age"
            type="number"
            value={formData.age}
            onChange={(e) => updateFormData({ age: e.target.value })}
            placeholder="Enter age"
            min="6"
            max="50"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="guardianContact">Guardian Contact Number *</Label>
        <Input
          id="guardianContact"
          value={formData.guardianContact}
          onChange={(e) => updateFormData({ guardianContact: e.target.value })}
          placeholder="+233 XXX XXX XXXX"
          required
        />
      </div>

      <div>
        <Label htmlFor="trainingCategory">Select Training Category *</Label>
        <Select
          value={formData.trainingCategory}
          onValueChange={(value) => updateFormData({ trainingCategory: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose your training category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cubs">Hunter Cubs (6-9 years)</SelectItem>
            <SelectItem value="apprentices">Hunter Apprentices (10-13 years)</SelectItem>
            <SelectItem value="elite">Hunter Elite (14-17 years)</SelectItem>
            <SelectItem value="masters">Master Hunters (18+ years)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="playerPhoto">Upload Player Photo</Label>
        <Input
          id="playerPhoto"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
        />
        <p className="text-xs text-gray-500 mt-1">Upload a clear photo of the player (optional but recommended)</p>
      </div>

      <div>
        <Label htmlFor="homeLocation">Home Location / Area *</Label>
        <Input
          id="homeLocation"
          value={formData.homeLocation}
          onChange={(e) => updateFormData({ homeLocation: e.target.value })}
          placeholder="e.g., Gbawe, Dansoman, Ablekuma"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="registrationAgreed"
          checked={formData.registrationAgreed}
          onCheckedChange={(checked) => updateFormData({ registrationAgreed: checked as boolean })}
        />
        <Label htmlFor="registrationAgreed" className="text-sm">
          I understand this is a one-time registration and monthly fees are required to remain active. *
        </Label>
      </div>
    </div>
  )
}
