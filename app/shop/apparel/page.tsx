import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShopProductCard } from "@/components/shop-product-card"

export default function ApparelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Basketball apparel"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Gbawe Apparel</h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            Wear the spirit of the Hunt with our official academy apparel.
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
            <span className="font-medium text-gray-900">Apparel</span>
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
                name: "Official Vipers Jersey",
                price: 65.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Official game jersey worn by the Vipers Basketball team.",
                options: ["S", "M", "L", "XL", "XXL"],
                featured: true,
              },
              {
                id: 2,
                name: "Hunter Elites Practice Tee",
                price: 35.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Breathable performance tee for training sessions.",
                options: ["S", "M", "L", "XL"],
                featured: false,
              },
              {
                id: 3,
                name: "Trust. Obey. Become. Hoodie",
                price: 55.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Comfortable hoodie featuring our academy motto.",
                options: ["S", "M", "L", "XL", "XXL"],
                featured: true,
              },
              {
                id: 4,
                name: "Hunter Cubs Training Shirt",
                price: 25.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Colorful training shirt for our youngest athletes.",
                options: ["Youth S", "Youth M", "Youth L"],
                featured: false,
              },
              {
                id: 5,
                name: "Master Hunter Shorts",
                price: 40.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Performance basketball shorts with side pockets.",
                options: ["S", "M", "L", "XL"],
                featured: false,
              },
              {
                id: 6,
                name: "Gbawe Academy Track Jacket",
                price: 70.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Stylish track jacket with academy logo.",
                options: ["S", "M", "L", "XL"],
                featured: false,
              },
            ].map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Team Orders</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700">
            Looking to outfit your entire team? We offer special pricing for bulk orders and custom designs.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
            <Link href="/contact">Contact for Team Orders</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
