import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Network, ShieldCheck } from 'lucide-react';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    icon: Brain,
    iconClass: 'text-nodal-violet group-hover:text-white',
    wrapperClass: 'group-hover:bg-nodal-violet group-hover:border-transparent',
    title: 'Built Around Human Behavior',
    body: 'We design for how clinicians think, make decisions, and manage mental load.',
  },
  {
    icon: Network,
    iconClass: 'text-nodal-green group-hover:text-white',
    wrapperClass: 'group-hover:bg-nodal-green group-hover:border-transparent',
    title: 'Fixing the System, Not Adding Tools',
    body: 'The problem is not a lack of tools, it is too many disconnected ones. Nodal brings everything into one place.',
  },
  {
    icon: ShieldCheck,
    iconClass: 'text-nodal-blue group-hover:text-white',
    wrapperClass: 'group-hover:bg-nodal-blue group-hover:border-transparent',
    title: 'Keeping Clinicians in Control',
    body: 'Every output is reviewed and approved by clinicians. AI augments judgement, it does not replace it.',
  },
];

export const OurApproach = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.approach-heading',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );

      gsap.fromTo(
        '.approach-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 55%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-24 bg-transparent relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading row */}
        <div className="approach-heading opacity-0 flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className={`${type.ui} font-semibold text-nodal-violet uppercase tracking-[0.25em] mb-3`}>
              Our Approach
            </p>
            <h2 className={`${type.heading} font-semibold text-nodal-blue leading-tight`}>
              Designed around research, not convention.
            </h2>
          </div>
          <p className={`${type.body} text-nodal-graphite-soft font-light max-w-sm md:max-w-md leading-relaxed`}>
            Three foundations that distinguish how we build clinical infrastructure.
          </p>
        </div>

        {/* Manifesto list */}
        <div className="border-t border-slate-200">
          {principles.map((p, i) => (
            <div
              key={i}
              className="approach-item opacity-0 border-b border-slate-200 py-6 md:py-8 group grid grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Icon */}
              <div className="col-span-2 sm:col-span-1 shrink-0">
                <div className={`w-10 h-10 rounded-lg border border-slate-100 flex items-center justify-center transition-colors duration-300 ${p.wrapperClass}`}>
                  <p.icon className={`w-5 h-5 transition-colors duration-300 ${p.iconClass}`} />
                </div>
              </div>

              {/* Title */}
              <div className="col-span-10 sm:col-span-11 md:col-span-6 md:col-start-2">
                <h3 className={`${type.subheading} font-semibold text-nodal-blue leading-snug`}>
                  {p.title}
                </h3>
              </div>

              {/* Body */}
              <div className="col-span-12 md:col-span-5 md:col-start-8">
                <p className={`${type.body} text-nodal-graphite font-light leading-relaxed`}>
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
