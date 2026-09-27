import { ukInfo } from './placeholders';

export type Detail = { lead: string; rest: string };
export type Status = 'in-place' | 'planned' | 'not-started';

export const pageLinks = [
  { id: 'what', label: 'What this is' },
  { id: 'eligibility', label: 'Who can take part' },
  { id: 'design', label: 'How the evaluation is designed' },
  { id: 'ledger', label: 'Where our UK work has got to' },
  { id: 'transfer', label: 'Transfer paperwork' },
  { id: 'agreements', label: 'What you would be agreeing to' },
  { id: 'in-writing', label: 'What we put in writing' },
];

export const hero = {
  eyebrow: 'For UK users',
  lines: ['What taking part', 'actually involves.'],
  lead: 'This page is for practices considering the evaluation, and for the advisers they ask to look at it. It covers who is eligible, what you would be agreeing to, what we ask of you in return, and a ledger of which parts of our UK compliance work are finished and which are not.',
};

export const whatThisIs = {
  heading: 'What this is',
  paragraphs: [
    'A short, time-limited evaluation of a documentation tool with a small number of independent mental-health practices. Clinicians use Nousna in real sessions for around four weeks and tell us candidly how it performs. There is no fee, and no obligation to continue afterwards.',
    'It is an evaluation of software. We are not testing a clinical intervention, not allocating patients to anything, and not collecting patient data to answer a research question of our own.',
  ],
  purpose: [
    'Nousna is intended to transcribe a session, summarise what was discussed in it, and draft documentation (notes, letters and summaries) for a clinician to review and edit. It is not intended to diagnose, to monitor a condition, or to recommend or determine treatment.',
    'Everything Nousna produces is drawn from what was said in the session or from documents you give it. It does not add clinical suggestions, recommendations or other information beyond that.',
  ],
};

export const eligibility = [
  { who: 'Independent practices in England, Scotland or Wales', eligible: true, note: 'This is who the evaluation is designed for.' },
  { who: 'NHS organisations', eligible: false, note: 'The NHS assurance route (DTAC, the Data Security and Protection Toolkit, Cyber Essentials Plus and the clinical safety standards that accompany them) is a work in progress, and we are unable to take an NHS organisation into an evaluation without it.' },
  { who: 'Practices in Northern Ireland', eligible: false, note: 'Northern Ireland is a separate regulatory market under the Windsor Framework, applying EU rules rather than the Great Britain regime. Our assessment currently covers Great Britain.' },
  { who: 'Practices seeing patients under 18', eligible: false, note: 'The evaluation and its patient materials are designed around adults.' },
  { who: 'Sessions with patients who may lack capacity', eligible: false, note: 'Where a patient may not be able to understand what recording involves, we ask that you do not record. Capacity can fluctuate, so this is a judgement on the day rather than once at the outset.' },
];

