import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <PageShell>
      <div className="space-y-6">
        <h1>ABOUT SOOTHEWISE</h1>
        <p className="text-lg text-ink/80">
          Soothewise is a private, culturally grounded mental wellness platform
          built for Nigeria and Africa. We combine smart emotional triage with
          real human care to meet people where they are.
        </p>
        <Button variant="dark" asChild>
          <Link href="/onboarding/step-welcome">Start your first check-in</Link>
        </Button>
      </div>
    </PageShell>
  );
}
