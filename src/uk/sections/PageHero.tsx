import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { type } from '../../styles/typography';

type Props = {
  isLoading?: boolean;
  eyebrow: string;
  lines: string[];
  lead: string;
  chips?: string[];
  aside?: ReactNode;
};

export const PageHero = ({ isLoading = false, eyebrow, lines, lead, chips, aside }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.ph-eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.25 })
        .fromTo('.ph-line', { y: '110%' }, { y: '0%', duration: 1.05, stagger: 0.1, ease: 'power4.out' }, '-=0.3')
        .fromTo('.ph-lead', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.6')
        .fromTo('.ph-chip', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, '-=0.5')
        .fromTo('.ph-aside', { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '-=0.8');
    }, containerRef);
    return () => ctx.revert();
  }, [isLoading]);

  return (
    <section ref={containerRef} className="relative px-6 md:px-24 pt-44 md:pt-56 pb-16 md:pb-24 z-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start gap-14 lg:gap-16">
        <div className="flex-1 min-w-0">
          <p className={`ph-eyebrow opacity-0 ${type.ui} font-semibold text-nousna-violet uppercase tracking-[0.25em] mb-6`}>
            {eyebrow}
          </p>
          <h1 className={`${type.display} font-semibold tracking-tight leading-[1.03] text-nousna-blue mb-8`}>
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.1em]">
                <span className={`ph-line block ${i === lines.length - 1 ? 'text-nousna-green' : ''}`}>{line}</span>
              </span>
            ))}
          </h1>
          <p className={`ph-lead opacity-0 ${type.body} text-nousna-graphite font-light leading-relaxed max-w-2xl`}>{lead}</p>
          {chips && (
            <ul className="flex flex-wrap gap-3 mt-9">
              {chips.map((chip) => (
                <li key={chip} className={`ph-chip opacity-0 ${type.ui} font-medium text-nousna-graphite bg-white border border-slate-200 rounded-full px-4 py-2`}>
                  {chip}
                </li>
              ))}
            </ul>
          )}
        </div>
        {aside && <div className="ph-aside opacity-0 w-full lg:w-[22rem] flex-shrink-0">{aside}</div>}
      </div>
    </section>
  );
};
