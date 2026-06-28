import { FeaturesHero } from '../sections/FeaturesHero';
import { FeatureDetails } from '../sections/FeatureDetails';
import { PracticeTypes } from '../sections/PracticeTypes';
import { TrustVerify } from '../sections/TrustVerify';
import { Footer } from '../sections/Footer';

export const Features = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <FeaturesHero isLoading={isLoading} />
    <FeatureDetails />
    <PracticeTypes />
    <TrustVerify />
    <Footer dark />
  </>
);
