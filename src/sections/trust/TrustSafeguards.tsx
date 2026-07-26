import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Handshake, Lock, Cpu, PenLine, ClipboardCheck, HeartPulse, LifeBuoy, Network } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { type } from '../../styles/typography';

gsap.registerPlugin(ScrollTrigger);

type Accent = 'green' | 'violet';

type Safeguard = {
  icon: LucideIcon;
  accent: Accent;
  label: string;
  title: string;
  body: string;
  details: { lead: string; rest: string }[];
};

const safeguards: Safeguard[] = [
  {
    icon: Handshake,
    accent: 'green',
    label: 'Our role',
    title: 'Built to be your business associate',
    body: 'Before we touch any patient information, we sign a Business Associate Agreement with your practice. You remain the covered entity and custodian of the record; Nousna processes information only to provide the service you’ve asked for, within the limits of that agreement.',
    details: [
      { lead: 'Named accountability.', rest: 'A Privacy Officer, a Security Officer, and a Clinical Safety Officer are appointed and responsible for the program.' },
      { lead: 'Agreements all the way down.', rest: 'We hold business-associate agreements with our own infrastructure and model providers, not just with you.' },
    ],
  },
  {
    icon: Lock,
    accent: 'violet',
    label: 'Data protection',
    title: 'Protected in transit and at rest',
    body: 'Nousna runs on HIPAA-eligible cloud infrastructure with safeguards an auditor can verify, not just read about.',
    details: [
      { lead: 'Encrypted everywhere.', rest: 'Information is encrypted while moving and while stored, with managed keys and modern transport security.' },
      { lead: 'Least-privilege access.', rest: 'Entry requires multi-factor authentication; access is granted by role and reviewed; developer access to production data is restricted and logged.' },
      { lead: 'No quiet leaks.', rest: 'Patient data is technically prevented from reaching chat, email, support tickets, and test systems — not just discouraged by policy.' },
    ],
  },
  {
    icon: Cpu,
    accent: 'violet',
    label: 'Disciplined AI',
    title: 'Your patients’ words don’t train a model',
    body: 'We treat the AI layer with the same change-control rigor as clinical software.',
    details: [
      { lead: 'No training on your data.', rest: 'We prevent it contractually and technically, using an enterprise model endpoint configured for zero data retention.' },
      { lead: 'Less data, by design.', rest: 'Identifying details are minimized before anything reaches the model.' },
      { lead: 'Controlled changes.', rest: 'The exact model version is pinned in production; any change runs through evaluation and clinical sign-off before it ships.' },
      { lead: 'Checked output.', rest: 'Drafts are validated, and medication, dose, and diagnosis details are checked against what was actually said.' },
    ],
  },
  {
    icon: PenLine,
    accent: 'green',
    label: 'Your judgment',
    title: 'You stay the author of every note',
    body: 'Nousna drafts; you review, edit, and sign. The clinician is always the author of the record and the decision-maker in care.',
    details: [
      { lead: 'Not a medical device.', rest: 'Nousna is documentation support, designed to assist your judgment rather than substitute for it.' },
      { lead: 'A clear boundary.', rest: 'We keep the clinician’s record distinct from private process notes, and we don’t obstruct your access to information.' },
    ],
  },
  {
    icon: ClipboardCheck,
    accent: 'green',
    label: 'Consent first',
    title: 'Recording happens only with consent',
    body: 'Consent is captured before recording, with a tamper-evident trail of who consented, to what, and when.',
    details: [
      { lead: 'Most-protective rule.', rest: 'Nousna defaults to all-party consent everywhere and applies the strictest applicable state rule.' },
      { lead: 'Patients can decline.', rest: 'A patient can refuse AI assistance with no change to their care; you simply document by hand.' },
      { lead: 'Sensitive data, handled with care.', rest: 'Extra protections apply where states require them, and by default we delete session audio once your note is signed.' },
    ],
  },
  {
    icon: HeartPulse,
    accent: 'violet',
    label: 'Clinical safety',
    title: 'Safety is engineered, not assumed',
    body: 'We run a clinical-safety program with named clinical oversight rather than treating safety as an afterthought.',
    details: [
      { lead: 'A living hazard log.', rest: 'Risks are catalogued, mitigated, and reviewed on a set cadence.' },
      { lead: 'Ongoing evaluation.', rest: 'We continually evaluate how the product performs on what matters most, and handle sensitive risk content with particular care.' },
      { lead: 'A way to raise concerns.', rest: 'Clinicians can flag an AI-related concern quickly; it routes to the Clinical Safety Officer.' },
    ],
  },
  {
    icon: LifeBuoy,
    accent: 'green',
    label: 'If something goes wrong',
    title: 'We’re prepared to respond',
    body: 'We maintain a written, practiced incident-response plan rather than improvising under pressure.',
    details: [
      { lead: 'Named responders.', rest: 'On-call roles, pre-arranged forensic and legal support, and a runbook we exercise.' },
      { lead: 'Prompt notice.', rest: 'If a reportable breach affecting your practice occurred, we are built to notify you within the timeframes the law and our agreement require.' },
    ],
  },
  {
    icon: Network,
    accent: 'violet',
    label: 'Our vendors',
    title: 'Everyone who touches the system is vetted',
    body: 'Every third party in our supply chain is risk-tiered, contract-bound, and reviewed on a set cadence.',
    details: [
      { lead: 'A maintained register.', rest: 'We track each sub-processor, what data it touches, and where.' },
      { lead: 'Advance notice.', rest: 'If we plan a material change to the sub-processors handling your data, you hear about it ahead of time.' },
    ],
  },
];

