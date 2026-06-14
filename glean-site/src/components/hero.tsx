import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-4">
          v3.0 — 7 Skills
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          RevOps skills for AI agents
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          7 composable skills that turn your coding agent into a RevOps machine.
          Find customers, reach out, create content, track pipeline — all from
          your terminal.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg">
            <a href="/#install" className="flex items-center">
              Install Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <a
              href="https://github.com/Glean-ai/Glean"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Works with Claude Code, Cursor, Windsurf, Codex, and 67+ other agents.
        </p>
      </div>
    </section>
  );
}
