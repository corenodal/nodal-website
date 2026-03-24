import { Mic, CheckSquare, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const features = [
  {
    icon: Mic,
    title: "Solo Practitioners",
    bullets: [
      "Reduces time spent on documentation, follow-ups, and record-keeping.",
      "Improves clarity and completeness of clinical records with less effort.",
      "Minimizes mental overload and reduces the need to revisit sessions later.",
    ],
    color: "nodal-green"
  },
  {
    icon: CheckSquare,
    title: "Group Practices",
    bullets: [
      "Improves consistency in actionable insights across providers.",
      "Reduces duplicated administrative effort across teams.",
      "Enhances visibility into patient care without adding oversight friction.",
    ],
    color: "nodal-green"
  },
  {
    icon: Zap,
    title: "Healthcare Organizations",
    bullets: [
      "Strengthens consistency of clinical data across departments.",
      "Reduces system-wide inefficiencies tied to administrative processes.",
      "Supports scale by lowering burden while maintaining accountability and compliance readiness.",
    ],
    color: "nodal-violet"
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
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-10 md:py-14 px-6 md:px-20 bg-transparent relative z-10 flex items-center">
      <div className="max-w-6xl mx-auto w-full" ref={containerRef}>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-nodal-blue">
            Workflow Support Across Care Settings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card translate-y-8 opacity-0 p-8 md:p-10 rounded-2xl bg-nodal-white border border-slate-100 transition-all hover:shadow-lg group ${feature.color === 'nodal-violet' ? 'hover:border-nodal-violet/30 outline-nodal-violet' : 'hover:border-nodal-green/30 outline-nodal-green'}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 border border-slate-100 shadow-sm transition-all ${feature.color === 'nodal-violet' ? 'group-hover:bg-nodal-violet' : 'group-hover:bg-nodal-green'} group-hover:text-white`}>
                <feature.icon className={`w-6 h-6 transition-colors ${feature.color === 'nodal-violet' ? 'text-nodal-violet group-hover:text-white' : 'text-nodal-green group-hover:text-white'}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-nodal-blue mb-4">{feature.title}</h3>
              <ul className="space-y-2.5">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-nodal-graphite leading-relaxed font-light">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${feature.color === 'nodal-violet' ? 'bg-nodal-violet' : 'bg-nodal-green'}`} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
