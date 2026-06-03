"use client";

import { useState } from "react";
import styles from "./home.module.css";

export default function InstallSection() {
  const [copied, setCopied] = useState(false);
  const command = "npx skills add Glean-ai/Glean";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Get Started</h2>
      <div className={styles.installContainer}>
        <div className={styles.codeBlock}>
          <code>{command}</code>
          <button onClick={handleCopy} className={styles.copyBtn} title="Copy to clipboard">
            {copied ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
        <p className={styles.agentList}>
          Works with Claude Code, Codex, Cursor, opencode, Windsurf, and 67+ other agents.
        </p>
      </div>
    </section>
  );
}
