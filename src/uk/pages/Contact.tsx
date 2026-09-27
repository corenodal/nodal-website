import { ContactForm } from '../../sections/ContactForm';
import { UKFooter } from '../sections/UKFooter';
import { contact } from '../copy/contact';

export const Contact = ({ isLoading }: { isLoading: boolean }) => (
  <>
    <ContactForm isLoading={isLoading} copy={contact} />
    <UKFooter />
  </>
);
