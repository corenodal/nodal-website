import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, IdCard, TrendingUp, Sparkles, Lightbulb, ListChecks, Brain, MessageCircle, Wrench, FileText, PenLine, Download, Layers, ClipboardList, CheckSquare } from 'lucide-react';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Know exactly where you left off.',
    description:
      'Before each session, Nousna surfaces what mattered last time: key themes, open action items, and patient history, so you walk in ready.',
    bullets: [
      {
        icon: BookOpen,
        label: 'Full patient context, always current',
        detail: '',
      },
      {
        icon: IdCard,
        label: 'Patient cards for quick reference',
        detail: '',
      },
      {
        icon: TrendingUp,
        label: 'Progress over time, at a glance',
        detail: '',
      },
    ],
    image: '/session_prep.png',
    accent: 'nousna-violet' as const,
    imageFirst: false,
    imageAnchor: 'top-left' as const,
  },
  {
    title: 'Notes in the format you already use.',
    description:
      'Whether you use SOAP, DAP, or your own structure, Nousna generates notes in the format you work in. Bring your existing templates or build new ones.',
    bullets: [
      {
        icon: Sparkles,
        label: 'Notes generated from the session',
        detail: '',
      },
      {
        icon: Lightbulb,
        label: 'Your templates, or ours',
        detail: '',
      },
      {
        icon: ListChecks,
        label: 'Ready to review and sign',
        detail: '',
      },
    ],
    image: '/note_customization.png',
    accent: 'nousna-green' as const,
    imageFirst: true,
    imageAnchor: 'top-full' as any,
    imageFit: 'cover' as const,
  },
  {
    title: 'Capture what matters from every session.',
    description:
      'Nousna extracts key themes and generates next steps.',
    bullets: [
      {
        icon: Brain,
        label: 'Key themes, automatically surfaced',
        detail: '',
      },
      {
        icon: MessageCircle,
        label: 'Clinically relevant highlights',
        detail: '',
      },
      {
        icon: ListChecks,
        label: 'Tasks generated automatically',
        detail: '',
      },
    ],
    image: '/clinical_insights.png',
    accent: 'nousna-violet' as const,
    imageFirst: false,
    imageAnchor: 'top-left' as const,
  },
  {
    title: 'Built around how you work.',
    description:
      'Ask Node about a patient\'s history, past sessions, or your documentation. Node knows your documentation style, your patient history, and how you work.',
    bullets: [
      {
        icon: Wrench,
        label: 'Adapts to your documentation style',
        detail: '',
      },
      {
        icon: MessageCircle,
        label: 'Session history, patient context, documentation lookup',
        detail: '',
      },
      {
        icon: PenLine,
        label: 'Edit notes, letters, and summaries on request',
        detail: '',
      },
    ],
    image: '/clinical_assistant.png',
    accent: 'nousna-green' as const,
    imageFirst: true,
    imageAnchor: 'top-right' as const,
  },
  {
    title: 'Outputs your patients can use, without the extra hour.',
    description:
      'Compile session summaries, homework, and letters your patients can actually understand, reviewed and sent in minutes.',
    bullets: [
      {
        icon: FileText,
        label: 'Summaries and letters, ready to send',
        detail: '',
      },
      {
        icon: PenLine,
        label: 'You review every output before it reaches a patient',
        detail: '',
      },
      {
        icon: Download,
        label: 'Copy or download',
        detail: '',
      },
    ],
    image: '/patient_communication.png',
    accent: 'nousna-violet' as const,
    imageFirst: false,
    imageAnchor: 'top-left' as const,
  },
  {
    title: 'The full picture, across every session.',
    description:
      'Combine insights from multiple sessions into a single document for referrals, supervisors, or your own records across sessions.',
    bullets: [
      {
        icon: Layers,
        label: 'Every session, one view',
        detail: '',
      },
      {
        icon: ClipboardList,
        label: 'Clear patient history across time',
        detail: '',
      },
      {
        icon: CheckSquare,
        label: 'Pending and completed tasks, tracked',
        detail: '',
      },
    ],
    image: '/collate.png',
    accent: 'nousna-green' as const,
    imageFirst: true,
    imageAnchor: 'top-right-left' as any,
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

  const accentColor = (accent: 'nousna-violet' | 'nousna-green') =>
    accent === 'nousna-violet' ? 'bg-nousna-violet/10 text-nousna-violet' : 'bg-nousna-green/10 text-nousna-green';

  // anchor = the corner where padding is applied (2 sides), image overflows the other 2
  const anchorStyles = (anchor: 'top-left' | 'top-right' | 'top-right-left' | 'bottom-left' | 'bottom-right' | 'top-full') => {
    switch (anchor) {
      case 'top-left': // Padding Top/Left, Flush Bottom/Right
        return {
          pad: 'pt-6 pl-10 md:pt-10 md:pl-14 pb-0 pr-0',
          rounded: 'rounded-tl-2xl',
          objectPos: 'object-left-bottom'
        };
      case 'top-right': // Padding Top/Right, Flush Bottom/Left
        return {
          pad: 'pt-6 pr-10 md:pt-10 md:pr-14 pb-0 pl-0',
          rounded: 'rounded-tr-2xl',
          objectPos: 'object-right-bottom'
        };
      case 'top-right-left': // Padding Top/Right, Flush Bottom/Left, Left Important
        return {
          pad: 'pt-6 pr-10 md:pt-10 md:pr-14 pb-0 pl-0',
          rounded: 'rounded-tr-2xl',
          objectPos: 'object-left-bottom'
        };
      case 'top-full': // Full width (flush left), top aligned
        return {
          pad: 'pt-6 pr-10 md:pt-10 md:pr-14 pb-0 pl-0',
          rounded: 'rounded-tr-2xl',
          objectPos: 'object-top'
        };
      case 'bottom-left': // Padding Bottom/Left, Flush Top/Right
        return {
          pad: 'pb-6 pl-10 md:pb-10 md:pl-14 pt-0 pr-0',
          rounded: 'rounded-bl-2xl',
          objectPos: 'object-right-top'
        };
      case 'bottom-right': // Padding Bottom/Right, Flush Top/Left
        return {
          pad: 'pb-6 pr-10 md:pb-10 md:pr-14 pt-0 pl-0',
          rounded: 'rounded-br-2xl',
          objectPos: 'object-left-top'
        };
      default:
        return {
          pad: 'pt-6 pr-10 md:pt-10 md:pr-14 pb-0 pl-0',
          rounded: 'rounded-tr-2xl',
          objectPos: 'object-left-bottom'
        };
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 px-6 md:px-24 bg-transparent relative z-10"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-40">
        {features.map((feature, i) => {
          const numberAlignClass = feature.imageFirst ? 'right-0 md:-right-10' : 'left-0 md:-left-10';
          const numberColorClass = feature.accent === 'nousna-violet' ? 'text-nousna-violet/[0.04]' : 'text-nousna-green/[0.05]';

          const textBlock = (
            <div key={`text-${i}`} className="flex-1 flex flex-col justify-start relative z-0">
              <div 
                aria-hidden
                className={`absolute -top-16 md:-top-32 ${numberAlignClass} text-[240px] md:text-[450px] font-medium leading-none tracking-tighter select-none pointer-events-none -z-10 ${numberColorClass}`}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              
              <h2 className={`${type.heading} font-semibold text-nousna-blue mb-6`}>
                {feature.title}
              </h2>
              <p className={`${type.body} text-nousna-graphite font-light leading-relaxed mb-10`}>
                {feature.description}
              </p>

              <div className="flex flex-col gap-6">
                {feature.bullets.map((bullet, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${accentColor(feature.accent)}`}>
                      <bullet.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`${type.body} font-semibold text-nousna-blue`}>
                        {bullet.label}
                      </p>
                      {bullet.detail && (
                        <p className={`${type.ui} text-nousna-graphite-soft font-light leading-relaxed`}>
                          {bullet.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

          const anchor = anchorStyles(feature.imageAnchor);
          const bgClassName = feature.accent === 'nousna-violet'
            ? 'bg-gradient-to-br from-nousna-violet/20 via-nousna-violet/5 to-transparent'
            : 'bg-gradient-to-br from-nousna-green/20 via-nousna-green/5 to-transparent';

          const imageBlock = (
            <div key={`img-${i}`} className="flex-1 flex items-end justify-center mt-8 md:mt-16 group">
              <div
                className={`rounded-3xl w-full aspect-[4/3] ${anchor.pad} overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 ${bgClassName} transition-all duration-300`}
              >
                <div className={`w-full h-full overflow-hidden ${anchor.rounded} ring-1 ring-white/40 ring-inset bg-black/5`}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`w-full h-full ${(feature as any).imageFit === 'contain' ? 'object-contain' : 'object-cover'} ${anchor.objectPos} transition-transform duration-700 ease-out group-hover:scale-105`}
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