import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/layout/section-header";

const plans = [
  {
    name: "Free",
    price: "₦0",
    features: [
      "Daily mood check-ins",
      "3 AI conversations/month",
      "5 journal entries/month",
      "Read-only circles",
    ],
  },
  {
    name: "Premium",
    price: "₦3,500/month",
    featured: true,
    features: [
      "Unlimited AI conversations",
      "Full journal + AI reflection",
      "Full library access",
      "Weekly insights",
      "Priority therapist matching",
    ],
  },
  {
    name: "Teams",
    price: "₦12,000/user/year",
    features: [
      "All Premium features",
      "Employer dashboard (aggregate only)",
      "Custom access codes",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="border-b-[3px] border-ink bg-yellow py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="PRICING" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.featured ? "bg-ink text-yellow" : ""}
            >
              <div className="text-lg font-bold uppercase tracking-[0.05em]">
                {plan.name}
              </div>
              <div className="mt-3 text-2xl font-black">{plan.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
