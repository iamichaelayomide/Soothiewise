export function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 rounded-xl2 border-[3px] border-ink bg-white px-3 py-2 text-sm">
      <span className="h-2 w-2 animate-bounce rounded-full bg-ink" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-ink [animation-delay:120ms]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-ink [animation-delay:240ms]" />
    </div>
  );
}
