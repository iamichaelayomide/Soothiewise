import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ToneSelector } from "@/components/onboarding/tone-selector";
import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";

export default function StepTonePage() {
  return (
    <div className="min-h-screen bg-yellow px-6 py-10">
      <OnboardingProgress total={6} current={4} />
      <div className="mt-10 space-y-6">
        <h1>HOW WOULD YOU LIKE TO BE SPOKEN TO?</h1>
        <ToneSelector />
        <div className="flex justify-end">
          <Button variant="dark" asChild>
            <Link href="/onboarding/step-intake">Continue</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
