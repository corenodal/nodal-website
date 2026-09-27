import { FileText, AlignLeft, PenLine, ListChecks, Layers, Ban, Mic } from 'lucide-react';
import { TrustLine } from '../../components/TrustLine';
import type { HeroCopy } from '../../sections/Hero';
import type { SolutionCopy } from '../../sections/SolutionSection';
import type { StoryCopy } from '../../sections/StorySection';
import type { TrustVerifyCopy } from '../../sections/TrustVerify';

export const ukBadges = [
  'UK GDPR Article 28 processor terms',
  'Data stored and processed in the UK',
  'You review and edit every output',
  'Independent practices in England, Scotland & Wales',
];

export const ukSessionSteps = [
  { title: 'Agree.', icon: Mic, description: 'Recording begins only after your patient has agreed, and the software records who agreed, to what and when.' },
  { title: 'Draft.', description: 'A draft note is prepared in your chosen format, drawn only from what was said in the session.' },
  { title: 'Review.', icon: PenLine, description: 'You review and edit every draft before you use it.' },
  { title: 'Find.', description: 'Your past notes are compiled in one place, organised and queryable, so you can find what you wrote.' },
];

export const homeHero: HeroCopy = {
  pill: 'An evaluation project with independent practices in Great Britain',
  headline: 'Your session notes, drafted and ready for your review.',
  subtext: 'Nousna is designed to turn a session into draft notes, letters and summaries, using only what was said and the documents you share. You review and edit everything before it’s used.',
  cta: { label: 'See what taking part involves', to: '/for-uk-users' },
  trust: <TrustLine items={ukBadges.slice(0, 3)} />,
};

export const homeSolution: SolutionCopy = {
  heading: 'From the session to a draft you review.',
  body: 'From the moment your patient agrees to recording to the moment you save the note, Nousna is designed to take care of the drafting, so your attention can stay with the conversation.',
  link: { label: 'Explore the product', to: '/product' },
  session: { label: 'Session', status: 'Recording after patient agreement' },
  notes: { label: 'Draft note', badge: 'For review' },
  tasks: {
    label: 'Actions stated in the session',
    items: ['Send the letter discussed to the GP', 'Patient to keep the sleep diary they agreed to', 'Share a session summary with the patient'],
  },
};

export const homeStory: StoryCopy = {
  heading: 'How a session could work with Nousna',
  steps: ukSessionSteps,
};

export const homeScope: TrustVerifyCopy = {
  heading: 'What Nousna does, and what it does not.',
  lead: 'Nousna is intended to transcribe, summarise and draft. It is not intended to diagnose, to monitor a condition, or to recommend or determine treatment.',
  leftTitle: 'What it does',
  rightTitle: 'What it does not do',
  left: [
    { icon: FileText, label: 'Transcribes the session for you to check' },
    { icon: AlignLeft, label: 'Summarises what was discussed' },
    { icon: PenLine, label: 'Drafts notes, letters and summaries' },
    { icon: ListChecks, label: 'Lists actions stated in the session' },
    { icon: Layers, label: 'Compiles your past notes in one place' },
  ],
  right: [
    { icon: Ban, label: 'Suggest a diagnosis or treatment' },
    { icon: Ban, label: 'Suggest follow-up intervals' },
    { icon: Ban, label: 'Score, triage or assess risk' },
    { icon: Ban, label: 'Interpret themes across sessions' },
    { icon: Ban, label: 'Send or file anything without you' },
  ],
  link: { label: 'Read the intended purpose', to: '/intended-purpose' },
};

export const homeEvaluation = {
  heading: 'A small evaluation project, open to independent practices.',
  body: 'Clinicians would use Nousna in real sessions and tell us candidly how it performs.',
  facts: ['Around four weeks', 'No fee', 'No obligation to continue', 'Independent practices in England, Scotland & Wales'],
  card: {
    heading: 'Start a conversation.',
    body: 'Tell us a little about your practice and we will send the agreements and documentation to look at before deciding anything.',
    cta: { label: 'Start a conversation', to: '/contact' },
    link: { label: 'See what taking part involves', to: '/for-uk-users' },
  },
};
