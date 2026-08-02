import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';
import { type } from '../../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'Do you train AI models on our patients’ data?',
    a: 'No. We prevent it both contractually and technically. Your data is sent to an enterprise model endpoint configured so that it is not retained and is not used to train, fine-tune, or improve any model, and we minimize identifying information before anything reaches the model.',
  },
  {
    q: 'Where is our data hosted, and is it encrypted?',
    a: 'Data is processed and stored on HIPAA-eligible cloud infrastructure in the United States. It is encrypted in transit and at rest, with managed encryption keys and least-privilege access controls. We can share a security overview describing this in more detail under a confidentiality agreement.',
  },
  {
    q: 'Will you sign a Business Associate Agreement?',
    a: 'Yes — always, and before any protected health information reaches us. The BAA, together with the pilot agreement, is the document that governs how we handle your data.',
  },
  {
    q: 'Can a patient decline to be recorded?',
    a: 'Yes. Consent is captured before any recording, Nousna defaults to all-party consent and applies the most protective state rule, and a patient can decline AI assistance entirely without any change to their care. You simply document the session by hand.',
  },
  {
    q: 'Who is responsible for the clinical note?',
    a: 'You are. Nousna produces a draft; the clinician reviews, edits, and signs it. The clinician is always the author of the record and the decision-maker in care. Nousna is a documentation assistant, not a medical device.',
  },
  {
    q: 'What happens to session audio?',
    a: 'By default, session audio is deleted once the clinician signs the note. Retention follows a most-protective-rule schedule by data type and state, and at the end of the research study your data is returned or securely destroyed, with certification on request.',
  },
  {
    q: 'How would we hear about a breach?',
    a: 'We maintain a written, practiced incident-response plan with named responders and pre-arranged forensic and legal support. If a reportable breach affecting your practice occurred, we are built to notify you promptly and within the timeframes required by law and by our agreement with you.',
  },
  {
    q: 'Are you SOC 2 or HITRUST certified?',
    a: 'We are an early-stage company that runs its program to that standard, and independent third-party assessment (SOC 2 Type II, then HITRUST) is on our roadmap as we scale. We’d rather tell you exactly where we are than imply a certification we don’t yet hold. In the meantime, we’ll share our security and privacy documentation directly with your team.',
  },
  {
    q: 'How do you handle state-specific rules?',
    a: 'On top of our base controls, we apply the additional obligations each state imposes where your clinicians practice — for example, recording-consent rules, mental-health-specific consent and disclosure rules, and consumer-health-data rules — defaulting to the most protective standard.',
  },
];

export const TrustFAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-head',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: '.faq-list', start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="px-6 md:px-24 py-24 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
        {/* Left — sticky heading */}
        <div className="faq-head opacity-0 lg:sticky lg:top-32">
          <p className={`${type.ui} font-semibold text-nousna-violet uppercase tracking-[0.25em] mb-3`}>
            Diligence questions
          </p>
          <h2 className={`${type.heading} font-semibold text-nousna-blue leading-tight mb-6`}>
            What your compliance team will ask.
          </h2>
          <p className={`${type.body} text-nousna-graphite font-light leading-relaxed max-w-sm`}>
            Straight answers to the questions we hear most from privacy, security, and clinical leads
            evaluating a research study.
          </p>
        </div>

        {/* Right — accordion */}
        <div className="faq-list border-t border-slate-200">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item opacity-0 group border-b border-slate-200">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none py-6">
                <span className={`${type.subheading} font-medium text-nousna-blue leading-snug group-hover:text-nousna-green transition-colors`}>
                  {item.q}
                </span>
                <span className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-nousna-green/10 text-nousna-green flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                  <Plus className="w-4 h-4" strokeWidth={2} />
                </span>
              </summary>
              <p className={`${type.body} text-nousna-graphite font-light leading-relaxed pb-6`}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
