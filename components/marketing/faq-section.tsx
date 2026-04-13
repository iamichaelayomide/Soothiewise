import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/layout/section-header";

const faqs = [
  {
    q: "Is this anonymous?",
    a: "Yes. You can start without sharing your name or email.",
  },
  {
    q: "Is Soothewise a therapist?",
    a: "No. It is support, reflection, and a bridge to real professionals.",
  },
  {
    q: "What happens in a crisis?",
    a: "You get immediate safety resources and a guided grounding flow.",
  },
  {
    q: "How much does it cost?",
    a: "Start free, upgrade to Premium when you want deeper support.",
  },
];

export function FaqSection() {
  return (
    <section className="border-b-[3px] border-ink bg-yellow py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="FAQ" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <Card key={item.q} className="space-y-2">
              <div className="text-sm font-bold uppercase tracking-[0.05em]">
                {item.q}
              </div>
              <p className="text-sm text-ink/70">{item.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
