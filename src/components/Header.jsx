import HeroSection from './HeroSection';
import NavBar from './NavBar';

function Header({ hero, meta, ui, navigation, activeSection, contact, locale, onLocaleChange }) {
  return (
    <header className="site-header">
      <NavBar
        items={navigation}
        activeSection={activeSection}
        brand={hero.fullName}
        ui={ui}
        locale={locale}
        onLocaleChange={onLocaleChange}
      />
      <HeroSection hero={hero} meta={meta} contact={contact} />
    </header>
  );
}

export default Header;
