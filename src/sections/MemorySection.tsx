import { Brain, AlertTriangle, Files, Flame, User, Database, MessageSquare, Clipboard, CreditCard, PenTool, Mail, FileSearch, Pill } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const MemorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.timeline()
            .to('.memory-text', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
            .to('.memory-list-item', { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, "-=0.4")
            .to('.memory-card', { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' }, "-=0.6");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="memory" className="py-24 px-6 md:px-24 bg-nodal-white relative z-10">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 md:flex-1">
            <div className="memory-text translate-y-8 opacity-0">
              <h2 className="text-4xl md:text-5xl font-semibold text-nodal-blue mb-6 md:min-w-[150%] relative z-10">
                Should clinical work be scattered across <br className="hidden md:block" /> fragmented systems?
              </h2>
              <p className="text-nodal-graphite text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-2xl">
                Healthcare professionals move between documentation systems, communication tools, task trackers, billing interfaces, and decision-support platforms, often within a single patient encounter.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Brain, title: "Decision fatigue", color: "text-slate-500", bg: "bg-slate-50 border-slate-100" },
                { icon: AlertTriangle, title: "Error risk", color: "text-slate-500", bg: "bg-slate-50 border-slate-100" },
                { icon: Files, title: "Administrative burden", color: "text-slate-500", bg: "bg-slate-50 border-slate-100" },
                { icon: Flame, title: "Burnout", color: "text-slate-500", bg: "bg-slate-50 border-slate-100" }
              ].map((item, id) => (
                <div key={id} className="memory-list-item -translate-x-8 opacity-0 flex items-center space-x-5">
                  <div className={`p-4 rounded-xl border shadow-sm flex items-center justify-center ${item.bg} ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-nodal-blue">{item.title}</h4>
                  </div>
                </div>
              ))}
              
              <div className="memory-list-item -translate-x-8 opacity-0 pt-8">
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  <span className="text-nodal-blue block">This is not a productivity failure.</span>
                  <span className="text-nodal-violet block">This is a systems design failure.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full mt-24 md:mt-24 flex items-center justify-center min-h-[600px]">
            <div className="memory-card opacity-0 w-full max-w-[400px] md:max-w-[500px] aspect-square relative flex items-center justify-center perspective-[1200px] scale-110 md:scale-125">

              {/* Massive soft ambient glow replacing the hard glass box - blur with translate-z-0 to fix Safari clip bug */}
              <div className="absolute inset-0 opacity-20 blur-[80px] rounded-full scale-[1.75] md:scale-[2] transition-colors duration-1000 transform-gpu translate-z-0 bg-nodal-violet -z-30" />

              {/* Center Clinician Core - trapped, stressful */}
              <div className="z-20 relative flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-slate-50 shadow-[0_0_50px_rgba(225,29,72,0.15)] border-4 border-slate-200">
                <div className="absolute inset-0 rounded-full border border-rose-500/30 animate-ping" style={{ animationDuration: '3s' }} />
                <User className="w-8 h-8 md:w-10 md:h-10 text-nodal-green mb-2" />
                <span className="text-[10px] md:text-tiny uppercase tracking-widest font-bold text-nodal-blue">Clinician</span>
                <span className="text-[7px] md:text-[8px] bg-rose-50 text-rose-500 px-2 py-0.5 rounded-full mt-1 border border-rose-200 font-semibold">Overloaded</span>
              </div>

              {/* Fragment 1: EHR Window (Disconnected) */}
              <div className="absolute left-[15%] top-[10%] -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="transform -rotate-[8deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                  <div className="w-36 md:w-44 bg-white/80 backdrop-blur-md rounded-xl p-3 md:p-4 shadow-xl border border-slate-200 shadow-slate-200/50 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-16 h-16 bg-nodal-violet/10 blur-xl" />
                    <div className="flex items-center space-x-2 text-slate-700 mb-2 md:mb-3 border-b border-slate-100 pb-2">
                      <Database className="w-3 h-3 md:w-4 md:h-4 text-nodal-violet shrink-0" />
                      <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider truncate">EHR Interface</span>
                    </div>
                    <div className="space-y-1.5 md:space-y-2">
                      <div className="w-full h-1 md:h-1.5 bg-slate-200 rounded-full" />
                      <div className="w-5/6 h-1 md:h-1.5 bg-slate-200 rounded-full" />
                      <div className="w-4/6 h-1 md:h-1.5 bg-slate-200 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fragment 2: Messaging / Comms (Intrusive) */}
              <div className="absolute left-[85%] top-[15%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="transform rotate-[12deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                  <div className="w-32 md:w-40 bg-white/90 backdrop-blur-md rounded-xl p-3 md:p-4 shadow-xl border border-rose-100 shadow-rose-100/50">
                    <div className="flex items-center justify-between mb-2 md:mb-3 border-b border-rose-50 pb-2">
                      <div className="flex items-center space-x-1 md:space-x-2 text-slate-700">
                        <MessageSquare className="w-3 h-3 md:w-4 md:h-4 text-rose-500 shrink-0" />
                        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider truncate">Messages</span>
                      </div>
                      <span className="w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center text-[8px] font-bold animate-pulse">12</span>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-slate-200 shrink-0" />
                        <div className="h-1 md:h-1.5 w-full bg-slate-200 rounded-full" />
                      </div>
                      <div className="flex items-center space-x-2 opacity-60">
                        <div className="w-4 h-4 rounded-full bg-slate-200 shrink-0" />
                        <div className="h-1 md:h-1.5 w-4/5 bg-slate-200 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fragment 3: Tasks (Overwhelming) */}
              <div className="absolute left-[15%] top-[85%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="transform -rotate-[15deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                  <div className="w-32 md:w-36 bg-white/80 backdrop-blur-md rounded-xl p-3 md:p-4 shadow-xl border border-amber-100 shadow-amber-100/50">
                    <div className="flex items-center space-x-2 text-slate-700 mb-2 md:mb-3 border-b border-amber-50 pb-2">
                      <Clipboard className="w-3 h-3 md:w-4 md:h-4 text-amber-500 shrink-0" />
                      <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider">Inbox</span>
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 border border-slate-300 rounded-[2px] shrink-0" />
                        <div className="flex-1 h-1 md:h-1.5 bg-slate-200 rounded-full" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 bg-rose-400 border border-rose-400 rounded-[2px] flex items-center justify-center shrink-0">
                          <span className="text-[5px] text-white">✓</span>
                        </div>
                        <div className="w-3/4 h-1 md:h-1.5 bg-slate-200 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fragment 4: Billing & Coding (Disconnected Logic) */}
              <div className="absolute left-[85%] top-[85%] -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="transform rotate-[8deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                  <div className="w-36 md:w-44 bg-white/90 backdrop-blur-md rounded-xl p-3 md:p-4 shadow-xl border border-slate-200 shadow-slate-200/50 relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 w-20 h-20 bg-emerald-500/10 blur-2xl" />
                    <div className="flex items-center space-x-2 text-slate-700 mb-2 md:mb-3 border-b border-slate-100 pb-2 relative z-10">
                      <CreditCard className="w-3 h-3 md:w-4 md:h-4 text-emerald-500 shrink-0" />
                      <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider">Billing Logic</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2 relative z-10">
                      <div className="h-4 md:h-5 bg-slate-50 border border-slate-100 rounded flex items-center px-1.5">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 shrink-0" />
                      </div>
                      <div className="h-4 md:h-5 bg-slate-50 border border-slate-100 rounded" />
                      <div className="h-4 md:h-5 bg-slate-50 border border-amber-100 rounded col-span-2 flex items-center px-2">
                        <span className="text-[7px] md:text-[8px] text-amber-500 font-semibold truncate">Missing ICD-10...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fragment 5: Notes */}
              <div className="absolute left-[35%] top-[5%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="transform -rotate-[5deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                  <div className="w-32 md:w-36 bg-white/90 backdrop-blur-md rounded-xl p-2.5 shadow-xl border border-indigo-100 shadow-indigo-100/50">
                    <div className="flex items-center space-x-2 text-slate-700 mb-2 border-b border-indigo-50 pb-1.5">
                      <PenTool className="w-3 h-3 text-indigo-500 shrink-0" />
                      <span className="text-[8px] font-bold uppercase tracking-wider truncate">Clinical Notes</span>
                    </div>
                    <div className="space-y-1.5 mt-1">
                      <div className="w-full h-1 bg-slate-200 rounded-full" />
                      <div className="w-5/6 h-1 bg-slate-200 rounded-full" />
                      <div className="w-3/4 h-1 bg-slate-200 rounded-full" />
                      <div className="w-4/6 h-1 bg-slate-200 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fragment 6: Emails */}
              <div className="absolute left-[95%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="transform rotate-[8deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                  <div className="w-32 md:w-40 bg-white/80 backdrop-blur-md rounded-xl p-2.5 shadow-xl border border-blue-100 shadow-blue-100/50 relative overflow-hidden">
                    <div className="flex items-center space-x-2 text-slate-700 mb-2 border-b border-blue-50 pb-1.5">
                      <Mail className="w-3 h-3 text-blue-500 shrink-0" />
                      <span className="text-[8px] font-bold uppercase tracking-wider truncate">Draft Email</span>
                    </div>
                    <div className="space-y-2 mt-1">
                      <div className="flex space-x-2 items-center">
                        <span className="text-[7px] text-slate-400 font-bold w-3">To:</span>
                        <div className="h-1 flex-1 bg-slate-200 rounded-full" />
                      </div>
                      <div className="w-full h-0.5 bg-slate-100 rounded-full mt-1.5" />
                      <div className="w-4/5 h-0.5 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fragment 7: Prescriptions */}
              <div className="absolute left-[65%] top-[95%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="transform rotate-[4deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                  <div className="w-32 md:w-36 bg-white/90 backdrop-blur-md rounded-xl p-2.5 shadow-xl border border-teal-100 shadow-teal-100/50">
                    <div className="flex items-center space-x-2 text-slate-700 mb-2 border-b border-teal-50 pb-1.5">
                      <Pill className="w-3 h-3 text-teal-500 shrink-0" />
                      <span className="text-[8px] font-bold uppercase tracking-wider truncate">E-Prescribing</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 p-1 rounded border border-slate-100 mb-1.5">
                      <span className="text-[8px] text-slate-600 font-bold tracking-tight">Amoxicillin 500mg</span>
                    </div>
                    <div className="flex justify-end">
                      <div className="w-8 h-3 bg-teal-500 rounded flex items-center justify-center">
                        <span className="text-[6px] text-white font-bold">Send</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fragment 8: Pre-charting (Review History) */}
              <div className="absolute left-[5%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="transform -rotate-[6deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                  <div className="w-32 md:w-40 bg-white/80 backdrop-blur-md rounded-xl p-2.5 shadow-xl border border-fuchsia-100 shadow-fuchsia-100/50">
                    <div className="flex items-center space-x-2 text-slate-700 mb-2 border-b border-fuchsia-50 pb-1.5">
                      <FileSearch className="w-3 h-3 text-fuchsia-500 shrink-0" />
                      <span className="text-[8px] font-bold uppercase tracking-wider truncate">Patient History</span>
                    </div>
                    <div className="flex justify-between items-center space-x-1">
                      <div className="w-4 h-3 rounded bg-fuchsia-100 flex items-center justify-center text-[6px] text-fuchsia-600 font-bold">'21</div>
                      <div className="w-full h-px bg-slate-200 relative">
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-fuchsia-400 rounded-full" />
                      </div>
                      <div className="w-4 h-3 rounded bg-fuchsia-100 flex items-center justify-center text-[6px] text-fuchsia-600 font-bold">'24</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* The "Broken" connection lines hitting precisely the center coordinates of all 8 nodes */}
              <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <g stroke="rgba(225,29,72,0.6)" strokeWidth="0.5" strokeDasharray="1 2" className="animate-pulse">
                  <path d="M50 50 L15 10" /> {/* EHR */}
                  <path d="M50 50 L35 5" />  {/* Notes */}
                  <path d="M50 50 L85 15" /> {/* Comms */}
                  <path d="M50 50 L95 45" /> {/* Emails */}
                  <path d="M50 50 L85 85" /> {/* Billing */}
                  <path d="M50 50 L65 95" /> {/* Rx */}
                  <path d="M50 50 L15 85" /> {/* Inbox */}
                  <path d="M50 50 L5 50" />  {/* History */}
                </g>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
