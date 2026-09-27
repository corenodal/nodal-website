import { PageHero } from '../sections/PageHero';
import { OnThisPage } from '../sections/OnThisPage';
import { WhatThisIs, Eligibility } from '../sections/forUk/Overview';
import { Design } from '../sections/forUk/Design';
import { Ledger } from '../sections/forUk/Ledger';
import { Transfer, Agreements, InWriting } from '../sections/forUk/Terms';
import { UKFooter } from '../sections/UKFooter';
import { hero, pageLinks } from '../copy/forUkUsers';
import { ukBadges } from '../copy/home';
import { useReveal } from '../useReveal';

export const ForUkUsers = ({ isLoading }: { isLoading: boolean }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
  <div ref={ref}>
    <PageHero isLoading={isLoading} {...hero} chips={ukBadges} aside={<OnThisPage items={pageLinks} />} />
    <WhatThisIs />
    <Eligibility />
    <Design />
    <Ledger />
    <Transfer />
    <Agreements />
    <InWriting />
    <UKFooter showDisclaimer />
  </div>
  );
};
