import { useEffect, useRef } from 'react';
import { ArrowRight, Mic, FileText, ClipboardCheck, Check, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { type } from '../styles/typography';

const LiveDashboard = () => {
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate waveform bars
      barsRef.current.forEach((bar, i) => {
        if (!bar) return;
        gsap.to(bar, {
          height: `${30 + Math.random() * 50}%`,
          duration: 0.4 + Math.random() * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.08,
        });
      });

      // Typing effect on note lines
      gsap.fromTo('.note-line', { width: 0 }, {
        width: '100%',
        duration: 1.5,
        stagger: 0.3,
        ease: 'power2.out',
        repeat: -1,
        repeatDelay: 2,
      });

      // Task checkmarks appearing
      gsap.fromTo('.task-check', { scale: 0, opacity: 0 }, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.6,
        ease: 'back.out(2)',
        repeat: -1,
        repeatDelay: 3,
      });
    }, dashRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={dashRef} className="w-full p-5 md:p-8">
      {/* Mock browser chrome */}
      <div className="bg-slate-50 rounded-t-xl px-4 py-3 flex items-center gap-2 border-b border-slate-100">
        <div className="w-3 h-3 rounded-full bg-rose-400/60" />
        <div className="w-3 h-3 rounded-full bg-amber-400/60" />
        <div className="w-3 h-3 rounded-full bg-green-400/60" />
        <div className="ml-4 flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-nodal-blue flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <span className="text-xs font-bold tracking-tighter text-nodal-blue">NODAL</span>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="bg-white rounded-b-xl border border-t-0 border-slate-100 p-4 md:p-6">
        <div className="grid grid-cols-12 gap-4 md:gap-6">

          {/* Left panel — Live Session */}
          <div className="col-span-12 md:col-span-5 bg-nodal-white rounded-xl p-5 border border-slate-100">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-nodal-green/10 flex items-center justify-center">
                <Mic className="w-4 h-4 text-nodal-green" />
              </div>
              <span className={`${type.ui} font-semibold text-nodal-blue`}>Live Session</span>
              <span className="ml-auto w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            </div>
            {/* Waveform */}
            <div className="flex items-end gap-1 h-20 md:h-24 px-1">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  ref={el => { barsRef.current[i] = el; }}
                  className="flex-1 rounded-full bg-gradient-to-t from-nodal-green to-nodal-green/50"
                  style={{ height: '20%' }}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-nodal-green" />
              <span className={`${type.ui} text-nodal-graphite`}>Patient encounter in progress</span>
            </div>
          </div>

          {/* Right panel — Notes + Tasks stacked */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-4 md:gap-6">

            {/* Clinical Notes */}
            <div className="bg-nodal-white rounded-xl p-5 border border-slate-100 flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-nodal-violet/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-nodal-violet" />
                </div>
                <span className={`${type.ui} font-semibold text-nodal-blue`}>Clinical Notes</span>
                <span className={`ml-auto ${type.ui} text-nodal-green font-medium bg-nodal-green/10 px-2 py-0.5 rounded-full`}>Auto-generating</span>
              </div>
              <div className="space-y-2.5">
                <div className="note-line h-2.5 bg-nodal-violet/15 rounded-full" />
                <div className="note-line h-2.5 bg-nodal-violet/10 rounded-full" style={{ maxWidth: '85%' }} />
                <div className="note-line h-2.5 bg-nodal-violet/15 rounded-full" style={{ maxWidth: '92%' }} />
                <div className="note-line h-2.5 bg-nodal-violet/10 rounded-full" style={{ maxWidth: '70%' }} />
              </div>
            </div>

            {/* Follow-up Tasks */}
            <div className="bg-nodal-white rounded-xl p-5 border border-slate-100 flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-nodal-green/10 flex items-center justify-center">
                  <ClipboardCheck className="w-4 h-4 text-nodal-green" />
                </div>
                <span className={`${type.ui} font-semibold text-nodal-blue`}>Follow-up Tasks</span>
              </div>
              <div className="space-y-3">
                {['Lab order — CBC panel', 'Referral — Cardiology', 'Rx renewal — Metformin'].map((task, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="task-check w-5 h-5 rounded-md bg-nodal-green flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className={`${type.ui} text-nodal-graphite`}>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SolutionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.timeline()
            .to('.solution-text', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
            .to('.solution-card', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
            .to('.solution-cta', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.3');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solution"
      className="py-10 md:py-14 px-6 md:px-20 bg-transparent relative z-10"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="solution-text translate-y-8 opacity-0 mb-8">
          <h2 className={`${type.heading} font-semibold text-nodal-blue mb-3`}>
            One system. One workflow.
          </h2>
        </div>

        {/* Animated Dashboard Card */}
        <div className="solution-card translate-y-8 opacity-0 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-nodal-green/5 via-transparent to-nodal-violet/5 pointer-events-none" />

          <LiveDashboard />

        </div>

        {/* CTA Link */}
        <div className="solution-cta translate-y-8 opacity-0 mt-6">
          <Link
            to="/product"
            className={`inline-flex items-center gap-2 text-nodal-green font-semibold ${type.ui} hover:gap-3 transition-all`}
          >
            Explore the Product
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};