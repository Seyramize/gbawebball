"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { FormData } from "./join-academy-client"

interface Props {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

export function HuntersPackForm({ formData, updateFormData }: Props) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">Preorder Your Hunter's Pack</h3>
        <p className="text-sm text-blue-800">
          Official training gear + scroll + socks + ID card — presented with the Hunter's Oath.
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="huntersPackSelected"
          checked={formData.huntersPackSelected}
          onCheckedChange={(checked) => updateFormData({ huntersPackSelected: checked as boolean })}
        />
        <Label htmlFor="huntersPackSelected" className="text-sm font-medium">
          I want to preorder the full Hunter's Pack (GHS 600)
        </Label>
      </div>

      {formData.huntersPackSelected && (
        <div className="space-y-4 pl-6 border-l-2 border-blue-200">
          <div>
            <Label htmlFor="huntersPackSize">Size *</Label>
            <Select
              value={formData.huntersPackSize}
              onValueChange={(value) => updateFormData({ huntersPackSize: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">XS</SelectItem>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium">Delivery Option</Label>
            <RadioGroup
              value={formData.deliveryOption}
              onValueChange={(value) => updateFormData({ deliveryOption: value })}
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup" className="text-sm">
                  Pickup at academy (Free)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="delivery" id="delivery" />
                <Label htmlFor="delivery" className="text-sm">
                  Home delivery (+GHS 20)
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      )}
    </div>
  )
}
