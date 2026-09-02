"use client"

import { motion } from "framer-motion"
import { ShieldCheck, History, Handshake, Landmark } from "lucide-react"

export function WhySIA() {
  const reasons = [
    {
      icon: History,
      title: "Decades of Trust",
      desc: "Operating securely with a flawless track record since our inception."
    },
    {
      icon: Landmark,
      title: "Highest Returns",
      desc: "Our co-operative structure allows us to pass maximum profits back to you."
    },
    {
      icon: ShieldCheck,
      title: "Fully Regulated",
      desc: "Audited and governed under strict state co-operative society frameworks."
    },
    {
      icon: Handshake,
      title: "Community First",
      desc: "Your funds are used to uplift local businesses, farmers, and members."
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <section className="py-20 bg-background" id="why-sia">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why choose SIA?</h2>
          <p className="text-muted-foreground font-medium">
            We are not just a financial institution; we are a community-owned society dedicated to your prosperity.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, idx) => (
            <motion.div variants={item} key={idx} className="bg-card border border-border p-8 rounded-2xl text-center hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
