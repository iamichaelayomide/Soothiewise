"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

interface DialogProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export function Dialog({ open, title, onClose, children }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-6">
      <div className={cn("card-surface w-full max-w-lg p-6")}> 
        <div className="flex items-center justify-between">
          {title ? <h3 className="text-lg font-bold">{title}</h3> : null}
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
        <div className="mt-4 space-y-3">{children}</div>
      </div>
    </div>
  );
}
