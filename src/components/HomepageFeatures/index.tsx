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
    title: 'Traceable Delivery',
    description:
      'Keep intent, specs, issues, and evidence connected so work stays reviewable as it moves.',
    ctaLabel: 'Introduction',
    ctaTo: '/docs/intro',
  },
  {
    title: 'Honest Completion',
    description:
      'Treat done as proof-backed completion, not just generated output or partial review.',
    ctaLabel: 'Evidence Closing',
    ctaTo: '/docs/mode-selection-and-evidence-closing',
  },
  {
    title: 'Portable Governance',
    description:
      'Use `.governance/` as the canonical source and adapt it across tools and providers.',
    ctaLabel: 'Published Rules',
    ctaTo: '/docs/published/gov-01-instructions',
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
