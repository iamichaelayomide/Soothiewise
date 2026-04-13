import * as React from "react";

import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h2>{title}</h2>
      {subtitle ? <p className="text-lg text-ink/80">{subtitle}</p> : null}
    </div>
  );
}
