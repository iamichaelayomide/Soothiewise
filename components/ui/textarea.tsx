import * as React from "react";

import { cn } from "@/utils/cn";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "brutalist-input w-full min-h-[140px] bg-white text-ink placeholder:text-ink/60",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export { Textarea };
