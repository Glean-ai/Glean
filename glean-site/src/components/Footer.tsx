import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a
            href="https://github.com/Glean-ai/Glean"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://github.com/Glean-ai/Glean/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            License (MIT)
          </a>
        </div>
        <div className={styles.links}>
          <Link href="/docs" className={styles.link}>
            Docs
          </Link>
          <Link href="/blog" className={styles.link}>
            Blog
          </Link>
          <Link href="/docs/pipeline" className={styles.link}>
            Pipeline
          </Link>
          <Link href="/docs/icp" className={styles.link}>
            ICP
          </Link>
        </div>
      </div>
    </footer>
  );
}
