import { Mic, CheckSquare, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const features = [
  {
    icon: Mic,
    title: "Real-Time Intelligence",
    description: "Nodal operates as a seamless layer over your existing clinical workflow, providing high-precision support without disruption.",
    color: "nodal-green"
  },
  {
    icon: CheckSquare,
    title: "Task Coordination",
    description: "Follow-up actions are prepared automatically—referrals, lab orders, and prescription updates based on clinical context.",
    color: "nodal-green"
  },
  {
    icon: Zap,
    title: "Clinical Memory",
    description: "Surface longitudinal patterns and subtle patient data exactly when they are needed most for decision support.",
    color: "nodal-violet" // Neural Violet for AI Intelligence
  },
];

export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to('.feature-card', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 px-6 md:px-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-nodal-blue mb-6">
            Intelligence without Interruption
          </h2>
          <p className="text-xl md:text-2xl text-nodal-graphite-soft max-w-3xl mx-auto font-light leading-relaxed">
            Every feature is designed to reduce cognitive friction and allow providers to focus on the patient, not the documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card translate-y-8 opacity-0 p-10 rounded-2xl bg-nodal-white border border-slate-100 transition-all hover:shadow-lg group ${feature.color === 'nodal-violet' ? 'hover:border-nodal-violet/30 outline-nodal-violet' : 'hover:border-nodal-green/30 outline-nodal-green'}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-8 border border-slate-100 shadow-sm transition-all ${feature.color === 'nodal-violet' ? 'group-hover:bg-nodal-violet' : 'group-hover:bg-nodal-green'} group-hover:text-white`}>
                <feature.icon className={`w-7 h-7 transition-colors ${feature.color === 'nodal-violet' ? 'text-nodal-violet group-hover:text-white' : 'text-nodal-green group-hover:text-white'}`} />
              </div>
              <h3 className="text-2xl font-semibold text-nodal-blue mb-4">{feature.title}</h3>
              <p className="text-lg text-nodal-graphite leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
