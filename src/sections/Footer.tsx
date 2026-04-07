import { Link, useLocation } from 'react-router-dom';
import { type } from '../styles/typography';

export const Footer = ({ dark = false }: { dark?: boolean }) => {
  const location = useLocation();

  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    if (location.pathname === path && !path.includes('#')) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const linkClass = `transition-colors ${dark ? 'hover:text-nodal-green' : 'hover:text-nodal-blue'}`;

  return (
    <footer
      className={`pt-24 pb-12 px-6 md:px-24 border-t relative z-10 ${
        dark
          ? 'bg-[#1C2333] border-slate-700/50'
          : 'bg-transparent border-slate-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-nodal-blue flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-nodal-white" />
              </div>
              <span className={`${type.subheading} font-bold tracking-tighter ${dark ? 'text-white' : 'text-nodal-blue'}`}>NODAL</span>
            </div>
            <p className={`${type.ui} font-light leading-relaxed mb-8 ${dark ? 'text-slate-400' : 'text-nodal-graphite'}`}>
              Personalised AI Assistant for Mental Health Professionals
            </p>
          </div>

          <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-4 md:gap-6">
            <div>
              <h4 className={`font-semibold mb-6 ${dark ? 'text-white' : 'text-nodal-blue'}`}>Product</h4>
              <ul className={`space-y-4 ${type.ui} font-light ${dark ? 'text-slate-400' : 'text-nodal-graphite'}`}>
                <li>
                  <Link to="/product" onClick={handleNavClick('/product')} className={linkClass}>Overview</Link>
                </li>
                <li>
                  <Link to="/features" onClick={handleNavClick('/features')} className={linkClass}>Features</Link>
                </li>
                <li>
                  <Link to="/product#workflow" className={linkClass}>Workflow</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-6 ${dark ? 'text-white' : 'text-nodal-blue'}`}>Company</h4>
              <ul className={`space-y-4 ${type.ui} font-light ${dark ? 'text-slate-400' : 'text-nodal-graphite'}`}>
                <li>
                  <Link to="/about" onClick={handleNavClick('/about')} className={linkClass}>About Us</Link>
                </li>
                <li>
                  <Link to="/about#who-we-are" className={linkClass}>Who We Are</Link>
                </li>

                <li>
                  <a href="mailto:hello@nodal.ai" className={linkClass}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center ${type.ui} font-light ${dark ? 'border-slate-700/50 text-slate-500' : 'border-slate-100 text-nodal-graphite-soft'}`}>
          <p>© 2026 Nodal Intelligence. All rights reserved. Clinical data processed securely.</p>
        </div>
      </div>
    </footer>
  );
};
