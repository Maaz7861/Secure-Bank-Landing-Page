import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { QuickAccess } from "@/components/QuickAccess";
import { SavingsAccount } from "@/components/SavingsAccount";
import { CurrentAccount } from "@/components/CurrentAccount";
import { FixedDeposit } from "@/components/FixedDeposit";
import { Calculator } from "@/components/Calculator";
import { DigitalBanking } from "@/components/DigitalBanking";
import { Onboarding } from "@/components/Onboarding";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickAccess />
        
        <SavingsAccount />
        <CurrentAccount />
        <FixedDeposit />
        <Calculator />
        <DigitalBanking />
        <Onboarding />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
