import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "dark" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-2 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-6 py-4 text-base",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-white text-ink",
  dark: "bg-ink text-white",
  danger: "bg-danger text-white",
  ghost: "bg-transparent text-ink shadow-none hover:shadow-none",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      type = "button",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const componentProps = {
      ...props,
      className: cn(
        "inline-flex items-center justify-center gap-2 rounded-lg border-[3px] border-ink font-bold uppercase tracking-[0.05em] shadow-brutalist transition-all duration-150",
        "hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutalist-hover",
        "active:translate-x-0 active:translate-y-0 active:shadow-brutalist-none",
        sizeClasses[size],
        variantClasses[variant],
        className
      ),
      ref,
    } as React.ComponentPropsWithoutRef<"button">;

    if (!asChild) {
      componentProps.type = type;
    }

    return <Comp {...componentProps} />;
  }
);

Button.displayName = "Button";

export { Button };
