"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GrowthPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>
      <Badge variant="secondary" className="mb-4">Chapter 09</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Growth Strategies</h1>
      <p className="text-muted-foreground text-lg mb-2">SEO, paid, content, partnerships — how to pick your first growth channel.</p>
      <Separator className="mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">One Channel Beats Five</h2>
        <p className="text-muted-foreground">
          Companies that focus on a maximum of two channels grow 40% faster than those spreading thin. Use the Bullseye Framework: brainstorm 19 traction channels, rank by promise, test three at small scale, then commit fully to the single best performer.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Channel Selection Framework</h2>
        <div className="space-y-3">
          {[
            { q: "Where does your ICP spend time?", desc: "CTOs on LinkedIn/HN. Consumers on TikTok/Instagram. Developers on X/GitHub." },
            { q: "What's the feedback loop speed?", desc: "Paid ads return signal in days. SEO returns in months. Early stage: faster is better." },
            { q: "What's your budget?", desc: "Zero budget: founder-led content, communities, outreach. $2K–5K/month: add targeted search ads." },
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.q}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">SEO & Content in 2026</h2>
        <p className="text-muted-foreground mb-4">
          Google AI Overviews now appear on 30–50% of queries. Organic click rates dropped 25–45%. What works now: optimize for AI Overview citations, not just rankings. Use FAQPage schema, structured data, and direct-answer formatting.
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">Content Compounds</CardTitle>
            <CardDescription>
              Businesses that blog regularly get 67% more leads. Start one blog post per week, build around long-tail keywords specific to your ICP&apos;s pain points, and be patient for 4–6 months while the compounding engine builds.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Product-Led Growth</h2>
        <p className="text-muted-foreground">
          60% of SaaS companies identify as product-led. The &quot;aha&quot; moment needs to happen in under 60 seconds. Track: activation rate, time to value, free-to-paid conversion (median 9%), NRR, PQLs, and viral coefficient.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Key Metrics That Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { metric: "LTV:CAC Ratio", target: "Above 3x" },
            { metric: "CAC Payback", target: "Under 12 months" },
            { metric: "NRR", target: "Above 110%, ideally 120%+" },
            { metric: "Burn Multiple", target: "Under 1.0" },
            { metric: "Activation Rate", target: "Above 20%" },
            { metric: "Day 30 Retention", target: "Above 15–25%" },
          ].map((item) => (
            <Card key={item.metric} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.metric}</CardTitle>
                <CardDescription>Target: {item.target}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">When to Focus on Growth vs Product</h2>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">Fix activation before scaling acquisition — always.</CardTitle>
            <CardDescription>
              Before PMF, marketing is a learning mechanism, not a growth mechanism. Focus on product when Day 30 retention is below 15–25% or activation is below 20%. Use the 90-day commitment framework with defined kill criteria.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <Separator className="my-12" />
      <div className="text-center">
        <Link href="/playbook/fundraising" className="text-foreground underline underline-offset-4">Next: Fundraising →</Link>
      </div>
    </div>
  );
}
