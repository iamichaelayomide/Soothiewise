import * as React from "react";

import { cn } from "@/utils/cn";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 py-10", className)}>
      {children}
    </div>
  );
}
