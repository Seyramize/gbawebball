"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import type { RegistrationFormData, MonthlyPackageFormData } from "./join-academy-client"

// Create a union type that works with both form data types
type PaymentFormProps = {
  formData: RegistrationFormData | MonthlyPackageFormData
  updateFormData: (updates: Partial<RegistrationFormData> | Partial<MonthlyPackageFormData>) => void
}

export function PaymentDetailsForm({ formData, updateFormData }: PaymentFormProps) {
  const handlePaymentProofChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    updateFormData({ paymentProof: file })
  }

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
        <h3 className="font-semibold text-purple-900 mb-2">Complete Your Payment</h3>
        <p className="text-sm text-purple-800">Select your preferred payment method to finalize your registration.</p>
      </div>

      <div>
        <Label htmlFor="paymentMethod">Choose Payment Method *</Label>
        <Select value={formData.paymentMethod} onValueChange={(value) => updateFormData({ paymentMethod: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select payment method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="momo">Mobile Money (MTN/Vodafone/AirtelTigo)</SelectItem>
            <SelectItem value="bank">Bank Transfer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {formData.paymentMethod === "momo" && (
        <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-900">Mobile Money Payment Instructions</h4>
          <div className="text-sm text-blue-800 space-y-3">
            <div className="p-3 bg-white rounded border border-blue-200">
              <p className="font-semibold text-blue-900 mb-1">MTN Mobile Money:</p>
              <p>Dial *170# → Send Money</p>
              <p>
                <strong>Account Name:</strong> Gbawe Basketball Academy
              </p>
              <p>
                <strong>Account Number:</strong> 0XX XXX XXXX
              </p>
            </div>

            <div className="p-3 bg-white rounded border border-blue-200">
              <p className="font-semibold text-blue-900 mb-1">Vodafone Cash:</p>
              <p>Dial *110# → Send Money</p>
              <p>
                <strong>Account Name:</strong> Gbawe Basketball Academy
              </p>
              <p>
                <strong>Account Number:</strong> 0XX XXX XXXX
              </p>
            </div>

            <div className="p-3 bg-white rounded border border-blue-200">
              <p className="font-semibold text-blue-900 mb-1">AirtelTigo Money:</p>
              <p>Dial *110# → Send Money</p>
              <p>
                <strong>Account Name:</strong> Gbawe Basketball Academy
              </p>
              <p>
                <strong>Account Number:</strong> 0XX XXX XXXX
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> Please ensure the account name matches exactly before confirming your
              transaction.
            </p>
          </div>

          <div>
            <Label htmlFor="momoNumber">MoMo Number Used *</Label>
            <Input
              id="momoNumber"
              value={formData.momoNumber}
              onChange={(e) => updateFormData({ momoNumber: e.target.value })}
              placeholder="0XX XXX XXXX"
            />
          </div>
        </div>
      )}

      {formData.paymentMethod === "bank" && (
        <div className="space-y-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-900">Bank Transfer Details</h4>
          <div className="text-sm text-green-800 space-y-1">
            <p>
              <strong>Bank:</strong> [Bank Name]
            </p>
            <p>
              <strong>Account Name:</strong> Gbawe Basketball Academy
            </p>
            <p>
              <strong>Account Number:</strong> XXXX XXXX XXXX
            </p>
            <p>
              <strong>Branch:</strong> [Branch Name]
            </p>
          </div>
        </div>
      )}

      <div>
        <Label htmlFor="referenceId">Reference ID / Transaction ID</Label>
        <Input
          id="referenceId"
          value={formData.referenceId}
          onChange={(e) => updateFormData({ referenceId: e.target.value })}
          placeholder="Enter transaction reference"
        />
      </div>

      <div>
        <Label htmlFor="paymentProof">Upload Proof of Payment *</Label>
        <Input
          id="paymentProof"
          type="file"
          accept="image/*,.pdf"
          required
          onChange={handlePaymentProofChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
        />
        <p className="text-xs text-gray-500 mt-1">Upload screenshot or receipt of payment</p>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="paymentTermsAgreed"
          checked={formData.paymentTermsAgreed}
          onCheckedChange={(checked) => updateFormData({ paymentTermsAgreed: checked as boolean })}
        />
        <Label htmlFor="paymentTermsAgreed" className="text-sm leading-relaxed">
          I agree to the Academy's terms: no training after 5th of each month if unpaid. No refunds. Communication
          required for hardship support. *
        </Label>
      </div>
    </div>
  )
}
