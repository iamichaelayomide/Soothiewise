import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="border-b-[3px] border-ink bg-yellow">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black uppercase">Soothewise</div>
            <div className="flex gap-3">
              <Button variant="default" size="sm" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button variant="dark" size="sm" asChild>
                <Link href="/onboarding/step-welcome">Get started</Link>
              </Button>
            </div>
          </div>
          <h1 className="text-[clamp(2.75rem,7vw,4.5rem)] leading-[0.95]">
            PRIVATE SUPPORT
            <br />
            FOR HEAVY DAYS
          </h1>
          <p className="text-lg text-ink/80">
            Smart emotional support built for the way Nigerians actually feel.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="lg" asChild>
              <Link href="/onboarding/step-welcome">Start for free — it&apos;s anonymous</Link>
            </Button>
            <Link
              href="#how"
              className="text-sm font-bold uppercase tracking-[0.05em] underline"
            >
              See how it works
            </Link>
          </div>
        </div>
        <Card className="flex h-full min-h-[320px] flex-col justify-between">
          <div>
            <div className="label text-ink/70">Today&apos;s Check-in</div>
            <h3 className="mt-2 text-2xl font-bold">How are you really?</h3>
            <p className="mt-3 text-sm text-ink/70">
              A calm, private place to name what&apos;s heavy and get a path forward.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-5 gap-2 text-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-[3px] border-ink">😔</div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-[3px] border-ink">😟</div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-[3px] border-ink">😐</div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-[3px] border-ink">🙂</div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-[3px] border-ink">😊</div>
          </div>
        </Card>
      </div>
    </section>
  );
}
