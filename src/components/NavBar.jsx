import { SUPPORTED_LOCALES } from '../lib/locale';

function NavBar({ items, activeSection, brand, ui, locale, onLocaleChange }) {
  return (
    <div className="topbar-wrap">
      <div className="container">
        <div className="topbar">
          <a className="brand-mark" href="#top">
            <span className="brand-mark__dot" aria-hidden="true" />
            <span>{brand}</span>
          </a>
          <div className="topbar__controls">
            <nav className="site-nav" aria-label={ui.navAriaLabel}>
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'is-active' : ''}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="locale-switcher" role="group" aria-label={ui.languageSwitcherLabel}>
              {SUPPORTED_LOCALES.map((languageCode) => (
                <button
                  key={languageCode}
                  type="button"
                  className={`locale-switcher__button${locale === languageCode ? ' is-active' : ''}`}
                  aria-pressed={locale === languageCode}
                  onClick={() => onLocaleChange(languageCode)}
                >
                  {ui.languages[languageCode]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
