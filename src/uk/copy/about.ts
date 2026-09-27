import type { AboutHeroCopy } from '../../sections/AboutHero';
import type { OurApproachCopy } from '../../sections/OurApproach';
import type { AboutCTACopy } from '../../sections/AboutCTA';

export const aboutHero: AboutHeroCopy = {
  lines: ['A documentation', 'assistant, scoped', 'to the session.'],
  accentLine: 2,
  blocks: [
    { label: 'What', text: 'Nousna is intended to transcribe, summarise and draft documentation for a clinician to review and edit.' },
    { label: 'Who', text: 'Nousna is a product of Nodal, Inc., working with independent mental-health practices.' },
    { label: 'Where', text: 'Our UK evaluation project is open to independent practices in England, Scotland and Wales.' },
  ],
};

export const aboutApproach: OurApproachCopy = {
  eyebrow: 'How we work',
  heading: 'Three rules we hold the product to.',
  lead: 'Every feature for UK users is checked against our published statement of intended purpose.',
  principles: [
    { title: 'Scoped to the session', body: 'Drafts come only from what was said in the session or from documents you provide. Nousna does not add clinical content of its own.' },
    { title: 'You remain the author', body: 'Nousna drafts; you review and edit. The software does not offer a clinical view of its own.' },
    { title: 'Described, not promised', body: 'We describe our technical arrangements and where our UK work stands, including what is not yet in place.' },
  ],
};

export const aboutCTA: AboutCTACopy = {
  lines: ['Help us learn how', 'Nousna behaves in', 'real practice.'],
  sub: 'We are opening a short evaluation project with a small number of independent practices. Tell us about yours.',
  cta: { label: 'Start a conversation', to: '/contact' },
};
