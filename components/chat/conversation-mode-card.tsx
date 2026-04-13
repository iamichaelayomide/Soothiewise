import Link from "next/link";

import { cn } from "@/utils/cn";

interface ModeCardProps {
  title: string;
  description: string;
  href: string;
}

export function ConversationModeCard({ title, description, href }: ModeCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "card-surface flex flex-col justify-between gap-3 rounded-xl2 p-5",
        "transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutalist-hover"
      )}
    >
      <div className="text-sm font-bold uppercase tracking-[0.05em]">
        {title}
      </div>
      <p className="text-sm text-ink/70">{description}</p>
    </Link>
  );
}
