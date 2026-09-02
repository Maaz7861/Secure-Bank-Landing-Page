"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

export function FAQ() {
  const faqs = [
    {
      q: "Is my deposit safe? What protects it?",
      a: "As an Urban Credit Co-operative Society, your deposits are securely managed and heavily regulated by co-operative banking frameworks. We maintain high liquidity reserves and strict capital adequacy to ensure your funds are completely secure."
    },
    {
      q: "Can I withdraw my FD before maturity? What does it cost?",
      a: "Yes. Premature withdrawal is always allowed after the initial 'mini lock' period (e.g., 7 months for shorter tenures). The early withdrawal rate is applied, and a penalty (plus 18% GST on penalty) is deducted as per the slab terms."
    },
    {
      q: "What is the mini lock period?",
      a: "The mini lock period is the minimum time your funds must remain in the Fixed Deposit before you can withdraw them prematurely. If you withdraw before the mini lock expires, different conditions may apply."
    },
    {
      q: "When is interest paid — monthly, quarterly or at maturity?",
      a: "We offer a 'Quarterly Interest Withdrawal' facility on Fixed Deposits, allowing you to withdraw earned interest every 3 months. Alternatively, it can compound until maturity."
    },
    {
      q: "Who can become a member?",
      a: "Membership is open to farmers, students, salaried professionals, shopkeepers, and businesses who meet our co-operative society criteria. Contact a branch for specific eligibility."
    },
    {
      q: "What is Secure Coin?",
      a: "Secure Coin is our proprietary loyalty currency. You earn points on transactions and account maintenance, with multiplier tiers (up to 3x for Elite accounts) that can be redeemed within our ecosystem."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Everything you need to know about our products, rates, and society operations.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
              <AccordionTrigger className="text-base font-semibold hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
