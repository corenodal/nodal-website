import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Kill all ScrollTrigger instances from the previous page
    ScrollTrigger.getAll().forEach(t => t.kill());
    // Reset scroll position
    window.scrollTo(0, 0);
    // Refresh ScrollTrigger after new page mounts
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};
