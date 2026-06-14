"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SalesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>
      <Badge variant="secondary" className="mb-4">Chapter 06</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Sales for Startups</h1>
      <p className="text-muted-foreground text-lg mb-2">Founder-led sales, enterprise deals, and building a sales machine.</p>
      <Separator className="mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Founders Must Sell</h2>
        <p className="text-muted-foreground">
          If you can&apos;t sell your product yourself, you probably can&apos;t hire someone who can. Pre-PMF sales is fundamentally entrepreneurial. It requires vision, credibility with customers, lots of experimentation, and a tight feedback loop with the people building the product. This is founder work, not sales rep work.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Sales Process</h2>
        <div className="space-y-4">
          {[
            { step: "1", title: "Prospecting", desc: "Build a hypothesis about who has the problem. Start with industry lists, filter aggressively, find decision-makers." },
            { step: "2", title: "Outreach", desc: "Try warm intros first, then cold email. Write each email by hand. Only send emails you'd be excited to receive." },
            { step: "3", title: "Qualification", desc: "Ask questions to understand: Do they have the problem? Budget? Authority? The first call is not a pitch — it's discovery." },
            { step: "4", title: "Demo", desc: "Tell a story, not a feature tour. Every feature shown must answer 'why does this matter to them?'" },
            { step: "5", title: "Pricing", desc: "Use the value equation: charge 25–50% of the value you deliver. Start higher than comfortable." },
            { step: "6", title: "Closing", desc: "Ask about procurement process upfront. Manage the gap between 'yes' and signed contract." },
            { step: "7", title: "Implementation", desc: "You're selling a solution, not a product. Everything between signed contract and customer using your product is your job." },
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
        <h2 className="text-2xl font-bold mb-4">When to Hire a Sales Team</h2>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">Founder-led sales should last until:</CardTitle>
            <CardDescription>
              You&apos;ve closed 10–20 customers yourself. You understand the process deeply enough to teach it. You have a repeatable playbook. You know your ICP, conversion rates, and sales cycle length.
            </CardDescription>
          </CardHeader>
        </Card>
        <p className="text-muted-foreground mt-4">
          Hire in pairs — you can&apos;t tell if a problem is the person, the product, or the segment without a comparison. Look for coachability, not just experience.
        </p>
      </section>

      <Separator className="my-12" />
      <div className="text-center">
        <Link href="/playbook/pricing" className="text-foreground underline underline-offset-4">Next: Pricing Your Product →</Link>
      </div>
    </div>
  );
}
