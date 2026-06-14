import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Glean — RevOps Skills for AI Agents",
  description:
    "7 skills that turn your AI coding agent into a RevOps machine. Find customers, reach out, create content, track pipeline — all from your terminal.",
  keywords: [
    "AI agent",
    "RevOps",
    "lead generation",
    "sales outreach",
    "marketing automation",
    "Claude Code",
    "Cursor",
    "BrowserAct",
  ],
  openGraph: {
    title: "Glean — RevOps Skills for AI Agents",
    description:
      "7 skills that turn your AI coding agent into a RevOps machine. Find customers, reach out, create content, track pipeline.",
    url: "https://glean.aawej.in",
    siteName: "Glean",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glean — RevOps Skills for AI Agents",
    description:
      "7 skills that turn your AI coding agent into a RevOps machine.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background antialiased">
        <TooltipProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TooltipProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
