
export const Footer = () => {
  return (
    <footer className="bg-transparent pt-24 pb-12 px-6 md:px-24 border-t border-slate-100/50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-nodal-blue flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-nodal-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-nodal-blue">NODAL</span>
            </div>
            <p className="text-nodal-graphite text-sm font-light leading-relaxed mb-8">
              High-precision clinical intelligence designed for the modern healthcare professional.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-8">
            <div>
              <h4 className="font-semibold text-nodal-blue mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-nodal-graphite font-light">
                <li><a href="#" className="hover:text-nodal-blue transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-nodal-blue transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-nodal-blue transition-colors">Trust Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-nodal-blue mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-nodal-graphite font-light">
                <li><a href="#" className="hover:text-nodal-blue transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-nodal-blue transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-nodal-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-nodal-blue mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-nodal-graphite font-light">
                <li><a href="#" className="hover:text-nodal-blue transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-nodal-blue transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-nodal-blue transition-colors">HIPAA Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-nodal-graphite-soft font-light">
          <p>© 2026 Nodal Intelligence. All rights reserved. Clinical data processed securely.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-nodal-blue transition-colors font-medium underline underline-offset-4">Security Overview</a>
            <a href="#" className="hover:text-nodal-blue transition-colors font-medium underline underline-offset-4">Verifiable Computation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
