"use client"

import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { HeartHandshake, ArrowRight, Shield } from "lucide-react"

export function Pension() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="pension">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <HeartHandshake className="h-4 w-4" /> Jeevan Nidhi
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Retire with <span className="text-gold-gradient">Dignity</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              Secure a guaranteed monthly income. Invest a lump sum today and receive fixed payouts every month without touching your principal.
            </p>
            
            <ul className="space-y-4 pt-4">
               <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-foreground">Guaranteed up to 15.00% p.a. returns</span>
               </li>
               <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-foreground">Zero market risk on your principal</span>
               </li>
            </ul>

            <div className="pt-6">
              <Button className="w-full sm:w-auto bg-cyan-gradient text-black hover:opacity-90 font-bold border-0 mt-8 shadow-lg shadow-primary/20">
                Calculate Pension <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Removed absolute overlapping image to keep layout perfectly flat and clean */}

            <Card className="bg-white dark:bg-[#111111] text-foreground backdrop-blur-md shadow-2xl overflow-hidden relative z-10 border border-border">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 min-h-[150px] sm:min-h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/financial_advisor.jpg')] bg-cover bg-[center_top]" />
                </div>
                <CardContent className="p-8 sm:w-2/3">
                  <h3 className="text-lg font-bold mb-6 text-center text-foreground">Monthly Income Illustration</h3>
                  
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="bg-secondary dark:bg-[#0A0A0A] w-full p-4 rounded-xl border border-border flex justify-between items-center shadow-inner">
                      <span className="text-sm font-semibold text-muted-foreground">Lump Sum Deposit</span>
                      <span className="text-xl font-bold text-foreground">₹ 15,00,000</span>
                    </div>
                    
                    <div className="flex justify-center text-accent">
                      <ArrowRight className="h-6 w-6 rotate-90" />
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 text-center relative overflow-hidden w-full">
                      <div className="absolute inset-0 bg-primary opacity-5" />
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2 relative z-10">Monthly Guaranteed Payout</p>
                      <p className="text-4xl sm:text-5xl font-black text-foreground relative z-10">₹ 18,750</p>
                    </div>
                  </div>
                  
                  <p className="text-center text-xs text-slate-500 dark:text-white/40 mt-6">*Based on Slab 3 interest rates for 37+ months tenure.</p>
                </CardContent>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
