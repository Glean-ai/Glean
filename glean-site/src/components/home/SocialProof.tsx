import styles from "./home.module.css";

export default function SocialProof() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Works With</h2>
      <div className={styles.socialStrip}>
        <div className={styles.socialIcon} title="LinkedIn">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </div>
        <div className={styles.socialIcon} title="X / Twitter">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
        <div className={styles.socialIcon} title="Gmail">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z" />
          </svg>
        </div>
        <div className={styles.socialIcon} title="Google Maps">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
      </div>
      <div className={styles.shieldStrip}>
        <img src="https://img.shields.io/github/stars/Glean-ai/Glean?style=flat&color=6B46C1" alt="GitHub stars" />
        <img src="https://img.shields.io/github/license/Glean-ai/Glean?style=flat&color=6B46C1" alt="License" />
        <img src="https://img.shields.io/github/last-commit/Glean-ai/Glean?style=flat&color=6B46C1" alt="Last commit" />
      </div>
    </section>
  );
}
