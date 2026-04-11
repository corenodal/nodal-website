import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { type } from '../styles/typography';

export const FeaturesHero = ({ isLoading = false }: { isLoading?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.fh-line',
        { y: '110%' },
        { y: '0%', duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.3 }
      ).fromTo(
        '.fh-sub',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.6'
      ).fromTo(
        '.fh-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.7'
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-24 pt-32 pb-20 z-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h1 className={`${type.display} font-semibold tracking-tight leading-[1.02] text-nodal-blue mb-10`}>
          <div className="overflow-hidden pb-2">
            <span className="fh-line block text-nodal-violet">Everything You Need</span>
          </div>
          <div className="overflow-hidden pb-2">
            <span className="fh-line block">for Patient Care</span>
          </div>
        </h1>

        <p
          className={`fh-sub ${type.subheading} text-nodal-graphite font-light leading-relaxed max-w-3xl`}
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          Our key features help clinicians organize information and decisions into their daily workflow.
        </p>

        <div className="fh-cta mt-10 flex" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <Link
            to="/demo-videos"
            className={`px-10 py-5 bg-nodal-green text-white ${type.body} font-semibold rounded-xl hover:brightness-105 transition-all flex items-center justify-center group shadow-md hover:shadow-xl hover:-translate-y-0.5`}
          >
            Demo Videos
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};