import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookOpen, IdCard, FileText, PenLine, Layers, CheckSquare, ChevronRight, Settings, Save, MessageCircle, Mic, RefreshCw } from 'lucide-react';
import { type as t } from '../styles/typography';
import type { LucideIcon } from 'lucide-react';

interface FeatureBullet {
  icon: LucideIcon;
  label: string;
  detail: string;
}

interface FeatureSection {
  title?: string;
  steps: string[];
}

interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
  loomEmbedId: string;
  bullets: FeatureBullet[];
  sections?: FeatureSection[];
  details?: string[];
  accent: 'nodal-violet' | 'nodal-green';
}

const features: Feature[] = [
  {
    id: 'personalise-your-ai-assistant',
    number: '01',
    title: 'Personalise your AI assistant',
    description: 'Customize Node, your AI assistant, to match your preferences for tone, language, formatting, and level of detail.',
    loomEmbedId: '7d086b67286142d7ab86c284000d833f',
    bullets: [
      { icon: Settings, label: 'Preferences tab', detail: 'Customize level of detail, language, date formats, and response structure.' },
      { icon: Save, label: 'Save preferences', detail: 'One click to apply your customizations across the assistant.' },
      { icon: MessageCircle, label: 'Confirm in Node', detail: 'Chat with your AI assistant to verify the changes are saved.' },
    ],
    sections: [
      {
        steps: [
          'Go to Settings on the left pane.',
          'In the Preferences tab, select your customizations for level of detail for notes and responses, language for terminology and spellings, date formats, and whether to structure responses as bullets or paragraphs.',
          'After finalizing the details, click on Save Preferences.',
          'Go to Node, your AI assistant, and chat with it to confirm the changes have been saved.',
        ],
      },
    ],
    accent: 'nodal-violet',
  },
  {
    id: 'edit-ai-generated-insights',
    number: '02',
    title: 'Edit AI-generated insights',
    description: 'Refine AI-generated insights directly in the template, through the AI chatbot, or by regenerating with a different template.',
    loomEmbedId: '9f9809ca8fd144cd98b056a72b0dc652',
    bullets: [
      { icon: PenLine, label: 'Direct edits', detail: 'Edit text and formatting in the patient template with the pencil icon.' },
      { icon: MessageCircle, label: 'AI chatbot edits', detail: 'Paste template content and prompt the chatbot for refinements.' },
      { icon: RefreshCw, label: 'Regenerate with template', detail: 'Swap templates to regenerate the session content in a new format.' },
    ],
    sections: [
      {
        title: 'Edit AI-generated insights',
        steps: [
          'Go to Patients on the left pane.',
          'Select a patient of your choice.',
          'Select a session to edit its insights.',
          'Go to the template and click on the edit button (pencil icon).',
          'Make the relevant edits to the text or format.',
          'Click Save to confirm the edits.',
          'You now have the option to copy the text or download it as a Word document.',
          'Open the Word document to make any additional changes, if required.',
          'Copy and paste the edited content from the Word document back into your patient template.',
        ],
      },
      {
        title: 'Edit using the AI chatbot',
        steps: [
          'Copy the patient template from the left side and paste it into the AI chat box.',
          'Add a prompt detailing the required edits.',
          'Copy the generated content and paste it back on the left side to update the template, or download it directly as a Word document.',
        ],
      },
      {
        title: 'Generate a new template for an existing session',
        steps: [
          'Click on "Regenerate with Template".',
          'Your existing and default templates will be displayed.',
          'Select the template of your choice.',
          'The existing information from the session will be regenerated using the selected template.',
          'Use the result by copying the template or downloading it directly.',
        ],
      },
    ],
    accent: 'nodal-green',
  },
  {
    id: 'create-custom-templates',
    number: '03',
    title: 'Create custom templates',
    description: 'Design and save your own templates so Nodal generates notes and insights in exactly the format you need.',
    loomEmbedId: 'a35853794a494f6c9330a947fb84fa66',
    bullets: [
      { icon: BookOpen, label: 'Default templates', detail: 'Start from Initial Assessment or Follow-up Review.' },
      { icon: FileText, label: 'Template builder', detail: 'Add a name, then type or paste in the content of your template.' },
      { icon: CheckSquare, label: 'Save and reuse', detail: 'Saved templates appear alongside defaults and can be used immediately.' },
    ],
    sections: [
      {
        steps: [
          'Go to Templates on the left pane.',
          'View the default templates (Initial Assessment and Follow-up Review).',
          'Click the Add Template button in the top right corner.',
          'Start by adding a name for your template.',
          'Manually type in the details of your template or copy and paste it from another source.',
          'Click Create Template to save your custom template.',
          'Once saved, your template appears alongside existing ones and can be used to generate patient notes and insights.',
        ],
      },
    ],
    accent: 'nodal-violet',
  },
  {
    id: 'audio-and-manual-notes',
    number: '04',
    title: 'Audio and manual notes',
    description: 'Capture sessions by recording audio or adding manual notes, all tied back to the right patient and session.',
    loomEmbedId: '971f61062d454acb8333ecb37e696845',
    bullets: [
      { icon: Mic, label: 'Start Recording', detail: 'Capture session audio from Quick Actions on the Home Page.' },
      { icon: PenLine, label: 'Manual notes', detail: 'Type, paste, or upload an audio file for a manual note.' },
      { icon: IdCard, label: 'Linked to patient', detail: 'Save to a new or existing session under the right patient.' },
    ],
    sections: [
      {
        title: 'Record an audio',
        steps: [
          'On the Home Page, find the Start Recording button below Quick Actions.',
          'Click Start Recording to begin capturing the audio.',
          'Pause the recording or stop it once you are done with the session.',
          'Select the patient for that session.',
          'Choose to save the recording to a previous session or add a new session.',
          'If you add it to a previous session, it will be saved under the notes for that session.',
          'If you create a new session, add a title for your note.',
          'Click Continue and select the template you want to use to save this recording.',
          'The recording is saved in the selected template in the patient\'s session tab.',
        ],
      },
      {
        title: 'Add a manual note',
        steps: [
          'On the Home Page, find the Start New Note button below Quick Actions.',
          'Select a patient for that note.',
          'Choose to save the note to a previous session or add a new session.',
          'Once the session is selected, add a name for your note and select the relevant template.',
          'Type in your note or copy and paste it in.',
          'You can also upload an audio file of a session recorded previously or on a different device.',
          'Click Save Note to add it to the linked patient and session.',
        ],
      },
    ],
    details: [
      'You can also use both of these features by navigating to the Patients page on the left pane and selecting the appropriate patient.',
      'From there, you can either record an audio or add a note for the selected patient under an existing or new session.',
    ],
    accent: 'nodal-green',
  },
  {
    id: 'clinical-insights',
    number: '05',
    title: 'Clinical insights',
    description: 'Explore the summary, action items, template, and transcript generated for each session — and manage session attachments.',
    loomEmbedId: '7c6f877f2a8546669f5701958b588372',
    bullets: [
      { icon: FileText, label: 'Summary & key themes', detail: 'See a quick overview of the session along with the key themes discussed.' },
      { icon: CheckSquare, label: 'Action items', detail: 'View all tasks for the patient and clinician derived from the session.' },
      { icon: BookOpen, label: 'Template & transcript', detail: 'Access detailed notes in your template and the full session transcript.' },
      { icon: Layers, label: 'Session attachments', detail: 'Upload, view, and summarize attachments tied to each session.' },
    ],
    sections: [
      {
        title: 'View clinical insights generated after a session',
        steps: [
          'Go to Patients on the left pane and select a patient.',
          'Select a session of your choice.',
          'For each session, you will find Summary, Action Items, and Template.',
          'Pick the relevant option based on your requirement.',
          'Click Summary to find an overview of the session and the key themes discussed.',
          'Click Action Items to see all tasks for both the patient and the clinician based on the session.',
          'Click Template to see detailed notes from the session in the previously selected template format.',
          'Click Transcript to look at the exact conversation between the clinician and patient during the session.',
          'Navigate back to the sessions page to view the attachments under the appropriate session.',
        ],
      },
      {
        title: 'View or add attachments',
        steps: [
          'Click on Attachment to view what was added for a particular session.',
          'You also have the option to view a Summary of the attachment.',
          'At the top of the page, below the patient details, you have the option to Upload an Attachment.',
          'Select an existing session or add a new one and upload attachments in a wide range of formats.',
          'The attachment will be saved under the relevant patient and session.',
        ],
      },
    ],
    accent: 'nodal-violet',
  },
  {
    id: 'collate-multiple-insights',
    number: '06',
    title: 'Collate multiple insights',
    description: 'Combine insights across multiple sessions into a single collated document you can share, save, or refine.',
    loomEmbedId: '2b20b9185ae642acb1365fecc92981c2',
    bullets: [
      { icon: Layers, label: 'Multi-session selection', detail: 'Pick two or more sessions, or specific insights within them.' },
      { icon: RefreshCw, label: 'Generate collated document', detail: 'Produces a single document combining the selected insights.' },
      { icon: PenLine, label: 'Edit and share', detail: 'Send directly to the patient or refine before sharing.' },
      { icon: Save, label: 'Save for later', detail: 'Store collated documents under the patient for future access.' },
    ],
    sections: [
      {
        steps: [
          'Go to Patients on the left pane and select a patient.',
          'Click the Collate button below the patient details.',
          'Select two or more sessions, or pick multiple insights across different sessions.',
          'Choose the relevant insights across sessions and click Generate.',
          'A collated document is generated on the right side of the screen.',
          'Send this collated document directly to the patient or make further edits.',
          'Once satisfied, copy, download, or save the collated document.',
          'If you click Save, add a name to your collated document and save it.',
          'Once saved, view it under Collated Documents on the Patients page, with options to copy, download, or edit.',
        ],
      },
    ],
    accent: 'nodal-green',
  },
];

