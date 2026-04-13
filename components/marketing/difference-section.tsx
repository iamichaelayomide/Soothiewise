import { SectionHeader } from "@/components/layout/section-header";

const rows = [
  { left: "Cold clinical intake", right: "Warm emotional conversation" },
  { left: "Generic chatbot", right: "Culturally aware AI companion" },
  { left: "Expensive therapy gatekeeping", right: "Smart triage to the right care" },
];

export function DifferenceSection() {
  return (
    <section className="border-b-[3px] border-ink bg-ink py-16 text-yellow">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="NOT ANOTHER THERAPY APP."
          className="text-yellow"
        />
        <div className="mt-8 space-y-4">
          {rows.map((row) => (
            <div
              key={row.left}
              className="grid gap-4 rounded-xl2 border-[3px] border-yellow bg-ink/90 p-6 md:grid-cols-2"
            >
              <div className="text-sm uppercase tracking-[0.05em] text-yellow/80">
                Other apps
              </div>
              <div className="text-sm uppercase tracking-[0.05em] text-yellow/80">
                Soothewise
              </div>
              <div className="text-lg font-bold">{row.left}</div>
              <div className="text-lg font-bold">{row.right}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
