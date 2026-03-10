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
    title: 'Publish Increments',
    description:
      'Release one governance page at a time while keeping a public, stable site online.',
    ctaLabel: 'Start Here',
    ctaTo: '/docs/intro',
  },
  {
    title: 'Collect Signal Early',
    description:
      'Every page has a feedback path to GitHub Issues so ambiguity gets resolved in public.',
    ctaLabel: 'Contribute',
    ctaTo: '/docs/contribute',
  },
  {
    title: 'Build Durable Guidance',
    description:
      'Keep governance directional and reusable, while project-specific details evolve separately.',
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

