import { AboutHero } from '../sections/AboutHero';
import { TheShift } from '../sections/TheShift';
import { OurApproach } from '../sections/OurApproach';
import { OurPerspective } from '../sections/OurPerspective';
import { WhoWeAre } from '../sections/WhoWeAre';
import { AboutCTA } from '../sections/AboutCTA';
import { Footer } from '../sections/Footer';

export const About = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <AboutHero isLoading={isLoading} />
    <TheShift />
    <OurApproach />
    <OurPerspective />
    <WhoWeAre />
    <AboutCTA />
    <Footer />
  </>
);
