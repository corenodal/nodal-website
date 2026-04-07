import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Sparkles, Link2, Brain, Network, ShieldCheck, ClipboardList, BarChart3, Bell, FileText, RefreshCw, Lock, Activity, Layers, Settings, Workflow, Search, MessageSquare } from 'lucide-react';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Feature 1',
    subtitle: 'Subtitle for feature one',
    description:
      'A detailed description of this feature and how it helps clinicians in their daily workflow. This feature streamlines a key part of the clinical process.',
    bullets: [
      {
        icon: Zap,
        label: 'Bullet point one',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: Sparkles,
        label: 'Bullet point two',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: Link2,
        label: 'Bullet point three',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-violet' as const,
    imageFirst: false,
    imageAnchor: 'top-left' as const,
  },
  {
    title: 'Feature 2',
    subtitle: 'Subtitle for feature two',
    description:
      'A detailed description of this feature and how it supports care coordination. It reduces manual effort and keeps everything organized.',
    bullets: [
      {
        icon: Brain,
        label: 'Bullet point one',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: Network,
        label: 'Bullet point two',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: ShieldCheck,
        label: 'Bullet point three',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-green' as const,
    imageFirst: true,
    imageAnchor: 'top-left' as const,
  },
  {
    title: 'Feature 3',
    subtitle: 'Subtitle for feature three',
    description:
      'A detailed description of this feature and how it improves clinical decision-making. It brings the right information forward at the right time.',
    bullets: [
      {
        icon: ClipboardList,
        label: 'Bullet point one',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: BarChart3,
        label: 'Bullet point two',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: Bell,
        label: 'Bullet point three',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-violet' as const,
    imageFirst: false,
    imageAnchor: 'bottom-left' as const,
  },
  {
    title: 'Feature 4',
    subtitle: 'Subtitle for feature four',
    description:
      'A detailed description of this feature and how it enhances documentation quality. It ensures accuracy and completeness across every encounter.',
    bullets: [
      {
        icon: FileText,
        label: 'Bullet point one',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: RefreshCw,
        label: 'Bullet point two',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: Lock,
        label: 'Bullet point three',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-green' as const,
    imageFirst: true,
    imageAnchor: 'top-right' as const,
  },
  {
    title: 'Feature 5',
    subtitle: 'Subtitle for feature five',
    description:
      'A detailed description of this feature and how it supports clinical oversight. It gives teams visibility into patterns and outcomes.',
    bullets: [
      {
        icon: Activity,
        label: 'Bullet point one',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: Layers,
        label: 'Bullet point two',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: Settings,
        label: 'Bullet point three',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
    ],
    image: '/img.png',
    accent: 'nodal-violet' as const,
    imageFirst: false,
    imageAnchor: 'top-left' as const,
  },
  {
    title: 'Feature 6',
    subtitle: 'Subtitle for feature six',
    description:
      'A detailed description of this feature and how it connects clinical workflows end to end. It closes gaps between systems and teams.',
    bullets: [
      {
        icon: Workflow,
        label: 'Bullet point one',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: Search,
        label: 'Bullet point two',
        detail: 'A short description of this capability and what it does for clinicians.',
      },
      {
        icon: MessageSquare,
        label: 'Bullet point three',
        detail: 'A short description of this capability and what it does for clinicians.',
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
              <h2 className={`${type.heading} font-semibold text-nodal-blue mb-3`}>
                {feature.title}
              </h2>
              <p className={`${type.subheading} font-medium text-nodal-graphite mb-6`}>
                {feature.subtitle}
              </p>
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