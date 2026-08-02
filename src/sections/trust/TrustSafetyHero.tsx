import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ShieldCheck, Lock, BadgeCheck, Award } from 'lucide-react';
import { type } from '../../styles/typography';

const marks = [
  { icon: ShieldCheck, title: 'HIPAA Business Associate', status: 'Operational · BAA with every practice', inProgress: false },
  { icon: Lock, title: 'Encryption in transit & at rest', status: 'HIPAA-eligible cloud infrastructure', inProgress: false },
  { icon: BadgeCheck, title: 'SOC 2 Type II', status: 'In progress · roadmap', inProgress: true },
  { icon: Award, title: 'HITRUST', status: 'Targeted as we scale', inProgress: true },
];

export const TrustSafetyHero = ({ isLoading = false }: { isLoading?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.tsh-eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.25 })
        .fromTo('.tsh-line', { y: '110%' }, { y: '0%', duration: 1.05, stagger: 0.1, ease: 'power4.out' }, '-=0.3')
        .fromTo('.tsh-lead', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.6')
        .fromTo('.tsh-chip', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, '-=0.5')
        .fromTo('.tsh-panel', { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '-=0.9')
        .fromTo('.tsh-mark', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, '-=0.7');
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <section
      ref={containerRef}
      className="relative px-6 md:px-24 pt-40 md:pt-48 pb-20 md:pb-28 z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-16">
        {/* Left — headline */}
        <div className="flex-1 min-w-0">
          <p className={`tsh-eyebrow opacity-0 ${type.ui} font-semibold text-nousna-violet uppercase tracking-[0.25em] mb-6`}>
            Trust &amp; Safety at Nousna
          </p>

          <h1 className={`${type.display} font-semibold tracking-tight leading-[1.03] text-nousna-blue mb-8`}>
            <span className="block overflow-hidden"><span className="tsh-line block">Your patients tell you</span></span>
            <span className="block overflow-hidden"><span className="tsh-line block">what they tell</span></span>
            <span className="block overflow-hidden"><span className="tsh-line block text-nousna-green">no one else.</span></span>
          </h1>

          <p className={`tsh-lead opacity-0 ${type.body} text-nousna-graphite font-light leading-relaxed max-w-xl mb-9`}>
            We built Nousna to hold that trust as carefully as you do. Nousna is an AI documentation
            assistant for mental-health clinicians. We operate as a HIPAA business associate, protect
            your patients&rsquo; information at every step, and leave you as the author of every note.
          </p>

          <ul className="flex flex-wrap gap-3" aria-label="At a glance">
            {['HIPAA-aligned business associate', 'A BAA with every practice', 'United States research study'].map((chip) => (
              <li
                key={chip}
                className={`tsh-chip opacity-0 ${type.ui} font-medium text-nousna-graphite bg-white border border-slate-200 rounded-full px-4 py-2`}
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — assurance panel */}
        <div className="tsh-panel opacity-0 w-full lg:w-[22rem] flex-shrink-0">
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 pt-5 pb-4 border-b border-slate-100">
              <p className={`${type.ui} font-semibold text-nousna-graphite-soft uppercase tracking-[0.2em]`}>
                Assurance posture
              </p>
            </div>
            <div className="divide-y divide-slate-100">
              {marks.map((m) => (
                <div key={m.title} className="tsh-mark opacity-0 flex items-start gap-4 px-6 py-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      m.inProgress ? 'bg-nousna-violet/10 text-nousna-violet' : 'bg-nousna-green/10 text-nousna-green'
                    }`}
                  >
                    <m.icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <p className={`${type.content} font-semibold text-nousna-blue leading-snug mb-0.5`}>{m.title}</p>
                    <p
                      className={`text-xs font-medium uppercase tracking-wider ${
                        m.inProgress ? 'text-nousna-violet/80' : 'text-nousna-graphite-soft'
                      }`}
                    >
                      {m.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
