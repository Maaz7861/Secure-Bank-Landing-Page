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
    <section className="py-20 bg-secondary/30 border-y border-border/50" id="calculator">
      <div className="container mx-auto px-4 lg:px-8">
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

        <Tabs defaultValue="fd" onValueChange={setProduct} className="w-full max-w-4xl">
          <TabsList className="grid w-full grid-cols-4 bg-background border border-border p-1 h-auto mb-8">
            <TabsTrigger value="fd" className="py-2 text-xs sm:text-sm">Fixed Deposit</TabsTrigger>
            <TabsTrigger value="pension" className="py-2 text-xs sm:text-sm">Pension (MIS)</TabsTrigger>
            <TabsTrigger value="daily" className="py-2 text-xs sm:text-sm">Daily RD</TabsTrigger>
            <TabsTrigger value="monthly" className="py-2 text-xs sm:text-sm">Monthly RD</TabsTrigger>
          </TabsList>

          <TabsContent value="fd" className="focus-visible:outline-none">
            <Card className="border-border bg-card shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                
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

                {/* Outputs */}
                <div className="lg:col-span-2 p-6 md:p-8 bg-primary/5 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Applicable Rate (p.a.)</p>
                      <p className="text-3xl font-bold text-foreground">{rate.toFixed(2)}%</p>
                      <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">Based on selected slab</p>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t border-border/50">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Principal Amount</span>
                        <span className="text-sm font-semibold text-foreground">₹ {amount.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Interest Earned</span>
                        <span className="text-sm font-semibold text-primary">+ ₹ {interestEarned.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total Maturity Amount</p>
                      <p className="text-4xl font-extrabold text-foreground tracking-tight">₹ {maturityAmount.toLocaleString('en-IN')}</p>
                    </div>

                    <Button className="w-full mt-4 h-12 text-sm font-bold shadow-lg shadow-primary/20">
                      Open This Deposit
                    </Button>
                    <p className="text-center text-[10px] text-muted-foreground mt-2">
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
    </section>
  )
}
