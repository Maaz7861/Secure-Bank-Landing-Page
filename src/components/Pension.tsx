"use client"

import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { HeartHandshake, ArrowRight, Shield } from "lucide-react"
import Image from "next/image"
import { useModal } from "@/context/ModalContext"
import { useLanguage } from "@/context/LanguageContext"

export function Pension() {
  const { openAccount } = useModal()
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#011c14] via-[#022f22] to-[#01140e] dark:bg-none dark:bg-[#171717] text-white" id="pension">
      {/* Dark mode spotlight ambient glow (Emerald + Gold) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.14)_0%,rgba(212,175,55,0.07)_50%,transparent_80%)] pointer-events-none" />

      {/* Gold Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_70%)] blur-[90px] pointer-events-none -mr-40 -mt-40" />
      {/* Mint Emerald Glow */}
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2)_0%,transparent_70%)] blur-[100px] pointer-events-none -ml-40 -mb-40" />
      
      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#FDE047] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <HeartHandshake className="h-4 w-4" /> Jeevan Nidhi
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Retire with <span className="text-gold-gradient">Dignity</span>
            </h2>
            <p className="text-base md:text-lg text-emerald-100/90 font-medium leading-relaxed">
              {t(
                "Secure a guaranteed monthly income. Invest a lump sum today and receive fixed payouts every month without touching your principal.",
                "एक निश्चित मासिक आय सुरक्षित करें। आज एकमुश्त निवेश करें और अपने मूलधन को छुए बिना हर महीने निश्चित भुगतान प्राप्त करें।"
              )}
            </p>
            
            <ul className="space-y-4 pt-2">
               <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 border border-[#D4AF37]/40">
                    <Shield className="h-4 w-4 text-[#FDE047]" />
                  </div>
                  <span className="font-semibold text-white text-sm md:text-base">Guaranteed up to 15.00% p.a. returns</span>
               </li>
               <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 border border-[#D4AF37]/40">
                    <Shield className="h-4 w-4 text-[#FDE047]" />
                  </div>
                  <span className="font-semibold text-white text-sm md:text-base">Zero market risk on your principal</span>
               </li>
            </ul>

            <div className="pt-4">
              <Button 
                onClick={() => openAccount({ planName: "SIA Jeevan Nidhi (Pension Plan)", planType: "pension" })}
                className="w-full sm:w-auto bg-cyan-gradient text-black hover:opacity-95 font-bold border-0 h-12 px-8 text-base shadow-xl shadow-black/40 gap-2 cursor-pointer"
              >
                {t("Calculate & Apply for Pension", "पेंशन की गणना करें और आवेदन करें")} <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Floating 3D Feature Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            {/* Ambient Multi-layer Glow behind the floating graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#10B981]/30 via-[#D4AF37]/25 to-transparent rounded-full blur-[90px] pointer-events-none scale-90" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#10B981]/20 rounded-full blur-[70px] pointer-events-none" />
            
            {/* Seamless Blended Graphic (mix-blend-multiply dissolves white canvas 100%) */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center p-2 sm:p-4">
              <Image 
                src="/re.png"
                alt="Jeevan Nidhi Pension Illustration"
                width={1200}
                height={800}
                className="w-full h-auto object-contain max-w-[660px] mix-blend-multiply contrast-110 brightness-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-[1.02]"
                priority
              />

              {/* Sleek Stage Base Line Grounding the Image Bottom */}
              <div className="relative w-full max-w-[580px] flex items-center justify-center mt-0 z-20 pointer-events-none">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_12px_#D4AF37]" />
                <div className="absolute w-2/3 h-[1.5px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_15px_#10B981]" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
