import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

export function Onboarding() {
  const steps = [
    { num: "01", title: "Choose your plan", desc: "Select from our Savings, Current, or Deposit products tailored for you." },
    { num: "02", title: "Submit KYC", desc: "Provide basic documents like Aadhaar, PAN, and address proof online." },
    { num: "03", title: "Fund account", desc: "Transfer from any existing bank account or deposit cash at our branch." },
    { num: "04", title: "Start earning", desc: "Instantly activate your digital banking, debit card, and start earning interest." },
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
               {/* Connecting lines for desktop visual flow */}
               <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-border/50 -translate-y-1/2 z-0" />
               <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 w-px bg-border/50 -translate-x-1/2 z-0" />
               
               {steps.map((step, idx) => (
                 <div key={idx} className="bg-card border border-border p-6 rounded-xl relative z-10 hover:shadow-md transition-shadow">
                   <div className="text-4xl font-black text-secondary-foreground/20 mb-4">{step.num}</div>
                   <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                   <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                 </div>
               ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
