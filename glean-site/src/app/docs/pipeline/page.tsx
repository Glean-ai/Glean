import styles from "../docs.module.css";

export default function PipelineDoc() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Pipeline Management</h1>
      <p className={styles.text}>
        Your lead pipeline is stored in a local <code>leads.csv</code> file. This allows for 
        maximum privacy, easy auditing, and zero reliance on third-party CRMs.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>CSV Schema</h2>
        <div className={styles.codeBlock}>
          <code>id,name,title,company,industry,linkedin_url,x_handle,email,stage,score,source,platform,tags,notes,first_contact,last_followup,next_followup</code>
        </div>
        <p className={styles.text}>
          Every lead record contains fields for contact information, discovery context, 
          and pipeline progression.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Lead Stages</h2>
        <table className={styles.text} style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Stage</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.5rem' }}><code>discovered</code></td><td style={{ padding: '0.5rem' }}>Initial state when a lead is found.</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><code>contacted</code></td><td style={{ padding: '0.5rem' }}>First outreach has been sent.</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><code>replied</code></td><td style={{ padding: '0.5rem' }}>The lead has responded.</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><code>meeting_booked</code></td><td style={{ padding: '0.5rem' }}>Success! A meeting is scheduled.</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><code>converted</code></td><td style={{ padding: '0.5rem' }}>Lead turned into a customer.</td></tr>
            <tr><td style={{ padding: '0.5rem' }}><code>dead</code></td><td style={{ padding: '0.5rem' }}>Lead is no longer interested.</td></tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Visual Dashboard</h2>
        <p className={styles.text}>
          Glean automatically scaffolds a rich HTML dashboard for your leads. To view it, open the following file in your browser:
        </p>
        <div className={styles.codeBlock}>
          <code>./glean-data/pipeline.html</code>
        </div>
        <p className={styles.text}>
          This dashboard provides a modern interface to view your metrics, filter leads, and visit social profiles with one click.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pipeline Commands</h2>
        <div className={styles.codeBlock}>
          <code>"show my pipeline"</code> — Displays a summary of all leads.
        </div>
        <div className={styles.codeBlock}>
          <code>"update lead 5 to replied"</code> — Changes the stage of a specific lead.
        </div>
        <div className={styles.codeBlock}>
          <code>"show leads who replied"</code> — Filters the pipeline by stage.
        </div>
      </section>
    </div>
  );
}
