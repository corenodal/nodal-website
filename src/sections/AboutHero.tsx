import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const AboutHero = ({ isLoading = false }: { isLoading?: boolean }) => {
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
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-20 z-10"
    >
      {/* Main split row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 md:gap-0">
        {/* Left — Giant heading */}
        <div className="flex-1 max-w-3xl">
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-semibold tracking-tight leading-[1.02] text-nodal-blue">
            <div className="overflow-hidden">
              <span className="ah-line block">We exist</span>
            </div>
            <div className="overflow-hidden">
              <span className="ah-line block">to remove</span>
            </div>
            <div className="overflow-hidden">
              <span className="ah-line block text-nodal-violet">invisible</span>
            </div>
            <div className="overflow-hidden">
              <span className="ah-line block">strain.</span>
            </div>
          </h1>
        </div>

        {/* Right — stacked context blocks */}
        <div className="ah-right opacity-0 flex flex-col gap-8 max-w-xs">
          <div className="border-l-2 border-nodal-green pl-5">
            <p className="text-sm font-semibold text-nodal-graphite-soft uppercase tracking-widest mb-1">Mission</p>
            <p className="text-base text-nodal-graphite font-light leading-relaxed">
              Enable high-quality care to be delivered sustainably.
            </p>
          </div>
          <div className="border-l-2 border-nodal-violet/40 pl-5">
            <p className="text-sm font-semibold text-nodal-graphite-soft uppercase tracking-widest mb-1">Belief</p>
            <p className="text-base text-nodal-graphite font-light leading-relaxed">
              Healthcare cannot scale sustainably if systems demand more than they give back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};