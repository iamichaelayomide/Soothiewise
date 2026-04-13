import { Card } from "@/components/ui/card";

const chips = [
  "🔒 Anonymous by default",
  "🇳🇬 Built for Nigeria",
  "✓ No judgment, no diagnosis",
  "💬 Real AI + real therapists",
];

export function TrustBar() {
  return (
    <section className="border-b-[3px] border-ink bg-yellow">
      <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-6 py-8">
        {chips.map((chip) => (
          <Card
            key={chip}
            className="flex min-w-[220px] items-center justify-center rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-[0.05em]"
          >
            {chip}
          </Card>
        ))}
      </div>
    </section>
  );
}
