import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/layout/section-header";

const steps = [
  {
    title: "01 — TELL US HOW YOU FEEL",
    description:
      "A gentle intake that feels like a conversation, not a test. You decide how much to share.",
  },
  {
    title: "02 — GET YOUR CARE PATH",
    description:
      "Smart emotional triage that maps you to the right support, from self-help to a real person.",
  },
  {
    title: "03 — SUPPORT THAT SCALES WITH YOU",
    description:
      "AI companion, grounded exercises, and therapists when you're ready. No pressure, just care.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-b-[3px] border-ink bg-yellow py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="THREE HONEST STEPS" />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="space-y-4">
              <div className="text-sm font-bold uppercase tracking-[0.05em]">
                {step.title}
              </div>
              <p className="text-base text-ink/80">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
