import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Info } from "lucide-react"

export function FAQsSection() {
  return (
    <Card className="mt-6">
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
