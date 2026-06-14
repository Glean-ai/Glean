"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GettingFirstUsersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>
      <Badge variant="secondary" className="mb-4">Chapter 04</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Getting Your First Users</h1>
      <p className="text-muted-foreground text-lg mb-2">From zero to ten to one hundred. The manual grind that works.</p>
      <Separator className="mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Mindset Shift</h2>
        <p className="text-muted-foreground mb-4">
          Most people aren&apos;t early adopters. Almost no one wants to be a startup&apos;s first paying customer, yet every great product still manages to find a few people willing to take that leap. You&apos;re looking for the &quot;Gustavs and Annas of the world — the ones who try new things or have a burning need that you can solve.&quot;
        </p>
        <p className="text-muted-foreground">
          Your first 100 users come from doors, not ads. Pay-zero distribution channels outperform paid ads at this stage because you&apos;re optimizing for conversation density and feedback, not customer acquisition cost.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The 100-User Formula</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { count: "30", source: "Warm Waitlist", desc: "Friends, family, network" },
            { count: "30", source: "Directories", desc: "Product Hunt, BetaList, relevant directories" },
            { count: "20", source: "Communities", desc: "Reddit, Slack, Discord, Twitter/X" },
            { count: "15", source: "Cold Outreach", desc: "Targeted emails to ideal customers" },
            { count: "5", source: "Press", desc: "Newsletters, podcasts, Hacker News" },
          ].map((item) => (
            <Card key={item.source} className="bg-card/50">
              <CardHeader>
                <div className="text-3xl font-bold mb-2">{item.count}</div>
                <CardTitle className="text-base">{item.source}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className="text-muted-foreground mt-4">
          Time horizon: 60–90 days from launch to first 100 paying users. If it takes more than 120 days, you have a positioning or pricing problem, not a distribution problem.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Path: 10 → 100 → 1000</h2>
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">First 10 Users (Week 1–2)</CardTitle>
              <CardDescription>
                Reach out to personal network. Send 5–10 personalized cold emails per day. Post in 2–3 relevant communities. Ask every user: &quot;Who else should I talk to?&quot;
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">First 100 Users (Week 3–8)</CardTitle>
              <CardDescription>
                Launch on Product Hunt (Tuesday–Thursday). Scale cold outreach to 15–20 emails per day. Submit to 5–10 startup directories. Start building in public on Twitter/X. Respond to every sign-up within 60 minutes.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">First 1000 Users (Month 3–6)</CardTitle>
              <CardDescription>
                Analyze which channels are working and double down. Build referral mechanisms into the product. Invest in SEO content (2–3 posts per month). Consider paid acquisition if funnel converts. Hire first sales or support person.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Community Engagement</h2>
        <p className="text-muted-foreground mb-4">
          Communities are the fastest path to first users. The three-phase approach: Listen for 2 weeks. Contribute genuinely before mentioning your product. Share with context, not fanfare.
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">The 80/20 Rule</CardTitle>
            <CardDescription>
              80% of your activity should be genuinely helpful. 20% can mention your product (only when relevant). Communities detect promotional intent immediately. Being helpful first earns you standing.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <Separator className="mb-8" />
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Action Items</h2>
        <div className="space-y-2">
          {[
            "Identify 3–5 communities where your target users gather",
            "Spend 2 weeks being helpful in those communities",
            "Build a list of 100 ideal customers for cold outreach",
            "Send 5–10 personalized cold emails per day",
            "Launch on Product Hunt (Tuesday–Thursday, early Pacific Time)",
            "Ask every early user for referrals",
            "Track metrics: activation rate, time to first value, repeat usage",
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader><CardDescription className="text-sm">☐ {item}</CardDescription></CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />
      <div className="text-center">
        <Link href="/playbook/cold-outreach" className="text-foreground underline underline-offset-4">Next: Cold Outreach That Converts →</Link>
      </div>
    </div>
  );
}
