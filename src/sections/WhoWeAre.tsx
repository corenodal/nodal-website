import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    tag: 'Behavioral Science',
    desc: 'We root every design decision in how humans actually think and make decisions under pressure.',
  },
  {
    tag: 'Systems Design',
    desc: 'We design for the whole, not for isolated tasks. Infrastructure thinking over feature thinking.',
  },
  {
    tag: 'Healthcare Technology',
    desc: 'We build alongside clinicians, not for an imagined version of them.',
  },
];

export const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.who-left',
        { opacity: 0, x: -24 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      );
      gsap.fromTo(
        '.who-pillar',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="py-16 md:py-20 px-6 md:px-24 bg-transparent relative z-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Left — heading + statement */}
        <div className="who-left opacity-0">
          <p className="text-xs font-semibold text-nodal-violet uppercase tracking-[0.25em] mb-5">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-nodal-blue leading-tight mb-8">
            Built by people<br />who understand<br />the problem.
          </h2>
          <p className="text-xl text-nodal-graphite font-light leading-relaxed max-w-sm mb-10">
            We work directly with clinicians at every stage. Our solutions reflect real-world
            practice, not theoretical models or optimistic assumptions.
          </p>
          <div className="inline-flex items-center gap-2.5 border border-nodal-green/30 bg-nodal-green/5 rounded-full px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-nodal-green animate-pulse" />
            <span className="text-xs font-semibold text-nodal-graphite tracking-wide">
              Currently in pilot, onboarding partners
            </span>
          </div>
        </div>

        {/* Right — 3 discipline pillars */}
        <div className="flex flex-col gap-0 border-t border-slate-200">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="who-pillar opacity-0 border-b border-slate-200 py-8 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-nodal-green group-hover:scale-150 transition-transform" />
                <span className="text-base font-semibold text-nodal-blue tracking-wide">
                  {p.tag}
                </span>
              </div>
              <p className="text-base text-nodal-graphite font-light leading-relaxed pl-5">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
