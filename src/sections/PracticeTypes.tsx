import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Users, Brain } from 'lucide-react';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const practices = [
  {
    icon: User,
    title: 'Solo practice',
    accent: 'nousna-violet',
    iconBg: 'bg-nousna-violet/10',
    iconColor: 'text-nousna-violet',
    points: [
      'Stop spending evenings on notes',
      'Complete records with less cognitive overhead',
      'More time for the patients on your waitlist',
    ],
  },
  {
    icon: Users,
    title: 'Group practice',
    accent: 'nousna-green',
    iconBg: 'bg-nousna-green/10',
    iconColor: 'text-nousna-green',
    points: [
      'Consistent documentation across your team',
      'Reduce duplicate work and coordination overhead',
      'Shared visibility into patient care',
    ],
  },
  {
    icon: Brain,
    title: 'Psychiatry',
    accent: 'nousna-violet',
    iconBg: 'bg-nousna-violet/10',
    iconColor: 'text-nousna-violet',
    points: [
      'Track progress across complex, long-term cases',
      'Structured templates for psychiatric assessment',
      'Full patient history across sessions, in one view',
    ],
  },
];

export const PracticeTypes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pt-heading',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
      gsap.fromTo(
        '.pt-card',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-nousna-blue relative z-10"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-24">
        <h2 className="pt-heading opacity-0 text-3xl md:text-4xl font-semibold text-white mb-4">
          Built for independent and small group practices.
        </h2>
        <p className="pt-heading opacity-0 text-white/70 font-light leading-relaxed max-w-2xl mb-14">
          Whether you see patients solo or as part of a team, Nousna adapts to your practice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practices.map((practice, i) => (
            <div
              key={i}
              className="pt-card opacity-0 bg-white/[0.06] border border-white/10 rounded-xl p-7 hover:bg-white/[0.10] transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg ${practice.iconBg} flex items-center justify-center mb-5`}>
                <practice.icon className={`w-5 h-5 ${practice.iconColor}`} />
              </div>
              <h3 className={`${type.subheading} font-semibold text-white mb-5`}>
                {practice.title}
              </h3>
              <ul className="space-y-3">
                {practice.points.map((point, j) => (
                  <li key={j} className={`${type.content} text-white/70 font-light leading-relaxed`}>
                    {point}
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