const accentMap = {
  green: {
    tile: 'bg-nousna-green/10 text-nousna-green',
    label: 'text-nousna-green',
    num: 'text-nousna-green/10',
    hoverBorder: 'hover:border-nousna-green/30',
    dash: 'bg-nousna-green',
  },
  violet: {
    tile: 'bg-nousna-violet/10 text-nousna-violet',
    label: 'text-nousna-violet',
    num: 'text-nousna-violet/10',
    hoverBorder: 'hover:border-nousna-violet/30',
    dash: 'bg-nousna-violet',
  },
} as const;

export const TrustSafeguards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sg-posture', { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: '.sg-posture', start: 'top 82%' },
      });
      gsap.fromTo('.sg-head', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: '.sg-head', start: 'top 78%' },
      });
      gsap.fromTo('.sg-card', { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sg-grid', start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="safeguards" className="relative z-10">
      {/* Posture — a gradient statement panel */}
      <div className="px-6 md:px-24 pt-20 md:pt-24">
        <div className="sg-posture opacity-0 max-w-6xl mx-auto relative overflow-hidden rounded-3xl border border-nousna-green/15 px-8 md:px-14 py-14 md:py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-nousna-green/[0.07] via-nousna-blue/[0.03] to-nousna-violet/[0.06] pointer-events-none" />
          <div className="relative max-w-3xl">
            <p className={`${type.ui} font-semibold text-nousna-green uppercase tracking-[0.25em] mb-5`}>
              Where we stand
            </p>
            <p className={`${type.subheading} text-nousna-blue font-light leading-relaxed`}>
              Nousna is <span className="font-semibold">HIPAA-aligned</span>. We meet our obligations as a
              business associate, handle protected health information{' '}
              <span className="font-semibold">only to serve your practice</span>, and sign a Business
              Associate Agreement before any patient information reaches us.
            </p>
          </div>
        </div>
      </div>

      {/* Safeguards — bento card grid */}
      <div className="px-6 md:px-24 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="sg-head opacity-0 max-w-2xl mb-14 md:mb-16">
            <p className={`${type.ui} font-semibold text-nousna-violet uppercase tracking-[0.25em] mb-3`}>
              How we protect your patients
            </p>
            <h2 className={`${type.heading} font-semibold text-nousna-blue leading-tight mb-5`}>
              Eight safeguards, on one <span className="text-nousna-green italic">connected</span> thread.
            </h2>
            <p className={`${type.body} text-nousna-graphite font-light leading-relaxed`}>
              Each safeguard is one node in a wider privacy, security, and clinical-safety program. The
              full program spans twenty domains &mdash; summarized further down the page.
            </p>
          </div>

          <div className="sg-grid grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {safeguards.map((s, i) => {
              const a = accentMap[s.accent];
              return (
                <article
                  key={s.title}
                  className={`sg-card opacity-0 group relative overflow-hidden bg-white rounded-2xl border border-slate-100 ${a.hoverBorder} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-7 md:p-8`}
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-3 right-3 text-[5.5rem] leading-none font-bold select-none ${a.num}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${a.tile}`}>
                        <s.icon className="w-5 h-5" strokeWidth={1.8} />
                      </div>
                      <span className={`${type.ui} font-semibold uppercase tracking-[0.18em] ${a.label}`}>
                        {s.label}
                      </span>
                    </div>

                    <h3 className={`${type.subheading} font-semibold text-nousna-blue leading-snug mb-3`}>
                      {s.title}
                    </h3>
                    <p className={`${type.content} text-nousna-graphite font-light leading-relaxed mb-5`}>
                      {s.body}
                    </p>

                    <ul className="space-y-2.5">
                      {s.details.map((d) => (
                        <li key={d.lead} className="relative pl-5 text-sm text-nousna-graphite font-light leading-relaxed">
                          <span aria-hidden="true" className={`absolute left-0 top-[0.65em] w-2.5 h-px ${a.dash}`} />
                          <span className="font-semibold text-nousna-blue">{d.lead}</span> {d.rest}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
