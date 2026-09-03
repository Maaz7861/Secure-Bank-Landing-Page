"use client"

import { Card,  } from "@/components/ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { PiggyBank, CalendarRange, Clock } from "lucide-react"

export function RecurringDeposit() {
  return (
    <section className="py-20 bg-background" id="rd">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Dhanpravah (Recurring Deposit)</h2>
          <p className="text-muted-foreground font-medium text-lg">
            Build a corpus gradually. Whether you save daily from your shop&apos;s earnings or monthly from your salary, we have a plan for you.
          </p>
        </div>

        <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted p-1">
              <TabsTrigger value="monthly" className="py-2.5 text-sm font-bold">Monthly RD</TabsTrigger>
              <TabsTrigger value="daily" className="py-2.5 text-sm font-bold">Daily RD (Pigmy)</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-all">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border bg-primary/5 flex flex-col justify-center">
                    <CalendarRange className="h-10 w-10 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Monthly Savings</h3>
                    <p className="text-muted-foreground mb-6">
                      Ideal for salaried individuals. Commit a fixed amount every month and earn up to 13% p.a. interest, compounding quarterly.
                    </p>
                    <ul className="space-y-3 mb-8 text-sm font-medium">
                      <li className="flex items-center gap-2 text-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Start with just ₹ 500/month</li>
                      <li className="flex items-center gap-2 text-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Flexible tenures (12 to 60 months)</li>
                      <li className="flex items-center gap-2 text-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Auto-debit from SIA Savings Account</li>
                    </ul>
                    <Button className="w-max bg-primary text-primary-foreground font-bold">Start Monthly RD</Button>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6 text-center">Illustration: ₹ 5,000 / month</h4>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                        <span className="font-semibold text-muted-foreground">1 Year (9%)</span>
                        <span className="font-black text-lg text-primary">₹ 62,980</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                        <span className="font-semibold text-muted-foreground">3 Years (11%)</span>
                        <span className="font-black text-lg text-primary">₹ 2,13,850</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-background border-accent border-2 rounded-lg relative shadow-sm">
                        <div className="flex flex-col">
                          <span className="bg-accent text-[#0B1120] text-[10px] w-max font-black uppercase px-2 py-0.5 rounded mb-1">Highest Yield</span>
                          <span className="font-bold text-foreground">5 Years (13%)</span>
                        </div>
                        <span className="font-black text-xl text-accent">₹ 4,14,500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="daily">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-all">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border bg-accent/5 flex flex-col justify-center">
                    <Clock className="h-10 w-10 text-accent mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Daily Pigmy Deposit</h3>
                    <p className="text-muted-foreground mb-6">
                      Perfect for shopkeepers and daily wage earners. Our agents collect your savings right from your doorstep every single day.
                    </p>
                    <ul className="space-y-3 mb-8 text-sm font-medium">
                      <li className="flex items-center gap-2 text-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Start with just ₹ 50/day</li>
                      <li className="flex items-center gap-2 text-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Doorstep collection by SIA Agents</li>
                      <li className="flex items-center gap-2 text-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Earn 6.00% p.a. simple interest</li>
                    </ul>
                    <Button className="w-max bg-accent text-[#0B1120] hover:bg-accent/90 font-bold">Request Agent Visit</Button>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-center text-center">
                    <PiggyBank className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2">Watch small drops make an ocean</h4>
                    <p className="text-muted-foreground text-sm mb-6">
                      Saving just ₹ 100 daily for 300 days gives you a lump sum of ₹ 31,500 at the end of the term.
                    </p>
                    <div className="bg-background border border-border p-4 rounded-xl">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Maturity Rules</p>
                      <p className="text-sm font-medium">Withdrawal allowed only after 365 days to earn full interest.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  )
}
