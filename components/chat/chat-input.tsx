"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

interface ChatInputProps {
  onSend: (value: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState("");

  return (
    <form
      className="flex items-center gap-3 border-t-[3px] border-ink bg-white px-4 py-3"
      onSubmit={(event) => {
        event.preventDefault();
        if (!value.trim()) return;
        onSend(value.trim());
        setValue("");
      }}
    >
      <textarea
        className={cn(
          "h-[48px] flex-1 resize-none rounded-lg border-[3px] border-ink px-3 py-2 text-sm",
          "outline-none focus:shadow-[4px_4px_0px_0px_#1C1C14]"
        )}
        placeholder="Say whatever you're feeling..."
        maxLength={1000}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button variant="dark" size="sm" type="submit">
        Send
      </Button>
    </form>
  );
}
