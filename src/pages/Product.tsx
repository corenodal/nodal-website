import { ProductHero } from '../sections/ProductHero';
import { Workflow } from '../sections/Workflow';
import { Features } from '../sections/Features';
import { TrustSection } from '../sections/TrustSection';
import { Footer } from '../sections/Footer';

export const Product = () => {
  return (
    <>
      <ProductHero />
      <Workflow />
      <Features />
      <TrustSection />
      <Footer />
    </>
  );
};
