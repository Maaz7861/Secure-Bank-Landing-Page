"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShieldCheck, HeartHandshake, Users, Sparkles, Building2, Coins, ArrowRight, Wallet } from "lucide-react"
import { useModal } from "@/context/ModalContext"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"

export function TrustStrip() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { openAccount } = useModal()
  const { t } = useLanguage()

  const pillars = [
    {
      icon: ShieldCheck,
      title: "High-Yield Member Deposits",
      desc: "Guaranteed interest up to 25.00% p.a. on Dhan Samriddhi FD and 16.00% p.a. on Dhanpravah RD with quarterly payout options."
    },
    {
      icon: Wallet,
      title: "Daily Pigmy (Dhanpocket)",
      desc: "Doorstep daily collection starting from ₹10/day for daily wage earners, shopkeepers, and local merchants."
    },
    {
      icon: Users,
      title: "Mahila Samriddhi Bachat Gat",
      desc: "Dedicated micro-finance and up to 3X credit line assistance empowering women self-help groups towards self-reliance."
    },
    {
      icon: Coins,
      title: "Instant Secured Loans",
      desc: "Fast processing Gold Loans, Property Loans & Overdraft (OD) up to ₹25 Lakhs at competitive interest rates."
    }
  ]

  return (
    <>
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(16,185,129,0.12)] border border-[#1a1a1a]"
            style={{ backgroundColor: '#0A0A0A', color: 'white' }}
          >
            {/* Emerald glow top-left */}
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)' }} />
            {/* Gold glow top-right */}
            <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

            {/* Left Side */}
            <div className="md:w-1/2 p-10 md:p-16 relative z-10 flex flex-col justify-center" style={{ color: 'white' }}>
              <h2 className="text-3xl md:text-5xl font-extrabold italic mb-2 tracking-tight" style={{ color: 'white' }}>
                open <span className="font-medium not-italic">to the progress of all</span>
              </h2>
              <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.70)' }}>
                Committed to our responsibility towards the society.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
                {[
                  { val: 'Registered', label: 'Co-operative Society' },
                  { val: '100%', label: 'Regulated & Secured' },
                  { val: '25.00%', label: 'Max FD Interest Rate' },
                ].map((stat, i) => (
                  <div key={i} className="rounded-xl p-4 sm:p-5 text-center transition-all hover:bg-white/10 flex flex-col justify-center items-center" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}>
                    <p className="text-base sm:text-lg lg:text-xl font-black mb-1.5 tracking-tight text-white" style={{ color: 'white' }}>{stat.val}</p>
                    <p className="text-[11px] sm:text-xs font-medium leading-tight" style={{ color: 'rgba(255,255,255,0.55)' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-cyan-gradient text-black px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 cursor-pointer"
                >
                  Know More
                </button>
              </div>
            </div>
            
            {/* Right Side: Image */}
            <div className="md:w-1/2 h-[300px] md:h-auto relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80')] bg-cover bg-center" />
               <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 40%, transparent 100%)' }} />
               <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.6) 40%, transparent 100%)' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Informative Popup Modal (Know More) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#051810] border border-[#0F5A34]/70 text-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Bar with Close Button */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#072E1B] via-[#0B4429] to-[#0F5A34] border-b border-gold-500/30">
                {/* Background Ambient Flourish */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
                
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors cursor-pointer border border-white/10"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="inline-flex items-center gap-2 bg-[#C9A227]/20 border border-[#C9A227]/40 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  <Building2 className="h-3.5 w-3.5" /> Urban Credit Co-operative Society
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  SIA — <span className="text-gold-gradient">SECURE UNITED</span>
                </h3>
                <p className="text-xs text-emerald-100/90 font-medium mt-1">
                  Reg. No: RSR/CR/2026/1061 • Rooted in Trust, Growing Your Prosperity
                </p>
              </div>

              {/* Modal Body Content (Scrollable) */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1 bg-[#051810]">
                {/* Overview Box */}
                <div className="bg-[#0A2619] border border-[#0F5A34]/60 rounded-2xl p-5 space-y-3 shadow-inner">
                  <h4 className="text-base font-bold text-accent flex items-center gap-2">
                    <HeartHandshake className="h-5 w-5 text-accent" /> About Our Society
                  </h4>
                  <p className="text-sm text-emerald-100/80 leading-relaxed">
                    SIA Secure United Urban Credit Co-operative Society Ltd. is a modern, transparent, and member-owned financial institution. Our primary objective is to keep member deposits 100% secure while providing high-yield returns, accessible credit lines, and member-first services.
                  </p>
                </div>

                {/* 4 Pillars Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400/90 mb-4 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" /> Our Core Pillars of Growth
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pillars.map((pillar, pIdx) => {
                      const Icon = pillar.icon
                      return (
                        <div
                          key={pIdx}
                          className="bg-[#0A2619]/90 hover:bg-[#0E3524] border border-[#0F5A34]/50 p-4 rounded-xl transition-all space-y-2 group hover:shadow-lg"
                        >
                          <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h5 className="font-bold text-sm text-white">{pillar.title}</h5>
                          <p className="text-xs text-emerald-100/70 leading-relaxed">{pillar.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Regulatory & Safety Assurance */}
                <div className="bg-[#0B4429]/40 border border-[#10B981]/40 rounded-2xl p-4 flex items-start gap-4">
                  <ShieldCheck className="h-8 w-8 text-emerald-400 shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-emerald-300">100% Regulated Framework</h5>
                    <p className="text-xs text-emerald-100/80 leading-relaxed">
                      All deposit schemes, payout terms, and premature withdrawal conditions are strictly governed by the society&apos;s approved deposit framework and applicable co-operative regulations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-6 bg-[#020E09] border-t border-[#0F5A34]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-emerald-100/70 text-center sm:text-left">
                  Have questions? Email us at <strong className="text-accent">siasecureunited@gmail.com</strong>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-[#0F5A34] text-emerald-100 text-xs font-bold hover:bg-[#0B4429]/50 transition-colors cursor-pointer"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      setIsModalOpen(false)
                      openAccount()
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-cyan-gradient text-black text-xs font-black shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Open Account <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
