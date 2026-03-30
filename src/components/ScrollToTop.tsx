import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NAVBAR_OFFSET = 90;

const scrollToHash = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
  return true;
};

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // First attempt for same-page navigation
      if (!scrollToHash(id)) {
        // Second attempt for cross-page — wait for sections to render
        setTimeout(() => scrollToHash(id), 400);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};
