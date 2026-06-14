"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Lightbulb,
  CheckCircle,
  Rocket,
  Users,
  Mail,
  Handshake,
  DollarSign,
  BarChart3,
  TrendingUp,
  PiggyBank,
  Target,
  BookOpen,
} from "lucide-react";

const chapters = [
  {
    num: "01",
    title: "Finding Startup Ideas",
    description: "How to find problems worth solving. Frameworks, patterns, and real examples.",
    href: "/playbook/finding-ideas",
    icon: Lightbulb,
  },
  {
    num: "02",
    title: "Validating Your Idea",
    description: "How to know if your idea is good before you build anything.",
    href: "/playbook/validating-ideas",
    icon: CheckCircle,
  },
  {
    num: "03",
    title: "Building Your MVP",
    description: "What to build, what to skip, and how fast to move.",
    href: "/playbook/building-mvp",
    icon: Rocket,
  },
  {
    num: "04",
    title: "Getting Your First Users",
    description: "From zero to ten to one hundred. The manual grind that works.",
    href: "/playbook/getting-first-users",
    icon: Users,
  },
  {
    num: "05",
    title: "Cold Outreach That Converts",
    description: "The funnel math, email templates, and follow-up sequences that work.",
    href: "/playbook/cold-outreach",
    icon: Mail,
  },
  {
    num: "06",
    title: "Sales for Startups",
    description: "Founder-led sales, enterprise deals, and building a sales machine.",
    href: "/playbook/sales",
    icon: Handshake,
  },
  {
    num: "07",
    title: "Pricing Your Product",
    description: "How to pick the right price and stop leaving money on the table.",
    href: "/playbook/pricing",
    icon: DollarSign,
  },
  {
    num: "08",
    title: "Retention & Metrics",
    description: "Cohort retention, key metrics, and knowing if you've made something people want.",
    href: "/playbook/retention",
    icon: BarChart3,
  },
  {
    num: "09",
    title: "Growth Strategies",
    description: "SEO, paid, content, partnerships — how to pick your first growth channel.",
    href: "/playbook/growth",
    icon: TrendingUp,
  },
  {
    num: "10",
    title: "Fundraising",
    description: "How startup fundraising works — from seed to Series A.",
    href: "/playbook/fundraising",
    icon: PiggyBank,
  },
  {
    num: "11",
    title: "Scaling to $1M ARR",
    description: "What changes between zero and one million in revenue.",
    href: "/playbook/scaling-to-1m",
    icon: Target,
  },
  {
    num: "12",
    title: "Startup Glossary",
    description: "Every term you need to know — MVP, VC, burn rate, and more.",
    href: "/playbook/glossary",
    icon: BookOpen,
  },
];

export default function PlaybookPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Badge variant="secondary" className="mb-4">
        The Startup Playbook
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        From Zero to First Million
      </h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        A comprehensive, free guide for technical founders who built a product
        but have no customers. Everything from finding ideas to scaling to $1M
        ARR — based on YC Startup School content and real founder experience.
      </p>

      <Separator className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chapters.map((ch) => (
          <Link key={ch.href} href={ch.href}>
            <Card className="bg-card/50 hover:bg-card/80 transition-all duration-200 hover:scale-[1.01] h-full cursor-pointer group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                    <ch.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    {ch.num}
                  </span>
                </div>
                <CardTitle className="text-base">{ch.title}</CardTitle>
                <CardDescription>{ch.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          All content is free, open-source, and based on YC Startup School
          lectures.
        </p>
        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <Link href="/" className="text-foreground underline underline-offset-4">
            Glean
          </Link>{" "}
          — RevOps skills for AI agents.
        </p>
      </div>
    </div>
  );
}
