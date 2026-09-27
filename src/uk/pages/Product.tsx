import { ProductHero } from '../../sections/ProductHero';
import { Workflow } from '../../sections/Workflow';
import { TrustSection } from '../../sections/TrustSection';
import { UKFooter } from '../sections/UKFooter';
import { productHero, productWorkflow, productCapabilities } from '../copy/product';

export const Product = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <ProductHero isLoading={isLoading} copy={productHero} />
    <Workflow copy={productWorkflow} />
    <TrustSection copy={productCapabilities} />
    <UKFooter />
  </>
);
