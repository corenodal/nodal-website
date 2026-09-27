import { type } from '../../../styles/typography';
import { ledger, type Status } from '../../copy/forUkUsers';

const groups: { status: Status; label: string; dot: string }[] = [
  { status: 'in-place', label: 'In place', dot: 'bg-nousna-green' },
  { status: 'planned', label: 'Planned / in progress', dot: 'bg-nousna-violet' },
  { status: 'not-started', label: 'Not started', dot: 'bg-slate-400' },
];

export const Ledger = () => (
  <section id="ledger" className="px-6 md:px-24 py-24 md:py-32 bg-nousna-blue relative z-10 overflow-hidden">
    <div aria-hidden className="absolute -right-6 top-8 text-white/[0.03] text-[26vw] md:text-[18vw] font-bold leading-none select-none pointer-events-none">UK</div>
    <div className="max-w-6xl mx-auto relative">
      <div className="reveal max-w-2xl mb-14">
        <h2 className={`${type.heading} font-semibold text-white leading-tight mb-4`}>{ledger.heading}</h2>
        <p className={`${type.body} text-slate-300 font-light leading-relaxed mb-3`}>{ledger.sub}</p>
        <p className="text-sm text-slate-300 font-light leading-relaxed">{ledger.note}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div key={g.status} className="reveal bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-7 hover:bg-white/[0.08] hover:border-white/20 transition-colors duration-300">
            <h3 className={`flex items-center gap-2.5 ${type.body} font-semibold text-white mb-5`}>
              <span className={`w-2.5 h-2.5 rounded-full ${g.dot}`} />
              {g.label}
            </h3>
            <ul className="space-y-5">
              {ledger.items.filter((item) => item.status === g.status).map((item) => (
                <li key={item.title}>
                  <p className={`${type.content} font-semibold text-white mb-1`}>{item.title}</p>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
