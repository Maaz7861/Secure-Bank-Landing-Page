"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Users, ArrowRight } from "lucide-react"
import { useModal } from "@/context/ModalContext"
import { useLanguage } from "@/context/LanguageContext"

export function SiaMitra() {
  const { openLogin } = useModal()
  const { t } = useLanguage()

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
          <div className="w-full md:w-5/12 h-56 sm:h-64 md:h-auto min-h-[240px] md:min-h-[350px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, transparent 30%, #0A0A0A 100%)' }} />
            <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to bottom, transparent 30%, #0A0A0A 100%)' }} />
          </div>

          {/* Emerald glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] -mr-20 -mt-20 opacity-20 pointer-events-none" style={{ backgroundColor: '#10B981' }} />
          
          <div className="relative z-10 md:w-7/12 p-5 sm:p-8 md:p-12 md:pl-0 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8" style={{ color: 'white' }}>
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'white' }}>
                 <Users className="h-4 w-4 text-primary" /> Become a Partner
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'white' }}>SIA Mitra Program</h2>
              <p className="text-sm sm:text-lg" style={{ color: 'rgba(255,255,255,0.70)' }}>
                {t(
                  "Earn attractive commissions by helping your community save and invest. Become an authorized SIA agent today.",
                  "अपने समुदाय को बचत और निवेश में मदद करके आकर्षक कमीशन कमाएं। आज ही अधिकृत SIA एजेंट बनें।"
                )}
              </p>
            </div>
            
            <div className="w-full md:w-auto shrink-0">
              <div 
                className="w-full md:w-auto h-14 px-8 bg-cyan-gradient text-black font-extrabold text-base rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(16,185,129,0.25)] select-none pointer-events-none"
              >
                {t("Coming Soon", "जल्द ही आ रहा है")}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
