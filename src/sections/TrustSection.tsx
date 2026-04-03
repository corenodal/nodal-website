import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { type } from '../styles/typography';

const features = [
  'Analyze reports',
  'Combine notes across sessions',
  'Create custom templates',
  'Customize your AI assistant',
  'Draft and manage patient communication',
  'Edit AI-generated notes',
  'Get clear, context-based insights',
  'Record and transcribe patient sessions',
  'Refine templates and documents with AI',
  'Set reminders and prepare for sessions',
  'Track patient history',
];

export const TrustSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const checksRef = useRef<(HTMLDivElement | null)[]>([]);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      checksRef.current.forEach((check) => {
        if (check) gsap.set(check, { scale: 0, opacity: 0 });
      });
      rowsRef.current.forEach((row) => {
        if (row) gsap.set(row, { backgroundColor: 'transparent' });
      });

      let tl: gsap.core.Timeline;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

            // Check each item one by one
            features.forEach((_, i) => {
              tl.to(checksRef.current[i], {
                scale: 1,
                opacity: 1,
                duration: 0.35,
                ease: 'back.out(2)',
              });
              // Brief green highlight pulse on the row
              tl.to(rowsRef.current[i], {
                backgroundColor: 'rgba(78, 191, 166, 0.08)',
                duration: 0.15,
              }, '<');
              tl.to(rowsRef.current[i], {
                backgroundColor: 'transparent',
                duration: 0.4,
              }, '>0.1');
            });

            // Hold with all checked
            tl.to({}, { duration: 2 });

            // Fade out all checks together
            tl.to(checksRef.current, {
              scale: 0,
              opacity: 0,
              duration: 0.4,
              stagger: 0.03,
              ease: 'power2.in',
            });

            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (tl) tl.kill();
        observer.disconnect();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split into 2 columns
  const midpoint = Math.ceil(features.length / 2);
  const leftColumn = features.slice(0, midpoint);
  const rightColumn = features.slice(midpoint);

  const renderItem = (feature: string, globalIndex: number) => (
    <div
      key={feature}
      ref={(el) => { rowsRef.current[globalIndex] = el; }}
      className="flex items-center gap-3 py-3 px-4 rounded-xl transition-colors"
    >
      <div
        ref={(el) => { checksRef.current[globalIndex] = el; }}
        className="w-6 h-6 rounded-md bg-nodal-green flex items-center justify-center flex-shrink-0 shadow-sm"
      >
        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
      </div>
      <span className={`${type.body} text-nodal-blue font-medium`}>{feature}</span>
    </div>
  );

  return (
    <section id="trust" className="py-10 md:py-14 px-6 md:px-20 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-10">
          <h2 className={`${type.heading} font-semibold text-nodal-blue mb-4`}>
            Built for Trust and Transparency
          </h2>
          <p className={`${type.body} text-nodal-graphite max-w-2xl mx-auto font-light leading-relaxed`}>
            Healthcare requires clarity at every step. Nodal is designed so everything is visible, reviewable, and easy to verify.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0 bg-nodal-white rounded-2xl border border-slate-100 p-6 md:p-10 shadow-sm">
            <div className="flex flex-col">
              {leftColumn.map((feature, i) => renderItem(feature, i))}
            </div>
            <div className="flex flex-col">
              {rightColumn.map((feature, i) => renderItem(feature, midpoint + i))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};