import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Setup",
    description:
      'Agent learns about your product, who you sell to, and picks channels. Say "setup glean" to start.',
  },
  {
    step: "2",
    title: "Find",
    description:
      'Agent searches LinkedIn, X, email for people matching your ideal customer. Say "find leads".',
  },
  {
    step: "3",
    title: "Reach",
    description:
      'Agent composes personalized messages, you approve before sending. Say "send outreach".',
  },
  {
    step: "4",
    title: "Track",
    description:
      'Agent shows your pipeline: who\'s contacted, who replied, who converted. Say "pipeline".',
  },
  {
    step: "5",
    title: "Review",
    description:
      'Agent analyzes results, suggests what to double down on or stop. Say "review results".',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 border-t border-border/40">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Setup → Find → Reach → Track → Review → Repeat
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={step.step} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold">
              {step.step}
            </div>
            <div className="flex-1">
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden md:block h-4 w-4 text-muted-foreground mt-4 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
