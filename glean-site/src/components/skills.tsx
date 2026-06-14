import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Settings,
  Search,
  Send,
  FileText,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const skills = [
  {
    name: "glean-setup",
    description: "Discover your business, write profile/audience/strategy.",
    trigger: 'setup glean',
    icon: Settings,
  },
  {
    name: "glean-find",
    description: "Find leads on LinkedIn, X, email, communities.",
    trigger: "find leads",
    icon: Search,
  },
  {
    name: "glean-reach",
    description: "Send connection requests, DMs, emails.",
    trigger: "send outreach",
    icon: Send,
  },
  {
    name: "glean-content",
    description: "Write posts, threads, articles.",
    trigger: "write content",
    icon: FileText,
  },
  {
    name: "glean-community",
    description: "Find and engage Reddit, HN, Discord.",
    trigger: "engage community",
    icon: Users,
  },
  {
    name: "glean-track",
    description: "Show pipeline status, follow-ups, conversion rates.",
    trigger: "pipeline",
    icon: BarChart3,
  },
  {
    name: "glean-review",
    description: "Analyze what's working, suggest strategy changes.",
    trigger: "review results",
    icon: TrendingUp,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-border/40">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">7 Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Each skill does ONE thing. Skills chain naturally. You're always in
          control.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <Card key={skill.name} className="bg-card/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-secondary">
                  <skill.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">{skill.name}</CardTitle>
              </div>
              <CardDescription>{skill.description}</CardDescription>
              <p className="text-xs text-muted-foreground mt-2">
                Trigger: <code className="text-accent-foreground">&quot;{skill.trigger}&quot;</code>
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
