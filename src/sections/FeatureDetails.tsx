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
    image: '/session_prep.png',
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
    // Making it flush left as requested, with padding on the right side ("going in")
    const isTop = anchor.startsWith('top');
    const pad = isTop 
      ? 'pt-6 pr-10 md:pt-10 md:pr-14 pb-0 pl-0' // Top-Right offset, Flush Left-Bottom
      : 'pb-6 pr-10 md:pb-10 md:pr-14 pt-0 pl-0'; // Bottom-Right offset, Flush Left-Top
    
    // The inner rounding should be for the corner that sits away from the flush edges
    const rounded = isTop ? 'rounded-tr-2xl' : 'rounded-br-2xl';
    const objectPos = isTop ? 'object-left-bottom' : 'object-left-top';
    
    return { pad, rounded, objectPos };
  };

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 px-6 md:px-24 bg-transparent relative z-10"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-40">
        {features.map((feature, i) => {
          const numberAlignClass = feature.imageFirst ? 'right-0 md:-right-10' : 'left-0 md:-left-10';
          const numberColorClass = feature.accent === 'nodal-violet' ? 'text-nodal-violet/[0.04]' : 'text-nodal-green/[0.05]';

          const textBlock = (
            <div key={`text-${i}`} className="flex-1 flex flex-col justify-start relative z-0">
              <div 
                aria-hidden
                className={`absolute -top-16 md:-top-32 ${numberAlignClass} text-[240px] md:text-[450px] font-medium leading-none tracking-tighter select-none pointer-events-none -z-10 ${numberColorClass}`}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              
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
          const bgClassName = feature.accent === 'nodal-violet'
            ? 'bg-gradient-to-br from-nodal-violet/20 via-nodal-violet/5 to-transparent'
            : 'bg-gradient-to-br from-nodal-green/20 via-nodal-green/5 to-transparent';

          const imageBlock = (
            <div key={`img-${i}`} className="flex-1 flex items-end justify-center mt-8 md:mt-16 group">
              <div
                className={`rounded-3xl w-full aspect-[4/3] ${anchor.pad} overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 ${bgClassName} transition-all duration-300`}
              >
                <div className={`w-full h-full overflow-hidden ${anchor.rounded} ring-1 ring-white/40 ring-inset bg-black/5`}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`w-full h-full object-cover ${anchor.objectPos} transition-transform duration-700 ease-out group-hover:scale-105`}
                  />
                </div>
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