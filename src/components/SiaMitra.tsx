"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Users, ArrowRight } from "lucide-react"

export function SiaMitra() {
  return (
    <section className="py-12 bg-background" id="mitra">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(16,185,129,0.1)] border border-[#1a1a1a]"
          style={{ backgroundColor: '#0A0A0A' }}
        >
          {/* Partnership Image */}
          <div className="md:w-5/12 h-64 md:h-full min-h-[350px] relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 0%, #0A0A0A 100%)' }} />
          </div>

          {/* Emerald glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] -mr-20 -mt-20 opacity-20 pointer-events-none" style={{ backgroundColor: '#10B981' }} />
          
          <div className="relative z-10 md:w-7/12 p-8 md:p-12 md:pl-0 flex flex-col md:flex-row items-center justify-between gap-8" style={{ color: 'white' }}>
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'white' }}>
                 <Users className="h-4 w-4 text-primary" /> Become a Partner
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'white' }}>SIA Mitra Program</h2>
              <p className="text-lg" style={{ color: 'rgba(255,255,255,0.70)' }}>
                Earn attractive commissions by helping your community save and invest. Become an authorized SIA agent today.
              </p>
            </div>
            
            <div className="w-full md:w-auto shrink-0">
              <Button className="w-full md:w-auto h-14 px-8 bg-cyan-gradient text-black hover:opacity-90 font-bold text-lg shadow-[0_10px_20px_rgba(16,185,129,0.2)] gap-2 border-0">
                Join as Mitra <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
