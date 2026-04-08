import Reveal from './Reveal';

function HeroSection({ hero, meta, contact }) {
  const hasLinkedin = Boolean(contact.linkedin?.href);
  const hasCv = Boolean(meta.cvEnabled && meta.cvFile);

  return (
    <div className="container" id="top">
      <section className="hero" aria-labelledby="hero-title">
        <Reveal className="hero-copy">
          <p className="section-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">{hero.fullName}</h1>
          <p className="hero-role">{hero.title}</p>
          <div className="hero-mobile-glance surface-card">
            <p className="hero-mobile-glance__status">{meta.availability}</p>
            <p className="hero-mobile-glance__location">{meta.location}</p>
            <p className="hero-mobile-glance__summary">{meta.remotePreference}</p>
            <div className="portrait-card__focus">
              {hero.focusAreas.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <p className="hero-value">{hero.valueProposition}</p>
          <p className="hero-summary">{hero.summary}</p>
          <div className="cta-row">
            <a className="button button-primary" href="#contact">
              {hero.ctas.contact}
            </a>
            {hasLinkedin ? (
              <a
                className="button button-secondary"
                href={contact.linkedin.href}
                target="_blank"
                rel="noreferrer"
              >
                {hero.ctas.linkedin}
              </a>
            ) : null}
            {hasCv ? (
              <a
                className="button button-tertiary"
                href={meta.cvFile}
                download
              >
                {hero.ctas.cv}
              </a>
            ) : null}
          </div>
          <ul className="hero-strengths" aria-label={hero.strengthsAriaLabel}>
            {hero.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="hero-visual" delay={120}>
          <figure className="portrait-card">
            <div className="portrait-card__image-wrap">
              <img src={meta.photoSrc} alt={meta.photoAlt} className="portrait-card__image" />
              <div className="portrait-card__badge">
                <span>{meta.availability}</span>
              </div>
            </div>
            <figcaption className="portrait-card__caption">
              <div>
                <strong>{meta.location}</strong>
                <span>{meta.remotePreference}</span>
              </div>
              <div className="portrait-card__focus">
                {hero.focusAreas.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </section>
    </div>
  );
}

export default HeroSection;
