import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Network, Activity, FileText } from 'lucide-react';
import { type } from '../styles/typography';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "1. Capture",
    desc: "Securely records patient conversations during visits.",
    color: "nodal-violet",
    icon: Activity
  },
  {
    title: "2. Organize",
    desc: "Turns conversations into structured clinical information in real time.",
    color: "nodal-violet",
    icon: Network
  },
  {
    title: "3. Review",
    desc: "Creates clear, editable documentation that is ready with minimal review.",
    color: "nodal-green",
    icon: FileText
  },
  {
    title: "4. Act",
    desc: "Generates follow-ups, care plans, and manages tasks automatically.",
    color: "nodal-green",
    icon: Check
  }
];

const AudioWaveform = () => {
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(barsRef.current, {
        height: "80%",
        duration: 0.6,
        stagger: {
          each: 0.1,
          yoyo: true,
          repeat: -1
        },
        ease: "sine.inOut"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-4 h-64 w-full scale-100 md:scale-110 origin-center">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          ref={el => { barsRef.current[i] = el; }}
          className="w-3 md:w-4 rounded-full bg-nodal-violet/80 shadow-[0_0_20px_rgba(123,110,246,0.8)]"
          style={{ height: "20%" }}
        />
      ))}
    </div>
  );
};

const NeuralNodes = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center scale-100 md:scale-110 origin-center">
      {/* Outer rotating ring */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-dashed border-nodal-violet/40 rounded-full animate-[spin_20s_linear_infinite]" />

      {/* Middle rotating ring */}
      <div className="absolute w-48 h-48 md:w-60 md:h-60 border border-nodal-violet/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

      {/* Inner rotating dotted ring */}
      <div className="absolute w-32 h-32 md:w-40 md:h-40 border-2 border-dotted border-nodal-violet/50 rounded-full animate-[spin_10s_linear_infinite]" />

      {/* Pulsing Core */}
      <div className="absolute w-14 h-14 md:w-20 md:h-20 bg-nodal-violet rounded-full shadow-[0_0_50px_rgba(123,110,246,0.8)] animate-pulse flex items-center justify-center">
        <div className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-full opacity-90 shadow-inner" />
      </div>

      {/* Orbiting data points */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 animate-[spin_20s_linear_infinite]">
        <div className="absolute -top-2 left-1/2 w-5 h-5 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)]" />
        <div className="absolute top-1/2 -right-2 w-4 h-4 bg-nodal-violet rounded-full shadow-[0_0_20px_rgba(123,110,246,1)]" />
      </div>

      <div className="absolute w-48 h-48 md:w-60 md:h-60 animate-[spin_15s_linear_infinite_reverse]">
        <div className="absolute bottom-0 left-1/4 w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        <div className="absolute top-1/4 -left-1 w-3 h-3 md:w-4 md:h-4 bg-nodal-violet rounded-full shadow-[0_0_15px_rgba(123,110,246,0.8)]" />
      </div>

      {/* Abstract clinical tags streaming in */}
      <div className={`absolute top-8 left-0 md:left-4 bg-white text-nodal-blue ${type.ui} font-bold px-4 py-2 rounded-full shadow-lg animate-pulse`} style={{ animationDelay: '0.2s' }}>Symptoms</div>
      <div className={`absolute bottom-10 right-0 md:right-4 bg-white text-nodal-blue ${type.ui} font-bold px-4 py-2 rounded-full shadow-lg animate-pulse`} style={{ animationDelay: '0.7s' }}>History</div>
      <div className={`absolute top-1/4 -right-4 md:right-0 bg-nodal-violet text-white ${type.ui} font-bold px-4 py-2 rounded-full shadow-lg animate-pulse`} style={{ animationDelay: '0.5s' }}>Vitals</div>
    </div>
  );
};

const UICard = () => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-sm w-full border border-slate-100 flex flex-col scale-100 md:scale-110 origin-center">
    <div className="h-4 w-1/3 bg-slate-200 rounded mb-6" />
    <div className="space-y-3">
      <div className="h-2.5 w-full bg-nodal-green/30 rounded" />
      <div className="h-2.5 w-5/6 bg-nodal-green/30 rounded" />
      <div className="h-2.5 w-full bg-nodal-green/30 rounded" />
      <div className="h-2.5 w-4/6 bg-nodal-green/30 rounded" />
    </div>
    <div className="mt-6 pt-5 border-t border-slate-100 flex justify-between">
      <div className="h-8 w-24 bg-nodal-green/10 rounded-lg border border-nodal-green/20" />
      <div className={`h-8 w-24 bg-nodal-green text-white rounded-lg flex items-center justify-center ${type.ui} font-semibold shadow-sm`}>Review</div>
    </div>
  </div>
);

