import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, MessageSquare, CreditCard, PenTool, Mail, Pill, Clipboard, FileSearch } from 'lucide-react';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const fragments = [
  { icon: Database, label: 'EHR', color: 'text-nousna-violet/60', bg: 'bg-nousna-violet/10' },
  { icon: MessageSquare, label: 'Messages', color: 'text-rose-400/60', bg: 'bg-rose-50/80' },
  { icon: PenTool, label: 'Notes', color: 'text-indigo-400/60', bg: 'bg-indigo-50/80' },
  { icon: CreditCard, label: 'Billing', color: 'text-emerald-400/60', bg: 'bg-emerald-50/80' },
  { icon: Mail, label: 'Email', color: 'text-blue-400/60', bg: 'bg-blue-50/80' },
  { icon: Pill, label: 'Rx', color: 'text-teal-400/60', bg: 'bg-teal-50/80' },
  { icon: Clipboard, label: 'Tasks', color: 'text-amber-400/60', bg: 'bg-amber-50/80' },
  { icon: FileSearch, label: 'History', color: 'text-fuchsia-400/60', bg: 'bg-fuchsia-50/80' },
];

const featuredQuotes = [
  'I often have to work weekends to complete notes.',
  'Notes take 20 to 25 mins each; five notes is 2.5 hours.',
  'If you didn\'t document it, it didn\'t happen.',
];

const gridQuotes = [
  { text: 'Therapists start private practice to escape system fatigue.', accent: 'nousna-violet' as const, span: 'col-span-1' },
  { text: 'Impacts me being able to see more patients.', accent: 'nousna-green' as const, span: 'col-span-1' },
  { text: 'System required documentation is exhausting but necessary.', accent: 'nousna-violet' as const, span: 'col-span-2' },
];

