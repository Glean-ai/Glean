"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ScalingTo1mPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>
      <Badge variant="secondary" className="mb-4">Chapter 11</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Scaling to $1M ARR</h1>
      <p className="text-muted-foreground text-lg mb-2">What changes between zero and one million in revenue.</p>
      <Separator className="mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Three Phases</h2>
        <div className="space-y-4">
          {[
            { phase: "Phase 1", range: "$0 → $10K MRR", time: "Months 0–6", focus: "Validate, build MVP, get first 10 paying customers" },
            { phase: "Phase 2", range: "$10K → $50K MRR", time: "Months 6–12", focus: "Document sales process, improve retention, test channels" },
            { phase: "Phase 3", range: "$50K → $83K MRR", time: "Months 12–24", focus: "Scale what works, hire key roles, build systems" },
          ].map((item) => (
            <Card key={item.phase} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.phase}: {item.range}</CardTitle>
                <CardDescription>
                  Timeline: {item.time}. Focus: {item.focus}.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What Changes</h2>
        <div className="space-y-3">
          {[
            { shift: "From founder-dependent to system-dependent", desc: "Your job changes from doing everything to building systems that do things." },
            { shift: "From 'can we find one customer?' to 'can we find 100 through the same process?'", desc: "Repeatable sales is the single most important asset." },
            { shift: "From hand-holding every user to building onboarding at scale", desc: "Self-serve onboarding with value within 24 hours." },
            { shift: "Financial options multiply", desc: "$1M ARR with 70% margins = $700K gross profit. Options: bootstrap, raise, or sell." },
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.shift}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Hiring Sequence</h2>
        <p className="text-muted-foreground mb-4">
          Your first 10 hires should be roughly: 3–4 engineers, a product designer, a founding AE, a customer success lead, a content hire, a data engineer, a second AE, and an operations generalist. Skip VP Sales until you&apos;ve closed 10 customers yourself.
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">The Trigger to Hire</CardTitle>
            <CardDescription>
              Hire when not hiring is the bigger risk: validated revenue ($5K–$20K MRR), a bottleneck costing growth, or repeatable tasks ready to delegate. At $10K MRR, one hire can consume half your revenue.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Key Metrics by Stage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { stage: "$10K MRR", metrics: "15–20% MoM growth, churn below 5% monthly" },
            { stage: "$30K MRR", metrics: "Documented sales playbook, self-serve onboarding" },
            { stage: "$50K MRR", metrics: "NRR above 100%, CAC payback under 9 months" },
            { stage: "$83K MRR ($1M)", metrics: "Repeatable channel, functional team, optionality" },
          ].map((item) => (
            <Card key={item.stage} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.stage}</CardTitle>
                <CardDescription>{item.metrics}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common Bottlenecks</h2>
        <div className="space-y-2">
          {[
            "Weak retention — fix before scaling acquisition",
            "Broad ICP targeting — one segment beats broad market",
            "Underpricing — price for value, not competition",
            "Premature hiring — one bad hire at $10K MRR sets you back 3–6 months",
            "No repeatable growth channel — test systematically, pick one, double down",
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader><CardDescription className="text-sm">✗ {item}</CardDescription></CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />
      <div className="text-center">
        <Link href="/playbook/glossary" className="text-foreground underline underline-offset-4">Next: Startup Glossary →</Link>
      </div>
    </div>
  );
}
