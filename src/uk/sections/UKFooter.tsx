import { Link } from 'react-router-dom';
import { type } from '../../styles/typography';
import NousnaLogo from '../../assets/nousna-logo.svg';
import { legalFootnote, disclaimer } from '../copy/footnote';
import { ukInfo } from '../copy/placeholders';

const columns = [
  { title: 'Product', links: [['Overview', '/product'], ['Features', '/features'], ['Intended purpose', '/intended-purpose']] },
  { title: 'Company', links: [['About', '/about'], ['Contact', '/contact'], ['For UK users', '/for-uk-users'], ['FAQs', '/faqs']] },
  { title: 'Legal', links: [['Privacy', '/privacy'], ['Cookies', '/cookies'], ['Sub-processors', '/sub-processors']] },
];

export const UKFooter = ({ showDisclaimer = false }: { showDisclaimer?: boolean }) => (
  <footer className="pt-24 pb-12 px-6 md:px-24 border-t relative z-10 bg-nousna-blue border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <img src={NousnaLogo} alt="Nousna" className="h-16 brightness-0 invert mb-6" />
          <p className={`${type.ui} font-light leading-relaxed text-slate-400`}>
            A documentation assistant for independent mental-health practices.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-6">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-6 text-white">{col.title}</h4>
              <ul className={`space-y-4 ${type.ui} font-light text-slate-400`}>
                {col.links.map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="transition-colors hover:text-nousna-green">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={`pt-8 border-t border-slate-700/50 ${type.ui} font-light text-slate-500 space-y-4`}>
        {showDisclaimer && (
          <p className="leading-relaxed max-w-3xl">{disclaimer} Last updated {ukInfo.lastUpdated}.</p>
        )}
        <p className="leading-relaxed max-w-3xl">{legalFootnote}</p>
        <p>© 2026 Nodal, Inc. Informational, not a certification or warranty.</p>
      </div>
    </div>
  </footer>
);
