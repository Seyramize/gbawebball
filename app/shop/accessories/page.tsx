import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShopProductCard } from "@/components/shop-product-card"

export default function AccessoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Basketball accessories"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Accessories</h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            Complete your Hunter's gear with our basketball accessories.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container px-4 mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/shop" className="hover:text-amber-900">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-900">Accessories</span>
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                name: "Own Your Dreams Wristband",
                price: 8.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Silicone wristband with our motivational slogan.",
                options: ["Black", "Amber", "White"],
                featured: true,
              },
              {
                id: 2,
                name: "Hunter's Planner",
                price: 15.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Goal-setting journal with training log and reflection prompts.",
                options: ["Standard"],
                featured: true,
              },
              {
                id: 3,
                name: "Basketball Notebook",
                price: 12.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Lined notebook with basketball court diagrams and play templates.",
                options: ["Standard"],
                featured: false,
              },
              {
                id: 4,
                name: "Vipers Team Poster",
                price: 10.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Official team poster of the Vipers Basketball team.",
                options: ["Standard"],
                featured: false,
              },
              {
                id: 5,
                name: "Hunter's Water Bottle",
                price: 18.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "1L stainless steel water bottle with academy logo.",
                options: ["Black", "Amber"],
                featured: true,
              },
              {
                id: 6,
                name: "Basketball Backpack",
                price: 45.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Durable backpack with ball compartment and academy logo.",
                options: ["Black/Amber", "All Black"],
                featured: false,
              },
              {
                id: 7,
                name: "Hunter's Headband",
                price: 12.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Performance headband with embroidered logo.",
                options: ["Black", "Amber", "White"],
                featured: false,
              },
              {
                id: 8,
                name: "Hunter's Socks",
                price: 15.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Performance basketball socks with cushioned sole.",
                options: ["S", "M", "L"],
                featured: false,
              },
              {
                id: 9,
                name: "Motivational Wall Decal",
                price: 20.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Vinyl wall decal with Hunter's motto.",
                options: ["Standard"],
                featured: false,
              },
            ].map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Gift Sets */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hunter's Gift Sets</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Starter Pack Gift Set"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Hunter's Starter Pack</h3>
                  <p className="text-gray-700 mb-4">
                    Perfect for new academy members. Includes water bottle, wristband, and notebook.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-amber-900">$30.00</span>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Add to Cart</Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Elite Player Gift Set"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Elite Player Pack</h3>
                  <p className="text-gray-700 mb-4">
                    Complete set for serious players. Includes backpack, planner, headband, and socks.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-amber-900">$75.00</span>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
