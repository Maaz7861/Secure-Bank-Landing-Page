"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShieldCheck, User, Lock, Phone, Eye, EyeOff, ArrowRight } from "lucide-react"
import { useModal } from "@/context/ModalContext"
import { useLanguage } from "@/context/LanguageContext"

export function LoginModal() {
  const { isLoginOpen, closeLogin } = useModal()
  const { t } = useLanguage()

  const [loginType, setLoginType] = useState<"member" | "advisor">("member")
  const [authMethod, setAuthMethod] = useState<"password" | "otp">("password")
  const [memberId, setMemberId] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isLoginOpen) return null

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!memberId) return
    setOtpSent(true)
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      closeLogin()
    }, 2000)
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLogin}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 p-6 md:p-8"
        >
          {/* Close button */}
          <button
            onClick={closeLogin}
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
                {t("Secure Login", "सुरक्षित लॉगिन")}
              </h3>
              <p className="text-xs text-muted-foreground font-medium">
                {t("Access your SIA Banking & Deposits Portal", "अपने SIA बैंकिंग एवं डिपाजिट पोर्टल में प्रवेश करें")}
              </p>
            </div>
          </div>

          {/* Login Type Tabs (Member vs Advisor) */}
          <div className="grid grid-cols-2 gap-1 bg-secondary/50 p-1 rounded-2xl mb-6 text-xs font-bold">
            <button
              type="button"
              onClick={() => {
                setLoginType("member")
                setOtpSent(false)
              }}
              className={`py-2 rounded-xl transition-all ${
                loginType === "member"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("Member Login", "सदस्य लॉगिन")}
            </button>
            <button
              type="button"
              onClick={() => {
                setLoginType("advisor")
                setOtpSent(false)
              }}
              className={`py-2 rounded-xl transition-all ${
                loginType === "advisor"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("SIA Mitra / Advisor", "एसआईए मित्र / एडवाइजर")}
            </button>
          </div>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center space-y-3"
            >
              <div className="h-14 w-14 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-2xl">
                ✓
              </div>
              <h4 className="text-lg font-bold text-foreground">
                {t("Login Successful!", "लॉगिन सफल रहा!")}
              </h4>
              <p className="text-xs text-muted-foreground">
                {t("Redirecting to your Dashboard...", "आपके डैशबोर्ड पर ले जाया जा रहा है...")}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Member ID / Mobile input */}
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                  {loginType === "member"
                    ? t("Member ID or Mobile Number", "सदस्य आईडी या मोबाइल नंबर")
                    : t("Advisor Code or Registered Mobile", "एडवाइजर कोड या पंजीकृत मोबाइल")}
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    placeholder={
                      loginType === "member" ? "e.g. 9876543210" : "e.g. ADV-10294"
                    }
                    className="w-full bg-background border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  />
                </div>
              </div>

              {/* Password vs OTP Switch */}
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-semibold text-muted-foreground">
                  {t("Authentication Method", "प्रमाणीकरण का तरीका")}
                </span>
                <div className="flex gap-2 font-bold">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMethod("password")
                      setOtpSent(false)
                    }}
                    className={`px-2 py-0.5 rounded ${
                      authMethod === "password"
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground"
                    }`}
                  >
                    Password
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthMethod("otp")}
                    className={`px-2 py-0.5 rounded ${
                      authMethod === "otp"
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground"
                    }`}
                  >
                    OTP
                  </button>
                </div>
              </div>

              {authMethod === "password" ? (
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                    {t("Password", "पासवर्ड")}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-background border border-border rounded-xl py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                    {t("One Time Password (OTP)", "वन टाइम पासवर्ड (ओटीपी)")}
                  </label>
                  {!otpSent ? (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="w-full py-2.5 bg-secondary text-foreground text-xs font-bold rounded-xl hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      {t("Send OTP to Registered Mobile", "पंजीकृत मोबाइल पर ओटीपी भेजें")}
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <input
                        type="text"
                        required
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter 6-digit OTP"
                        className="w-full bg-background border border-border rounded-xl py-2.5 text-center font-mono text-base tracking-widest focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      />
                      <p className="text-[11px] text-emerald-500 font-semibold text-center">
                        ✓ OTP Sent to +91 98*** ***10
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-cyan-gradient text-black font-black text-sm rounded-xl shadow-lg shadow-emerald-500/20 hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {t("Login to Portal", "पोर्टल में लॉगिन करें")}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href="#"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {t("Forgot Password or Member ID?", "पासवर्ड या सदस्य आईडी भूल गए?")}
                </a>
              </div>
            </form>
          )}

          {/* Legal / Society Footer Note */}
          <div className="mt-6 pt-4 border-t border-border/50 text-[10px] text-muted-foreground text-center">
            {t(
              "Secure United Urban Credit Co-operative Society Ltd. • Member Secured Portal",
              "सिक्योर यूनाइटेड अर्बन क्रेडिट को-ऑपरेटिव सोसाइटी लि. • सदस्य सुरक्षित पोर्टल"
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
