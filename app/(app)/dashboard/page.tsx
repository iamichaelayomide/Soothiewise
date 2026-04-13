import { TopAppBar } from "@/components/layout/top-app-bar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-yellow pb-24">
      <TopAppBar
        title="GOOD MORNING, STILL RIVER"
        rightSlot={<div className="h-10 w-10 rounded-full border-[3px] border-ink bg-white" />}
      />
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10">
        <Card className="space-y-4">
          <div className="text-sm font-bold uppercase tracking-[0.05em]">
            HOW ARE YOU FEELING TODAY?
          </div>
          <div className="flex gap-3 text-2xl">
            {"😔 😟 😐 🙂 😊".split(" ").map((emoji) => (
              <div
                key={emoji}
                className="flex h-12 w-12 items-center justify-center rounded-lg border-[3px] border-ink"
              >
                {emoji}
              </div>
            ))}
          </div>
          <div className="text-sm text-ink/60">Tap to check in.</div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold uppercase tracking-[0.05em]">
              YOUR 5-DAY PLAN
            </div>
            <div className="text-sm font-semibold">Day 2 of 5</div>
          </div>
          <Progress value={40} />
          <div className="rounded-xl2 border-[3px] border-ink bg-white p-4">
            Today: Burnout recovery module — 10 min
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="text-sm font-bold uppercase tracking-[0.05em]">
            WHAT DO YOU NEED TODAY?
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[
              "Vent",
              "Check-In",
              "Sleep",
              "Anxiety",
              "Burnout",
              "More",
            ].map((chip) => (
              <div
                key={chip}
                className="rounded-lg border-[3px] border-ink bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.05em]"
              >
                {chip}
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="space-y-4">
            <div className="text-sm font-bold uppercase tracking-[0.05em]">
              7 DAY STREAK
            </div>
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-ink bg-yellow text-2xl font-bold">
              7
            </div>
            <div className="text-sm text-ink/70">Keep going, not a score.</div>
          </Card>
          <Card className="space-y-3">
            <div className="text-sm font-bold uppercase tracking-[0.05em]">
              WEEKLY SUMMARY
            </div>
            <p className="text-sm text-ink/70">
              Last week, you checked in 5 out of 7 days. Anxiety peaked on
              Wednesday. Sleep improved Thursday onwards.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-lg border-[3px] border-ink bg-white px-3 py-1 text-xs font-bold uppercase">
                Sleep up
              </div>
              <div className="rounded-lg border-[3px] border-ink bg-white px-3 py-1 text-xs font-bold uppercase">
                Energy low
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
