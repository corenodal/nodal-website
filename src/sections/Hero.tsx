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
        '.hero-bg-logo',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.5, delay: 0.1 }
      )
        .fromTo(
        '.hero-pill',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=1.0'
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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-24 pt-32 pb-20 z-10 text-center bg-nousna-white overflow-hidden"
    >
      {/* Background node logo — large, faint, slowly spinning */}
      <div
        className="hero-bg-logo absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        <svg
          className="w-[800px] h-[800px] md:w-[1400px] md:h-[1400px] animate-spin-slow"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z" fill="#1E3F57" />
          <path d="M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z" stroke="#5B8FB9" strokeWidth="1.5" strokeDasharray="4 6" />
        </svg>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Eyebrow pill */}
        <div
          className="hero-pill inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-nousna-green/5 border border-nousna-green/15 mb-10"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-nousna-green" />
          <span className={`${type.ui} font-medium text-nousna-green tracking-wide`}>
            Built for mental health practitioners
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-headline text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8 text-nousna-blue"
          style={{ opacity: 0 }}
        >
          The clinical workflow built around how you actually work.
        </h1>

        {/* Subtext */}
        <p
          className={`hero-subtext ${type.subheading} text-nousna-graphite font-light leading-relaxed mb-12 max-w-3xl mx-auto`}
          style={{ opacity: 0 }}
        >
          Nousna captures your sessions, writes your notes, and keeps everything about a patient in one place so you can stop carrying the work home.
        </p>

        {/* CTAs */}
        <div
          className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          style={{ opacity: 0 }}
        >
          <Link
            to="/demo-videos"
            className={`w-full sm:w-auto px-10 py-4 bg-nousna-violet text-white ${type.body} font-semibold rounded-xl hover:brightness-105 transition-all flex items-center justify-center group shadow-md hover:shadow-xl hover:-translate-y-0.5`}
          >
            See how it works
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Trust bar */}
        <div className="hero-trust" style={{ opacity: 0 }}>
          <p className="text-xs text-nousna-graphite-soft font-light tracking-wide">
            HIPAA aligned
            <span className="mx-2 text-nousna-graphite-soft/40">·</span>
            <Link
              to="/contact"
              className="underline decoration-nousna-graphite-soft/30 underline-offset-2 hover:text-nousna-blue transition-colors"
            >
              BAA available
            </Link>
            <span className="mx-2 text-nousna-graphite-soft/40">·</span>
            Your data is never used to train AI models
            <span className="mx-2 text-nousna-graphite-soft/40">·</span>
            You review every output before use
          </p>
        </div>
      </div>
    </section>
  );
};
