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

type InstallItem = {
  title: string;
  paths: string[];
  description: string;
};

const canonicalBootstrapSources = `Before doing anything else, fresh-read the latest live canonical bootstrap sources:
- https://vibegov.io/agent.txt
- https://vibegov.io/bootstrap.json
- https://vibegov.io/docs/bootstrap/

Treat those live sources as authoritative for this run. Do not rely on stale cached or earlier copied bootstrap text if it differs.`;

const installItems: InstallItem[] = [
  {
    title: 'Governance rules',
    paths: ['.governance/rules/'],
    description:
      'The active VibeGov rule set agents must follow, with provider-native mirrors only when the repo already uses them.',
  },
  {
    title: 'Project intent and specs',
    paths: [
      '.governance/project/PROJECT_INTENT.md',
      '.governance/specs/SPEC-001-...',
      'backlog mapped to spec sections',
    ],
    description:
      'Repo-local intent, feature or bootstrap setup specs, and backlog mapping that keep work tied to agreed scope.',
  },
  {
    title: 'Workflow entrypoints',
    paths: [
      'AGENTS.md',
      'INIT-TODO.md',
      '.github/pull_request_template.md',
      '.github/branch-protection-checklist.md',
    ],
    description:
      'Agent instructions, setup/remediation tracking, pull request expectations, branch protection checks, and issue-pickup flow.',
  },
  {
    title: 'Continuity guidance',
    paths: ['session diary', 'checkpoint triggers', 'promotion flow'],
    description:
      'A lightweight continuity model for decisions, blockers, phase changes, compaction risk, and handoff between agents.',
  },
  {
    title: 'Bootstrap reports',
    paths: [
      '.governance/project/bootstrap/STATUS.md',
      '.governance/project/bootstrap/ANALYSIS.md',
      '.governance/project/bootstrap/FEEDBACK.md',
      'history/<timestamp>/',
    ],
    description:
      'Current status, analysis, feedback, optional blockers, and historical run bundles that prove what changed.',
  },
];

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

function InstallSection() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>What VibeGov installs</h2>
          <p>
            VibeGov installs or normalizes a repo-local governance layer so
            humans and agents use the same sources of truth before coding.
          </p>
        </div>
        <div className={styles.installGrid}>
          {installItems.map((item) => (
            <article key={item.title} className={styles.installItem}>
              <h3>{item.title}</h3>
              <ul className={styles.pathList}>
                {item.paths.map((path) => (
                  <li key={path}>
                    <code>{path}</code>
                  </li>
                ))}
              </ul>
              <p>{item.description}</p>
            </article>
          ))}
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
        <InstallSection />
        <PromptSection />
        <FaqSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
