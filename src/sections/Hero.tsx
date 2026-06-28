import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { type } from '../styles/typography';

export const Hero = ({ isLoading = false }: { isLoading?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-pill',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          '.hero-headline',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-subtext',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          '.hero-ctas',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          '.hero-trust',
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-24 pt-32 pb-20 z-10 text-center bg-nodal-white"
    >
      <div className="w-full max-w-4xl">
        {/* Eyebrow pill */}
        <div
          className="hero-pill inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-nodal-green/5 border border-nodal-green/15 mb-10"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-nodal-green" />
          <span className={`${type.ui} font-medium text-nodal-green tracking-wide`}>
            Built for mental health practitioners
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-headline text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8 text-nodal-blue"
          style={{ opacity: 0 }}
        >
          The clinical workflow built around how you actually work.
        </h1>

        {/* Subtext */}
        <p
          className={`hero-subtext ${type.subheading} text-nodal-graphite font-light leading-relaxed mb-12 max-w-3xl mx-auto`}
          style={{ opacity: 0 }}
        >
          Nodal captures your sessions, writes your notes, and keeps everything about a patient in one place — so you can stop carrying the work home.
        </p>

        {/* CTAs */}
        <div
          className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          style={{ opacity: 0 }}
        >
          <Link
            to="/demo-videos"
            className={`w-full sm:w-auto px-10 py-4 border-2 border-nodal-blue/20 text-nodal-blue ${type.body} font-semibold rounded-xl hover:border-nodal-blue/40 transition-all flex items-center justify-center group`}
          >
            See how it works
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Trust bar */}
        <div className="hero-trust" style={{ opacity: 0 }}>
          <p className="text-xs text-nodal-graphite-soft font-light tracking-wide">
            HIPAA aligned
            <span className="mx-2 text-nodal-graphite-soft/40">·</span>
            <Link
              to="/contact"
              className="underline decoration-nodal-graphite-soft/30 underline-offset-2 hover:text-nodal-blue transition-colors"
            >
              BAA available
            </Link>
            <span className="mx-2 text-nodal-graphite-soft/40">·</span>
            Your data is never used to train AI models
            <span className="mx-2 text-nodal-graphite-soft/40">·</span>
            Outputs reviewed by a clinician
          </p>
        </div>
      </div>
    </section>
  );
};
