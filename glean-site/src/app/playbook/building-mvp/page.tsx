"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BuildingMvpPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>

      <Badge variant="secondary" className="mb-4">Chapter 03</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Building Your MVP</h1>
      <p className="text-muted-foreground text-lg mb-2">What to build, what to skip, and how fast to move.</p>

      <Separator className="mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What Is an MVP (And What It&apos;s Not)</h2>
        <p className="text-muted-foreground mb-4">
          As Dalton Caldwell, Managing Partner at YC, explains: &quot;The keyword here is <strong>viable</strong>. A product that doesn&apos;t work at all and is useless to everyone is not viable. It has to be useful enough to serve some kind of purpose for the customer.&quot;
        </p>
        <p className="text-muted-foreground">
          An MVP is not a prototype. It&apos;s not a demo. It&apos;s the smallest version of your product that delivers real value to real users. Minimum refers to scope (few features), not quality (poor execution).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The 90/10 Solution</h2>
        <p className="text-muted-foreground mb-4">
          Paul Buchheit&apos;s framework: the first version is not going to be the final version, and it will very likely — a lot of the code — be rewritten, and that&apos;s okay.
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">DoorDash Example</CardTitle>
            <CardDescription>
              Built &quot;in one afternoon&quot; with HTML/CSS, PDF menus, Google Forms for the back end, and Find My Friends for driver tracking. They constrained to Palo Alto only — which helped them get delivery unit economics right before expanding.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How Long Should an MVP Take?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { phase: "Validation", time: "1–2 weeks", output: "10+ customer conversations" },
            { phase: "Scoping", time: "2–3 days", output: "v1 feature list" },
            { phase: "Build (non-AI)", time: "2–4 weeks", output: "Live product" },
            { phase: "Build (AI-native)", time: "4–8 weeks", output: "Live product + AI" },
            { phase: "Soft launch", time: "Day 1", output: "First users, first feedback" },
          ].map((item) => (
            <Card key={item.phase} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.phase}</CardTitle>
                <CardDescription>Time: {item.time}</CardDescription>
                <CardDescription>Output: {item.output}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Technical Decisions</h2>
        <p className="text-muted-foreground mb-4">
          Choose tech you already know. Use third-party services for auth, payments, infrastructure. As Diana Hu explains: &quot;Choose the tech for iteration speed. Keep it simple. Don't just choose a cool new programming language — choose what you're comfortable enough to launch quickly.&quot;
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">The Tools to Use</CardTitle>
            <CardDescription>
              Auth: Auth0 or Clerk. Payments: Stripe. Cross-platform: React Native. Cloud: AWS or GCP. Landing pages: Webflow. Back-end: serverless (Lambda, Firebase). Don&apos;t build from scratch.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common MVP Mistakes</h2>
        <div className="space-y-3">
          {[
            { mistake: "Building too many features", detail: "70% of MVP features go unused. If you can remove it and users can still complete the core workflow, remove it." },
            { mistake: "Skipping validation", detail: "Build something to show users first, get their reaction, then decide what to build." },
            { mistake: "Over-engineering", detail: "Pokemon Go launched with technical issues — users couldn't log in — and it didn't kill the company. They made over a billion dollars in revenue." },
            { mistake: "Getting attached to bad ideas", detail: "Optimizely started with a Twitter referral widget. When feedback showed it wasn't working, they pivoted quickly to A/B testing." },
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

      <Separator className="my-12" />
      <div className="text-center">
        <Link href="/playbook/getting-first-users" className="text-foreground underline underline-offset-4">
          Next: Getting Your First Users →
        </Link>
      </div>
    </div>
  );
}
