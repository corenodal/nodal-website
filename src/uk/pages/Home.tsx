import { Hero } from '../../sections/Hero';
import { SolutionSection } from '../../sections/SolutionSection';
import { StorySection } from '../../sections/StorySection';
import { TrustVerify } from '../../sections/TrustVerify';
import { UKFooter } from '../sections/UKFooter';
import { EvaluationCTA } from '../sections/EvaluationCTA';
import { homeHero, homeSolution, homeStory, homeScope } from '../copy/home';

export const Home = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <Hero isLoading={isLoading} copy={homeHero} />
    <SolutionSection copy={homeSolution} />
    <StorySection copy={homeStory} />
    <TrustVerify copy={homeScope} />
    <EvaluationCTA />
    <UKFooter />
  </>
);
