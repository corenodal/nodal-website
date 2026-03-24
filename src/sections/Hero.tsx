import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export const Hero = ({ isLoading = false }: { isLoading?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
        .fromTo(
          ".hero-word",
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out' },
          "-=0.6"
        )
        .fromTo(
          subheadlineRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-28 pb-16 z-10 text-center"
    >
      <div className="w-full max-w-screen-xl">
        <div
          ref={headlineRef}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-nodal-violet/5 border border-nodal-violet/10 mb-8"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <span className="w-2 h-2 rounded-full bg-nodal-violet animate-pulse shadow-[0_0_10px_rgba(123,110,246,0.6)]" />
          <span className="text-xs font-semibold text-nodal-violet tracking-wider uppercase">
            Cognitive Medical Intelligence
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 text-nodal-blue">
          <div className="overflow-hidden">
            <span className="hero-word block" style={{ opacity: 0, transform: 'translateY(100%)' }}>Personalised AI Assistant </span>
          </div>
          <div className="overflow-hidden mt-2">
            <span className="hero-word block" style={{ opacity: 0, transform: 'translateY(100%)' }}>for Healthcare Professionals</span>
          </div>
        </h1>

        <p
          ref={subheadlineRef}
          className="text-lg md:text-xl text-nodal-graphite font-light leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          Nodal is an AI-powered system that centralizes insights, context, and follow-through - reducing cognitive fragmentation across care delivery so healthcare professionals can focus on patients

        </p>

        <div className="w-40 h-px bg-gradient-to-r from-transparent via-nodal-violet/30 to-transparent mx-auto mb-8" />

        <div ref={ctaRef} className="flex items-center justify-center" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-nodal-green text-white text-base font-semibold rounded-xl hover:brightness-105 transition-all flex items-center justify-center group shadow-md hover:shadow-xl hover:-translate-y-0.5">
            Request Access
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
