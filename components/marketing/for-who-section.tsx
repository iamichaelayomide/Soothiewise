import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/layout/section-header";

const personas = [
  {
    title: "Students",
    description: "When school feels heavy and your mind won't slow down.",
  },
  {
    title: "Working Professionals",
    description: "Burnout, pressure, and the quiet cost of showing up.",
  },
  {
    title: "Mothers",
    description: "Postpartum shifts, exhaustion, and the parts no one sees.",
  },
  {
    title: "Men who avoid therapy",
    description: "Straight talk, no fluff, and space to breathe again.",
  },
  {
    title: "Faith-sensitive users",
    description: "Respectful support that honors belief without preaching.",
  },
  {
    title: "Grief carriers",
    description: "Loss, change, and the long ache of missing someone.",
  },
];

export function ForWhoSection() {
  return (
    <section className="border-b-[3px] border-ink bg-yellow py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="WHOEVER YOU ARE, YOU BELONG HERE" />
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {personas.map((persona) => (
            <Card key={persona.title} className="min-w-[240px] space-y-3">
              <div className="text-lg font-bold">{persona.title}</div>
              <p className="text-sm text-ink/70">{persona.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
