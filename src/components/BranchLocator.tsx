"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/Button"
import { MapPin, Phone, Search, CheckCircle } from "lucide-react"

export function BranchLocator() {
  const [search, setSearch] = useState("")
  const [searched, setSearched] = useState(false)

  const branches = [
    { id: 1, name: "Main Head Office Branch", address: "Gandhi Ward, Near Honda Showroom, Desaiganj Wadsa - 441207", phone: "+91 98765 43210", hours: "10:00 AM - 5:00 PM" },
    { id: 2, name: "Vyapar Market Branch", address: "45, Commercial Market Complex, Ward 4 - 400012", phone: "+91 98765 43211", hours: "10:00 AM - 5:00 PM" },
    { id: 3, name: "Samriddhi Hub Branch", address: "88, Station Road, Near Co-op Society Bldg - 400025", phone: "+91 98765 43212", hours: "10:00 AM - 5:00 PM" },
    { id: 4, name: "Rural & Krishi Branch", address: "12, APMC Market Yard, Highway Junction - 400050", phone: "+91 98765 43213", hours: "09:30 AM - 4:30 PM" }
  ]

  const filtered = branches.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.address.toLowerCase().includes(search.toLowerCase())
  )

  const handleLocate = (e: React.FormEvent) => {
    e.preventDefault()
    setSearched(true)
    setTimeout(() => setSearched(false), 3000)
  }

  return (
    <section className="py-20 bg-secondary/20" id="branches">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Find a Branch</h2>
            <p className="text-muted-foreground mb-8">
              With over 15 authorized branches across the state, we are always near you.
            </p>
            
            <form onSubmit={handleLocate} className="space-y-3 mb-6">
              <div className="relative">
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Enter city, location or pincode..." 
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              
              <Button type="submit" className="w-full h-12 font-bold bg-cyan-gradient text-black hover:opacity-90 border-0 cursor-pointer">
                {searched ? "Searching Nearby..." : "Locate Nearest Branch"}
              </Button>
            </form>

            {searched && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 rounded-xl text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Showing closest branches for &quot;{search || "All Locations"}&quot;
              </div>
            )}
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filtered.map((branch) => (
              <div key={branch.id} className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all cursor-pointer shadow-sm hover:shadow-md">
                <h3 className="font-bold text-lg mb-2 text-foreground">{branch.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    {branch.address}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    {branch.phone}
                  </p>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-emerald-500">Open Today: {branch.hours}</span>
                  <a href={`tel:${branch.phone}`} className="text-primary hover:underline font-bold">Call Branch</a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
