import { Database, Clock, Fingerprint } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const MemorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.timeline()
            .to('.memory-text', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
            .to('.memory-list-item', { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, "-=0.4")
            .to('.memory-card', { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' }, "-=0.6");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="memory" className="py-24 px-6 md:px-24 bg-nodal-white relative z-10">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="memory-text translate-y-8 opacity-0">
              <h2 className="text-4xl md:text-5xl font-semibold text-nodal-blue mb-6">
                Continuous Context
              </h2>
              <p className="text-nodal-graphite text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-2xl">
                Nodal maintains a high-precision clinical memory, ensuring that every session is informed by previous encounters and longitudinal patient history.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { icon: Database, title: "Clinical Memory", desc: "Instantly recall details from previous patient interactions.", color: "text-nodal-violet", bg: "bg-nodal-violet/5 border-nodal-violet/20" },
                { icon: Clock, title: "Time Optimization", desc: "Surface relevant historical data exactly when it's needed.", color: "text-nodal-blue", bg: "bg-white border-slate-100" },
                { icon: Fingerprint, title: "Provider Logic", desc: "AI that adapts to your specific clinical style and reasoning.", color: "text-nodal-blue", bg: "bg-white border-slate-100" }
              ].map((item, id) => (
                <div key={id} className="memory-list-item -translate-x-8 opacity-0 flex items-start space-x-5">
                  <div className={`mt-1 p-3 rounded-xl border shadow-sm ${item.bg} ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-nodal-blue mb-1">{item.title}</h4>
                    <p className="text-lg text-nodal-graphite font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full mt-12 md:mt-0">
            <div className="memory-card scale-95 opacity-0 relative p-1.5 rounded-[2rem] bg-slate-200">
              <div className="bg-white rounded-[1.75rem] p-10 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-5">
                  <span className="text-sm font-bold text-nodal-violet uppercase tracking-widest flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-nodal-violet mr-3 animate-pulse" />
                    Active Context Engine
                  </span>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-nodal-green" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                </div>
                
                <div className="space-y-5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center px-5" />
                  ))}
                  <div className="h-28 rounded-xl bg-nodal-violet/5 border border-nodal-violet/20 p-5 border-dashed relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nodal-violet/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="w-2/3 h-2.5 bg-nodal-violet/30 rounded mb-3" />
                    <div className="w-full h-2.5 bg-nodal-violet/15 rounded mb-3" />
                    <div className="w-1/2 h-2.5 bg-nodal-violet/15 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
