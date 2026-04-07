import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { type } from '../styles/typography';

/* ── Color maps for Tailwind purge ── */
const headColors: Record<string, string> = {
  'nodal-green': 'bg-nodal-green/70',
  'nodal-violet': 'bg-nodal-violet/70',
};
const bodyColors: Record<string, string> = {
  'nodal-green': 'bg-nodal-green/40',
  'nodal-violet': 'bg-nodal-violet/40',
};

/* ── Animated Person ── */
const Person = ({ size = 'md', delay = 0, color = 'nodal-green' }: { size?: 'sm' | 'md' | 'lg'; delay?: number; color?: string }) => {
  const dims = { sm: { head: 'w-4 h-4', body: 'w-6 h-8' }, md: { head: 'w-5 h-5', body: 'w-8 h-10' }, lg: { head: 'w-6 h-6', body: 'w-9 h-12' } };
  const d = dims[size];
  return (
    <div className="flex flex-col items-center animate-bounce" style={{ animationDelay: `${delay}s`, animationDuration: '2.5s' }}>
      <div className={`${d.head} rounded-full ${headColors[color] || headColors['nodal-green']}`} />
      <div className={`${d.body} rounded-t-lg rounded-b-xl ${bodyColors[color] || bodyColors['nodal-green']} mt-1`} />
    </div>
  );
};

/* ── People Illustrations ── */
const SoloPerson = () => (
  <div className="flex items-end justify-center h-28 md:h-36">
    <Person size="lg" color="nodal-green" />
  </div>
);

const GroupPeople = () => (
  <div className="flex items-end justify-center gap-3 md:gap-5 h-28 md:h-36">
    <Person size="md" delay={0.2} color="nodal-violet" />
    <Person size="lg" delay={0} color="nodal-green" />
    <Person size="md" delay={0.4} color="nodal-violet" />
    <Person size="sm" delay={0.6} color="nodal-green" />
  </div>
);

const features = [
  {
    title: "Solo Practitioners",
    bullets: [
      "Spend less time on notes and admin work",
      "Keep clear, complete records with less effort",
      "Reduce mental overload and rework",
    ],
    color: "nodal-green",
    visual: <SoloPerson />,
  },
  {
    title: "Group Practices",
    bullets: [
      "Keep documentation consistent across providers",
      "Reduce duplicate work across teams",
      "Improve visibility into patient care",
    ],
    color: "nodal-violet",
    visual: <GroupPeople />,
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
    <section id="features" className="py-12 md:py-16 px-6 md:px-24 bg-transparent relative z-10 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full" ref={containerRef}>
        <div className="text-center mb-10">
          <h2 className={`${type.heading} font-semibold text-nodal-blue`}>
            Built for Every Care Setting
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card translate-y-8 opacity-0 p-14 rounded-2xl bg-nodal-white border border-slate-100 transition-all hover:shadow-lg group ${feature.color === 'nodal-violet' ? 'hover:border-nodal-violet/30' : 'hover:border-nodal-green/30'}`}
              >
                <div className="mb-8">
                  {feature.visual}
                </div>
                <h3 className={`${type.subheading} font-semibold text-nodal-blue mb-5`}>{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className={`flex items-start gap-3 ${type.body} text-nodal-graphite leading-relaxed font-light`}>
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${feature.color === 'nodal-violet' ? 'bg-nodal-violet' : 'bg-nodal-green'}`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
