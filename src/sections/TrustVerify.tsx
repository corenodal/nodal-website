import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, FileText, Lock, UserCheck, HardDrive, Layers, LayoutTemplate, Settings, PenLine, CheckSquare } from 'lucide-react';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
  { icon: Shield, label: 'HIPAA aligned infrastructure' },
  { icon: FileText, label: 'BAA available for all pilot partners' },
  { icon: Lock, label: 'Your data is never used to train AI models' },
  { icon: UserCheck, label: 'A clinician reviews every AI output before use' },
  { icon: HardDrive, label: 'Secure session recording and storage' },
];

const capabilityItems = [
  { icon: Layers, label: 'Combine notes across sessions' },
  { icon: LayoutTemplate, label: 'Create and save custom templates' },
  { icon: Settings, label: 'Customize your AI assistant' },
  { icon: PenLine, label: 'Edit AI generated notes before finalizing' },
  { icon: CheckSquare, label: 'Track patient history and task completion' },
];

export const TrustVerify = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tv-heading',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
      gsap.fromTo(
        '.tv-item',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.tv-grid', start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-24 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="tv-heading opacity-0 text-center mb-4">
          <h2 className={`${type.heading} font-semibold text-nodal-blue leading-tight`}>
            Trust you can verify.
          </h2>
        </div>
        <p className="tv-heading opacity-0 text-center text-nodal-graphite font-light leading-relaxed max-w-3xl mx-auto mb-14">
          Every output is reviewable before it is used. And compliance is built into the foundation from day one.
        </p>

        <div className="tv-grid max-w-5xl mx-auto bg-nodal-white rounded-2xl border border-slate-100 p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
            {/* Left column — Trust & compliance */}
            <div className="space-y-0">
              {trustItems.map((item, i) => (
                <div
                  key={i}
                  className="tv-item opacity-0 flex items-center gap-4 py-4 border-b border-slate-100"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-nodal-green/10 text-nodal-green">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className={`${type.body} font-semibold text-nodal-blue`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Right column — Capabilities */}
            <div className="space-y-0">
              {capabilityItems.map((item, i) => (
                <div
                  key={i}
                  className="tv-item opacity-0 flex items-center gap-4 py-4 border-b border-slate-100"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-nodal-violet/10 text-nodal-violet">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className={`${type.body} font-semibold text-nodal-blue`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
