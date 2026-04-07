import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { type } from '../styles/typography';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // When on other pages, let the <Link to="/"> handle navigation naturally
  };

  const navLinks = [
    { name: 'Features', href: '/features', isRoute: true },
    { name: 'Product', href: '/product', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-24 py-6",
        isScrolled ? "bg-nodal-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-nodal-blue flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-nodal-white" />
          </div>
          <span className={`${type.subheading} font-bold tracking-tighter text-nodal-blue`}>NODAL</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className={`${type.body} font-medium text-nodal-graphite hover:text-nodal-blue transition-colors`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`${type.body} font-medium text-nodal-graphite hover:text-nodal-blue transition-colors`}
              >
                {link.name}
              </a>
            )
          )}
          <Link to="/contact" className={`px-6 py-3 bg-nodal-blue text-white ${type.body} font-semibold rounded-lg hover:bg-slate-800 transition-colors`}>
            Request Access
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-nodal-graphite"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 space-y-4 flex flex-col shadow-xl">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className={`${type.subheading} font-medium text-nodal-graphite`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`${type.subheading} font-medium text-nodal-graphite`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          )}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`w-full py-4 bg-nodal-blue text-white ${type.body} font-semibold rounded-lg text-center`}>
            Request Access
          </Link>
        </div>
      )}
    </nav>
  );
};
