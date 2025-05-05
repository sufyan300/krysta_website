"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How does Krysta determine tax rates?</AccordionTrigger>
              <AccordionContent>
                Krysta uses real-time data from thousands of tax jurisdictions to calculate the exact rates based on
                location, product type, and current tax laws. Our AI-driven system stays updated with changing
                regulations to ensure compliance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Do you support international sales tax?</AccordionTrigger>
              <AccordionContent>
                Yes, Krysta supports international sales tax requirements including VAT, GST, and other country-specific
                tax structures. Our platform is designed for businesses selling globally.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How easy is it to integrate Krysta with my online store?
              </AccordionTrigger>
              <AccordionContent>
                Krysta offers simple integration with popular e-commerce platforms through our API and pre-built
                connectors. Most customers are up and running within a day with minimal technical resources required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Can Krysta handle marketplace sales?</AccordionTrigger>
              <AccordionContent>
                Yes, Krysta specializes in managing marketplace nexus and tax obligations across multiple sales
                channels. We consolidate your marketplace and direct sales for comprehensive tax compliance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">What happens if tax laws change?</AccordionTrigger>
              <AccordionContent>
                Our team monitors tax legislation changes across all jurisdictions. When laws change, Krysta
                automatically updates calculations and filing requirements, so you're always compliant.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
