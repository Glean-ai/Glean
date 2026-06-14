"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ValidatingIdeasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>

      <Badge variant="secondary" className="mb-4">Chapter 02</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Validating Your Idea</h1>
      <p className="text-muted-foreground text-lg mb-2">How to know if your idea is good before you build anything.</p>
      <p className="text-sm text-muted-foreground mb-8">7 proven methods to test demand, positioning, and pricing.</p>

      <Separator className="mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Validation Is the Most Important Step</h2>
        <p className="text-muted-foreground mb-4">
          Validation costs $0–$500 and takes 1–4 weeks. Building an MVP costs $10,000–$50,000 and takes 2–6 months. Startups that validate before building are 2–3x more likely to succeed. The return on investment is enormous — spending a few hundred dollars and a few weeks to avoid months of wasted building is a no-brainer.
        </p>
        <p className="text-muted-foreground">
          The key insight from YC is that validation isn&apos;t a one-time event — it&apos;s an ongoing process. David Lee emphasizes cohort retention as the ultimate validation metric: &quot;The only thing that matters is whether your cohort curves get flat.&quot;
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Method 1: Customer Discovery Interviews</h2>
        <p className="text-muted-foreground mb-4">
          The most important validation method. The Mom Test framework: never ask if your idea is good. Instead, ask about their life, their problems, and their current solutions. People are naturally polite and will tell you your idea is great even when they have no intention of using it.
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">The Mom Test in Practice</CardTitle>
            <CardDescription>
              Instead of: &quot;Would you use an app that helps you manage your finances?&quot;<br/>
              Ask: &quot;Tell me about the last time you tried to manage your finances. What tools did you use? What was frustrating? Have you ever paid for a financial tool?&quot;
            </CardDescription>
          </CardHeader>
        </Card>
        <p className="text-muted-foreground mt-4">
          The most important signal is unprompted pain. When someone describes a problem without you leading them to it, that&apos;s a strong signal. Target: 20 interviews in 2 weeks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Method 2: Landing Page Tests</h2>
        <p className="text-muted-foreground mb-4">
          The fastest way to validate demand at scale. Create a page describing your solution and measure how many people take action. Above 5% conversion is strong. Below 2% suggests your positioning needs work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">5%+ Conversion</CardTitle>
              <CardDescription>Strong signal — proceed with validation</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">2–5% Conversion</CardTitle>
              <CardDescription>Moderate — test different positioning</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Below 2%</CardTitle>
              <CardDescription>Weak — rethink your approach</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Method 3: Pre-Sales</h2>
        <p className="text-muted-foreground mb-4">
          The strongest validation signal. When someone gives you money for something that doesn&apos;t exist yet, you&apos;ve learned something no amount of market research could tell you. Set clear success criteria before starting: &quot;If 20 people pre-order at $49 in 2 weeks, I&apos;ll build this.&quot;
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">Pre-Sales Validate Three Things</CardTitle>
            <CardDescription>
              1. Real demand (not stated demand, but proven demand)<br/>
              2. Positioning accuracy (people buy based on your description)<br/>
              3. Price validation (people pay the price you set)
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Method 4: Fake Door Tests</h2>
        <p className="text-muted-foreground">
          Add a button or link offering a feature that doesn&apos;t exist. When users click, tell them it&apos;s coming soon and ask them to join a waitlist. 5%+ click-through is a strong signal. Particularly useful for testing new features on existing products.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The 4-Week Validation Sprint</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { week: "Week 1", title: "Interviews", desc: "20 customer discovery interviews using the Mom Test" },
            { week: "Week 2", title: "Landing Page", desc: "Build page, drive traffic with $50-100 in ads" },
            { week: "Week 3", title: "Pre-Sales", desc: "Set up checkout, send to most enthusiastic interviewees" },
            { week: "Week 4", title: "Decision", desc: "Review all data, make go/no-go decision" },
          ].map((item) => (
            <Card key={item.week} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">{item.week}</CardTitle>
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-8" />
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">When to Build, Pivot, or Kill</h2>
        <div className="space-y-3">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Build</CardTitle>
              <CardDescription>Landing page 5%+, interviews reveal repeated pain, 5+ people willing to pay, pre-sale hits target</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Pivot</CardTitle>
              <CardDescription>Landing page converts but lower than expected, interviews reveal a related but different problem</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Kill</CardTitle>
              <CardDescription>Landing page below 2%, polite interest but no real pain, nobody has tried to solve this before</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />
      <div className="text-center">
        <p className="text-muted-foreground mb-4">Next chapter:</p>
        <Link href="/playbook/building-mvp" className="text-foreground underline underline-offset-4">
          Building Your MVP →
        </Link>
      </div>
    </div>
  );
}
