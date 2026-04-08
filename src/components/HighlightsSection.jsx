import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

function HighlightsSection({ capabilities, strengths, helpWith, impactMetrics, profile }) {
  return (
    <section className="section section-muted" id="capabilities" aria-labelledby="capabilities-title">
      <div className="container">
        <SectionHeader
          eyebrow={capabilities.eyebrow}
          title={capabilities.title}
          titleId="capabilities-title"
        />
        <div className="metrics-grid">
          {impactMetrics.map((metric, index) => (
            <Reveal key={metric.label} className="metric-card" delay={index * 60}>
              <span className="metric-card__value">{metric.value}</span>
              <span className="metric-card__label">{metric.label}</span>
            </Reveal>
          ))}
        </div>

        <div className="capabilities-grid">
          <Reveal as="article" className="surface-card" delay={60}>
            <h3>{capabilities.strengthsTitle}</h3>
            <div className="surface-card-list">
              {strengths.map((item) => (
                <article key={item.title} className="mini-card">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="surface-card" delay={120}>
            <h3>{capabilities.helpTitle}</h3>
            <ul className="surface-card-list surface-card-list--compact">
              {helpWith.map((item) => (
                <li key={item} className="mini-card mini-card--compact">
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="aside" className="surface-card" delay={180}>
            <h3>{profile.title}</h3>
            <dl className="surface-card-list surface-card-list--compact profile-card-list">
              {profile.items.map((item) => (
                <div key={item.label} className="mini-card mini-card--compact">
                  <dt className="mini-card__eyebrow">{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;
