"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const terms = [
  { term: "MVP (Minimum Viable Product)", definition: "A product that is useful enough to serve some purpose for the customer. The key word is 'viable' — not just simple, but actually useful.", insight: "Minimum refers to scope (few features), not quality (poor execution)." },
  { term: "Product-Market Fit (PMF)", definition: "When your product satisfies a strong market demand. Users love it, growth is organic, and you can't keep up with demand.", insight: "PMF is the #1 goal. Without it, nothing else matters." },
  { term: "Burn Rate", definition: "How much money your company spends per month. If you spend $50K/month, your burn rate is $50K.", insight: "Know your burn rate. It tells you how many months you have left." },
  { term: "Runway", definition: "How many months you can keep operating before running out of money. $200K in bank / $50K/month = 4 months runway.", insight: "More runway = more time to find PMF." },
  { term: "Cohort Retention", definition: "Tracking individual groups of users over time. A cohort is everyone who signed up in a specific period.", insight: "Flat curves are good. Declining curves are bad. The shape matters more than the absolute number." },
  { term: "NRR (Net Revenue Retention)", definition: "Revenue from existing customers this period vs last period, including expansion and churn. Above 100% = existing customers spend more over time.", insight: "NRR above 120% separates durable growth from leaky growth." },
  { term: "CAC (Customer Acquisition Cost)", definition: "How much it costs to acquire one customer. Spend $1000 on marketing, get 10 customers = $100 CAC.", insight: "CAC should be much lower than LTV for a sustainable business." },
  { term: "LTV (Lifetime Value)", definition: "How much revenue a customer generates over their entire relationship with you.", insight: "LTV:CAC ratio of 3:1 or higher is healthy." },
  { term: "Burn Multiple", definition: "Net burn / net new ARR. Under 1.0 is strong growth efficiency.", insight: "Lower burn multiple = more efficient growth." },
  { term: "SAFE", definition: "Simple Agreement for Future Equity. 5-page document, $0–$2K legal cost. No board seats, no shares change hands.", insight: "Only two terms matter: valuation cap and discount (nobody does discounts)." },
  { term: "Angel Investor", definition: "Someone who invests their own personal money into early-stage startups. Writes smaller checks ($20K–$50K).", insight: "No qualification to be an angel — just someone with money." },
  { term: "Venture Capital (VC)", definition: "Investors who put money into startups in exchange for equity. Invest small amounts in many companies, hoping a few become huge.", insight: "Most of their portfolio will fail. The winners pay for everything." },
  { term: "TAM (Total Addressable Market)", definition: "The total revenue opportunity for your product if you captured 100% of the market.", insight: "A small TAM limits your ceiling. Think big." },
  { term: "Churn", definition: "The percentage of customers who stop using your product over a given period.", insight: "Low churn is a sign of PMF. Track it obsessively." },
  { term: "Dilution", definition: "When you give away equity, your percentage ownership decreases.", insight: "Dilution is normal. Don't avoid fundraising just because you don't want to dilute." },
  { term: "Cap Table", definition: "A spreadsheet showing who owns what percentage of your company.", insight: "Keep your cap table clean. A messy one scares investors." },
  { term: "PLG (Product-Led Growth)", definition: "Growth driven by the product itself — free trials, freemium, viral mechanics.", insight: "The 'aha' moment needs to happen in under 60 seconds in 2026." },
  { term: "AEO (Answer Engine Optimization)", definition: "Optimizing content to be cited by AI models when they generate answers, not just ranking #1 on Google.", insight: "AI Overviews appear on 30–50% of queries. Optimize for citations." },
  { term: "Bullseye Framework", definition: "Systematic channel selection: brainstorm 19 channels, rank by promise, test three, commit to the best.", insight: "One strong growth loop beats five weak experiments." },
  { term: "Value Equation", definition: "Writing down exactly what value your product delivers, then charging 25–50% of that value.", insight: "Customer keeps ~2/3, you keep ~1/3. Both win." },
];

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>
      <Badge variant="secondary" className="mb-4">Chapter 12</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Startup Glossary</h1>
      <p className="text-muted-foreground text-lg mb-2">Every term you need to know as a founder.</p>
      <Separator className="mb-8" />

      <div className="space-y-4">
        {terms.map((item) => (
          <Card key={item.term} className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-lg">{item.term}</CardTitle>
              <CardDescription className="text-base mt-2">{item.definition}</CardDescription>
              <div className="mt-3 p-3 bg-secondary rounded-lg">
                <p className="text-sm font-medium text-foreground">Key Insight:</p>
                <p className="text-sm text-muted-foreground">{item.insight}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />
      <div className="text-center">
        <p className="text-muted-foreground mb-4">You&apos;ve completed the playbook.</p>
        <Link href="/#install" className="text-foreground underline underline-offset-4">
          Install Glean and start getting customers →
        </Link>
      </div>
    </div>
  );
}
