import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const ProductHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
        .fromTo(
          imageRef.current,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          '-=0.6'
        )
        .fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-10 pt-28 md:pt-32 min-h-screen">
      <div className="relative">
        {/* Purple background — stops short so image overflows */}
        <div className="absolute inset-x-0 top-0 h-[80%] bg-nodal-violet" />

        {/* Content */}
        <div className="relative max-w-screen-2xl mx-auto px-6 md:px-24 pt-10 md:pt-16">
          {/* Line 1 of title — spans full width */}
          <div ref={titleRef}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] text-white whitespace-nowrap">
              A Centralized Clinical Node
            </h1>
          </div>

          {/* Line 2 + image side by side */}
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 mt-2 md:mt-3">
            {/* Left column: description aligned with image top */}
            <div className="flex-shrink-0 md:w-[20%] flex flex-col justify-start">
              <p
                ref={descRef}
                className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-sm"
              >
                Designed using research on cognitive load, structured thinking, and clinical decision pathways.
              </p>
            </div>

            {/* Right column: image overflowing purple into white */}
            <div
              ref={imageRef}
              className="flex-1 min-w-0"
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] border border-slate-100 bg-white">
                <img
                  src="/img.png"
                  alt="Nodal clinical assistant interface"
                  className="w-full h-auto block"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full aspect-[16/10] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                        <div class="text-center px-8">
                          <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-nodal-violet/10 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7B6EF6" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                          </div>
                          <p class="text-sm text-slate-400 font-medium">Product Screenshot</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing — transparent, lets app bg show through like main page */}
      <div className="h-16 md:h-24" />
    </section>
  );
};
