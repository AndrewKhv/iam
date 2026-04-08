import { useEffect, useState } from 'react';
import AboutSection from './components/AboutSection';
import AIExperienceSection from './components/AIExperienceSection';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HighlightsSection from './components/HighlightsSection';
import ProjectsSection from './components/ProjectsSection';
import ScrollToTopButton from './components/ScrollToTopButton';
import SkillsSection from './components/SkillsSection';
import TestimonialSection from './components/TestimonialSection';
import { getSiteContent } from './data/siteContent';
import { useActiveSection } from './hooks/useActiveSection';
import { DEFAULT_LOCALE, getLocaleFromPathname, getPathForLocale } from './lib/locale';

function App() {
  const [locale, setLocale] = useState(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_LOCALE;
    }

    return getLocaleFromPathname(window.location.pathname);
  });
  const siteContent = getSiteContent(locale);
  const activeSection = useActiveSection(siteContent.navigation.map((item) => item.id));

  useEffect(() => {
    const handlePopState = () => {
      setLocale(getLocaleFromPathname(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    document.title = `${siteContent.meta.fullName} | ${siteContent.meta.title}`;
    document.documentElement.lang = locale;
  }, [locale, siteContent.meta.fullName, siteContent.meta.title]);

  const handleLocaleChange = (nextLocale) => {
    const nextPath = getPathForLocale(nextLocale, {
      hash: window.location.hash,
      search: window.location.search,
    });
    const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (currentPath !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }

    setLocale(nextLocale);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {siteContent.ui.skipLink}
      </a>
      <div className="page-shell">
        <Header
          hero={siteContent.hero}
          meta={siteContent.meta}
          ui={siteContent.ui}
          navigation={siteContent.navigation}
          activeSection={activeSection}
          contact={siteContent.contact}
          locale={locale}
          onLocaleChange={handleLocaleChange}
        />
        <main id="main-content">
          <AboutSection about={siteContent.about} teaching={siteContent.teaching} />
          <HighlightsSection
            capabilities={siteContent.capabilities}
            strengths={siteContent.strengths}
            helpWith={siteContent.helpWith}
            impactMetrics={siteContent.impactMetrics}
            profile={siteContent.profileHighlights}
          />
          <SkillsSection section={siteContent.skillsSection} skills={siteContent.skills} />
          <AIExperienceSection aiExperience={siteContent.aiExperience} />
          <ExperienceSection experience={siteContent.experience} />
          <EducationSection education={siteContent.education} />
          <ProjectsSection projects={siteContent.projects} />
          {siteContent.testimonial?.quote ? (
            <TestimonialSection testimonial={siteContent.testimonial} />
          ) : null}
          <ContactSection contact={siteContent.contact} meta={siteContent.meta} />
        </main>
        <Footer footer={siteContent.footer} />
        <ScrollToTopButton label={siteContent.ui.scrollToTopLabel} />
      </div>
    </>
  );
}

export default App;
