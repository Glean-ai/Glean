"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RetentionPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>
      <Badge variant="secondary" className="mb-4">Chapter 08</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Retention & Metrics</h1>
      <p className="text-muted-foreground text-lg mb-2">Cohort retention, key metrics, and knowing if you&apos;ve made something people want.</p>
      <Separator className="mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Cohort Retention Is the Best Metric</h2>
        <p className="text-muted-foreground mb-4">
          David Lee, YC partner who built Google Photos to over a billion users, calls cohort retention the single best way to answer: &quot;Did we make something people want?&quot; Instead of looking at all users mixed together, track individual groups of new users (cohorts) over time.
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">The Core Insight</CardTitle>
            <CardDescription>
              The only thing that matters is whether your cohort curves get flat. A product that retains 20% of users forever is fundamentally different from one that retains 80% initially but trends toward zero. Flat at 20% is better than declining from 80% to 0%.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">2026 Benchmarks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Seed Stage</CardTitle>
              <CardDescription>80–85% annual retention is good. NRR 95–105%. Don&apos;t panic at early churn.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Series A</CardTitle>
              <CardDescription>88–92% annual retention. NRR 100–112%. Growth stage: 93–97%.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How to Calculate</h2>
        <div className="space-y-3">
          {[
            { step: "1", title: "Define cohort", desc: "Group new users by signup time (week or month)." },
            { step: "2", title: "Pick the active action", desc: "What counts as real value? Instagram: viewed 3+ posts. Uber: completed a ride." },
            { step: "3", title: "Choose time period", desc: "Daily for social apps, weekly for utility, quarterly for travel." },
            { step: "4", title: "Build the triangle chart", desc: "Each row is a cohort, each column is a subsequent period. Numbers can go UP — users who left may come back." },
          ].map((item) => (
            <Card key={item.step} className="bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 rounded">{item.step}</span>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </div>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How to Improve Retention</h2>
        <div className="space-y-3">
          {[
            { strategy: "Improve the product", desc: "New features, better speed, simpler flows. Look at chronological cohorts — if middle ones perform better, improvements are working." },
            { strategy: "Acquire better users", desc: "Often the product is fine but you're targeting wrong customers. Slice cohorts by channel, country, or customer type." },
            { strategy: "Improve onboarding", desc: "Cheapest fix. What was the customer doing yesterday? What do you want them to change today?" },
            { strategy: "Build network effects", desc: "Products where every subsequent user makes it better for existing users." },
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.strategy}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Retention Mistakes That Kill Startups</h2>
        <div className="space-y-2">
          {[
            "Picking too large a time period — if you expect daily use, measure daily",
            "Picking too easy an action — 'opened the app' doesn't prove value",
            "Using payment as the action — users stop using first, then stop paying",
            "Looking at a single point instead of the full curve",
            "Trusting analytics tools blindly — build your own curves first",
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader><CardDescription className="text-sm">✗ {item}</CardDescription></CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />
      <div className="text-center">
        <Link href="/playbook/growth" className="text-foreground underline underline-offset-4">Next: Growth Strategies →</Link>
      </div>
    </div>
  );
}
