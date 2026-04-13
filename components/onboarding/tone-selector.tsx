"use client";

import { cn } from "@/utils/cn";
import { useOnboardingStore } from "@/hooks/use-onboarding-store";

const tones = [
  {
    label: "Gentle",
    description: "Soft, patient, and encouraging",
  },
  {
    label: "Practical",
    description: "Clear suggestions, less feelings talk",
  },
  {
    label: "Direct",
    description: "Tell me what to do, skip the softening",
  },
  {
    label: "Faith-sensitive",
    description: "Reflective, spiritually grounded, non-preachy",
  },
];

export function ToneSelector() {
  const { tonePreference, setTonePreference } = useOnboardingStore();

  return (
    <div className="grid gap-4">
      {tones.map((tone) => {
        const isActive = tonePreference === tone.label;
        return (
          <button
            key={tone.label}
            type="button"
            onClick={() => setTonePreference(tone.label)}
            className={cn(
              "card-surface flex items-start justify-between rounded-xl2 px-5 py-4 text-left",
              isActive ? "bg-ink text-white shadow-none" : ""
            )}
          >
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.05em]">
                {tone.label}
              </div>
              <p className="mt-2 text-sm text-current/70">{tone.description}</p>
            </div>
            <span className="text-xl">{isActive ? "?" : ""}</span>
          </button>
        );
      })}
    </div>
  );
}
