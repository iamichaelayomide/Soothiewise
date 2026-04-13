import { PageShell } from "@/components/layout/page-shell";

export default function MoodPage() {
  return (
    <PageShell>
      <div className="space-y-4">
        <h1>MY MOOD</h1>
        <p className="text-lg text-ink/80">Log and review your check-ins.</p>
      </div>
    </PageShell>
  );
}
