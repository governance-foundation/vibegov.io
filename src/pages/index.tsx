import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {getHomepageFaqItems} from '@site/src/data/homepageFaq';

import styles from './index.module.css';

type PromptCard = {
  title: string;
  description: string;
  prompt: string;
  href: string;
};

const canonicalBootstrapSources = `Before doing anything else, fresh-read the latest live canonical bootstrap sources:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json
- https://vibegov.io/docs/bootstrap/

Treat those live sources as authoritative for this run. Do not rely on stale cached or earlier copied bootstrap text if it differs.`;

const promptCards: PromptCard[] = [
  {
    title: 'Bootstrap Init Prompt (BI)',
    description:
      'Install the governance contract before agents begin product-code implementation.',
    prompt: `Run VibeGov bootstrap in mode: init.\n\n${canonicalBootstrapSources}\n\nThen stop before product-code implementation.`,
    href: '/docs/bootstrap',
  },
  {
    title: 'Bootstrap Update Prompt (BU)',
    description:
      'Repair or normalize existing bootstrap state so the repo follows the current contract.',
    prompt: `Run VibeGov bootstrap in mode: update.\n\n${canonicalBootstrapSources}\n\nThen stop before product-code implementation.`,
    href: '/docs/bootstrap-update',
  },
  {
    title: 'Bootstrap Feedback Prompt (BF)',
    description:
      'Turn bootstrap findings into a scrubbed GitHub issue without exposing private project detail.',
    prompt: `Before reviewing bootstrap feedback, fresh-read the latest live canonical bootstrap sources:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json
- https://vibegov.io/docs/bootstrap/

Treat those live sources as authoritative for this feedback run. Do not rely on stale cached or earlier copied bootstrap text if it differs.

Then read and follow:
- https://vibegov.io/docs/bootstrap-feedback-prompt`,
    href: '/docs/bootstrap-feedback-prompt',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.lead}>
          VibeGov installs repo-local governance so humans and AI coding agents
          share intent, specs, workflow rules, evidence gates, blocker handling,
          and traceable delivery state before implementation starts.
        </p>
        <div className={styles.actions}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
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

function PromptSection() {
  const [copiedTitle, setCopiedTitle] = useState<string | null>(null);

  async function handleCopy(card: PromptCard) {
    await navigator.clipboard.writeText(card.prompt);
    setCopiedTitle(card.title);
    window.setTimeout(() => setCopiedTitle((current) => (current === card.title ? null : current)), 1500);
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Quick paths</h2>
          <p>
            Choose the entry point that matches your repo state. Copy the prompt,
            then open the linked doc for the full contract agents must follow
            before product-code implementation.
          </p>
        </div>
        <div className={styles.cardGrid}>
          {promptCards.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <pre className={styles.codeBlock}>
                <code>{card.prompt}</code>
              </pre>
              <div className={styles.cardActions}>
                <Link className="button button--primary button--sm" to={card.href}>
                  Open doc
                </Link>
                <button
                  type="button"
                  className={clsx('button button--secondary button--sm', styles.copyButton)}
                  onClick={() => void handleCopy(card)}>
                  {copiedTitle === card.title ? 'Copied' : 'Copy prompt'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqItems = useMemo(() => getHomepageFaqItems(), []);

  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>FAQ</h2>
          <p>
            Short answers to common adoption questions. Each item links to a
            fuller doc page.
          </p>
        </div>
        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <article key={item.question} className={styles.faqItem}>
              <h3>
                <Link to={item.href}>{item.question}</Link>
              </h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="VibeGov"
      description="Stop AI coding agents from drifting by installing repo-local governance before product-code implementation.">
      <HomepageHeader />
      <main>
        <PromptSection />
        <FaqSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
