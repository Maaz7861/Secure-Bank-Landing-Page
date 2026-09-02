"use client"

import * as React from "react"
import { Moon, Sun, Menu, Banknote, ChevronDown, Bell, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/Button"

export function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
      {/* 1. Ultra-Compact Top Utility Bar (~36px) */}
      <div className="w-full bg-secondary text-secondary-foreground h-9 px-4 lg:px-8 text-[11px] font-medium flex justify-between items-center">
        <div className="flex items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2 bg-background/20 px-3 h-full">
            <Banknote className="h-4 w-4" />
            <span className="font-bold tracking-widest hidden sm:inline">SIA</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-background text-foreground px-3 py-1 rounded-full shadow-sm">Personal</button>
            <button className="text-secondary-foreground/70 hover:text-foreground px-2 hidden md:inline">Business</button>
            <button className="text-secondary-foreground/70 hover:text-foreground px-2 hidden lg:inline">Corporate</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-primary transition-colors hidden md:inline">About Us</a>
          <a href="#" className="hover:text-primary transition-colors hidden sm:inline">Support</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
            <Globe className="h-3 w-3" />
            <span>Eng</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="hover:text-primary">
            {theme === 'dark' ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <Bell className="h-3.5 w-3.5 hover:text-primary cursor-pointer hidden sm:block" />
        </div>
      </div>
      
      {/* 2. Main Secondary Action Bar (~56px) */}
      <div className="container mx-auto px-4 lg:px-8 flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tighter text-primary sm:hidden">SIA</span>
          
          <nav className="hidden md:flex items-center gap-2">
            <button className="px-3 py-2 text-sm font-semibold hover:text-primary transition-colors">
              Savings Account
            </button>
            <button className="px-3 py-2 text-sm font-semibold hover:text-primary transition-colors">
              Fixed Deposits
            </button>
            <button className="px-3 py-2 text-sm font-semibold hover:text-primary transition-colors">
              Loans
            </button>
            <button className="px-3 py-2 text-sm font-semibold hover:text-primary transition-colors">
              Digital Banking
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-9 px-4 text-xs font-semibold rounded-full border-primary text-primary hover:bg-primary/10 hidden sm:flex">
            Open Digital A/C
          </Button>
          <Button className="h-9 px-4 text-xs font-semibold rounded-md gap-1">
            Login <ChevronDown className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
