import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const featuredQuotes = [
  '60% of my time goes to documenting and emailing.',
  'I often have to work weekends to complete notes.',
  'I lose emotional bandwidth...',
];

const gridQuotes = [
  { text: 'Notes take 20–25 mins each; five notes = 2.5 hours.', accent: 'nodal-violet' as const, span: 'col-span-1' },
  { text: 'If you didn\'t document it, it didn\'t happen.', accent: 'nodal-green' as const, span: 'col-span-1' },
  { text: 'Therapists start private practice to escape system fatigue.', accent: 'nodal-violet' as const, span: 'col-span-2' },
  { text: 'Impacts me being able to see more patients.', accent: 'nodal-green' as const, span: 'col-span-1' },
  { text: 'System-required documentation is exhausting but necessary.', accent: 'nodal-violet' as const, span: 'col-span-1' },
];

export const VoicesFromTheField = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      gsap.fromTo(
        '.vf-heading',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      );
      gsap.fromTo(
        '.vf-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 55%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-24 relative z-10"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nodal-blue/[0.03] via-nodal-violet/[0.06] to-nodal-blue/[0.03] rounded-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="vf-heading opacity-0 text-center mb-14">
          <h2 className={`${type.heading} font-semibold text-nodal-blue leading-tight`}>
            What we <span className="text-nodal-violet italic">heard</span> from clinicians
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left — Featured rotating quote */}
          <div className="vf-card opacity-0 md:w-5/12 p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-nodal-violet/15 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div>
              <span className="text-5xl font-serif leading-none block mb-6 text-nodal-violet/40">
                &ldquo;&ldquo;
              </span>
              <p
                ref={quoteTextRef}
                className={`${type.subheading} text-nodal-blue font-medium leading-relaxed`}
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
                      ? 'w-8 h-2.5 bg-nodal-violet'
                      : 'w-2.5 h-2.5 bg-nodal-violet/20 hover:bg-nodal-violet/40'
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
                  quote.accent === 'nodal-violet'
                    ? 'bg-nodal-violet/[0.06] border-nodal-violet/15 hover:border-nodal-violet/30 hover:bg-nodal-violet/[0.10]'
                    : 'bg-nodal-green/[0.06] border-nodal-green/15 hover:border-nodal-green/30 hover:bg-nodal-green/[0.10]'
                }`}
              >
                <span className={`text-2xl font-serif leading-none block mb-3 ${
                  quote.accent === 'nodal-violet' ? 'text-nodal-violet/40' : 'text-nodal-green/40'
                }`}>
                  &ldquo;
                </span>
                <p className={`${quote.span === 'col-span-2' ? type.subheading : type.body} text-nodal-graphite leading-relaxed`}>
                  {quote.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
