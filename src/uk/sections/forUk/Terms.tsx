import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { type } from '../../../styles/typography';
import { transfer, agreements, asks, notAsking, inWriting } from '../../copy/forUkUsers';

const Dash = () => <span aria-hidden="true" className="absolute left-0 top-[0.8em] w-2.5 h-px bg-nousna-green" />;

export const Transfer = () => (
  <section id="transfer" className="px-6 md:px-24 py-24 md:py-32 relative z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
      <div className="reveal">
        <h2 className={`${type.heading} font-semibold text-nousna-blue leading-tight mb-6`}>{transfer.heading}</h2>
        {transfer.paragraphs.map((p) => (
          <p key={p} className={`${type.body} text-nousna-graphite font-light leading-relaxed mb-4`}>{p}</p>
        ))}
      </div>
      <aside className="reveal bg-white border border-slate-100 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <h3 className={`${type.subheading} font-semibold text-nousna-blue mb-4`}>{transfer.noClaims.title}</h3>
        <p className={`${type.content} text-nousna-graphite font-light leading-relaxed`}>{transfer.noClaims.body}</p>
      </aside>
    </div>
  </section>
);

const ListCard = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="reveal bg-white border border-slate-100 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <h3 className={`${type.subheading} font-semibold text-nousna-blue mb-6`}>{title}</h3>
    <ul className="space-y-3">{children}</ul>
  </div>
);

export const Agreements = () => (
  <section id="agreements" className="px-6 md:px-24 pb-24 md:pb-32 relative z-10">
    <div className="max-w-6xl mx-auto">
      <h2 className={`reveal ${type.heading} font-semibold text-nousna-blue leading-tight mb-10`}>What you would be agreeing to</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {agreements.map((a) => (
          <ListCard key={a.title} title={a.title}>
            {a.items.map((item) => (
              <li key={item} className={`relative pl-5 ${type.content} text-nousna-graphite font-light leading-relaxed`}><Dash />{item}</li>
            ))}
          </ListCard>
        ))}
      </div>
      <div id="asks" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ListCard title="What we ask of you">
          {asks.map((d) => (
            <li key={d.lead} className={`relative pl-5 ${type.content} text-nousna-graphite font-light leading-relaxed`}>
              <Dash /><span className="font-semibold text-nousna-blue">{d.lead}</span> {d.rest}
            </li>
          ))}
        </ListCard>
        <ListCard title="What we are not asking of you">
          {notAsking.map((item) => (
            <li key={item} className={`relative pl-5 ${type.content} text-nousna-graphite font-light leading-relaxed`}><Dash />{item}</li>
          ))}
        </ListCard>
      </div>
    </div>
  </section>
);

export const InWriting = () => (
  <section id="in-writing" className="px-6 md:px-24 py-24 md:py-32 bg-nousna-green/[0.06] border-t border-nousna-green/15 relative z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
      <div className="reveal">
        <h2 className={`${type.heading} font-semibold text-nousna-blue leading-tight mb-4`}>{inWriting.heading}</h2>
        <p className={`${type.body} text-nousna-graphite font-light leading-relaxed mb-8`}>{inWriting.lead}</p>
        <ul className="space-y-3">
          {inWriting.items.map((item) => (
            <li key={item} className={`relative pl-5 ${type.content} text-nousna-graphite font-light leading-relaxed`}><Dash />{item}</li>
          ))}
        </ul>
      </div>
      <aside className="reveal lg:sticky lg:top-32 bg-white border border-slate-100 rounded-2xl p-7 md:p-8 shadow-sm">
        <h3 className={`${type.subheading} font-semibold text-nousna-blue mb-4`}>Start a conversation.</h3>
        <p className={`${type.content} text-nousna-graphite font-light leading-relaxed mb-6`}>
          Tell us a little about your practice and we will send the two agreements and the underlying documentation so you can look at them properly before deciding anything.
        </p>
        <Link
          to="/contact"
          className={`inline-block px-8 py-4 bg-nousna-green text-white ${type.body} font-semibold rounded-xl hover:brightness-105 transition-all hover:-translate-y-0.5 shadow-md hover:shadow-xl`}
        >
          Start a conversation
        </Link>
        <p className="text-xs text-nousna-graphite-soft font-light leading-relaxed mt-6">
          Independent practices in England, Scotland and Wales. NHS organisations and Northern Ireland practices are not eligible at this stage.
        </p>
      </aside>
    </div>
  </section>
);
