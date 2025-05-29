"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Send, ShoppingBag } from "lucide-react"

export function MerchandiseForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <div className="text-green-600 mb-4">
            <ShoppingBag className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Merchandise Order Submitted!</h3>
          <p className="text-green-800 mb-4">
            Thank you for your merchandise preorder! Your order has been received and will be processed.
          </p>
          <p className="text-sm text-green-700">
            Payment will be confirmed via MoMo or at camp. We'll contact you with pickup/delivery details.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="merch-email">Email *</Label>
          <Input id="merch-email" name="email" type="email" required />
        </div>

        <div>
          <Label htmlFor="merch-fullName">Full Name *</Label>
          <Input id="merch-fullName" name="fullName" required />
        </div>

        <div>
          <Label htmlFor="merch-phone">Phone Number/ WhatsApp *</Label>
          <Input id="merch-phone" name="phone" type="tel" required />
        </div>

        <div>
          <Label htmlFor="ageGroupRole">Age Group or Role</Label>
          <Select name="ageGroupRole">
            <SelectTrigger>
              <SelectValue placeholder="Select your category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hunter-cubs">Hunter Cubs (6–9)</SelectItem>
              <SelectItem value="hunter-apprentices">Hunter Apprentices (10–13)</SelectItem>
              <SelectItem value="hunter-elite">Hunter Elite (14–17)</SelectItem>
              <SelectItem value="master-hunters">Master Hunters (18+)</SelectItem>
              <SelectItem value="coach">Coach</SelectItem>
              <SelectItem value="parent-guardian">Parent/Guardian</SelectItem>
              <SelectItem value="fan-supporter">Fan/Supporter</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* T-Shirt Order */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">T-Shirt Order</h3>

        <div>
          <Label className="text-base font-medium">Would you like to order a Camp T-Shirt?</Label>
          <RadioGroup name="tshirtOrder" className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="tshirt-yes" />
              <Label htmlFor="tshirt-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="tshirt-no" />
              <Label htmlFor="tshirt-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="tshirtSize">T-Shirt Size</Label>
          <Select name="tshirtSize">
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="xs">XS</SelectItem>
              <SelectItem value="s">S</SelectItem>
              <SelectItem value="m">M</SelectItem>
              <SelectItem value="l">L</SelectItem>
              <SelectItem value="xl">XL</SelectItem>
              <SelectItem value="xxl">XXL</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="tshirtColor">T-Shirt Color</Label>
          <Select name="tshirtColor">
            <SelectTrigger>
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="black">Black</SelectItem>
              <SelectItem value="white">White</SelectItem>
              <SelectItem value="yellow">Yellow</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="tshirtQuantity">Quantity</Label>
          <Input id="tshirtQuantity" name="tshirtQuantity" type="number" min="0" max="10" defaultValue="0" />
        </div>
      </div>

      {/* Water Bottle Order */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Water Bottle Order</h3>

        <div>
          <Label className="text-base font-medium">Would you like to order a Hunter Water Bottle?</Label>
          <RadioGroup name="waterBottleOrder" className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="bottle-yes" />
              <Label htmlFor="bottle-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="bottle-no" />
              <Label htmlFor="bottle-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="waterBottleQuantity">Quantity</Label>
          <Input id="waterBottleQuantity" name="waterBottleQuantity" type="number" min="0" max="10" defaultValue="0" />
        </div>
      </div>

      {/* Wristband Order */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Wristband Order</h3>

        <div>
          <Label className="text-base font-medium">Would you like the full wristband set (3 in 1)?</Label>
          <RadioGroup name="wristbandOrder" className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="wristband-yes" />
              <Label htmlFor="wristband-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="wristband-no" />
              <Label htmlFor="wristband-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="wristbandQuantity">Quantity</Label>
          <Input id="wristbandQuantity" name="wristbandQuantity" type="number" min="0" max="10" defaultValue="0" />
        </div>
      </div>

      {/* Bundle Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Discounted Bundle Options</h3>

        <div>
          <Label className="text-base font-medium">Would you prefer a discounted bundle?</Label>
          <RadioGroup name="bundleOption" className="mt-3 space-y-3">
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="starter-pack" id="starter-pack" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="starter-pack" className="font-medium">
                  Starter Pack – "Become a Hunter"
                </Label>
                <p className="text-sm text-gray-600">(1 T-Shirt, 1 Wristband)</p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  110 GHS / $8
                </Badge>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <RadioGroupItem value="hunter-pack" id="hunter-pack" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="hunter-pack" className="font-medium">
                  Hunter Pack – "Train with Purpose"
                </Label>
                <p className="text-sm text-gray-600">(1 T-Shirt, 1 Water Bottle, 1 Wristband)</p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  200 GHS / $15
                </Badge>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <RadioGroupItem value="full-camp-gear" id="full-camp-gear" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="full-camp-gear" className="font-medium">
                  Full Camp Gear Pack – "Walk the Way"
                </Label>
                <p className="text-sm text-gray-600">(2 T-Shirts, 1 Water Bottle, 1 Wristband Set, 1 Drawstring Bag)</p>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  300 GHS / $22
                </Badge>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no-bundle" id="no-bundle" />
              <Label htmlFor="no-bundle">No thanks</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Delivery and Payment */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Delivery & Payment</h3>

        <div>
          <Label htmlFor="deliveryMethod">Delivery Method</Label>
          <Select name="deliveryMethod">
            <SelectTrigger>
              <SelectValue placeholder="Select delivery method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pickup-at-camp">I will pick up at camp</SelectItem>
              <SelectItem value="delivery">I need delivery (GHS 20 fee)</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="paymentMethod">Payment Method</Label>
          <Select name="paymentMethod">
            <SelectTrigger>
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cash-at-camp">Cash at camp</SelectItem>
              <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="additionalNotes">Additional Notes or Questions (Optional)</Label>
          <Textarea
            id="additionalNotes"
            name="additionalNotes"
            placeholder="Any special requests, questions, or additional information..."
            rows={3}
          />
        </div>
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting Order...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit Merchandise Order
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        * Payment will be confirmed via MoMo or at camp. Limited quantities available.
      </p>
    </form>
  )
}
