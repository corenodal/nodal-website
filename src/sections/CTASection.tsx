import { useEffect, useRef } from 'react';
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
      className="py-12 md:py-16 px-6 md:px-24 bg-transparent relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="cta-content translate-y-8 opacity-0 p-16 text-center relative overflow-hidden">
          <h3 className={`${type.heading} font-semibold text-nodal-blue mb-6 relative z-10`}>
            The Simpler Way to Manage Care
          </h3>
          <p className={`${type.subheading} text-nodal-graphite max-w-3xl mx-auto mb-10 font-light relative z-10 leading-relaxed`}>
            Join our pilot program to experience a simpler, clearer way to manage clinical work.
          </p>
          <a href="mailto:core.nodal@gmail.com" className={`px-10 py-5 bg-nodal-green text-white ${type.body} font-semibold rounded-xl hover:brightness-105 transition-all relative z-10 hover:-translate-y-0.5`}>
            Request Access
          </a>
        </div>
      </div>
    </section>
  );
};
