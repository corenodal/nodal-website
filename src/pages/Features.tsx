import { FeaturesHero } from '../sections/FeaturesHero';
import { FeatureDetails } from '../sections/FeatureDetails';
import { VoicesFromTheField } from '../sections/VoicesFromTheField';
import { Footer } from '../sections/Footer';

export const Features = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <FeaturesHero isLoading={isLoading} />
    <FeatureDetails />
    <VoicesFromTheField />
    <Footer />
  </>
);
