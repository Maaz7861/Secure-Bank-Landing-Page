import { CheckCircle2, FileText, Fingerprint, Wallet, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

export function Onboarding() {
  const steps = [
    { num: "01", icon: FileText, title: "Choose your plan", desc: "Select from our Savings, Current, or Deposit products tailored for you." },
    { num: "02", icon: Fingerprint, title: "Submit KYC", desc: "Provide basic documents like Aadhaar, PAN, and address proof online." },
    { num: "03", icon: Wallet, title: "Fund account", desc: "Transfer from any existing bank account or deposit cash at our branch." },
    { num: "04", icon: Rocket, title: "Start earning", desc: "Instantly activate your digital banking, debit card, and start earning interest." },
  ]

  return (
    <section className="py-20 bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">How to open an account</h2>
            <p className="text-muted-foreground">
              Joining our co-operative society is simple, fully digital, and takes less than 10 minutes. 
            </p>
            
            <Card className="bg-primary/5 border-primary/20 shadow-sm mt-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4">Documents Required</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Aadhaar Card
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> PAN Card
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Recent Photograph
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Address Proof (if different)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
               {steps.map((step, idx) => (
                 <div key={idx} className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/5 p-8 rounded-2xl relative z-10 hover:shadow-[0_20px_40px_rgba(0,180,216,0.15)] hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 text-7xl font-black text-slate-50 dark:text-white/5 group-hover:text-primary/5 transition-colors pointer-events-none">{step.num}</div>
                   <div className="bg-primary/10 text-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <step.icon className="h-6 w-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-primary transition-colors">{step.title}</h3>
                   <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">{step.desc}</p>
                 </div>
               ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
