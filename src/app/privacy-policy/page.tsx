"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Lock, Building2, Mail, Phone, CheckCircle2 } from "lucide-react"

export default function PrivacyPolicyPage() {
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
                <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                <span className="truncate">Official Governance Document</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Privacy Policy
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 max-w-2xl font-medium leading-relaxed">
                SECURE UNITED URBAN CREDIT CO-OPERATIVE SOCIETY LTD. (Reg. No: RSR/CR/2026/1061) is committed to protecting member privacy and safeguarding your personal and financial information.
              </p>

              <div className="pt-1 sm:pt-2 text-[11px] sm:text-xs text-emerald-200/80 font-semibold leading-relaxed">
                Last Updated: September 2026 • Governed by Co-operative Society Bylaws
              </div>
            </div>
          </div>

          {/* Detailed Policy Sections */}
          <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 shadow-sm">
            
            {/* Section 1 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">1</span>
                <span>Introduction & Society Commitment</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                SECURE UNITED URBAN CREDIT CO-OPERATIVE SOCIETY LTD. (&quot;Society&quot;, &quot;SIA&quot;, &quot;We&quot;) operates as a registered member-owned urban credit co-operative society. We respect the confidentiality of our members (&quot;Member&quot;, &quot;You&quot;) and ensure that all personal, financial, and KYC information entrusted to us is processed with the highest standards of data security and transparency.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">2</span>
                <span>Information We Collect</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11 mb-2 sm:mb-3">
                To process society memberships, open deposit accounts (SIA Samriddhi Khata, SIA Vyapar Khata), book fixed/recurring deposits, or issue secured loans, we collect the following essential member details:
              </p>
              <ul className="space-y-2.5 sm:space-y-2 pl-0 sm:pl-11 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Member Profile Data:</strong> Full Name, Date of Birth, Father&apos;s/Spouse&apos;s Name, Permanent & Communication Address.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>KYC Identification Documents:</strong> Aadhaar Card, PAN Card, Voter ID, Passport, or authorised photo proof.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Financial & Deposit Scheme Choices:</strong> Nominee details, scheme selection (Dhan Samriddhi FD, Dhanpravah RD, Jeevan Nidhi Pension Plan), maturity instructions, and account balance records.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Communication Details:</strong> Mobile phone number, email address (<code className="text-primary font-mono text-[11px] sm:text-xs break-all">siasecureunited@gmail.com</code> inquiry records), and branch visit logs.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">3</span>
                <span>Purpose of Information Processing</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                All collected information is strictly used for legitimate society management purposes, including:
              </p>
              <ul className="space-y-2 pl-0 sm:pl-11 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">• Verifying member identity and fulfilling mandatory co-operative KYC guidelines.</li>
                <li className="flex items-start gap-2">• Opening and operating member savings, current, fixed deposit, and pension accounts.</li>
                <li className="flex items-start gap-2">• Processing interest payouts, dividend disbursements, and quarterly statement alerts.</li>
                <li className="flex items-start gap-2">• Evaluating loan applications and managing overdraft facilities against fixed deposits.</li>
                <li className="flex items-start gap-2">• Complying with regulatory reporting required under applicable state/urban co-operative society acts.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">4</span>
                <span>Data Protection & 256-Bit Security Standards</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                We implement physical, technical, and administrative safeguards to protect your data against unauthorized access, loss, or alteration. Online portal interactions and mobile applications utilize enterprise 256-bit SSL encryption. Physical KYC records are stored in secured society vaults at our registered branch locations under authorized supervision.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">5</span>
                <span>Information Non-Disclosure Policy</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                <strong>We never sell, rent, or lease member data to third-party telemarketers or advertisers.</strong> Information is shared only with authorized society personnel and regulatory authorities when required under statutory co-operative society laws or court directions.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-black shrink-0">6</span>
                <span>Member Rights & Access</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                As a member of SECURE UNITED URBAN CREDIT CO-OPERATIVE SOCIETY LTD., you have the right to inspect your account passbook, request corrections to your registered contact information, or update nomination details at any time by visiting our head office or registered branch locations.
              </p>
            </section>

            {/* Section 7 Contact */}
            <section className="bg-primary/5 border border-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                <span>Contact & Privacy Grievances</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If you have any questions, feedback, or privacy-related concerns regarding your member account, please write to our Nodal Grievance Officer:
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

