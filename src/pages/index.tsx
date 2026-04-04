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
  prompt: string;
  href: string;
};

type FaqItem = {
  question: string;
  answer: string;
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
      'Use this after bootstrap/init or bootstrap/update to learn what VibeGov still underspecified.',
    prompt: `Review the bootstrap/setup process you just executed for this repo.\nRead and follow:\n- https://governance-foundation.github.io/vibegov.io/docs/bootstrap-feedback-prompt`,
    href: '/docs/bootstrap-feedback-prompt',
  },
];

const faqItems: FaqItem[] = [
  {
    question: 'What is VibeGov?',
    answer:
      'VibeGov gives AI coding agents clearer rules, specs, and workflow guidance so software work is more traceable, reviewable, and less hand-wavey.',
  },
  {
    question: 'When do I use bootstrap init?',
    answer:
      'Use bootstrap init when a repo does not have VibeGov installed yet and you want the agent to set up the initial governance structure.',
  },
  {
    question: 'When do I use bootstrap update?',
    answer:
      'Use bootstrap update when a repo already has some bootstrap state and you want the agent to repair, normalize, or tighten it instead of starting over.',
  },
  {
    question: 'When do I use the feedback prompt?',
    answer:
      'Use the feedback prompt after a bootstrap run when you want the agent to tell you what was underspecified, awkward, or missing so VibeGov can improve.',
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
              <Link className="button button--primary button--sm" to={card.href}>
                Open doc
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>FAQ</h2>
          <p>Short answers for the basic questions a human will ask first.</p>
        </div>
        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <article key={item.question} className={styles.faqItem}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
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
