import { ArrowDown } from 'lucide-react';
import { type } from '../../styles/typography';

export type PageLink = { id: string; label: string };

const NAV_OFFSET = 120;

const jump = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET, behavior: 'smooth' });
};

export const OnThisPage = ({ items }: { items: PageLink[] }) => (
  <nav aria-label="On this page" className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
    <p className={`${type.ui} font-semibold text-nousna-graphite-soft px-6 pt-5 pb-4 border-b border-slate-100`}>On this page</p>
    <ul className="py-2">
      {items.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            onClick={() => jump(item.id)}
            className={`group w-full flex items-center justify-between gap-3 px-6 py-2.5 text-left ${type.content} text-nousna-blue hover:bg-nousna-green/[0.06] focus-visible:outline-2 focus-visible:outline-nousna-green transition-colors`}
          >
            {item.label}
            <ArrowDown className="w-4 h-4 text-nousna-green opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </li>
      ))}
    </ul>
  </nav>
);
