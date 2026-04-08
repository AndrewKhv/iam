import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

function AboutSection({ about, teaching }) {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.description}
          titleId="about-title"
        />
        <div className="about-layout">
          <Reveal as="article" className="surface-card copy-card">
            <h3>{about.cardTitle}</h3>
            <p>{about.description}</p>
          </Reveal>
          <div className="stacked-card-list">
            <Reveal as="aside" className="surface-card" delay={90}>
              <h3>{about.strengthsTitle}</h3>
              <ul className="detail-list">
                {about.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="article" className="surface-card" delay={150}>
              <p className="card-kicker">{teaching.organization}</p>
              <h3>{teaching.role}</h3>
              <p>{teaching.summary}</p>
              {teaching.highlights?.length ? (
                <ul className="detail-list">
                  {teaching.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <div className="cta-row">
                <a
                  className="button button-secondary"
                  href={teaching.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {teaching.link.label}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
