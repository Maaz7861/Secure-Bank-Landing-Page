"use client"

import React, { createContext, useContext, useState } from "react"

export interface AccountPrefillData {
  planType?: "savings" | "current" | "fd" | "pension" | "rd"
  planName?: string
  depositAmount?: number
  tenureMonths?: number
  interestRate?: string
}

interface ModalContextType {
  isLoginOpen: boolean
  isAccountOpen: boolean
  accountPrefill: AccountPrefillData
  openLogin: () => void
  closeLogin: () => void
  openAccount: (data?: AccountPrefillData) => void
  closeAccount: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [accountPrefill, setAccountPrefill] = useState<AccountPrefillData>({})

  const openLogin = () => setIsLoginOpen(true)
  const closeLogin = () => setIsLoginOpen(false)

  const openAccount = (data?: AccountPrefillData) => {
    if (data) setAccountPrefill(data)
    else setAccountPrefill({})
    setIsAccountOpen(true)
  }
  const closeAccount = () => setIsAccountOpen(false)

  return (
    <ModalContext.Provider
      value={{
        isLoginOpen,
        isAccountOpen,
        accountPrefill,
        openLogin,
        closeLogin,
        openAccount,
        closeAccount,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
