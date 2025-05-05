import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { LogoutButton } from "@/components/admin/logout-button"

const inter = Inter({ subsets: ["latin"] })

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/admin/dashboard" className="text-xl font-bold">
            Gbawe Academy Admin
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/admin/dashboard">Dashboard</Link>
            <Link href="/admin/inventory">Inventory</Link>
            <Link href="/admin/orders">Orders</Link>
            <Link href="/admin/schedule">Schedule</Link>
            <Link href="/admin/media">Media</Link>
            <Link href="/">View Site</Link>
            <LogoutButton />
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
