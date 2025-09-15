"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { FormData } from "./join-academy-client"

interface Props {
  formData: FormData
  onSubmit: () => void
}

export function OrderSummary({ formData, onSubmit }: Props) {
  const calculateTotal = () => {
    let total = 50 // Registration fee

    // Monthly plan
    if (formData.monthlyPlan === "basic") total += 300
    else if (formData.monthlyPlan === "hunter-plus") total += 855
    else if (formData.monthlyPlan === "halfyear") total += 1674
    else if (formData.monthlyPlan === "elite") total += 450
    else if (formData.monthlyPlan === "year") total += 3240
    else if (formData.monthlyPlan === "nonmember") total += 100
    // Hunter's Pack
    if (formData.huntersPackSelected) {
      total += 120
      if (formData.deliveryOption === "delivery") total += 20
    }

    return total
  }

  const getMonthlyPlanName = () => {
    const plans: Record<string, string> = {
      basic: "Hunter Membership",
      "hunter-plus": "Quarter Hunter Pack",
      halfyear: "Half-Year Hunter",
      year: "Year Hunter",
      elite: "Elite Add-On",
      nonmember: "Non-Member access",
    }
    return plans[formData.monthlyPlan] || ""
  }

  const getMonthlyPlanPrice = () => {
    const prices: Record<string, number> = {
      basic: 300,
      "hunter-plus": 855,
      halfyear: 1674,
      year: 3240,
      elite: 450,
      nonmember: 100,
    }
    return prices[formData.monthlyPlan] || 0
  }

  const isFormValid = () => {
    return (
      formData.playerName &&
      formData.age &&
      formData.guardianContact &&
      formData.trainingCategory &&
      formData.homeLocation &&
      formData.monthlyPlan &&
      formData.paymentMethod &&
      formData.registrationAgreed &&
      formData.paymentTermsAgreed
    )
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="text-amber-900">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Player Info */}
        {formData.playerName && (
          <div className="bg-amber-50 p-3 rounded-lg">
            <p className="font-medium text-amber-900">{formData.playerName}</p>
            {formData.age && <p className="text-sm text-amber-700">Age: {formData.age}</p>}
            {formData.trainingCategory && (
              <p className="text-sm text-amber-700">
                Category: {formData.trainingCategory.charAt(0).toUpperCase() + formData.trainingCategory.slice(1)}
              </p>
            )}
          </div>
        )}

        {/* Cost Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Registration Fee</span>
            <span>GHS 50</span>
          </div>

          {formData.monthlyPlan && (
            <div className="flex justify-between">
              <span>{getMonthlyPlanName()}</span>
              <span>GHS {getMonthlyPlanPrice()}</span>
            </div>
          )}

          {formData.huntersPackSelected && (
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

          <Separator />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-amber-900">GHS {calculateTotal()}</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={onSubmit}
          disabled={!isFormValid()}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3"
        >
          🏀 Join the Hunt
        </Button>

        {!isFormValid() && (
          <p className="text-xs text-gray-500 text-center">Please complete all required fields to submit</p>
        )}

        {/* Additional Info */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>• Auto-email/SMS confirmation after submission</p>
          <p>• Data sent to Academy Admin for review</p>
          <p>• Training starts within one week of confirmation</p>
        </div>
      </CardContent>
    </Card>
  )
}
