import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { type } from '../styles/typography';

export type AboutHeroCopy = {
  lines: string[];
  accentLine: number;
  blocks: { label: string; text: string }[];
};

const usCopy: AboutHeroCopy = {
  lines: ['We exist', 'to remove', 'invisible', 'strain.'],
  accentLine: 2,
  blocks: [
    { label: 'Mission', text: 'Help clinicians deliver high-quality care in a way that is sustainable.' },
    { label: 'Belief', text: 'Healthcare cannot scale sustainably if systems demand more than they give back.' },
    { label: 'Approach', text: 'We design around how clinicians think, not how systems were built.' },
  ],
};

const blockBorders = ['border-nousna-green', 'border-nousna-violet/40', 'border-nousna-blue/30'];

export const AboutHero = ({ isLoading = false, copy = usCopy }: { isLoading?: boolean; copy?: AboutHeroCopy }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.ah-line', { y: '110%' }, { y: '0%', duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.3 })
        .fromTo('.ah-right', { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '-=0.9');
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-24 pt-32 pb-20 z-10"
    >
      {/* Main split row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 md:gap-16 max-w-5xl mx-auto w-full">
        {/* Left — Giant heading */}
        <div className="flex-1 max-w-3xl">
          <h1 className={`${type.display} font-semibold tracking-tight leading-[1.02] text-nousna-blue`}>
            {copy.lines.map((line, i) => (
              <div key={line} className="overflow-hidden">
                <span className={`ah-line block ${i === copy.accentLine ? 'text-nousna-violet' : ''}`}>{line}</span>
              </div>
            ))}
          </h1>
        </div>

        {/* Right — stacked context blocks */}
        <div className="ah-right opacity-0 flex flex-col gap-8 max-w-xs">
          {copy.blocks.map((block, i) => (
            <div key={block.label} className={`border-l-2 pl-5 ${blockBorders[i % blockBorders.length]}`}>
              <p className={`${type.ui} font-semibold text-nousna-graphite-soft uppercase tracking-widest mb-1`}>{block.label}</p>
              <p className={`${type.body} text-nousna-graphite font-light leading-relaxed`}>{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};