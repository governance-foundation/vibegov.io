import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Keep Intent Visible',
    description:
      'Tie work to project intent, specs, issues and acceptance criteria before implementation starts.',
    ctaLabel: 'Start Here',
    ctaTo: '/docs/start-here',
  },
  {
    title: 'Make Done Evidence-Based',
    description:
      'Close work with proof that matches the mode, from focused checks to release-ready validation.',
    ctaLabel: 'Evidence Guide',
    ctaTo: '/docs/mode-selection-and-evidence-closing',
  },
  {
    title: 'Carry Context Between Agents',
    description:
      'Keep repo-local guidance, continuity notes and traceability available for the next contributor.',
    ctaLabel: 'Continuity',
    ctaTo: '/docs/agent-continuity-bootstrap',
  },
];

function Feature({title, description, ctaLabel, ctaTo}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.card}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="button button--sm button--secondary" to={ctaTo}>
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <h2>Governed delivery outcomes</h2>
          <p>
            VibeGov gives teams a shared operating layer for AI-assisted
            software work: clear intent, honest completion evidence and durable
            context that survives handoffs.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
