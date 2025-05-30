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
            <AccordionTrigger className="text-left font-medium">
              How do I register my child for the academy?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              You can register directly on our website through the "Join The Hunt" page. Simply fill out the form,
              select your child's age category, and choose your preferred training package. You'll receive a
              confirmation email with next steps.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium">What age groups do you train?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <div className="space-y-2">
                <p>We have five age-based training categories:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>Hunter Cubs</strong> (Ages 6–9)
                  </li>
                  <li>
                    <strong>Hunter Apprentices</strong> (Ages 10–13)
                  </li>
                  <li>
                    <strong>Hunter Elite</strong> (Ages 14–17)
                  </li>
                  <li>
                    <strong>Master Hunters</strong> (18+)
                  </li>
                  <li>
                    <strong>Vipers Basketball</strong> (Senior Team, by selection only)
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium">What does the monthly fee cover?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <div className="space-y-2">
                <p>Your monthly fee covers:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Structured training sessions</li>
                  <li>Leadership & mentorship guidance</li>
                  <li>Access to competitions and Hunter's Trail events</li>
                  <li>Performance tracking and development reports</li>
                  <li>Use of academy equipment and training facilities</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium">
              Is there a trial session before committing?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes. We offer trial sessions on selected open days. This gives your child the chance to experience our
              training philosophy before you commit. Watch our Instagram or website for trial announcements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium">
              What is the Hunter's Pack and how do I get one?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <div className="space-y-2">
                <p>The Hunter's Pack is our official starter kit. It includes:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Jersey & Shorts</li>
                  <li>Academy Socks</li>
                  <li>Player ID Card</li>
                  <li>Scroll with Hunter's Oath</li>
                </ul>
                <p className="mt-2">You can preorder your pack during registration or buy it separately online.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left font-medium">
              Where is the academy located and when do you train?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <div className="space-y-2">
                <p>We are based in Gbawe, Ghana. Training sessions are currently held:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Monday to Saturdays for registered members</li>
                  <li>Sundays for Foundation-sponsored community kids</li>
                </ul>
                <p className="mt-2">Exact training times are shared after registration.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left font-medium">
              Can parents watch the training sessions?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes, but we ask parents to maintain a respectful distance and allow coaches to lead. Special viewing days
              and family events are announced in advance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left font-medium">
              How are players assessed and promoted?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Players are assessed during training, competitions, and through our annual Hunter's Trail Challenge.
              Outstanding players earn titles, promotion, and recognition within the academy.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left font-medium">
              What should my child bring to training?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <div className="space-y-2">
                <p>Please bring:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>A water bottle</li>
                  <li>Indoor/outdoor basketball shoes</li>
                  <li>Sportswear (or full Hunter's Pack gear if purchased)</li>
                  <li>A strong attitude ready to work and grow</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-left font-medium">
              Do you offer scholarships or support for kids who can't pay?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes. Through the Gbawe Basketball Foundation, we offer free training sessions on Sundays and gear support
              for families in need. No child in Gbawe should be left behind.
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
