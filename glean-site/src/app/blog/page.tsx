import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Badge variant="secondary" className="mb-4">
        Blog
      </Badge>
      <h1 className="text-4xl font-bold mb-4">
        From Zero to First Customer: How to Use AI Agents for RevOps
      </h1>
      <p className="text-muted-foreground mb-2">
        Published{" "}
        <time dateTime="2025-01-15">January 15, 2025</time>
      </p>
      <p className="text-muted-foreground mb-8">
        A practical guide for technical founders who built a product but have no
        customers.
      </p>

      <article className="prose prose-invert max-w-none">
        <h2>The Problem</h2>
        <p>
          You built a product. It works. You&apos;re proud of it. But you have zero
          customers, zero revenue, and zero marketing experience. You&apos;re a
          builder, not a marketer.
        </p>
        <p>
          This is the most common failure mode for technical founders. You spend
          months building something nobody uses — not because it&apos;s bad, but
          because you never figured out how to reach the people who need it.
        </p>
        <p>
          The good news: you already have an AI coding agent (Claude Code,
          Cursor, Windsurf). What if that same agent could also handle your
          front-side revenue operations?
        </p>

        <h2>What is RevOps?</h2>
        <p>
          RevOps (Revenue Operations) is everything that brings paying customers
          to your product. It includes:
        </p>
        <ul>
          <li><strong>Finding people</strong> who match your ideal customer profile</li>
          <li><strong>Reaching out</strong> with personalized messages</li>
          <li><strong>Creating content</strong> that attracts inbound leads</li>
          <li><strong>Engaging communities</strong> where your audience hangs out</li>
          <li><strong>Tracking your pipeline</strong> — who&apos;s been contacted, who replied</li>
          <li><strong>Analyzing results</strong> — what&apos;s working, what&apos;s not</li>
        </ul>
        <p>
          Most founders try to do all of this manually. It&apos;s exhausting,
          inconsistent, and impossible to scale. What if an AI agent could handle
          the repetitive parts while you stay in control of the decisions?
        </p>

        <h2>Introducing Glean</h2>
        <p>
          Glean is a set of 7 skills that turn your AI coding agent into a RevOps
          machine. Each skill does ONE thing well. They chain naturally. And
          you&apos;re always in control.
        </p>

        <h3>The 7 Skills</h3>
        <ol>
          <li>
            <strong>glean-setup</strong> — Agent learns about your business,
            writes profile, audience, and strategy files.
          </li>
          <li>
            <strong>glean-find</strong> — Agent searches LinkedIn, X, email for
            people matching your ideal customer.
          </li>
          <li>
            <strong>glean-reach</strong> — Agent composes personalized messages,
            you approve before sending.
          </li>
          <li>
            <strong>glean-content</strong> — Agent writes posts, threads,
            articles that attract your target audience.
          </li>
          <li>
            <strong>glean-community</strong> — Agent finds relevant Reddit, HN,
            Discord discussions for you to engage.
          </li>
          <li>
            <strong>glean-track</strong> — Agent shows your pipeline: who&apos;s
            contacted, who replied, who converted.
          </li>
          <li>
            <strong>glean-review</strong> — Agent analyzes results, suggests
            what to double down on or stop.
          </li>
        </ol>

        <h2>The Daily Workflow</h2>
        <p>
          Here&apos;s what a typical day looks like with Glean:
        </p>

        <Card className="bg-card/50 my-6">
          <CardHeader>
            <CardTitle className="text-base">9:00 AM — Morning Check-in</CardTitle>
            <CardDescription>
              You open your coding agent. It reads your data files and reports:
            </CardDescription>
            <div className="mt-3 p-4 bg-secondary rounded-lg text-sm font-mono">
              Your pipeline: 45 leads total. 12 contacted, 3 replied, 1
              interested. 33 leads waiting for outreach. 5 follow-ups due today.
            </div>
          </CardHeader>
        </Card>

        <Card className="bg-card/50 my-6">
          <CardHeader>
            <CardTitle className="text-base">9:05 AM — Find Leads</CardTitle>
            <CardDescription>
              You say: &quot;Find 20 leads on LinkedIn&quot;
            </CardDescription>
            <div className="mt-3 p-4 bg-secondary rounded-lg text-sm font-mono">
              Found 20 leads: 1. Sarah Chen (CTO @ Acme) 2. Mike Johnson (VP Eng
              @ TechCo) ... Want me to send connection requests?
            </div>
          </CardHeader>
        </Card>

        <Card className="bg-card/50 my-6">
          <CardHeader>
            <CardTitle className="text-base">9:10 AM — Send Outreach</CardTitle>
            <CardDescription>
              You say: &quot;Yes, top 10&quot;
            </CardDescription>
            <div className="mt-3 p-4 bg-secondary rounded-lg text-sm font-mono">
              Here are the messages I&apos;ll send: 1. To Sarah: &quot;Saw your
              post about API monitoring...&quot; 2. To Mike: &quot;Noticed
              you&apos;re scaling your backend team...&quot; Approve?
            </div>
          </CardHeader>
        </Card>

        <h2>Why This Works</h2>
        <p>
          Most marketing tools are SaaS products with their own dashboards,
          APIs, and learning curves. Glean is different:
        </p>
        <ul>
          <li>
            <strong>No new tool to learn</strong> — it runs on your existing
            coding agent
          </li>
          <li>
            <strong>No data leaves your machine</strong> — everything stays
            local
          </li>
          <li>
            <strong>You&apos;re always in control</strong> — every action gets
            your approval
          </li>
          <li>
            <strong>It gets smarter over time</strong> — learns from your
            results
          </li>
        </ul>

        <h2>Getting Started</h2>
        <p>Install Glean with one command:</p>
        <div className="p-4 bg-secondary rounded-lg font-mono text-sm my-4">
          npx skills add Glean-ai/Glean
        </div>
        <p>
          Then tell your agent: &quot;setup glean&quot;. The agent will learn
          about your business, pick channels, and you&apos;re ready to find
          leads.
        </p>

        <Separator className="my-8" />

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Ready to get your first paying customer?
          </p>
          <Link
            href="/#install"
            className="text-foreground underline underline-offset-4"
          >
            Install Glean →
          </Link>
        </div>
      </article>
    </div>
  );
}
