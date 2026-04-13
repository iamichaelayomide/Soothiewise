import Link from "next/link";

import { Button } from "@/components/ui/button";
import { GoalSelector } from "@/components/onboarding/goal-selector";
import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";

export default function StepGoalsPage() {
  return (
    <div className="min-h-screen bg-yellow px-6 py-10">
      <OnboardingProgress total={6} current={2} />
      <div className="mt-10 space-y-6">
        <h1>WHAT BROUGHT YOU HERE TODAY?</h1>
        <p className="text-lg text-ink/80">
          Choose everything that feels true. You can change this later.
        </p>
        <GoalSelector />
        <div className="flex justify-end">
          <Button variant="dark" asChild>
            <Link href="/onboarding/step-format">Continue</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
