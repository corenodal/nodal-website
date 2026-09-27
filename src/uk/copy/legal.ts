import { ukInfo } from './placeholders';

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  table?: { head: string[]; rows: string[][] };
  bullets?: { lead?: string; rest: string }[];
  callout?: boolean;
};

export type LegalDoc = {
  eyebrow: string;
  lines: string[];
  lead: string;
  sections: LegalSection[];
};

export const privacy: LegalDoc = {
  eyebrow: 'Privacy statement',
  lines: ['How we handle', 'your information.'],
  lead: `This notice covers the personal data Nousna collects from clinicians, practice contacts and people who get in touch with us. Last updated ${ukInfo.lastUpdated}.`,
  sections: [
    {
      heading: 'This notice does not cover patient information',
      callout: true,
      paragraphs: ['If you are a patient of a practice that uses Nousna, your practice is the controller for your information and its own privacy notice applies. We process that information only on the practice’s instructions, under a written Article 28 data processing agreement. Ask your practice for its notice.'],
    },
    {
      heading: 'Who we are',
      paragraphs: [
        `Nousna is a product of Nodal, Inc., a company incorporated in the United States, with its principal place of business at ${ukInfo.registeredAddress}, Richardson, Texas, USA. We are the controller for the personal data described in this notice.`,
        `Our representative in the United Kingdom under Article 27 of the UK GDPR is ${ukInfo.ukRepName}, ${ukInfo.ukRepAddress}, ${ukInfo.ukRepEmail}. You can contact either of us about anything in this notice.`,
      ],
    },
    {
      heading: 'What we collect, why, and on what basis',
      table: {
        head: ['What', 'Why', 'Lawful basis', 'Kept for'],
        rows: [
          ['Name, email, practice, role and message, from an enquiry', 'To respond to you and, if relevant, discuss taking part', 'Article 6(1)(f): our legitimate interest in responding to you', '[12 months] from last contact'],
          ['Name, work email, practice, role and login details, if you use the software', 'To give you an account and protect it', 'Article 6(1)(b): our contract with your practice', 'Your account, plus [12 months]'],
          ['Technical information: device, browser, IP address, pages viewed, errors', 'To operate the website and service and protect them', 'Article 6(1)(f): a working, protected service', '[90 days]'],
          ['Feedback you give us about the software', 'To understand how it performs and improve it', 'Article 6(1)(f); your consent for a recorded conversation', '[24 months]'],
          ['Business contact details and correspondence', 'To manage the relationship and keep proper records', 'Articles 6(1)(b) and 6(1)(c)', '[6 years]'],
        ],
      },
    },
    {
      heading: 'Who we share it with',
      paragraphs: ['Our cloud infrastructure provider, which hosts the website and the service; the form service that delivers enquiries from this site to us; our email provider; and professional advisers, under an NDA, where we need advice. Each acts on our instructions under a written contract. We do not sell personal data and we do not share it for advertising.'],
    },
    {
      heading: 'Where we keep it',
      paragraphs: [
        'Information collected through the UK evaluation is stored and processed in the United Kingdom.',
        'Enquiries sent through this site’s contact form are delivered to us by a form service and our email provider, which may process them outside the UK under appropriate safeguards.',
        'Nodal, Inc. is a US-incorporated entity, so we also maintain an International Data Transfer Agreement and a transfer risk assessment.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [`You can ask for a copy of your information, ask us to correct or delete it, object to or restrict how we use it, ask for it in a portable format, and withdraw consent where we relied on it. Contact ${ukInfo.email} and we will respond within one month.`],
    },
    {
      heading: 'Complaints',
      paragraphs: [
        `If you are unhappy with how we have handled your information, please tell us at ${ukInfo.email}. We acknowledge complaints within 30 days and respond without undue delay.`,
        'You can also complain to the Information Commissioner’s Office at ico.org.uk, or on 0303 123 1113. You do not have to come to us first.',
      ],
    },
    { heading: 'Cookies', paragraphs: ['See our cookie notice.'] },
    {
      heading: 'Accessibility',
      paragraphs: [`We are building these pages toward WCAG 2.1 AA. If you have difficulty using anything here, or need information in another format, tell us at ${ukInfo.email} and we will provide it another way.`],
    },
    {
      heading: 'Changes',
      paragraphs: ['If we change this notice we will update the date above and, where the change is significant, tell affected people directly.'],
    },
  ],
};

export const cookies: LegalDoc = {
  eyebrow: 'Cookie notice',
  lines: ['We use as few', 'as we can.'],
  lead: `A cookie is a small file stored on your device. Under the Privacy and Electronic Communications Regulations, the same rules apply to cookies and to other browser storage, and we need your consent before storing anything that is not strictly necessary. Last updated ${ukInfo.lastUpdated}.`,
  sections: [
    {
      heading: 'This website',
      paragraphs: ['nousna.co.uk does not set cookies or store anything in your browser.'],
    },
    {
      heading: 'The Nousna app',
      paragraphs: ['The app at app.nousna.co.uk stores a small amount of information in your browser so it can work. It does not use cookies.'],
      table: {
        head: ['What', 'Purpose', 'Type', 'Kept until'],
        rows: [
          ['Sign-in token', 'Keeps you signed in', 'Strictly necessary', 'You sign out'],
          ['Display preferences', 'Remembers panel sizes and whether patient names are hidden', 'Strictly necessary', 'You clear your browser storage'],
          ['Temporary session data', 'Keeps sign-up and recording steps in progress', 'Strictly necessary', 'You close the tab'],
        ],
      },
    },
    {
      heading: 'How we approach this',
      bullets: [
        { rest: 'Everything we store is strictly necessary, so there is nothing to accept or reject.' },
        { rest: 'No advertising or marketing trackers. There is no case for them on a site about clinical data handling.' },
        { rest: 'If we ever add anything that is not strictly necessary, we will ask for your consent first, and rejecting will be as easy as accepting.' },
      ],
    },
    {
      heading: 'Questions',
      paragraphs: [`Email us at ${ukInfo.email}. If you are unhappy with our answer you can complain to the Information Commissioner’s Office.`],
    },
  ],
};

export const subProcessors: LegalDoc = {
  eyebrow: 'Sub-processors',
  lines: ['Handling data', 'in the UK.'],
  lead: 'Every third party that processes data for the UK evaluation, what each one does, and where it operates. Under the Article 28 agreement we give participating practices advance notice before any material change to this list, with an opportunity to object.',
  sections: [
    {
      heading: 'Current list',
      table: {
        head: ['Sub-processor', 'What it does', 'Location', 'Data it can reach'],
        rows: [
          ['[Cloud infrastructure provider]', 'Hosting, storage and compute', 'United Kingdom [region]', 'All patient and clinician data, at rest and in processing'],
          ['[AI model provider]', 'Text generation for summarisation and drafting', 'United Kingdom region endpoint', 'Session transcript and clinician-supplied documents, in flight. Contractually prohibited from retaining it or training on it'],
          ['[UK systems administration]', 'Administration of the evaluation systems', 'United Kingdom', 'Potentially all UK patient data, under confidentiality obligations'],
          ['[Email / notification provider]', 'Service and account notifications', '[Region]', 'Clinician contact details only. Never patient content'],
        ],
      },
      paragraphs: [`Last updated ${ukInfo.lastUpdated}. If you are a participating practice and want the underlying contractual terms, the regions in detail, or evidence of the no-retention configuration at the model layer, email ${ukInfo.email} and we will share them under the confidentiality agreement.`],
    },
    {
      heading: 'How we manage this list',
      bullets: [
        { lead: 'Equivalent terms.', rest: 'Each sub-processor is bound by written terms imposing the same data protection obligations we owe you under Article 28.' },
        { lead: 'Advance notice.', rest: 'We tell participating practices before adding or replacing a sub-processor, with time to object on reasonable data protection grounds.' },
        { lead: 'We stay responsible.', rest: 'We remain fully liable to you for each sub-processor’s performance.' },
        { lead: 'Region verification.', rest: 'Region configuration is verified rather than assumed, and re-verified on any change of provider, endpoint or terms.' },
        { lead: 'Nothing hidden in tooling.', rest: 'Support, monitoring and test systems are engineered so patient content cannot reach them, and that is verified by test rather than asserted by policy.' },
      ],
    },
  ],
};
