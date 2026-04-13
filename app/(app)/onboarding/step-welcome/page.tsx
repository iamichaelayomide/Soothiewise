"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";
import { useOnboardingStore } from "@/hooks/use-onboarding-store";

const anonymousNames = [
  "Quiet Leaf",
  "Calm River",
  "Still River",
  "Soft Rain",
  "Morning Light",
];

export default function StepWelcomePage() {
  const { name, setName, setAnonymous } = useOnboardingStore();
  const randomName = anonymousNames[Math.floor(Math.random() * anonymousNames.length)];

  return (
    <div className="min-h-screen bg-yellow px-6 py-10">
      <OnboardingProgress total={6} current={1} />
      <div className="mt-10 space-y-6">
        <h1>HEY. WELCOME TO SOOTHEWISE.</h1>
        <p className="text-lg text-ink/80">
          This is a safe space. You can be as honest as you want. Nothing here
          gets shared without your permission.
        </p>
        <div className="space-y-4">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            className="brutalist-input w-full"
          />
          <div className="flex flex-wrap gap-3">
            <Button variant="dark" asChild>
              <Link href="/onboarding/step-goals" onClick={() => setAnonymous(false)}>
                Continue with my name
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/onboarding/step-goals" onClick={() => setAnonymous(true)}>
                Stay anonymous ({randomName})
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
