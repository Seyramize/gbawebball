"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import type { FormData } from "./join-academy-client"

interface Props {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

export function MonthlyPackageForm({ formData, updateFormData }: Props) {
  const packages = [
    {
      id: "basic",
      name: "Basic Hunter",
      description: "Weekly group training, access to matches",
      price: "GHS 80",
      popular: false,
    },
    {
      id: "hunter-plus",
      name: "Hunter+ Pack",
      description: "Basic + full Hunter's Pack",
      price: "GHS 200",
      popular: true,
    },
    {
      id: "quarter",
      name: "Quarter Hunter",
      description: "Pay 3 months in advance, 5% off total",
      price: "GHS 228",
      popular: false,
    },
    {
      id: "elite",
      name: "Elite Add-On",
      description: "1 private session per month + group training",
      price: "GHS 150",
      popular: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="font-semibold text-green-900 mb-2">Select Your Monthly Training Plan</h3>
        <p className="text-sm text-green-800">Choose the training package that best fits your goals and budget.</p>
      </div>

      <RadioGroup
        value={formData.monthlyPlan}
        onValueChange={(value) => updateFormData({ monthlyPlan: value })}
        className="space-y-4"
      >
        {packages.map((pkg) => (
          <div key={pkg.id} className="relative">
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                formData.monthlyPlan === pkg.id
                  ? "border-amber-500 bg-amber-50"
                  : "border-gray-200 hover:border-amber-300"
              }`}
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value={pkg.id} id={pkg.id} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Label htmlFor={pkg.id} className="font-medium cursor-pointer">
                      {pkg.name}
                    </Label>
                    {pkg.popular && (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800 text-xs">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
                  <p className="font-semibold text-amber-900">{pkg.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
