"use client"

import * as React from "react"

type Theme = "dark" | "light" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: Theme
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

interface ThemeContextType {
  theme: Theme | undefined
  setTheme: (theme: Theme) => void
  systemTheme: "dark" | "light" | undefined
  themes: string[]
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = React.useState<"dark" | "light" | undefined>(undefined)

  React.useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThemeState(saved)
    }
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setSystemTheme(mediaQuery.matches ? "dark" : "light")
    
    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light")
    }
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
  }, [])

  React.useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    
    if (theme === "system") {
      if (systemTheme) root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme, systemTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, systemTheme, themes: ["light", "dark", "system"] }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}
