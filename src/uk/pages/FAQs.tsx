import { Link } from 'react-router-dom';
import { PageHero } from '../sections/PageHero';
import { FAQGroups } from '../sections/FAQGroups';
import { OnThisPage } from '../sections/OnThisPage';
import { slug } from '../slug';
import { UKFooter } from '../sections/UKFooter';
import { useReveal } from '../useReveal';
import { faqHero, faqGroups } from '../copy/faqs';
import { type } from '../../styles/typography';

const links = faqGroups.map((g) => ({ id: slug(g.title), label: g.title }));

export const FAQs = ({ isLoading }: { isLoading: boolean }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero isLoading={isLoading} {...faqHero} aside={<OnThisPage items={links} />} />
      <FAQGroups />
      <section className="px-6 md:px-24 py-20 md:py-24 bg-nousna-green/[0.06] border-t border-nousna-green/15 relative z-10">
        <div className="reveal max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className={`${type.heading} font-semibold text-nousna-blue leading-tight mb-3`}>Still deciding?</h2>
            <p className={`${type.body} text-nousna-graphite font-light leading-relaxed max-w-xl`}>
              If you or your adviser has a question this page does not answer, please get in touch.
            </p>
          </div>
          <Link
            to="/contact"
            className={`flex-shrink-0 text-center px-10 py-4 bg-nousna-green text-white ${type.body} font-semibold rounded-xl hover:brightness-105 transition-all hover:-translate-y-0.5 shadow-md hover:shadow-xl`}
          >
            Start a conversation
          </Link>
        </div>
      </section>
      <UKFooter showDisclaimer />
    </div>
  );
};
