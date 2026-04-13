import { PageShell } from "@/components/layout/page-shell";

export default function SettingsPage() {
  return (
    <PageShell>
      <div className="space-y-4">
        <h1>SETTINGS</h1>
        <p className="text-lg text-ink/80">
          Profile, privacy, and notifications will live here.
        </p>
      </div>
    </PageShell>
  );
}
