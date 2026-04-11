import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookOpen, IdCard, TrendingUp, Sparkles, Lightbulb, ListChecks, Brain, MessageCircle, Wrench, FileText, PenLine, Download, Layers, ClipboardList, CheckSquare, ChevronRight } from 'lucide-react';
import { type as t } from '../styles/typography';
import type { LucideIcon } from 'lucide-react';

interface FeatureBullet {
  icon: LucideIcon;
  label: string;
  detail: string;
}

interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
  loomEmbedId: string;
  bullets: FeatureBullet[];
  details: string[];
  accent: 'nodal-violet' | 'nodal-green';
}

const features: Feature[] = [
  {
    id: 'personalise-your-ai-assistant',
    number: '01',
    title: 'Personalise your AI Assistant',
    description: 'Nodal helps practitioners prepare for each session by bringing forward relevant patient context and insights from previous visits.',
    loomEmbedId: '7d086b67286142d7ab86c284000d833f',
    bullets: [
      { icon: BookOpen, label: 'Session & patient context', detail: 'Maintains session-level and patient-level context through short summaries of past sessions.' },
      { icon: IdCard, label: 'Patient flashcards', detail: 'Surfaces key historical information through patient flashcards for quick review.' },
      { icon: TrendingUp, label: 'Progress tracking', detail: 'Helps track patient progress over time.' },
    ],
    details: [
      'Before each session, Nodal automatically compiles a brief of the patient\'s history, previous notes, and outstanding action items. This means you walk into every appointment already up to speed.',
      'Patient flashcards provide a snapshot of critical information — diagnoses, medications, key dates, and treatment milestones — so you never have to dig through old records.',
      'Progress tracking visualizes patient outcomes across sessions, making it easy to identify trends and adjust treatment plans accordingly.',
    ],
    accent: 'nodal-violet',
  },
  {
    id: 'edit-ai-generated-insights',
    number: '02',
    title: 'Edit AI-generated insights',
    description: 'Nodal makes it easy to generate and tailor clinical notes based on how you document care.',
    loomEmbedId: '9f9809ca8fd144cd98b056a72b0dc652',
    bullets: [
      { icon: Sparkles, label: 'Auto-generated notes', detail: 'Generates structured notes directly from patient sessions.' },
      { icon: Lightbulb, label: 'Flexible formats', detail: 'Supports standard formats as well as custom templates created by clinicians.' },
      { icon: ListChecks, label: 'Ready to review', detail: 'Produces ready-to-review notes to reduce manual writing.' },
    ],
    details: [
      'Nodal listens to your session and automatically generates structured clinical notes in your preferred format — whether that\'s SOAP, DAP, or a custom template you\'ve created.',
      'Templates are fully customizable. Define your own sections, prompts, and formatting rules so that every note matches your documentation style.',
      'Generated notes are ready to review immediately after the session, cutting documentation time significantly while maintaining clinical accuracy.',
    ],
    accent: 'nodal-green',
  },
  {
    id: 'create-custom-templates',
    number: '03',
    title: 'Create custom templates',
    description: 'Nodal highlights what matters most so nothing important is missed after a session.',
    loomEmbedId: 'a35853794a494f6c9330a947fb84fa66',
    bullets: [
      { icon: Brain, label: 'Key themes extracted', detail: 'Extracts key themes and clinically relevant signals.' },
      { icon: MessageCircle, label: 'Discussion highlights', detail: 'Highlights important discussion points.' },
      { icon: ListChecks, label: 'Automatic next steps', detail: 'Generates next steps automatically to support follow-through.' },
    ],
    details: [
      'After each session, Nodal identifies and surfaces the key clinical themes discussed — emotional patterns, behavioral changes, risk factors, and treatment responses.',
      'Important discussion points are highlighted so you can quickly review what was covered without re-reading the entire transcript.',
      'Next steps are automatically suggested based on the session content, ensuring continuity of care and reducing the chance of missed follow-ups.',
    ],
    accent: 'nodal-violet',
  },
  {
    id: 'audio-and-manual-notes',
    number: '04',
    title: 'Audio and Manual Notes',
    description: 'Nodal acts as a customizable assistant that adapts to your workflow and preferences.',
    loomEmbedId: '971f61062d454acb8333ecb37e696845',
    bullets: [
      { icon: Wrench, label: 'Learns your style', detail: 'Learns your workflow, language, and documentation style.' },
      { icon: MessageCircle, label: 'Ask anything', detail: 'Answers questions about patients, treatments, or tasks.' },
      { icon: PenLine, label: 'Editing support', detail: 'Helps edit notes, letters, and drafts as needed.' },
    ],
    details: [
      'The clinical assistant learns how you work — your preferred terminology, note structure, and common workflows — and adapts over time to become more useful.',
      'Ask questions about a patient\'s history, treatment protocols, or pending tasks and get instant, context-aware answers drawn from your session data.',
      'Need to adjust a note or draft a letter? The assistant can help edit, reformat, or rewrite clinical documents while maintaining your voice and style.',
    ],
    accent: 'nodal-green',
  },
  {
    id: 'clinical-insights',
    number: '05',
    title: 'Clinical Insights',
    description: 'Nodal helps streamline how you communicate with patients after a session.',
    loomEmbedId: '7c6f877f2a8546669f5701958b588372',
    bullets: [
      { icon: FileText, label: 'Patient-ready outputs', detail: 'Generates patient-ready summaries and letters.' },
      { icon: PenLine, label: 'Review before sharing', detail: 'Allows review and edits before sharing.' },
      { icon: Download, label: 'Copy or download', detail: 'Produces structured outputs that can be copied or downloaded.' },
    ],
    details: [
      'Nodal generates patient-friendly summaries of sessions that are written in clear, accessible language — ready to share with patients or their families.',
      'Every generated communication goes through a review step, giving you full control over what\'s shared before it reaches the patient.',
      'Outputs can be copied to your clipboard or downloaded as formatted documents, making it easy to integrate with your existing communication workflows.',
    ],
    accent: 'nodal-violet',
  },
  {
    id: 'collated-notes',
    number: '06',
    title: 'Collated Notes',
    description: 'Nodal brings together information across sessions to support continuity of care.',
    loomEmbedId: '221578de6e184e98ae636ed004939aba',
    bullets: [
      { icon: Layers, label: 'Combined session view', detail: 'Combines notes from multiple sessions into one view.' },
      { icon: ClipboardList, label: 'Consolidated history', detail: 'Helps review patient history in a clear, consolidated format.' },
      { icon: CheckSquare, label: 'Task tracking', detail: 'Tracks progress along with pending and completed tasks.' },
    ],
    details: [
      'View notes from multiple sessions side by side or merged into a single consolidated document, making it easy to see the full picture of a patient\'s care journey.',
      'Patient history is organized chronologically with key events, diagnoses, and treatment changes highlighted for quick scanning.',
      'Tasks and action items are tracked across sessions, so you always know what\'s been completed and what\'s still pending.',
    ],
    accent: 'nodal-green',
  },
  {
    id: 'smart-scheduling',
    number: '07',
    title: 'Smart Scheduling',
    description: 'Nodal helps organize and optimize your session scheduling based on clinical priorities.',
    loomEmbedId: '221578de6e184e98ae636ed004939aba',
    bullets: [
      { icon: ClipboardList, label: 'Priority-based scheduling', detail: 'Suggests scheduling based on patient needs and urgency.' },
      { icon: TrendingUp, label: 'Caseload overview', detail: 'Provides a clear view of your weekly caseload.' },
      { icon: CheckSquare, label: 'Follow-up reminders', detail: 'Ensures no follow-ups are missed through automated reminders.' },
    ],
    details: [
      'Nodal analyzes patient needs and session history to suggest optimal scheduling, helping you prioritize patients who need more frequent attention.',
      'Get a clear overview of your weekly caseload, including session types, patient risk levels, and available time slots.',
      'Automated follow-up reminders ensure that patients who need recurring sessions are scheduled on time.',
    ],
    accent: 'nodal-violet',
  },
  {
    id: 'treatment-plans',
    number: '08',
    title: 'Treatment Plans',
    description: 'Nodal assists in creating and maintaining structured treatment plans.',
    loomEmbedId: '221578de6e184e98ae636ed004939aba',
    bullets: [
      { icon: FileText, label: 'Plan generation', detail: 'Generates treatment plan drafts based on session data.' },
      { icon: Brain, label: 'Goal tracking', detail: 'Tracks treatment goals and milestones over time.' },
      { icon: Lightbulb, label: 'Evidence-based suggestions', detail: 'Offers suggestions grounded in clinical best practices.' },
    ],
    details: [
      'Based on session content and patient history, Nodal generates treatment plan drafts that you can review and customize to fit your clinical approach.',
      'Treatment goals are tracked over time, with progress indicators showing how patients are advancing toward their objectives.',
      'Suggestions are grounded in evidence-based practices, giving you a starting point that aligns with clinical standards.',
    ],
    accent: 'nodal-green',
  },
  {
    id: 'data-security',
    number: '09',
    title: 'Data Security',
    description: 'Nodal is built with privacy and compliance at its core to protect sensitive patient data.',
    loomEmbedId: '221578de6e184e98ae636ed004939aba',
    bullets: [
      { icon: CheckSquare, label: 'End-to-end encryption', detail: 'All data is encrypted in transit and at rest.' },
      { icon: Wrench, label: 'Access controls', detail: 'Granular permissions ensure only authorized access.' },
      { icon: ClipboardList, label: 'Compliance ready', detail: 'Designed to meet healthcare data protection standards.' },
    ],
    details: [
      'Patient data is protected with end-to-end encryption, ensuring that sensitive information remains secure throughout its lifecycle.',
      'Granular access controls let you define who can view, edit, or share patient records within your practice.',
      'Nodal is designed with healthcare compliance standards in mind, providing the security foundation your practice needs.',
    ],
    accent: 'nodal-violet',
  },
  {
    id: 'integrations',
    number: '10',
    title: 'Integrations',
    description: 'Nodal connects with the tools you already use to fit seamlessly into your practice.',
    loomEmbedId: '221578de6e184e98ae636ed004939aba',
    bullets: [
      { icon: Layers, label: 'EHR integration', detail: 'Connects with major electronic health record systems.' },
      { icon: Download, label: 'Export options', detail: 'Export notes and data in multiple formats.' },
      { icon: Sparkles, label: 'API access', detail: 'Extensible through API for custom workflows.' },
    ],
    details: [
      'Nodal integrates with major EHR systems so your notes and patient data flow seamlessly into your existing records.',
      'Export notes, treatment plans, and patient summaries in PDF, DOCX, or plain text for use in any system.',
      'For practices with custom workflows, Nodal offers API access to build integrations that fit your specific needs.',
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
              <p className={`${t.body} text-nodal-graphite-soft font-light leading-relaxed`}>
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
                <h2 className={`${t.subheading} font-semibold text-nodal-blue mb-6`}>
                  Overview
                </h2>
                <div className="space-y-4">
                  {activeFeature.details.map((detail, i) => (
                    <p key={i} className={`${t.body} text-nodal-graphite font-light leading-relaxed`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </section>

              {/* Key capabilities */}
              <section>
                <h2 className={`${t.subheading} font-semibold text-nodal-blue mb-6`}>
                  Key Capabilities
                </h2>
                <div className="grid gap-4">
                  {activeFeature.bullets.map((bullet, i) => {
                    const Icon = bullet.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-nodal-grey/50 hover:border-nodal-grey transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          activeFeature.accent === 'nodal-violet'
                            ? 'bg-nodal-violet/10 text-nodal-violet'
                            : 'bg-nodal-green/10 text-nodal-green'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className={`${t.body} font-semibold text-nodal-blue mb-1`}>
                            {bullet.label}
                          </p>
                          <p className={`${t.ui} text-nodal-graphite-soft font-light leading-relaxed`}>
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