import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type } from '../../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const docs = [
  'Business Associate Agreement (template)',
  'Security & privacy program overview',
  'Data-flow and sub-processor summary',
  'Incident-response summary',
  'Consent and retention overview',
  'AI transparency statement',
];

export const TrustClose = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cl-reveal',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="docs" className="px-6 md:px-24 py-24 md:py-32 bg-nousna-green/[0.06] border-t border-nousna-green/15 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
        {/* Left — how we hold ourselves */}
        <div className="cl-reveal opacity-0">
          <p className={`${type.ui} font-semibold text-nousna-violet uppercase tracking-[0.25em] mb-4`}>
            How we hold ourselves
          </p>
          <p className={`${type.subheading} font-medium text-nousna-blue leading-snug mb-6`}>
            A small company that holds itself to a large company&rsquo;s discipline.
          </p>
          <p className={`${type.body} text-nousna-graphite font-light leading-relaxed mb-4`}>
            Nousna is early, and we treat privacy, security, and clinical safety as a continuous practice
            rather than a one-time checklist. We monitor our controls, review them monthly, refresh them
            annually, and are working toward independent third-party assessment as we grow.
          </p>
          <p className={`${type.body} text-nousna-graphite font-light leading-relaxed`}>
            If your team needs more than this page to complete its diligence, just ask. We&rsquo;ll walk
            you through our program directly, under a confidentiality agreement.
          </p>
        </div>

        {/* Right — available on request */}
        <aside className="cl-reveal opacity-0 bg-white border border-slate-100 rounded-2xl p-7 md:p-8 shadow-sm">
          <h3 className={`${type.subheading} font-semibold text-nousna-blue mb-6`}>Available on request</h3>
          <ul className="space-y-3 mb-8">
            {docs.map((d) => (
              <li key={d} className="relative pl-6 text-sm md:text-base text-nousna-graphite font-light leading-relaxed">
                <span aria-hidden="true" className="absolute left-0 top-[0.45em] w-2.5 h-2.5 rounded-[3px] border-[1.5px] border-nousna-green" />
                {d}
              </li>
            ))}
          </ul>
          <p className="text-xs font-medium uppercase tracking-wider text-nousna-graphite-soft border-t border-slate-100 pt-5">
            Shared with your diligence team under a confidentiality agreement. Email{' '}
            <a href="mailto:trust@nousna.com" className="text-nousna-green hover:text-nousna-blue transition-colors normal-case tracking-normal">
              trust@nousna.com
            </a>
            .
          </p>
        </aside>

        {/* Disclaimer */}
        <p className="cl-reveal opacity-0 lg:col-span-2 text-sm text-nousna-graphite-soft font-light leading-relaxed border-t border-slate-200 pt-8 mt-4">
          This page describes Nousna&rsquo;s privacy, security, and clinical-safety program for
          informational purposes only. It is not a warranty, guarantee, or certification, and it does not
          by itself create legal rights or obligations. &ldquo;HIPAA-aligned&rdquo; means Nousna is
          designed to meet the obligations that apply to it as a business associate; HIPAA does not provide
          a government certification of compliance, and no certification is implied. SOC 2 and HITRUST are
          described as roadmap items and are not represented as completed. The terms that govern any pilot
          are set out in the Business Associate Agreement and pilot agreement between Nousna and your
          practice. Capabilities described here reflect our current program and may change as the product
          and the law evolve.
          <span className="block mt-4 text-xs uppercase tracking-wider text-nousna-graphite-soft/80">
            Informational — not a certification or warranty · Last updated April 2026
          </span>
        </p>
      </div>
    </section>
  );
};
