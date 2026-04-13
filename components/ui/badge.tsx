import * as React from "react";

import { cn } from "@/utils/cn";

const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-md border-[3px] border-ink bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.05em]",
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = "Badge";

export { Badge };
