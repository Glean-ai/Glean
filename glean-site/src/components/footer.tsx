import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-bold">
              Glean
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              RevOps skills for AI agents.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#skills"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#install"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Install
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/Glean-ai/Glean/blob/main/LICENSE"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  MIT License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Built for founders with zero customers.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Glean
          </p>
        </div>
      </div>
    </footer>
  );
}
