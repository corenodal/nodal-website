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
      className="py-10 md:py-14 px-6 md:px-20 bg-transparent relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="cta-content translate-y-8 opacity-0 bg-nodal-blue rounded-2xl p-10 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="w-full h-full border-[40px] border-white/20 rounded-full scale-150 -translate-y-1/2" />
          </div>

          <h3 className="text-3xl md:text-4xl font-semibold mb-4 relative z-10">
            Precision Intelligence for Clinical Care
          </h3>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 font-light relative z-10 leading-relaxed">
            Join the clinical pilot program and experience the next generation of administrative clarity.
          </p>
          <button className="px-8 py-3.5 bg-nodal-green text-white text-base font-semibold rounded-xl hover:brightness-105 transition-all relative z-10 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
};
