import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

function AIExperienceSection({ aiExperience }) {
  return (
    <section className="section section-muted" id="ai-experience" aria-labelledby="ai-experience-title">
      <div className="container">
        <SectionHeader
          eyebrow={aiExperience.eyebrow}
          title={aiExperience.title}
          description={aiExperience.intro}
          titleId="ai-experience-title"
        />
        <div className="ai-grid">
          <Reveal as="article" className="surface-card copy-card">
            <h3>{aiExperience.usageTitle}</h3>
            <ul className="detail-list">
              {aiExperience.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <div className="stacked-card-list">
            {aiExperience.workflowAreas.map((area, index) => (
              <Reveal key={area.title} as="article" className="surface-card" delay={index * 80}>
                <h3>{area.title}</h3>
                <ul className="detail-list">
                  {area.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIExperienceSection;
