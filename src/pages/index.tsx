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
    description: 'Use this when a repo does not have VibeGov installed yet.',
    prompt: `Run VibeGov bootstrap in mode: init.\n\n${canonicalBootstrapSources}\n\nThen stop before product-code implementation.`,
    href: '/docs/bootstrap',
  },
  {
    title: 'Bootstrap Update Prompt (BU)',
    description: 'Use this when a repo already has some bootstrap state.',
    prompt: `Run VibeGov bootstrap in mode: update.\n\n${canonicalBootstrapSources}\n\nThen stop before product-code implementation.`,
    href: '/docs/bootstrap-update',
  },
  {
    title: 'Bootstrap Feedback Prompt (BF)',
    description:
      'Use this after bootstrap/init or bootstrap/update, then raise a scrubbed GitHub issue with the feedback.',
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

const audienceItems = [
  'Teams using AI coding agents on real repositories.',
  'Solo developers who want agent speed without losing traceability.',
  'Technical founders and consultants managing multiple AI-assisted delivery threads.',
  'Maintainers who want issue, spec, and evidence discipline without heavyweight process tooling.',
  'Teams building agent harnesses that need repo-local operating rules.',
];

const poorFitItems = [
  'Throwaway scripts with no maintenance horizon.',
  'Teams that do not want evidence before completion claims.',
  'Projects that do not care about traceability or long-term change safety.',
  'Users looking for a hosted SaaS or magical autonomous runtime.',
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.lead}>
          VibeGov helps you set up shared project rules so your team and the AI
          tools you use can work in a more organized, reviewable way.
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

function AudienceSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Who VibeGov is for</h2>
          <p>
            VibeGov is for people using AI-assisted delivery where intent,
            evidence, and traceability need to survive beyond the current chat.
          </p>
        </div>
        <div className={styles.fitGrid}>
          <article className={styles.fitPanel}>
            <h3>Good fit</h3>
            <ul>
              {audienceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className={styles.fitPanel}>
            <h3>Probably overkill</h3>
            <ul>
              {poorFitItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
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
            Choose the bootstrap path that matches your repo state. Copy the
            prompt, then open the linked doc for the full contract.
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
      description="Clearer goals, better proof and fewer loose ends for your AI-assisted software projects.">
      <HomepageHeader />
      <main>
        <AudienceSection />
        <PromptSection />
        <FaqSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
