import * as React from "react";

import { cn } from "@/utils/cn";

interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({ value, className }: ProgressProps) {
  return (
    <div
      className={cn(
        "h-4 w-full overflow-hidden border-[3px] border-ink bg-white",
        className
      )}
    >
      <div
        className="h-full bg-yellow transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
