import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

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
    { name: 'Product', href: '/product', isRoute: true },
    { name: 'About', href: '#about', isRoute: false },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-20 py-4",
        isScrolled ? "bg-nodal-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-nodal-blue flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-nodal-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-nodal-blue">NODAL</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-nodal-graphite hover:text-nodal-blue transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-nodal-graphite hover:text-nodal-blue transition-colors"
              >
                {link.name}
              </a>
            )
          )}
          <button className="px-5 py-2.5 bg-nodal-blue text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors">
            Request Access
          </button>
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
                className="text-xl font-medium text-nodal-graphite"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-nodal-graphite"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          )}
          <button className="w-full py-4 bg-nodal-blue text-white text-lg font-semibold rounded-lg">
            Request Access
          </button>
        </div>
      )}
    </nav>
  );
};