export const Docs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = searchParams.get('feature') || features[0].id;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeFeature = features.find((f) => f.id === activeId) || features[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeId]);

  const handleFeatureClick = (id: string) => {
    setSearchParams({ feature: id });
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen pt-20 bg-nodal-white relative z-10">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-white rounded-lg border border-nodal-grey shadow-sm"
        aria-label="Toggle sidebar"
      >
        <ChevronRight className={`w-5 h-5 text-nodal-graphite transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
      </button>

      <div className="max-w-7xl mx-auto px-6 md:px-24 flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:relative top-20 lg:top-0 left-0 lg:left-auto h-[calc(100vh-5rem)] lg:h-auto lg:min-h-[calc(100vh-5rem)] w-72 lg:w-56 xl:w-60 flex-shrink-0 bg-white/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none lg:border-r border-nodal-grey/60 overflow-y-auto z-40 transition-transform lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="py-8 pr-6 lg:sticky lg:top-20">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-nodal-graphite-soft mb-4">
              Features Guide
            </h2>
            <nav className="flex flex-col gap-1">
              {features.map((feature) => {
                const isActive = feature.id === activeId;
                return (
                  <button
                    key={feature.id}
                    onClick={() => handleFeatureClick(feature.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all text-sm ${
                      isActive
                        ? 'bg-nodal-blue/8 text-nodal-blue font-medium'
                        : 'text-nodal-graphite-soft hover:text-nodal-graphite hover:bg-nodal-grey/40'
                    }`}
                  >
                    <span className={`text-xs font-mono ${isActive ? 'text-nodal-green' : 'text-nodal-graphite-soft/60'}`}>
                      {feature.number}
                    </span>
                    <span>{feature.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="pl-0 lg:pl-10 py-8 md:py-12">
            {/* Feature title */}
            <div className="mb-8">
              <h1 className={`${t.heading} font-semibold text-nodal-blue mb-3`}>
                {activeFeature.title}
              </h1>
              <p className={`${t.content} text-nodal-graphite leading-relaxed`}>
                {activeFeature.description}
              </p>
            </div>

            {/* Video embed */}
            <div className="mb-12 rounded-xl overflow-hidden border border-nodal-grey/60 shadow-sm bg-black/5">
              <div className="relative w-full" style={{ paddingBottom: '65.06%' }}>
                <iframe
                  src={`https://www.loom.com/embed/${activeFeature.loomEmbedId}`}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title={`${activeFeature.title} demo`}
                />
              </div>
            </div>

            {/* Feature content */}
            <div className="space-y-12">
              {/* Overview section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className={`${t.subheading} font-semibold text-nodal-blue`}>
                    How it works
                  </h2>
                  <div className={`flex-1 h-px ${
                    activeFeature.accent === 'nodal-violet'
                      ? 'bg-gradient-to-r from-nodal-violet/40 to-transparent'
                      : 'bg-gradient-to-r from-nodal-green/40 to-transparent'
                  }`} />
                </div>
                <div className="space-y-6">
                  {activeFeature.sections?.map((section, i) => {
                    const accentBg = activeFeature.accent === 'nodal-violet' ? 'bg-nodal-violet' : 'bg-nodal-green';
                    const accentBorder = activeFeature.accent === 'nodal-violet' ? 'border-nodal-violet/30' : 'border-nodal-green/30';
                    const accentSoft = activeFeature.accent === 'nodal-violet' ? 'bg-nodal-violet/5' : 'bg-nodal-green/5';
                    return (
                      <div
                        key={i}
                        className={`relative rounded-2xl border-2 ${accentBorder} ${accentSoft} p-6 md:p-8 shadow-sm`}
                      >
                        {section.title && (
                          <h3 className={`${t.body} font-bold text-nodal-blue mb-6`}>
                            {section.title}
                          </h3>
                        )}
                        <ol className="relative space-y-4">
                          {/* Connecting line */}
                          <div
                            className={`absolute left-[17px] top-8 bottom-8 w-0.5 ${
                              activeFeature.accent === 'nodal-violet' ? 'bg-nodal-violet/20' : 'bg-nodal-green/20'
                            }`}
                            aria-hidden
                          />
                          {section.steps.map((step, j) => (
                            <li key={j} className="relative flex gap-4 items-start">
                              <span className={`relative z-10 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${accentBg} text-white shadow-md ring-4 ring-white`}>
                                {j + 1}
                              </span>
                              <p className={`${t.content} text-nodal-blue leading-relaxed pt-2`}>
                                {step}
                              </p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    );
                  })}
                  {activeFeature.details && activeFeature.details.length > 0 && (
                    <div className={`rounded-2xl border-l-4 ${
                      activeFeature.accent === 'nodal-violet' ? 'border-nodal-violet' : 'border-nodal-green'
                    } bg-white p-6 md:p-8 shadow-sm space-y-3`}>
                      {activeFeature.details.map((detail, i) => (
                        <p key={i} className={`${t.content} text-nodal-blue leading-relaxed`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </section>

              {/* Key capabilities */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className={`${t.subheading} font-semibold text-nodal-blue`}>
                    Key Capabilities
                  </h2>
                  <div className={`flex-1 h-px ${
                    activeFeature.accent === 'nodal-violet'
                      ? 'bg-gradient-to-r from-nodal-violet/40 to-transparent'
                      : 'bg-gradient-to-r from-nodal-green/40 to-transparent'
                  }`} />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {activeFeature.bullets.map((bullet, i) => {
                    const Icon = bullet.icon;
                    return (
                      <div
                        key={i}
                        className={`flex items-start gap-4 p-5 rounded-xl bg-white border-2 transition-all hover:shadow-md ${
                          activeFeature.accent === 'nodal-violet'
                            ? 'border-nodal-violet/20 hover:border-nodal-violet/50'
                            : 'border-nodal-green/20 hover:border-nodal-green/50'
                        }`}
                      >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                          activeFeature.accent === 'nodal-violet'
                            ? 'bg-nodal-violet text-white'
                            : 'bg-nodal-green text-white'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className={`${t.body} font-bold text-nodal-blue mb-1`}>
                            {bullet.label}
                          </p>
                          <p className={`${t.ui} text-nodal-graphite leading-relaxed`}>
                            {bullet.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Navigation between features */}
              <section className="pt-8 border-t border-nodal-grey/60">
                <div className="flex justify-between items-center">
                  {features.indexOf(activeFeature) > 0 ? (
                    <button
                      onClick={() => handleFeatureClick(features[features.indexOf(activeFeature) - 1].id)}
                      className="flex items-center gap-2 text-sm text-nodal-graphite-soft hover:text-nodal-blue transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      <span>{features[features.indexOf(activeFeature) - 1].title}</span>
                    </button>
                  ) : (
                    <div />
                  )}
                  {features.indexOf(activeFeature) < features.length - 1 ? (
                    <button
                      onClick={() => handleFeatureClick(features[features.indexOf(activeFeature) + 1].id)}
                      className="flex items-center gap-2 text-sm text-nodal-graphite-soft hover:text-nodal-blue transition-colors"
                    >
                      <span>{features[features.indexOf(activeFeature) + 1].title}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div />
                  )}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};