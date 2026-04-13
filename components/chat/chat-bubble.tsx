import { cn } from "@/utils/cn";

interface ChatBubbleProps {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp?: string;
}

export function ChatBubble({ role, content, timestamp }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={cn("flex flex-col", isUser ? "items-end" : "items-start")}>
      <div
        className={cn(
          "max-w-[78%] rounded-xl2 border-[3px] border-ink px-4 py-3 text-sm",
          isUser ? "bg-ink text-white" : "bg-white text-ink",
          role === "system" ? "w-full max-w-full bg-amber text-ink" : ""
        )}
      >
        {content}
      </div>
      {timestamp ? (
        <span className="mt-1 text-[11px] text-ink/60">{timestamp}</span>
      ) : null}
    </div>
  );
}
