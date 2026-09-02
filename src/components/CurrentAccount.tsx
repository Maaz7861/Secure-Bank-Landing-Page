"use client"

import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Check, Building2 } from "lucide-react"
import { motion } from "framer-motion"

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 bg-secondary/10 border-y border-border/50 relative" id="current">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-3">
               <Building2 className="h-5 w-5 text-accent" />
               <span className="text-xs font-bold tracking-widest uppercase text-accent">For Business</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">SIA Vyapar Khata</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Current accounts designed for local businesses. Enjoy high free-cash deposit limits and overdraft facilities against your fixed deposits.
            </p>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 h-12 px-8 font-bold">Compare Limits</Button>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden shadow-2xl border border-border">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] bg-cover bg-center" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-60" />
            </div>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {tiers.map((tier, idx) => (
            <motion.div variants={item} key={idx}>
              <Card className={`h-full bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-2xl hover:border-primary/50 ${tier.elite ? 'border-accent shadow-md shadow-accent/10 relative overflow-hidden' : 'border-border'}`}>
                {tier.elite && (
                   <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-gradient rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none opacity-40" />
                )}
                <CardContent className="p-8 h-full flex flex-col relative z-10">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                      {tier.name}
                      {tier.elite && <span className="bg-accent/20 text-accent text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-widest border border-accent/30">Premium</span>}
                    </h3>
                    <p className="text-xs text-muted-foreground">{tier.target}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8 bg-background/50 rounded-xl p-4 border border-border">
                    <div>
                       <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1">Min Balance</p>
                       <p className="font-bold text-sm text-foreground">{tier.minBalance}</p>
                    </div>
                    <div>
                       <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1">Free Cash Dep.</p>
                       <p className="font-bold text-sm text-foreground">{tier.cashLimit}</p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-muted-foreground leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full mt-auto ${tier.elite ? 'bg-cyan-gradient text-[#0B1120] font-bold border-0 hover:opacity-90' : 'bg-primary/20 text-primary hover:bg-primary/30'}`}>
                    Open Current A/C
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
