"use client"

import * as React from "react"
import { Moon, Sun, Menu, ChevronDown, Globe } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"
import { useLanguage } from "@/context/LanguageContext"
import { useModal } from "@/context/ModalContext"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const { openLogin, openAccount } = useModal()

  const [mounted, setMounted] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Top Utility Strip (Stable & fixed height, no layout jump) */}
      <div className="bg-primary text-primary-foreground text-xs hidden md:block border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-9">
          <div className="flex items-center gap-6 font-semibold opacity-90">
            <span>Reg. No. RSR/CR/2026/1061</span>
            <span>•</span>
            <span>An Urban Credit Co-operative Society</span>
          </div>
          <div className="flex items-center gap-6 font-medium opacity-90">
            <a href="tel:+919405426350" className="hover:opacity-100 transition-colors">Helpline: +91 94054 26350</a>
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="flex items-center gap-1 bg-primary-foreground/10 px-2 py-0.5 rounded-full hover:bg-primary-foreground/20 transition-colors cursor-pointer"
            >
              <Globe className="h-3 w-3" />
              <span className="font-bold">{language === "en" ? "हिन्दी" : "English"}</span>
            </button>

            <a
              href="#footer"
              className="hover:opacity-100 transition-colors font-bold underline cursor-pointer"
            >
              {t("Contact Us", "संपर्क करें")}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar - Single Smooth Transition */}
      <div 
        className={`w-full transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border/40' 
            : 'bg-background/80 backdrop-blur-xl border-b border-transparent shadow-none'
        }`}
      >
        <div 
          className={`container mx-auto px-4 lg:px-8 flex items-center justify-between transition-all duration-300 ease-in-out ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
        >
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div 
              className={`relative w-auto flex items-center justify-center transition-all duration-300 ease-in-out shrink-0 ${
                isScrolled ? 'h-8 sm:h-9 md:h-10' : 'h-9 sm:h-11 md:h-12'
              }`}
            >
              <Image 
                src="/logo.png" 
                alt="Secure United Logo" 
                width={200} 
                height={60} 
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            
            <div
              className={`flex flex-col justify-center overflow-hidden whitespace-nowrap transition-transform duration-300 ease-in-out origin-left min-w-0 ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              <span className="text-[13px] sm:text-base md:text-xl font-black tracking-tight text-gold-gradient leading-none mb-0.5 truncate">
                SECURE UNITED
              </span>
              <span className="text-[7.5px] sm:text-[9px] md:text-[10px] text-muted-foreground font-bold tracking-widest leading-none truncate">
                URBAN CREDIT CO-OP
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-sm text-foreground">
            <a href="#savings" className="hover:text-primary transition-colors relative group">
              {t("Accounts", "खाते")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#deposits" className="hover:text-primary transition-colors relative group">
              {t("Deposits", "डिपाजिट")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#pension" className="hover:text-primary transition-colors relative group">
              {t("Investments", "पेंशन योजना")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#digital" className="hover:text-primary transition-colors relative group">
              {t("Digital Services", "डिजिटल सेवाएं")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Action Area (Toggle, Contact Us) */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* Theme Toggle — mounted safely without layout shifts */}
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
              className="p-2 rounded-full hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <div className="hidden sm:flex items-center gap-3 border-l border-border pl-4 ml-1">
              <Button 
                onClick={() => openAccount()}
                className="h-10 px-4 font-bold hidden md:flex bg-cyan-gradient text-black hover:opacity-90 shadow-md shadow-primary/20 border-0 cursor-pointer"
              >
                {t("Open Digital A/C", "डिजिटल खाता खोलें")}
              </Button>
              <a 
                href="#footer"
                className="h-10 px-6 font-bold bg-cyan-gradient text-black hover:opacity-90 shadow-md shadow-primary/20 rounded-xl flex items-center justify-center border-0 cursor-pointer text-sm"
              >
                {t("Contact Us", "संपर्क करें")}
              </a>
            </div>

            <button 
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 font-bold text-foreground">
              <a href="#savings" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>{t("Accounts", "खाते")}</a>
              <a href="#deposits" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>{t("Deposits", "डिपाजिट")}</a>
              <a href="#pension" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>{t("Investments", "निवेश / पेंशन")}</a>
              <a href="#digital" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>{t("Digital Services", "डिजिटल सेवाएं")}</a>
              <Link href="/privacy-policy" className="py-2 border-b border-border text-primary flex items-center gap-1" onClick={() => setIsMobileMenuOpen(false)}>🔒 {t("Privacy Policy", "गोपनीयता नीति")}</Link>
              <Link href="/terms-and-conditions" className="py-2 border-b border-border text-primary flex items-center gap-1" onClick={() => setIsMobileMenuOpen(false)}>📄 {t("Terms & Conditions", "नियम एवं शर्तें")}</Link>
              
              <div className="grid grid-cols-2 gap-3 mt-2">
                <Button 
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    openAccount()
                  }} 
                  className="w-full bg-cyan-gradient text-black border-0 cursor-pointer"
                >
                  {t("Open A/C", "खाता खोलें")}
                </Button>
                <a 
                  href="#footer"
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="w-full bg-cyan-gradient text-black font-bold py-2 rounded-xl text-center flex items-center justify-center border-0 cursor-pointer text-sm"
                >
                  {t("Contact Us", "संपर्क करें")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
