import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Gbawe Basketball Academy",
  description: "Privacy Policy for Gbawe Basketball Academy",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Gbawe Basketball Academy ("we," "our," or "us") respects your privacy and is committed to protecting it
            through our compliance with this policy. This policy describes the types of information we may collect from
            you or that you may provide when you visit our website and our practices for collecting, using, maintaining,
            protecting, and disclosing that information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>We collect several types of information from and about users of our website, including information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              By which you may be personally identified, such as name, email address, telephone number ("personal
              information");
            </li>
            <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>
            We use information that we collect about you or that you provide to us, including any personal information:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>To present our website and its contents to you;</li>
            <li>To provide you with information, products, or services that you request from us;</li>
            <li>To fulfill any other purpose for which you provide it;</li>
            <li>To carry out our obligations and enforce our rights;</li>
            <li>To notify you about changes to our website or any products or services we offer;</li>
            <li>In any other way we may describe when you provide the information;</li>
            <li>For any other purpose with your consent.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
          <p>
            We may disclose aggregated information about our users, and information that does not identify any
            individual, without restriction. We may disclose personal information that we collect or you provide as
            described in this privacy policy:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>To our subsidiaries and affiliates;</li>
            <li>To contractors, service providers, and other third parties we use to support our business;</li>
            <li>
              To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization,
              dissolution, or other sale or transfer of some or all of our assets;
            </li>
            <li>To fulfill the purpose for which you provide it;</li>
            <li>For any other purpose disclosed by us when you provide the information;</li>
            <li>With your consent.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
          <p>
            We have implemented measures designed to secure your personal information from accidental loss and from
            unauthorized access, use, alteration, and disclosure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Our Privacy Policy</h2>
          <p>
            It is our policy to post any changes we make to our privacy policy on this page. If we make material changes
            to how we treat our users' personal information, we will notify you through a notice on the website home
            page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
          <p>
            To ask questions or comment about this privacy policy and our privacy practices, contact us at:{" "}
            <a href="mailto:info@gbawebasketball.com" className="text-amber-600 hover:text-amber-700">
              info@gbawebasketball.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
