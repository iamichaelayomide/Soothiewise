import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TriageResultCard } from "@/components/onboarding/triage-result-card";
import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";

export default function StepResultPage() {
  return (
    <div className="min-h-screen bg-yellow px-6 py-10">
      <OnboardingProgress total={6} current={6} />
      <div className="mt-10 space-y-6">
        <h1>WE&apos;RE READING WHAT YOU SHARED...</h1>
        <TriageResultCard
          level="AMBER"
          message="You're carrying a meaningful load right now — work pressure and worry seem to be taking up a lot of space. You're in the right place."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>Day 1: Guided check-in + breathing exercise</Card>
          <Card>Day 2: Journaling prompt + Burnout recovery module</Card>
          <Card>Day 3: Vent & Reflect + mood check-in</Card>
        </div>
        <Button variant="dark" asChild>
          <Link href="/dashboard">Start my care plan</Link>
        </Button>
      </div>
    </div>
  );
}
