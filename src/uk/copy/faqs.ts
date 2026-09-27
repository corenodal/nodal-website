import { ukInfo } from './placeholders';

export const faqHero = {
  eyebrow: 'FAQs',
  lines: ['Questions practices', 'and advisers ask.'],
  lead: 'Straight answers on regulatory status, data protection, safety and what taking part involves.',
};

export const faqGroups = [
  {
    title: 'Regulatory status',
    items: [
      { q: 'Is Nousna a medical device in the UK?', a: [
        'On our assessment, no, and we have documented why. The MHRA’s guidance on ambient voice technology products, published on 29 July 2026, treats products intended solely to transcribe and summarise a clinical conversation, draft correspondence and structure that information for a clinician to review as falling outside medical device regulation. Products that generate clinical insights (suggested diagnoses, recommended follow-up or treatment options, or automated clinical actions) are medical devices.',
        'Nousna’s feature set is scoped to the first category. We hold a written classification assessment and will share it with your team. If we ever add a feature that changes the answer, we will take the device route before that feature reaches a UK user.',
      ] },
      { q: 'Does Nousna suggest diagnoses, treatments or follow-up?', a: [
        'No. It summarises what was discussed and drafts documentation from it. It does not propose a diagnosis, a treatment, a follow-up interval or clinical terminology of its own, and it does not add clinical content that was not in the session or in the documents you gave it. This is a deliberate scope decision and it is enforced in the product.',
      ] },
      { q: 'What about risk? Does it flag suicidality or self-harm?', a: [
        'No. Risk-related disclosures are captured in the draft as they were said. Nousna does not score, triage, rate or assess risk, and it does not decide what counts as a risk disclosure.',
      ] },
    ],
  },
  {
    title: 'Data protection',
    items: [
      { q: 'Who is the controller, and who is the processor?', a: [
        'You remain the data controller and keep ownership of the clinical record. Nousna acts as your processor under a UK GDPR Article 28 agreement, and our sub-processors are bound by equivalent terms. That means we act on your documented instructions, we do not decide the purposes for which your patients’ data is used, and we do not use it for our own ends.',
      ] },
      { q: 'What is the lawful basis, and do we need patient consent?', a: [
        'The lawful basis is yours to determine as controller, and we are unable to tell you what it is. Our own analysis, which we share for you to consider, is that Article 6(1)(f) legitimate interests is the better fit for the recording and drafting, together with an Article 9(2)(h) condition for the health data because the processing is for the provision of health care by a clinician bound by professional confidentiality.',
        'We specifically do not recommend Article 6(1)(b) here. Contract necessity is a strict test, and since we promise that a patient can decline recording with no effect on their care, it is hard to argue the recording is necessary to perform the contract. The two positions do not sit together.',
        'Separately from the lawful basis, we ask that recording only ever begins with the patient’s agreement, and the product is built that way. That is about confidentiality and about doing the decent thing. It is not a substitute for your lawful-basis determination, and it should not be described to patients as one.',
      ] },
      { q: 'Where is our data held, and does it leave the UK?', a: [
        'UK session data is stored and processed in UK infrastructure, and the model endpoint used to draft text is configured to a UK region. The architecture is designed so that access is restricted to personnel located in the United Kingdom.',
        'We also put an International Data Transfer Agreement and a transfer risk assessment in place, because Nodal, Inc. is a US-incorporated entity and we do not think data residency alone should be relied on to answer the transfer question.',
      ] },
      { q: 'You’re a US company. What about US legal process, such as the CLOUD Act?', a: [
        'Nodal, Inc. is subject to US law, and a US company can in principle be required to produce data within its control regardless of where that data is stored. Keeping data in the UK does not by itself place it beyond that reach.',
        'What we commit to: we do not permit access to UK data from outside the UK and have engineered against it; we will notify you before disclosing anything in response to any order or legal process unless we are legally prohibited from doing so; we will challenge anything that appears unlawful; and we will disclose only the minimum required by law. This risk is assessed openly in our transfer risk assessment, which you can read.',
      ] },
      { q: 'Do you use our patients’ data to train AI models?', a: [
        'We don’t use patient data to train Nousna’s AI models, and our contracts with our AI provider(s) prohibit them from doing so.',
      ] },
      { q: 'How do our patients exercise their rights?', a: [
        'Patients’ UK GDPR rights (access, rectification, erasure, restriction, objection, portability) are exercised through your practice as controller. We support you in meeting them within the statutory deadlines. On your instruction we locate, export, correct or delete the material we hold and confirm back to you when it is done.',
        'We do not respond to patients directly. Material comes to you first, because in a mental-health context you may need to consider whether an exemption applies (including the serious harm exemption in the Data Protection Act 2018) and whether the opinion of the appropriate health professional is needed, before anything is disclosed. That judgement is yours, not ours.',
        'A patient may contact the Information Commissioner’s Office at any time.',
      ] },
      { q: 'What happens to session audio and the transcript?', a: [
        `Audio is deleted once the note has been drafted. The transcript is retained for ${ukInfo.transcriptRetention} so you can check the note against it. On your instruction we delete it sooner. At the end of the evaluation, your data is returned or securely destroyed, with written confirmation on request.`,
      ] },
      { q: 'What happens when we download or send something out of Nousna?', a: [
        'Patient data is technically kept out of our own support, chat and test systems. When you copy, download or send an output, it leaves Nousna and is governed by your practice’s controls.',
      ] },
      { q: 'How would we hear about a data breach?', a: [
        'As your processor, our duty is to notify you without undue delay once we become aware of a personal data breach. The 72-hour clock for reporting to the ICO runs against you as controller, so our procedure is built to get you what you need: what happened, whose data appears to be involved, what we are doing about it, and what we suggest you consider.',
      ] },
    ],
  },
  {
    title: 'Safety and assurance',
    items: [
      { q: 'Who is responsible if the software gets something wrong?', a: [
        'You are the author of the clinical record and remain professionally responsible for its content, which is why every output is a draft for you to review and edit before you use it. The record is yours, and the review step is what makes that workable rather than a formality.',
      ] },
      { q: 'Do you have a Clinical Safety Officer?', a: [
        'We have a Clinical Safety Lead, who is a registered clinician. In UK health IT, Clinical Safety Officer is a specific term from the NHS clinical risk management standards, and it implies a whole apparatus (a clinical risk management system, a formal safety case report signed under those standards) that belongs to the NHS assurance route we have not yet begun.',
        'What we do have: a named clinical safety contact you can reach, a hazard log, testing of the behaviours that matter most in mental-health documentation, and a route for you to raise a concern about an output that goes straight to that person.',
      ] },
      { q: 'Are you certified to ISO 27001, Cyber Essentials or SOC 2?', a: [
        'No, not yet. Independent assessment is planned as we grow. In the meantime we share our documentation with your team and let you judge it.',
      ] },
      { q: 'Can NHS organisations take part?', a: [
        'No. This evaluation is open to independent practices only. The NHS assurance route (DTAC, the Data Security and Protection Toolkit, Cyber Essentials Plus and the clinical safety standards that go with it) is work we have not yet begun, and we are unable to take an NHS organisation into an evaluation without it.',
      ] },
    ],
  },
  {
    title: 'Taking part',
    items: [
      { q: 'What about patients who are under 18, or who may lack capacity?', a: [
        'The evaluation and its patient materials are designed around adults. If your practice sees under-18s and they would be in scope, we are unable to include your practice at this time.',
        'Where a patient may lack capacity to understand what recording involves, please do not record. There is no benefit to the patient that would justify it, and capacity can fluctuate, so it is a judgement to make on the day rather than once at the outset.',
      ] },
      { q: 'Who is Nousna, and who do we contract with?', a: [
        'Nousna is a product of Nodal, Inc., a company incorporated in the United States with its principal place of business in Richardson, Texas. The evaluation agreement and the Article 28 processor agreement are with that entity, and our UK representative under Article 27 of the UK GDPR is named in the footer of every page here. Both agreements for UK practices are governed by English law and the courts of England and Wales.',
      ] },
      { q: 'What does it cost, and what are we committing to?', a: [
        'There is no fee for the evaluation. Taking part is under a short written agreement covering confidentiality, data protection terms and the feedback we are asking for, and there is no obligation to continue when the evaluation period ends. You can stop at any time, for any reason, with no penalty.',
      ] },
      { q: 'What happens at the end?', a: [
        `Your data is returned or securely destroyed within ${ukInfo.endOfEvaluationDays} days, with written confirmation on request. You keep your clinical records; those are yours and always were. There is no automatic rollover into a paid arrangement, and if we later offer one it will be a separate conversation you are free to decline.`,
      ] },
    ],
  },
];
