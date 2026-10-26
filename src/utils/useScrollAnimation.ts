import { useEffect } from 'react';

/**
 * Reveals every `.animate-on-scroll` element (and its variants) once it enters the viewport.
 * Respects prefers-reduced-motion by showing everything immediately.
 */
const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.animate-on-scroll');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      elements.forEach((el) => el.classList.add('show'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
