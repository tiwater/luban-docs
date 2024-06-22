import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Build your own robots in a visual way."
    >
      <div className={styles.heroBanner}>
        <img src="/img/logo.png" alt="Fourier Logo" className="hero__logo" />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/category/getting-started"
          >
            Getting Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/concepts"
          >
            Watch Video
          </Link>
        </div>
      </div>
    </Layout>
  );
}
