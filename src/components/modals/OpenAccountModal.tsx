"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShieldCheck, Check, ArrowRight, ArrowLeft, Download, FileText, User, Mail, Phone, MapPin } from "lucide-react"
import { useModal } from "@/context/ModalContext"
import { useLanguage } from "@/context/LanguageContext"

export function OpenAccountModal() {
  const { isAccountOpen, closeAccount, accountPrefill } = useModal()
  const { t } = useLanguage()

  const [step, setStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState("SIA Smart Savings (4.00% p.a.)")
  const [fullName, setFullName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [pincode, setPincode] = useState("")
  const [kycDoc, setKycDoc] = useState("Aadhaar + PAN")
  const [initialAmount, setInitialAmount] = useState("5000")
  const [refId, setRefId] = useState("")

  useEffect(() => {
    if (accountPrefill.planName) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedPlan(accountPrefill.planName)
    }
    if (accountPrefill.depositAmount) {
      setInitialAmount(accountPrefill.depositAmount.toString())
    }
  }, [accountPrefill])

  if (!isAccountOpen) return null

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else if (step === 3) {
      const generatedRef = "SIA-2026-" + Math.floor(100000 + Math.random() * 900000)
      setRefId(generatedRef)
      setStep(4)
    }
  }

  const handleResetAndClose = () => {
    setStep(1)
    closeAccount()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-2xl text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight text-foreground">
                {t("Open an Account / Apply Now", "खाता खोलें / अभी आवेदन करें")}
              </h3>
              <p className="text-xs text-muted-foreground font-medium">
                {t("SECURE UNITED Urban Credit Co-operative Society Ltd.", "सिक्योर यूनाइटेड अर्बन क्रेडिट को-ऑपरेटिव सोसाइटी लि.")}
              </p>
            </div>
          </div>

          {/* Step Progress Bar */}
          {step < 4 && (
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold text-muted-foreground mb-2">
                <span className={step >= 1 ? "text-primary" : ""}>{t("1. Select Plan", "1. योजना चुनें")}</span>
                <span className={step >= 2 ? "text-primary" : ""}>{t("2. Member KYC", "2. केवाईसी विवरण")}</span>
                <span className={step >= 3 ? "text-primary" : ""}>{t("3. Funding", "3. जमा राशि")}</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          <form onSubmit={handleNextStep} className="space-y-5">
            {/* STEP 1: Select Plan */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h4 className="text-sm font-bold text-foreground">
                  {t("Select Your Banking or Deposit Product:", "अपनी बैंकिंग या डिपाजिट योजना चुनें:")}
                </h4>
                <div className="space-y-2 text-xs">
                  {[
                    "SIA Basic Savings (2.50% p.a. • Min ₹ 500)",
                    "SIA Smart Savings (4.00% p.a. • Min ₹ 5,000)",
                    "SIA Elite Savings (7.00% p.a. • Min ₹ 25,000)",
                    "SIA Dhan Samriddhi Fixed Deposit (Up to 25.00% p.a.)",
                    "SIA Jeevan Nidhi Pension (1.00% Monthly Payout)",
                    "SIA Dhanpravah Daily & Monthly RD",
                    "SIA Vyapar Current Account (Business)",
                  ].map((plan) => (
                    <label
                      key={plan}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        selectedPlan === plan
                          ? "border-primary bg-primary/10 font-bold text-foreground"
                          : "border-border bg-background hover:bg-secondary/50 text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="planSelection"
                          checked={selectedPlan === plan}
                          onChange={() => setSelectedPlan(plan)}
                          className="accent-primary h-4 w-4"
                        />
                        <span>{plan}</span>
                      </div>
                      {selectedPlan === plan && <Check className="h-4 w-4 text-primary shrink-0" />}
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Personal & KYC Details */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h4 className="text-sm font-bold text-foreground">
                  {t("Enter Your Member Details:", "अपने सदस्य विवरण दर्ज करें:")}
                </h4>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1">
                    {t("Full Name (as per Aadhaar)", "पूरा नाम (आधार के अनुसार)")}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-background border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-1">
                      {t("Mobile Number", "मोबाइल नंबर")}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="tel"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="9876543210"
                        className="w-full bg-background border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-1">
                      {t("Pincode / Location", "पिनकोड / स्थान")}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="e.g. 400001"
                        className="w-full bg-background border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1">
                    {t("Email Address (Optional)", "ईमेल पता (वैकल्पिक)")}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ramesh@example.com"
                      className="w-full bg-background border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1">
                    {t("KYC Verification Document", "केवाईसी सत्यापन दस्तावेज")}
                  </label>
                  <select
                    value={kycDoc}
                    onChange={(e) => setKycDoc(e.target.value)}
                    className="w-full bg-background border border-border rounded-xl py-2.5 px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="Aadhaar + PAN">Aadhaar Card + PAN Card</option>
                    <option value="Voter ID">Voter ID Card</option>
                    <option value="Passport">Passport</option>
                    <option value="Driving License">Driving License</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Initial Deposit & Confirmation */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h4 className="text-sm font-bold text-foreground">
                  {t("Initial Deposit Amount:", "प्रारंभिक जमा राशि:")}
                </h4>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1">
                    {t("Deposit / Opening Amount (₹)", "जमा / खाता खोलने की राशि (₹)")}
                  </label>
                  <input
                    type="number"
                    required
                    value={initialAmount}
                    onChange={(e) => setInitialAmount(e.target.value)}
                    className="w-full bg-background border border-border rounded-xl py-3 px-4 text-lg font-bold text-emerald-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <p className="text-[11px] text-muted-foreground mt-1">
                    * {t("Minimum balance applies per society deposit scheme rules.", "* सोसाइटी जमा योजना नियमों के अनुसार न्यूनतम शेष राशि लागू होती है।")}
                  </p>
                </div>

                <div className="bg-secondary/40 border border-border p-4 rounded-2xl space-y-2 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-muted-foreground">Chosen Scheme:</span>
                    <span className="text-foreground font-bold">{selectedPlan}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-muted-foreground">Applicant:</span>
                    <span className="text-foreground font-bold">{fullName || "Member"}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-muted-foreground">Mobile:</span>
                    <span className="text-foreground font-bold">{mobile || "N/A"}</span>
                  </div>
                </div>

                <p className="text-[10px] text-muted-foreground text-center">
                  By clicking submit, you confirm membership intent with SECURE UNITED Urban Credit Co-operative Society Ltd.
                </p>
              </motion.div>
            )}

            {/* STEP 4: Success Receipt */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-6 text-center space-y-4">
                <div className="h-16 w-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-3xl">
                  ✓
                </div>
                <div>
                  <h4 className="text-xl font-black text-foreground">
                    {t("Application Submitted Successfully!", "आवेदन सफलतापूर्वक जमा हो गया!")}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t("Your membership request has been registered.", "आपका सदस्य अनुरोध दर्ज कर लिया गया है।")}
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/30 p-4 rounded-2xl space-y-2">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                    {t("Application Reference ID", "आवेदन संदर्भ आईडी")}
                  </span>
                  <div className="text-2xl font-black font-mono text-foreground tracking-wider">
                    {refId}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground px-4">
                  {t(
                    "Our SIA Branch Advisor will contact you within 24 hours for doorstep KYC verification.",
                    "हमारे SIA शाखा सलाहकार 24 घंटे के भीतर डोरस्टेप केवाईसी सत्यापन के लिए आपसे संपर्क करेंगे।"
                  )}
                </p>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="w-full py-3 bg-secondary text-foreground font-bold text-xs rounded-xl hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    {t("Done / Close", "हो गया / बंद करें")}
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Downloading Application Receipt PDF...")}
                    className="w-full py-3 bg-cyan-gradient text-black font-black text-xs rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    {t("Download Receipt", "रसीद डाउनलोड करें")}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Navigation Controls */}
            {step < 4 && (
              <div className="pt-3 flex justify-between gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2.5 bg-secondary text-foreground text-xs font-bold rounded-xl hover:bg-secondary/80 transition-colors flex items-center gap-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {t("Back", "पीछे")}
                  </button>
                )}
                <button
                  type="submit"
                  className="ml-auto px-6 py-2.5 bg-cyan-gradient text-black font-black text-xs rounded-xl hover:opacity-90 transition-all flex items-center gap-2"
                >
                  {step === 3 ? t("Submit Application", "आवेदन जमा करें") : t("Continue →", "आगे बढ़ें →")}
                  {step < 3 && <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
