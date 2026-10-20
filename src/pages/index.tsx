import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

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
    title: 'Start with VibeGov',
    description:
      'Give your coding agents a clear starting point.',
    prompt: `Run VibeGov bootstrap in mode: init.\n\n${canonicalBootstrapSources}\n\nThen stop before product-code implementation.`,
    href: '/docs/bootstrap',
  },
  {
    title: 'Update your setup',
    description:
      'Bring an existing VibeGov project up to date.',
    prompt: `Run VibeGov bootstrap in mode: update.\n\n${canonicalBootstrapSources}\n\nThen stop before product-code implementation.`,
    href: '/docs/bootstrap-update',
  },
  {
    title: 'Share feedback',
    description:
      'Help improve VibeGov after trying it.',
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
          Keep your AI agents focused and turn their work into results you can
          trust. VibeGov handles the delivery details so you can keep moving.
        </p>
        <div className={styles.actions}>
          <Link className="button button--secondary button--lg" to="#quick-paths">
            Get started
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/what-your-agent-adopts">
            How it works
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
    <section id="quick-paths" aria-labelledby="quick-paths-title" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 id="quick-paths-title">Quick paths</h2>
          <p>
            Pick your next step. Copy a prompt into your coding agent, or open
            the guide for a walkthrough.
          </p>
        </div>
        <div className={styles.cardGrid}>
          {promptCards.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <details className={styles.promptDetails}>
                <summary>View agent prompt</summary>
                <pre className={styles.codeBlock}>
                  <code>{card.prompt}</code>
                </pre>
              </details>
              <div className={styles.cardActions}>
                <Link className="button button--secondary button--sm" to={card.href}>
                  Read guide
                </Link>
                <button
                  type="button"
                  className={clsx('button button--primary button--sm', styles.copyButton)}
                  onClick={() => void handleCopy(card)}
                  aria-label={`Copy prompt: ${card.title}`}>
                  {copiedTitle === card.title ? 'Copied' : 'Copy prompt'}
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.detailsLink}>
          Curious about the details? <Link to="/docs/what-your-agent-adopts">See what your agent adopts</Link>.
          For more options, <Link to="/docs/choose-your-path">Choose Your Path</Link>.
        </p>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section aria-labelledby="audience-title" className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 id="audience-title">Who VibeGov is for</h2>
          <p>
            For solo developers and teams using AI agents to build real software.
            Keep work focused, handoffs clear and progress easy to trust.
          </p>
        </div>
        <Link to="/docs/what-your-agent-adopts#who-vibegov-is-for">See if it fits your project</Link>
      </div>
    </section>
  );
}

function WorkedExampleSection() {
  return (
    <section aria-labelledby="example-title" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 id="example-title">Governed delivery in practice</h2>
          <p>Turn a vague request into work you can review and trust.</p>
        </div>
        <div className={styles.exampleGrid}>
          <article className={styles.examplePanel}>
            <span className={styles.exampleLabel}>Before VibeGov</span>
            <h3>&quot;Add Google login.&quot;</h3>
            <p>The agent starts coding. Scope and proof come later.</p>
          </article>
          <article className={styles.examplePanel}>
            <span className={styles.exampleLabel}>With VibeGov</span>
            <h3>A clear plan. A result you can check.</h3>
            <ol>
              <li>Agree what a good result looks like.</li>
              <li>Give the agent a focused task.</li>
              <li>Review the evidence before calling it done.</li>
            </ol>
          </article>
        </div>
        <p className={styles.detailsLink}>
          <Link to="/docs/what-your-agent-adopts#governed-delivery-in-practice">Walk through the full example</Link>.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqItems = [
    {question: 'What does VibeGov do?', summary: 'It helps your coding agents stay focused, finish work with proof and hand over cleanly.', href: '/docs/faq/what-is-vibegov'},
    {question: 'Will it work with my AI tools?', summary: 'Yes. Use it with agents and IDEs that read project instructions.', href: '/docs/faq/do-i-need-a-specific-ai-provider'},
    {question: 'Can I use it in an existing project?', summary: 'Yes. Choose “Update your setup” to keep what works and fill the gaps.', href: '/docs/faq/can-i-use-vibegov-in-an-existing-repo'},
  ];

  return (
    <section aria-labelledby="faq-title" className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 id="faq-title">FAQ</h2>
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
      description="Keep your AI coding agents focused and turn their work into results you can trust.">
      <HomepageHeader />
      <main>
        <PromptSection />
        <AudienceSection />
        <WorkedExampleSection />
        <FaqSection />
      </main>
    </Layout>
  );
}
