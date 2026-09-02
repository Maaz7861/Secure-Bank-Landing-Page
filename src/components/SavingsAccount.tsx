"use client"

import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Check, Info } from "lucide-react"

export function SavingsAccount() {
  const tiers = [
    {
      name: "Secure Basic",
      target: "Farmers, Students",
      minBalance: "₹ 500",
      rate: "2.50% p.a.",
      features: ["Single, Joint, Minor", "Passbook included", "Withdrawal slip only"],
      popular: false
    },
    {
      name: "Secure Smart",
      target: "Salaried, Middle-class",
      minBalance: "₹ 5,000",
      rate: "4.00% p.a.",
      features: ["Sweep to FD on request", "Premium Passbook", "Free SMS Alerts"],
      popular: true
    },
    {
      name: "Secure Elite",
      target: "HNIs, Core Investors",
      minBalance: "₹ 25,000",
      rate: "7.00% p.a.",
      features: ["Auto-sweep to FD", "VIP Cover Passbook", "Dedicated Support"],
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="savings">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">SIA Samriddhi Khata</h2>
          <p className="text-muted-foreground">
            A savings account designed for everyone. Choose the tier that matches your daily transaction needs and start earning higher returns today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`relative flex flex-col ${tier.popular ? '-mt-4 mb-4 md:-mt-8 md:mb-0' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`flex-1 flex flex-col h-full bg-card/60 backdrop-blur-sm transition-all hover:shadow-lg ${tier.popular ? 'border-primary shadow-primary/20 shadow-xl ring-1 ring-primary/50' : 'border-border'}`}>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                    <p className="text-xs text-muted-foreground">{tier.target}</p>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-border/50">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Interest Rate</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-foreground">{tier.rate.split(' ')[0]}</span>
                      <span className="text-sm font-medium text-muted-foreground">{tier.rate.split(' ')[1]}</span>
                    </div>
                  </div>

                  <div className="mb-8 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">Min. Balance</span>
                      <span className="font-bold text-foreground">{tier.minBalance}</span>
                    </div>
                    
                    <ul className="space-y-3">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <div className="mt-0.5 bg-primary/20 p-0.5 rounded-full text-primary">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-6">
                    <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                      Open Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="link" className="gap-2 text-muted-foreground hover:text-primary">
            Compare all features <Info className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
