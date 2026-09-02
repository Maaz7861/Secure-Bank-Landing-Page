"use client"

import { Button } from "@/components/ui/Button"
import { Landmark, ShieldCheck, Wallet, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 md:pt-20 pb-20 border-b border-border/50">
      {/* Ultra-Premium Background Mesh Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Premium Typography & Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold tracking-wider text-xs uppercase"
              >
                भरोसे की जड़ें, समृद्धि की शाखाएँ
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
                Your savings. <br />
                <span className="text-cyan-gradient">Your society.</span>
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed font-medium">
                Deposits, loans, and digital banking for our members at premium rates set by the society. Experience trust and prosperity together.
              </p>
            </div>
            
            {/* Tabbed Feature Highlight with Premium styling */}
            <div className="mt-8 relative">
              <div className="absolute inset-0 bg-premium-gradient opacity-5 rounded-2xl pointer-events-none" />
              <div className="glass-card rounded-2xl p-1.5">
                <div className="flex bg-background/50 rounded-xl p-1">
                  <button className="flex-1 py-2 bg-card rounded-lg shadow-sm border border-border/50 text-sm font-bold text-primary transition-all">Save & Grow</button>
                  <button className="flex-1 py-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-all">Borrow Smart</button>
                  <button className="flex-1 py-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-all">Bank Safe</button>
                </div>
                
                <div className="p-4 space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 bg-background/80 p-3 rounded-xl border border-border hover:border-accent/50 transition-colors cursor-pointer group">
                    <div className="bg-primary/10 p-2.5 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Landmark className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-foreground">Secure Dhan Samriddhi FD</p>
                      <p className="text-xs text-muted-foreground">Earn up to <strong className="text-accent">25.00% p.a.</strong> for 49 Months</p>
                    </div>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 bg-background/80 p-3 rounded-xl border border-border hover:border-accent/50 transition-colors cursor-pointer group">
                    <div className="bg-primary/10 p-2.5 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Wallet className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-foreground">SIA Samriddhi Khata</p>
                      <p className="text-xs text-muted-foreground">High-yield savings with digital access</p>
                    </div>
                  </motion.div>

                  <Button className="w-full mt-2 h-11 text-sm font-bold rounded-xl bg-premium-gradient text-white border-0 shadow-lg hover:shadow-primary/25 gap-2">
                    Open an Account <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Visual Artwork */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px] w-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl"
          >
             <div className="absolute inset-0 bg-premium-gradient opacity-20 z-10" />
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')] bg-cover bg-center z-0" />
             
             {/* Cyan Flourish accent */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-gradient blur-3xl opacity-40 z-20" />
             
             {/* Floating Trust Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute bottom-10 left-10 z-30 glass-card p-5 rounded-2xl border-accent/20 flex items-center gap-4 w-72"
             >
                <div className="bg-cyan-gradient p-3.5 rounded-full text-[#0B1120] shadow-lg">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Registered Society</p>
                  <p className="text-xs text-muted-foreground font-medium">Reg No. 1234656789</p>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
