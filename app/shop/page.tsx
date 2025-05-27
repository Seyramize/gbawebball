import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ComingSoonOverlay } from "@/components/coming-soon-overlay"

export default function ShopPage() {
  return (
    <>
      {/* Coming Soon Overlay - Always rendered first to ensure it covers everything */}
      <ComingSoonOverlay
        title="Shop Coming Soon"
        description="We're putting the finishing touches on our shop. Get ready for exclusive GBAWE Basketball Academy merchandise including jerseys, Hunter's Fuel, and more!"
        expectedLaunch="Launch Date: TBA"
      />

      {/* Main Shop Content - Preserved underneath the overlay */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/images/shop/apparel-category.jpg"
              alt="Basketball merchandise"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 mx-auto text-center">
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
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/shop/apparel-category.jpg"
                    alt="Gbawe Basketball Apparel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-amber-900">1. Apparel</h3>
                  <ul className="mb-6 space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/images/shop/products/jersey.jpg" alt="Jersey" fill className="object-cover" />
                      </div>
                      <span>Official GBAWE Jerseys</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/shop/products/practice-tee.png"
                          alt="Practice Tee"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>Practice Tees (Hunter Cubs / Apprentices / Elite)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/images/shop/products/hoodie.png" alt="Hoodie" fill className="object-cover" />
                      </div>
                      <span>"Trust. Obey. Become." Hoodie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/images/shop/products/shorts.png" alt="Shorts" fill className="object-cover" />
                      </div>
                      <span>Master Hunter Shorts</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <Link href="/shop/apparel">Shop Apparel</Link>
                  </Button>
                </div>
              </div>

              {/* Hunter's Fuel */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/shop/fuel-category.jpg"
                    alt="Hunter's Fuel Juice"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-amber-900">2. Hunter's Fuel (Juice)</h3>
                  <ul className="mb-6 space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/shop/products/mango-juice.png"
                          alt="Mango Juice"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>Natural fruit juice developed for athletes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/shop/products/pineapple-juice.png"
                          alt="Pineapple Juice"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>Available in mango, pineapple, ginger-blend</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/shop/products/ginger-juice.png"
                          alt="Ginger Juice"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>100% Natural, made in Ghana</span>
                    </li>
                    <li>Available in-store and bulk orders for events</li>
                  </ul>
                  <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <Link href="/shop/fuel">Buy Hunter's Fuel</Link>
                  </Button>
                </div>
              </div>

              {/* Accessories */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/shop/accessories-category.jpg"
                    alt="Basketball Accessories"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-amber-900">3. Accessories</h3>
                  <ul className="mb-6 space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/shop/products/wristband.png"
                          alt="Wristband"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>Wristbands with "Own Your Dreams"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/images/shop/products/notebook.png" alt="Notebook" fill className="object-cover" />
                      </div>
                      <span>Basketball Notebooks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/images/shop/products/planner.png" alt="Planner" fill className="object-cover" />
                      </div>
                      <span>Hunter's Planner (for journaling dreams + training goals)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/images/shop/products/poster.png" alt="Poster" fill className="object-cover" />
                      </div>
                      <span>Vipers Posters</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <Link href="/shop/accessories">Shop Accessories</Link>
                  </Button>
                </div>
              </div>

              {/* Kingdom of Us Merch */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/shop/kingdom-category.jpg"
                    alt="Kingdom of Us Merchandise"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-amber-900">4. Kingdom of Us Merch</h3>
                  <ul className="mb-6 space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Soon</span>
                      </div>
                      <span>T-shirts with cultural prints</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Soon</span>
                      </div>
                      <span>Tote bags with African symbols</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Soon</span>
                      </div>
                      <span>Heritage Stickers</span>
                    </li>
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
    </>
  )
}
