import type { Metadata } from "next"
import { JoinAcademyClient } from "./join-academy-client"

export const metadata: Metadata = {
  title: "Join the Gbawe Basketball Academy – Start Your Hunter Journey",
  description:
    "Become part of Ghana's most purposeful basketball academy. Join your age group, receive your official Hunter's Pack, and begin your journey to greatness.",
}

export default function JoinAcademyPage() {
  return <JoinAcademyClient />
}
