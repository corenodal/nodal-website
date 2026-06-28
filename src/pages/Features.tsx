import { FeaturesHero } from '../sections/FeaturesHero';
import { TrustBar } from '../components/TrustBar';
import { FeatureDetails } from '../sections/FeatureDetails';
import { PracticeTypes } from '../sections/PracticeTypes';
import { TrustVerify } from '../sections/TrustVerify';
import { Footer } from '../sections/Footer';

export const Features = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <div className="relative">
      <FeaturesHero isLoading={isLoading} />
      <TrustBar />
    </div>
    <FeatureDetails />
    <PracticeTypes />
    <TrustVerify />
    <Footer dark />
  </>
);
