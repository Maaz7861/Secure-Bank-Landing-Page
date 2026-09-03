"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { AlertCircle, Calendar } from "lucide-react"

export function FixedDeposit() {
  const slabs = [
    {
      id: "slab1",
      name: "₹ 10K – ₹ 1.99L",
      rates: [
        { tenure: "13 Months", rate: "13.00%", return: "₹ 13,000", lock: "7 Months", preRate: "9%", penalty: "5%" },
        { tenure: "25 Months", rate: "14.00%", return: "₹ 14,000", lock: "13 Months", preRate: "10%", penalty: "7%" },
        { tenure: "37 Months", rate: "15.00%", return: "₹ 15,000", lock: "25 Months", preRate: "11%", penalty: "10%" },
        { tenure: "49 Months", rate: "16.00%", return: "₹ 16,000", lock: "37 Months", preRate: "11%", penalty: "15%" },
      ]
    },
    {
      id: "slab2",
      name: "₹ 2L – ₹ 14L",
      rates: [
        { tenure: "13 Months", rate: "14.50%", return: "₹ 29,000", lock: "7 Months", preRate: "9%", penalty: "5%" },
        { tenure: "25 Months", rate: "16.50%", return: "₹ 33,000", lock: "13 Months", preRate: "10%", penalty: "7%" },
        { tenure: "37 Months", rate: "18.50%", return: "₹ 37,000", lock: "25 Months", preRate: "11%", penalty: "10%" },
        { tenure: "49 Months", rate: "20.50%", return: "₹ 41,000", lock: "37 Months", preRate: "11%", penalty: "15%" },
      ]
    },
    {
      id: "slab3",
      name: "₹ 15L – ₹ 1 Cr",
      rates: [
        { tenure: "13 Months", rate: "17.50%", return: "₹ 2,62,500", lock: "7 Months", preRate: "9%", penalty: "5%" },
        { tenure: "25 Months", rate: "20.00%", return: "₹ 3,00,000", lock: "13 Months", preRate: "10%", penalty: "7%" },
        { tenure: "37 Months", rate: "22.00%", return: "₹ 3,30,000", lock: "25 Months", preRate: "11%", penalty: "10%" },
        { tenure: "49 Months", rate: "25.00%", return: "₹ 3,75,000", lock: "37 Months", preRate: "11%", penalty: "15%" },
      ]
    }
  ]

  return (
    <section className="py-20 bg-background" id="deposits">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Secure Dhan Samriddhi (FD)</h2>
            <p className="text-muted-foreground">
              Market-leading fixed deposit rates. Secure your future with guaranteed returns up to 25.00% p.a. tailored to your investment slab.
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-secondary/50 p-3 rounded-lg border border-border text-sm">
            <AlertCircle className="h-5 w-5 text-primary" />
            <span><strong className="text-foreground">Quarterly Payout:</strong> Withdraw earned interest every 3 months.</span>
          </div>
        </div>

        <Tabs defaultValue="slab3" className="w-full">
          <div className="flex justify-center md:justify-start mb-8">
            <TabsList className="grid w-full md:w-auto grid-cols-3 bg-secondary/80 p-1">
              {slabs.map((slab) => (
                <TabsTrigger key={slab.id} value={slab.id} className="text-xs sm:text-sm">
                  {slab.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {slabs.map((slab) => (
            <TabsContent key={slab.id} value={slab.id} className="focus-visible:outline-none">
              <Card className="border-border bg-card/50 overflow-hidden">
                <div className="hidden md:grid grid-cols-6 gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <div>Tenure</div>
                  <div className="text-primary font-bold">Interest (p.a.)</div>
                  <div>Base Return</div>
                  <div>Mini Lock</div>
                  <div>Early Rate</div>
                  <div>Penalty</div>
                </div>
                
                <div className="divide-y divide-border/50">
                  {slab.rates.map((rate, rIdx) => (
                    <div key={rIdx} className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 items-center hover:bg-secondary/20 transition-colors">
                      {/* Mobile Labels + Values */}
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground hidden md:block" />
                        <span className="font-semibold text-sm">{rate.tenure}</span>
                      </div>
                      
                      <div className="flex md:block justify-between items-center md:bg-transparent bg-primary/5 p-3 md:p-0 rounded-lg">
                        <span className="md:hidden text-xs text-muted-foreground uppercase font-semibold">Interest Rate</span>
                        <span className="text-lg md:text-xl font-bold text-primary">{rate.rate}</span>
                      </div>
                      
                      <div className="flex md:block justify-between items-center">
                        <span className="md:hidden text-xs text-muted-foreground uppercase font-semibold">Return Value</span>
                        <span className="text-sm font-medium flex items-center gap-1">
                          {rate.return}
                        </span>
                      </div>
                      
                      <div className="flex md:block justify-between items-center">
                        <span className="md:hidden text-xs text-muted-foreground uppercase font-semibold">Mini Lock</span>
                        <span className="text-sm text-muted-foreground">{rate.lock}</span>
                      </div>
                      
                      <div className="flex md:block justify-between items-center">
                        <span className="md:hidden text-xs text-muted-foreground uppercase font-semibold">Premature Rate</span>
                        <span className="text-sm text-muted-foreground">{rate.preRate}</span>
                      </div>
                      
                      <div className="flex md:block justify-between items-center">
                        <span className="md:hidden text-xs text-muted-foreground uppercase font-semibold">Penalty (+GST)</span>
                        <span className="text-sm text-destructive font-medium">{rate.penalty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground">
                <p>* Premature withdrawal is always allowed after the mini lock period.</p>
                <Button variant="link" className="h-auto p-0">Open FD Now →</Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
