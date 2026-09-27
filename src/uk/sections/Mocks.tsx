import type { ReactNode } from 'react';
import { ArrowLeft, Copy, Download, History, Plus, Mic, Send, Layers, NotebookPen, Paperclip, ChevronRight, FileText } from 'lucide-react';

const Frame = ({ children, footer = true }: { children: ReactNode; footer?: boolean }) => (
  <div className="flex-1 bg-white p-5 md:p-6 flex flex-col text-nousna-graphite">
    {children}
    {footer && (
      <p className="mt-auto pt-4 text-center text-[11px] text-nousna-graphite-soft">Review all AI-generated content before use.</p>
    )}
  </div>
);

const Outline = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 text-xs text-nousna-graphite">{children}</span>
);

const Box = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="relative border border-slate-200 rounded-lg px-3 pt-3 pb-2.5 mb-4">
    <span className="absolute -top-2 left-2.5 bg-white px-1 text-[10px] text-nousna-graphite-soft">{label} *</span>
    {children}
  </div>
);

export const TemplateMock = () => (
  <Frame footer={false}>
    <p className="text-base font-semibold text-nousna-blue mb-1">Edit Template</p>
    <p className="text-xs text-nousna-graphite-soft mb-5">Update your template name or body.</p>
    <Box label="Template Name">
      <p className="text-sm text-nousna-blue">Session note</p>
    </Box>
    <Box label="Template Body">
      <div className="text-xs leading-relaxed space-y-2">
        <p><span className="font-semibold text-nousna-blue">What the patient described</span><br />In the patient’s own words, as said in the session.</p>
        <p><span className="font-semibold text-nousna-blue">What was discussed</span><br />Main topics covered in the session.</p>
        <p><span className="font-semibold text-nousna-blue">Actions stated in the session</span><br />Only actions the clinician or patient said out loud.</p>
      </div>
    </Box>
    <div className="mt-auto flex justify-end items-center gap-4">
      <span className="text-xs text-nousna-graphite-soft">Cancel</span>
      <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-nousna-green text-white text-xs font-semibold">
        <FileText className="w-3.5 h-3.5" /> Save Changes
      </span>
    </div>
  </Frame>
);

export const LetterMock = () => (
  <Frame>
    <div className="flex items-start gap-3 mb-4">
      <span className="w-7 h-7 rounded-full bg-nousna-violet/10 text-nousna-violet flex items-center justify-center flex-shrink-0">
        <ArrowLeft className="w-3.5 h-3.5" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-nousna-blue">Patient A - Letter to GP</p>
        <p className="text-[11px] text-nousna-graphite-soft">03/19/2026</p>
      </div>
      <div className="ml-auto flex gap-2 text-nousna-graphite-soft">
        <Copy className="w-4 h-4" />
        <Download className="w-4 h-4" />
      </div>
    </div>
    <div className="text-xs md:text-[13px] leading-relaxed space-y-2.5">
      <p>Dear Dr Hughes,</p>
      <p>I saw Patient A on 03/19/2026. They described an improved week at work and continued early waking, around 4am most nights.</p>
      <p>They agreed to keep a sleep diary before our next session.</p>
      <p>Kind regards,</p>
    </div>
  </Frame>
);

const sessions = [
  { title: 'Session 8', date: '03/19/2026' },
  { title: 'Session 7', date: '03/15/2026' },
  { title: 'Session 6', date: '02/27/2026' },
];

export const CompiledNotesMock = () => (
  <Frame footer={false}>
    <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2.5 mb-4">
      <span className="text-sm font-semibold text-nousna-blue">Patient A</span>
      <div className="ml-auto flex gap-2">
        <Outline><Layers className="w-3.5 h-3.5" />Collate</Outline>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nousna-green text-white text-xs font-semibold">
          <Mic className="w-3.5 h-3.5" />Record
        </span>
      </div>
    </div>
    <p className="text-[10px] font-medium text-nousna-graphite-soft uppercase tracking-wider mb-2">Documentation</p>
    <div className="flex gap-1 mb-3">
      <span className="px-3 py-1 rounded-lg bg-nousna-violet text-white text-xs font-medium">Sessions</span>
      <span className="px-3 py-1 text-xs text-nousna-graphite">Collated Documents</span>
    </div>
    <ul className="space-y-2">
      {sessions.map((s) => (
        <li key={s.title} className="flex items-center gap-2 border border-slate-100 rounded-xl px-3 py-2.5">
          <ChevronRight className="w-3.5 h-3.5 text-nousna-graphite-soft" />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-nousna-blue">{s.title}</p>
            <p className="text-[11px] text-nousna-graphite-soft">{s.date}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="hidden sm:inline px-2 py-0.5 rounded-md bg-nousna-violet text-white text-[11px]">Template</span>
            <span className="hidden sm:inline px-2 py-0.5 rounded-md bg-nousna-violet text-white text-[11px]">Summary</span>
            <NotebookPen className="w-3.5 h-3.5 text-nousna-graphite-soft" />
            <Paperclip className="w-3.5 h-3.5 text-nousna-graphite-soft" />
          </div>
        </li>
      ))}
    </ul>
  </Frame>
);

const Bubble = ({ from, children }: { from: 'you' | 'node'; children: ReactNode }) => (
  <div className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs md:text-[13px] leading-relaxed ${
    from === 'you' ? 'ml-auto bg-nousna-violet/10 text-nousna-blue' : 'bg-slate-50 text-nousna-graphite'
  }`}>
    {children}
  </div>
);

export const AssistantMock = () => (
  <Frame>
    <div className="flex justify-end gap-3 text-nousna-violet mb-3">
      <History className="w-4 h-4" />
      <Plus className="w-4 h-4" />
    </div>
    <div className="space-y-2.5 mb-4">
      <Bubble from="you">What did I write about sleep in March?</Bubble>
      <Bubble from="node">In your note of 03/15/2026 you recorded that the patient described waking around 4am most nights.</Bubble>
      <Bubble from="you">What diagnosis would fit?</Bubble>
      <Bubble from="node">I can’t answer questions about diagnosis or treatment. I can show you what you recorded in your notes instead.</Bubble>
    </div>
    <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-2.5 text-nousna-graphite-soft">
      <span className="text-xs flex-1 truncate">Ask me anything about Patient A...</span>
      <Mic className="w-4 h-4 text-nousna-violet" />
      <Send className="w-4 h-4" />
    </div>
  </Frame>
);
