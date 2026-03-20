import { ShieldCheck, UserCheck, Eye } from 'lucide-react';

export const TrustSection = () => {
  return (
    <section id="trust" className="py-24 px-6 md:px-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-nodal-blue mb-6">
            Designed for Clinical Accountability
          </h2>
          <p className="text-xl md:text-2xl text-nodal-graphite max-w-3xl mx-auto font-light leading-relaxed">
            Healthcare requires absolute transparency. Nodal is built on foundations of verifiable output and ethical intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: UserCheck, title: "Clinician in the Loop", desc: "The provider always has final oversight and editing control." },
            { icon: Eye, title: "Ethical Implementation", desc: "Transparent AI processes that surface logical reasoning." },
            { icon: ShieldCheck, title: "Enterprise Security", desc: "HIPAA-ready encryption and secure data management." }
          ].map((item, id) => (
            <div key={id} className="p-10 rounded-2xl bg-nodal-grey/30 border border-slate-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-6 text-nodal-blue shadow-sm">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-semibold text-nodal-blue mb-4">{item.title}</h4>
              <p className="text-lg text-nodal-graphite font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-nodal-blue rounded-3xl p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="w-full h-full border-[40px] border-white/20 rounded-full scale-150 -translate-y-1/2" />
          </div>
          
          <h3 className="text-4xl md:text-5xl font-semibold mb-6 relative z-10">
            Precision Intelligence for Clinical Care
          </h3>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-light relative z-10 leading-relaxed">
            Join the clinical pilot program and experience the next generation of administrative clarity.
          </p>
          <button className="px-10 py-5 bg-nodal-green text-white text-lg font-semibold rounded-xl hover:brightness-105 transition-all relative z-10 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
};
