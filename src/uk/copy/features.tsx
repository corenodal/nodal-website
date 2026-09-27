import { FileText, LayoutTemplate, PenLine, Mail, Download, Layers, Search, Ban, MessageCircle, UserCheck, FileSignature, MapPin, Lock, ListChecks } from 'lucide-react';
import { TrustLine } from '../../components/TrustLine';
import type { FeaturesHeroCopy } from '../../sections/FeaturesHero';
import type { FeatureRow } from '../../sections/FeatureDetails';
import type { PracticeTypesCopy } from '../../sections/PracticeTypes';
import type { TrustVerifyCopy } from '../../sections/TrustVerify';
import { TemplateMock, LetterMock, CompiledNotesMock, AssistantMock } from '../sections/Mocks';
import { ukBadges } from './home';

export const featuresHero: FeaturesHeroCopy = {
  lines: ['From the session', 'to a draft', 'you review.'],
  sub: 'Nousna is intended to transcribe a session, summarise what was discussed, and draft notes, letters and summaries for you to review and edit.',
  cta: { label: 'Read the intended purpose', to: '/intended-purpose' },
  trust: <TrustLine items={ukBadges.slice(0, 3)} />,
};

export const featureRows: FeatureRow[] = [
  {
    title: 'Notes in the format you already use.',
    description: 'Write your own template in the structure you already use, whether that is SOAP, DAP or something of your own. Nousna is designed to draft notes in it, filled only from what was said in the session.',
    bullets: [
      { icon: FileText, label: 'Drafted from the session transcript', detail: '' },
      { icon: LayoutTemplate, label: 'Your own templates, in any structure', detail: '' },
      { icon: PenLine, label: 'A draft for you to review and edit', detail: '' },
    ],
    visual: <TemplateMock />,
    accent: 'nousna-green',
    imageFirst: false,
    imageAnchor: 'top-left',
  },
  {
    title: 'Summaries and letters, drafted for your review.',
    description: 'Draft session summaries, and letters or other documents from your own templates, using the transcript and documents you provide. When you copy or download one, it leaves Nousna and your practice’s controls apply.',
    bullets: [
      { icon: Mail, label: 'Summaries and letters drafted for review', detail: '' },
      { icon: UserCheck, label: 'You review every output before it goes anywhere', detail: '' },
      { icon: Download, label: 'Copy or download as Word', detail: '' },
    ],
    visual: <LetterMock />,
    accent: 'nousna-violet',
    imageFirst: true,
    imageAnchor: 'top-right',
  },
  {
    title: 'Your past notes, compiled.',
    description: 'Your past notes for a patient can be compiled into one place, organised and queryable, so you can find what you wrote. Nousna does not interpret them or draw conclusions across them.',
    bullets: [
      { icon: Layers, label: 'Past notes in one place', detail: '' },
      { icon: Search, label: 'Organised and queryable', detail: '' },
      { icon: ListChecks, label: 'Actions listed only when stated in the session', detail: '' },
    ],
    visual: <CompiledNotesMock />,
    accent: 'nousna-green',
    imageFirst: false,
    imageAnchor: 'top-left',
  },
  {
    title: 'An assistant for your own documentation.',
    description: 'Ask Node to find or redraft material within your own notes. It declines questions about diagnosis, treatment, dosing or prognosis, and offers what you recorded instead.',
    bullets: [
      { icon: Search, label: 'Finds material in your notes', detail: '' },
      { icon: MessageCircle, label: 'Redrafts notes, letters and summaries on request', detail: '' },
      { icon: Ban, label: 'Declines clinical questions', detail: '' },
    ],
    visual: <AssistantMock />,
    accent: 'nousna-violet',
    imageFirst: true,
    imageAnchor: 'top-right',
  },
];

export const practiceTypes: PracticeTypesCopy = {
  heading: 'Designed for independent practices.',
  lead: 'The evaluation is open to independent mental-health practices in England, Scotland and Wales.',
  practices: [
    { title: 'Solo practice', points: ['Draft notes from the session, ready for your review', 'Your templates and your note structure', 'Past notes compiled, so you can find what you wrote'] },
    { title: 'Small group practice', points: ['Consistent note formats across your team', 'Each clinician reviews and edits their own notes', 'Your practice remains the data controller'] },
    { title: 'Private psychiatry', points: ['Structured templates with the fields you choose', 'Session summaries drafted for your review', 'Letters drafted for your review'] },
  ],
};

export const featuresDesign: TrustVerifyCopy = {
  heading: 'How Nousna is designed.',
  lead: 'We describe our technical arrangements rather than offer an assurance of outcome.',
  leftTitle: 'How data is handled',
  rightTitle: 'How drafts are made',
  left: [
    { icon: FileSignature, label: 'UK GDPR Article 28 processor terms' },
    { icon: MapPin, label: 'Data stored and processed in the UK' },
    { icon: Lock, label: 'Encrypted in transit and at rest' },
    { icon: UserCheck, label: 'You review and edit every output' },
    { icon: Ban, label: 'Patient data is not used to train Nousna’s AI models' },
  ],
  right: [
    { icon: FileText, label: 'Drafts drawn only from the session' },
    { icon: LayoutTemplate, label: 'Your own templates' },
    { icon: PenLine, label: 'Edit every draft before you use it' },
    { icon: Layers, label: 'Past notes compiled in one place' },
    { icon: ListChecks, label: 'Actions listed only when stated in the session' },
  ],
  link: { label: 'See what taking part involves', to: '/for-uk-users' },
};
