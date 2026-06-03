"use client";

import { useState } from "react";
import styles from "./home.module.css";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const command = "npx skills add Glean-ai/Glean";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.hero}>
      <span className={styles.tagline}>The lead skill that actually finds people.</span>
      <h1 className={styles.title}>Glean</h1>
      <p className={styles.subtitle}>
        An AI agent skill pack that searches LinkedIn, X, Email, and Google Maps for your ideal prospects. 
        Track everything in a local CSV and automate outreach from your terminal.
      </p>
      
      <div className={styles.heroAction}>
        <div className={styles.heroCodeBlock}>
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
      </div>
    </section>
  );
}
