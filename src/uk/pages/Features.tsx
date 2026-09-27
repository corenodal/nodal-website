import { FeaturesHero } from '../../sections/FeaturesHero';
import { FeatureDetails } from '../../sections/FeatureDetails';
import { PracticeTypes } from '../../sections/PracticeTypes';
import { TrustVerify } from '../../sections/TrustVerify';
import { UKFooter } from '../sections/UKFooter';
import { featuresHero, featureRows, practiceTypes, featuresDesign } from '../copy/features';

export const Features = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <FeaturesHero isLoading={isLoading} copy={featuresHero} />
    <FeatureDetails features={featureRows} />
    <PracticeTypes copy={practiceTypes} />
    <TrustVerify copy={featuresDesign} />
    <UKFooter />
  </>
);
