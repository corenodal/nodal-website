import { Link } from 'react-router-dom';
import { TrustLine } from '../../components/TrustLine';
import type { ContactCopy } from '../../sections/ContactForm';
import { ukInfo } from './placeholders';

export const contact: ContactCopy = {
  headline: ['Start a', 'conversation.'],
  subtitle: 'Tell us a little about your practice and we will send the evaluation agreement, the data processing agreement and the underlying documentation, so you can look at them properly before deciding anything.',
  email: ukInfo.email,
  practiceTypes: ['Independent practice (solo)', 'Independent group practice', 'Other'],
  roles: ['Therapist or counsellor', 'Psychologist', 'Psychiatrist', 'Other'],
  submitLabel: 'Start a conversation',
  successTitle: 'Thank you.',
  successBody: 'We’ll be in touch within 2 working days.',
  trust: (
    <TrustLine
      items={[
        'NHS organisations and Northern Ireland practices are not eligible at this stage',
        <Link key="privacy" to="/privacy" className="underline decoration-nousna-graphite-soft/30 underline-offset-2 hover:text-nousna-blue transition-colors">
          How we use your details
        </Link>,
      ]}
    />
  ),
};
