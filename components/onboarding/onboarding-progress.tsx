import { cn } from "@/utils/cn";

interface OnboardingProgressProps {
  total: number;
  current: number;
}

export function OnboardingProgress({ total, current }: OnboardingProgressProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => {
        const step = index + 1;
        const isActive = step === current;
        const isComplete = step < current;
        return (
          <div
            key={step}
            className={cn(
              "flex h-3 w-3 items-center justify-center rounded-full border-[2px] border-ink",
              isActive ? "bg-ink" : "bg-white",
              isComplete ? "bg-ink" : ""
            )}
          >
            {isComplete ? <span className="text-[8px] text-white">✓</span> : null}
          </div>
        );
      })}
    </div>
  );
}
