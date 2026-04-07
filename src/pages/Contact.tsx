import { ContactForm } from '../sections/ContactForm';
import { Footer } from '../sections/Footer';

export const Contact = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <ContactForm isLoading={isLoading} />
    <Footer />
  </>
);