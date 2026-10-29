import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // On non-home pages, turn "#section" links (Navbar, Footer, logo) into "/#section"
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (pathname === '/') return; // home page: normal in-page anchors work
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = (e.target as HTMLElement).closest('a');
      const href = link?.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const id = href.replace(/^#+/, ''); // also cleans up "##how-it-works"
      if (!id || id === '!') return;

      e.preventDefault();
      navigate(`/#${id}`);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [pathname, navigate]);

  // Scroll to the section after navigating (or to the top on a normal page change)
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace(/^#+/, '');
    let tries = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else if (tries++ < 20) timer = setTimeout(tryScroll, 50); // wait for Index to mount
    };

    tryScroll();
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;