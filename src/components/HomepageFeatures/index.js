import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Leader in Private AI',
    Svg: require('@site/static/img/ThewebAI.svg').default,
    description: (
      <>
        Humanity achieves brilliance through collective intelligence—not monolithic thinking. 
        webAI builds the digital infrastructure to empower millions of specialized AI models 
        to collaborate in real time, solving the world’s hardest problems.
      </>
    ),
  },
  {
    title: 'The Problem with AI Today',
    Svg: require('@site/static/img/TheProblemWithAI.svg').default,
    description: (
      <>
        The current AI landscape forces enterprises to choose between losing control to cloud providers, 
        or facing enormous costs and complexity going it alone. 
        <strong> webAI offers a third path: privacy, ownership, and scale. </strong>
      </>
    ),
  },
  {
    title: 'The webAI Solution',
    Svg: require('@site/static/img/ThewebAI.svg').default,
    description: (
      <>
        A vertically integrated, local-first AI platform that simplifies the entire lifecycle of AI—
        from model creation to deployment—with two powerful tools: 
        <strong> Navigator </strong> for development, and <strong> Companion </strong> for private, secure AI delivery.
      </>
    ),
  },
  {
    title: 'Private & Secure',
    Svg: require('@site/static/img/PrivateSecure.svg').default,
    description: (
      <>
        webAI runs entirely within your environment—no data leaves your premises. 
        Your data, your models, your rules. No vendor lock-in, no cloud surveillance.
      </>
    ),
  },
  {
    title: 'Cost-Efficient by Design',
    Svg: require('@site/static/img/Costeffective.svg').default,
    description: (
      <>
        Eliminate unpredictable cloud bills. Leverage your existing infrastructure to power 
        specialized AI at a fraction of the cost—at global scale.
      </>
    ),
  },
  {
    title: 'Specialized Intelligence',
    Svg: require('@site/static/img/SpecializedIntel.svg').default,
    description: (
      <>
        Build AI that genuinely understands your business. 
        Models are trained on your data, aligned with your needs, and embedded directly into workflows.
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
        <Heading as="h3">{title}</Heading>
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
        <div className="row margin-top--lg">
          <div className="col col--12 text--center">
        
          </div>
        </div>
      </div>
    </section>
  );
}