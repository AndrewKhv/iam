import { useEffect, useState } from 'react';

export function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? '');
  const idsKey = ids.join('|');

  useEffect(() => {
    const elements = idsKey
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.55, 0.75],
        rootMargin: '-24% 0px -52% 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [idsKey]);

  return activeSection;
}
