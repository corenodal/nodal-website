import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { type } from '../styles/typography';

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to('.cta-content', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-24 bg-nousna-white relative z-10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="cta-content translate-y-8 opacity-0">
          <h3 className={`${type.heading} font-semibold text-nousna-blue mb-6`}>
            We are onboarding our first research partners now.
          </h3>
          <p className={`${type.body} text-nousna-graphite font-light leading-relaxed mb-10 max-w-2xl mx-auto`}>
            We work closely with each practice to configure Nousna around how you document. Your feedback shapes what we build next.
          </p>
          <Link
            to="/contact"
            className={`inline-block px-10 py-4 bg-nousna-green text-white ${type.body} font-semibold rounded-xl hover:brightness-105 transition-all hover:-translate-y-0.5 shadow-md hover:shadow-xl`}
          >
            Request access →
          </Link>
          <p className="text-xs text-nousna-graphite-soft font-light tracking-wide mt-6">
            HIPAA aligned
            <span className="mx-2 text-nousna-graphite-soft/40">·</span>
            <Link
              to="/contact"
              className="underline decoration-nousna-graphite-soft/30 underline-offset-2 hover:text-nousna-blue transition-colors"
            >
              BAA available
            </Link>
            <span className="mx-2 text-nousna-graphite-soft/40">·</span>
            No commitment required
          </p>
        </div>
      </div>
    </section>
  );
};
