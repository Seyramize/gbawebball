import type { Metadata } from "next"
import { ContactPageClient } from "./contact-page-client"

export const metadata: Metadata = {
  title: "Join the Academy | Gbawe Basketball Academy",
  description:
    "Join Gbawe Basketball Academy and start your journey to becoming a skilled athlete and disciplined hunter.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
