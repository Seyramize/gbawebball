import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShopProductCard } from "@/components/shop-product-card"

export default function FuelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Hunter's Fuel drinks"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Hunter's Fuel</h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
            Natural fruit juices developed specifically for athletes.
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
            <span className="font-medium text-gray-900">Hunter's Fuel</span>
          </div>
        </div>
      </div>

      {/* About Hunter's Fuel */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fuel Your Performance</h2>
            <p className="text-lg text-gray-700">
              Hunter's Fuel is our line of 100% natural fruit juices, made in Ghana with locally sourced ingredients.
              Developed with athletes in mind, these drinks provide the perfect balance of hydration, natural sugars,
              and nutrients to power your performance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                name: "Hunter's Fuel - Mango",
                price: 5.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "100% natural mango juice with a hint of ginger. 500ml bottle.",
                options: ["Single Bottle", "6-Pack", "12-Pack"],
                featured: true,
              },
              {
                id: 2,
                name: "Hunter's Fuel - Pineapple",
                price: 5.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "100% natural pineapple juice. Refreshing and energizing. 500ml bottle.",
                options: ["Single Bottle", "6-Pack", "12-Pack"],
                featured: false,
              },
              {
                id: 3,
                name: "Hunter's Fuel - Ginger Blend",
                price: 5.5,
                image: "/placeholder.svg?height=600&width=600",
                description: "Special blend with ginger, pineapple, and a hint of lime. 500ml bottle.",
                options: ["Single Bottle", "6-Pack", "12-Pack"],
                featured: true,
              },
              {
                id: 4,
                name: "Hunter's Fuel - Watermelon",
                price: 5.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Hydrating watermelon juice. Perfect for post-workout recovery. 500ml bottle.",
                options: ["Single Bottle", "6-Pack", "12-Pack"],
                featured: false,
              },
              {
                id: 5,
                name: "Hunter's Fuel - Mixed Berry",
                price: 5.5,
                image: "/placeholder.svg?height=600&width=600",
                description: "Antioxidant-rich mixed berry blend. 500ml bottle.",
                options: ["Single Bottle", "6-Pack", "12-Pack"],
                featured: false,
              },
              {
                id: 6,
                name: "Hunter's Fuel Variety Pack",
                price: 30.0,
                image: "/placeholder.svg?height=600&width=600",
                description: "Try all our flavors with this 6-bottle variety pack.",
                options: ["6-Pack", "12-Pack"],
                featured: true,
              },
            ].map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Information */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nutrition Information</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Why Hunter's Fuel?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                        ✓
                      </span>
                      <span>100% natural with no added sugars or preservatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                        ✓
                      </span>
                      <span>Made with locally sourced Ghanaian fruits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                        ✓
                      </span>
                      <span>Balanced electrolytes for optimal hydration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                        ✓
                      </span>
                      <span>Natural antioxidants to support recovery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                        ✓
                      </span>
                      <span>Supports local farmers and sustainable agriculture</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">When to Drink</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                        1
                      </span>
                      <span>
                        <strong>Pre-Workout:</strong> Drink 30 minutes before training for natural energy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                        2
                      </span>
                      <span>
                        <strong>During Activity:</strong> Sip throughout intense sessions to maintain hydration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                        3
                      </span>
                      <span>
                        <strong>Post-Workout:</strong> Drink within 30 minutes after exercise to aid recovery
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                        4
                      </span>
                      <span>
                        <strong>Daily Nutrition:</strong> Enjoy as part of a balanced diet for natural vitamins
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Bulk Orders</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700">
            Need Hunter's Fuel for your team, event, or organization? We offer special pricing for bulk orders.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
            <Link href="/contact">Contact for Bulk Orders</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
