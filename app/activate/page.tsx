import type { Metadata } from "next"
import ActivationClient from "./activation-client"

export const metadata: Metadata = {
  title: "Activate Your Hunter Identity - Gbawe Basketball Academy",
  description:
    "Enter sacred ground and activate your place as a true Hunter of the Gbawe Basketball Academy. Claim your identity and join the legacy.",
  keywords: "basketball academy, hunter program, activation, gbawe, ghana basketball",
}

export default function ActivatePage() {
  return <ActivationClient />
}
