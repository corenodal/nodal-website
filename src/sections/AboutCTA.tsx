import { useEffect, useRef } from 'react';
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
      className="py-24 md:py-36 px-6 md:px-24 bg-nodal-violet relative overflow-hidden z-10"
    >
      {/* Decorative rings */}
      <div aria-hidden className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-[1px] border-white/10 pointer-events-none" />
      <div aria-hidden className="absolute -bottom-48 -right-24 w-[600px] h-[600px] rounded-full border-[1px] border-white/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Left-aligned headline */}
        <h2 className={`${type.display} font-bold text-white leading-[1.05] tracking-tight max-w-4xl mb-8`}>
          <div className="overflow-hidden">
            <span className="acta-line block" style={{ transform: 'translateY(110%)' }}>The future of healthcare</span>
          </div>
          <div className="overflow-hidden">
            <span className="acta-line block" style={{ transform: 'translateY(110%)' }}>
              requires infrastructure that
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="acta-line block text-nodal-green" style={{ transform: 'translateY(110%)' }}>
              supports presence.
            </span>
          </div>
        </h2>

        {/* Sub + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className={`acta-sub opacity-0 ${type.body} text-white/60 font-light max-w-sm leading-relaxed`}>
            Nodal is building that infrastructure. Join us as a pilot partner and help shape what comes next.
          </p>
          <a href="mailto:core.nodal@gmail.com" className={`acta-btn opacity-0 flex items-center gap-3 px-8 py-4 bg-white text-nodal-violet ${type.body} font-semibold rounded-xl hover:bg-nodal-green hover:text-white transition-all duration-300 group self-start`}>
            Join as a Pilot Partner
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
