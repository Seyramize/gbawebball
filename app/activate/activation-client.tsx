"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Shield, Zap } from "lucide-react"

interface ActivationFormData {
  fullName: string
  emailOrPhone: string
  age: string
  category: string
  hunterPackCode: string
  declaration: boolean
}

type ActivationFormErrors = {
  [K in keyof ActivationFormData]?: string
}

export default function ActivationClient() {
  const [formData, setFormData] = useState<ActivationFormData>({
    fullName: "",
    emailOrPhone: "",
    age: "",
    category: "",
    hunterPackCode: "",
    declaration: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<ActivationFormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: ActivationFormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = "Email or phone is required"
    }

    if (!formData.age || Number.parseInt(formData.age) < 6 || Number.parseInt(formData.age) > 100) {
      newErrors.age = "Please enter a valid age (6-100)"
    }

    if (!formData.category) {
      newErrors.category = "Please select your category"
    }

    if (!formData.hunterPackCode.trim()) {
      newErrors.hunterPackCode = "Hunter Pack Code is required"
    }

    if (!formData.declaration) {
      newErrors.declaration = "You must accept the Hunter declaration"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Send form data to API
    const response = await fetch("/api/activate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    setIsSubmitting(false)

    if (response.ok) {
      setIsSubmitted(true)
    } else {
      // Optionally show an error toast/message
      alert("There was an error sending your activation. Please try again.")
    }
  }

  const updateFormData = (field: keyof ActivationFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-500 rounded-full mb-6 animate-pulse">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Welcome to the Hunt.</h1>
            <div className="flex justify-center gap-4 mt-8">
              <Badge variant="outline" className="bg-amber-200/60 text-amber-900 border-amber-400">
                <Target className="w-4 h-4 mr-2" />
                Hunter Activated
              </Badge>
              <Badge variant="outline" className="bg-amber-400/20 text-amber-900 border-amber-400">
                <Shield className="w-4 h-4 mr-2" />
                Legacy Member
              </Badge>
            </div>
          </div>
          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
          >
            Enter the Academy
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden bg-white"
        style={{ minHeight: "350px" }}
      >
        {/* Subtle logo overlay */}
        <div
          className="absolute inset-0 bg-[url('/images/gbawe-logo.png')] bg-center bg-no-repeat bg-contain opacity-10 blur-sm pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 tracking-tight">
              🏹 You've entered sacred ground.
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              This is where you activate your place as a true Hunter of the Gbawe Basketball Academy.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex flex-row justify-center gap-3 md:gap-8 mt-8 md:mt-12 px-2 md:px-0">
            <div className="flex items-center gap-1 md:gap-2 bg-amber-200/40 backdrop-blur-sm rounded-full px-2 py-1 md:px-4 md:py-2 border border-amber-300">
              <Target className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
              <span className="text-amber-900 font-medium text-sm md:text-base">Precision</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 bg-amber-200/40 backdrop-blur-sm rounded-full px-2 py-1 md:px-4 md:py-2 border border-amber-300">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-amber-700" />
              <span className="text-amber-900 font-medium text-sm md:text-base">Discipline</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 bg-amber-200/40 backdrop-blur-sm rounded-full px-2 py-1 md:px-4 md:py-2 border border-amber-300">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
              <span className="text-amber-900 font-medium text-sm md:text-base">Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activation Form */}
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-2">Claim Your Identity</h2>
              <p className="text-amber-700">Complete your activation to join the Hunter legacy</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-amber-700 font-medium">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                  className={`h-12 ${errors.fullName ? "border-red-500" : "border-amber-300"}`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>

              {/* Email / Phone */}
              <div className="space-y-2">
                <Label htmlFor="emailOrPhone" className="text-amber-700 font-medium">
                  Email / Phone *
                </Label>
                <Input
                  id="emailOrPhone"
                  type="text"
                  value={formData.emailOrPhone}
                  onChange={(e) => updateFormData("emailOrPhone", e.target.value)}
                  className={`h-12 ${errors.emailOrPhone ? "border-red-500" : "border-amber-300"}`}
                  placeholder="Enter your email or phone number"
                />
                {errors.emailOrPhone && <p className="text-red-500 text-sm">{errors.emailOrPhone}</p>}
              </div>

              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="age" className="text-amber-700 font-medium">
                  Age *
                </Label>
                <Input
                  id="age"
                  type="number"
                  min="6"
                  max="100"
                  value={formData.age}
                  onChange={(e) => updateFormData("age", e.target.value)}
                  className={`h-12 ${errors.age ? "border-red-500" : "border-amber-300"}`}
                  placeholder="Enter your age"
                />
                {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
              </div>

              {/* Category Selection */}
              <div className="space-y-2">
                <Label className="text-amber-700 font-medium">Select your category *</Label>
                <Select value={formData.category} onValueChange={(value) => updateFormData("category", value)}>
                  <SelectTrigger className={`h-12 ${errors.category ? "border-red-500" : "border-amber-300"}`}>
                    <SelectValue placeholder="Choose your Hunter category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cubs">🐾 Hunter Cubs (6–9)</SelectItem>
                    <SelectItem value="apprentices">🦅 Hunter Apprentices (10–13)</SelectItem>
                    <SelectItem value="elites">🐺 Hunter Elites (14–17)</SelectItem>
                    <SelectItem value="masters">🐉 Master Hunters (18+)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
              </div>

              {/* Hunter Pack Code */}
              <div className="space-y-2">
                <Label htmlFor="hunterPackCode" className="text-amber-700 font-medium">
                  Hunter Pack Code *
                </Label>
                <Input
                  id="hunterPackCode"
                  type="text"
                  value={formData.hunterPackCode}
                  onChange={(e) => updateFormData("hunterPackCode", e.target.value.toUpperCase())}
                  className={`h-12 font-mono ${errors.hunterPackCode ? "border-red-500" : "border-amber-300"}`}
                  placeholder="Enter your Hunter Pack activation code"
                />
                {errors.hunterPackCode && <p className="text-red-500 text-sm">{errors.hunterPackCode}</p>}
              </div>

              {/* Declaration Checkbox */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <Checkbox
                    id="declaration"
                    checked={formData.declaration}
                    onCheckedChange={(checked) => updateFormData("declaration", checked as boolean)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="declaration" className="text-amber-900 leading-relaxed cursor-pointer">
                      I've activated my identity as a Hunter. I vow to pursue growth, discipline, and courage on and
                      off the court.
                    </Label>
                  </div>
                </div>
                {errors.declaration && <p className="text-red-500 text-sm">{errors.declaration}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Activating...
                  </div>
                ) : (
                  "🟢 Activate Me"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
