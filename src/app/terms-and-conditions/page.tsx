"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText, Building2, Mail, Phone, AlertCircle, CheckCircle2 } from "lucide-react"

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Header Strip */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative h-9 w-auto sm:h-10 flex items-center justify-center p-1 bg-card rounded-xl border border-border">
              <Image 
                src="/logo.png" 
                alt="SIA Secure United Logo" 
                width={40} 
                height={40} 
                className="h-7 sm:h-8 w-auto object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-gold-gradient leading-none">SECURE UNITED</span>
              <span className="text-[8px] sm:text-[9px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">Urban Credit Co-op Society</span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 font-bold text-xs transition-all cursor-pointer border border-primary/20 shrink-0"
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 
            <span>Back<span className="hidden xs:inline sm:inline"> to Home</span><span className="hidden sm:inline"> / मुख्य पृष्ठ</span></span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-6 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6 sm:space-y-10">
          
          {/* Page Hero Banner */}
          <div className="bg-gradient-to-r from-[#0B4429] via-[#0F5A34] to-[#0B4429] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-gold-500/30">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-accent/20 border border-accent/40 text-accent px-2.5 py-1 sm:px-3 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider max-w-full">
                <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                <span className="truncate">Approved Member Bylaws</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Terms & Conditions
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 max-w-2xl font-medium leading-relaxed">
                Rules, regulations, and deposit scheme terms governing SECURE UNITED URBAN CREDIT CO-OPERATIVE SOCIETY LTD. (Reg. No: RSR/CR/2026/1061).
              </p>

              <div className="pt-1 sm:pt-2 text-[11px] sm:text-xs text-emerald-200/80 font-semibold leading-relaxed">
                Version 1.0 • Approved by Society Board & Co-operative Framework
              </div>
            </div>
          </div>

          {/* Detailed Terms Sections */}
          <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 shadow-sm">
            
            {/* Section 1 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">1</span>
                <span>Legal Entity & Membership Bylaws</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                SECURE UNITED URBAN CREDIT CO-OPERATIVE SOCIETY LTD. is an Urban Credit Co-operative Society registered under applicable co-operative society acts. All financial services, deposit products (SIA Samriddhi Khata, SIA Vyapar Khata, SIA Dhan Samriddhi, SIA Dhanpravah), and loan facilities are offered exclusively to registered members (&quot;Member&quot;) of the society.
              </p>
              <div className="ml-0 sm:ml-11 text-xs text-muted-foreground bg-muted/40 p-3 rounded-xl border border-border/60 leading-relaxed">
                <strong>Important Notice:</strong> This society is a member-owned credit co-operative society and not a commercial banking institution. Customers are admitted as shareholder members with equal voting and participation rights in accordance with society bylaws.
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">2</span>
                <span>Savings Account (SIA Samriddhi Khata) Terms</span>
              </h2>
              <ul className="space-y-2.5 sm:space-y-2 pl-0 sm:pl-11 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Secure Basic Tier:</strong> Minimum balance ₹ 500; Interest rate 2.00% p.a.; Non-maintenance charge ₹ 100/month; Account closing charge ₹ 100 if closed within 1 year.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Secure Smart Tier:</strong> Minimum balance ₹ 5,000; Interest rate 5.50% p.a.; Non-maintenance charge ₹ 250/month; Sweep to FD facility on request (above ₹ 25,000).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Secure Elite Tier:</strong> Minimum balance ₹ 25,000; Interest rate 10.00% p.a.; Non-maintenance charge ₹ 500/month; Automatic sweep to FD for balances above ₹ 50,000; Closing charge Nil.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">3</span>
                <span>Fixed Deposit (SIA Dhan Samriddhi) Terms & Rates</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11 mb-2">
                Fixed deposit schemes are offered across three investment slabs with tenures of 13, 25, 37, and 49 months. Total ROI includes base interest rates plus discipline/incentive bonuses:
              </p>
              <div className="pl-0 sm:pl-11 space-y-2 text-xs text-muted-foreground">
                <div className="p-3 bg-muted/30 rounded-xl border border-border/50 leading-relaxed">
                  <strong>Slab 1 (₹ 10K to ₹ 1.99L):</strong> 13 Months (13.00% p.a.), 25 Months (14.00% p.a.), 37 Months (15.00% p.a.), 49 Months (16.00% p.a.).
                </div>
                <div className="p-3 bg-muted/30 rounded-xl border border-border/50 leading-relaxed">
                  <strong>Slab 2 (₹ 2L to ₹ 14.99L):</strong> 13 Months (14.50% p.a.), 25 Months (16.50% p.a.), 37 Months (18.50% p.a.), 49 Months (20.50% p.a.).
                </div>
                <div className="p-3 bg-muted/30 rounded-xl border border-border/50 leading-relaxed">
                  <strong>Slab 3 (₹ 15L to ₹ 1 Cr):</strong> 13 Months (17.50% p.a.), 25 Months (20.00% p.a.), 37 Months (22.00% p.a.), 49 Months (25.00% p.a.).
                </div>
              </div>
              <p className="text-xs text-muted-foreground pl-0 sm:pl-11 pt-1 leading-relaxed">
                <strong>Quarterly Payout Facility:</strong> Members may opt to withdraw earned interest every 3 months while principal remains invested until maturity.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">4</span>
                <span>Premature Withdrawal & GST Penalty Bylaws</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                Premature withdrawal of fixed or recurring deposits is permitted after the mandatory mini-lock period (e.g., 7 months for 13-month tenures, 13 months for 25-month tenures, 25 months for 37-month tenures, and 37 months for 49-month tenures).
              </p>
              <div className="ml-0 sm:ml-11 p-3.5 sm:p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl sm:rounded-2xl text-xs text-foreground space-y-1">
                <div className="font-bold flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <AlertCircle className="h-4 w-4 shrink-0" /> Penalty & Statutory Tax Rules:
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Premature withdrawal penalty rates (5% to 15%) will be deducted from earned interest as per scheme terms. As per tax regulations, all premature withdrawal penalties attract a mandatory 18% GST on the penalty amount.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">5</span>
                <span>Credit Facilities & Overdraft (OD) against Deposit</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                Members holding active Fixed Deposits (SIA Dhan Samriddhi) are eligible for instant Overdraft (OD) facilities up to 90% of deposit value without closing their FD. Secured gold loans, property mortgage loans, and business credit lines up to ₹ 25 Lakhs are offered subject to valuation and co-operative loan committee approval.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">6</span>
                <span>Rate Revisions & Society Governance</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                Interest rates, payout schedules, and incentive terms are approved by the Board of Directors of SECURE UNITED URBAN CREDIT CO-OPERATIVE SOCIETY LTD. Rates are subject to revision as per society liquidity guidelines. Existing fixed deposits booked prior to rate changes remain locked at their agreed contract rate.
              </p>
            </section>

            {/* Section 7 Contact */}
            <section className="bg-primary/5 border border-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                <span>Head Office & Legal Inquiries</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For questions regarding terms, BYLAWS, or deposit certificates, please contact our head office:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-semibold">
                <div className="flex items-center gap-2 text-foreground min-w-0">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span className="truncate">Email: <a href="mailto:siasecureunited@gmail.com" className="text-primary hover:underline break-all">siasecureunited@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2 text-foreground min-w-0">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span className="truncate">Helpline: <a href="tel:+919405426350" className="text-primary hover:underline">+91 94054 26350</a></span>
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-muted-foreground leading-normal">
                Address: Main Head Office, Gandhi Ward, Near Honda Showroom, Desaiganj Wadsa - 441207
              </div>
            </section>

          </div>

          {/* Bottom Navigation Link */}
          <div className="text-center pt-2 sm:pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-3.5 rounded-xl sm:rounded-2xl bg-cyan-gradient text-black font-extrabold text-xs sm:text-sm shadow-lg hover:opacity-90 transition-all cursor-pointer max-w-full"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" />
              <span className="text-center">Back to Home Page<span className="hidden sm:inline"> / मुख्य पृष्ठ पर वापस जाएं</span></span>
            </Link>
          </div>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-secondary/50 border-t py-4 sm:py-6 text-center text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
        <div className="container mx-auto px-4">
          © 2026 SECURE UNITED Urban Credit Co-operative Society Ltd. All rights reserved. (Reg No: RSR/CR/2026/1061)
        </div>
      </footer>
    </div>
  )
}

