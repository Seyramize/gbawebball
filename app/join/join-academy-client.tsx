"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AcademyRegistrationTab } from "./academy-registration-tab"
import { MonthlyPackagesTab } from "./monthly-packages-tab"
import { ArrowDownCircle } from "lucide-react"

// Export these interfaces so they can be imported in other files
export interface RegistrationFormData {
  // Academy Registration
  playerName: string
  age: string
  guardianContact: string
  trainingCategory: string
  playerPhoto: File | null
  homeLocation: string
  registrationAgreed: boolean

  // Payment
  paymentMethod: string
  momoNumber: string
  referenceId: string
  paymentProof: File | null
  paymentTermsAgreed: boolean
}

export interface MonthlyPackageFormData {
  // Monthly Package Selection
  monthlyPlan: string
  huntersPackSeparate: boolean
  huntersPackSize: string
  deliveryOption: string

  // Payment
  paymentMethod: string
  momoNumber: string
  referenceId: string
  paymentProof: File | null
  paymentTermsAgreed: boolean
}

export function JoinAcademyClient() {
  const [activeTab, setActiveTab] = useState("registration")

  const [registrationData, setRegistrationData] = useState<RegistrationFormData>({
    playerName: "",
    age: "",
    guardianContact: "",
    trainingCategory: "",
    playerPhoto: null,
    homeLocation: "",
    registrationAgreed: false,
    paymentMethod: "",
    momoNumber: "",
    referenceId: "",
    paymentProof: null,
    paymentTermsAgreed: false,
  })

  const [monthlyPackageData, setMonthlyPackageData] = useState<MonthlyPackageFormData>({
    monthlyPlan: "",
    huntersPackSeparate: false,
    huntersPackSize: "",
    deliveryOption: "pickup",
    paymentMethod: "",
    momoNumber: "",
    referenceId: "",
    paymentProof: null,
    paymentTermsAgreed: false,
  })

  const updateRegistrationData = (updates: Partial<RegistrationFormData>) => {
    setRegistrationData((prev) => ({ ...prev, ...updates }))
  }

  const updateMonthlyPackageData = (updates: Partial<MonthlyPackageFormData>) => {
    setMonthlyPackageData((prev) => ({ ...prev, ...updates }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-amber-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Welcome to the Home of Hunters</h1>
          <p className="mb-8 max-w-2xl mx-auto text-xl text-amber-100">
            Become part of Ghana's most purposeful basketball academy. Join your age group, receive your official
            Hunter's Pack, and begin your journey to greatness through discipline, strategy, and execution.
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
        {/* Tabbed Interface */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="registration" className="text-lg py-3">
              🔰 Academy Registration
            </TabsTrigger>
            <TabsTrigger value="monthly" className="text-lg py-3">
              🔁 Monthly Training Packages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="registration">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-amber-900 text-xl">One-Time Academy Registration Package</CardTitle>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Complete Registration Package Includes:</h3>
                  <ul className="text-sm text-amber-800 space-y-1">
                    <li>• One-time registration fee</li>
                    <li>• Complete Hunter's Pack (Jersey, Shorts, Socks, Player ID, Hunter's Oath)</li>
                    <li>• FREE first month of training</li>
                    <li>• Welcome orientation session</li>
                  </ul>
                  <div className="mt-3 text-lg font-bold text-amber-900">Total Package: GHS 200</div>
                </div>
              </CardHeader>
            </Card>
            <AcademyRegistrationTab formData={registrationData} updateFormData={updateRegistrationData} />
          </TabsContent>

          <TabsContent value="monthly">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-amber-900 text-xl">Monthly Training Subscriptions</CardTitle>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">Choose Your Training Plan:</h3>
                  <p className="text-sm text-green-800">
                    Select from our various monthly training packages. Hunter's Pack can be purchased separately if
                    needed.
                  </p>
                </div>
              </CardHeader>
            </Card>
            <MonthlyPackagesTab formData={monthlyPackageData} updateFormData={updateMonthlyPackageData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
