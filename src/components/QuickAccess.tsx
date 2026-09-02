import { Landmark, Smartphone, CreditCard, PiggyBank, ArrowRight, LineChart } from "lucide-react"

export function QuickAccess() {
  const quickLinks = [
    { icon: Landmark, label: "Savings A/c" },
    { icon: PiggyBank, label: "Fixed Deposit" },
    { icon: Smartphone, label: "Digital Banking" },
    { icon: CreditCard, label: "Pay Bills" },
    { icon: LineChart, label: "Investments" },
    { icon: ArrowRight, label: "More Services" },
  ]

  return (
    <section className="container mx-auto px-4 lg:px-8 -mt-6 relative z-20">
      <div className="bg-card border border-border rounded-2xl p-4 lg:p-6 shadow-sm">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider text-center mb-6">
          Apply Now / Quick Access
        </h3>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6">
          {quickLinks.map((link, idx) => (
            <button key={idx} className="flex flex-col items-center group">
              <div className="w-11 h-11 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-xl flex items-center justify-center text-primary mb-3">
                <link.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-foreground text-center">
                {link.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
