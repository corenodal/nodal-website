import { PageHero } from '../sections/PageHero';
import { LegalContent } from '../sections/LegalContent';
import { OnThisPage } from '../sections/OnThisPage';
import { slug } from '../slug';
import { UKFooter } from '../sections/UKFooter';
import { useReveal } from '../useReveal';
import type { LegalDoc } from '../copy/legal';

export const Legal = ({ isLoading, doc }: { isLoading: boolean; doc: LegalDoc }) => {
  const ref = useReveal<HTMLDivElement>();
  const links = doc.sections.map((s) => ({ id: slug(s.heading), label: s.heading }));
  return (
    <div ref={ref}>
      <PageHero
        isLoading={isLoading}
        eyebrow={doc.eyebrow}
        lines={doc.lines}
        lead={doc.lead}
        aside={links.length >= 4 ? <OnThisPage items={links} /> : undefined}
      />
      <LegalContent sections={doc.sections} />
      <UKFooter />
    </div>
  );
};
