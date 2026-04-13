import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <PageShell>
      <div className="space-y-6">
        <h1>WELCOME BACK</h1>
        <p className="text-lg text-ink/80">
          Sign in to continue your care plan.
        </p>
        <div className="space-y-4">
          <input
            className="brutalist-input w-full"
            placeholder="Email address"
          />
          <Button variant="dark">Send magic link</Button>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/onboarding/step-welcome">Start anonymously instead</Link>
        </Button>
      </div>
    </PageShell>
  );
}
