import { Smartphone, CreditCard, ShieldCheck, Zap, Coins, FileText } from "lucide-react"

export function DigitalBanking() {
  const features = [
    { icon: Zap, title: "UPI Payments", desc: "Instant real-time transfers" },
    { icon: CreditCard, title: "Debit Cards", desc: "Contactless tap & pay" },
    { icon: Smartphone, title: "Mobile Banking", desc: "Your bank in your pocket" },
    { icon: ShieldCheck, title: "NEFT / RTGS", desc: "Secure large fund transfers" },
    { icon: FileText, title: "e-Statements", desc: "Digital passbook & tracking" },
    { icon: Coins, title: "Secure Coin Rewards", desc: "Earn loyalty on every swipe" },
  ]

  return (
    <section className="py-20 bg-background" id="digital">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Digital Banking at your fingertips</h2>
          <p className="text-muted-foreground">
            Experience seamless, paperless, and secure banking wherever you go. Manage your funds, pay bills, and track rewards instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-md transition-all hover:-translate-y-1">
              <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
