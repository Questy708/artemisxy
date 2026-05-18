'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import {
  PROVOCATIONS,
  COMPETENCY_HUBS,
  FEELINGS,
  type MicroSitePage,
  type TimeTraveller,
  type QuestProgress,
  type Provocation,
} from './Artemis2100Data';
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, Trophy, ChevronRight, Download, ExternalLink, Home, Sparkles, Star } from 'lucide-react';

/* ─── Helpers ─── */
function getEmptyProgress(): QuestProgress {
  const p: QuestProgress = {};
  PROVOCATIONS.forEach((prov) => {
    p[prov.slug] = { discovered: false, created: false, committed: false, deliverable: {}, reflection: '' };
  });
  return p;
}

function countCompleted(progress: QuestProgress): number {
  return Object.values(progress).filter((q) => q.discovered && q.created && q.committed).length;
}

function generateCertId(name: string): string {
  const hash = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return `ART2100-${Date.now().toString(36).toUpperCase()}-${hash.toString(16).toUpperCase()}`;
}

/* ─── Sub-components ─── */

/* Animated grid background */
function CosmicBg() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#06060f]">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(138,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(138,0,0,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8A0000]/[0.06] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4A853]/[0.04] rounded-full blur-[100px]" />
    </div>
  );
}

/* ─── LANDING ─── */
function LandingPage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center relative">
      <CosmicBg />
      <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A853]/70">
        The University of Artemis presents
      </div>
      <h1 className="text-[48px] sm:text-[64px] md:text-[88px] font-black tracking-tighter text-white leading-none mb-4">
        ARTEMIS <span className="text-[#8A0000]">2100</span>
      </h1>
      <p className="text-[20px] sm:text-[24px] font-light text-white/60 mb-8 tracking-wide">
        Design the Future of Education
      </p>
      <div className="max-w-xl mx-auto mb-10">
        <p className="text-[14px] text-white/40 leading-relaxed">
          The year is 2100. The University of Artemis has been operating for 76 years. What you&apos;ll see are the
          pivotal shifts that shaped it — and by extension, shaped the future of education itself. These are
          provocations, not policy. They didn&apos;t all happen. But they all <em className="text-white/60 not-italic font-semibold">could</em> have.
        </p>
      </div>
      <button
        onClick={onEnter}
        className="group flex items-center gap-3 bg-[#8A0000] hover:bg-[#6B0000] text-white px-8 py-4 text-[14px] font-bold uppercase tracking-widest transition-all hover:scale-105"
      >
        Enter the Time Portal
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
      <div className="absolute bottom-8 text-[11px] text-white/20">
        A speculative design experiment — not an accredited programme
      </div>
    </div>
  );
}

