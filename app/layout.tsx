import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Soothewise Mobile",
  description: "A calm, mobile-first mental wellness app for daily check-ins.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full`}
    >
      <body className="min-h-full bg-yellow text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
