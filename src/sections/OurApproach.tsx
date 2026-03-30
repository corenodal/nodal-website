import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Network, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    num: '01',
    icon: Brain,
    iconClass: 'text-nodal-violet group-hover:text-white',
    wrapperClass: 'group-hover:bg-nodal-violet group-hover:border-transparent',
    title: 'Behavioral Science Foundation',
    body: "We design around research on cognitive load, decision fatigue, and structured thinking, not around what's technically possible. Workflows are reshaped to match how clinicians actually reason.",
  },
  {
    num: '02',
    icon: Network,
    iconClass: 'text-nodal-green group-hover:text-white',
    wrapperClass: 'group-hover:bg-nodal-green group-hover:border-transparent',
    title: 'Systems Thinking',
    body: "The problem isn't individual tools. It's fragmented infrastructure. Nodal acts as a single clinical node, collapsing the number of places clinicians must hold attention simultaneously.",
  },
  {
    num: '03',
    icon: ShieldCheck,
    iconClass: 'text-nodal-blue group-hover:text-white',
    wrapperClass: 'group-hover:bg-nodal-blue group-hover:border-transparent',
    title: 'Clinical Accountability',
    body: 'Every output requires clinician review. Oversight is not a compliance checkbox. It is structural. AI amplifies judgment; it does not replace it.',
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
            <p className="text-xs font-semibold text-nodal-violet uppercase tracking-[0.25em] mb-3">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-nodal-blue leading-tight">
              Designed around research,<br className="hidden md:block" /> not convention.
            </h2>
          </div>
          <p className="text-sm text-nodal-graphite-soft font-light max-w-xs leading-relaxed">
            Three foundations that distinguish how we build clinical infrastructure.
          </p>
        </div>

        {/* Manifesto list */}
        <div className="border-t border-slate-200">
          {principles.map((p, i) => (
            <div
              key={i}
              className="approach-item opacity-0 border-b border-slate-200 py-6 md:py-8 group grid grid-cols-12 gap-6 md:gap-10 items-start"
            >
              {/* Number */}
              <div className="col-span-1">
                <span className="text-xs font-semibold text-nodal-graphite-soft/50 tracking-widest">
                  {p.num}
                </span>
              </div>

              {/* Icon */}
              <div className="col-span-2 md:col-span-1">
                <div className={`w-10 h-10 rounded-lg border border-slate-100 flex items-center justify-center transition-colors duration-300 ${p.wrapperClass}`}>
                  <p.icon className={`w-5 h-5 transition-colors duration-300 ${p.iconClass}`} />
                </div>
              </div>

              {/* Title */}
              <div className="col-span-9 md:col-span-4">
                <h3 className="text-xl md:text-2xl font-semibold text-nodal-blue leading-snug">
                  {p.title}
                </h3>
              </div>

              {/* Body */}
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <p className="text-base text-nodal-graphite font-light leading-relaxed">
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
