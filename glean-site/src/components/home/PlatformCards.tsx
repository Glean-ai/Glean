import Link from "next/link";
import styles from "./home.module.css";

const platforms = [
  {
    name: "LinkedIn",
    description: "Undetectable search and connection requests. Glean uses your real browser profile to extract profiles safely.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    description: "Find leads posting about specific pain points. Safe, human-like engagement that bypasses bot detection.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: "Email",
    description: "Discover verified work emails for your prospects. Send personalized outreach with follow-up tracking.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    name: "Google Maps",
    description: "Target local businesses by category and area. Extract NAP data and enriched website details.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function PlatformCards() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Platforms</h2>
      <div className={styles.grid2x2}>
        {platforms.map((p) => (
          <Link href="/platforms" key={p.name} className={styles.card}>
            <div className={styles.cardIcon}>{p.icon}</div>
            <h3 className={styles.cardTitle}>{p.name}</h3>
            <p className={styles.cardDescription}>{p.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
