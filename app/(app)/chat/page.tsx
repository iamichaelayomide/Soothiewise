import { PageShell } from "@/components/layout/page-shell";
import { ConversationModeCard } from "@/components/chat/conversation-mode-card";

const modes = [
  {
    title: "Vent & Reflect",
    description: "A space to unload and make sense of the weight.",
    slug: "vent",
  },
  {
    title: "Guided Check-in",
    description: "A gentle structure to name what you feel.",
    slug: "checkin",
  },
  {
    title: "Sleep Wind Down",
    description: "Soft prompts to quiet your night.",
    slug: "sleep",
  },
  {
    title: "Anxiety Reset",
    description: "Grounding steps to slow the spiral.",
    slug: "anxiety",
  },
  {
    title: "Burnout Recovery",
    description: "Small steps for heavy weeks.",
    slug: "burnout",
  },
  {
    title: "Grief Reflection",
    description: "Hold space for what you miss.",
    slug: "grief",
  },
  {
    title: "Heartbreak Support",
    description: "A steady place to process the break.",
    slug: "heartbreak",
  },
  {
    title: "Exam Stress",
    description: "Short resets for pressure days.",
    slug: "exam",
  },
  {
    title: "Work Decompression",
    description: "Release the day before you sleep.",
    slug: "work",
  },
];

export default function ChatIndexPage() {
  return (
    <PageShell>
      <div className="space-y-6">
        <div>
          <h1>WHAT WOULD HELP RIGHT NOW?</h1>
          <p className="text-lg text-ink/80">
            Choose a mode and start a conversation.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((mode) => (
            <ConversationModeCard
              key={mode.slug}
              title={mode.title}
              description={mode.description}
              href={`/chat/${mode.slug}`}
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
