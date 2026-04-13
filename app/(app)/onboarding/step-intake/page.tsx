import Link from "next/link";

import { Button } from "@/components/ui/button";
import { IntakeScreener } from "@/components/onboarding/intake-screener";
import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";

export default function StepIntakePage() {
  return (
    <div className="min-h-screen bg-yellow px-6 py-10">
      <OnboardingProgress total={6} current={5} />
      <div className="mt-10 space-y-6">
        <h1>A FEW QUICK QUESTIONS TO PERSONALIZE YOUR SUPPORT.</h1>
        <p className="text-lg text-ink/80">
          This is not a diagnosis. It helps us understand where you are right now.
        </p>
        <IntakeScreener />
        <div className="flex justify-end">
          <Button variant="dark" asChild>
            <Link href="/onboarding/step-result">See my results</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
