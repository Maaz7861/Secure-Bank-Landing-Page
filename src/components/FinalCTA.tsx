"use client"

import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.2)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-primary/40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Ready to experience <span className="text-gold-gradient">Premium Banking?</span>
        </h2>
        <p className="text-lg text-white/80 font-medium mb-10">
          Join thousands of members who trust us with their life savings. Open an account digitally in less than 5 minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 h-14 px-10 font-black text-lg shadow-xl gap-2 border-0">
            Open Account Now <ArrowRight className="h-5 w-5" />
          </Button>
          <Button className="w-full sm:w-auto bg-transparent border-2 border-white/50 text-white hover:bg-white/10 h-14 px-10 font-bold text-lg">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}