const FollowUpCard = () => (
  <div className="w-full max-w-sm space-y-4 scale-100 md:scale-110 origin-center">
    <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg border border-slate-100 transition-all hover:scale-105">
      <div className="w-8 h-8 rounded-full bg-nodal-green/10 flex items-center justify-center text-nodal-green shrink-0">
        <Check className="w-4 h-4" />
      </div>
      <div className={`${type.ui} font-semibold text-nodal-blue`}>Prescription Sent</div>
    </div>
    <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg border border-slate-100 transition-all hover:scale-105" style={{ transitionDelay: '0.1s' }}>
      <div className="w-8 h-8 rounded-full bg-nodal-green/10 flex items-center justify-center text-nodal-green shrink-0">
        <Check className="w-4 h-4" />
      </div>
      <div className={`${type.ui} font-semibold text-nodal-blue`}>Billing Coded</div>
    </div>
    <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg border border-slate-100 transition-all hover:scale-105" style={{ transitionDelay: '0.2s' }}>
      <div className="w-8 h-8 rounded-full bg-nodal-green/10 flex items-center justify-center text-nodal-green shrink-0">
        <Check className="w-4 h-4" />
      </div>
      <div className={`${type.ui} font-semibold text-nodal-blue`}>Follow-up Scheduled</div>
    </div>
  </div>
);

export const Workflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const visualItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Setup initial states
      steps.forEach((_, i) => {
        if (i !== 0) {
          gsap.set(textItemsRef.current[i], { opacity: 0.3 });
          gsap.set(visualItemsRef.current[i], { opacity: 0, y: 50 });
        } else {
          gsap.set(textItemsRef.current[i], { opacity: 1 });
          gsap.set(visualItemsRef.current[i], { opacity: 1, y: 0 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 0.5,
          pin: true,
        }
      });

      // 2. Sequencing crossfades with holds
      steps.forEach((_, i) => {
        // Hold the current step so the user can read it before it fades
        tl.to({}, { duration: 1 });

        if (i < steps.length - 1) {
          const transitionLabel = `step${i}_transition`;

          // Fade out current text
          tl.to(textItemsRef.current[i], {
            opacity: 0.3,
            duration: 1,
            ease: "none"
          }, transitionLabel);

          // Fade in next text
          tl.to(textItemsRef.current[i + 1], {
            opacity: 1,
            duration: 1,
            ease: "none"
          }, transitionLabel);

          // Fade out current visual
          tl.to(visualItemsRef.current[i], {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.inOut"
          }, transitionLabel);

          // Fade in next visual
          tl.to(visualItemsRef.current[i + 1], {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
          }, transitionLabel);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const visuals = [
    <AudioWaveform />,
    <NeuralNodes />,
    <UICard />,
    <FollowUpCard />
  ];

  return (
    <section
      id="workflow"
      ref={containerRef}
      className="h-screen w-full bg-transparent overflow-hidden flex items-center relative z-20"
    >
      <div className="max-w-6xl mx-auto w-full px-6 md:px-20 flex flex-col md:flex-row items-center h-full relative z-10">

        {/* Left Side: Sticky Text Narrative */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-[40%] md:h-full pt-16 md:pt-0 z-20">
          <h2 className={`${type.heading} font-semibold text-nodal-blue mb-8 md:mb-12`}>
            How It Works
          </h2>

          <div className="flex flex-col">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { textItemsRef.current[index] = el; }}
                className="flex items-start"
              >
                <div className="flex flex-col items-center mr-6 mt-1">
                  <div className={`w-3 h-3 shrink-0 rounded-full ${step.color === 'nodal-violet' ? 'bg-nodal-violet shadow-[0_0_10px_rgba(123,110,246,0.6)]' : 'bg-nodal-green shadow-[0_0_10px_rgba(78,191,166,0.6)]'}`} />
                  {index !== steps.length - 1 && (
                    <div className="w-0.5 h-12 md:h-20 bg-slate-200 my-2 rounded-full" />
                  )}
                </div>

                <div className="pb-3 md:pb-6">
                  <h3 className={`${type.subheading} font-bold text-nodal-blue mb-1.5`}>{step.title}</h3>
                  <p className={`${type.body} text-nodal-graphite font-light max-w-sm`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Morphing Visualizations */}
        <div className="w-full md:w-1/2 h-[60%] md:h-full relative flex items-center justify-center mt-4 md:mt-0 pb-10 md:pb-0 z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => { visualItemsRef.current[index] = el; }}
              className="absolute inset-x-0 mx-auto flex items-center justify-center top-1/2 -translate-y-1/2"
            >
              <div className="w-full max-w-[320px] md:max-w-[400px] aspect-square flex items-center justify-center relative">
                {/* Massive soft ambient glow replacing the hard glass box - blur with translate-z-0 to fix Safari clip bug */}
                <div className={`absolute inset-0 opacity-20 blur-[50px] rounded-full scale-[1] md:scale-[1.15] transition-colors duration-1000 transform-gpu translate-z-0 ${step.color === 'nodal-violet' ? 'bg-nodal-violet' : 'bg-nodal-green'}`} />

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {visuals[index]}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
