"use client"

import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Check, Building2, TrendingUp } from "lucide-react"

export function CurrentAccount() {
  const tiers = [
    {
      name: "Secure Vyapar",
      target: "Small shopkeepers",
      minBalance: "₹ 5,000",
      cashLimit: "₹ 2,00,000 / mo",
      features: ["Proprietorship only", "Standard charges for NEFT", "Monthly email statement"],
      elite: false
    },
    {
      name: "Secure Udyog",
      target: "Regular traders, B2C sellers",
      minBalance: "₹ 25,000",
      cashLimit: "₹ 10,00,000 / mo",
      features: ["Partnership & Company allowed", "50 free RTGS/NEFT per month", "OD up to 70% against FD"],
      elite: false
    },
    {
      name: "Secure Corporate",
      target: "Contractors, B2B distributors",
      minBalance: "₹ 50,000",
      cashLimit: "₹ 50,00,000 / mo",
      features: ["Zero RTGS/NEFT charges", "OD up to 90% + priority processing", "Daily email + API for billing"],
      elite: true
    }
  ]

  return (
    <section className="py-20 bg-secondary/30 border-y border-border/50" id="current">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
               <Building2 className="h-5 w-5 text-primary" />
               <span className="text-sm font-semibold tracking-wider uppercase text-primary">For Business</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">SIA Vyapar Khata</h2>
            <p className="text-muted-foreground">
              Current accounts designed for local businesses. Enjoy high free-cash deposit limits and overdraft facilities against your fixed deposits.
            </p>
          </div>
          <Button variant="outline">Compare Limits</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <Card key={idx} className={`bg-card transition-all hover:bg-card/80 ${tier.elite ? 'border-primary/50 shadow-md relative overflow-hidden' : 'border-border'}`}>
              {tier.elite && (
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
              )}
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                    {tier.name}
                    {tier.elite && <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">Premium</span>}
                  </h3>
                  <p className="text-xs text-muted-foreground">{tier.target}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8 bg-background rounded-lg p-4 border border-border">
                  <div>
                     <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Min Balance</p>
                     <p className="font-semibold text-sm">{tier.minBalance}</p>
                  </div>
                  <div>
                     <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Free Cash Dep.</p>
                     <p className="font-semibold text-sm">{tier.cashLimit}</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full" variant={tier.elite ? 'default' : 'secondary'}>
                  Open Current A/C
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
