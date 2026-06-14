"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function InstallSection() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx skills add Glean-ai/Glean");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-20 border-t border-border/40">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Install</h2>
        <p className="text-muted-foreground mb-8">
          One command. All 7 skills. Ready to go.
        </p>

        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">Quick Start</CardTitle>
            <CardDescription>
              Run this in your project directory:
            </CardDescription>
            <div className="mt-4 flex items-center gap-2 bg-secondary rounded-lg p-4">
              <code className="flex-1 text-sm font-mono">
                npx skills add Glean-ai/Glean
              </code>
              <Button
                variant="ghost"
                size="icon"
                onClick={copyCommand}
                className="h-8 w-8"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Then tell your agent: <code>&quot;setup glean&quot;</code>
            </p>
          </CardHeader>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">No SaaS</CardTitle>
              <CardDescription>Data stays local in your project</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">No API Keys</CardTitle>
              <CardDescription>Uses your browser via BrowserAct</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">You're in Control</CardTitle>
              <CardDescription>Every action gets your approval</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
