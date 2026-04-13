import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CrisisPage() {
  return (
    <main className="min-h-screen bg-danger text-white">
      <div className="mx-auto max-w-4xl space-y-8 px-6 py-12">
        <h1>YOU ARE NOT ALONE.</h1>
        <p className="text-lg text-white/80">
          We see you. Let&apos;s take one step at a time.
        </p>

        <Card className="bg-white text-ink">
          <h3 className="text-xl font-bold">RIGHT NOW</h3>
          <p className="mt-3 text-sm text-ink/70">
            Grounding: name 5 things you can see. Then 4 you can feel. 3 you
            can hear. 2 you can smell. 1 you can taste.
          </p>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-white text-ink">
            <div className="text-sm font-bold uppercase">SURPIN Nigeria</div>
            <div className="text-lg font-bold">0800-850-0020</div>
          </Card>
          <Card className="bg-white text-ink">
            <div className="text-sm font-bold uppercase">Lagos State</div>
            <div className="text-lg font-bold">01-8034-836</div>
          </Card>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="default" asChild>
            <Link href="/dashboard">Back to support</Link>
          </Button>
          <Button variant="dark" asChild>
            <Link href="/therapists">Book a therapist</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
