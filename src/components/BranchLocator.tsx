"use client"

import { Button } from "@/components/ui/Button"
import { MapPin, Phone, Search } from "lucide-react"

export function BranchLocator() {
  return (
    <section className="py-20 bg-secondary/20" id="branches">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Find a Branch</h2>
            <p className="text-muted-foreground mb-8">
              With over 15 branches across the state, we are always near you.
            </p>
            
            <div className="relative mb-6">
              <input 
                type="text" 
                placeholder="Enter city or pin code" 
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            
            <Button className="w-full h-12 font-bold bg-primary text-primary-foreground hover:bg-primary/90">
              Locate Nearest Branch
            </Button>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((branch) => (
              <div key={branch} className="bg-card border border-border p-6 rounded-xl hover:border-accent/50 transition-colors cursor-pointer">
                <h3 className="font-bold text-lg mb-2">Main Branch {branch}</h3>
                <div className="space-y-2 mb-4">
                  <p className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                    123, Financial Hub, Co-operative Street, District {branch} - 400001
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 shrink-0 text-accent" />
                    +91 98765 43210
                  </p>
                </div>
                <p className="text-xs font-semibold text-primary">Open Today: 10:00 AM - 5:00 PM</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
