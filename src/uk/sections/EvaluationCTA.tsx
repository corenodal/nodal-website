import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { type } from '../../styles/typography';
import { homeEvaluation as copy } from '../copy/home';

export const EvaluationCTA = () => (
  <section className="px-6 md:px-24 py-20 md:py-28 bg-nousna-green/[0.06] border-t border-nousna-green/15 relative z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
      <div>
        <h2 className={`${type.heading} font-semibold text-nousna-blue leading-tight mb-5`}>{copy.heading}</h2>
        <p className={`${type.body} text-nousna-graphite font-light leading-relaxed mb-8 max-w-xl`}>{copy.body}</p>
        <ul className="space-y-3">
          {copy.facts.map((fact) => (
            <li key={fact} className={`relative pl-5 ${type.body} text-nousna-blue font-medium`}>
              <span aria-hidden="true" className="absolute left-0 top-[0.8em] w-2.5 h-px bg-nousna-green" />
              {fact}
            </li>
          ))}
        </ul>
      </div>
      <aside className="bg-white border border-slate-100 rounded-2xl p-7 md:p-9 shadow-sm">
        <h3 className={`${type.subheading} font-semibold text-nousna-blue mb-4`}>{copy.card.heading}</h3>
        <p className={`${type.content} text-nousna-graphite font-light leading-relaxed mb-8`}>{copy.card.body}</p>
        <Link
          to={copy.card.cta.to}
          className={`block text-center w-full px-8 py-4 bg-nousna-green text-white ${type.body} font-semibold rounded-xl hover:brightness-105 transition-all hover:-translate-y-0.5 shadow-md hover:shadow-xl`}
        >
          {copy.card.cta.label}
        </Link>
        <Link
          to={copy.card.link.to}
          className={`mt-5 inline-flex items-center gap-2 text-nousna-green font-semibold ${type.content} hover:gap-3 transition-all`}
        >
          {copy.card.link.label}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </aside>
    </div>
  </section>
);
