import { AboutHero } from '../../sections/AboutHero';
import { OurApproach } from '../../sections/OurApproach';
import { AboutCTA } from '../../sections/AboutCTA';
import { UKFooter } from '../sections/UKFooter';
import { aboutHero, aboutApproach, aboutCTA } from '../copy/about';

export const About = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <AboutHero isLoading={isLoading} copy={aboutHero} />
    <OurApproach copy={aboutApproach} />
    <AboutCTA copy={aboutCTA} />
    <UKFooter />
  </>
);
