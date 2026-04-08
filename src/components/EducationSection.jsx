import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

function EducationSection({ education }) {
  return (
    <section className="section section-muted" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader
          eyebrow={education.eyebrow}
          title={education.title}
          description={education.description}
          titleId="education-title"
        />
        <div className="education-grid">
          {education.entries.map((entry, index) => (
            <Reveal key={`${entry.institution}-${entry.degree}-${index}`} as="article" className="surface-card" delay={index * 90}>
              <h3>{entry.degree}</h3>
              <p className="card-kicker">{entry.institution}</p>
              <p className="card-subtle">{entry.dates}</p>
              <p>{entry.notes}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
