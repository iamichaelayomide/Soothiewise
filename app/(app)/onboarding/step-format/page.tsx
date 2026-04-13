import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FormatSelector } from "@/components/onboarding/format-selector";
import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";

export default function StepFormatPage() {
  return (
    <div className="min-h-screen bg-yellow px-6 py-10">
      <OnboardingProgress total={6} current={3} />
      <div className="mt-10 space-y-6">
        <h1>HOW DO YOU PREFER TO PROCESS THINGS?</h1>
        <p className="text-lg text-ink/80">There's no wrong answer.</p>
        <FormatSelector />
        <div className="flex justify-end">
          <Button variant="dark" asChild>
            <Link href="/onboarding/step-tone">Continue</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
