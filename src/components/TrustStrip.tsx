"use client"

import { motion } from "framer-motion"
import { Building, MapPin, Users, Coins } from "lucide-react"

export function TrustStrip() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Axis Bank Style Solid Block Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-stretch bg-[#0B1120] text-white rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,180,216,0.15)]"
        >
          {/* Subtle cyan glow in the background */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
          {/* Left Side: Stats and Content */}
          <div className="md:w-1/2 p-10 md:p-16 relative z-10 flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-5xl font-extrabold italic mb-2 tracking-tight">open <span className="font-medium not-italic">to the progress of all</span></h2>
            <p className="text-white/90 text-lg mb-10">Committed to our responsibility towards the society.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="border border-white/20 bg-white/5 rounded-xl p-6 text-center backdrop-blur-sm transition-all hover:bg-white/10">
                <p className="text-2xl md:text-3xl font-black mb-2">2.05M+</p>
                <p className="text-xs text-white/80 font-medium">Households Across India</p>
              </div>
              <div className="border border-white/20 bg-white/5 rounded-xl p-6 text-center backdrop-blur-sm transition-all hover:bg-white/10">
                <p className="text-2xl md:text-3xl font-black mb-2">100Cr+</p>
                <p className="text-xs text-white/80 font-medium">National Cancer Grid (NCG)</p>
              </div>
              <div className="border border-white/20 bg-white/5 rounded-xl p-6 text-center backdrop-blur-sm transition-all hover:bg-white/10">
                <p className="text-2xl md:text-3xl font-black mb-2">3.27M+</p>
                <p className="text-xs text-white/80 font-medium">Trees Planted</p>
              </div>
            </div>
            
            <div>
              <button className="bg-white text-[#7A1336] px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors shadow-lg">
                Know More
              </button>
            </div>
          </div>
          
          {/* Right Side: Clean Edge-to-Edge Image with Seamless Fade */}
          <div className="md:w-1/2 h-[300px] md:h-auto relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80')] bg-cover bg-center" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/60 to-transparent hidden md:block" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent md:hidden" />
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}
