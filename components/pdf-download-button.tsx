"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { jsPDF } from "jspdf"
import { useToast } from "@/hooks/use-toast"
import { Download, Loader2 } from "lucide-react"

// Import autoTable separately
import autoTable from "jspdf-autotable"

interface PdfDownloadButtonProps {
  reportType: "sales" | "inventory" | "orders"
  buttonText?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  startDate?: string
  endDate?: string
  className?: string
  showIcon?: boolean
}

export default function PdfDownloadButton({
  reportType,
  buttonText = "Download Report",
  variant = "outline",
  startDate,
  endDate,
  className = "",
  showIcon = true,
}: PdfDownloadButtonProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const generatePdf = async () => {
    setLoading(true)
    try {
      // Build the API URL based on report type
      let apiUrl = `/api/admin/reports/${reportType}`
      const params = new URLSearchParams()

      if (startDate) params.append("startDate", startDate)
      if (endDate) params.append("endDate", endDate)

      if (params.toString()) {
        apiUrl += `?${params.toString()}`
      }

      // Fetch the report data
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error("Failed to fetch report data")
      }

      const reportData = await response.json()

      // Create PDF document
      const doc = new jsPDF()

      // Add autoTable to jsPDF instance
      // @ts-ignore - autoTable will be attached to the doc instance
      autoTable(doc, {
        startY: reportData.subtitle ? 35 : 30,
        head: [reportData.columns.map((col) => col.header)],
        body: reportData.data.map((row: any) => reportData.columns.map((col) => row[col.key])),
        headStyles: {
          fillColor: [51, 51, 51],
          textColor: [255, 255, 255],
          fontStyle: "bold",
        },
        columnStyles: reportData.columns.reduce((styles: any, col: any, index: number) => {
          if (col.width) {
            styles[index] = { cellWidth: col.width / 5 }
          }
          return styles
        }, {}),
      })

      // Add title (after creating the document but before generating the table)
      doc.setFontSize(18)
      doc.text(reportData.title, 14, 22)

      // Add subtitle if available
      if (reportData.subtitle) {
        doc.setFontSize(12)
        doc.text(reportData.subtitle, 14, 30)
      }

      // Save PDF
      const fileName = `${reportType}-report-${new Date().toISOString().split("T")[0]}.pdf`
      doc.save(fileName)

      toast({
        title: "Report Downloaded",
        description: `Your ${reportType} report has been downloaded successfully.`,
      })
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast({
        variant: "destructive",
        title: "Download Failed",
        description: "There was a problem generating your report. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button variant={variant} onClick={generatePdf} disabled={loading} className={className}>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          {showIcon && <Download className="mr-2 h-4 w-4" />}
          {buttonText}
        </>
      )}
    </Button>
  )
}
