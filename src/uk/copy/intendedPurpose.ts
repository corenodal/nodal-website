export const intendedPurpose = {
  hero: {
    eyebrow: 'Intended purpose',
    lines: ['What Nousna', 'is built to do.'],
    lead: 'This is our formal statement of intended purpose. It is the statement our product scope is held to and the statement behind our assessment that Nousna is not a medical device in Great Britain.',
  },
  statement: [
    'Nousna is intended to transcribe a session, summarise what was discussed in it, and draft documentation (notes, letters and summaries) for a clinician to review and edit. It is not intended to diagnose, to monitor a condition, or to recommend or determine treatment.',
    'Everything Nousna produces is drawn from what was said in the session or from documents the clinician provides. It does not add clinical suggestions, recommendations or other information beyond that.',
  ],
  does: [
    'Transcribes a recorded session to text, for the clinician to review and correct.',
    'Summarises what was discussed, drawing only on that transcript.',
    'Drafts a note, letter or summary from the transcript and from documents the clinician supplies, presented as a draft for review and editing.',
    'Structures information into fields the clinician has chosen, populated only from terms explicitly stated in the session.',
    'Lists follow-up actions that were explicitly stated in the session by the clinician or the patient.',
    'Compiles a patient’s past notes into one organised, queryable place, so the clinician can find what they wrote.',
    'Finds and redrafts material within the clinician’s own notes on request.',
  ],
  doesNot: [
    'Suggest a diagnosis, a differential, or the probability of a condition.',
    'Suggest or recommend treatment, medication or a dose.',
    'Suggest a follow-up interval, review date or appointment frequency.',
    'Score, triage, rate or assess risk of any kind, including suicide and self-harm risk.',
    'Track, trend, compare or interpret a patient’s state across sessions.',
    'Identify themes, patterns or areas of concern across sessions.',
    'Generate clinical content that is not traceable to the session or a document the clinician supplied.',
    'Propose follow-up tasks that nobody stated in the session.',
    'Introduce clinical terminology the clinician did not use.',
    'Take any autonomous action, such as ordering, booking, sending or filing without the clinician doing it.',
    'Answer a clinical question. Our document assistant declines questions about diagnosis, treatment, dosing, prognosis or management, and offers what the clinician themselves recorded instead.',
    'Produce anything that is not presented to the clinician as an editable draft.',
  ],
  test: {
    heading: 'The test we apply',
    question: 'Could a person who listened to this session, and read the documents the clinician supplied, produce this output without contributing any clinical knowledge of their own?',
    answer: 'If yes, it is in scope. If it needs clinical knowledge, inference or judgement, it is out of scope, and we do not build it for UK users without first taking the medical device route properly and in advance.',
  },
  sections: [
    {
      heading: 'Why we publish this',
      paragraphs: [
        'The MHRA’s guidance on ambient voice technology products, published on 29 July 2026, is explicit that general disclaimers (a line saying a product is not for diagnosis, for example) are not acceptable to show that a product is outside medical device regulation if medical claims are made or implied elsewhere in the product or its promotional material.',
        'What determines the answer is intended purpose, read from the product, its documentation and its marketing together. So we publish a scoped statement of what the product is for, hold the product to it, and keep a written classification assessment behind it, which we share with participating practices.',
      ],
    },
    {
      heading: 'If this changes',
      paragraphs: [
        'If we add a feature that falls outside this statement, the statement changes first and the regulatory position is dealt with before that feature reaches a UK user. Any material change will be dated and noted on this page.',
      ],
    },
    {
      heading: 'Scope',
      paragraphs: [
        'This statement, and the classification assessment behind it, relate to Great Britain (England, Scotland and Wales) under the UK Medical Devices Regulations 2002. Northern Ireland applies different rules and is outside the scope of the evaluation.',
      ],
    },
  ],
};
