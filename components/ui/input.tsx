import * as React from "react";

import { cn } from "@/utils/cn";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "brutalist-input w-full bg-white text-ink placeholder:text-ink/60",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";

export { Input };
