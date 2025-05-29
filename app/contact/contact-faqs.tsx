import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Info } from "lucide-react"

export function ContactFAQs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-amber-900 flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium">What does the Hunter's Pack include?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Official jersey and shorts, socks, ID card, and a symbolic Hunter scroll.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium">Can I register more than one child?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes. You'll need to fill a separate form for each child.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium">
              Do I need basketball experience to join?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              No. We train all levels based on age and stage.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium">When do sessions start?</AccordionTrigger>
            <AccordionContent className="text-gray-600">Within one week of registration confirmation.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium">What are the monthly fees?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <div className="space-y-2">
                <p>
                  <strong>Basic Hunter:</strong> GHS 80/month - Weekly group training + matches
                </p>
                <p>
                  <strong>Hunter+ Pack:</strong> GHS 200/month - Basic + Hunter's Pack included
                </p>
                <p>
                  <strong>Quarter Hunter:</strong> GHS 228 (3 months) - 5% discount for advance payment
                </p>
                <p>
                  <strong>Elite Add-On:</strong> GHS 150/month - Private sessions + group training
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left font-medium">What happens if I miss payments?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Training is suspended after the 5th of each month if fees are unpaid. No refunds are provided, but we
              offer hardship support - please communicate with us if you're facing difficulties.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left font-medium">Can I change my training category?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Training categories are primarily based on age, but we can assess players for skill-appropriate groups.
              Contact us to discuss your specific situation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left font-medium">Do you provide transportation?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We don't provide transportation services. Parents/guardians are responsible for getting players to and
              from training sessions safely.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left font-medium">
              What should players bring to training?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <ul className="list-disc list-inside space-y-1">
                <li>Water bottle (mandatory)</li>
                <li>Comfortable athletic wear</li>
                <li>Basketball shoes (recommended)</li>
                <li>Small towel</li>
                <li>Positive attitude and willingness to learn!</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-left font-medium">
              Are there tournaments and competitions?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes! We participate in local tournaments and organize internal competitions. Tournament participation may
              require additional fees for registration and transportation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-blue-900">Looking for community programs?</h3>
              <p className="text-sm text-blue-800 mt-1">
                We will soon launch free community sessions sponsored by the Gbawe Basketball Foundation. These programs
                will be separate from our academy training. Stay tuned via our{" "}
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Instagram page
                </a>{" "}
                for updates.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
