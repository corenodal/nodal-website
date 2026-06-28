import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { type } from '../styles/typography';

export const AboutCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
          tl.fromTo('.acta-line', { y: '110%' }, { y: '0%', duration: 1, stagger: 0.1 })
            .fromTo('.acta-sub', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
            .fromTo('.acta-btn', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 px-6 md:px-24 bg-nodal-white relative overflow-hidden z-10"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Left-aligned headline */}
        <h2 className={`${type.display} font-semibold text-nodal-blue leading-[1.02] tracking-tight max-w-4xl mb-8`}>
          <div className="overflow-hidden">
            <span className="acta-line block" style={{ transform: 'translateY(110%)' }}>The future of healthcare</span>
          </div>
          <div className="overflow-hidden">
            <span className="acta-line block" style={{ transform: 'translateY(110%)' }}>needs systems that support</span>
          </div>
          <div className="overflow-hidden">
            <span className="acta-line block text-nodal-violet" style={{ transform: 'translateY(110%)' }}>focus and presence.</span>
          </div>
        </h2>

        <p className={`acta-sub opacity-0 ${type.body} text-nodal-graphite font-light max-w-sm leading-relaxed mb-10`}>
          Nodal is building that infrastructure. Join us as a pilot partner and help shape what comes next.
        </p>

        <Link to="/contact" className={`acta-btn opacity-0 inline-flex items-center gap-3 px-8 py-4 bg-nodal-green text-white ${type.body} font-semibold rounded-xl hover:brightness-105 transition-all duration-300 group shadow-md hover:shadow-xl`}>
          Join the pilot →
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
