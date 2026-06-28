import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

export const AboutStory = () => {
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
      className="min-h-[75vh] flex items-center bg-nodal-blue relative z-10 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.03] text-[20vw] font-bold leading-none select-none pointer-events-none pr-8"
      >
        STORY
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-24 py-24 md:py-32 w-full">
        <div className="story-intro mb-12 md:mb-14" style={{ opacity: 0 }}>
          <p className={`${type.ui} font-semibold text-nodal-green uppercase tracking-[0.25em] mb-3`}>
            Our Story
          </p>
          <h2 className={`${type.heading} font-semibold text-white leading-snug`}>
            How it started.
          </h2>
        </div>

        <div className="space-y-6 max-w-3xl">
          <p className={`story-para ${type.body} text-white/80 font-light leading-relaxed`}>
            We started with a question that kept coming up in conversations with practitioners: why does the hardest part of clinical work happen after the patient leaves?
          </p>
          <p className={`story-para ${type.body} text-white/80 font-light leading-relaxed`}>
            Therapists, psychologists, and psychiatrists spend years training to be present: to listen, to hold complexity, to notice what is not said. Then they spend their evenings translating that presence into documentation formats designed for billing systems, not clinical thinking.
          </p>
          <p className={`story-para ${type.body} text-white/80 font-light leading-relaxed`}>
            We watched practitioners stay late, work weekends, and carry the cognitive weight of notes that never felt like they captured what actually happened in the room.
          </p>
          <p className={`story-para ${type.body} text-white/80 font-light leading-relaxed`}>
            That gap, between what clinicians experience in session and what the system demands afterward, is where Nodal begins.
          </p>
          <p className={`story-para ${type.body} text-white font-medium leading-relaxed`}>
            Nodal was built to close that gap. It removes the overhead. The clinical judgment stays with you, so you can be fully present in the session and leave when it is over.
          </p>
        </div>
      </div>
    </section>
  );
};
