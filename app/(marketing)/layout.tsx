import "@/styles/globals.css";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-yellow text-ink">{children}</div>;
}
