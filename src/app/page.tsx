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
import { TrustStrip } from "@/components/TrustStrip";
import { Pension } from "@/components/Pension";
import { RecurringDeposit } from "@/components/RecurringDeposit";
import { WhySIA } from "@/components/WhySIA";
import { SiaMitra } from "@/components/SiaMitra";
import { BranchLocator } from "@/components/BranchLocator";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingCTABar } from "@/components/FloatingCTABar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <TrustStrip />
        <QuickAccess />
        
        <SavingsAccount />
        <CurrentAccount />
        <FixedDeposit />
        <Pension />
        <RecurringDeposit />
        <Calculator />
        <WhySIA />
        <DigitalBanking />
        <Onboarding />
        <div className="pt-10 pb-20 overflow-x-hidden">
          <SiaMitra />
        </div>
        <Testimonials />
        <BranchLocator />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTABar />
    </>
  );
}
