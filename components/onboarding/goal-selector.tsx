"use client";

import { cn } from "@/utils/cn";
import { useOnboardingStore } from "@/hooks/use-onboarding-store";

const goals = [
  "Work stress & burnout",
  "Anxiety & overthinking",
  "Loneliness",
  "Relationship pain",
  "Family pressure",
  "Grief & loss",
  "Sleep problems",
  "Money anxiety",
  "Exam or school pressure",
  "Postpartum feelings",
  "I'm not sure yet",
  "Something else",
];

export function GoalSelector() {
  const { goals: selected, customGoal, toggleGoal, setCustomGoal } =
    useOnboardingStore();

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {goals.map((goal) => {
          const isActive = selected.includes(goal);
          return (
            <button
              key={goal}
              type="button"
              onClick={() => toggleGoal(goal)}
              className={cn(
                "card-surface flex items-center justify-between rounded-xl2 px-4 py-4 text-left text-sm font-semibold",
                isActive ? "bg-ink text-white shadow-none" : ""
              )}
            >
              {goal}
              <span className="text-xl">{isActive ? "?" : ""}</span>
            </button>
          );
        })}
      </div>
      {selected.includes("Something else") ? (
        <input
          value={customGoal}
          onChange={(event) => setCustomGoal(event.target.value)}
          placeholder="Tell us what else is true for you"
          className="brutalist-input w-full"
        />
      ) : null}
      <div className="text-xs text-ink/60">
        {selected.length < 1
          ? "Select at least one to continue."
          : "You can change these later."}
      </div>
    </div>
  );
}
