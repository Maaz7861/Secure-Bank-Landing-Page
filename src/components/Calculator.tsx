"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Calculator as CalcIcon, Minus, Plus } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export function Calculator() {
  const [product, setProduct] = useState("fd")
  const [amount, setAmount] = useState(100000)
  const [tenure, setTenure] = useState(36) // months

  // Handle tab change
  const handleProductChange = (val: string) => {
    setProduct(val)
    if (val === "daily") {
      setAmount(100)
      setTenure(12)
    } else if (val === "monthly") {
      setAmount(1000)
      setTenure(24)
    } else {
      setAmount(100000)
      setTenure(36)
    }
  }

  const maxAmount = product === "daily" ? 10000 : (product === "monthly" ? 100000 : 10000000)
  const minAmount = product === "daily" ? 100 : (product === "monthly" ? 1000 : 10000)
  const stepAmount = product === "daily" ? 100 : (product === "monthly" ? 500 : 10000)
  const maxTenure = 84
  const minTenure = 12

  // Get dynamic rate based on amount
  let rate = 15.00
  if (product === "fd" || product === "pension") {
    if (amount >= 1500000) rate = 22.00
    if (amount >= 5000000) rate = 25.00
  } else {
    if (tenure >= 36) rate = 16.50
    else rate = 14.50
  }

  let investedAmount = amount
  let interestEarned = 0
  let maturityAmount = 0
  let depositLabel = "Deposit Amount"
  
  if (product === "fd") {
    depositLabel = "Lump Sum Deposit"
    const t = tenure / 12
    maturityAmount = amount * Math.pow(1 + (rate / 100) / 4, 4 * t)
    interestEarned = maturityAmount - amount
  } else if (product === "pension") {
    depositLabel = "Lump Sum Deposit"
    const monthlyPayout = (amount * rate) / 1200
    interestEarned = monthlyPayout * tenure
    maturityAmount = amount + interestEarned
  } else if (product === "monthly") {
    depositLabel = "Monthly Deposit"
    investedAmount = amount * tenure
    interestEarned = amount * ((tenure * (tenure + 1)) / 2) * (rate / 1200)
    maturityAmount = investedAmount + interestEarned
  } else if (product === "daily") {
    depositLabel = "Daily Deposit"
    const monthlyDeposit = amount * 30
    investedAmount = monthlyDeposit * tenure
    interestEarned = monthlyDeposit * ((tenure * (tenure + 1)) / 2) * (rate / 1200)
    maturityAmount = investedAmount + interestEarned
  }

  const chartData = [
    { name: 'Invested', value: Math.round(investedAmount), color: '#10B981' }, 
    { name: 'Est. Returns', value: Math.round(interestEarned), color: '#D4AF37' } 
  ]

  const formatRupee = (val: number) => {
    return new Intl.NumberFormat('en-IN').format(val)
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(e.target.value.replace(/,/g, ''))
    if (isNaN(val)) val = 0
    setAmount(val)
  }

  const handleAmountBlur = () => {
    if (amount < minAmount) setAmount(minAmount)
    if (amount > maxAmount) setAmount(maxAmount)
  }

  const addAmount = (add: number) => {
    setAmount(prev => Math.min(maxAmount, prev + add))
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="tools">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-xl mb-10">
          <div className="flex items-center gap-2 mb-3">
             <CalcIcon className="h-5 w-5 text-accent" />
             <span className="text-sm font-semibold tracking-wider uppercase text-accent">Interactive Tools</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Returns Calculator</h2>
          <p className="text-muted-foreground">
            Estimate your wealth growth. Adjust the values below to see exactly how much your money can earn with our market-leading rates.
          </p>
        </div>

        <div className="bg-card dark:bg-black rounded-3xl p-2 border border-border shadow-2xl relative overflow-hidden">
          <Tabs defaultValue="fd" value={product} onValueChange={handleProductChange} className="w-full flex flex-col">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-secondary/50 border-b border-border p-2 h-auto rounded-2xl md:rounded-b-none mb-2 md:mb-0">
              <TabsTrigger value="fd" className="py-3 text-xs sm:text-sm rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Fixed Deposit</TabsTrigger>
              <TabsTrigger value="pension" className="py-3 text-xs sm:text-sm rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Pension (MIS)</TabsTrigger>
              <TabsTrigger value="daily" className="py-3 text-xs sm:text-sm rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Daily RD</TabsTrigger>
              <TabsTrigger value="monthly" className="py-3 text-xs sm:text-sm rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Monthly RD</TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
              
              {/* Inputs Panel (New UX) */}
              <div className="lg:col-span-3 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-border">
                <div className="space-y-10">
                  
                  {/* Amount Input Block */}
                  <div>
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">{depositLabel}</label>
                    
                    <div className="bg-background dark:bg-[#111111] rounded-2xl p-3 border border-border shadow-inner flex items-center justify-between mb-4">
                      <button onClick={() => setAmount(Math.max(minAmount, amount - stepAmount))} className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-colors">
                        <Minus className="h-5 w-5"/>
                      </button>
                      
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-medium text-muted-foreground">₹</span>
                        <input 
                          type="text" 
                          value={formatRupee(amount)}
                          onChange={handleAmountChange}
                          onBlur={handleAmountBlur}
                          className="bg-transparent border-0 text-3xl sm:text-4xl font-bold text-center text-foreground focus:ring-0 w-32 sm:w-48 p-0 outline-none"
                        />
                      </div>

                      <button onClick={() => setAmount(Math.min(maxAmount, amount + stepAmount))} className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-colors">
                        <Plus className="h-5 w-5"/>
                      </button>
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                      {product === 'daily' || product === 'monthly' ? (
                        <>
                          <button onClick={() => addAmount(500)} className="whitespace-nowrap px-4 py-2 rounded-full bg-secondary/50 border border-border text-xs font-semibold text-foreground hover:bg-secondary transition-colors">+ ₹500</button>
                          <button onClick={() => addAmount(1000)} className="whitespace-nowrap px-4 py-2 rounded-full bg-secondary/50 border border-border text-xs font-semibold text-foreground hover:bg-secondary transition-colors">+ ₹1K</button>
                          <button onClick={() => addAmount(5000)} className="whitespace-nowrap px-4 py-2 rounded-full bg-secondary/50 border border-border text-xs font-semibold text-foreground hover:bg-secondary transition-colors">+ ₹5K</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => addAmount(50000)} className="whitespace-nowrap px-4 py-2 rounded-full bg-secondary/50 border border-border text-xs font-semibold text-foreground hover:bg-secondary transition-colors">+ 50K</button>
                          <button onClick={() => addAmount(100000)} className="whitespace-nowrap px-4 py-2 rounded-full bg-secondary/50 border border-border text-xs font-semibold text-foreground hover:bg-secondary transition-colors">+ 1L</button>
                          <button onClick={() => addAmount(500000)} className="whitespace-nowrap px-4 py-2 rounded-full bg-secondary/50 border border-border text-xs font-semibold text-foreground hover:bg-secondary transition-colors">+ 5L</button>
                        </>
                      )}
                      <button onClick={() => setAmount(maxAmount)} className="whitespace-nowrap px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold text-primary hover:bg-primary/20 transition-colors">Max</button>
                    </div>
                  </div>

                  {/* Tenure Input Block */}
                  <div>
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">Tenure (Months)</label>
                    
                    <div className="bg-background dark:bg-[#111111] rounded-2xl p-3 border border-border shadow-inner flex items-center justify-between mb-4">
                      <button onClick={() => setTenure(Math.max(minTenure, tenure - 1))} className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-colors">
                        <Minus className="h-5 w-5"/>
                      </button>
                      
                      <div className="flex items-baseline gap-2">
                        <input 
                          type="number" 
                          value={tenure}
                          onChange={(e) => setTenure(Math.min(maxTenure, Math.max(minTenure, parseInt(e.target.value) || minTenure)))}
                          className="bg-transparent border-0 text-3xl sm:text-4xl font-bold text-center text-foreground focus:ring-0 w-20 p-0 outline-none"
                        />
                        <span className="text-lg font-medium text-muted-foreground">Months</span>
                      </div>

                      <button onClick={() => setTenure(Math.min(maxTenure, tenure + 1))} className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-colors">
                        <Plus className="h-5 w-5"/>
                      </button>
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                      <button onClick={() => setTenure(12)} className={`whitespace-nowrap px-4 py-2 rounded-full border text-xs font-semibold transition-colors ${tenure === 12 ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary/50 border-border text-foreground hover:bg-secondary'}`}>1 Yr</button>
                      <button onClick={() => setTenure(24)} className={`whitespace-nowrap px-4 py-2 rounded-full border text-xs font-semibold transition-colors ${tenure === 24 ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary/50 border-border text-foreground hover:bg-secondary'}`}>2 Yrs</button>
                      <button onClick={() => setTenure(36)} className={`whitespace-nowrap px-4 py-2 rounded-full border text-xs font-semibold transition-colors ${tenure === 36 ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary/50 border-border text-foreground hover:bg-secondary'}`}>3 Yrs</button>
                      <button onClick={() => setTenure(60)} className={`whitespace-nowrap px-4 py-2 rounded-full border text-xs font-semibold transition-colors ${tenure === 60 ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary/50 border-border text-foreground hover:bg-secondary'}`}>5 Yrs</button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Outputs & Chart Panel (Premium Dark Look) */}
              <div className="lg:col-span-2 p-6 md:p-10 bg-[#0A0A0A] rounded-2xl md:rounded-r-2xl md:rounded-l-none text-white flex flex-col justify-center relative overflow-hidden shadow-inner border border-border/50">
                
                <div className="space-y-6 relative z-10 w-full h-full flex flex-col">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs font-medium text-white/50 uppercase tracking-widest mb-1">Interest Rate</p>
                      <p className="text-3xl font-black text-accent">{rate.toFixed(2)}% <span className="text-sm font-normal text-white/40">p.a.</span></p>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="flex-1 min-h-[200px] py-4 relative flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          stroke="none"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value: number) => `₹ ${value.toLocaleString('en-IN')}`}
                          contentStyle={{ backgroundColor: '#171717', border: '1px solid #333', borderRadius: '8px' }}
                          itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Total</span>
                      <span className="text-lg font-bold text-white">₹ {(Math.round(maturityAmount / 1000)).toLocaleString()}K</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-[10px] text-white/60 uppercase tracking-wider font-bold">Invested</span>
                      </div>
                      <span className="text-sm font-bold text-white">₹ {investedAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-[10px] text-white/60 uppercase tracking-wider font-bold">Returns</span>
                      </div>
                      <span className="text-sm font-bold text-accent">+ ₹ {Math.round(interestEarned).toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4 h-12 text-sm font-black bg-cyan-gradient text-black hover:opacity-90 border-0 shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 transition-transform uppercase tracking-wider">
                    {product === 'pension' ? 'Start Pension' : 'Open Deposit'}
                  </Button>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
