import { Hero } from '../sections/Hero';
import { ProblemSection } from '../sections/ProblemSection';
import { SolutionSection } from '../sections/SolutionSection';
import { TargetSection } from '../sections/TargetSection';
import { StorySection } from '../sections/StorySection';
import { CTASection } from '../sections/CTASection';
import { Footer } from '../sections/Footer';

export const Home = ({ isLoading = false }: { isLoading?: boolean }) => {
  return (
    <>
      <Hero isLoading={isLoading} />
      <ProblemSection />
      <SolutionSection />
      <TargetSection />
      <StorySection />
      <CTASection />
      <Footer />
    </>
  );
};
