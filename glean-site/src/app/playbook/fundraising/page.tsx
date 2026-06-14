"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FundraisingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>
      <Badge variant="secondary" className="mb-4">Chapter 10</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Fundraising</h1>
      <p className="text-muted-foreground text-lg mb-2">How startup fundraising works — from seed to Series A.</p>
      <Separator className="mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How Fundraising Actually Works</h2>
        <p className="text-muted-foreground mb-4">
          One YC company mapped their entire process: 160 investors met. 39 said yes. Check sizes ranged from $5K to $200K. It took four months and 18 days to close $1.6 million. Fundraising is painful and a grind, but straightforward — just a bunch of conversations.
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">The Timeline</CardTitle>
            <CardDescription>
              Active process: compress to 6–8 week sprint. All meetings happen simultaneously. Relationship-building: start 6–9 months before you need capital. Two of three Series A deals in 2026 involve investors who already knew the founder.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Round Thresholds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { round: "Pre-Seed", raised: "$250K–$1.5M", valuation: "$3M–$8M", need: "Strong team, clear idea, early users" },
            { round: "Seed", raised: "$1.5M–$4M", valuation: "$8M–$20M", need: "Functional MVP, real feedback, early traction" },
            { round: "Series A", raised: "$7M–$15M", valuation: "$25M–$50M", need: "$1M–$3M ARR, 15–20% MoM growth, NRR 120%+" },
          ].map((item) => (
            <Card key={item.round} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.round}</CardTitle>
                <CardDescription>
                  Raised: {item.raised}. Valuation: {item.valuation}. Need: {item.need}.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What Investors Look For</h2>
        <div className="space-y-3">
          {[
            { factor: "Market size", desc: "TAM in billion-dollar range. Credible path to $100M+ annual revenue." },
            { factor: "Team", desc: "Ability to execute. Domain expertise. Repeat founders have structural advantage." },
            { factor: "Traction", desc: "ARR, growth rate (15–20% MoM for seed), NRR, CAC payback, gross margins." },
            { factor: "Product-market fit", desc: "Active usage growth without marketing. Users who would be disappointed if product disappeared." },
          ].map((item) => (
            <Card key={item.factor} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.factor}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">SAFEs: The Standard</h2>
        <p className="text-muted-foreground mb-4">
          SAFEs dominate pre-seed and seed. Five pages, $0–$2K legal cost, close in days. Only two terms matter: valuation cap and discount (nobody does discounts). No board seats, no shares change hands, no information rights.
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">Keep SAFE Count Under 10</CardTitle>
            <CardDescription>
              Stack SAFEs at progressively higher caps without modeling conversion dilution and you&apos;ll discover real dilution only at Series A close. Model conversion before stacking.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common Fundraising Mistakes</h2>
        <div className="space-y-2">
          {[
            "Raising too early — need signal of something real, not just a deck",
            "Not compressing timeline — drip meetings over 6 months kills momentum",
            "Trying to impress instead of explain — show the product, talk about customers",
            "Not knowing your metrics cold — LTV/CAC, CAC payback, NRR, burn multiple",
            "Letting someone else pitch for you — founders should always pitch their own company",
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader><CardDescription className="text-sm">✗ {item}</CardDescription></CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Alternative Funding</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { type: "Revenue-Based Financing", detail: "1–3x MRR upfront, repay 3–10% monthly. No dilution. Best for $30K+ MRR SaaS." },
            { type: "Grants", detail: "SBIR/STTR, NSF, DOE. Slow (6–9 months) but free. Great for deep tech, health, climate." },
            { type: "Venture Debt", detail: "Term loan stapled to equity rounds. 12–15% all-in. Extends runway 12–18 months." },
            { type: "Cloud Credits", detail: "AWS, GCP, Azure credits reduce burn 30–50%. Apply before spending." },
          ].map((item) => (
            <Card key={item.type} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.type}</CardTitle>
                <CardDescription>{item.detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />
      <div className="text-center">
        <Link href="/playbook/scaling-to-1m" className="text-foreground underline underline-offset-4">Next: Scaling to $1M ARR →</Link>
      </div>
    </div>
  );
}
