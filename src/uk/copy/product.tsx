import type { ProductHeroCopy } from '../../sections/ProductHero';
import type { WorkflowCopy } from '../../sections/Workflow';
import type { TrustSectionCopy } from '../../sections/TrustSection';
import { AppMock } from '../sections/AppMock';

export const productHero: ProductHeroCopy = {
  title: 'Documentation, scoped to the session.',
  description: 'Designed to draft only from the session and the documents you share, leaving every decision with you.',
  visual: <AppMock />,
};

export const productWorkflow: WorkflowCopy = {
  heading: 'How a session could work',
  steps: [
    { title: 'Agree.', desc: 'Recording starts only once your patient has agreed. Patients can decline with no effect on their care.' },
    { title: 'Draft.', desc: 'A draft note in your format, drawn only from what was said in the session, for you to review and edit.' },
    { title: 'Review.', desc: 'Letters and summaries are drafted for your review, and actions stated in the session are listed. Nothing is sent or filed without you.' },
    { title: 'Find.', desc: 'Your past notes are compiled in one place, organised and queryable, so you can find what you wrote.' },
  ],
  followUps: ['Letter to GP drafted for review', 'Session summary drafted for review', 'Actions stated in the session listed'],
  tags: ['Past notes', 'Letters', 'Summaries'],
};

export const productCapabilities: TrustSectionCopy = {
  heading: 'Designed to be reviewable at every step',
  lead: 'Nousna is designed so that everything it drafts is visible, editable and drawn from the session, and nothing is used until you have reviewed it.',
  features: [
    'Record and transcribe sessions after patient agreement',
    'Summarise what was discussed',
    'Draft notes, letters and summaries',
    'Create and save your own templates',
    'Edit every draft before you use it',
    'Structure notes into fields you choose',
    'List actions stated in the session',
    'Compile your past notes in one place',
    'Find and redraft within your own notes',
  ],
};
