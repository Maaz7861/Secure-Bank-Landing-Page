"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useModal } from "@/context/ModalContext"
import { useLanguage } from "@/context/LanguageContext"

export function Footer() {
  const { openAccount } = useModal()
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary/50 border-t pt-12 pb-32 md:py-16" id="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-auto flex items-center justify-center p-1 bg-background/80 rounded-xl border border-border shadow-sm">
                <Image 
                  src="/logo.png" 
                  alt="SIA Secure United Logo" 
                  width={48} 
                  height={48} 
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-gold-gradient leading-none">SIA</span>
                <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">Secure United</span>
              </div>
            </div>

            <p className="text-sm font-semibold text-foreground leading-snug">
              SECURE UNITED URBAN CREDIT CO-OPERATIVE SOCIETY LTD.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Reg. No: RSR/CR/2026/1061 • An Urban Credit Co-operative Society
            </p>
            <a
              href="#footer"
              className="text-xs font-bold text-primary hover:underline cursor-pointer inline-block"
            >
              → {t("Contact Us", "संपर्क करें")}
            </a>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-foreground">{t("Products", "उत्पाद")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-medium">
              <li>
                <button onClick={() => openAccount({ planType: "savings" })} className="hover:text-primary transition-colors cursor-pointer text-left">
                  SIA Samriddhi Khata (Savings)
                </button>
              </li>
              <li>
                <button onClick={() => openAccount({ planType: "current" })} className="hover:text-primary transition-colors cursor-pointer text-left">
                  SIA Vyapar Khata (Current)
                </button>
              </li>
              <li>
                <button onClick={() => openAccount({ planType: "fd" })} className="hover:text-primary transition-colors cursor-pointer text-left">
                  SIA Dhan Samriddhi (Fixed Deposit)
                </button>
              </li>
              <li>
                <button onClick={() => openAccount({ planType: "pension" })} className="hover:text-primary transition-colors cursor-pointer text-left">
                  SIA Jeevan Nidhi (Pension Plan)
                </button>
              </li>
              <li>
                <button onClick={() => openAccount({ planType: "rd" })} className="hover:text-primary transition-colors cursor-pointer text-left">
                  SIA Dhanpravah (Recurring Deposit)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-foreground">{t("Company & Legal", "संस्था एवं नीतियां")}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground font-medium">
              <li><a href="#about" className="hover:text-primary transition-colors">{t("About Us", "हमारे बारे में")}</a></li>
              <li><a href="#branches" className="hover:text-primary transition-colors">{t("Branches", "शाखाएं")}</a></li>
              <li><a href="#mitra" className="hover:text-primary transition-colors">{t("Become SIA Mitra", "एसआईए मित्र बनें")}</a></li>
              <li>
                <Link href="/privacy-policy" className="text-primary font-bold hover:underline flex items-center gap-1">
                  🔒 Privacy Policy (गोपनीयता नीति)
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-primary font-bold hover:underline flex items-center gap-1">
                  📄 Terms & Conditions (नियम एवं शर्तें)
                </Link>
              </li>
              <li><a href="#footer" className="hover:text-primary transition-colors">{t("Contact Us", "संपर्क करें")}</a></li>
            </ul>
          </div>

          {/* Column 4: Support & Help */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-foreground">{t("Support & Help", "सहायता एवं सहायता")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-medium">
              <li><a href="tel:+919405426350" className="hover:text-primary transition-colors">Helpline: +91 94054 26350</a></li>
              <li><a href="mailto:siasecureunited@gmail.com" className="hover:text-primary transition-colors break-all">siasecureunited@gmail.com</a></li>
              <li><a href="#footer" className="hover:text-primary transition-colors">Grievance Redressal Officer</a></li>
              <li><a href="#footer" className="hover:text-primary transition-colors">KYC Downloads & Forms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-xs text-muted-foreground space-y-3">
          <p className="font-semibold">
            * Rates are subject to change without prior notice as per society guidelines.
          </p>
          <p className="leading-relaxed">
            Interest rates, payout periods, premature withdrawal terms and all other conditions are governed by the society&apos;s approved deposit scheme and applicable co-operative regulations. Premature withdrawal penalties attract 18% GST.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4 pt-4 border-t border-border/30">
            <p>© 2026 SECURE UNITED Urban Credit Co-operative Society Ltd. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-bold text-xs">
              <Link 
                href="/privacy-policy" 
                className="px-3 py-1 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all border border-primary/20 cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-and-conditions" 
                className="px-3 py-1 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all border border-primary/20 cursor-pointer"
              >
                Terms & Conditions
              </Link>
              <a href="#footer" className="hover:text-primary transition-colors font-medium">
                Grievance Redressal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
