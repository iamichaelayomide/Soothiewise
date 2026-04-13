"use client";

import { cn } from "@/utils/cn";
import { useOnboardingStore } from "@/hooks/use-onboarding-store";

const options = [
  "Through writing — I like to put thoughts into words",
  "Through guided prompts — I like structure",
  "Through conversation — I want something to talk to",
  "Through exercises — breathing, grounding, movement",
  "I just want to track how I feel for now",
];

export function FormatSelector() {
  const { formatPreference, setFormatPreference } = useOnboardingStore();

  return (
    <div className="grid gap-4">
      {options.map((option) => {
        const isActive = formatPreference === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setFormatPreference(option)}
            className={cn(
              "card-surface rounded-xl2 px-5 py-4 text-left font-semibold",
              isActive ? "bg-ink text-white shadow-none" : ""
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
