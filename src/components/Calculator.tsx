"use client"

import * as React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Slider } from "@/components/ui/Slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Calculator as CalcIcon } from "lucide-react"

export function Calculator() {
  const [amount, setAmount] = useState(100000)
  const [tenure, setTenure] = useState(37) // 37 months
  const [product, setProduct] = useState("fd")

  // Simple placeholder logic for MVP
  const getRate = (amt: number, months: number) => {
    if (amt >= 1500000) return 22.00
    if (amt >= 200000) return 18.50
    return 15.00
  }

  const rate = getRate(amount, tenure)
  // Simplified calculation for UI demonstration purposes
  const interestEarned = Math.round(amount * (rate / 100) * (tenure / 12))
  const maturityAmount = amount + interestEarned

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="tools">
      {/* Cyan Glow Effect in background */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-xl mb-10">
          <div className="flex items-center gap-2 mb-3">
             <CalcIcon className="h-5 w-5 text-primary" />
             <span className="text-sm font-semibold tracking-wider uppercase text-primary">Interactive Tools</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Returns Calculator</h2>
          <p className="text-muted-foreground">
            Estimate your wealth growth. Adjust the sliders below to see exactly how much your money can earn with our market-leading rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* New: Marketing Image Section for Calculator */}
          <div className="lg:col-span-4 rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,180,216,0.15)] border border-primary/20 hidden lg:block">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent" />
            <div className="absolute bottom-10 left-0 w-full px-8 text-white z-10">
              <h3 className="text-2xl font-bold mb-2">Grow your wealth</h3>
              <p className="text-white/70 text-sm">Use our interactive tools to calculate your guaranteed returns with market-leading interest rates.</p>
            </div>
          </div>

          <Tabs defaultValue="fd" onValueChange={setProduct} className="lg:col-span-8 w-full bg-card rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border overflow-hidden flex flex-col">
            <TabsList className="grid w-full grid-cols-4 bg-background/50 border-b border-border p-2 h-auto rounded-none">
              <TabsTrigger value="fd" className="py-3 text-xs sm:text-sm rounded-xl">Fixed Deposit</TabsTrigger>
              <TabsTrigger value="pension" className="py-3 text-xs sm:text-sm rounded-xl">Pension (MIS)</TabsTrigger>
              <TabsTrigger value="daily" className="py-3 text-xs sm:text-sm rounded-xl">Daily RD</TabsTrigger>
              <TabsTrigger value="monthly" className="py-3 text-xs sm:text-sm rounded-xl">Monthly RD</TabsTrigger>
            </TabsList>

            <TabsContent value="fd" className="focus-visible:outline-none flex-grow">
              <Card className="border-0 bg-transparent shadow-none rounded-none">
                <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                
                {/* Inputs */}
                <div className="lg:col-span-3 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-border">
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between mb-4">
                        <label className="text-sm font-semibold text-foreground">Deposit Amount</label>
                        <span className="text-lg font-bold text-primary">
                          ₹ {amount.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <Slider
                        value={[amount]}
                        onValueChange={(v) => setAmount(v[0])}
                        max={10000000}
                        min={10000}
                        step={10000}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>₹ 10K</span>
                        <span>₹ 1 Cr</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-4">
                        <label className="text-sm font-semibold text-foreground">Tenure (Months)</label>
                        <span className="text-lg font-bold text-foreground">
                          {tenure} Months
                        </span>
                      </div>
                      <Slider
                        value={[tenure]}
                        onValueChange={(v) => setTenure(v[0])}
                        max={84}
                        min={12}
                        step={1}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>12 Months</span>
                        <span>84 Months</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outputs Panel (SIA Dashboard Style Dark Panel) */}
                <div className="lg:col-span-2 p-6 md:p-8 bg-[#0B1120] text-white flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] pointer-events-none" />
                  
                  <div className="space-y-6 relative z-10">
                    <div>
                      <p className="text-sm font-medium text-white/60 mb-1">Applicable Rate (p.a.)</p>
                      <p className="text-3xl font-bold text-accent">{rate.toFixed(2)}%</p>
                      <p className="text-[10px] text-white/40 mt-1 uppercase tracking-wider">Based on selected slab</p>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <div className="flex justify-between">
                        <span className="text-sm text-white/60">Principal Amount</span>
                        <span className="text-sm font-semibold text-white">₹ {amount.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-white/60">Interest Earned</span>
                        <span className="text-sm font-semibold text-accent">+ ₹ {interestEarned.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Total Maturity Amount</p>
                      <p className="text-4xl font-extrabold text-white tracking-tight">₹ {maturityAmount.toLocaleString('en-IN')}</p>
                    </div>

                    <Button className="w-full mt-4 h-12 text-sm font-bold bg-cyan-gradient text-[#0B1120] hover:opacity-90 border-0 shadow-[0_10px_20px_rgba(0,180,216,0.3)] hover:-translate-y-0.5 transition-transform">
                      Open This Deposit
                    </Button>
                    <p className="text-center text-[10px] text-white/40 mt-2">
                      *Indicative. Actual returns subject to scheme terms.
                    </p>
                  </div>
                </div>

              </div>
            </Card>
          </TabsContent>
          
          {/* Other tabs placeholder */}
          <TabsContent value="pension">
            <Card className="p-8 text-center text-muted-foreground bg-card border-border">
               Pension calculator logic loading...
            </Card>
          </TabsContent>
          <TabsContent value="daily">
            <Card className="p-8 text-center text-muted-foreground bg-card border-border">
               Daily RD calculator logic loading...
            </Card>
          </TabsContent>
          <TabsContent value="monthly">
            <Card className="p-8 text-center text-muted-foreground bg-card border-border">
               Monthly RD calculator logic loading...
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </section>
  )
}
