import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/layout/section-header";

const items = [
  {
    title: "Anonymous mode",
    body: "Show up without sharing your real name. You control what is saved.",
  },
  {
    title: "No employer access",
    body: "Teams only see aggregate insights. Individual data is never exposed.",
  },
  {
    title: "Crisis-safe architecture",
    body: "High-risk moments trigger immediate safety support and real resources.",
  },
];

export function SafetySection() {
  return (
    <section className="border-b-[3px] border-ink bg-yellow py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="YOUR PRIVACY IS STRUCTURAL, NOT JUST A PROMISE"
          subtitle="Every flow is designed to protect you by default."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="space-y-3">
              <div className="text-lg font-bold">{item.title}</div>
              <p className="text-sm text-ink/70">{item.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
