import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

type PromptCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
  prompt: string;
};

const promptCards: PromptCard[] = [
  {
    title: 'Bootstrap quickly',
    description:
      'Start from scratch with the shortest useful bootstrap prompt when you want VibeGov installed fast.',
    href: '/docs/bootstrap',
    cta: 'Open bootstrap doc',
    prompt: `Bootstrap this repo with VibeGov.\nRead agent.txt + bootstrap.json, install .governance/, create project intent + SPEC-001, install strict Git workflow, report GitHub board status, then stop before product code.`,
  },
  {
    title: 'Bootstrap + validate + update',
    description:
      'Use the stricter remediation-oriented prompt when you need the agent to repair weak bootstrap state instead of just describing it.',
    href: '/docs/bootstrap-prompt-template',
    cta: 'Open stricter prompt',
    prompt: `Bootstrap, validate, and finalize repo-local governance setup.\nCreate/update AGENTS.md and INIT-TODO.md, verify prerequisites early, normalize board/workflow state, report exact end state, then stop before implementation.`,
  },
  {
    title: 'Get bootstrap feedback',
    description:
      'After a fresh bootstrap or update run, ask the agent what VibeGov still underspecified so the next repo goes smoother.',
    href: '/docs/bootstrap-feedback-prompt',
    cta: 'Open feedback prompt',
    prompt: `Please review the bootstrap/setup process you just executed for this repo and tell me what VibeGov could do better.\nReturn the biggest problems, concrete improvements, and any exact wording/rules you recommend.`,
  },
];

const principles = [
  {
    title: 'Spec before implementation',
    body: 'Project intent, scoped specs, and tracked backlog state should exist before product changes start.',
  },
  {
    title: 'Quality scaffolding counts',
    body: 'Tests, docs, evidence, traceability, and delivery clarity are part of done, not optional garnish.',
  },
  {
    title: 'Governance should survive restarts',
    body: 'Bootstrap should leave durable repo-local artifacts so the next session or next agent can continue cleanly.',
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
          Publish governance guidance one page at a time while keeping the site
          live, portable, and feedback-driven.
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

function PromptCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Copyable prompt paths</h2>
          <p>
            Start simple, use the stricter remediation prompt when setup is weak,
            and ask for post-bootstrap feedback once the run is done.
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
              <Link className="button button--primary button--sm" to={card.href}>
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>What VibeGov is trying to enforce</h2>
          <p>
            The goal is not faster vague output. It is more durable, reviewable,
            and harder-to-game delivery behavior.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {principles.map((item) => (
            <article key={item.title} className={styles.featureCard}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
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
      description="Portable delivery judgement for AI-assisted software development.">
      <HomepageHeader />
      <main>
        <PromptCards />
        <PrinciplesSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
