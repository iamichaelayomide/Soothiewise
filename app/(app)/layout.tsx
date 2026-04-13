import { BottomNav } from "@/components/layout/bottom-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-yellow pb-24">
      {children}
      <BottomNav />
    </div>
  );
}
