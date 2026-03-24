import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';

const features = [
  "Live Session Capture",
  "Transcription",
  "Structured Notes",
  "Contextual Insights",
  "Collated Notes Across Sessions",
  "Custom Templates",
  "Editable Outputs",
  "Follow-Up Generation",
  "Patient Communication Notes & Letters",
  "Patient Tracking",
  "Workflow Integration",
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
      className="flex items-center gap-4 py-4 px-5 rounded-xl transition-colors"
    >
      <div
        ref={(el) => { checksRef.current[globalIndex] = el; }}
        className="w-7 h-7 rounded-lg bg-nodal-green flex items-center justify-center flex-shrink-0 shadow-sm"
      >
        <Check className="w-4 h-4 text-white" strokeWidth={3} />
      </div>
      <span className="text-lg md:text-xl text-nodal-blue font-medium">{feature}</span>
    </div>
  );

  return (
    <section id="trust" className="py-12 md:py-16 px-6 md:px-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-nodal-blue mb-6">
            Designed for Clinical Accountability
          </h2>
          <p className="text-xl md:text-2xl text-nodal-graphite max-w-3xl mx-auto font-light leading-relaxed">
            Healthcare requires absolute transparency. Nodal is built on foundations of verifiable output and ethical intelligence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 bg-nodal-white rounded-2xl border border-slate-100 p-8 md:p-12 shadow-sm">
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