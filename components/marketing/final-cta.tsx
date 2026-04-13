import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="bg-yellow py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-[clamp(2.5rem,6vw,3.5rem)]">
          START WITH ONE HONEST CHECK-IN. IT&apos;S FREE.
        </h1>
        <div className="mt-6 flex justify-center">
          <Button variant="dark" size="lg" asChild>
            <Link href="/onboarding/step-welcome">Start now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
