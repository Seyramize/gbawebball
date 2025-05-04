"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Info } from "lucide-react"

export default function AdminSetupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [setupStatus, setSetupStatus] = useState<{
    adminSetup: boolean
    currentCount: number
    maxAllowed: number
  } | null>(null)

  useEffect(() => {
    async function fetchSetupStatus() {
      try {
        const response = await fetch("/api/admin/setup-status")
        if (response.ok) {
          const data = await response.json()
          setSetupStatus(data)
        }
      } catch (error) {
        console.error("Error fetching setup status:", error)
      }
    }

    fetchSetupStatus()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    // Basic validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      setLoading(false)
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long")
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      const response = await fetch("/api/admin/setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to set up admin account")
      }

      setSuccess(true)

      // Refresh setup status
      const statusResponse = await fetch("/api/admin/setup-status")
      if (statusResponse.ok) {
        const statusData = await statusResponse.json()
        setSetupStatus(statusData)
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during setup")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Admin Setup</CardTitle>
          <CardDescription>Create your admin account for Gbawe Academy</CardDescription>
        </CardHeader>
        <CardContent>
          {setupStatus && (
            <Alert className="mb-4">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Admin accounts: {setupStatus.currentCount} of {setupStatus.maxAllowed} created
              </AlertDescription>
            </Alert>
          )}

          {setupStatus && setupStatus.currentCount >= setupStatus.maxAllowed && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>Maximum number of admin accounts ({setupStatus.maxAllowed}) reached</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="mb-4 bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Success!</AlertTitle>
              <AlertDescription className="text-green-700">
                Admin account created successfully. Please add these values to your .env file:
                <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-x-auto">
                  ADMIN_EMAIL="{email}"<br />
                  ADMIN_PASSWORD="{password}"
                </pre>
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={setupStatus && setupStatus.currentCount >= setupStatus.maxAllowed}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={setupStatus && setupStatus.currentCount >= setupStatus.maxAllowed}
              />
              <p className="text-xs text-gray-500">Must be at least 8 characters</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={setupStatus && setupStatus.currentCount >= setupStatus.maxAllowed}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={loading || (setupStatus && setupStatus.currentCount >= setupStatus.maxAllowed)}
          >
            {loading ? "Setting up..." : "Create Admin Account"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
