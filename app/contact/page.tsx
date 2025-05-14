import { Instagram, Youtube, Facebook } from "lucide-react"
import Image from "next/image"
import { ContactForm } from "./contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative w-full py-20 bg-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/outdoor-basketball-court.png" alt="Basketball court" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Step Into the Hunt - Let&apos;s Talk.
          </h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-center text-gray-900">
              Got Questions? Want to Join or Visit the Academy?
            </h2>
            <p className="mb-10 text-lg text-center text-gray-600">
              Whether you&apos;re a parent, coach, athlete, or fan — we&apos;re here to connect.
            </p>

            <div className="grid gap-10 md:grid-cols-2">
              {/* Form */}
              <div className="p-6 bg-amber-50 rounded-lg">
                <h3 className="mb-6 text-xl font-bold text-amber-900">Contact Form</h3>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div>
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-amber-900">Academy Address</h3>
                  <p className="text-gray-700">
                    Gbawe Basketball Academy
                    <br />
                    Near Gbawe Cluster of Schools
                    <br />
                    Gbawe, Ghana
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-amber-900">Phone/WhatsApp</h3>
                  <p className="text-gray-700">+233 (XXX) XXX-XXXX</p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-amber-900">Email</h3>
                  <p className="text-gray-700">gbaweacademy@huntmail.com</p>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-amber-900">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 text-amber-900 hover:text-amber-600 transition-colors">
                      <Instagram className="w-6 h-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="p-2 text-amber-900 hover:text-amber-600 transition-colors">
                      <Youtube className="w-6 h-6" />
                      <span className="sr-only">YouTube</span>
                    </a>
                    <a href="#" className="p-2 text-amber-900 hover:text-amber-600 transition-colors">
                      <Facebook className="w-6 h-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    {/* TikTok Icon */}
                    <a
                      href="#"
                      className="p-2 text-amber-900 hover:text-amber-600 transition-colors"
                      aria-label="TikTok"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                      <span className="sr-only">TikTok</span>
                    </a>
                    {/* Snapchat Icon */}
                    <a
                      href="#"
                      className="p-2 text-amber-900 hover:text-amber-600 transition-colors"
                      aria-label="Snapchat"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.206 1.5c1.284.003 4.392.08 5.986 3.574.52 1.136.425 3.039.284 4.585l-.035.391c-.025.287-.046.543-.059.787.087.044.342.164.815.164.3 0 .662-.062 1.048-.184.193-.061.364-.092.513-.092.215 0 .39.046.525.137.22.145.356.37.356.59 0 .398-.36.798-1.444 1.118-.14.041-.302.09-.47.142-.51.157-.76.295-.76.462 0 .073.035.18.103.27.292.39 1.263 1.013 2.44 1.226.12.022.22.133.22.255 0 .405-.44.621-.532.703-.33.3-.772.453-1.957.453-.257 0-.514-.012-.763-.024l-.136-.007c-.157-.007-.31-.015-.456-.015-.319 0-.573.035-.784.107-.42.142-.794.283-1.178.43-1.004.385-2.147.821-3.834.821-.063 0-.124-.001-.185-.004-.057.003-.115.004-.174.004-1.687 0-2.83-.436-3.834-.821-.384-.147-.758-.288-1.179-.43-.207-.071-.459-.105-.775-.105-.147 0-.3.008-.458.015l-.135.007c-.25.012-.506.024-.764.024-1.184 0-1.626-.152-1.956-.453-.091-.082-.532-.298-.532-.703 0-.122.1-.233.22-.255 1.178-.213 2.148-.835 2.44-1.226.068-.09.103-.197.103-.27 0-.167-.25-.305-.76-.462-.168-.052-.33-.101-.47-.142-1.084-.32-1.444-.72-1.444-1.118 0-.22.136-.445.356-.59.135-.09.31-.137.525-.137.15 0 .32.03.513.092.386.122.748.184 1.048.184.473 0 .728-.12.815-.164-.013-.244-.034-.5-.06-.787l-.034-.391c-.141-1.546-.236-3.449.284-4.585 1.594-3.494 4.702-3.571 5.986-3.574.033 0 .066 0 .099.001.033-.001.066-.001.099-.001zm.008 1.299c-.034 0-.066 0-.098.001-.033-.001-.065-.001-.099-.001-.937.002-3.569.048-4.805 2.75-.377.824-.298 2.495-.175 3.828l.036.393c.037.421.068.776.079 1.097.005.15-.035.29-.112.394-.08.108-.194.176-.32.19-.377.042-.783-.146-1.315-.305-.175-.055-.367-.115-.568-.115-.142 0-.273.03-.386.09-.06.03-.116.07-.165.122.069.035.156.07.27.113.186.07.374.128.556.183.35.107.713.218.941.368.334.219.519.517.519.838 0 .267-.108.545-.322.826-.41.538-1.194 1.068-2.315 1.356.207.232.738.343 1.268.343.216 0 .435-.01.648-.021l.136-.007c.17-.008.339-.016.503-.016.418 0 .778.053 1.073.157.407.138.764.272 1.131.412 1.063.407 2.062.792 3.658.792.049 0 .097-.001.145-.003.048.002.096.003.145.003 1.596 0 2.595-.385 3.658-.792.367-.14.724-.274 1.13-.412.296-.104.656-.157 1.074-.157.164 0 .333.008.503.016l.136.007c.213.011.432.021.648.021.53 0 1.06-.111 1.268-.343-1.121-.288-1.905-.818-2.315-1.356-.214-.281-.322-.559-.322-.826 0-.321.185-.619.519-.838.228-.15.59-.261.941-.368.182-.055.37-.113.556-.183.114-.043.201-.078.27-.113-.049-.052-.105-.092-.165-.122-.113-.06-.244-.09-.386-.09-.201 0-.393.06-.568.115-.532.159-.938.347-1.315.305-.126-.014-.24-.082-.32-.19-.077-.104-.117-.244-.112-.394.011-.321.042-.676.079-1.097l.036-.393c.123-1.333.202-3.004-.175-3.828-1.236-2.702-3.868-2.748-4.805-2.75z" />
                      </svg>
                      <span className="sr-only">Snapchat</span>
                    </a>
                    {/* WhatsApp Icon */}
                    <a
                      href="#"
                      className="p-2 text-amber-900 hover:text-amber-600 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="sr-only">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 italic">
                Every hunter starts with a question. Reach out — we&apos;re listening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-900">Quick FAQ</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-amber-900 mb-3">How do I register my child?</h3>
                <p className="text-gray-700">
                  Registration is simple! You can either fill out the contact form above, visit us in person at the
                  academy, or call our registration line. We&apos;ll guide you through the process and schedule an
                  orientation session.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-amber-900 mb-3">What age groups do you serve?</h3>
                <p className="text-gray-700">
                  We have programs for athletes from ages 6 to adult, divided into age-appropriate groups:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Hunter Cubs (Ages 6-9)</li>
                  <li>Hunter Apprentices (Ages 10-13)</li>
                  <li>Hunter Elite (Ages 14-17)</li>
                  <li>Master Hunters (Ages 18+)</li>
                  <li>Vipers Basketball (Senior Team)</li>
                </ul>
              </div>

              {/* <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-amber-900 mb-3">When are training days?</h3>
                <p className="text-gray-700">Training schedules vary by age group, but generally:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Cubs: Saturday mornings and one weekday afternoon</li>
                  <li>Apprentices: Tuesday and Thursday afternoons, Saturday mornings</li>
                  <li>Elite: Monday, Wednesday, Friday afternoons, Saturday mornings</li>
                  <li>Master Hunters &amp; Vipers: Monday through Friday evenings, Saturday mornings</li>
                </ul>
                <p className="mt-2 text-gray-700">Specific times will be provided during registration.</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
