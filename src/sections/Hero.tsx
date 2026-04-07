import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { type } from '../styles/typography';

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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-24 pt-32 pb-20 z-10 text-center"
    >
      <div className="w-full max-w-screen-2xl">
        <div
          ref={headlineRef}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-nodal-violet/5 border border-nodal-violet/10 mb-10"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-nodal-violet animate-pulse shadow-[0_0_10px_rgba(123,110,246,0.6)]" />
          <span className={`${type.ui} font-semibold text-nodal-violet tracking-wider`}>
            Less Admin. More Care.
          </span>
        </div>

        <h1 className={`${type.display} font-semibold tracking-tight leading-[1.1] mb-10 text-nodal-blue`}>
          <div className="overflow-hidden">
            <span className="hero-word block" style={{ opacity: 0, transform: 'translateY(100%)' }}>Personalised AI Assistant </span>
          </div>
          <div className="overflow-hidden mt-3">
            <span className="hero-word block" style={{ opacity: 0, transform: 'translateY(100%)' }}>for Mental Health Professionals</span>
          </div>
        </h1>

        <p
          ref={subheadlineRef}
          className={`${type.subheading} text-nodal-graphite font-light leading-relaxed mb-14 max-w-3xl mx-auto`}
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          Nodal is an AI system that brings everything about a patient into one place, including insights, context, and next steps, so healthcare professionals can focus on care instead of coordination.

        </p>

        {/* Decorative Line as requested by user */}
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-nodal-violet/30 to-transparent mx-auto mb-10" />

        <div ref={ctaRef} className="flex items-center justify-center" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <a href="mailto:core.nodal@gmail.com" className={`w-full sm:w-auto px-10 py-5 bg-nodal-green text-white ${type.body} font-semibold rounded-xl hover:brightness-105 transition-all flex items-center justify-center group shadow-md hover:shadow-xl hover:-translate-y-0.5`}>
            Request Access
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
