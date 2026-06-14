"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const sidebarItems = [
  { id: "overview", label: "Overview" },
  { id: "skills", label: "Skills" },
  { id: "data-model", label: "Data Model" },
  { id: "daily-flow", label: "Daily Flow" },
  { id: "design-principles", label: "Design Principles" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === item.id
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </ScrollArea>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          <Badge variant="secondary" className="mb-4">
            Documentation
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Glean Documentation</h1>
          <p className="text-muted-foreground mb-8">
            Everything you need to know about using Glean.
          </p>

          {activeSection === "overview" && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground mb-4">
                Glean is a 7-skill RevOps framework for technical founders with
                zero customers. It handles all front-side revenue operations:
                finding customers, reaching out, creating content, engaging
                communities, tracking pipeline, and adjusting strategy.
              </p>
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="text-base">Key Facts</CardTitle>
                  <CardDescription>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>7 composable skills</li>
                      <li>Works with 67+ AI coding agents</li>
                      <li>Data stays local (no SaaS)</li>
                      <li>Human-in-the-loop (you approve every action)</li>
                      <li>Stateful (gets smarter over time)</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>
          )}

          {activeSection === "skills" && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "glean-setup",
                    trigger: "setup glean",
                    description: "Discover your business, write profile/audience/strategy.",
                  },
                  {
                    name: "glean-find",
                    trigger: "find leads",
                    description: "Find leads on LinkedIn, X, email, communities.",
                  },
                  {
                    name: "glean-reach",
                    trigger: "send outreach",
                    description: "Send connection requests, DMs, emails.",
                  },
                  {
                    name: "glean-content",
                    trigger: "write content",
                    description: "Write posts, threads, articles.",
                  },
                  {
                    name: "glean-community",
                    trigger: "engage community",
                    description: "Find and engage Reddit, HN, Discord.",
                  },
                  {
                    name: "glean-track",
                    trigger: "pipeline",
                    description: "Show pipeline status, follow-ups, conversion rates.",
                  },
                  {
                    name: "glean-review",
                    trigger: "review results",
                    description: "Analyze what's working, suggest strategy changes.",
                  },
                ].map((skill) => (
                  <Card key={skill.name} className="bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-base">{skill.name}</CardTitle>
                      <CardDescription>{skill.description}</CardDescription>
                      <p className="text-xs text-muted-foreground">
                        Trigger: <code>{skill.trigger}</code>
                      </p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {activeSection === "data-model" && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Data Model</h2>
              <p className="text-muted-foreground mb-4">
                All data lives in <code>./glean-data/</code> relative to your
                project.
              </p>
              <div className="p-4 bg-secondary rounded-lg font-mono text-sm mb-4">
                {`./glean-data/
├── profile.md              # What you sell, who for, pricing
├── target-audience.md      # Who to find, where they hang out
├── strategy.md             # Channels, messaging, goals
├── leads.csv               # Everyone you've found/contacted
└── content/                # Drafts for posts, articles, threads
    └── <date>-<topic>.md`}
              </div>
              <p className="text-muted-foreground">
                Files are markdown and CSV — human-readable and editable.
              </p>
            </section>
          )}

          {activeSection === "daily-flow" && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Daily Flow</h2>
              <div className="space-y-4">
                {[
                  "Founder opens agent",
                  "Agent reads all files, reports status",
                  "Founder decides what to do next",
                  "Agent suggests, founder approves",
                  "Agent executes with confirmation gates",
                  "Agent reports results",
                  "Cycle repeats",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeSection === "design-principles" && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Design Principles</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Founder is always in control",
                    description: "Agent proposes, founder approves.",
                  },
                  {
                    title: "Skills are small and composable",
                    description: "Each does ONE thing. Chains naturally.",
                  },
                  {
                    title: "Stateful through files",
                    description: "Read/write to ./glean-data/. Persists between sessions.",
                  },
                  {
                    title: "Progressive disclosure",
                    description: "SKILL.md is lean. References on demand.",
                  },
                  {
                    title: "Clear triggers",
                    description: "Each skill says exactly when to use it.",
                  },
                  {
                    title: "Human-readable data",
                    description: "Markdown and CSV. Founder can edit manually.",
                  },
                  {
                    title: "No overengineering",
                    description: "Simple beats complex.",
                  },
                ].map((principle, i) => (
                  <Card key={i} className="bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-base">{principle.title}</CardTitle>
                      <CardDescription>{principle.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          )}

          <Separator className="my-8" />

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Missing something?{" "}
              <a
                href="https://github.com/Glean-ai/Glean"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4"
              >
                Contribute on GitHub
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