export const design = {
  heading: 'Roles, data and the limits we work within.',
  lead: 'Each item below describes how the evaluation is designed. Where something is a design intention rather than an assured outcome, we have said so.',
  items: [
    {
      label: 'Roles', title: 'You are the controller. We are your processor.',
      body: 'You remain the data controller and keep ownership of the clinical record. Nousna acts as your processor under a UK GDPR Article 28 agreement, and our sub-processors are bound by equivalent terms.',
      details: [
        { lead: 'Signed first.', rest: 'The Article 28 agreement is signed before any patient information is processed.' },
        { lead: 'Instruction-bound.', rest: 'We process patient information only on your documented instructions and for the purposes of the evaluation.' },
        { lead: 'Named contacts.', rest: 'A privacy contact and a clinical safety contact are named for you at the start of the project.' },
      ],
    },
    {
      label: 'Where data sits', title: 'UK data stays in the UK',
      body: 'UK session data is stored and processed in UK infrastructure, and the model endpoint used to draft text is configured to a UK region. The architecture is designed so that access to UK data is restricted to personnel located in the United Kingdom.',
      details: [
        { lead: 'Region configuration.', rest: 'Storage, processing and model inference for UK practices are pinned to UK regions.' },
        { lead: 'Access design.', rest: 'Access to UK data is governed by role-based controls intended to keep it within the UK administration boundary, and changes to records are timestamped.' },
        { lead: 'Transfer paperwork all the same.', rest: 'Nodal, Inc. is incorporated outside the UK, so we also put an International Data Transfer Agreement and a transfer risk assessment in place, rather than rely on data residency alone.' },
        { lead: 'Sub-processors.', rest: 'We publish the list of who handles what and where, and we tell you in advance of a material change.' },
      ],
    },
    {
      label: 'The AI layer', title: 'Your patients’ words are not training data',
      body: 'We don’t use patient data to train Nousna’s AI models, and our contracts with our AI provider(s) prohibit them from doing so.',
      details: [
        { lead: 'Scoped to the session.', rest: 'Drafts are generated from the session transcript and from documents you provide. Nousna does not introduce clinical content that was not part of that material.' },
        { lead: 'Version control.', rest: 'The model version used in production is pinned, and a change goes through our internal evaluation and sign-off process before it is deployed.' },
      ],
    },
    {
      label: 'Your judgement', title: 'You remain the author of the record',
      body: 'Nousna drafts; you review and edit. The clinician is the author of the record and the decision-maker in care, and the software is scoped so that it does not offer a clinical view of its own.',
      details: [
        { lead: 'No clinical suggestions.', rest: 'Nousna does not propose diagnoses, treatments, follow-up intervals or clinical terminology of its own.' },
        { lead: 'Every output is a draft.', rest: 'You review and edit it before you use it.' },
        { lead: 'Past notes compiled.', rest: 'Your past notes for a patient can be compiled into one place and are organised and queryable, so you can find what you wrote. Nousna does not interpret them or draw conclusions across them.' },
      ],
    },
    {
      label: 'Recording', title: 'Recording begins only after the patient has agreed',
      body: 'Recording starts only once your patient has agreed to it, and the software records who agreed, to what and when. Patients can decline with no effect on their care; you simply document the session as you would otherwise.',
      details: [
        { lead: 'Patient-facing material.', rest: 'We provide a short notice you can give patients, describing in plain English what is recorded and what happens to it.' },
        { lead: 'Withdrawal.', rest: 'A patient can change their mind. If they do, tell us and we will delete the session material held for that patient.' },
        { lead: 'Audio and transcript.', rest: `Audio is deleted once the note has been drafted. The transcript is retained for ${ukInfo.transcriptRetention} so you can check the note against it. On your instruction we delete it sooner.` },
      ],
    },
    {
      label: 'Patients’ rights', title: 'Rights are exercised through your practice',
      body: 'Patients’ UK GDPR rights (access, rectification, erasure, restriction, objection, portability) are exercised through your practice as controller. We support you in meeting them within the statutory deadlines.',
      details: [
        { lead: 'What we do.', rest: 'On your instruction we locate, export, correct or delete the material we hold for a patient, and confirm back to you when it is done.' },
        { lead: 'We don’t answer patients directly.', rest: 'Material goes to you for review before it goes anywhere, because in a mental-health context you may need to consider whether an exemption applies before disclosing.' },
        { lead: 'Complaints.', rest: 'Patients may complain to your practice, to us, or to the Information Commissioner’s Office.' },
      ],
    },
    {
      label: 'Security posture', title: 'Designed with confidentiality in mind',
      body: 'We describe our technical arrangements rather than offer an assurance of outcome. No system can be described as secure in absolute terms, and we don’t make that claim.',
      details: [
        { lead: 'Encryption.', rest: 'Data is encrypted in transit and at rest, using managed keys and current transport security.' },
        { lead: 'Access control.', rest: 'Access is protected by authenticated sign-in and role-based permissions, and access to production data is restricted.' },
        { lead: 'Boundary design.', rest: 'Patient data is technically kept out of our own support, chat and test systems. When you copy, download or send an output, it leaves Nousna and is governed by your practice’s controls.' },
        { lead: 'Independent assessment.', rest: 'We have not yet completed an independent third-party security assessment. It is on our plan, and we will not describe one as complete before it is.' },
      ],
    },
    {
      label: 'If something goes wrong', title: 'How we would tell you',
      body: 'We maintain a written incident procedure with named responders. As your processor, our duty is to notify you without undue delay once we become aware of a personal data breach, so that you can meet your own 72-hour duty to the ICO where it applies.',
      details: [
        { lead: 'What you would get.', rest: 'What happened, which of your patients’ data was involved so far as we can tell, what we are doing, and what we suggest you consider.' },
        { lead: 'Clinical safety concerns.', rest: 'A separate route lets you raise a concern about an output, which goes to our Clinical Safety Lead.' },
      ],
    },
  ],
};

export const ledger = {
  heading: 'Where our UK work has got to',
  sub: 'Some of this is finished. Some of it is a work in progress.',
  note: `This reflects our position as at ${ukInfo.publicationDate} and is updated as items close. Items marked planned, in progress or not started are not in place, and nothing elsewhere on this site should be read as saying they are.`,
  items: [
    { status: 'in-place' as Status, title: 'Role and contract structure', desc: 'Article 28 processor terms are drafted for signature with each practice before any patient information is processed.' },
    { status: 'in-place' as Status, title: 'Transfer paperwork', desc: 'An International Data Transfer Agreement and a transfer risk assessment are prepared, as a backstop to UK data residency.' },
    { status: 'in-place' as Status, title: 'UK data residency', desc: 'UK session data is held in UK infrastructure, and the model endpoint used to draft text is configured to a UK region.' },
    { status: 'in-place' as Status, title: 'Intended-purpose statement', desc: 'The UK feature set is scoped to match it, with a written classification assessment behind it.' },
    { status: 'in-place' as Status, title: 'Clinician review', desc: 'Every output is presented as an editable draft for the clinician to review before use.' },
    { status: 'in-place' as Status, title: 'Patient-facing materials', desc: 'A short notice and a fuller notice for you to give patients, plus an agreement step built into the product.' },
    { status: 'planned' as Status, title: 'ICO registration', desc: 'Our registration and data protection fee are being completed before the evaluation begins.' },
    { status: 'planned' as Status, title: 'Data protection impact assessment', desc: 'A DPIA covering this evaluation is being finalised, and will be available to participating practices.' },
    { status: 'planned' as Status, title: 'UK representative', desc: 'Our representative under Article 27 UK GDPR is being appointed and will be named in the footer of every page here.' },
    { status: 'not-started' as Status, title: 'Independent security assessment', desc: 'We have not completed an independent third-party security assessment, and hold no security certification. We would rather say so than imply one exists.' },
    { status: 'not-started' as Status, title: 'NHS assurance route', desc: 'DTAC, the Data Security and Protection Toolkit and Cyber Essentials Plus have not been begun. This is why Nousna is not available to NHS organisations.' },
    { status: 'not-started' as Status, title: 'Northern Ireland assessment', desc: 'No assessment has been made for the Northern Ireland market, which applies different rules. Practices there are out of scope.' },
  ],
};

