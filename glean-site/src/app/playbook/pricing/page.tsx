"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>
      <Badge variant="secondary" className="mb-4">Chapter 07</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing Your Product</h1>
      <p className="text-muted-foreground text-lg mb-2">How to pick the right price and stop leaving money on the table.</p>
      <Separator className="mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Value Equation</h2>
        <p className="text-muted-foreground mb-4">
          The single most important pricing concept. Sit down with your champion and write down, step by step, exactly what value your product delivers. Value = cost savings, time savings, or revenue increases.
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">Example: AI Customer Service Tool</CardTitle>
            <CardDescription>
              Company has 100 support agents at $100K each = $10M cost. Your tool eliminates 20% of queries = $2M savings. Charge 25–50% of value = $500K–$700K. Customer keeps $1.3M, you keep $700K. ROI story: spend $700K, save $1.3M.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The 3-Tier Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Starter</CardTitle>
              <CardDescription>Entry point. Limited features. The anchor that makes Pro look like a bargain.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50 border-primary/50">
            <CardHeader>
              <CardTitle className="text-base">Pro (Main Product)</CardTitle>
              <CardDescription>Full features. 70–80% of customers should land here. Price at 3–4x Starter.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Enterprise</CardTitle>
              <CardDescription>SSO, SOC 2, compliance. Gate these features. Price at 3–5x Pro or &quot;Contact Sales.&quot;</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common Pricing Mistakes</h2>
        <div className="space-y-3">
          {[
            { mistake: "Pricing too low", detail: "Start 50% higher than you think. If every deal closes immediately, you're underpricing." },
            { mistake: "Competing on price", detail: "This is a race to the bottom. Differentiate on value, not price." },
            { mistake: "Never raising prices", detail: "Re-evaluate every 6–9 months. Test 5–10% annual increases on new customers." },
            { mistake: "Overcomplicating pricing", detail: "Too many tiers, too many variables. Simple pricing closes deals." },
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">Mistake: {item.mistake}</CardTitle>
                <CardDescription>{item.detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Blomfield Method</h2>
        <p className="text-muted-foreground">
          Start at a number that makes you uncomfortable. Raise by 50% each new pitch. When you start losing &gt;25% of deals purely on price, you&apos;re in the right range. You don&apos;t need to win every single deal.
        </p>
      </section>

      <Separator className="my-12" />
      <div className="text-center">
        <Link href="/playbook/retention" className="text-foreground underline underline-offset-4">Next: Retention & Metrics →</Link>
      </div>
    </div>
  );
}
