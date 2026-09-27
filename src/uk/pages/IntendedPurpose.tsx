import { PageHero } from '../sections/PageHero';
import { Statement, Scope, TheTest } from '../sections/IntendedPurpose';
import { LegalContent } from '../sections/LegalContent';
import { OnThisPage } from '../sections/OnThisPage';
import { slug } from '../slug';
import { UKFooter } from '../sections/UKFooter';
import { useReveal } from '../useReveal';
import { intendedPurpose } from '../copy/intendedPurpose';

const links = [
  { id: 'statement', label: 'The statement' },
  { id: 'scope-lists', label: 'What Nousna does and does not do' },
  { id: 'test', label: 'The test we apply' },
  ...intendedPurpose.sections.map((s) => ({ id: slug(s.heading), label: s.heading })),
];

export const IntendedPurpose = ({ isLoading }: { isLoading: boolean }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero isLoading={isLoading} {...intendedPurpose.hero} aside={<OnThisPage items={links} />} />
      <Statement />
      <Scope />
      <TheTest />
      <LegalContent sections={intendedPurpose.sections} />
      <UKFooter showDisclaimer />
    </div>
  );
};
