"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="h-4 w-4" /> Home
      </Link>

      <Badge variant="secondary" className="mb-5">Blog</Badge>

      <article>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          From Zero to First Customer: How to Use AI Agents for RevOps
        </h1>

        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
          <time dateTime="2025-01-15">January 15, 2025</time>
          <span>·</span>
          <span>12 min read</span>
        </div>

        <Separator className="mb-10" />

        <div className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
            <p className="text-muted-foreground">
              You built a product. It works. You&apos;re proud of it. But you have zero customers, zero revenue, and zero marketing experience. You&apos;re a builder, not a marketer.
            </p>
            <p className="text-muted-foreground mt-4">
              This is the most common failure mode for technical founders. You spend months building something nobody uses — not because it&apos;s bad, but because you never figured out how to reach the people who need it.
            </p>
            <p className="text-muted-foreground mt-4">
              The good news: you already have an AI coding agent (Claude Code, Cursor, Windsurf). What if that same agent could also handle your front-side revenue operations?
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">What is RevOps?</h2>
            <p className="text-muted-foreground mb-4">
              RevOps (Revenue Operations) is everything that brings paying customers to your product:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Finding people</strong> who match your ideal customer profile</li>
              <li><strong className="text-foreground">Reaching out</strong> with personalized messages</li>
              <li><strong className="text-foreground">Creating content</strong> that attracts inbound leads</li>
              <li><strong className="text-foreground">Engaging communities</strong> where your audience hangs out</li>
              <li><strong className="text-foreground">Tracking your pipeline</strong> — who&apos;s been contacted, who replied</li>
              <li><strong className="text-foreground">Analyzing results</strong> — what&apos;s working, what&apos;s not</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Introducing Glean</h2>
            <p className="text-muted-foreground mb-6">
              Glean is a set of 7 skills that turn your AI coding agent into a RevOps machine. Each skill does ONE thing well. They chain naturally. And you&apos;re always in control.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "glean-setup", desc: "Discover your business, write profile/audience/strategy" },
                { name: "glean-find", desc: "Find leads on LinkedIn, X, email, communities" },
                { name: "glean-reach", desc: "Send connection requests, DMs, emails" },
                { name: "glean-content", desc: "Write posts, threads, articles" },
                { name: "glean-community", desc: "Find and engage Reddit, HN, Discord" },
                { name: "glean-track", desc: "Show pipeline status, follow-ups, conversion rates" },
                { name: "glean-review", desc: "Analyze what's working, suggest strategy changes" },
              ].map((skill) => (
                <div key={skill.name} className="p-4 bg-secondary/50 rounded-lg">
                  <p className="font-mono text-sm font-medium">{skill.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{skill.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">The Daily Workflow</h2>
            <div className="space-y-4">
              <div className="p-5 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2 font-medium">9:00 AM — Morning Check-in</p>
                <p className="text-sm text-muted-foreground">
                  You open your coding agent. It reads your data files and reports: &quot;Your pipeline: 45 leads total. 12 contacted, 3 replied, 1 interested. 33 leads waiting for outreach. 5 follow-ups due today.&quot;
                </p>
              </div>
              <div className="p-5 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2 font-medium">9:05 AM — Find Leads</p>
                <p className="text-sm text-muted-foreground">
                  You say: &quot;Find 20 leads on LinkedIn.&quot; Agent finds them, shows the list, waits for approval.
                </p>
              </div>
              <div className="p-5 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2 font-medium">9:10 AM — Send Outreach</p>
                <p className="text-sm text-muted-foreground">
                  You say: &quot;Yes, top 10.&quot; Agent composes personalized messages, shows them to you, sends after approval.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <p className="text-muted-foreground mb-4">Install Glean with one command:</p>
            <div className="p-4 bg-secondary rounded-lg font-mono text-sm">
              npx skills add Glean-ai/Glean
            </div>
            <p className="text-muted-foreground mt-4">
              Then tell your agent: &quot;setup glean&quot;. The agent will learn about your business, pick channels, and you&apos;re ready to find leads.
            </p>
          </section>

          <Separator />

          <div className="text-center pt-4">
            <p className="text-muted-foreground mb-4">
              Ready to get your first paying customer?
            </p>
            <Link href="/#install" className="text-foreground underline underline-offset-4">
              Install Glean →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
