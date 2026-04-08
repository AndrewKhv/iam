import { useEffect, useState } from 'react';

function ScrollToTopButton({ label }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`scroll-top-button${isVisible ? ' is-visible' : ''}`}
      onClick={handleClick}
      aria-label={label}
      tabIndex={isVisible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 5.5a.75.75 0 0 1 .53.22l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72V18a.75.75 0 0 1-1.5 0V8.06l-3.72 3.72a.75.75 0 1 1-1.06-1.06l5-5A.75.75 0 0 1 12 5.5Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}

export default ScrollToTopButton;
