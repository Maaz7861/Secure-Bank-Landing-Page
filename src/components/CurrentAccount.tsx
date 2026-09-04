"use client"

import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Check, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { useModal } from "@/context/ModalContext"
import { useLanguage } from "@/context/LanguageContext"

export function CurrentAccount() {
  const { openAccount } = useModal()
  const { t } = useLanguage()

  const tiers = [
    {
      name: "SIA Secure Vyapar",
      target: "Small shopkeepers, local vendors",
      minBalance: "₹ 5,000",
      cashLimit: "₹ 2,00,000 / mo",
      features: ["Proprietorship only", "Standard charges for NEFT", "Monthly email statement"],
      elite: false
    },
    {
      name: "SIA Secure Udyog",
      target: "Regular traders, B2C sellers",
      minBalance: "₹ 25,000",
      cashLimit: "₹ 10,00,000 / mo",
      features: ["Partnership & Company allowed", "50 free RTGS/NEFT per month", "OD up to 70% against FD"],
      elite: false
    },
    {
      name: "SIA Secure Corporate",
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
        <div className="bg-card dark:bg-black rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-border shadow-2xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-10 mb-8 md:mb-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-3">
                 <Building2 className="h-5 w-5 text-accent" />
                 <span className="text-xs font-bold tracking-widest uppercase text-accent">For Business</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">SIA Vyapar Khata</h2>
              <p className="text-muted-foreground text-lg mb-6">
                {t(
                  "Current accounts designed for local businesses. Enjoy high free-cash deposit limits and overdraft facilities against your fixed deposits.",
                  "स्थानीय व्यवसायों के लिए डिज़ाइन किया गया चालू खाता। उच्च निःशुल्क नकद जमा सीमा और ओवरड्राफ्ट सुविधाओं का आनंद लें।"
                )}
              </p>
              <Button 
                onClick={() => openAccount({ planName: "SIA Vyapar Khata (Current)", planType: "current" })}
                variant="outline" 
                className="border-accent text-accent hover:bg-accent/10 h-12 px-8 font-bold cursor-pointer"
              >
                {t("Compare Limits & Apply", "सीमाओं की तुलना करें और आवेदन करें")}
              </Button>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden shadow-2xl border border-border">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
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
                <Card className={`h-full bg-background dark:bg-[#0A0A0A] transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-2xl hover:border-primary/50 ${tier.elite ? 'border-primary shadow-md shadow-primary/10 relative overflow-hidden' : 'border-border'}`}>
                  {tier.elite && (
                     <div className="absolute top-0 right-0 w-32 h-32 bg-premium-gradient rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none opacity-40" />
                  )}
                  <CardContent className="p-6 md:p-8 h-full flex flex-col relative z-10">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-1 flex items-center gap-2 text-foreground">
                        {tier.name}
                        {tier.elite && <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-widest border border-primary/30">Premium</span>}
                      </h3>
                      <p className="text-xs text-muted-foreground">{tier.target}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8 bg-muted/30 rounded-xl p-4 border border-border/50">
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
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-muted-foreground leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => openAccount({ planName: `${tier.name} (Current Account)`, planType: "current" })}
                      className="w-full mt-auto bg-cyan-gradient text-black font-bold border-0 hover:opacity-90 shadow-[0_4px_15px_rgba(16,185,129,0.2)] cursor-pointer"
                    >
                      {t("Open Current A/C", "चालू खाता खोलें")}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
