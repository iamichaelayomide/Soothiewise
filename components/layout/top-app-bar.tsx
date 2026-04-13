import * as React from "react";

import { cn } from "@/utils/cn";

interface TopAppBarProps {
  title: string;
  subtitle?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
}

export function TopAppBar({
  title,
  subtitle,
  leftSlot,
  rightSlot,
  className,
}: TopAppBarProps) {
  return (
    <div
      className={cn(
        "flex h-[72px] items-center justify-between border-b-[3px] border-ink bg-yellow px-6",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {leftSlot}
        <div>
          <div className="text-lg font-bold uppercase tracking-[-0.02em]">
            {title}
          </div>
          {subtitle ? (
            <div className="text-sm text-ink/70">{subtitle}</div>
          ) : null}
        </div>
      </div>
      <div className="flex items-center gap-3">{rightSlot}</div>
    </div>
  );
}
