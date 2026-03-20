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
  <div className="flex items-end justify-center h-40 md:h-48">
    <Person size="lg" color="nodal-green" />
  </div>
);

const GroupPeople = () => (
  <div className="flex items-end justify-center gap-4 md:gap-6 h-40 md:h-48">
    <Person size="md" delay={0.2} color="nodal-violet" />
    <Person size="lg" delay={0} color="nodal-green" />
    <Person size="md" delay={0.4} color="nodal-violet" />
    <Person size="sm" delay={0.6} color="nodal-green" />
  </div>
);

const OrgPeople = () => (
  <div className="flex flex-col items-center justify-end gap-2 h-40 md:h-48">
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
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 120, opacity: 0 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'top 40%',
              scrub: 0.5,
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
      className="py-24 md:py-32 px-6 md:px-24 bg-transparent relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="target-heading translate-y-8 opacity-0 text-5xl md:text-6xl font-bold text-nodal-blue mb-20 max-w-4xl">
          Designed for the realities of modern care delivery.
        </h2>

        {/* Overlapping Cards */}
        <div className="relative space-y-[-3rem] md:space-y-[-4rem]">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={el => { cardsRef.current[i] = el; }}
              className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 transition-shadow hover:shadow-2xl"
              style={{
                zIndex: i + 1,
                marginLeft: `${i * 1.5}rem`,
                marginRight: `${(2 - i) * 1.5}rem`,
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Text */}
                <div className="flex-1 order-2 md:order-1">
                  <div className={`w-12 h-1 rounded-full ${accentBar[card.accent] || accentBar['nodal-green']} mb-4`} />
                  <h3 className="text-2xl md:text-3xl font-bold text-nodal-blue mb-3">
                    {card.title}
                  </h3>
                  <p className="text-lg text-nodal-graphite font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Illustration */}
                <div className="flex-shrink-0 order-1 md:order-2 w-48 md:w-56">
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
