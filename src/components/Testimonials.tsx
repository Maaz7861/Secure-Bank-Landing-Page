"use client"

import { Card, CardContent } from "@/components/ui/Card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Patel",
      role: "Farmer & Merchant",
      quote: "SIA's Vyapar Khata and OD facility helped me expand my business during the harvest season. Their doorstep service is unmatched."
    },
    {
      name: "Anjali Sharma",
      role: "Salaried Professional",
      quote: "I opened the Samriddhi FD online in 5 minutes. Getting 25% returns over 49 months is incredible compared to traditional options."
    },
    {
      name: "Suresh Gupta",
      role: "Senior Citizen",
      quote: "The Jeevan Nidhi pension gives me peace of mind. Every month the interest hits my account without fail."
    }
  ]

  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by our Members</h2>
          <p className="text-muted-foreground font-medium">
            Hear from the people who have grown their wealth and secured their future with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Card key={idx} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-all group">
              <CardContent className="p-8 relative">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10 group-hover:text-accent/20 transition-colors" />
                <p className="text-muted-foreground leading-relaxed italic mb-8 relative z-10">&ldquo;{review.quote}&rdquo;</p>
                
                <div className="flex items-center gap-4 border-t border-border/50 pt-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
