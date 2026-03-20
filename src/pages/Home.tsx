import { Hero } from '../sections/Hero';
import { ProblemSection } from '../sections/ProblemSection';
import { SolutionSection } from '../sections/SolutionSection';
import { TargetSection } from '../sections/TargetSection';
import { CTASection } from '../sections/CTASection';
import { Footer } from '../sections/Footer';

export const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <TargetSection />
      <CTASection />
      <Footer />
    </>
  );
};
