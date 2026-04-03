import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const questions = [
  'What would healthcare look like if systems reduced mental strain?',
  'What if documentation matched how clinicians actually think?',
  'What if technology worked quietly in the background?',
];

export const OurPerspective = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.persp-intro',
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
      gsap.fromTo(
        '.persp-q',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-0 bg-nodal-blue relative z-10 overflow-hidden"
    >
      {/* Decorative background text */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.03] text-[20vw] font-bold leading-none select-none pointer-events-none pr-8"
      >
        WHY
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-24 py-12 md:py-16">
        {/* Intro */}
        <div className="persp-intro opacity-0 mb-12 md:mb-14">
          <p className={`${type.ui} font-semibold text-nodal-green uppercase tracking-[0.25em] mb-3`}>
            Our Perspective
          </p>
          <h2 className={`${type.heading} font-semibold text-white leading-snug`}>
            We ask different questions.
          </h2>
        </div>

        {/* Questions */}
        <div className="space-y-0 border-t border-white/10">
          {questions.map((q, i) => (
            <div
              key={i}
              className="persp-q opacity-0 border-b border-white/10 py-8 md:py-10 group flex items-start gap-6 md:gap-10 cursor-default"
            >
              <span className={`${type.heading} font-bold text-white/10 leading-none flex-shrink-0 select-none group-hover:text-nodal-green/30 transition-colors duration-300`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className={`${type.subheading} font-semibold text-white/80 leading-snug pt-2 group-hover:text-white transition-colors duration-300`}>
                {q}
              </p>
            </div>
          ))}
        </div>

        <p className={`mt-14 ${type.body} text-white/60 font-medium text-right`}>
          Our work begins from these questions.
        </p>
      </div>
    </section>
  );
};
