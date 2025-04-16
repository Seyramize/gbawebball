import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-20 bg-amber-950 text-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Wear the Spirit. Fuel the Hunt.
          </h1>
        </div>
      </section>

      {/* Shop Categories */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-gray-900">Shop Categories</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Apparel */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
              <h3 className="mb-4 text-xl font-bold text-amber-900">1. Apparel</h3>
              <ul className="mb-6 space-y-2 text-gray-700">
                <li>Official GBAWE Jerseys</li>
                <li>Practice Tees (Hunter Cubs / Apprentices / Elite)</li>
                <li>"Trust. Obey. Become." Hoodie</li>
                <li>Master Hunter Shorts</li>
              </ul>
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/shop/apparel">Shop Apparel</Link>
              </Button>
            </div>

            {/* Hunter's Fuel */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
              <h3 className="mb-4 text-xl font-bold text-amber-900">2. Hunter's Fuel (Juice)</h3>
              <ul className="mb-6 space-y-2 text-gray-700">
                <li>Natural fruit juice developed for athletes</li>
                <li>Available in mango, pineapple, ginger-blend</li>
                <li>100% Natural, made in Ghana</li>
                <li>Available in-store and bulk orders for events</li>
              </ul>
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/shop/fuel">Buy Hunter's Fuel</Link>
              </Button>
            </div>

            {/* Accessories */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
              <h3 className="mb-4 text-xl font-bold text-amber-900">3. Accessories</h3>
              <ul className="mb-6 space-y-2 text-gray-700">
                <li>Wristbands with "Own Your Dreams"</li>
                <li>Basketball Notebooks</li>
                <li>Hunter's Planner (for journaling dreams + training goals)</li>
                <li>Vipers Posters</li>
              </ul>
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/shop/accessories">Shop Accessories</Link>
              </Button>
            </div>

            {/* Kingdom of Us Merch */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
              <h3 className="mb-4 text-xl font-bold text-amber-900">4. Kingdom of Us Merch</h3>
              <ul className="mb-6 space-y-2 text-gray-700">
                <li>T-shirts with cultural prints</li>
                <li>Tote bags with African symbols</li>
                <li>Heritage Stickers</li>
              </ul>
              <div className="bg-amber-100 text-amber-800 px-3 py-2 rounded-md mb-4 text-sm font-medium text-center">
                Coming Soon
              </div>
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Link href="/shop/waitlist">Join the Waitlist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Support the Movement. Represent the Mission.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-bold">
              <Link href="/shop">Visit the Full Store</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-amber-800">
              <Link href="/contact">Become a Distributor</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-amber-800">
              <Link href="/contact">Buy for a Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
