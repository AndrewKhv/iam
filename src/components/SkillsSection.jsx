import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

function SkillsSection({ section, skills }) {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          titleId="skills-title"
        />
        <div className="skills-grid">
          {skills.map((category, index) => (
            <Reveal key={category.title} as="article" className="surface-card" delay={index * 80}>
              <h3>{category.title}</h3>
              <ul className="chip-list skill-chips">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
