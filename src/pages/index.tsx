import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import {
  frontMatter as whatIsFrontMatter,
  metadata as whatIsMetadata,
} from '@site/docs/faq/what-is-vibegov.md';
import {
  frontMatter as bootstrapInitFrontMatter,
  metadata as bootstrapInitMetadata,
} from '@site/docs/faq/when-do-i-use-bootstrap-init.md';
import {
  frontMatter as bootstrapUpdateFrontMatter,
  metadata as bootstrapUpdateMetadata,
} from '@site/docs/faq/when-do-i-use-bootstrap-update.md';
import {
  frontMatter as feedbackFrontMatter,
  metadata as feedbackMetadata,
} from '@site/docs/faq/when-do-i-use-the-feedback-prompt.md';

import styles from './index.module.css';

type PromptCard = {
  title: string;
  description: string;
  prompt: string;
  href: string;
};

type FaqItem = {
  question: string;
  href: string;
  summary: string;
  homepage: boolean;
};

const promptCards: PromptCard[] = [
  {
    title: 'Bootstrap Init Prompt',
    description: 'Use this when a repo does not have VibeGov installed yet.',
    prompt: `Bootstrap this repo with VibeGov.\nRead and follow:\n- https://governance-foundation.github.io/vibegov.io/docs/bootstrap\n\nThen stop before product-code implementation.`,
    href: '/docs/bootstrap',
  },
  {
    title: 'Bootstrap Update Prompt',
    description: 'Use this when a repo already has some bootstrap state.',
    prompt: `Update this repo's VibeGov bootstrap state.\nRead and follow:\n- https://governance-foundation.github.io/vibegov.io/docs/bootstrap-update\n\nThen stop before product-code implementation.`,
    href: '/docs/bootstrap-update',
  },
  {
    title: 'Bootstrap Feedback Prompt',
    description:
      'Use this after bootstrap/init or bootstrap/update, then raise a scrubbed GitHub issue with the feedback.',
    prompt: `Review the bootstrap/setup process you just executed for this repo.\nRead and follow:\n- https://governance-foundation.github.io/vibegov.io/docs/bootstrap-feedback-prompt`,
    href: '/docs/bootstrap-feedback-prompt',
  },
];

const faqSource = [
  {
    frontMatter: whatIsFrontMatter,
    metadata: whatIsMetadata,
    summary:
      'VibeGov gives humans and AI coding agents a shared governance layer so software delivery is more traceable, reviewable, and honest about done.',
  },
  {
    frontMatter: bootstrapInitFrontMatter,
    metadata: bootstrapInitMetadata,
    summary:
      'Use bootstrap init for a repo that does not have VibeGov installed yet.',
  },
  {
    frontMatter: bootstrapUpdateFrontMatter,
    metadata: bootstrapUpdateMetadata,
    summary:
      'Use bootstrap update when a repo already has partial bootstrap state and needs repair or normalization.',
  },
  {
    frontMatter: feedbackFrontMatter,
    metadata: feedbackMetadata,
    summary:
      'Use the feedback prompt after bootstrap work, then raise a scrubbed GitHub issue with the result.',
  },
] as const;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.lead}>
          Bootstrap a repo with clear rules, specs, and workflow guidance so AI
          agents work in a more traceable, reviewable way.
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
            Keep the homepage short. Jump to the right bootstrap entrypoint and
            let the linked doc carry the detail.
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
  const faqItems = useMemo<FaqItem[]>(
    () =>
      faqSource
        .map(({frontMatter, metadata, summary}) => ({
          question: String(frontMatter.question ?? metadata.title),
          href: metadata.permalink,
          summary,
          homepage: Boolean(frontMatter.homepage),
        }))
        .filter((item) => item.homepage),
    [],
  );

  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>FAQ</h2>
          <p>
            FAQ items live as docs pages. Mark them for homepage surfacing and
            they appear here automatically.
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
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Governance for AI-assisted software delivery.">
      <HomepageHeader />
      <main>
        <PromptSection />
        <FaqSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
