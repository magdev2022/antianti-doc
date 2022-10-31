import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '使いやすいです',
    Svg: require('@site/static/img/easytouse.svg').default,
    description: (
      <>
        アプリは便利な UI を提供します。プロファイル、タスク、プロキシを簡単に管理できます。
      </>
    ),
  },
  {
    title: 'アカウント保護',
    Svg: require('@site/static/img/protect.svg').default,
    description: (
      <>
        このアプリは、Nike サイトのアンチボット検出からアカウントを保護します。
      </>
    ),
  },
  {
    title: '迅速かつ安定した購入',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        アプリはリクエストモードに基づいているため、速度は他のボットよりも高速です。
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