/* ─── AUTH ─── */
function AuthPage({ onSubmit }: { onSubmit: (t: TimeTraveller) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feeling, setFeeling] = useState('');
  const [change, setChange] = useState('');

  const canSubmit = name.trim() && email.trim() && feeling && change.trim();

  return (
    <div className="min-h-screen flex items-center justify-center px-5 relative">
      <CosmicBg />
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A853]/70 mb-3">
            Time Traveller Identification
          </div>
          <h2 className="text-[28px] font-bold text-white tracking-tight">Create Your ID</h2>
          <p className="text-[13px] text-white/40 mt-2">You&apos;re about to enter the year 2100. Who are you?</p>
        </div>
        <div className="bg-white/[0.04] border border-white/[0.08] p-6 sm:p-8 space-y-5">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors placeholder:text-white/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors placeholder:text-white/20"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
              One word: how do you feel about education today?
            </label>
            <select
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
              className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors appearance-none"
            >
              <option value="" className="bg-[#0a0a0f]">Choose...</option>
              {FEELINGS.map((f) => (
                <option key={f} value={f} className="bg-[#0a0a0f]">{f}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
              One thing you&apos;d change about university
            </label>
            <textarea
              value={change}
              onChange={(e) => setChange(e.target.value)}
              rows={2}
              className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors placeholder:text-white/20 resize-none"
              placeholder="If you could change one thing..."
            />
          </div>
          <button
            disabled={!canSubmit}
            onClick={() => onSubmit({ name: name.trim(), email: email.trim(), feeling, change: change.trim() })}
            className="w-full bg-[#8A0000] hover:bg-[#6B0000] disabled:bg-white/10 disabled:text-white/30 text-white py-3 text-[13px] font-bold uppercase tracking-widest transition-all"
          >
            Create Time Traveller ID
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── PORTAL DASHBOARD ─── */
function PortalPage({
  traveller,
  progress,
  onEnterQuest,
  onCertificate,
  onBlueprint,
}: {
  traveller: TimeTraveller;
  progress: QuestProgress;
  onEnterQuest: (slug: string) => void;
  onCertificate: () => void;
  onBlueprint: () => void;
}) {
  const completed = countCompleted(progress);
  const allDone = completed === 7;

  return (
    <div className="min-h-screen relative">
      <CosmicBg />
      <div className="max-w-[1200px] mx-auto w-full px-5 sm:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A853]/70 mb-2">Year 2100</div>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white tracking-tight mb-2">
            Welcome, {traveller.name.split(' ')[0]}
          </h2>
          <p className="text-[14px] text-white/40">You are a Time Traveller. Explore the 7 provocation worlds.</p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Progress</span>
            <span className="text-[13px] font-bold text-[#D4A853]">{completed}/7</span>
          </div>
          <div className="w-full h-1.5 bg-white/[0.06] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#8A0000] to-[#D4A853] transition-all duration-700"
              style={{ width: `${(completed / 7) * 100}%` }}
            />
          </div>
        </div>

        {/* Action buttons */}
        {allDone && (
          <div className="flex gap-4 mb-10">
            <button
              onClick={onCertificate}
              className="flex items-center gap-2 bg-[#D4A853] hover:bg-[#c49a48] text-[#06060f] px-6 py-3 text-[13px] font-bold uppercase tracking-widest transition-all"
            >
              <Trophy className="w-4 h-4" />
              Claim Certificate
            </button>
            <button
              onClick={onBlueprint}
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-6 py-3 text-[13px] font-bold uppercase tracking-widest transition-all"
            >
              <Star className="w-4 h-4" />
              View Blueprint
            </button>
          </div>
        )}

        {!allDone && completed > 0 && (
          <div className="mb-10">
            <button
              onClick={onBlueprint}
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/60 hover:text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all"
            >
              <Star className="w-3.5 h-3.5" />
              View Blueprint
            </button>
          </div>
        )}

        {/* Provocation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROVOCATIONS.map((prov) => {
            const q = progress[prov.slug];
            const isComplete = q?.discovered && q?.created && q?.committed;
            const phases = [q?.discovered, q?.created, q?.committed].filter(Boolean).length;

            return (
              <button
                key={prov.slug}
                onClick={() => onEnterQuest(prov.slug)}
                className="group text-left bg-white/[0.03] border border-white/[0.06] hover:border-[#8A0000]/50 p-6 transition-all hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[28px]">{prov.icon}</span>
                  {isComplete ? (
                    <CheckCircle2 className="w-5 h-5 text-[#D4A853]" />
                  ) : (
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i < phases ? 'bg-[#8A0000]' : 'bg-white/10'}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <h3 className="text-[16px] font-bold text-white group-hover:text-[#8A0000] transition-colors mb-1 leading-snug">
                  {prov.title}
                </h3>
                <p className="text-[12px] text-white/40 leading-relaxed mb-4">{prov.tagline}</p>
                <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#8A0000]/70 group-hover:text-[#8A0000] transition-colors">
                  {isComplete ? 'Review' : phases > 0 ? 'Continue' : 'Enter'}
                  <ChevronRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── QUEST PAGE ─── */
function QuestPage({
  provocation,
  questProgress,
  onUpdate,
  onBack,
}: {
  provocation: Provocation;
  questProgress: { discovered: boolean; created: boolean; committed: boolean; deliverable: Record<string, string>; reflection: string };
  onUpdate: (update: Partial<{ discovered: boolean; created: boolean; committed: boolean; deliverable: Record<string, string>; reflection: string }>) => void;
  onBack: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'discover' | 'create' | 'commit'>(
    questProgress.discovered ? (questProgress.created ? 'commit' : 'create') : 'discover'
  );
  const [localDeliverable, setLocalDeliverable] = useState<Record<string, string>>(questProgress.deliverable || {});
  const [localReflection, setLocalReflection] = useState(questProgress.reflection || '');

  // Initialize timeline from saved deliverable
  const initialTimeline = React.useMemo(() => {
    if (provocation.slug === 'open-loop' && questProgress.deliverable?.timeline) {
      try {
        return JSON.parse(questProgress.deliverable.timeline);
      } catch { /* empty */ }
    }
    return {};
  }, [provocation.slug, questProgress.deliverable]);

  const [timelineData, setTimelineData] = useState<Record<number, 'learn' | 'apply' | ''>>(initialTimeline);

  const handleTimelineClick = (year: number) => {
    setTimelineData((prev) => {
      const current = prev[year] || '';
      const next = current === '' ? 'learn' : current === 'learn' ? 'apply' : '';
      const newData = { ...prev, [year]: next };
      setLocalDeliverable((d) => ({ ...d, timeline: JSON.stringify(newData) }));
      return newData;
    });
  };

  const handleCreateSave = () => {
    onUpdate({ created: true, deliverable: { ...localDeliverable } });
    setActiveTab('commit');
  };

  const handleCommit = () => {
    onUpdate({ committed: true, reflection: localReflection });
  };

  const tabs = [
    { key: 'discover' as const, label: 'Discover', done: questProgress.discovered, enabled: true },
    { key: 'create' as const, label: 'Create', done: questProgress.created, enabled: questProgress.discovered },
    { key: 'commit' as const, label: 'Commit', done: questProgress.committed, enabled: questProgress.created },
  ];

  return (
    <div className="min-h-screen relative">
      <CosmicBg />
      <div className="max-w-[900px] mx-auto w-full px-5 sm:px-8 py-12">
        {/* Back + header */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Portal
        </button>

        <div className="flex items-start gap-4 mb-8">
          <span className="text-[40px] leading-none">{provocation.icon}</span>
          <div>
            <h2 className="text-[24px] sm:text-[32px] font-bold text-white tracking-tight leading-tight">
              {provocation.title}
            </h2>
            <p className="text-[13px] text-[#D4A853]/80 mt-1">{provocation.tagline}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 border-b border-white/[0.06]">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              disabled={!tab.enabled}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 text-[11px] font-bold uppercase tracking-widest transition-all border-b-2 -mb-px ${
                activeTab === tab.key
                  ? 'border-[#8A0000] text-white'
                  : tab.enabled
                  ? 'border-transparent text-white/40 hover:text-white/70'
                  : 'border-transparent text-white/15 cursor-not-allowed'
              }`}
            >
              {tab.label}
              {tab.done && <CheckCircle2 className="w-3 h-3 inline ml-2 text-[#D4A853]" />}
            </button>
          ))}
        </div>

        {/* DISCOVER */}
        {activeTab === 'discover' && (
          <div>
            <div className="prose prose-invert max-w-none mb-8">
              {provocation.narrative.split('\n\n').map((para, i) => (
                <p key={i} className="text-[14px] text-white/60 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>
            <div className="bg-[#8A0000]/[0.1] border border-[#8A0000]/30 p-6 mb-8">
              <p className="text-[15px] text-white/80 font-semibold italic leading-relaxed">
                &ldquo;{provocation.keyQuote}&rdquo;
              </p>
            </div>
            <button
              onClick={() => {
                onUpdate({ discovered: true });
                setActiveTab('create');
              }}
              className="flex items-center gap-2 bg-[#8A0000] hover:bg-[#6B0000] text-white px-6 py-3 text-[12px] font-bold uppercase tracking-widest transition-all"
            >
              Mark as Discovered
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* CREATE */}
        {activeTab === 'create' && (
          <div>
            <h3 className="text-[18px] font-bold text-white mb-2">{provocation.questTitle}</h3>
            <p className="text-[14px] text-white/50 leading-relaxed mb-8">{provocation.questPrompt}</p>

            <div className="space-y-6">
              {provocation.questInputs.map((input) => {
                if (input.type === 'timeline') {
                  return (
                    <div key={input.key}>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3">
                        {input.label}
                      </label>
                      <div className="flex gap-1 flex-wrap">
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((year) => {
                          const val = timelineData[year] || '';
                          return (
                            <button
                              key={year}
                              onClick={() => handleTimelineClick(year)}
                              className={`w-10 h-10 text-[10px] font-bold flex items-center justify-center border transition-all ${
                                val === 'learn'
                                  ? 'bg-[#8A0000]/30 border-[#8A0000]/60 text-[#8A0000]'
                                  : val === 'apply'
                                  ? 'bg-[#D4A853]/20 border-[#D4A853]/50 text-[#D4A853]'
                                  : 'bg-white/[0.03] border-white/[0.08] text-white/30 hover:border-white/20'
                              }`}
                            >
                              {val === 'learn' ? '▲' : val === 'apply' ? '▼' : year}
                            </button>
                          );
                        })}
                      </div>
                      <div className="flex gap-4 mt-2 text-[10px] text-white/30">
                        <span>Click to cycle: blank → ▲ Learning → ▼ Application → blank</span>
                      </div>
                    </div>
                  );
                }

                if (input.type === 'multi-select') {
                  const current = (localDeliverable[input.key] || '').split(',').filter(Boolean);
                  return (
                    <div key={input.key}>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3">
                        {input.label}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {(input.options || []).map((opt) => {
                          const selected = current.includes(opt);
                          return (
                            <button
                              key={opt}
                              onClick={() => {
                                const next = selected ? current.filter((c: string) => c !== opt) : [...current, opt];
                                setLocalDeliverable((d) => ({ ...d, [input.key]: next.join(',') }));
                              }}
                              className={`px-3 py-1.5 text-[11px] font-medium border transition-all ${
                                selected
                                  ? 'bg-[#8A0000]/20 border-[#8A0000]/50 text-[#8A0000]'
                                  : 'bg-white/[0.03] border-white/[0.08] text-white/40 hover:border-white/20'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                if (input.type === 'dropdown') {
                  return (
                    <div key={input.key}>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                        {input.label}
                      </label>
                      <select
                        value={localDeliverable[input.key] || ''}
                        onChange={(e) => setLocalDeliverable((d) => ({ ...d, [input.key]: e.target.value }))}
                        className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0a0a0f]">Choose...</option>
                        {(input.options || []).map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0a0a0f]">{opt}</option>
                        ))}
                      </select>
                    </div>
                  );
                }

                if (input.type === 'textarea') {
                  return (
                    <div key={input.key}>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                        {input.label}
                      </label>
                      <textarea
                        value={localDeliverable[input.key] || ''}
                        onChange={(e) => setLocalDeliverable((d) => ({ ...d, [input.key]: e.target.value }))}
                        rows={3}
                        className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors placeholder:text-white/20 resize-none"
                        placeholder={input.placeholder}
                      />
                    </div>
                  );
                }

                // text
                return (
                  <div key={input.key}>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                      {input.label}
                    </label>
                    <input
                      type="text"
                      value={localDeliverable[input.key] || ''}
                      onChange={(e) => setLocalDeliverable((d) => ({ ...d, [input.key]: e.target.value }))}
                      className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors placeholder:text-white/20"
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleCreateSave}
              className="flex items-center gap-2 bg-[#8A0000] hover:bg-[#6B0000] text-white px-6 py-3 text-[12px] font-bold uppercase tracking-widest transition-all mt-8"
            >
              Save Deliverable
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* COMMIT */}
        {activeTab === 'commit' && (
          <div>
            <h3 className="text-[18px] font-bold text-white mb-4">Commit to This Provocation</h3>
            <p className="text-[14px] text-white/50 mb-6">
              Share one insight from your exploration and reflect on what this provocation means for the future of
              education.
            </p>
            {provocation.reflectionQuestions.map((q, i) => (
              <div key={i} className="mb-4">
                <label className="block text-[12px] font-medium text-white/60 mb-2">{q}</label>
                <textarea
                  value={localReflection}
                  onChange={(e) => setLocalReflection(e.target.value)}
                  rows={3}
                  className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Share your reflection..."
                />
              </div>
            ))}
            <button
              onClick={handleCommit}
              className="flex items-center gap-2 bg-[#D4A853] hover:bg-[#c49a48] text-[#06060f] px-6 py-3 text-[12px] font-bold uppercase tracking-widest transition-all mt-4"
            >
              Complete Quest
              <Trophy className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── CERTIFICATE ─── */
function CertificatePage({
  traveller,
  progress,
  onBlueprint,
  onPortal,
}: {
  traveller: TimeTraveller;
  progress: QuestProgress;
  onBlueprint: () => void;
  onPortal: () => void;
}) {
  const certRef = useRef<HTMLDivElement>(null);
  const certId = generateCertId(traveller.name);
  const mission = progress['purpose-learning']?.deliverable?.mission || '';

  const handleDownload = useCallback(() => {
    if (!certRef.current) return;
    toPng(certRef.current, { backgroundColor: '#06060f', pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `artemis-2100-certificate.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(console.error);
  }, []);

  const linkedInText = encodeURIComponent(
    `I just completed Artemis 2100 — an interactive exploration of the future of education. My mission: "${mission}" #Artemis2100 #FutureOfEducation`
  );
  const linkedInUrl = encodeURIComponent('https://artemisui.org');

  return (
    <div className="min-h-screen relative">
      <CosmicBg />
      <div className="max-w-[800px] mx-auto w-full px-5 sm:px-8 py-12">
        {/* Certificate card */}
        <div
          ref={certRef}
          className="bg-[#0a0a14] border border-[#D4A853]/30 p-8 sm:p-12 text-center mb-8"
        >
          {/* Top accent */}
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#8A0000] to-transparent mx-auto mb-8" />

          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4A853]/60 mb-4">
            University of Artemis
          </div>

          <h2 className="text-[32px] sm:text-[40px] font-black text-white tracking-tight mb-2">
            ARTEMIS <span className="text-[#8A0000]">2100</span>
          </h2>

          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8">
            Certificate of Completion
          </div>

          <div className="w-12 h-px bg-white/20 mx-auto mb-6" />

          <p className="text-[13px] text-white/50 mb-2">This certifies that</p>
          <p className="text-[24px] sm:text-[28px] font-bold text-white mb-2">{traveller.name}</p>

          <p className="text-[13px] text-white/50 mb-6">
            has completed all 7 provocations for the future of education
          </p>

          {mission && (
            <div className="bg-[#8A0000]/[0.08] border border-[#8A0000]/20 p-5 mb-6 mx-auto max-w-md">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8A0000]/60 mb-2">Mission</p>
              <p className="text-[14px] text-white/80 italic leading-relaxed">&ldquo;{mission}&rdquo;</p>
            </div>
          )}

          <div className="flex items-center justify-center gap-8 text-[11px] text-white/30 mt-8 mb-4">
            <div>
              <span className="block text-[9px] uppercase tracking-widest mb-1">Date</span>
              <span className="text-white/50">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-widest mb-1">Verification</span>
              <span className="text-white/50 font-mono">{certId}</span>
            </div>
          </div>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#8A0000] to-transparent mx-auto mt-6" />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-[#8A0000] hover:bg-[#6B0000] text-white px-6 py-3 text-[12px] font-bold uppercase tracking-widest transition-all"
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </button>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${linkedInUrl}&summary=${linkedInText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#0077B5] hover:bg-[#006097] text-white px-6 py-3 text-[12px] font-bold uppercase tracking-widest transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Share on LinkedIn
          </a>
        </div>

        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={onBlueprint}
            className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors"
          >
            View Blueprint
          </button>
          <button
            onClick={onPortal}
            className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors"
          >
            Back to Portal
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── BLUEPRINT ─── */
function BlueprintPage({
  traveller,
  progress,
  onPortal,
  onCertificate,
}: {
  traveller: TimeTraveller;
  progress: QuestProgress;
  onPortal: () => void;
  onCertificate: () => void;
}) {
  const completed = countCompleted(progress);
  const allDone = completed === 7;

  return (
    <div className="min-h-screen relative">
      <CosmicBg />
      <div className="max-w-[900px] mx-auto w-full px-5 sm:px-8 py-12">
        <button
          onClick={onPortal}
          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Portal
        </button>

        <h2 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight mb-2">Your Blueprint</h2>
        <p className="text-[14px] text-white/40 mb-8">
          {traveller.name}&apos;s compiled artifacts from the year 2100
        </p>

        {/* Profile */}
        <div className="bg-white/[0.03] border border-white/[0.06] p-6 mb-8">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4A853]/60 mb-3">Time Traveller Profile</div>
          <div className="grid grid-cols-2 gap-4 text-[13px]">
            <div><span className="text-white/40">Name:</span> <span className="text-white">{traveller.name}</span></div>
            <div><span className="text-white/40">Feeling:</span> <span className="text-white">{traveller.feeling}</span></div>
            <div className="col-span-2"><span className="text-white/40">Would change:</span> <span className="text-white">{traveller.change}</span></div>
          </div>
        </div>

        {/* Quest artifacts */}
        <div className="space-y-6">
          {PROVOCATIONS.map((prov) => {
            const q = progress[prov.slug];
            if (!q?.discovered) return null;
            const isComplete = q.discovered && q.created && q.committed;

            return (
              <div key={prov.slug} className="bg-white/[0.03] border border-white/[0.06] p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-[24px]">{prov.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-[16px] font-bold text-white">{prov.title}</h3>
                    <p className="text-[12px] text-white/40">{prov.tagline}</p>
                  </div>
                  {isComplete ? (
                    <CheckCircle2 className="w-5 h-5 text-[#D4A853] shrink-0" />
                  ) : (
                    <Clock className="w-5 h-5 text-white/20 shrink-0" />
                  )}
                </div>

                {/* Deliverables */}
                {q.created && Object.keys(q.deliverable).length > 0 && (
                  <div className="border-t border-white/[0.06] pt-4 mt-3 space-y-3">
                    {prov.questInputs.map((input) => {
                      const val = q.deliverable[input.key];
                      if (!val || input.type === 'timeline') return null;
                      if (input.type === 'multi-select') {
                        const items = val.split(',').filter(Boolean);
                        if (!items.length) return null;
                        return (
                          <div key={input.key}>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-1">{input.label}</span>
                            <div className="flex flex-wrap gap-1.5">
                              {items.map((item: string) => (
                                <span key={item} className="bg-[#8A0000]/15 border border-[#8A0000]/30 text-[#8A0000] text-[11px] px-2 py-0.5">{item}</span>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div key={input.key}>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-1">{input.label}</span>
                          <p className="text-[13px] text-white/60 leading-relaxed">{val}</p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Timeline special render */}
                {q.created && q.deliverable?.timeline && prov.slug === 'open-loop' && (
                  <div className="border-t border-white/[0.06] pt-4 mt-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">Your Learning Timeline</span>
                    <div className="flex gap-1 flex-wrap">
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((year) => {
                        let val = '';
                        try {
                          val = JSON.parse(q.deliverable.timeline)[year] || '';
                        } catch { /* empty */ }
                        return (
                          <div
                            key={year}
                            className={`w-8 h-8 text-[9px] font-bold flex items-center justify-center border ${
                              val === 'learn'
                                ? 'bg-[#8A0000]/30 border-[#8A0000]/60 text-[#8A0000]'
                                : val === 'apply'
                                ? 'bg-[#D4A853]/20 border-[#D4A853]/50 text-[#D4A853]'
                                : 'bg-white/[0.03] border-white/[0.08] text-white/20'
                            }`}
                          >
                            {val === 'learn' ? '▲' : val === 'apply' ? '▼' : year}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Reflection */}
                {q.committed && q.reflection && (
                  <div className="border-t border-white/[0.06] pt-4 mt-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-1">Reflection</span>
                    <p className="text-[13px] text-white/50 italic leading-relaxed">&ldquo;{q.reflection}&rdquo;</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Certificate CTA */}
        {allDone && (
          <div className="mt-10 text-center">
            <button
              onClick={onCertificate}
              className="flex items-center justify-center gap-2 mx-auto bg-[#D4A853] hover:bg-[#c49a48] text-[#06060f] px-8 py-3 text-[13px] font-bold uppercase tracking-widest transition-all"
            >
              <Trophy className="w-4 h-4" />
              Claim Your Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function Artemis2100({ goToPage }: { goToPage: (page: string) => void }) {
  // Load from localStorage on mount (use lazy initializer pattern)
  const [traveller, setTraveller] = useState<TimeTraveller | null>(() => {
    try {
      const saved = localStorage.getItem('artemis2100');
      if (saved) {
        const data = JSON.parse(saved);
        return data.traveller || null;
      }
    } catch { /* empty */ }
    return null;
  });
  const [page, setPage] = useState<MicroSitePage>(() => (typeof window !== 'undefined' && localStorage.getItem('artemis2100') ? 'portal' : 'landing'));
  const [progress, setProgress] = useState<QuestProgress>(() => {
    try {
      const saved = localStorage.getItem('artemis2100');
      if (saved) {
        const data = JSON.parse(saved);
        return data.progress || getEmptyProgress();
      }
    } catch { /* empty */ }
    return getEmptyProgress();
  });
  const [activeQuest, setActiveQuest] = useState<string | null>(null);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('artemis2100', JSON.stringify({ traveller, progress }));
    } catch { /* empty */ }
  }, [traveller, progress]);

  const handleAuth = (t: TimeTraveller) => {
    setTraveller(t);
    setPage('portal');
  };

  const handleUpdateQuest = (slug: string, update: Partial<{ discovered: boolean; created: boolean; committed: boolean; deliverable: Record<string, string>; reflection: string }>) => {
    setProgress((prev) => ({
      ...prev,
      [slug]: { ...prev[slug], ...update },
    }));
  };

  const activeProvocation = activeQuest ? PROVOCATIONS.find((p) => p.slug === activeQuest) : null;

  // Top bar for all inner pages
  const TopBar = (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#06060f]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 h-12 flex items-center justify-between">
        <button
          onClick={() => setPage('portal')}
          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          <span className="text-[14px] font-black tracking-tighter">
            ARTEMIS <span className="text-[#8A0000]">2100</span>
          </span>
        </button>
        <button
          onClick={() => goToPage('home')}
          className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors"
        >
          <Home className="w-3 h-3" />
          Return to Artemis
        </button>
      </div>
    </div>
  );

  if (page === 'landing') {
    return <LandingPage onEnter={() => setPage('auth')} />;
  }

  if (page === 'auth') {
    return (
      <>
        {TopBar}
        <div className="pt-12">
          <AuthPage onSubmit={handleAuth} />
        </div>
      </>
    );
  }

  if (page === 'quest' && activeProvocation) {
    return (
      <>
        {TopBar}
        <div className="pt-12">
          <QuestPage
            provocation={activeProvocation}
            questProgress={progress[activeQuest!]}
            onUpdate={(update) => handleUpdateQuest(activeQuest!, update)}
            onBack={() => setPage('portal')}
          />
        </div>
      </>
    );
  }

  if (page === 'certificate' && traveller) {
    return (
      <>
        {TopBar}
        <div className="pt-12">
          <CertificatePage
            traveller={traveller}
            progress={progress}
            onBlueprint={() => setPage('blueprint')}
            onPortal={() => setPage('portal')}
          />
        </div>
      </>
    );
  }

  if (page === 'blueprint' && traveller) {
    return (
      <>
        {TopBar}
        <div className="pt-12">
          <BlueprintPage
            traveller={traveller}
            progress={progress}
            onPortal={() => setPage('portal')}
            onCertificate={() => setPage('certificate')}
          />
        </div>
      </>
    );
  }

  // PORTAL (default)
  if (traveller) {
    return (
      <>
        {TopBar}
        <div className="pt-12">
          <PortalPage
            traveller={traveller}
            progress={progress}
            onEnterQuest={(slug) => {
              setActiveQuest(slug);
              setPage('quest');
            }}
            onCertificate={() => setPage('certificate')}
            onBlueprint={() => setPage('blueprint')}
          />
        </div>
      </>
    );
  }

  // Fallback
  return <LandingPage onEnter={() => setPage('auth')} />;
}
