import { FeaturesHero } from '../sections/FeaturesHero';
import { FeatureDetails } from '../sections/FeatureDetails';
import { Footer } from '../sections/Footer';

export const Features = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <FeaturesHero isLoading={isLoading} />
    <FeatureDetails />
    <Footer />
  </>
);
