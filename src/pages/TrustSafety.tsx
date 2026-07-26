import { TrustSafetyHero } from '../sections/trust/TrustSafetyHero';
import { TrustSafeguards } from '../sections/trust/TrustSafeguards';
import { TrustProgram } from '../sections/trust/TrustProgram';
import { TrustFAQ } from '../sections/trust/TrustFAQ';
import { TrustCommitments } from '../sections/trust/TrustCommitments';
import { TrustClose } from '../sections/trust/TrustClose';
import { Footer } from '../sections/Footer';

export const TrustSafety = ({ isLoading = false }: { isLoading?: boolean }) => (
  <>
    <TrustSafetyHero isLoading={isLoading} />
    <TrustSafeguards />
    <TrustProgram />
    <TrustFAQ />
    <TrustCommitments />
    <TrustClose />
    <Footer dark />
  </>
);
