import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { ModalProvider } from "@/context/ModalContext";
import { LoginModal } from "@/components/modals/LoginModal";
import { OpenAccountModal } from "@/components/modals/OpenAccountModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIA - Secure United Urban Credit Co-operative Society Ltd.",
  description: "Secure United Urban Credit Co-operative Society Ltd. - Banking & Deposit Schemes.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground text-base">
        <LanguageProvider>
          <ModalProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
              disableTransitionOnChange
            >
              {children}
              <LoginModal />
              <OpenAccountModal />
            </ThemeProvider>
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
