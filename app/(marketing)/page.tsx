import { DifferenceSection } from "@/components/marketing/difference-section";
import { EmployerCTA } from "@/components/marketing/employer-cta";
import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCTA } from "@/components/marketing/final-cta";
import { ForWhoSection } from "@/components/marketing/for-who-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PricingSection } from "@/components/marketing/pricing-section";
import { SafetySection } from "@/components/marketing/safety-section";
import { SocialProof } from "@/components/marketing/social-proof";
import { TherapistPreview } from "@/components/marketing/therapist-preview";
import { TrustBar } from "@/components/marketing/trust-bar";

export default function MarketingPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <ForWhoSection />
      <DifferenceSection />
      <SafetySection />
      <TherapistPreview />
      <PricingSection />
      <SocialProof />
      <EmployerCTA />
      <FaqSection />
      <FinalCTA />
    </main>
  );
}
