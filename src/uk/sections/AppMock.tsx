import type { ReactNode } from 'react';
import { Home, Users, FileText, MessageSquarePlus, Settings, Layers, Mic } from 'lucide-react';
import { type } from '../../styles/typography';

const transcript = [
  { who: 'Therapist', text: 'How has the week been since we last met?' },
  { who: 'Patient', text: 'Better at work. Still waking around four most nights.' },
  { who: 'Therapist', text: 'You mentioned trying the wind-down routine.' },
  { who: 'Patient', text: 'I did it three nights. I’ll keep a sleep diary this week.' },
  { who: 'Therapist', text: 'I’ll send the letter we discussed to your GP.' },
];

const HeaderButton = ({ icon, label, primary = false }: { icon: ReactNode; label: string; primary?: boolean }) => (
  <span className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${
    primary ? 'bg-nousna-green text-white font-semibold' : 'border border-slate-200 text-nousna-graphite'
  }`}>
    {icon}
    {label}
  </span>
);

const Section = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="mb-4">
    <p className="text-[11px] font-semibold text-nousna-graphite-soft mb-1.5">{label}</p>
    <div className="text-xs md:text-[13px] text-nousna-graphite leading-relaxed space-y-1">{children}</div>
  </div>
);

export const AppMock = () => (
  <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] border border-slate-100 bg-nousna-white md:aspect-[16/10] flex">
    <div className="hidden md:flex flex-col items-center gap-6 w-14 py-6 bg-white border-r border-slate-100 text-nousna-graphite-soft">
      <Home className="w-5 h-5" />
      <Users className="w-5 h-5 text-nousna-green" />
      <FileText className="w-5 h-5" />
      <MessageSquarePlus className="w-5 h-5" />
      <Settings className="w-5 h-5" />
      <span className="mt-auto w-8 h-8 rounded-full bg-nousna-green text-white text-xs font-semibold flex items-center justify-center">N</span>
    </div>

    <div className="flex-1 min-w-0 p-3 md:p-5 flex flex-col gap-3 md:gap-4">
      <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 flex items-center gap-3">
        <span className={`${type.ui} font-semibold text-nousna-blue`}>Patient A</span>
        <div className="ml-auto flex gap-2">
          <HeaderButton icon={<Layers className="w-3.5 h-3.5" />} label="Collate" />
          <HeaderButton icon={<Mic className="w-3.5 h-3.5" />} label="Record" primary />
        </div>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
        <div className="md:col-span-2 bg-white rounded-xl border border-slate-100 p-4 overflow-hidden">
          <p className={`${type.ui} font-semibold text-nousna-blue mb-1`}>Transcript</p>
          <p className="text-[11px] text-nousna-graphite-soft mb-3">Patient agreed to recording at 10:02</p>
          <ul className="space-y-2.5">
            {transcript.map((line) => (
              <li key={line.text} className="text-xs md:text-[13px] leading-snug">
                <span className={`font-semibold ${line.who === 'Patient' ? 'text-nousna-violet' : 'text-nousna-blue'}`}>{line.who}: </span>
                <span className="text-nousna-graphite">{line.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 bg-white rounded-xl border border-slate-100 p-4 flex flex-col overflow-hidden">
          <div className="flex items-center mb-3">
            <p className={`${type.ui} font-semibold text-nousna-blue`}>Session note</p>
            <span className="ml-auto text-xs font-medium text-nousna-violet bg-nousna-violet/10 px-2 py-0.5 rounded-full">For review</span>
          </div>
          <Section label="What was discussed">
            <p>Patient reported an improved week at work and continued early waking, around 4am most nights. Tried the wind-down routine on three nights.</p>
          </Section>
          <Section label="Actions stated in the session">
            <p>Patient: keep a sleep diary this week.</p>
            <p>Clinician: send the letter discussed to the GP.</p>
          </Section>
          <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <span className="text-[11px] text-nousna-graphite-soft">Draft for your review.</span>
            <div className="flex gap-2">
              <span className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 text-nousna-graphite">Edit</span>
              <span className="text-xs px-3 py-1.5 rounded-lg bg-nousna-green text-white font-semibold">Save</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
