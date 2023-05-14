import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy-to-use.svg').default,
    description: (
      <>
        HydroLang is designed to be user-friendly and easy to use for web based systems, allowing researchers and educators to quickly get started with hydrological workflows.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
       HydroLang lets you focus on hydrology and water resources research and education by handling the technical details of data retrieval, manipulation, analysis, and visualization.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/img/flexibility-icon.svg').default,
    description: (
      <>
      Powerful and customizable framework for hydrological research and education. Its modular architecture and open-source nature allow for easy customization and enhancement to fit specific use cases.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
