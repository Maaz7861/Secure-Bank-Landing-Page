"use client"

import { Button } from "@/components/ui/Button"
import { ArrowRight, Phone } from "lucide-react"
import { useModal } from "@/context/ModalContext"
import { useLanguage } from "@/context/LanguageContext"

export function FinalCTA() {
  const { openAccount } = useModal()
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.2)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-primary/40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          {t("Ready to experience ", "क्या आप तैयार हैं ")}
          <span className="text-gold-gradient">{t("Society Banking?", "सोसाइटी बैंकिंग का अनुभव लेने के लिए?")}</span>
        </h2>
        <p className="text-lg text-white/80 font-medium mb-10">
          {t(
            "Join thousands of members who trust us with their life savings. Open an account digitally in less than 5 minutes.",
            "हजारों सदस्यों के साथ जुड़ें जो अपनी जीवन भर की बचत के लिए हम पर भरोसा करते हैं। 5 मिनट से भी कम समय में डिजिटल रूप से खाता खोलें।"
          )}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            onClick={() => openAccount()}
            className="w-full sm:w-auto bg-cyan-gradient text-black hover:opacity-90 h-14 px-10 font-black text-lg shadow-xl gap-2 border-0 cursor-pointer"
          >
            {t("Open Account Now", "अभी खाता खोलें")} <ArrowRight className="h-5 w-5" />
          </Button>
          <a
            href="tel:1800123456"
            className="w-full sm:w-auto bg-transparent border-2 border-white/50 text-white hover:bg-white/10 h-14 px-10 font-bold text-lg rounded-xl flex items-center justify-center gap-2"
          >
            <Phone className="h-5 w-5" />
            {t("Helpline: 1800-123-456", "हेल्पलाइन: 1800-123-456")}
          </a>
        </div>
      </div>
    </section>
  )
}
