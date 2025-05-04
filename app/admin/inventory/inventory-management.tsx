"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import PdfDownloadButton from "@/components/pdf-download-button"
import { AddProductModal } from "@/components/admin/add-product-modal"
import { ProductList } from "@/components/admin/product-list"
import { Plus } from "lucide-react"

const InventoryManagement = () => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleProductAdded = () => {
    // Increment refresh trigger to cause a re-fetch of products
    setRefreshTrigger((prev) => prev + 1)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <div className="flex items-center gap-2">
          <PdfDownloadButton reportType="inventory" buttonText="Export Inventory" />
          <Button onClick={() => setIsAddProductModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>
      </div>

      {/* Product listing */}
      <ProductList refreshTrigger={refreshTrigger} />

      <AddProductModal
        open={isAddProductModalOpen}
        onOpenChange={setIsAddProductModalOpen}
        onProductAdded={handleProductAdded}
      />
    </div>
  )
}

export default InventoryManagement
