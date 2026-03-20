import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to('.cta-content', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-24 bg-nodal-white relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="cta-content translate-y-8 opacity-0 bg-nodal-blue rounded-3xl p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="w-full h-full border-[40px] border-white/20 rounded-full scale-150 -translate-y-1/2" />
          </div>

          <h3 className="text-4xl md:text-5xl font-semibold mb-6 relative z-10">
            Precision Intelligence for Clinical Care
          </h3>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-light relative z-10 leading-relaxed">
            Join the clinical pilot program and experience the next generation of administrative clarity.
          </p>
          <button className="px-10 py-5 bg-nodal-green text-white text-lg font-semibold rounded-xl hover:brightness-105 transition-all relative z-10 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
};
