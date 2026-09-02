"use client"

import { Button } from "@/components/ui/Button"
import { ArrowRight, Landmark, ShieldCheck, Smartphone, Wallet } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-background pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Restrained Typography Hierarchy */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-snug">
              <span className="italic font-serif text-primary pr-2">Open</span> 
              to your prosperity.
            </h1>
            <p className="text-sm lg:text-base text-muted-foreground max-w-xl font-normal">
              Guiding you to achieve your financial endeavors with premium deposit rates, quick loans, and seamless digital banking designed specifically for our members.
            </p>
            
            {/* Interactive Tabbed Interface inside Hero */}
            <div className="mt-8">
              <div className="flex gap-6 border-b border-border">
                <button className="pb-2 border-b-2 border-primary font-semibold text-primary text-sm transition-all">Save & Grow</button>
                <button className="pb-2 border-b-2 border-transparent text-muted-foreground hover:text-foreground text-sm font-medium transition-all">Borrow Smart</button>
                <button className="pb-2 border-b-2 border-transparent text-muted-foreground hover:text-foreground text-sm font-medium transition-all">Bank Safe</button>
              </div>
              
              <div className="mt-6 bg-secondary/50 rounded-xl p-5 border border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-background p-3 rounded-lg border border-border shadow-sm">
                    <div className="bg-primary/10 p-2 rounded-md"><Landmark className="h-4 w-4 text-primary" /></div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">Secure Dhan Samriddhi FD</p>
                      <p className="text-xs text-muted-foreground">Earn up to 25.00% p.a. for 49 Months</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-background p-3 rounded-lg border border-border shadow-sm">
                    <div className="bg-primary/10 p-2 rounded-md"><Wallet className="h-4 w-4 text-primary" /></div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">Zero Balance Savings</p>
                      <p className="text-xs text-muted-foreground">Instant account opening with no hidden charges</p>
                    </div>
                  </div>
                  <Button className="w-full mt-2 h-10 text-sm font-medium rounded-lg">
                    Explore Savings & Deposits
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Visuals / Artwork Area */}
          <div className="hidden lg:block relative h-full min-h-[400px] w-full bg-secondary/30 rounded-3xl overflow-hidden border border-border/50">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 mix-blend-luminosity" />
             <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/80 to-transparent" />
             
             {/* Floating Trust Badge */}
             <div className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-lg flex items-center gap-4">
                <div className="bg-primary p-3 rounded-full text-primary-foreground">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold">Registered Society</p>
                  <p className="text-xs text-muted-foreground">Reg No. 1234656789</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
