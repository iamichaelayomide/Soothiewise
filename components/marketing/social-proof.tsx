import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/layout/section-header";

const testimonials = [
  {
    quote: "It finally feels like something built for people like me.",
    tag: "Lagos, 24",
  },
  {
    quote: "The care plan made everything feel less chaotic.",
    tag: "Abuja, 31",
  },
  {
    quote: "Quiet, respectful, and actually helpful.",
    tag: "Port Harcourt, 28",
  },
];

export function SocialProof() {
  return (
    <section className="border-b-[3px] border-ink bg-yellow py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="WHAT PEOPLE SAY" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.tag} className="space-y-4">
              <div className="text-3xl">“</div>
              <p className="text-base text-ink/80">{item.quote}</p>
              <div className="text-sm font-bold uppercase tracking-[0.05em]">
                {item.tag}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
