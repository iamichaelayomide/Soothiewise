"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Home,
  Library,
  MessageCircle,
  User,
} from "lucide-react";

import { cn } from "@/utils/cn";

const navItems = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/chat", label: "Chat", icon: MessageCircle },
  { href: "/journal", label: "Journal", icon: BookOpen },
  { href: "/library", label: "Library", icon: Library },
  { href: "/settings", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t-[3px] border-ink bg-yellow">
      <div className="mx-auto flex h-[72px] max-w-4xl items-center justify-between px-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-12 w-12 flex-col items-center justify-center rounded-lg border-[3px] border-transparent text-xs font-bold",
                isActive
                  ? "border-ink bg-ink text-white"
                  : "text-ink hover:border-ink"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
