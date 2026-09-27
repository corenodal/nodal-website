import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { type } from '../../../styles/typography';
import { whatThisIs, eligibility } from '../../copy/forUkUsers';

export const WhatThisIs = () => (
  <section id="what" className="px-6 md:px-24 relative z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div className="reveal">
        <h2 className={`${type.heading} font-semibold text-nousna-blue leading-tight mb-6`}>{whatThisIs.heading}</h2>
        {whatThisIs.paragraphs.map((p) => (
          <p key={p} className={`${type.body} text-nousna-graphite font-light leading-relaxed mb-4`}>{p}</p>
        ))}
      </div>
      <div className="reveal rounded-3xl border border-nousna-green/15 bg-gradient-to-br from-nousna-green/[0.07] via-nousna-blue/[0.03] to-nousna-violet/[0.06] px-8 md:px-10 py-10">
        <h3 className={`${type.subheading} font-semibold text-nousna-blue mb-4`}>Intended purpose</h3>
        {whatThisIs.purpose.map((p) => (
          <p key={p} className={`${type.content} text-nousna-graphite font-light leading-relaxed mb-4`}>{p}</p>
        ))}
        <Link to="/intended-purpose" className={`inline-flex items-center gap-2 text-nousna-green font-semibold ${type.content} hover:gap-3 transition-all`}>
          Read the full statement
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export const Eligibility = () => (
  <section id="eligibility" className="px-6 md:px-24 py-24 md:py-32 relative z-10">
    <div className="max-w-6xl mx-auto">
      <h2 className={`reveal ${type.heading} font-semibold text-nousna-blue leading-tight mb-10`}>Who can take part, and who cannot.</h2>
      <div className="border-t border-slate-200">
        {eligibility.map((row) => (
          <div key={row.who} className="reveal grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6 border-b border-slate-200">
            <p className={`md:col-span-5 ${type.body} font-semibold text-nousna-blue`}>{row.who}</p>
            <div className="md:col-span-7">
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${
                row.eligible ? 'bg-nousna-green/10 text-nousna-green' : 'bg-slate-100 text-nousna-graphite'
              }`}>
                {row.eligible ? 'Eligible' : 'Not eligible'}
              </span>
              <p className={`${type.content} text-nousna-graphite font-light leading-relaxed`}>{row.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
