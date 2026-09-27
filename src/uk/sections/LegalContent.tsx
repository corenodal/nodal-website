import type { LegalSection } from '../copy/legal';
import { type } from '../../styles/typography';
import { slug } from '../slug';

const Table = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-sm mb-6">
    <table className="w-full min-w-[40rem] text-left">
      <thead>
        <tr className="border-b border-slate-100">
          {head.map((h) => (
            <th key={h} scope="col" className={`${type.ui} font-semibold text-nousna-blue px-5 py-4`}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {rows.map((row) => (
          <tr key={row.join('|')}>
            {row.map((cell, i) => (
              <td key={i} className={`text-sm text-nousna-graphite font-light leading-relaxed px-5 py-4 align-top ${i === 0 ? 'font-medium text-nousna-blue' : ''}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Section = ({ section }: { section: LegalSection }) => {
  const body = (
    <>
      <h2 className={`${type.subheading} font-semibold text-nousna-blue leading-snug mb-4`}>{section.heading}</h2>
      {section.table && <Table {...section.table} />}
      {section.paragraphs?.map((p) => (
        <p key={p} className={`${type.body} text-nousna-graphite font-light leading-relaxed mb-4 max-w-3xl`}>{p}</p>
      ))}
      {section.bullets && (
        <ul className="space-y-3 max-w-3xl">
          {section.bullets.map((b) => (
            <li key={b.rest} className={`relative pl-5 ${type.body} text-nousna-graphite font-light leading-relaxed`}>
              <span aria-hidden="true" className="absolute left-0 top-[0.8em] w-2.5 h-px bg-nousna-green" />
              {b.lead && <span className="font-semibold text-nousna-blue">{b.lead} </span>}
              {b.rest}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  if (section.callout) {
    return (
      <div id={slug(section.heading)} className="reveal rounded-3xl border border-nousna-green/15 bg-gradient-to-br from-nousna-green/[0.07] via-nousna-blue/[0.03] to-nousna-violet/[0.06] px-8 md:px-12 py-10">
        {body}
      </div>
    );
  }
  return <div id={slug(section.heading)} className="reveal">{body}</div>;
};

export const LegalContent = ({ sections }: { sections: LegalSection[] }) => (
  <section className="px-6 md:px-24 pb-24 md:pb-32 relative z-10">
    <div className="max-w-6xl mx-auto space-y-14">
      {sections.map((s) => <Section key={s.heading} section={s} />)}
    </div>
  </section>
);