export const transfer = {
  heading: 'Why we do the transfer paperwork even though data stays in the UK',
  paragraphs: [
    'UK session data is stored and processed in the United Kingdom, model inference runs on a UK-region endpoint, and access is restricted to personnel here. The Information Commissioner’s test for a restricted transfer turns on whether the organisation receiving the data is a separate legal entity located outside the UK, not on where that organisation keeps its servers. Nodal, Inc. is incorporated in the United States. On the face of that test, your disclosure to us engages the rules whatever our hosting arrangements are.',
    'So we do both. Data residency is the substance of the protection. The International Data Transfer Agreement and the transfer risk assessment are the paperwork that means the question does not have to be argued.',
  ],
  noClaims: {
    title: 'No claims. No warranties.',
    body: 'We are a US-incorporated company and subject to US law. We do not permit access to UK data from outside the UK and have engineered against it, but we will not tell you that no foreign authority could ever compel production of data we control, because that would not be true of any US company. What we do commit to: we will tell you before disclosing anything in response to legal process unless we are prohibited from doing so, we will challenge anything that looks overbroad, and we will disclose only the minimum required by law.',
  },
};

export const agreements = [
  {
    title: 'The evaluation agreement',
    items: [
      'Use of the software for the evaluation period, at no fee',
      'Confirmation that you are an independent practice in England, Scotland or Wales',
      'Your responsibilities: determining your own lawful basis, giving patients the notice, ensuring agreement is taken each session, ensuring every output is reviewed before use',
      'Candid feedback about the software, with no patient-identifying content in it',
      'Mutual confidentiality, which does not stop you raising anything with your regulator, your indemnity provider, the ICO or the MHRA',
      'Termination by you at any time, for any reason, with no fee or penalty',
    ],
  },
  {
    title: 'The Article 28 data processing agreement',
    items: [
      'We process only on your documented instructions',
      'Confidentiality obligations on everyone with access',
      'The security measures we maintain, set out in an annex rather than described in the abstract',
      'Sub-processors, with advance notice of changes and your right to object',
      'Our assistance with patients’ rights requests, including that we give material to you to review rather than answering patients directly',
      'Breach notification to you without undue delay, so you can meet your own 72-hour duty',
      'Return or destruction of your data at the end',
    ],
  },
];

export const asks: Detail[] = [
  { lead: 'Take the patient’s agreement every session.', rest: 'Agreement given last month does not carry over, and the product requires confirmation each time for that reason.' },
  { lead: 'Make declining a real option.', rest: 'Patients in a therapeutic relationship find it hard to say no. Offer the alternative explicitly.' },
  { lead: 'Review every output before you use it.', rest: 'This is the control that everything else rests on. A draft that reads well is still a draft.' },
  { lead: 'Tell us when it gets things wrong.', rest: 'Particularly if anything about a risk-related disclosure is not carried through accurately. That is the thing we most want to hear about, quickly.' },
  { lead: 'Do not describe it to patients as something that helps with their care.', rest: 'It is a documentation tool. Overstating it creates a claim we neither make nor look to support.' },
];

export const notAsking = [
  'Any fee, at any point',
  'Any commitment to continue after the evaluation',
  'Any exclusivity, or any restriction on using other tools',
  'Any public endorsement, case study or quote. We will not attribute anything to you without asking first',
  'Any patient data for our own purposes. It is not used to train or improve anything',
];

export const inWriting = {
  heading: 'What we put in writing.',
  lead: 'These are terms we commit to in the evaluation agreement, not aspirations.',
  items: [
    'A signed Article 28 processor agreement before any patient information is processed.',
    'An International Data Transfer Agreement and transfer risk assessment, as a backstop to our UK data residency.',
    'A plain-English description of our safeguards and our data protection impact assessment, available to your team.',
    'A named privacy contact and a named clinical safety contact you can reach directly for the duration.',
    'Advance notice before any material change to the sub-processors handling your data.',
    'Your data returned or securely destroyed when the evaluation ends, with written confirmation on request.',
    'No fee, and no obligation to continue at the end of the evaluation period.',
  ],
};
