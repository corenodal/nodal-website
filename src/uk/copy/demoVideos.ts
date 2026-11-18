import { BookOpen, IdCard, FileText, PenLine, Layers, CheckSquare, Settings, Save, MessageCircle, Mic, RefreshCw } from 'lucide-react';
import type { DemoFeature } from '../../pages/DemoVideos';

export const ukDemoFeatures: DemoFeature[] = [
  {
    id: 'set-your-preferences',
    number: '01',
    title: 'Set your preferences',
    description: 'Set your level of detail, spelling, date format and preferred layout once, and Nousna applies them to every draft.',
    loomEmbedId: '7d086b67286142d7ab86c284000d833f',
    bullets: [
      { icon: Settings, label: 'Preferences tab', detail: 'Choose the level of detail, language, date format and layout of your drafts.' },
      { icon: Save, label: 'Save preferences', detail: 'One click applies your choices to every draft.' },
      { icon: MessageCircle, label: 'Confirm in Node', detail: 'Ask Node, your document assistant, to confirm your preferences are saved.' },
    ],
    sections: [
      {
        steps: [
          'Go to Settings on the left pane.',
          'In the Preferences tab, choose the level of detail for notes and responses, the language for spelling and terminology, the date format, and whether responses are set out as bullets or paragraphs.',
          'When you are happy with your choices, click Save Preferences.',
          'Go to Node, your document assistant, and ask it to confirm the changes have been saved.',
        ],
      },
    ],
    accent: 'nousna-violet',
  },
  {
    id: 'review-and-edit-drafts',
    number: '02',
    title: 'Review and edit drafts',
    description: 'Every draft Nousna produces is yours to review and edit: directly in the template, by asking Node to redraft it, or by redrafting the session in a different template.',
    loomEmbedId: '9f9809ca8fd144cd98b056a72b0dc652',
    bullets: [
      { icon: PenLine, label: 'Direct edits', detail: 'Edit the text and formatting of a draft with the pencil icon.' },
      { icon: MessageCircle, label: 'Redraft with Node', detail: 'Paste a draft into Node and ask for the changes you want.' },
      { icon: RefreshCw, label: 'Regenerate with template', detail: 'Choose another template to redraft the session in a new format.' },
    ],
    sections: [
      {
        title: 'Edit a draft',
        steps: [
          'Go to Patients on the left pane.',
          'Select a patient.',
          'Select a session to open its drafts.',
          'Go to the template and click the edit button (pencil icon).',
          'Make your edits to the text or format.',
          'Click Save to confirm the edits.',
          'You can now copy the text or download it as a Word document.',
          'Open the Word document to make any further changes, if needed.',
        ],
      },
      {
        title: 'Edit with Node',
        steps: [
          'Copy the draft from the left side and paste it into the chat box.',
          'Add a prompt describing the edits you want.',
          'Copy the redrafted text and paste it back on the left side to update the template, or download it directly as a Word document.',
        ],
      },
      {
        title: 'Redraft a session in a different template',
        steps: [
          'Click Regenerate with Template.',
          'Your own templates and the default templates are shown.',
          'Select the template you want.',
          'The information already captured for the session is redrafted in the selected template.',
          'Copy the draft or download it directly.',
        ],
      },
    ],
    accent: 'nousna-green',
  },
  {
    id: 'create-custom-templates',
    number: '03',
    title: 'Create custom templates',
    description: 'Bring the note structure you already use into Nousna, or build a new template from scratch, whether that is SOAP, DAP or something of your own.',
    loomEmbedId: 'a35853794a494f6c9330a947fb84fa66',
    bullets: [
      { icon: BookOpen, label: 'Default templates', detail: 'Start from Initial Assessment or Follow-up Review.' },
      { icon: FileText, label: 'Template builder', detail: 'Add a name, then type or paste in the content of your template.' },
      { icon: CheckSquare, label: 'Save and reuse', detail: 'Saved templates appear alongside the defaults and can be used straight away.' },
    ],
    sections: [
      {
        steps: [
          'Go to Templates on the left pane.',
          'View the default templates (Initial Assessment and Follow-up Review).',
          'Click the Add Template button in the top right corner.',
          'Start by adding a name for your template.',
          'Type in the content of your template, or copy and paste it from another source.',
          'Click Create Template to save your template.',
          'Once saved, your template appears alongside the others and can be used to draft notes.',
        ],
      },
    ],
    accent: 'nousna-violet',
  },
  {
    id: 'audio-and-manual-notes',
    number: '04',
    title: 'Audio and manual notes',
    description: 'Record a session in Nousna once your patient has agreed, or add typed notes. Everything stays linked to the right patient and session.',
    loomEmbedId: '971f61062d454acb8333ecb37e696845',
    bullets: [
      { icon: Mic, label: 'Start Recording', detail: 'Record the session from Quick Actions on the Home Page, once your patient has agreed.' },
      { icon: PenLine, label: 'Manual notes', detail: 'Type, paste, or upload an audio file for a manual note.' },
      { icon: IdCard, label: 'Linked to patient', detail: 'Save to a new or existing session under the right patient.' },
    ],
    sections: [
      {
        title: 'Record a session',
        steps: [
          'On the Home Page, find the Start Recording button below Quick Actions.',
          'Once your patient has agreed, click Start Recording.',
          'Pause the recording, or stop it when the session is over.',
          'Select the patient for that session.',
          'Choose to save the recording to a previous session or add a new session.',
          'If you add it to a previous session, it is saved under the notes for that session.',
          'If you create a new session, add a title for your note.',
          'Click Continue and select the template you want the note drafted in.',
          'Nousna drafts the note in the selected template, under the patient’s session.',
        ],
      },
      {
        title: 'Add a manual note',
        steps: [
          'On the Home Page, find the Start New Note button below Quick Actions.',
          'Select a patient for that note.',
          'Choose to save the note to a previous session or add a new session.',
          'Once the session is selected, add a name for your note and select the template.',
          'Type in your note, or copy and paste it in.',
          'You can also upload an audio file of a session recorded earlier or on another device.',
          'Click Save Note to add it to the patient and session.',
        ],
      },
    ],
    details: [
      'You can also do both from the Patients page on the left pane by selecting the patient.',
      'From there, you can record a session or add a note for that patient, under an existing or new session.',
    ],
    accent: 'nousna-green',
  },
  {
    id: 'collate-notes',
    number: '05',
    title: 'Collate notes from several sessions',
    description: 'Select notes from two or more sessions and collate them into a single document, for example for a referral letter or supervision. Nousna does not interpret them or draw conclusions across them.',
    loomEmbedId: '2b20b9185ae642acb1365fecc92981c2',
    bullets: [
      { icon: Layers, label: 'Choose sessions', detail: 'Pick two or more sessions, or specific notes within them.' },
      { icon: RefreshCw, label: 'One document', detail: 'Collates the notes you selected into a single document.' },
      { icon: PenLine, label: 'Review and edit', detail: 'Review and edit it before it goes anywhere.' },
      { icon: Save, label: 'Save for later', detail: 'Save it under the patient to find later.' },
    ],
    sections: [
      {
        steps: [
          'Go to Patients on the left pane and select a patient.',
          'Click the Collate button below the patient details.',
          'Select two or more sessions, or pick notes from different sessions.',
          'Choose the notes you want to include and click Generate.',
          'The collated document appears on the right side of the screen.',
          'Review and edit it, then send it to the patient if you choose.',
          'When you are happy with it, copy, download or save it.',
          'If you click Save, give the document a name and save it.',
          'Once saved, find it under Collated Documents on the Patients page, with options to copy, download or edit.',
        ],
      },
    ],
    accent: 'nousna-violet',
  },
  {
    id: 'session-drafts',
    number: '06',
    title: 'Session drafts',
    description: 'After each session, Nousna transcribes it and drafts a summary, the follow-up actions stated in it, and a note in your template, all for you to review, edit and download.',
    loomEmbedId: '7c6f877f2a8546669f5701958b588372',
    bullets: [
      { icon: FileText, label: 'Summary', detail: 'An overview of what was discussed, drawn only from the transcript.' },
      { icon: CheckSquare, label: 'Action items', detail: 'Follow-up actions that you or your patient stated in the session.' },
      { icon: BookOpen, label: 'Template & transcript', detail: 'The note drafted in your template, alongside the full session transcript.' },
      { icon: Layers, label: 'Session attachments', detail: 'Upload and view documents for each session, with a summary of each.' },
    ],
    sections: [
      {
        title: 'View drafts after a session',
        steps: [
          'Go to Patients on the left pane and select a patient.',
          'Select a session.',
          'For each session, you will find Summary, Action Items and Template.',
          'Choose the one you need.',
          'Click Summary for an overview of what was discussed in the session.',
          'Click Action Items to see the follow-up actions that you or your patient stated in the session.',
          'Click Template to see the note drafted from the session in the template you chose.',
          'Click Transcript to read the full session transcript and check the draft against it.',
          'Go back to the sessions page to view the attachments for each session.',
        ],
      },
      {
        title: 'View or add attachments',
        steps: [
          'Click Attachment to view what was added to a session.',
          'You can also view a Summary of the attachment.',
          'At the top of the page, below the patient details, you can Upload an Attachment.',
          'Select an existing session or add a new one, and upload attachments in a range of formats.',
          'The attachment is saved under the patient and session.',
        ],
      },
    ],
    accent: 'nousna-green',
  },
];
