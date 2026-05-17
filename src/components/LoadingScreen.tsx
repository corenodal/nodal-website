import { useEffect } from 'react';
import gsap from 'gsap';
import { type } from '../styles/typography';
import NodalLogo from '../assets/nodal-logo.svg';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(".progress-bar", {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut"
    })
    .to(".loading-content", {
      opacity: 0,
      y: -20,
      duration: 0.5
    })
    .call(onComplete);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-nodal-white flex items-center justify-center p-6">
      <div className="loading-content max-w-md w-full text-center">
        <div className="flex items-center justify-center mb-8">
          <img src={NodalLogo} alt="Nodal" className="h-24" />
        </div>
        
        <div className="relative h-1 w-full bg-slate-200 rounded-full overflow-hidden mb-4">
          <div className="progress-bar absolute top-0 left-0 h-full w-0 bg-nodal-blue" />
        </div>
        
        <p className={`${type.ui} font-semibold text-nodal-blue/40 tracking-widest uppercase`}>
          Initializing Clinical System
        </p>
      </div>
    </div>
  );
};
