import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "SIA - Secure United Urban Credit Co-operative Society Ltd.",
  description: "Secure United Urban Credit Co-operative Society Ltd. - Member Services & Deposit Schemes.",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased w-full max-w-full overflow-x-hidden`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full w-full max-w-full overflow-x-hidden flex flex-col bg-background text-foreground text-base">
        <LanguageProvider>
          <ModalProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
              disableTransitionOnChange
            >
              <div className="relative w-full max-w-full overflow-x-hidden flex flex-col flex-1">
                {children}
              </div>
              <LoginModal />
              <OpenAccountModal />
            </ThemeProvider>
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

