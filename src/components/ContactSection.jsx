import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6.75h16A1.25 1.25 0 0 1 21.25 8v8A1.25 1.25 0 0 1 20 17.25H4A1.25 1.25 0 0 1 2.75 16V8A1.25 1.25 0 0 1 4 6.75Zm0 1.5a.2.2 0 0 0-.12.04L12 13.95l8.12-5.66a.2.2 0 0 0-.12-.04H4Zm15.75 1.48-7.32 5.11a.75.75 0 0 1-.86 0L4.25 9.73V16c0 .14.11.25.25.25h15.5c.14 0 .25-.11.25-.25V9.73Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.94 8.56A1.56 1.56 0 1 0 6.94 5.44a1.56 1.56 0 0 0 0 3.12ZM5.7 9.94h2.48v8.36H5.7V9.94Zm4.06 0h2.38v1.14h.03c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.66 3 3.82v4.7h-2.48v-4.17c0-1-.02-2.28-1.4-2.28-1.4 0-1.62 1.09-1.62 2.21v4.24H9.76V9.94Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.25a8.75 8.75 0 0 0-2.77 17.05c.44.08.6-.19.6-.42v-1.63c-2.45.53-2.97-1.04-2.97-1.04-.4-1.02-.98-1.3-.98-1.3-.8-.55.06-.54.06-.54.89.06 1.36.91 1.36.91.78 1.35 2.06.96 2.56.73.08-.57.31-.96.56-1.18-1.95-.22-4-1-4-4.43 0-.98.35-1.78.92-2.41-.1-.22-.4-1.12.08-2.33 0 0 .75-.24 2.46.92a8.4 8.4 0 0 1 4.48 0c1.7-1.16 2.45-.92 2.45-.92.5 1.2.19 2.1.1 2.33.57.63.91 1.43.91 2.41 0 3.44-2.05 4.2-4.01 4.42.32.28.6.83.6 1.68v2.5c0 .24.16.52.61.42A8.75 8.75 0 0 0 12 3.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M19.78 5.38c.28-.11.54.14.45.44l-2.55 12.02c-.08.39-.52.56-.83.32l-3.87-2.99-1.98 1.9a.5.5 0 0 1-.85-.32l-.18-3.04 7.6-6.86c.22-.2-.05-.53-.3-.37l-9.39 5.92-3.4-1.12c-.4-.13-.42-.69-.04-.86L19.78 5.38Z"
        fill="currentColor"
      />
    </svg>
  );
}

const CONTACT_ICONS = {
  email: MailIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  telegram: TelegramIcon,
};

function getDisplayValue(id, label, href) {
  if (id === 'email') {
    return label;
  }

  return href.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function ContactSection({ contact, meta }) {
  const hasCv = Boolean(meta.cvEnabled && meta.cvFile);
  const links = [
    {
      id: 'email',
      label: contact.labels.email,
      value: getDisplayValue('email', contact.email.label, contact.email.href),
      href: contact.email.href,
      external: false,
    },
    contact.linkedin?.href
      ? {
          id: 'linkedin',
          label: contact.labels.linkedin,
          value: getDisplayValue('linkedin', contact.linkedin.label, contact.linkedin.href),
          href: contact.linkedin.href,
          external: true,
        }
      : null,
    contact.github?.href
      ? {
          id: 'github',
          label: contact.labels.github,
          value: getDisplayValue('github', contact.github.label, contact.github.href),
          href: contact.github.href,
          external: true,
        }
      : null,
    contact.telegram?.href
      ? {
          id: 'telegram',
          label: contact.labels.telegram,
          value: getDisplayValue('telegram', contact.telegram.label, contact.telegram.href),
          href: contact.telegram.href,
          external: true,
        }
      : null,
  ].filter(Boolean);

  return (
    <section className="section section-contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          eyebrow={contact.eyebrow}
          title={contact.title}
          titleId="contact-title"
        />
        <div className="contact-platforms" role="list" aria-label={contact.platformsAriaLabel}>
          {links.map((link, index) => {
            const Icon = CONTACT_ICONS[link.id];

            return (
              <Reveal
                key={link.id}
                as="a"
                className="contact-platform"
                delay={index * 80}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <span className="contact-platform__icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="contact-platform__meta">
                  <span className="contact-platform__label">{link.label}</span>
                  <span className="contact-platform__value">{link.value}</span>
                </span>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="contact-actions" delay={220}>
          <a
            className="button button-primary"
            href={contact.linkedin.href}
            target="_blank"
            rel="noreferrer"
          >
            {contact.actions.primary}
          </a>
          {hasCv ? (
            <a
              className="button button-secondary"
              href={meta.cvFile}
              download
            >
              {contact.actions.secondary}
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
