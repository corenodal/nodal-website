import { ProductHero } from '../sections/ProductHero';
import { Workflow } from '../sections/Workflow';
import { TrustSection } from '../sections/TrustSection';
import { Footer } from '../sections/Footer';

export const Product = ({ isLoading = false }: { isLoading?: boolean }) => {
  return (
    <>
      <ProductHero isLoading={isLoading} />
      <Workflow />
      <TrustSection />
      <Footer dark />
    </>
  );
};
