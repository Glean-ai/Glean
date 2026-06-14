"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FindingIdeasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/playbook" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Playbook
      </Link>

      <Badge variant="secondary" className="mb-4">Chapter 01</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Finding Startup Ideas</h1>
      <p className="text-muted-foreground text-lg mb-2">How to find problems worth solving — frameworks, patterns, and real examples.</p>
      <p className="text-sm text-muted-foreground mb-8">Based on YC Startup School content and real founder experience.</p>

      <Separator className="mb-8" />

      {/* Section 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Most Startup Ideas Fail Before They Start</h2>
        <p className="text-muted-foreground mb-4">
          35% of failed startups cite &quot;no market need&quot; as the primary reason for failure. More than a third of all startups die because they built something nobody wanted — not because their technology was bad, not because their team was weak, but because they never validated that the problem they were solving actually mattered to enough people.
        </p>
        <p className="text-muted-foreground mb-4">
          The fundamental error most aspiring founders make is falling in love with a solution before understanding the problem. They think, &quot;What if there was an app that did X?&quot; instead of asking, &quot;What problem do people have that causes them real pain?&quot;
        </p>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">The &quot;Uber for X&quot; Trap</CardTitle>
            <CardDescription>
              Founders often take an existing successful company and ask &quot;What if we did Uber for dog walking?&quot; These ideas rarely work because they&apos;re reverse-engineered from a successful business model rather than forward-engineered from a genuine problem. The pattern-matching that makes these ideas feel safe actually makes them more dangerous.
            </CardDescription>
          </CardHeader>
        </Card>
        <p className="text-muted-foreground mt-4">
          Real startup ideas almost always look terrible at first. Airbnb was a marketplace for renting air mattresses on strangers&apos; floors. DoorDash was food delivery for suburbs where delivery barely existed. The best ideas don&apos;t pattern-match to existing successes — they emerge from deep understanding of a problem that most people haven&apos;t even recognized yet.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The YC Approach: Find Hair-on-Fire Problems</h2>
        <p className="text-muted-foreground mb-4">
          Y Combinator&apos;s philosophy is captured in three words: &quot;Make something people want.&quot; But behind that simplicity is a rigorous framework. The key insight is that not all problems are created equal — you want to find problems where the pain is so acute that the person with the problem is desperately looking for a solution.
        </p>
        <p className="text-muted-foreground mb-4">
          Paul Graham, YC&apos;s co-founder, calls these &quot;hair-on-fire problems.&quot; When someone&apos;s hair is on fire, they don&apos;t care about your product&apos;s UX, your pricing model, or your competitive landscape. They just want the fire put out. These problems have three characteristics:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Urgent</CardTitle>
              <CardDescription>They need solving now, not someday</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Important</CardTitle>
              <CardDescription>The consequences of not solving are severe</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Frequent</CardTitle>
              <CardDescription>They happen often enough that people will pay</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <p className="text-muted-foreground">
          The practical way to find these problems is through what YC calls &quot;doing things that don&apos;t scale.&quot; Instead of building a product and hoping people want it, you start by doing the work manually. You talk to people. You observe their behavior. You look for workarounds — the duct tape solutions people have cobbled together because no good solution exists.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Seven Frameworks for Generating Ideas</h2>
        <div className="space-y-4">
          {[
            { num: "1", title: "Start with what your team is uniquely good at", desc: "About half of the most successful YC companies trace their ideas to founder-market fit. If you're an expert in healthcare IT, you'll spot opportunities an outsider would miss." },
            { num: "2", title: "Look for things that have changed in the world", desc: "New technologies, regulations, or cultural shifts create new possibilities. PlanGrid put construction blueprints on tablets — possible only because Apple created the iPad." },
            { num: "3", title: "Look for recent successes and find new variants", desc: "This is the 'Uber for X' approach. It can work but needs extra scrutiny. Be default skeptical and validate ruthlessly." },
            { num: "4", title: "Find underserved niches in large markets", desc: "Look for markets where incumbents serve everyone the same way. Early cloud computing saw AWS serving everyone identically — creating opportunities for focused solutions." },
            { num: "5", title: "Identify pain points in your own workflow", desc: "Retool was built because the founders were tired of building internal tools from scratch. Solve your own problems — you understand them best." },
            { num: "6", title: "Notice inefficiencies in existing processes", desc: "When you observe how work gets done and spot waste, friction, or unnecessary complexity, you've found an opportunity." },
            { num: "7", title: "Combine two existing ideas in a new way", desc: "Instagram combined photo-sharing with filters and social networking. Slack combined chat with file-sharing. Neither component was new — the combination was." },
          ].map((item) => (
            <Card key={item.num} className="bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 rounded">{item.num}</span>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </div>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Evaluating Idea Quality: The 10-Question Framework</h2>
        <div className="space-y-3">
          {[
            "Is this a hair-on-fire problem? Rate the intensity of the pain. Ideas scoring below 6 usually don't justify the effort of building a startup.",
            "How many people have this problem? A hair-on-fire problem affecting 10 people isn't a startup — it's a consulting gig.",
            "Are there existing solutions? If nothing's wrong with current solutions, you don't have an opportunity.",
            "How do people currently solve this problem? If people have built elaborate manual processes, that signals genuine pain.",
            "Is the timing right? Some ideas are ahead of their time (VR in 2010) and some are behind (another social network in 2026).",
            "Do you have unique insight? What do you know about this problem that others don't?",
            "Is the market big enough? Your market needs the potential to grow large, even if it's small today.",
            "Can you acquire customers profitably? Understanding how you'll reach customers is as important as what you'll build.",
            "Are there strong moats possible? Some markets naturally create monopolies. Others remain perpetually competitive.",
            "Does this excite you? Startups are incredibly hard. If you're not genuinely excited, you'll quit when things get difficult.",
          ].map((q, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader>
                <CardDescription className="text-sm">
                  <span className="font-bold text-foreground">Q{i + 1}:</span> {q}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common Mistakes When Choosing Ideas</h2>
        <div className="space-y-3">
          {[
            { mistake: "Building what you want instead of what people need", fix: "Talk to real customers before building — polite interest isn't validation" },
            { mistake: "Optimizing for vanity metrics", fix: "Traffic and followers don't indicate real demand. Track willingness to pay." },
            { mistake: "Choosing ideas based on what's trendy", fix: "Building an AI wrapper around an existing API isn't a startup — it's a feature." },
            { mistake: "Avoiding competition", fix: "Competition validates markets. Google wasn't the first search engine. They won by being better." },
            { mistake: "Underestimating distribution", fix: "A great product without distribution is a tree falling in an empty forest." },
            { mistake: "Ignoring your own advantages", fix: "Your background, skills, and relationships are unfair advantages. Leverage them." },
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base text-destructive">Mistake: {item.mistake}</CardTitle>
                <CardDescription>Fix: {item.fix}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Real Examples</h2>
        <div className="space-y-4">
          {[
            { company: "Stripe", desc: "The Collison brothers were developers frustrated by how hard it was to accept payments online. They built a simple API — seven lines of code. They started by manually processing payments before the technology was ready." },
            { company: "DoorDash", desc: "Before building technology, the founders stood outside restaurants and observed delivery operations. They created a simple website, took orders over the phone, and hand-delivered food. They focused exclusively on Palo Alto to perfect operations." },
            { company: "Retool", desc: "The founders were tired of building internal tools from scratch. During investor meetings, they didn't use slides — they opened their laptop and built a simple app in minutes, demonstrating the product's value in real-time." },
            { company: "Segment", desc: "Started as a classroom analytics tool that didn't gain traction. They noticed their backend data infrastructure was more valuable than the frontend. They stripped out analytics and released just the data pipeline — within weeks, more traction than months of the original product." },
          ].map((item) => (
            <Card key={item.company} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">{item.company}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Action Items */}
      <Separator className="mb-8" />
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Action Items</h2>
        <div className="space-y-2">
          {[
            "Keep a frustration journal for 7 days — record every problem you encounter",
            "Talk to 5 people in different industries about their biggest frustrations",
            "Apply the 7 recipes to generate 20+ potential startup ideas",
            "For each idea, complete the 10-question evaluation framework",
            "Narrow to 3-5 ideas that score highest",
            "For your top 3 ideas, identify 10 potential customers each",
            "Conduct 5 customer discovery interviews per idea (15 total)",
            "Build a simple landing page for your top idea",
            "Make a go/no-go decision based on evidence, not feelings",
          ].map((item, i) => (
            <Card key={i} className="bg-card/50">
              <CardHeader>
                <CardDescription className="text-sm">☐ {item}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />
      <div className="text-center">
        <p className="text-muted-foreground mb-4">Next chapter:</p>
        <Link href="/playbook/validating-ideas" className="text-foreground underline underline-offset-4">
          Validating Your Idea →
        </Link>
      </div>
    </div>
  );
}
