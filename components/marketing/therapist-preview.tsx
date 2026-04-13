import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/layout/section-header";

const therapists = [
  {
    name: "Dr. Amaka Osei",
    specialty: "Burnout, Anxiety",
    language: "English + Yoruba",
    rate: "₦8,500/session",
  },
  {
    name: "Emeka Nwosu",
    specialty: "Grief, Trauma",
    language: "English + Igbo",
    rate: "₦6,000/session",
  },
  {
    name: "Fatima Al-Hassan",
    specialty: "Family, Faith-sensitive",
    language: "English + Hausa",
    rate: "₦5,500/session",
  },
];

export function TherapistPreview() {
  return (
    <section className="border-b-[3px] border-ink bg-yellow py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="REAL THERAPISTS WHEN YOU'RE READY" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {therapists.map((therapist) => (
            <Card key={therapist.name} className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-ink bg-white text-xl">
                {therapist.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <div className="text-lg font-bold">{therapist.name}</div>
                <p className="text-sm text-ink/70">{therapist.specialty}</p>
              </div>
              <div className="text-sm font-semibold">{therapist.language}</div>
              <div className="text-sm text-ink/70">{therapist.rate}</div>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="default" asChild>
            <Link href="/therapists">Browse all therapists →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
