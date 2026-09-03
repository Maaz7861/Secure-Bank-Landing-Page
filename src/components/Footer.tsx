"use client"

import { useModal } from "@/context/ModalContext"
import { useLanguage } from "@/context/LanguageContext"

export function Footer() {
  const { openAccount, openLogin } = useModal()
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary/50 border-t py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-black tracking-tight text-foreground">SIA</h3>
            <p className="text-sm font-semibold text-foreground">
              SECURE UNITED URBAN CREDIT CO-OPERATIVE SOCIETY LTD.
            </p>
            <p className="text-xs text-muted-foreground">
              Reg. No: 1234656789 • An Urban Credit Co-operative Society
            </p>
            <button
              onClick={openLogin}
              className="text-xs font-bold text-primary hover:underline cursor-pointer"
            >
              → {t("Member Portal Login", "सदस्य पोर्टल लॉगिन")}
            </button>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-foreground">{t("Products", "उत्पाद")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-medium">
              <li>
                <button onClick={() => openAccount({ planType: "savings" })} className="hover:text-primary transition-colors cursor-pointer">
                  SIA Samriddhi Khata (Savings)
                </button>
              </li>
              <li>
                <button onClick={() => openAccount({ planType: "current" })} className="hover:text-primary transition-colors cursor-pointer">
                  SIA Vyapar Khata (Current)
                </button>
              </li>
              <li>
                <button onClick={() => openAccount({ planType: "fd" })} className="hover:text-primary transition-colors cursor-pointer">
                  SIA Dhan Samriddhi (Fixed Deposit)
                </button>
              </li>
              <li>
                <button onClick={() => openAccount({ planType: "pension" })} className="hover:text-primary transition-colors cursor-pointer">
                  SIA Jeevan Nidhi (Pension Plan)
                </button>
              </li>
              <li>
                <button onClick={() => openAccount({ planType: "rd" })} className="hover:text-primary transition-colors cursor-pointer">
                  SIA Dhanpravah (Recurring Deposit)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-foreground">{t("Company", "संस्था")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-medium">
              <li><a href="#about" className="hover:text-primary transition-colors">{t("About Us", "हमारे बारे में")}</a></li>
              <li><a href="#branches" className="hover:text-primary transition-colors">{t("Branches", "शाखाएं")}</a></li>
              <li><a href="#mitra" className="hover:text-primary transition-colors">{t("Become SIA Mitra", "एसआईए मित्र बनें")}</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">{t("Contact Us", "संपर्क करें")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-foreground">{t("Support & Help", "सहायता एवं सहायता")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-medium">
              <li><a href="tel:1800123456" className="hover:text-primary transition-colors">Helpline: 1800-123-456</a></li>
              <li><a href="mailto:support@siabank.org" className="hover:text-primary transition-colors">support@siabank.org</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Grievance Redressal Officer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">KYC Downloads & Forms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-xs text-muted-foreground space-y-2">
          <p className="font-semibold">
            * Rates are subject to change without prior notice as per society guidelines.
          </p>
          <p className="leading-relaxed">
            Interest rates, payout periods, premature withdrawal terms and all other conditions are governed by the society&apos;s approved deposit scheme and applicable banking/co-operative regulations. Premature withdrawal penalties attract 18% GST.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4 pt-4 border-t border-border/30">
            <p>© 2026 SECURE UNITED Urban Credit Co-operative Society Ltd. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors font-medium">Terms & Conditions</a>
              <a href="#" className="hover:text-primary transition-colors font-medium">Grievance Redressal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
