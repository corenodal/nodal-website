import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type } from '../../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const domains = [
  { title: 'Legal foundation & governance', desc: 'Entity, named officers, executed agreements, insurance posture.' },
  { title: 'Data mapping & system of record', desc: 'A current map of every data element, system, and access path.' },
  { title: 'Infrastructure & technical safeguards', desc: 'Encryption, network isolation, key management, access control.' },
  { title: 'AI / ML technical controls', desc: 'No-training guarantees, version pinning, output checks, evaluation.' },
  { title: 'Clinical safety & quality', desc: 'Safety case, hazard log, clinician oversight, incident classes.' },
  { title: 'Consent management', desc: 'Jurisdiction-correct consent with a tamper-evident audit trail.' },
  { title: 'PHI handling in operations', desc: 'Minimum-necessary enforced in tooling, not just in policy.' },
  { title: 'Workforce & administrative', desc: 'Background checks, training, agreements, reverification.' },
  { title: 'Patient & data-subject rights', desc: 'Support for access, amendment, accounting, and restriction.' },
  { title: 'Incident response & breach notice', desc: 'Named responders, exercised runbooks, clear notification clocks.' },
  { title: 'Third-party & vendor management', desc: 'Risk-tiered, contract-bound, advance notice of changes.' },
  { title: 'AI transparency & marketing', desc: 'Every external claim substantiated before it is published.' },
  { title: 'State-specific overlays', desc: 'Additive obligations met per state where clinicians practice.' },
  { title: 'Device posture', desc: 'A documented rationale for non-device status, re-tested quarterly.' },
  { title: 'Information-sharing posture', desc: 'Architected so as not to obstruct lawful access to information.' },
  { title: 'Telehealth & licensure guardrails', desc: 'We surface the location data clinicians need; we don’t practice.' },
  { title: 'Accessibility', desc: 'Built toward WCAG 2.1 AA so the tool works for every clinician.' },
  { title: 'Retention & destruction', desc: 'Most-protective retention; certified destruction at the end.' },
  { title: 'Ongoing monitoring & audit', desc: 'Controls re-verified monthly and refreshed annually.' },
  { title: 'Pilot-specific governance', desc: 'Explicit oversight, decision rights, and stage gates.' },
];

export const TrustProgram = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pg-head', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      });
      gsap.fromTo('.pg-cell', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.035, ease: 'power3.out',
        scrollTrigger: { trigger: '.pg-grid', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="program"
      className="px-6 md:px-24 py-24 md:py-32 bg-nousna-blue relative z-10 overflow-hidden"
    >
      {/* Decorative oversized background numeral */}
      <div
        aria-hidden
        className="absolute -right-6 top-8 text-white/[0.03] text-[26vw] md:text-[18vw] font-bold leading-none select-none pointer-events-none"
      >
        20
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="pg-head opacity-0 max-w-2xl mb-14 md:mb-16">
          <p className={`${type.ui} font-semibold text-nousna-green uppercase tracking-[0.25em] mb-3`}>
            The whole program
          </p>
          <h2 className={`${type.heading} font-semibold text-white leading-tight mb-5`}>
            Twenty domains, one standard of care.
          </h2>
          <p className={`${type.body} text-slate-300 font-light leading-relaxed`}>
            The eight safeguards above sit inside a structured program covering how we are organized, how
            data is mapped, how systems are built, how the pilot is governed, and how every control is
            re-verified over time. Specifics are available to your diligence team on request.
          </p>
        </div>

        <div className="pg-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {domains.map((d, i) => (
            <div
              key={d.title}
              className="pg-cell opacity-0 group bg-white/[0.05] border border-white/10 rounded-xl p-5 md:p-6 hover:bg-white/[0.09] hover:border-nousna-green/40 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-xs font-mono font-semibold text-nousna-green tracking-widest mb-3 group-hover:text-nousna-green transition-colors">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className={`${type.content} font-semibold text-white leading-snug mb-2`}>{d.title}</p>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 inline-flex items-center gap-2.5 border border-white/15 bg-white/[0.04] rounded-full px-5 py-2.5">
          <span className="w-2 h-2 rounded-full bg-nousna-green animate-pulse" />
          <span className="text-sm font-medium text-slate-300 tracking-wide">
            United States pilot · forward readiness for Canada, the EU, the UK, Australia &amp; New Zealand, and India
          </span>
        </div>
      </div>
    </section>
  );
};
