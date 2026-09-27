import { Handshake, MapPin, Cpu, PenLine, Mic, UserCheck, Lock, LifeBuoy } from 'lucide-react';
import { type } from '../../../styles/typography';
import { design } from '../../copy/forUkUsers';

const icons = [Handshake, MapPin, Cpu, PenLine, Mic, UserCheck, Lock, LifeBuoy];

export const Design = () => (
  <section id="design" className="px-6 md:px-24 py-24 md:py-32 bg-white border-y border-slate-100 relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="reveal max-w-2xl mb-12">
        <h2 className={`${type.heading} font-semibold text-nousna-blue leading-tight mb-5`}>{design.heading}</h2>
        <p className={`${type.body} text-nousna-graphite font-light leading-relaxed`}>{design.lead}</p>
      </div>
      <div className="border-t border-slate-200">
        {design.items.map((item, i) => {
          const Icon = icons[i];
          const green = i % 2 === 0;
          return (
            <article key={item.title} className="reveal grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 border-b border-slate-200">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    green ? 'bg-nousna-green/10 text-nousna-green' : 'bg-nousna-violet/10 text-nousna-violet'
                  }`}>
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className={`${type.ui} font-semibold ${green ? 'text-nousna-green' : 'text-nousna-violet'}`}>{item.label}</span>
                </div>
                <h3 className={`${type.subheading} font-semibold text-nousna-blue leading-snug`}>{item.title}</h3>
              </div>
              <div className="md:col-span-8 max-w-3xl">
                <p className={`${type.body} text-nousna-graphite font-light leading-relaxed mb-5`}>{item.body}</p>
                <ul className="space-y-3">
                  {item.details.map((d) => (
                    <li key={d.lead} className={`relative pl-5 ${type.content} text-nousna-graphite font-light leading-relaxed`}>
                      <span aria-hidden="true" className={`absolute left-0 top-[0.8em] w-2.5 h-px ${green ? 'bg-nousna-green' : 'bg-nousna-violet'}`} />
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
  </section>
);
