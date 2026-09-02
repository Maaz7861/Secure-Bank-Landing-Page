"use client"

import * as React from "react"
import { Moon, Sun, Menu, ChevronDown, Globe, Search, ShieldCheck } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Top Utility Strip (Axis Bank Style) */}
      <div className="bg-primary text-primary-foreground text-xs hidden md:block">
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
      <div className="bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-cyan-gradient p-2 rounded-lg text-[#0B1120] shadow-lg shadow-primary/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-foreground">
              SIA <span className="text-muted-foreground font-medium hidden sm:inline">Bank</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-sm text-foreground">
            <a href="#savings" className="hover:text-primary transition-colors relative group">
              Accounts
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#fd" className="hover:text-primary transition-colors relative group">
              Deposits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#loans" className="hover:text-primary transition-colors relative group">
              Loans
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#digital" className="hover:text-primary transition-colors relative group">
              Digital Banking
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Action Area (Toggle, Search, Login) */}
          <div className="flex items-center gap-3 md:gap-4">
            
            <Search className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer hidden sm:block transition-colors" />

            {/* Theme Toggle restored */}
            {mounted && (
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className="p-2 rounded-full hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}

            <div className="hidden sm:flex items-center gap-3 border-l border-border pl-4 ml-1">
              <Button variant="outline" className="h-10 px-4 font-bold hidden md:flex border-primary/20 text-foreground hover:bg-primary/10">
                Open Digital A/C
              </Button>
              <Button className="h-10 px-6 font-bold bg-cyan-gradient text-[#0B1120] hover:opacity-90 shadow-md shadow-primary/20 gap-2">
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
              <a href="#fd" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Deposits</a>
              <a href="#loans" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Loans</a>
              <a href="#digital" className="py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Digital Banking</a>
              
              <div className="grid grid-cols-2 gap-3 mt-2">
                <Button variant="outline" className="w-full">Open A/C</Button>
                <Button className="w-full bg-cyan-gradient text-[#0B1120]">Login</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
