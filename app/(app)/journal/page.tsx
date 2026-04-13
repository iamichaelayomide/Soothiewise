import { PageShell } from "@/components/layout/page-shell";

export default function JournalPage() {
  return (
    <PageShell>
      <div className="space-y-4">
        <h1>MY JOURNAL</h1>
        <p className="text-lg text-ink/80">
          Your entries will appear here.
        </p>
      </div>
    </PageShell>
  );
}
