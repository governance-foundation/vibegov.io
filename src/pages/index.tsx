import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.lead}>
          Publish governance guidance one page at a time while keeping the site
          live and feedback-driven.
        </p>
        <div className={styles.actions}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read Docs
          </Link>
          <Link
            className="button button--outline button--lg"
            to="https://github.com/governance-foundation/vibegov.io/issues/new/choose">
            Suggest via Issue
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const quickStartPrompt = `Adopt VibeGov governance from https://governance-foundation.github.io/vibegov.io before any implementation.

Read:
- https://governance-foundation.github.io/vibegov.io/agent.txt
- https://governance-foundation.github.io/vibegov.io/bootstrap.json

Initialization contract:
1) Ensure \`.governance/\` exists with:
   - \`.governance/rules/\`
   - \`.governance/project/\`
   - \`.governance/specs/\`
2) Treat \`.governance/rules/*.mdc\` as governance-only constraints.
3) Treat \`.governance/specs/*\` as the only feature/change spec source.
4) If \`<provider-rules-path>/\` exists, sync \`.governance/rules/*.mdc\` into it.
5) Before coding, create:
   - \`.governance/project/PROJECT_INTENT.md\`
   - \`.governance/specs/SPEC-001-<feature>.md\`
   - backlog/tasks mapped to spec sections.
6) List active rule files before coding.

Execution gate:
- Do not start coding until initialization is complete and reported.

Completion report:
- summarize applied governance rules
- report validation evidence
- list ambiguity/conflicts/deviations`;

  return (
    <Layout
      title={siteConfig.title}
      description="Portable delivery judgement for AI-assisted software development.">
      <HomepageHeader />
      <main>
        <section className={styles.quickStart}>
          <div className="container">
            <h2>Quick Start Prompt</h2>
            <p>
              Copy this into your IDE agent to adopt VibeGov behavior quickly.
            </p>
            <pre className={styles.promptBlock}>
              <code>{quickStartPrompt}</code>
            </pre>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}



