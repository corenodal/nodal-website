import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

export const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-intro',
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.story-para',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-0 bg-nodal-blue relative z-10 overflow-hidden"
    >
      {/* Decorative background text */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.03] text-[20vw] font-bold leading-none select-none pointer-events-none pr-8"
      >
        STORY
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-24 py-12 md:py-16">
        {/* Intro */}
        <div className="story-intro mb-12 md:mb-14" style={{ opacity: 0 }}>
          <p className={`${type.ui} font-semibold text-nodal-green uppercase tracking-[0.25em] mb-3`}>
            Our Story
          </p>
          <h2 className={`${type.heading} font-semibold text-white leading-snug`}>
            How it started.
          </h2>
        </div>

        {/* Story paragraphs */}
        <div className="space-y-6 max-w-3xl">
          <p className={`story-para ${type.body} text-white/80 font-light leading-relaxed`}>
            The idea for Nodal began with lived experience. Years on the field meant frequent injuries and regular visits to clinics—each one filled with important advice, recovery instructions, and care plans. But by the time the visit ended, much of it had already begun to fade.
          </p>
          <p className={`story-para ${type.body} text-white/80 font-light leading-relaxed`}>
            Small but critical details were easy to forget—what to avoid, how to recover, even the right questions to ask. It raised a simple question: why should something this important rely on memory alone?
          </p>
          <p className={`story-para ${type.body} text-white/80 font-light leading-relaxed`}>
            That question quickly grew beyond a personal experience. Clinicians are expected to capture, recall, and communicate everything clearly in every session, often across fragmented systems—where important details can slip through.
          </p>
          <p className={`story-para ${type.body} text-white font-medium leading-relaxed`}>
            Nodal was built to bring focus, clarity, and connection back to care—helping clinicians stay present and ensuring nothing important is lost.
          </p>
        </div>
      </div>
    </section>
  );
};
