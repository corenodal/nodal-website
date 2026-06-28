import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mic, FileText, Zap, Layers } from 'lucide-react';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Mic,
    title: 'Record.',
    description: 'Start a session recording with one tap. Nodal listens securely in the background, so you stay present with your patient.',
    iconBg: 'bg-nodal-green/15',
    iconColor: 'text-nodal-green',
  },
  {
    icon: FileText,
    title: 'Review.',
    description: 'Clinical notes are generated in your format, ready to edit in minutes.',
    iconBg: 'bg-nodal-violet/15',
    iconColor: 'text-nodal-violet',
  },
  {
    icon: Zap,
    title: 'Act.',
    description: 'Action items, patient summaries, and the tasks that come after a session are surfaced automatically.',
    iconBg: 'bg-nodal-green/15',
    iconColor: 'text-nodal-green',
  },
  {
    icon: Layers,
    title: 'Build.',
    description: 'Every session adds to a patient record that builds across sessions and gets richer over time.',
    iconBg: 'bg-nodal-violet/15',
    iconColor: 'text-nodal-violet',
  },
];

export const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.workflow-heading', {
        scrollTrigger: { trigger: '.workflow-heading', start: 'top 85%' },
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      });

      gsap.to('.workflow-step', {
        scrollTrigger: { trigger: '.workflow-steps', start: 'top 80%' },
        y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-nodal-blue relative z-10"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-24">

        <h2
          className="workflow-heading text-3xl md:text-4xl font-semibold text-white mb-14 translate-y-8 opacity-0"
        >
          How a session works with Nodal
        </h2>

        <div className="workflow-steps grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="workflow-step translate-y-6 opacity-0 bg-white/[0.06] border border-white/10 rounded-xl p-7"
            >
              <div className={`w-10 h-10 rounded-lg ${step.iconBg} flex items-center justify-center mb-5`}>
                <step.icon className={`w-5 h-5 ${step.iconColor}`} />
              </div>
              <h3 className={`${type.subheading} font-semibold text-white mb-3`}>
                {step.title}
              </h3>
              <p className={`${type.content} text-white/70 font-light leading-relaxed`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
