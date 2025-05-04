import { Suspense } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Import a client component that will handle the dashboard UI
import DashboardClient from "./dashboard-client"

export const metadata = {
  title: "Admin Dashboard | Gbawe Academy",
  description: "Manage your store, orders, and analytics",
}

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="discounts">Discounts</TabsTrigger>
        </TabsList>

        <Suspense fallback={<div>Loading dashboard...</div>}>
          <DashboardClient />
        </Suspense>
      </Tabs>
    </div>
  )
}
