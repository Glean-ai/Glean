"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ColdOutreachPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>
      <Badge variant="secondary" className="mb-4">Chapter 05</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Cold Outreach That Converts</h1>
      <p className="text-muted-foreground text-lg mb-2">The funnel math, email templates, and follow-up sequences that work.</p>
      <Separator className="mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Warm Intro Hack</h2>
        <p className="text-muted-foreground mb-4">
          The most effective outreach hack: get a warm introduction. Warm intros convert at 2–3 times the rate of cold emails. Before writing a single email, spend 30 minutes per target searching LinkedIn for intro paths.
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">Where to Find Warm Paths</CardTitle>
            <CardDescription>
              LinkedIn 1st/2nd degree connections. University alumni networks. Former employer alumni. Shared communities (Slack groups, Discord, industry associations). Friends of friends.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The 800-Email Rule</h2>
        <p className="text-muted-foreground mb-4">To get 1 customer, you might need to send 800 emails:</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: "800", label: "Emails Sent", detail: "50% open rate" },
            { step: "400", label: "Emails Opened", detail: "10% response rate" },
            { step: "40", label: "Responses", detail: "25% demo rate" },
            { step: "10", label: "Demos", detail: "10% close rate" },
          ].map((item) => (
            <Card key={item.label} className="bg-card/50 text-center">
              <CardHeader>
                <div className="text-3xl font-bold">{item.step}</div>
                <CardTitle className="text-base">{item.label}</CardTitle>
                <CardDescription>{item.detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className="text-muted-foreground mt-4">
          You need dozens of emails per day — 50 is a good target for early-stage founders. Block 2–3 hours daily for outreach.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The 7 Principles of Cold Email</h2>
        <div className="space-y-3">
          {[
            { num: "1", title: "Focused specific goal", desc: "One ask per email. Don't ask for a demo AND an intro AND feedback." },
            { num: "2", title: "Be human", desc: "Write like you talk to a friend. Use 'hey' not 'Dear Sir.' Typos are okay — they signal a human wrote this." },
            { num: "3", title: "Personalize deeply", desc: "Go beyond name swapping — reference their product, a recent launch, a LinkedIn post." },
            { num: "4", title: "Keep it short", desc: "75–125 words gets 5–15% higher reply rates. Most people read on mobile." },
            { num: "5", title: "Establish credibility", desc: "Mention YC, ex-Google, past companies. Share customer logos." },
            { num: "6", title: "It's about them, not you", desc: "Reframe every 'I' as 'you.' Tell your story as solving their problem." },
            { num: "7", title: "Clear call to action", desc: "End with a standalone sentence: 'Reply to let me know.'" },
          ].map((item) => (
            <Card key={item.num} className="bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 rounded">{item.num}</span>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </div>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Follow-Up Sequences</h2>
        <div className="space-y-3">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Day 0: First Email</CardTitle>
              <CardDescription>Your initial outreach with the 7 principles.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Day 3–4: Second Email</CardTitle>
              <CardDescription>New angle or value. Share a relevant article or case study.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Day 7–10: Third Email</CardTitle>
              <CardDescription>&quot;Break-up&quot; that closes the loop. Add final value.</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <p className="text-muted-foreground mt-4">
          Current best practice: 2–3 emails maximum. More than that triples spam complaints. Each follow-up must add value, not just ask &quot;did you see my last email?&quot;
        </p>
      </section>

      <Separator className="mb-8" />
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common Mistakes</h2>
        <div className="space-y-2">
          {[
            "Bad targeting — perfect email to wrong prospect is waste",
            "Generic personalization — 'Love what you're doing at [Company]' feels templated",
            "Making it about you — 'I I I' emails get deleted",
            "Too many asks — one CTA per email",
            "Automating too early — write 100 emails manually first",
            "No follow-up — 80% of sales require 5+ touchpoints",
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader><CardDescription className="text-sm">✗ {item}</CardDescription></CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />
      <div className="text-center">
        <Link href="/playbook/sales" className="text-foreground underline underline-offset-4">Next: Sales for Startups →</Link>
      </div>
    </div>
  );
}
