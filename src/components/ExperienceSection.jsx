import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

function ExperienceSection({ experience }) {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          eyebrow={experience.eyebrow}
          title={experience.title}
          description={experience.description}
          titleId="experience-title"
        />
        <div className="timeline">
          {experience.entries.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.role}-${index}`} as="article" className="timeline-item" delay={index * 80}>
              <div className="timeline-item__meta">
                <span className="timeline-item__role">{entry.role}</span>
                <span className="timeline-item__company">{entry.company}</span>
                <span className="timeline-item__dates">{entry.dates}</span>
              </div>
              <div className="timeline-item__body surface-card">
                <p>{entry.summary}</p>
                <ul className="detail-list">
                  {entry.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
