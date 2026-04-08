import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

function ProjectsSection({ projects }) {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          eyebrow={projects.eyebrow}
          title={projects.title}
          description={projects.description}
          titleId="projects-title"
        />
        <div className="projects-grid">
          {projects.entries.map((project, index) => (
            <Reveal key={project.title} as="article" className="project-card" delay={index * 80}>
              <div className="project-card__content">
                <p className="card-kicker">{project.kicker ?? projects.cardKicker}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="chip-list skill-chips">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              {project.primaryLink || project.secondaryLink ? (
                <div className="project-card__actions">
                  {[project.primaryLink, project.secondaryLink].filter(Boolean).map((link) => (
                    <a
                      key={`${project.title}-${link.label}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
