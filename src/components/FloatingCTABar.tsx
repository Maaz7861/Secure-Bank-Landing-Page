"use client"

import React, { useState, useEffect } from "react"
import { Phone, ArrowRight, MessageSquare } from "lucide-react"
import { useModal } from "@/context/ModalContext"
import { useLanguage } from "@/context/LanguageContext"

export function FloatingCTABar() {
  const { openAccount } = useModal()
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Floating Action Button (Bottom Right Desktop + Mobile) */}
      <div className="fixed bottom-20 md:bottom-8 right-5 z-40 flex flex-col gap-3">
        <a
          href="tel:1800123456"
          className="bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center border-2 border-white/20 group"
          title="Call SIA Helpline"
        >
          <Phone className="h-5 w-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
            1800-123-456
          </span>
        </a>
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center border-2 border-white/20"
          title="WhatsApp Support"
        >
          <MessageSquare className="h-5 w-5" />
        </a>
      </div>

      {/* Sticky Mobile Bar (Visible on mobile only when scrolled past Hero) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-3 md:hidden shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:1800123456"
            className="w-full py-2.5 bg-secondary text-foreground text-xs font-bold rounded-xl flex items-center justify-center gap-2 border border-border"
          >
            <Phone className="h-4 w-4 text-primary" />
            {t("Call Helpline", "हेल्पलाइन कॉलिंग")}
          </a>
          <button
            onClick={() => openAccount()}
            className="w-full py-2.5 bg-cyan-gradient text-black text-xs font-black rounded-xl flex items-center justify-center gap-1 shadow-md cursor-pointer"
          >
            {t("Open A/C", "खाता खोलें")} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  )
}
