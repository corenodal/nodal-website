import { Check, X } from 'lucide-react';
import { type } from '../../styles/typography';
import { intendedPurpose } from '../copy/intendedPurpose';

export const Statement = () => (
  <section id="statement" className="px-6 md:px-24 relative z-10">
    <div className="reveal max-w-6xl mx-auto rounded-3xl border border-nousna-green/15 bg-gradient-to-br from-nousna-green/[0.07] via-nousna-blue/[0.03] to-nousna-violet/[0.06] px-8 md:px-14 py-12 md:py-14">
      <div className="max-w-3xl space-y-5">
        {intendedPurpose.statement.map((p) => (
          <p key={p} className={`${type.subheading} text-nousna-blue font-light leading-relaxed`}>{p}</p>
        ))}
      </div>
    </div>
  </section>
);

const ScopeList = ({ title, items, does }: { title: string; items: string[]; does: boolean }) => (
  <div className="reveal bg-white border border-slate-100 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <h2 className={`${type.subheading} font-semibold text-nousna-blue mb-6`}>{title}</h2>
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className={`mt-0.5 w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
            does ? 'bg-nousna-green/10 text-nousna-green' : 'bg-slate-100 text-nousna-graphite'
          }`}>
            {does ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : <X className="w-3.5 h-3.5" strokeWidth={3} />}
          </span>
          <span className={`${type.content} text-nousna-graphite font-light leading-relaxed`}>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Scope = () => (
  <section id="scope-lists" className="px-6 md:px-24 py-24 md:py-32 relative z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <ScopeList title="What Nousna does" items={intendedPurpose.does} does />
      <ScopeList title="What Nousna does not do" items={intendedPurpose.doesNot} does={false} />
    </div>
  </section>
);

export const TheTest = () => (
  <section id="test" className="px-6 md:px-24 py-24 md:py-32 bg-nousna-blue relative z-10 mb-24 md:mb-32 overflow-hidden">
    <div aria-hidden className="absolute -right-6 top-1/2 -translate-y-1/2 text-white/[0.03] text-[26vw] md:text-[18vw] font-bold leading-none select-none pointer-events-none">?</div>
    <div className="reveal max-w-4xl mx-auto relative">
      <h2 className={`${type.ui} font-semibold text-nousna-green mb-6`}>{intendedPurpose.test.heading}</h2>
      <p className={`${type.heading} font-semibold text-white leading-snug mb-8`}>{intendedPurpose.test.question}</p>
      <p className={`${type.body} text-slate-300 font-light leading-relaxed max-w-3xl`}>{intendedPurpose.test.answer}</p>
    </div>
  </section>
);
