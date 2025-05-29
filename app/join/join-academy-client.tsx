"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AcademyRegistrationForm } from "./academy-registration-form"
import { HuntersPackForm } from "./hunters-pack-form"
import { MonthlyPackageForm } from "./monthly-package-form"
import { PaymentDetailsForm } from "./payment-details-form"
import { OrderSummary } from "./order-summary"
import { ArrowDownCircle } from "lucide-react"

export interface FormData {
  // Academy Registration
  playerName: string
  age: string
  guardianContact: string
  trainingCategory: string
  playerPhoto: File | null
  homeLocation: string
  registrationAgreed: boolean

  // Hunter's Pack
  huntersPackSelected: boolean
  huntersPackSize: string
  deliveryOption: string

  // Monthly Package
  monthlyPlan: string

  // Payment
  paymentMethod: string
  momoNumber: string
  referenceId: string
  paymentProof: File | null
  paymentTermsAgreed: boolean
}

export function JoinAcademyClient() {
  const [formData, setFormData] = useState<FormData>({
    playerName: "",
    age: "",
    guardianContact: "",
    trainingCategory: "",
    playerPhoto: null,
    homeLocation: "",
    registrationAgreed: false,
    huntersPackSelected: false,
    huntersPackSize: "",
    deliveryOption: "pickup",
    monthlyPlan: "",
    paymentMethod: "",
    momoNumber: "",
    referenceId: "",
    paymentProof: null,
    paymentTermsAgreed: false,
  })

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }

  const handleSubmit = async () => {
    // Validate required fields
    const requiredFields = [
      "playerName",
      "age",
      "guardianContact",
      "trainingCategory",
      "homeLocation",
      "monthlyPlan",
      "paymentMethod",
    ]

    const missingFields = requiredFields.filter((field) => !formData[field as keyof FormData])

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`)
      return
    }

    if (!formData.registrationAgreed || !formData.paymentTermsAgreed) {
      alert("Please agree to all terms and conditions")
      return
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    alert("Registration submitted successfully! You will receive a confirmation email shortly.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-amber-900 text-white bg-[url('/clinthoop.jpg')] bg-cover bg-center bg-no-repeat"
        style={{ backgroundBlendMode: 'multiply' }}
      >
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Welcome to the Home of Hunters</h1>
          <p className="mb-8 max-w-2xl mx-auto text-xl text-amber-100">
            Become part of Ghana's most purposeful basketball academy. Join your age group, receive your official
            Hunter's Pack, and begin your journey to greatness through discipline, strategy, and execution. Fill the
            form below to register now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-amber-100 text-amber-900 px-4 py-2">
              One-Time Registration
            </Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-900 px-4 py-2">
              Monthly Training Plans
            </Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-900 px-4 py-2">
              Official Hunter's Pack
            </Badge>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <ArrowDownCircle className="mx-auto h-8 w-8 text-amber-100" />
          </div>
        </div>
      </section>

      <div className="container px-4 mx-auto py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section 1: Academy Registration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  🔰 Academy Registration (One-Time Sign-Up)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AcademyRegistrationForm formData={formData} updateFormData={updateFormData} />
              </CardContent>
            </Card>

            {/* Section 2: Hunter's Pack */}
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  🎽 Preorder Hunter's Pack (Optional Upgrade)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <HuntersPackForm formData={formData} updateFormData={updateFormData} />
              </CardContent>
            </Card>

            {/* Section 3: Monthly Package */}
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">🔁 Choose Monthly Package</CardTitle>
              </CardHeader>
              <CardContent>
                <MonthlyPackageForm formData={formData} updateFormData={updateFormData} />
              </CardContent>
            </Card>

            {/* Section 4: Payment Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">💰 Payment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <PaymentDetailsForm formData={formData} updateFormData={updateFormData} />
              </CardContent>
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <OrderSummary formData={formData} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  )
}
