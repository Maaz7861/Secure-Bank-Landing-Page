"use client"

import * as React from "react"
import { Moon, Sun, Menu, ChevronDown, Globe } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Top Utility Strip (Smoothly collapses on scroll like Axis Bank) */}
      <div 
        className={`bg-primary text-primary-foreground text-xs hidden md:block transition-all duration-300 ease-in-out overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-10 opacity-100'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-9">
          <div className="flex items-center gap-6 font-semibold opacity-90">
            <a href="#" className="hover:opacity-100 transition-colors">Personal</a>
            <a href="#" className="hover:opacity-100 transition-colors">Business</a>
            <a href="#" className="hover:opacity-100 transition-colors">Corporate</a>
            <a href="#" className="hover:opacity-100 transition-colors">NRI</a>
          </div>
          <div className="flex items-center gap-6 font-medium opacity-90">
            <a href="#" className="hover:opacity-100 transition-colors">About Us</a>
            <a href="#" className="hover:opacity-100 transition-colors">Support</a>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-100 transition-colors">
              <Globe className="h-3 w-3" />
              <span>English</span>
              <ChevronDown className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <div 
        className={`w-full transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-md' 
            : 'bg-background/80 backdrop-blur-xl shadow-none'
        }`}
      >
        <div 
          className={`container mx-auto px-4 lg:px-8 flex items-center justify-between transition-all duration-300 ease-in-out ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
        >
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div 
              className={`relative w-auto flex items-center justify-center transition-all duration-300 ease-in-out ${
                isScrolled ? 'h-9 md:h-10' : 'h-11 md:h-12'
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
              className={`flex flex-col justify-center overflow-hidden whitespace-nowrap transition-transform duration-300 ease-in-out origin-left ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              <span className="text-[16px] md:text-xl font-black tracking-tight text-gold-gradient leading-none mb-1">
                SECURE UNITED
              </span>
              <span className="text-[9px] md:text-[10px] text-muted-foreground font-bold tracking-widest leading-none">
                URBAN CREDIT CO-OP
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-sm text-foreground">
            <a href="#savings" className="hover:text-primary transition-colors relative group">
              Accounts
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#deposits" className="hover:text-primary transition-colors relative group">
              Deposits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#pension" className="hover:text-primary transition-colors relative group">
              Investments
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#digital" className="hover:text-primary transition-colors relative group">
              Digital Banking
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Action Area (Toggle, Login) */}
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
              <Button className="h-10 px-4 font-bold hidden md:flex bg-cyan-gradient text-black hover:opacity-90 shadow-md shadow-primary/20 border-0">
                Open Digital A/C
              </Button>
              <Button className="h-10 px-6 font-bold bg-cyan-gradient text-black hover:opacity-90 shadow-md shadow-primary/20 gap-2 border-0">
                Login <ChevronDown className="h-4 w-4" />
              </Button>
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
              <a href="#savings" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Accounts</a>
              <a href="#deposits" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Deposits</a>
              <a href="#pension" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Investments</a>
              <a href="#digital" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Digital Banking</a>
              
              <div className="grid grid-cols-2 gap-3 mt-2">
                <Button className="w-full bg-cyan-gradient text-black border-0">Open A/C</Button>
                <Button className="w-full bg-cyan-gradient text-black border-0">Login</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
