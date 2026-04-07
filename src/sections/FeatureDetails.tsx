import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, IdCard, TrendingUp, Sparkles, Lightbulb, ListChecks, Brain, MessageCircle, Wrench, FileText, PenLine, Download, Layers, ClipboardList, CheckSquare } from 'lucide-react';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Session Prep',
    description:
      'Nodal helps practitioners prepare for each session by bringing forward relevant patient context and insights from previous visits.',
    bullets: [
      {
        icon: BookOpen,
        label: 'Session & patient context',
        detail: 'Maintains session-level and patient-level context through short summaries of past sessions.',
      },
      {
        icon: IdCard,
        label: 'Patient flashcards',
        detail: 'Surfaces key historical information through patient flashcards for quick review.',
      },
      {
        icon: TrendingUp,
        label: 'Progress tracking',
        detail: 'Helps track patient progress over time.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-violet' as const,
    imageFirst: false,
    imageAnchor: 'top-left' as const,
  },
  {
    title: 'Note Customization',
    description:
      'Nodal makes it easy to generate and tailor clinical notes based on how you document care.',
    bullets: [
      {
        icon: Sparkles,
        label: 'Auto-generated notes',
        detail: 'Generates structured notes directly from patient sessions.',
      },
      {
        icon: Lightbulb,
        label: 'Flexible formats',
        detail: 'Supports standard formats as well as custom templates created by clinicians.',
      },
      {
        icon: ListChecks,
        label: 'Ready to review',
        detail: 'Produces ready-to-review notes to reduce manual writing.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-green' as const,
    imageFirst: true,
    imageAnchor: 'top-left' as const,
  },
  {
    title: 'Clinical Insights',
    description:
      'Nodal highlights what matters most so nothing important is missed after a session.',
    bullets: [
      {
        icon: Brain,
        label: 'Key themes extracted',
        detail: 'Extracts key themes and clinically relevant signals.',
      },
      {
        icon: MessageCircle,
        label: 'Discussion highlights',
        detail: 'Highlights important discussion points.',
      },
      {
        icon: ListChecks,
        label: 'Automatic next steps',
        detail: 'Generates next steps automatically to support follow-through.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-violet' as const,
    imageFirst: false,
    imageAnchor: 'bottom-left' as const,
  },
  {
    title: 'Clinical Assistant',
    description:
      'Nodal acts as a customizable assistant that adapts to your workflow and preferences.',
    bullets: [
      {
        icon: Wrench,
        label: 'Learns your style',
        detail: 'Learns your workflow, language, and documentation style.',
      },
      {
        icon: MessageCircle,
        label: 'Ask anything',
        detail: 'Answers questions about patients, treatments, or tasks.',
      },
      {
        icon: PenLine,
        label: 'Editing support',
        detail: 'Helps edit notes, letters, and drafts as needed.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-green' as const,
    imageFirst: true,
    imageAnchor: 'top-right' as const,
  },
  {
    title: 'Patient Communication',
    description:
      'Nodal helps streamline how you communicate with patients after a session.',
    bullets: [
      {
        icon: FileText,
        label: 'Patient-ready outputs',
        detail: 'Generates patient-ready summaries and letters.',
      },
      {
        icon: PenLine,
        label: 'Review before sharing',
        detail: 'Allows review and edits before sharing.',
      },
      {
        icon: Download,
        label: 'Copy or download',
        detail: 'Produces structured outputs that can be copied or downloaded.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-violet' as const,
    imageFirst: false,
    imageAnchor: 'top-left' as const,
  },
  {
    title: 'Collated Notes',
    description:
      'Nodal brings together information across sessions to support continuity of care.',
    bullets: [
      {
        icon: Layers,
        label: 'Combined session view',
        detail: 'Combines notes from multiple sessions into one view.',
      },
      {
        icon: ClipboardList,
        label: 'Consolidated history',
        detail: 'Helps review patient history in a clear, consolidated format.',
      },
      {
        icon: CheckSquare,
        label: 'Task tracking',
        detail: 'Tracks progress along with pending and completed tasks.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-green' as const,
    imageFirst: true,
    imageAnchor: 'top-left' as const,
  },
];

export const FeatureDetails = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      features.forEach((_, i) => {
        gsap.fromTo(
          `.fd-row-${i}`,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: `.fd-row-${i}`,
              start: 'top 80%',
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const accentColor = (accent: 'nodal-violet' | 'nodal-green') =>
    accent === 'nodal-violet' ? 'bg-nodal-violet/10 text-nodal-violet' : 'bg-nodal-green/10 text-nodal-green';

  // anchor = the corner where padding is applied (2 sides), image overflows the other 2
  const anchorStyles = (anchor: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
    const pad = {
      'top-left':     'pt-6 pl-6 md:pt-8 md:pl-8 pb-0 pr-0',
      'top-right':    'pt-6 pr-6 md:pt-8 md:pr-8 pb-0 pl-0',
      'bottom-left':  'pb-6 pl-6 md:pb-8 md:pl-8 pt-0 pr-0',
      'bottom-right': 'pb-6 pr-6 md:pb-8 md:pr-8 pt-0 pl-0',
    };
    const rounded = {
      'top-left':     'rounded-tl-xl',
      'top-right':    'rounded-tr-xl',
      'bottom-left':  'rounded-bl-xl',
      'bottom-right': 'rounded-br-xl',
    };
    const objectPos = {
      'top-left':     'object-right-bottom',
      'top-right':    'object-left-bottom',
      'bottom-left':  'object-right-top',
      'bottom-right': 'object-left-top',
    };
    return { pad: pad[anchor], rounded: rounded[anchor], objectPos: objectPos[anchor] };
  };

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 px-6 md:px-24 bg-transparent relative z-10"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-40">
        {features.map((feature, i) => {
          const textBlock = (
            <div key={`text-${i}`} className="flex-1 flex flex-col justify-start">
              <h2 className={`${type.heading} font-semibold text-nodal-blue mb-6`}>
                {feature.title}
              </h2>
              <p className={`${type.body} text-nodal-graphite font-light leading-relaxed mb-10`}>
                {feature.description}
              </p>

              <div className="flex flex-col gap-6">
                {feature.bullets.map((bullet, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${accentColor(feature.accent)}`}>
                      <bullet.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`${type.body} font-semibold text-nodal-blue`}>
                        {bullet.label}
                      </p>
                      <p className={`${type.ui} text-nodal-graphite-soft font-light leading-relaxed`}>
                        {bullet.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

          const anchor = anchorStyles(feature.imageAnchor);
          const imageBlock = (
            <div key={`img-${i}`} className="flex-1 flex items-end justify-center mt-8 md:mt-16">
              <div
                className={`rounded-2xl w-full aspect-[4/3] ${anchor.pad} overflow-hidden ${
                  feature.accent === 'nodal-violet'
                    ? 'bg-nodal-violet/8'
                    : 'bg-nodal-green/8'
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`w-full h-full object-cover ${anchor.objectPos} ${anchor.rounded} shadow-lg`}
                />
              </div>
            </div>
          );

          return (
            <div
              key={i}
              className={`fd-row-${i} flex flex-col md:flex-row gap-12 md:gap-16 items-start opacity-0`}
            >
              {feature.imageFirst ? (
                <>
                  {imageBlock}
                  {textBlock}
                </>
              ) : (
                <>
                  {textBlock}
                  {imageBlock}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};