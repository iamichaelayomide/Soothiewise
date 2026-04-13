"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

interface BottomSheetProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export function BottomSheet({ open, title, onClose, children }: BottomSheetProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40">
      <div
        className={cn(
          "card-surface w-full max-w-2xl rounded-t-xl2 rounded-b-none p-6",
          "border-b-0"
        )}
      >
        <div className="flex items-center justify-between">
          {title ? <h3 className="text-lg font-bold">{title}</h3> : null}
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
        <div className="mt-4 space-y-4">{children}</div>
      </div>
    </div>
  );
}
