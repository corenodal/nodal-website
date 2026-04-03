import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { type } from '../styles/typography';

export const ProductHero = ({ isLoading = false }: { isLoading?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
        .fromTo(
          ".product-hero-word",
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out' },
          "-=0.6"
        )
        .fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.6'
        )
        .fromTo(
          imageRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.6'
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <section ref={containerRef} className="relative z-10 pt-16 md:pt-20 min-h-screen">
      <div className="relative">
        {/* Purple background — fixed height so it doesn't shift during animation */}
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-nodal-violet/90" />

        {/* Content */}
        <div className="relative max-w-screen-2xl mx-auto px-6 md:px-20 pt-6 md:pt-10">
          {/* Title + subtitle */}
          <div ref={titleRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <h1 className={`${type.display} font-semibold tracking-tight leading-[1.1] text-white`}>
              <div className="overflow-hidden">
                <span className="product-hero-word block" style={{ opacity: 0, transform: 'translateY(100%)' }}>The Center of Your Clinical Workflow</span>
              </div>
            </h1>
          </div>
          <p
            ref={descRef}
            className={`${type.subheading} text-white/80 font-light mt-2 md:mt-3`}
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            Nodal connects every step of care in one place, so nothing gets lost.
          </p>

          {/* Image — right-aligned, overflowing purple into white */}
          <div className="mt-5 md:mt-8 md:ml-[15%] md:max-w-[72%]">
            <div
              ref={imageRef}
              style={{ opacity: 0, transform: 'translateY(40px)' }}
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
      <div className="h-10 md:h-16" />
    </section>
  );
};
