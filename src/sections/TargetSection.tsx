import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Color maps for Tailwind purge ── */
const headColors: Record<string, string> = {
  'nodal-green': 'bg-nodal-green/70',
  'nodal-violet': 'bg-nodal-violet/70',
  'nodal-blue': 'bg-nodal-blue/70',
};
const bodyColors: Record<string, string> = {
  'nodal-green': 'bg-nodal-green/40',
  'nodal-violet': 'bg-nodal-violet/40',
  'nodal-blue': 'bg-nodal-blue/40',
};
const accentBar: Record<string, string> = {
  'nodal-green': 'bg-nodal-green',
  'nodal-violet': 'bg-nodal-violet',
  'nodal-blue': 'bg-nodal-blue',
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
  <div className="flex items-end justify-center h-32 md:h-40">
    <Person size="lg" color="nodal-green" />
  </div>
);

const GroupPeople = () => (
  <div className="flex items-end justify-center gap-3 md:gap-5 h-32 md:h-40">
    <Person size="md" delay={0.2} color="nodal-violet" />
    <Person size="lg" delay={0} color="nodal-green" />
    <Person size="md" delay={0.4} color="nodal-violet" />
    <Person size="sm" delay={0.6} color="nodal-green" />
  </div>
);

const OrgPeople = () => (
  <div className="flex flex-col items-center justify-end gap-2 h-32 md:h-40">
    {/* Back row */}
    <div className="flex items-end gap-2 md:gap-3">
      <Person size="sm" delay={0.5} color="nodal-violet" />
      <Person size="sm" delay={0.3} color="nodal-green" />
      <Person size="sm" delay={0.7} color="nodal-violet" />
      <Person size="sm" delay={0.1} color="nodal-green" />
      <Person size="sm" delay={0.9} color="nodal-violet" />
    </div>
    {/* Front row */}
    <div className="flex items-end gap-3 md:gap-4">
      <Person size="md" delay={0.2} color="nodal-green" />
      <Person size="lg" delay={0} color="nodal-violet" />
      <Person size="md" delay={0.4} color="nodal-green" />
      <Person size="lg" delay={0.6} color="nodal-violet" />
      <Person size="md" delay={0.8} color="nodal-green" />
    </div>
  </div>
);

const cards = [
  {
    title: 'Solo Practitioners',
    desc: 'Streamlined workflows built for independent clinicians managing every aspect of patient care.',
    visual: <SoloPerson />,
    accent: 'nodal-green',
  },
  {
    title: 'Group Practices',
    desc: 'Shared intelligence and coordinated task management across multi-provider teams.',
    visual: <GroupPeople />,
    accent: 'nodal-violet',
  },
  {
    title: 'Healthcare Organizations',
    desc: 'Enterprise-grade infrastructure that scales clinical decision support across departments.',
    visual: <OrgPeople />,
    accent: 'nodal-blue',
  },
];

export const TargetSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade in
      gsap.to('.target-heading', {
        scrollTrigger: {
          trigger: '.target-heading',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Cards slide up and overlap with scroll
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 120, opacity: 0 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              end: 'top 65%',
              scrub: 0.3,
            },
            y: 0,
            opacity: 1,
            ease: 'power2.out',
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="target"
      ref={sectionRef}
      className="py-10 md:py-14 px-6 md:px-20 bg-transparent relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="target-heading translate-y-8 opacity-0 text-3xl md:text-4xl font-semibold text-nodal-blue mb-10 max-w-3xl">
          Designed for the realities of modern care delivery.
        </h2>

        {/* Overlapping Cards */}
        <div className="relative space-y-[-3rem] md:space-y-[-4rem]">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={el => { cardsRef.current[i] = el; }}
              className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-10 transition-shadow hover:shadow-2xl"
              style={{
                zIndex: i + 1,
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Text */}
                <div className="flex-1 order-2 md:order-1">
                  <div className={`w-10 h-1 rounded-full ${accentBar[card.accent] || accentBar['nodal-green']} mb-3`} />
                  <h3 className="text-xl md:text-2xl font-bold text-nodal-blue mb-2">
                    {card.title}
                  </h3>
                  <p className="text-base md:text-lg text-nodal-graphite font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Illustration */}
                <div className="flex-shrink-0 order-1 md:order-2 w-40 md:w-48">
                  {card.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
