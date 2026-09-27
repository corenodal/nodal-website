import { Plus } from 'lucide-react';
import { type } from '../../styles/typography';
import { faqGroups } from '../copy/faqs';
import { slug } from '../slug';

export const FAQGroups = () => (
  <section className="px-6 md:px-24 pb-24 md:pb-32 relative z-10">
    <div className="max-w-6xl mx-auto space-y-16">
      {faqGroups.map((group) => (
        <div key={group.title} id={slug(group.title)} className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20 items-start">
          <h2 className={`reveal ${type.heading} font-semibold text-nousna-blue leading-tight lg:sticky lg:top-32`}>{group.title}</h2>
          <div className="border-t border-slate-200">
            {group.items.map((item) => (
              <details key={item.q} className="reveal group border-b border-slate-200">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none py-6 focus-visible:outline-2 focus-visible:outline-nousna-green rounded">
                  <span className={`${type.subheading} font-medium text-nousna-blue leading-snug group-hover:text-nousna-green transition-colors`}>
                    {item.q}
                  </span>
                  <span className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-nousna-green/10 text-nousna-green flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                    <Plus className="w-4 h-4" strokeWidth={2} />
                  </span>
                </summary>
                <div className="pb-6 space-y-4">
                  {item.a.map((p) => (
                    <p key={p} className={`${type.body} text-nousna-graphite font-light leading-relaxed`}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
