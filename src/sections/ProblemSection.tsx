import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, MessageSquare, CreditCard, PenTool, Mail, Pill, Clipboard, FileSearch } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const fragments = [
  { icon: Database, label: 'EHR', color: 'text-nodal-violet/60', bg: 'bg-nodal-violet/10' },
  { icon: MessageSquare, label: 'Messages', color: 'text-rose-400/60', bg: 'bg-rose-50/80' },
  { icon: PenTool, label: 'Notes', color: 'text-indigo-400/60', bg: 'bg-indigo-50/80' },
  { icon: CreditCard, label: 'Billing', color: 'text-emerald-400/60', bg: 'bg-emerald-50/80' },
  { icon: Mail, label: 'Email', color: 'text-blue-400/60', bg: 'bg-blue-50/80' },
  { icon: Pill, label: 'Rx', color: 'text-teal-400/60', bg: 'bg-teal-50/80' },
  { icon: Clipboard, label: 'Tasks', color: 'text-amber-400/60', bg: 'bg-amber-50/80' },
  { icon: FileSearch, label: 'History', color: 'text-fuchsia-400/60', bg: 'bg-fuchsia-50/80' },
];

export const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fragmentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Beat 1: Heading fade in
      gsap.to('.problem-heading', {
        scrollTrigger: { trigger: '.problem-heading', start: 'top 85%' },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Fragments scatter on scroll (behind everything)
      const scatterPositions = [
        { x: -520, y: -200, rotate: -12 },
        { x: 450, y: -230, rotate: 15 },
        { x: -520, y: 50, rotate: -8 },
        { x: 500, y: 30, rotate: 10 },
        { x: -460, y: 230, rotate: -15 },
        { x: 460, y: 250, rotate: 8 },
        { x: -230, y: 300, rotate: -5 },
        { x: 320, y: -280, rotate: 12 },
      ];

      fragmentRefs.current.forEach((frag, i) => {
        if (!frag) return;
        gsap.fromTo(
          frag,
          { x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.6 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 40%',
              end: '60% 40%',
              scrub: 0.5,
            },
            x: scatterPositions[i].x,
            y: scatterPositions[i].y,
            rotate: scatterPositions[i].rotate,
            opacity: 0.75,
            scale: 1,
            ease: 'power2.out',
          }
        );
      });

      // Pain cards stack in
      gsap.to('.pain-card', {
        scrollTrigger: {
          trigger: '.pain-cards-wrap',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Closing statement
      gsap.to('.closing-statement', {
        scrollTrigger: {
          trigger: '.closing-statement',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative z-10 bg-transparent overflow-visible py-16 md:py-24"
    >

      {/* ── Beat 1: The Question ── */}
      <div className="flex flex-col items-center justify-center px-6 md:px-24 text-center mb-12">
        <div className="problem-heading translate-y-12 opacity-0 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-nodal-blue leading-tight">
            Clinical work is scattered across fragmented systems.
          </h2>
        </div>
      </div>

      {/* ── Beat 2+3 merged: Cards over scattered fragments ── */}
      <div className="problem-content relative px-6 md:px-24 pt-6 md:pt-8 pb-10 md:pb-16">

        {/* Background layer: scattering fragments — spans full section, no clipping */}
        <div className="absolute -inset-40 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {fragments.map((frag, i) => (
              <div
                key={i}
                ref={el => { fragmentRefs.current[i] = el; }}
                className="absolute"
              >
                <div className={`${frag.bg} backdrop-blur-[2px] rounded-2xl px-5 py-4 border border-white/40 flex items-center gap-3`}>
                  <frag.icon className={`w-5 h-5 ${frag.color} shrink-0`} />
                  <span className="text-sm font-medium text-nodal-blue/50 whitespace-nowrap">{frag.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Foreground: stat cards */}
        <div className="pain-cards-wrap relative z-10">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Decision fatigue', stat: '300+', sub: 'decisions per day' },
              { label: 'Error risk', stat: '2.6×', sub: 'higher with fragmentation' },
              { label: 'Admin burden', stat: '49%', sub: 'of clinician time' },
              { label: 'Burnout', stat: '63%', sub: 'of physicians report it' },
            ].map((item, i) => (
              <div
                key={i}
                className="pain-card translate-y-8 opacity-0 scale-95 bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">{item.stat}</div>
                <div className="text-base md:text-lg font-semibold text-nodal-blue mb-1">{item.label}</div>
                <div className="text-xs md:text-sm text-nodal-graphite font-light">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement — on top of fragments */}
        <div className="closing-statement translate-y-12 opacity-0 relative z-10 pt-12 md:pt-16 text-center">
          <p className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            <span className="text-nodal-blue block">This is not a productivity failure.</span>
            <span className="text-nodal-violet block mt-2">This is a systems design failure.</span>
          </p>
        </div>

      </div>

    </section>
  );
};
