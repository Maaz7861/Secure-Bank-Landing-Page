"use client"

import { motion } from "framer-motion"

export function TrustStrip() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(16,185,129,0.12)] border border-[#1a1a1a]"
          style={{ backgroundColor: '#0A0A0A', color: 'white' }}
        >
          {/* Emerald glow top-left */}
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)' }} />
          {/* Gold glow top-right */}
          <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

          {/* Left Side */}
          <div className="md:w-1/2 p-10 md:p-16 relative z-10 flex flex-col justify-center" style={{ color: 'white' }}>
            <h2 className="text-3xl md:text-5xl font-extrabold italic mb-2 tracking-tight" style={{ color: 'white' }}>
              open <span className="font-medium not-italic">to the progress of all</span>
            </h2>
            <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.70)' }}>
              Committed to our responsibility towards the society.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
              {[
                { val: 'Registered', label: 'Co-operative Society' },
                { val: '100%', label: 'Regulated & Secured' },
                { val: '25.00%', label: 'Max FD Interest Rate' },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl p-4 sm:p-5 text-center transition-all hover:bg-white/10 flex flex-col justify-center items-center" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}>
                  <p className="text-base sm:text-lg lg:text-xl font-black mb-1.5 tracking-tight text-white" style={{ color: 'white' }}>{stat.val}</p>
                  <p className="text-[11px] sm:text-xs font-medium leading-tight" style={{ color: 'rgba(255,255,255,0.55)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div>
              <button className="bg-cyan-gradient text-black px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:-translate-y-0.5">
                Know More
              </button>
            </div>
          </div>
          
          {/* Right Side: Image */}
          <div className="md:w-1/2 h-[300px] md:h-auto relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80')] bg-cover bg-center" />
             <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 40%, transparent 100%)' }} />
             <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.6) 40%, transparent 100%)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
