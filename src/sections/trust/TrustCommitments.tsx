import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type } from '../../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const commitments = [
  { lead: 'A signed Business Associate Agreement', rest: 'before we process any protected health information.' },
  { lead: 'Plain-language documentation', rest: 'of our safeguards, available to your team on request.' },
  { lead: 'A named privacy and security contact', rest: 'you can reach directly during the pilot.' },
  { lead: 'Advance notice', rest: 'before any material change to the sub-processors that handle your data.' },
  { lead: 'Your data returned or securely destroyed', rest: 'when the pilot ends, with certification on request.' },
];

export const TrustCommitments = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cm-label', { opacity: 0, y: 10 }, {
        opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      });
      gsap.fromTo('.cm-heading', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
      });
      gsap.fromTo('.cm-row', { clipPath: 'inset(0 100% 0 0)' }, {
        clipPath: 'inset(0 0% 0 0)', duration: 0.9, stagger: 0.16, ease: 'power3.out',
        scrollTrigger: { trigger: '.cm-list', start: 'top 78%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-24 py-24 md:py-32 bg-nousna-blue relative z-10 overflow-hidden">
      {/* Decorative oversized background text */}
      <div
        aria-hidden
        className="absolute -left-4 bottom-0 text-white/[0.03] text-[22vw] md:text-[15vw] font-bold leading-none select-none pointer-events-none"
      >
        IN&nbsp;WRITING
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className={`cm-label opacity-0 ${type.ui} font-semibold text-nousna-green uppercase tracking-[0.25em] mb-3`}>
            What pilot partners can expect
          </p>
          <h2 className={`cm-heading opacity-0 ${type.heading} font-semibold text-white leading-tight`}>
            Commitments we put in <span className="text-nousna-green italic">writing</span>.
          </h2>
        </div>

        <div className="cm-list border-t border-white/10">
          {commitments.map((c, i) => (
            <div
              key={c.lead}
              className="cm-row border-b border-white/10 py-7 md:py-9 flex items-baseline gap-6 md:gap-12 group"
            >
              <span className={`${type.heading} font-bold text-white/10 leading-none flex-shrink-0 select-none group-hover:text-nousna-green/40 transition-colors duration-300`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className={`${type.subheading} text-white/70 font-light leading-snug group-hover:text-white transition-colors duration-300`}>
                <span className="font-semibold text-white">{c.lead}</span> {c.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
