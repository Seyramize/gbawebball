"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { PaymentDetailsSection } from "./payment-details-section"
import { Check, Star, CheckCircle2 } from "lucide-react"
import type { MonthlyPackageFormData } from "./join-academy-client"

interface Props {
  formData: MonthlyPackageFormData
  updateFormData: (updates: Partial<MonthlyPackageFormData>) => void
}

export function MonthlyPackagesTab({ formData, updateFormData }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const packages = [
    {
      id: "basic",
      name: "Hunter Membership",
      description: "Weekly group training, access to matches, and skill development for all player groups",
      price: 300,
      popular: false,
      features: [
        "2 training sessions per week (based on age group)",
        "Core basketball fundamentals & drills",
        "Position-specific training",
        "Game time & match participation",
        "Monthly progress tracking",
      ],
    },
    {
      id: "hunter-plus",
      name: "Quarter Hunter Pack",
      description: "Pay 3 months in advance - save 5%",
      price: 855,
      originalPrice: 900,
      popular: true,
      features: [
        "All Hunter Membership features",
        "Priority scheduling",
        "1 free private session",
      ],
    },
    {
      id: "half-year",
      name: "Half-Year Hunter",
      description: "Pay 6 months in advance - save 7%",
      price: 1674,
      originalPrice: 1800,
      popular: false,
      features: [
        "All Hunter Membership features",
        "Priority scheduling",
        "2 free private session",
      ],
    },
    {
      id: "year",
      name: "Year Hunter",
      description: "Pay 12 months in advance - save 10%",
      price: 3240,
      originalPrice: 3600,
      popular: false,
      features: [
        "All Hunter Membership features",
        "Priority scheduling",
        "4 free private session",
      ],
    },
    {
      id: "elite",
      name: "Elite Add-On",
      description: "1 private session per month + group training",
      price: 450,
      popular: false,
      features: [
        "All Hunter+ features",
        "1 private session per month plus group training",
        "Video analysis sessions",
        "Advanced skill development",
        "Tournament preparation",
        "Direct coach mentorship",
      ],
    },
    {
      id: "non-member",
      name: "Non-Member access",
      description: "1 private session per month + group training",
      price: 100,
      popular: false,
      features: [
        "Limited access to selected academy activities",
      ],
    },
  ]

  const handleSubmit = async () => {
    if (!formData.monthlyPlan) {
      alert("Please select a monthly training package")
      return
    }

    if (!formData.paymentMethod || !formData.paymentTermsAgreed) {
      alert("Please complete payment details and agree to terms")
      return
    }

    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Monthly Package subscription submitted:", formData)
    alert("Subscription activated successfully! Your training package is now active.")

    setIsSubmitting(false)
  }

  const calculateTotal = () => {
    let total = 0

    // Monthly plan price
    const selectedPackage = packages.find((pkg) => pkg.id === formData.monthlyPlan)
    if (selectedPackage) {
      total += selectedPackage.price
    }

    // Hunter's Pack if selected
    if (formData.huntersPackSeparate) {
      total += 120
      if (formData.deliveryOption === "delivery") {
        total += 20
      }
    }

    return total
  }

  const isFormValid = () => {
    return formData.monthlyPlan && formData.paymentMethod && formData.paymentTermsAgreed
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Main Form */}
      <div className="lg:col-span-2 space-y-6">
        {/* Monthly Package Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-900">Select Monthly Training Package</CardTitle>
            <p className="text-sm text-gray-600">Choose the plan that best fits your training goals and schedule</p>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={formData.monthlyPlan}
              onValueChange={(value) => updateFormData({ monthlyPlan: value })}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {packages.map((pkg) => {
                const isSelected = formData.monthlyPlan === pkg.id
                return (
                  <div key={pkg.id} className="relative">
                    <div
                      className={`
                        relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg
                        ${
                          isSelected
                            ? "border-green-500 bg-gradient-to-br from-green-50 to-green-100 shadow-lg ring-2 ring-green-200"
                            : "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50/30"
                        }
                      `}
                      onClick={() => updateFormData({ monthlyPlan: pkg.id })}
                    >
                      {/* Selection Indicator */}
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <div className="bg-green-500 text-white rounded-full p-1 shadow-lg">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                        </div>
                      )}

                      {/* Popular Badge */}
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-amber-500 text-white px-3 py-1 text-xs font-semibold shadow-md">
                            <Star className="h-3 w-3 mr-1" />
                            MOST POPULAR
                          </Badge>
                        </div>
                      )}

                      {/* Hidden Radio Button */}
                      <RadioGroupItem value={pkg.id} id={pkg.id} className="sr-only" />

                      {/* Package Content */}
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="text-center">
                          <h3 className={`text-xl font-bold mb-2 ${isSelected ? "text-green-800" : "text-gray-900"}`}>
                            {pkg.name}
                          </h3>
                          <p className={`text-sm mb-3 ${isSelected ? "text-green-700" : "text-gray-600"}`}>
                            {pkg.description}
                          </p>

                          {/* Pricing */}
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <span className={`text-3xl font-bold ${isSelected ? "text-green-800" : "text-gray-900"}`}>
                              GHS {pkg.price}
                            </span>
                            {pkg.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">GHS {pkg.originalPrice}</span>
                            )}
                          </div>
                        </div>

                        {/* Features List */}
                        <div className="space-y-2">
                          {pkg.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Check
                                className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isSelected ? "text-green-600" : "text-green-500"}`}
                              />
                              <span className={`text-sm ${isSelected ? "text-green-800" : "text-gray-700"}`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Selection Status */}
                        {isSelected && (
                          <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                            <div className="flex items-center gap-2 text-green-800">
                              <CheckCircle2 className="h-4 w-4" />
                              <span className="text-sm font-medium">Selected Plan</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </RadioGroup>

            {/* Selected Plan Summary */}
            {formData.monthlyPlan && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-900">Your Selected Plan</span>
                </div>
                <div className="text-sm text-green-800">
                  <strong>{packages.find((pkg) => pkg.id === formData.monthlyPlan)?.name}</strong> - GHS{" "}
                  {packages.find((pkg) => pkg.id === formData.monthlyPlan)?.price}/month
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Hunter's Pack Add-on */}
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-900">Hunter's Pack (Optional)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="huntersPackSeparate"
                checked={formData.huntersPackSeparate}
                onCheckedChange={(checked) => updateFormData({ huntersPackSeparate: checked as boolean })}
              />
              <Label htmlFor="huntersPackSeparate" className="text-sm">
                Add Hunter's Pack to my order (GHS 120)
              </Label>
            </div>

            {formData.huntersPackSeparate && (
              <div className="space-y-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div>
                  <Label htmlFor="huntersPackSize">Select Size</Label>
                  <Select
                    value={formData.huntersPackSize}
                    onValueChange={(value) => updateFormData({ huntersPackSize: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">Extra Small (XS)</SelectItem>
                      <SelectItem value="s">Small (S)</SelectItem>
                      <SelectItem value="m">Medium (M)</SelectItem>
                      <SelectItem value="l">Large (L)</SelectItem>
                      <SelectItem value="xl">Extra Large (XL)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Delivery Option</Label>
                  <RadioGroup
                    value={formData.deliveryOption}
                    onValueChange={(value) => updateFormData({ deliveryOption: value })}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup">Pickup at Academy (Free)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery">Home Delivery (+GHS 20)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Payment Details */}
        <PaymentDetailsSection
          formData={formData}
          updateFormData={updateFormData}
          submitLabel="Subscribe Now"
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          isFormValid={isFormValid()}
        />
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <Card className="sticky top-4">
          <CardHeader>
            <CardTitle className="text-green-900">Subscription Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {formData.monthlyPlan && (
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-900">Selected Plan</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-800">
                      {packages.find((pkg) => pkg.id === formData.monthlyPlan)?.name}
                    </span>
                    <span className="font-semibold text-green-900">
                      GHS {packages.find((pkg) => pkg.id === formData.monthlyPlan)?.price}
                    </span>
                  </div>
                </div>
              )}

              {formData.huntersPackSeparate && (
                <>
                  <div className="flex justify-between">
                    <span>Hunter's Pack</span>
                    <span>GHS 120</span>
                  </div>
                  {formData.deliveryOption === "delivery" && (
                    <div className="flex justify-between text-sm">
                      <span>Delivery Fee</span>
                      <span>GHS 20</span>
                    </div>
                  )}
                </>
              )}

              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-green-900">GHS {calculateTotal()}</span>
              </div>
            </div>

            <div className="text-xs text-gray-500 space-y-1">
              <p>• Monthly subscription billing</p>
              <p>• Cancel anytime with notice</p>
              <p>• Training starts immediately</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