export const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fragmentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeQuote, setActiveQuote] = useState(0);
  const quoteTextRef = useRef<HTMLParagraphElement>(null);

  const animateQuoteChange = useCallback((nextIndex: number) => {
    if (!quoteTextRef.current) return;
    gsap.to(quoteTextRef.current, {
      opacity: 0, y: -10, duration: 0.3,
      onComplete: () => {
        setActiveQuote(nextIndex);
        gsap.fromTo(quoteTextRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 });
      },
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      animateQuoteChange((activeQuote + 1) % featuredQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeQuote, animateQuoteChange]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Voices heading + cards
      gsap.fromTo(
        '.vf-heading',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: '.voices-section', start: 'top 75%' } }
      );
      gsap.fromTo(
        '.vf-card',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.voices-section', start: 'top 65%' } }
      );

      // Stats heading
      gsap.to('.stats-heading', {
        scrollTrigger: { trigger: '.stats-heading', start: 'top 85%' },
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
              trigger: '.pain-cards-wrap',
              start: 'top 70%',
              end: '80% 50%',
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

      // Sources
      gsap.to('.sources-text', {
        scrollTrigger: { trigger: '.sources-text', start: 'top 90%' },
        opacity: 1,
        duration: 0.6,
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
      className="relative z-10 bg-nousna-white overflow-visible py-12 md:py-16"
    >

      {/* ── Beat 1: Practitioner Quotes (exact VoicesFromTheField layout) ── */}
      <div className="voices-section py-24 md:py-32 px-6 md:px-24 relative mb-12">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-nousna-blue/[0.03] via-nousna-violet/[0.06] to-nousna-blue/[0.03] rounded-3xl" />

        <div className="max-w-6xl mx-auto relative">
          <div className="vf-heading opacity-0 text-center mb-14">
            <h2 className={`${type.heading} font-semibold text-nousna-blue leading-tight`}>
              What practitioners <span className="text-nousna-violet italic">told</span> us
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Left — Featured rotating quote */}
            <div className="vf-card opacity-0 md:w-5/12 p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-nousna-violet/15 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-5xl font-serif leading-none block mb-6 text-nousna-violet/40">
                  &ldquo;&ldquo;
                </span>
                <p
                  ref={quoteTextRef}
                  className={`${type.subheading} text-nousna-blue font-medium leading-relaxed`}
                >
                  {featuredQuotes[activeQuote]}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                {featuredQuotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => animateQuoteChange(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeQuote
                        ? 'w-8 h-2.5 bg-nousna-violet'
                        : 'w-2.5 h-2.5 bg-nousna-violet/20 hover:bg-nousna-violet/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right — irregular bento grid */}
            <div className="md:w-7/12 grid grid-cols-2 gap-4">
              {gridQuotes.map((quote, i) => (
                <div
                  key={i}
                  className={`${quote.span} vf-card opacity-0 p-6 rounded-2xl backdrop-blur-sm border flex flex-col justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] ${
                    quote.accent === 'nousna-violet'
                      ? 'bg-nousna-violet/[0.06] border-nousna-violet/15 hover:border-nousna-violet/30 hover:bg-nousna-violet/[0.10]'
                      : 'bg-nousna-green/[0.06] border-nousna-green/15 hover:border-nousna-green/30 hover:bg-nousna-green/[0.10]'
                  }`}
                >
                  <span className={`text-2xl font-serif leading-none block mb-3 ${
                    quote.accent === 'nousna-violet' ? 'text-nousna-violet/40' : 'text-nousna-green/40'
                  }`}>
                    &ldquo;
                  </span>
                  <p className={`${quote.span === 'col-span-2' ? type.subheading : type.body} text-nousna-graphite leading-relaxed`}>
                    {quote.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Beat 2: Stats heading ── */}
      <div className="flex flex-col items-center justify-center px-6 md:px-24 text-center mt-8 md:mt-12 mb-12">
        <div className="stats-heading translate-y-12 opacity-0 max-w-5xl">
          <h2 className={`${type.heading} font-semibold text-nousna-blue leading-tight`}>
            Documentation was not designed for mental health work.
          </h2>
        </div>
      </div>

      {/* ── Beat 3: Cards over scattered fragments ── */}
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
                  <span className={`${type.ui} font-medium text-nousna-blue/50 whitespace-nowrap`}>{frag.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Foreground: stat cards */}
        <div className="pain-cards-wrap relative z-10">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Lost Capacity', stat: '49%', sub: 'of clinicians could see more patients if documentation demands were reduced.' },
              { label: 'Exhaustion', stat: '77%', sub: 'of therapists report significant mental exhaustion, the highest rate of any clinical specialty.' },
              { label: 'Admin Load', stat: '11+', sub: 'hrs/week on non-clinical admin for roughly 40% of mental health clinicians.' },
              { label: 'Burnout', stat: '1 in 3', sub: 'psychologists reported burnout.' },
            ].map((item, i) => (
              <div
                key={i}
                className="pain-card translate-y-8 opacity-0 scale-95 bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm text-center"
              >
                <div className={`${type.body} font-semibold text-nousna-blue mb-2`}>{item.label}</div>
                <div className={`${type.heading} font-bold text-rose-500 mb-2`}>{item.stat}</div>
                <div className={`${type.ui} text-nousna-graphite font-light`}>{item.sub}</div>
              </div>
            ))}
          </div>
          <p className="sources-text text-[11px] text-nousna-graphite-soft/60 font-light leading-relaxed text-center mt-6 opacity-0">
            Sources: ICANotes, AI in Behavioral Health: National Clinician Survey Report (2026); Tebra, 2025 Physician Burnout Survey; American Psychological Association, 2024 Practitioner Pulse Survey.
          </p>
        </div>

        {/* Closing statement — on top of fragments */}
        <div className="closing-statement translate-y-12 opacity-0 relative z-10 pt-6 md:pt-8 text-center">
          <p className={`${type.heading} font-bold leading-tight max-w-3xl mx-auto`}>
            <span className="text-nousna-blue block">This is not a productivity failure.</span>
            <span className="text-nousna-violet block mt-2">This is a systems problem.</span>
          </p>
        </div>

      </div>

    </section>
  );
};
