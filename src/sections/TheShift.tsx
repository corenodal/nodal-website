import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const lines = [
  { num: '01', text: 'Clinical complexity is increasing.' },
  { num: '02', text: 'AI capabilities have reached a point where contextual, assistive systems are feasible.' },
  { num: '03', text: 'The cost of inaction is no longer abstract - it is measurable in access gaps and clinician attrition.' },
];

export const TheShift = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.shift-label',
        { opacity: 0, y: 10 },
        {
          opacity: 1, y: 0, duration: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );

      gsap.fromTo(
        '.shift-row',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.9,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        }
      );

      gsap.fromTo(
        '.shift-conclusion',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 45%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-24 bg-transparent relative z-10"
    >
      <div className="max-w-6xl w-full mx-auto">
        <p className={`shift-label opacity-0 ${type.ui} font-semibold text-nodal-violet uppercase tracking-[0.25em] mb-16`}>
          The shift we&apos;re responding to
        </p>

        {/* Large statement rows */}
        <div className="space-y-0 border-t border-slate-200">
          {lines.map((line) => (
            <div
              key={line.num}
              className="shift-row border-b border-slate-200 py-8 md:py-10 flex items-baseline gap-6 md:gap-10 group"
            >
              <span className={`${type.ui} font-semibold text-nodal-violet/40 tracking-widest flex-shrink-0 w-6`}>
                {line.num}
              </span>
              <p className={`${type.subheading} font-semibold text-nodal-blue leading-snug`}>
                {line.text}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion block */}
        <div className="shift-conclusion opacity-0 mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="w-8 h-0.5 bg-nodal-green mb-6" />
            <p className={`${type.subheading} text-nodal-graphite font-light leading-relaxed`}>
              Care is human.{' '}
              <span className="font-semibold text-nodal-blue">Systems should support it.</span>
            </p>
          </div>
          <p className={`${type.body} text-nodal-graphite-soft font-light leading-relaxed`}>
            We believe the next generation of healthcare infrastructure must reduce invisible strain,
            not add to it. That belief shapes every decision we make.
          </p>
        </div>
      </div>
    </section>
  );
};
