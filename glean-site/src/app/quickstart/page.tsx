import styles from "./quickstart.module.css";

const icpQuestions = [
  { q: "Role", d: "Target job titles (e.g., Founder, CTO)" },
  { q: "Industry", d: "Target sectors (e.g., Fintech, AI)" },
  { q: "Company Size", d: "Employee count range (e.g., 10-50)" },
  { q: "Stage", d: "Funding status (e.g., Seed, Series A)" },
  { q: "Location", d: "Geographic focus (e.g., US, Europe)" },
  { q: "Keywords", d: "Profile or bio keywords" },
  { q: "Angle", d: "Your unique value proposition" },
  { q: "Exclusions", d: "Who to avoid (e.g., agencies)" },
  { q: "Instructions", d: "Specific agent behavior rules" }
];

export default function QuickstartPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quickstart Guide</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Prerequisites</h2>
        <p className={styles.text}>Before installing Glean, ensure you have the following tools available on your system:</p>
        <ul className={styles.text} style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
          <li><strong>Node.js</strong> — Required to run the <code>npx skills</code> command.</li>
          <li><strong>BrowserAct CLI</strong> — Auto-installed by the agent, or manual install via <code>uv</code>.</li>
          <li><strong>Google Chrome</strong> — For browser automation (remote debugging mode).</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Installation</h2>
        <p className={styles.text}>Add the Glean skill pack to your AI agent with a single command:</p>
        <div className={styles.codeBlock}>
          <span className={styles.codeLabel}>Terminal</span>
          <code>npx skills add Glean-ai/Glean</code>
        </div>
        <p className={styles.text}>Verify the installation by asking your agent to <strong>"list installed skills"</strong>. You should see <code>glean</code>, <code>linkedin-outreach</code>, and others.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>First Run</h2>
        <div className={styles.step}>
          <h3 className={styles.stepTitle}>1. Initialize Setup</h3>
          <p className={styles.text}>Open your AI agent and type the following command to begin the onboarding process:</p>
          <div className={styles.codeBlock}>
            <span className={styles.codeLabel}>Agent Chat</span>
            <code>"setup glean"</code>
          </div>
        </div>

        <div className={styles.step}>
          <h3 className={styles.stepTitle}>2. Define Your ICP</h3>
          <p className={styles.text}>The agent will guide you through 9 questions to build your Ideal Customer Profile (ICP). This ensures every lead found matches your target criteria.</p>
          <ul className={styles.icpList}>
            {icpQuestions.map((item) => (
              <li key={item.q} className={styles.icpItem}>
                <span className={styles.icpQ}>{item.q}</span>
                <span className={styles.icpD}>{item.d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.step}>
          <h3 className={styles.stepTitle}>3. Automated Scaffolding</h3>
          <p className={styles.text}>Once complete, the agent will create a <code>./glean-data/</code> directory in your project root with the following structure:</p>
          <div className={styles.codeBlock}>
            <pre className={styles.tree}>
{`./glean-data/
├── data/
│   └── leads.csv
└── icp/
    └── ideal-customer-profile.md`}
            </pre>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Next Steps</h2>
        <p className={styles.text}>You're ready to start building your pipeline. Try your first discovery command:</p>
        <div className={styles.codeBlock}>
          <span className={styles.codeLabel}>Agent Chat</span>
          <code>"find 10 leads on LinkedIn"</code>
        </div>
      </section>
    </div>
  );
}
