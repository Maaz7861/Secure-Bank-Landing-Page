"use client"

import * as React from "react"
import { CreditCard, ShieldCheck, Zap, Coins, FileText, Send, Lock } from "lucide-react"
import { motion } from "framer-motion"

export function DigitalBanking() {
  const floatingCards = [
    { icon: Send, title: "Send Money Abroad", delay: 0.1, position: "top-[10%] left-[2%] md:-left-[15%]" },
    { icon: Zap, title: "Bill Payments", delay: 0.3, position: "top-[40%] -left-[5%] md:-left-[25%]" },
    { icon: Coins, title: "Manage Investments", delay: 0.5, position: "bottom-[15%] left-[2%] md:-left-[10%]" },
    
    { icon: CreditCard, title: "Manage Your Cards", delay: 0.2, position: "top-[15%] right-[2%] md:-right-[15%]" },
    { icon: FileText, title: "Personal Loans", delay: 0.4, position: "top-[50%] -right-[5%] md:-right-[25%]" },
    { icon: Lock, title: "Fixed Deposits", delay: 0.6, position: "bottom-[20%] right-[2%] md:-right-[10%]" },
  ]

  return (
    <section className="py-24 bg-background overflow-hidden relative" id="digital">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#0F172A] dark:text-white">Banking anytime, anywhere</h2>
          <p className="text-muted-foreground text-lg">
            Experience seamless, paperless, and secure banking wherever you go. Over 250+ services available on the SIA Mobile App.
          </p>
        </div>

        {/* Axis Bank Style Marketing Image with White Glass Cards */}
        <div className="relative max-w-3xl mx-auto flex justify-center items-center mt-10">
          
          {/* Central Marketing Image inside a rounded beautiful frame */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-20 w-[300px] h-[550px] md:w-[350px] md:h-[650px] rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] bg-white overflow-hidden border-[10px] border-white dark:border-[#111827]"
          >
             <div className="absolute inset-0 bg-[url('/happy_fintech_user.jpg')] bg-cover bg-center" />
             
             {/* Gentle gradient at bottom just to make text readable */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-[#0B1120]/10 to-transparent" />
             
             <div className="absolute bottom-10 left-0 w-full text-center text-white px-6 z-10">
                <ShieldCheck className="h-10 w-10 mx-auto mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                <h3 className="text-3xl font-black italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">open</h3>
                <p className="text-[10px] font-bold tracking-widest uppercase mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">SIA Bank App</p>
             </div>
          </motion.div>

          {/* Floating UI Cards */}
          {floatingCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: card.delay, 
                duration: 0.5,
                y: {
                  duration: 3 + idx,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                } as unknown
              }}
              animate={{ 
                y: [0, -10, 0],
              }}
              className={`absolute ${card.position} z-30 hidden md:flex`}
            >
              <div className={`glass-card p-3 md:p-4 rounded-2xl flex items-center gap-3 hover:scale-105 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-all cursor-pointer w-[190px] md:w-[230px] group`}>
                 <div className="bg-primary/10 text-primary dark:bg-primary/20 p-2.5 rounded-full shrink-0 group-hover:bg-primary group-hover:text-white dark:group-hover:text-[#0B1120] transition-colors">
                    <card.icon className="h-4 w-4 md:h-5 md:w-5" />
                 </div>
                 <span className="font-bold text-xs md:text-sm leading-tight">{card.title}</span>
                 <div className="ml-auto opacity-30 group-hover:opacity-100 group-hover:text-primary transition-colors">
                   <svg width="6" height="10" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 </div>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  )
}
