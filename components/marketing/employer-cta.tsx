import Link from "next/link";

import { Button } from "@/components/ui/button";

export function EmployerCTA() {
  return (
    <section className="border-b-[3px] border-ink bg-ink py-16 text-yellow">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2>FOR COMPANIES: TEAM WELLNESS THAT RESPECTS PRIVACY</h2>
        <p className="mt-4 text-lg text-yellow/80">
          Aggregate-only insights, zero surveillance, and real care for your
          people.
        </p>
        <div className="mt-6 flex justify-center">
          <Button variant="default" asChild>
            <Link href="/pricing">Get a team plan</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
