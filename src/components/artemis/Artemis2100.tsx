'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { toPng } from 'html-to-image';
import {
  PROVOCATIONS,
  COMPETENCY_HUBS,
  FEELINGS,
  type MicroSitePage,
  type TimeTraveller,
  type QuestProgress,
  type QuestPhase,
  type Provocation,
  type NarrativeSection,
  type ExhibitArticle,
  type QuestInput,
} from './Artemis2100Data';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Circle,
  Clock,
  Download,
  ExternalLink,
  Eye,
  Home,
  Lightbulb,
  Rocket,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

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

/* ─── useInView: intersection observer hook for scroll animations ─── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

/* ─── FadeIn wrapper ─── */
function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   COSMIC BACKGROUND
   ═══════════════════════════════════════════════════════════════════════════ */

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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8A0000]/[0.06] rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4A853]/[0.04] rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-[#8A0000]/[0.03] rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   1. LANDING PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

function LandingPage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center relative">
      <CosmicBg />
      <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A853]/70">
        The University of Artemis presents
      </div>
      <h1 className="text-[52px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-black tracking-tighter text-white leading-none mb-6">
        ARTEMIS <span className="text-[#8A0000]">2100</span>
      </h1>
      <p className="text-[20px] sm:text-[26px] md:text-[30px] font-light text-white/60 mb-10 tracking-wide">
        Design the Future of Education
      </p>
      <div className="max-w-xl mx-auto mb-12">
        <p className="text-[15px] sm:text-[16px] text-white/40 leading-relaxed">
          The year is 2100. The University of Artemis has been operating for 76 years. What you&apos;ll see are the
          pivotal shifts that shaped it — and by extension, shaped the future of education itself. These are
          provocations, not policy. They didn&apos;t all happen. But they all <em className="text-white/70 not-italic font-semibold">could</em> have.
        </p>
      </div>
      <button
        onClick={onEnter}
        className="group flex items-center gap-3 bg-[#8A0000] hover:bg-[#6B0000] text-white px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-[#8A0000]/20"
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

/* ═══════════════════════════════════════════════════════════════════════════
   2. AUTH PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

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
        <div className="text-center mb-10">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A853]/70 mb-3">
            Time Traveller Identification
          </div>
          <h2 className="text-[30px] sm:text-[36px] font-bold text-white tracking-tight">Create Your ID</h2>
          <p className="text-[14px] text-white/40 mt-3">You&apos;re about to enter the year 2100. Who are you?</p>
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
              rows={3}
              className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors placeholder:text-white/20 resize-none"
              placeholder="If you could change one thing..."
            />
          </div>
          <button
            disabled={!canSubmit}
            onClick={() => onSubmit({ name: name.trim(), email: email.trim(), feeling, change: change.trim() })}
            className="w-full bg-[#8A0000] hover:bg-[#6B0000] disabled:bg-white/10 disabled:text-white/30 text-white py-3.5 text-[13px] font-bold uppercase tracking-widest transition-all"
          >
            Create Time Traveller ID
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   3. PORTAL DASHBOARD
   ═══════════════════════════════════════════════════════════════════════════ */

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
      <div className="max-w-[1200px] mx-auto w-full px-5 sm:px-8 py-12 sm:py-16">
        {/* Header */}
        <FadeIn>
          <div className="mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A853]/70 mb-2">Year 2100</div>
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold text-white tracking-tight mb-3">
              Welcome, {traveller.name.split(' ')[0]}
            </h2>
            <p className="text-[15px] text-white/40">You are a Time Traveller. Explore the 7 provocation worlds.</p>
          </div>
        </FadeIn>

        {/* Progress bar */}
        <FadeIn delay={100}>
          <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Progress</span>
              <span className="text-[14px] font-bold text-[#D4A853]">{completed}/7</span>
            </div>
            <div className="w-full h-2 bg-white/[0.06] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#8A0000] to-[#D4A853] transition-all duration-700"
                style={{ width: `${(completed / 7) * 100}%` }}
              />
            </div>
          </div>
        </FadeIn>

        {/* Action buttons */}
        {allDone && (
          <FadeIn delay={150}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onCertificate}
                className="flex items-center justify-center gap-2 bg-[#D4A853] hover:bg-[#c49a48] text-[#06060f] px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all"
              >
                <Trophy className="w-4 h-4" />
                Claim Certificate
              </button>
              <button
                onClick={onBlueprint}
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all"
              >
                <Star className="w-4 h-4" />
                View Blueprint
              </button>
            </div>
          </FadeIn>
        )}

        {!allDone && completed > 0 && (
          <FadeIn delay={150}>
            <div className="mb-10">
              <button
                onClick={onBlueprint}
                className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/60 hover:text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all"
              >
                <Star className="w-3.5 h-3.5" />
                View Blueprint
              </button>
            </div>
          </FadeIn>
        )}

        {/* Provocation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PROVOCATIONS.map((prov, idx) => {
            const q = progress[prov.slug];
            const isComplete = q?.discovered && q?.created && q?.committed;
            const phases = [q?.discovered, q?.created, q?.committed].filter(Boolean).length;

            return (
              <FadeIn key={prov.slug} delay={idx * 80}>
                <button
                  onClick={() => onEnterQuest(prov.slug)}
                  className="group text-left bg-white/[0.03] border border-white/[0.06] hover:border-[#8A0000]/50 p-6 transition-all hover:bg-white/[0.05] w-full h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[32px]">{prov.icon}</span>
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
                  <h3 className="text-[17px] font-bold text-white group-hover:text-[#8A0000] transition-colors mb-1 leading-snug">
                    {prov.title}
                  </h3>
                  <p className="text-[12px] text-[#D4A853]/70 font-medium mb-2">{prov.tagline}</p>
                  <p className="text-[12px] text-white/30 leading-relaxed mb-4">{prov.cardDescription}</p>
                  <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#8A0000]/70 group-hover:text-[#8A0000] transition-colors">
                    {isComplete ? 'Revisit' : phases > 0 ? 'Continue' : 'Enter'}
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   4. PROVOCATION PAGE — THE BIG ONE (Stanford 2025 style)
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─── Section Renderers ─── */

function SectionSetting({ section }: { section: NarrativeSection }) {
  return (
    <FadeIn>
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[800px] mx-auto">
          {section.title && (
            <h2 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight mb-3">{section.title}</h2>
          )}
          {section.subtitle && (
            <p className="text-[18px] sm:text-[20px] text-[#8A0000]/80 italic mb-8">{section.subtitle}</p>
          )}
          {section.body && (
            <div className="text-[15px] sm:text-[16px] text-white/60 leading-[1.85] whitespace-pre-line">
              {section.body}
            </div>
          )}
        </div>
      </section>
    </FadeIn>
  );
}

function SectionNarrative({ section }: { section: NarrativeSection }) {
  return (
    <FadeIn>
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[800px] mx-auto">
          {section.title && (
            <h2 className="text-[26px] sm:text-[32px] font-bold text-white tracking-tight mb-6">{section.title}</h2>
          )}
          {section.body && (
            <div className="text-[15px] sm:text-[16px] text-white/60 leading-[1.85] whitespace-pre-line">
              {section.body}
            </div>
          )}
        </div>
      </section>
    </FadeIn>
  );
}

function SectionSideBySide({ section }: { section: NarrativeSection }) {
  const paragraphs = section.body?.split('\n\n') || [];
  const mid = Math.ceil(paragraphs.length / 2);
  const col1 = paragraphs.slice(0, mid);
  const col2 = paragraphs.slice(mid);

  return (
    <FadeIn>
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          {section.title && (
            <h2 className="text-[26px] sm:text-[32px] font-bold text-white tracking-tight mb-8">{section.title}</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-5">
              {col1.map((p, i) => (
                <p key={i} className="text-[15px] text-white/60 leading-[1.85]">{p}</p>
              ))}
            </div>
            <div className="space-y-5">
              {col2.map((p, i) => (
                <p key={i} className="text-[15px] text-white/60 leading-[1.85]">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

function SectionQuote({ section }: { section: NarrativeSection }) {
  return (
    <FadeIn>
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[800px] mx-auto bg-[#8A0000]/[0.08] border-l-4 border-[#8A0000] p-8 sm:p-12">
          <blockquote className="text-[20px] sm:text-[26px] font-serif text-white/90 leading-[1.6] italic">
            &ldquo;{section.quote}&rdquo;
          </blockquote>
          {section.attribution && (
            <p className="mt-6 text-[12px] font-bold uppercase tracking-widest text-[#D4A853]/70">
              — {section.attribution}
            </p>
          )}
        </div>
      </section>
    </FadeIn>
  );
}

function SectionAchievement({ section }: { section: NarrativeSection }) {
  return (
    <FadeIn>
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[800px] mx-auto">
          {section.title && (
            <h2 className="text-[26px] sm:text-[32px] font-bold text-white tracking-tight mb-8 flex items-center gap-3">
              <Trophy className="w-7 h-7 text-[#D4A853]" />
              <span>{section.title}</span>
            </h2>
          )}
          {section.items && section.items.length > 0 && (
            <ul className="space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#D4A853] shrink-0" />
                  <span className="text-[15px] text-white/70 leading-[1.7]">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </FadeIn>
  );
}

function SectionExhibit({ section }: { section: NarrativeSection }) {
  return (
    <FadeIn>
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[800px] mx-auto border border-[#D4A853]/20 bg-[#D4A853]/[0.03] p-8 sm:p-10">
          {section.title && (
            <h2 className="text-[22px] sm:text-[26px] font-bold text-[#D4A853] tracking-tight mb-2">{section.title}</h2>
          )}
          {section.subtitle && (
            <p className="text-[13px] text-[#D4A853]/50 mb-6">{section.subtitle}</p>
          )}
          {section.body && (
            <div className="text-[14px] text-white/50 leading-[1.85] whitespace-pre-line">
              {section.body}
            </div>
          )}
        </div>
      </section>
    </FadeIn>
  );
}

function SectionImpactStory({ section }: { section: NarrativeSection }) {
  return (
    <FadeIn>
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[800px] mx-auto bg-gradient-to-b from-[#8A0000]/[0.06] to-transparent border border-[#8A0000]/15 p-8 sm:p-10">
          {section.title && (
            <h2 className="text-[24px] sm:text-[30px] font-bold text-white tracking-tight mb-6">{section.title}</h2>
          )}
          {section.body && (
            <div className="text-[15px] text-white/60 leading-[1.85] whitespace-pre-line">
              {section.body}
            </div>
          )}
        </div>
      </section>
    </FadeIn>
  );
}

function SectionInterlude({ section }: { section: NarrativeSection }) {
  return (
    <FadeIn>
      <section className="py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          {section.imageUrl && (
            <div className="relative w-full aspect-[21/9] overflow-hidden mb-4">
              <img
                src={section.imageUrl}
                alt={section.imageCaption || 'Atmospheric image'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060f]/60 to-transparent" />
            </div>
          )}
          {section.imageCaption && (
            <p className="text-[12px] text-white/30 italic text-center">{section.imageCaption}</p>
          )}
        </div>
      </section>
    </FadeIn>
  );
}

function SectionActivity({
  section,
  isDone,
  onMarkDone,
}: {
  section: NarrativeSection;
  isDone: boolean;
  onMarkDone: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const badgeColors: Record<string, string> = {
    try: 'bg-emerald-900/40 border-emerald-600/40 text-emerald-400',
    imagine: 'bg-violet-900/40 border-violet-600/40 text-violet-400',
    act: 'bg-amber-900/40 border-amber-600/40 text-amber-400',
  };

  const badgeIcons: Record<string, React.ReactNode> = {
    try: <Lightbulb className="w-3 h-3" />,
    imagine: <Eye className="w-3 h-3" />,
    act: <Rocket className="w-3 h-3" />,
  };

  const typeLabel = section.activityType?.toUpperCase() || 'ACTIVITY';

  return (
    <FadeIn>
      <section className="py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[800px] mx-auto border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
          {/* Badge + Duration */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${badgeColors[section.activityType || 'try']}`}>
              {badgeIcons[section.activityType || 'try']}
              {typeLabel}
            </span>
            {section.activityDuration && (
              <span className="text-[11px] text-white/30 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {section.activityDuration}
              </span>
            )}
          </div>

          {/* Title */}
          {section.activityTitle && (
            <h3 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight mb-4">
              {section.activityTitle}
            </h3>
          )}

          {/* Prompt */}
          {section.activityPrompt && (
            <p className="text-[15px] text-white/60 leading-[1.8] mb-5">{section.activityPrompt}</p>
          )}

          {/* Steps (for act type) */}
          {section.activitySteps && section.activitySteps.length > 0 && (
            <ol className="space-y-3 mb-5 ml-4">
              {section.activitySteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/[0.1] text-[11px] font-bold text-white/50 flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-[14px] text-white/50 leading-[1.7]">{step}</span>
                </li>
              ))}
            </ol>
          )}

          {/* Round 2 expandable */}
          {section.activityRound2 && (
            <div className="mb-5">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#8A0000]/70 hover:text-[#8A0000] transition-colors"
              >
                {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                Round 2
              </button>
              {expanded && (
                <p className="mt-3 text-[14px] text-white/50 leading-[1.8] pl-5 border-l-2 border-[#8A0000]/20">
                  {section.activityRound2}
                </p>
              )}
            </div>
          )}

          {/* Mark as done */}
          <button
            onClick={onMarkDone}
            disabled={isDone}
            className={`flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all ${
              isDone
                ? 'bg-[#D4A853]/10 text-[#D4A853]/60 cursor-default'
                : 'bg-[#8A0000] hover:bg-[#6B0000] text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            {isDone ? 'Completed' : "I've Done This"}
          </button>
        </div>
      </section>
    </FadeIn>
  );
}

/* ─── Exhibit Article Card ─── */

function ExhibitArticleCard({ article }: { article: ExhibitArticle }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h4 className="text-[16px] font-bold text-white leading-snug mb-1">{article.title}</h4>
          <div className="flex items-center gap-3 text-[11px] text-white/30">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.source}</span>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 text-white/30 hover:text-white/60 transition-colors mt-1"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
      <p className="text-[13px] text-white/40 leading-relaxed">{article.excerpt}</p>
      {expanded && (
        <div className="mt-4 pt-4 border-t border-white/[0.06]">
          <p className="text-[14px] text-white/50 leading-[1.8]">{article.body}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Quest Input Renderer ─── */

function QuestInputField({
  input,
  value,
  onChange,
}: {
  input: QuestInput;
  value: string;
  onChange: (key: string, val: string) => void;
}) {
  // Always call useMemo at the top level to satisfy rules of hooks
  const timelineData = useMemo(() => {
    try { return value ? JSON.parse(value) : {}; } catch { return {}; }
  }, [value]);

  if (input.type === 'timeline') {
    const handleClick = (year: number) => {
      const current: string = timelineData[year] || '';
      const next = current === '' ? 'learn' : current === 'learn' ? 'apply' : '';
      const newData = { ...timelineData, [year]: next };
      onChange(input.key, JSON.stringify(newData));
    };

    return (
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3">{input.label}</label>
        <div className="flex gap-1.5 flex-wrap">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((year) => {
            const val: string = timelineData[year] || '';
            return (
              <button
                key={year}
                onClick={() => handleClick(year)}
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
    const current = value.split(',').filter(Boolean);
    return (
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3">{input.label}</label>
        <div className="flex flex-wrap gap-2">
          {(input.options || []).map((opt) => {
            const selected = current.includes(opt);
            return (
              <button
                key={opt}
                onClick={() => {
                  const next = selected ? current.filter((c) => c !== opt) : [...current, opt];
                  onChange(input.key, next.join(','));
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
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">{input.label}</label>
        <select
          value={value}
          onChange={(e) => onChange(input.key, e.target.value)}
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
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">{input.label}</label>
        <textarea
          value={value}
          onChange={(e) => onChange(input.key, e.target.value)}
          rows={3}
          className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors placeholder:text-white/20 resize-none"
          placeholder={input.placeholder}
        />
      </div>
    );
  }

  // text
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">{input.label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(input.key, e.target.value)}
        className="w-full bg-white/[0.06] border border-white/[0.1] text-white text-[14px] px-4 py-3 focus:outline-none focus:border-[#8A0000] transition-colors placeholder:text-white/20"
        placeholder={input.placeholder}
      />
    </div>
  );
}

/* ─── THE MAIN PROVOCATION PAGE ─── */

function ProvocationPage({
  provocation,
  questProgress,
  onUpdate,
  onBack,
}: {
  provocation: Provocation;
  questProgress: QuestPhase;
  onUpdate: (update: Partial<QuestPhase>) => void;
  onBack: () => void;
}) {
  const [localDeliverable, setLocalDeliverable] = useState<Record<string, string>>(questProgress.deliverable || {});
  const [localReflection, setLocalReflection] = useState(questProgress.reflection || '');
  const [completedActivities, setCompletedActivities] = useState<Set<number>>(new Set());
  const [questSaved, setQuestSaved] = useState(questProgress.created);
  const [questCommitted, setQuestCommitted] = useState(questProgress.committed);

  // Auto-discover when they scroll through
  useEffect(() => {
    if (!questProgress.discovered) {
      const timer = setTimeout(() => {
        onUpdate({ discovered: true });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [questProgress.discovered, onUpdate]);

  const handleActivityDone = (index: number) => {
    setCompletedActivities((prev) => new Set(prev).add(index));
  };

  const handleDeliverableChange = (key: string, val: string) => {
    setLocalDeliverable((prev) => ({ ...prev, [key]: val }));
  };

  const handleSaveQuest = () => {
    onUpdate({ created: true, deliverable: { ...localDeliverable } });
    setQuestSaved(true);
  };

  const handleCommit = () => {
    onUpdate({ committed: true, reflection: localReflection });
    setQuestCommitted(true);
  };

  const isComplete = questProgress.discovered && questProgress.created && questProgress.committed;

  return (
    <div className="min-h-screen relative">
      <CosmicBg />

      {/* ── Back Button (sticky) ── */}
      <div className="sticky top-0 z-30 bg-[#06060f]/80 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto w-full px-5 sm:px-8 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Portal
          </button>
          <div className="flex items-center gap-2 text-[11px] text-white/30">
            <span className="text-[20px]">{provocation.icon}</span>
            <span className="font-bold uppercase tracking-widest">{provocation.title}</span>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden">
        {provocation.heroImage && (
          <>
            <img
              src={provocation.heroImage}
              alt={provocation.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06060f] via-[#06060f]/70 to-[#06060f]/30" />
          </>
        )}
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4A853]/70 mb-4">
            Est. {provocation.yearIntroduced}
          </div>
          <h1 className="text-[36px] sm:text-[52px] md:text-[64px] lg:text-[80px] font-black text-white tracking-tight leading-[0.95] mb-4">
            {provocation.title}
          </h1>
          <p className="text-[16px] sm:text-[20px] text-white/60 max-w-[700px] leading-[1.7]">
            {provocation.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ── NARRATIVE SECTIONS ── */}
      <div className="border-t border-white/[0.04]" />

      {provocation.sections.map((section, idx) => {
        switch (section.type) {
          case 'setting':
            return <SectionSetting key={idx} section={section} />;
          case 'narrative':
            return <SectionNarrative key={idx} section={section} />;
          case 'side-by-side':
            return <SectionSideBySide key={idx} section={section} />;
          case 'quote':
            return <SectionQuote key={idx} section={section} />;
          case 'achievement':
            return <SectionAchievement key={idx} section={section} />;
          case 'exhibit':
            return <SectionExhibit key={idx} section={section} />;
          case 'impact-story':
            return <SectionImpactStory key={idx} section={section} />;
          case 'interlude':
            return <SectionInterlude key={idx} section={section} />;
          case 'activity':
            return (
              <SectionActivity
                key={idx}
                section={section}
                isDone={completedActivities.has(idx)}
                onMarkDone={() => handleActivityDone(idx)}
              />
            );
          default:
            return null;
        }
      })}

      {/* ── EXHIBIT ARTICLE ARCHIVE ── */}
      {provocation.exhibitArticles.length > 0 && (
        <FadeIn>
          <section className="py-16 sm:py-24 px-5 sm:px-8">
            <div className="max-w-[800px] mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-0.5 bg-[#D4A853]/40" />
                <h2 className="text-[22px] sm:text-[28px] font-bold text-[#D4A853] tracking-tight">
                  Exhibit Article Archive
                </h2>
              </div>
              <div className="space-y-4">
                {provocation.exhibitArticles.map((article) => (
                  <ExhibitArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
      )}

      {/* ── KEY QUOTE ── */}
      <FadeIn>
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-[800px] mx-auto text-center">
            <blockquote className="text-[22px] sm:text-[30px] font-serif text-white/80 leading-[1.5] italic">
              &ldquo;{provocation.keyQuote}&rdquo;
            </blockquote>
          </div>
        </section>
      </FadeIn>

      {/* ── COMPLETION BANNER ── */}
      {isComplete && (
        <FadeIn>
          <section className="py-12 px-5 sm:px-8">
            <div className="max-w-[800px] mx-auto bg-[#D4A853]/[0.08] border border-[#D4A853]/20 p-6 sm:p-8 text-center">
              <Trophy className="w-10 h-10 text-[#D4A853] mx-auto mb-4" />
              <h3 className="text-[22px] font-bold text-white mb-2">Provocation Complete</h3>
              <p className="text-[14px] text-white/50">You&apos;ve discovered, created, and committed. Return to the portal to continue your journey.</p>
            </div>
          </section>
        </FadeIn>
      )}

      {/* ── QUEST SECTION ── */}
      <FadeIn>
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-[800px] mx-auto">
            <div className="border-t border-[#8A0000]/20 pt-12">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-[#8A0000]" />
                <h2 className="text-[26px] sm:text-[32px] font-bold text-white tracking-tight">Your Turn</h2>
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#D4A853]/80 mb-2">{provocation.questTitle}</h3>
              <p className="text-[15px] text-white/50 leading-[1.8] mb-10">{provocation.questPrompt}</p>

              {/* Quest Inputs */}
              <div className="space-y-6">
                {provocation.questInputs.map((input) => (
                  <QuestInputField
                    key={input.key}
                    input={input}
                    value={localDeliverable[input.key] || ''}
                    onChange={handleDeliverableChange}
                  />
                ))}
              </div>

              {/* Save Quest */}
              {!questSaved ? (
                <button
                  onClick={handleSaveQuest}
                  className="flex items-center gap-2 bg-[#8A0000] hover:bg-[#6B0000] text-white px-6 py-3 text-[12px] font-bold uppercase tracking-widest transition-all mt-10"
                >
                  Save &amp; Complete Quest
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex items-center gap-2 text-[12px] font-bold text-[#D4A853] mt-10">
                  <CheckCircle2 className="w-4 h-4" />
                  Quest saved
                </div>
              )}

              {/* Reflection (after saving) */}
              {questSaved && !questCommitted && (
                <div className="mt-10 border-t border-white/[0.06] pt-10">
                  <h3 className="text-[18px] font-bold text-white mb-4">Commit &amp; Reflect</h3>
                  {provocation.reflectionQuestions.map((q, i) => (
                    <div key={i} className="mb-5">
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
        </section>
      </FadeIn>

      {/* ── Bottom spacer ── */}
      <div className="h-24" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   5. CERTIFICATE PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

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
  const certId = useMemo(() => generateCertId(traveller.name), [traveller.name]);
  const mission = progress['purpose-learning']?.deliverable?.mission || '';

  const handleDownload = useCallback(() => {
    if (!certRef.current) return;
    toPng(certRef.current, { backgroundColor: '#06060f', pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'artemis-2100-certificate.png';
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
          className="bg-[#0a0a14] border border-[#D4A853]/30 p-8 sm:p-12 text-center"
        >
          {/* Top accent */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4A853] to-transparent mx-auto mb-10" />

          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4A853]/60 mb-4">
            University of Artemis
          </div>

          <h2 className="text-[36px] sm:text-[48px] font-black text-white tracking-tight mb-2 font-serif">
            ARTEMIS <span className="text-[#8A0000]">2100</span>
          </h2>

          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 mb-10">
            Certificate of Completion
          </div>

          <div className="w-16 h-px bg-white/20 mx-auto mb-8" />

          <p className="text-[13px] text-white/50 mb-2">This certifies that</p>
          <p className="text-[26px] sm:text-[32px] font-bold text-white mb-3 font-serif">{traveller.name}</p>

          <p className="text-[13px] text-white/50 mb-8">
            has completed all 7 provocations for the future of education
          </p>

          {mission && (
            <div className="bg-[#8A0000]/[0.08] border border-[#8A0000]/20 p-6 mb-8 mx-auto max-w-md">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8A0000]/60 mb-2">Mission</p>
              <p className="text-[15px] text-white/80 italic leading-relaxed font-serif">&ldquo;{mission}&rdquo;</p>
            </div>
          )}

          <div className="flex items-center justify-center gap-8 sm:gap-12 text-[11px] text-white/30 mt-8 mb-6">
            <div>
              <span className="block text-[9px] uppercase tracking-widest mb-1">Date</span>
              <span className="text-white/50">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-widest mb-1">Verification</span>
              <span className="text-white/50 font-mono text-[10px]">{certId}</span>
            </div>
          </div>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4A853] to-transparent mx-auto mt-6" />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
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

        <div className="flex gap-6 justify-center mt-6">
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

/* ═══════════════════════════════════════════════════════════════════════════
   6. BLUEPRINT PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

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
          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Portal
        </button>

        <FadeIn>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white tracking-tight mb-2">Your Blueprint</h2>
          <p className="text-[14px] text-white/40 mb-10">
            {traveller.name}&apos;s compiled artifacts from the year 2100
          </p>
        </FadeIn>

        {/* Profile */}
        <FadeIn delay={50}>
          <div className="bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8 mb-10">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4A853]/60 mb-4">Time Traveller Profile</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
              <div><span className="text-white/40">Name:</span> <span className="text-white font-medium">{traveller.name}</span></div>
              <div><span className="text-white/40">Feeling:</span> <span className="text-white font-medium">{traveller.feeling}</span></div>
              <div className="sm:col-span-2"><span className="text-white/40">Would change:</span> <span className="text-white font-medium">{traveller.change}</span></div>
            </div>
          </div>
        </FadeIn>

        {/* Quest artifacts */}
        <div className="space-y-6">
          {PROVOCATIONS.map((prov, idx) => {
            const q = progress[prov.slug];
            if (!q?.discovered) return null;
            const isComplete = q.discovered && q.created && q.committed;

            return (
              <FadeIn key={prov.slug} delay={idx * 60}>
                <div className="bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-[28px]">{prov.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[18px] font-bold text-white">{prov.title}</h3>
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
                    <div className="border-t border-white/[0.06] pt-5 mt-4 space-y-4">
                      {prov.questInputs.map((input) => {
                        const val = q.deliverable[input.key];
                        if (!val || input.type === 'timeline') return null;
                        if (input.type === 'multi-select') {
                          const items = val.split(',').filter(Boolean);
                          if (!items.length) return null;
                          return (
                            <div key={input.key}>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">{input.label}</span>
                              <div className="flex flex-wrap gap-1.5">
                                {items.map((item: string) => (
                                  <span key={item} className="bg-[#8A0000]/15 border border-[#8A0000]/30 text-[#8A0000] text-[11px] px-2.5 py-0.5">{item}</span>
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
                    <div className="border-t border-white/[0.06] pt-5 mt-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-3">Your Learning Timeline</span>
                      <div className="flex gap-1.5 flex-wrap">
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
                    <div className="border-t border-white/[0.06] pt-5 mt-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">Reflection</span>
                      <p className="text-[14px] text-white/50 italic leading-relaxed">&ldquo;{q.reflection}&rdquo;</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Certificate CTA */}
        {allDone && (
          <FadeIn>
            <div className="mt-12 text-center">
              <button
                onClick={onCertificate}
                className="flex items-center justify-center gap-2 mx-auto bg-[#D4A853] hover:bg-[#c49a48] text-[#06060f] px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all"
              >
                <Trophy className="w-4 h-4" />
                Claim Your Certificate
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function Artemis2100({ goToPage }: { goToPage: (page: string) => void }) {
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

  const [page, setPage] = useState<MicroSitePage>(() => {
    try {
      const saved = localStorage.getItem('artemis2100');
      if (saved) {
        const data = JSON.parse(saved);
        if (data.traveller) return 'portal';
      }
    } catch { /* empty */ }
    return 'landing';
  });

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

  const [activeProvocation, setActiveProvocation] = useState<string | null>(null);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('artemis2100', JSON.stringify({ traveller, progress }));
    } catch { /* empty */ }
  }, [traveller, progress]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page, activeProvocation]);

  const handleAuth = (t: TimeTraveller) => {
    setTraveller(t);
    setPage('portal');
  };

  const handleUpdateQuest = useCallback(
    (slug: string, update: Partial<QuestPhase>) => {
      setProgress((prev) => ({
        ...prev,
        [slug]: { ...prev[slug], ...update },
      }));
    },
    []
  );

  const activeProvocationData = activeProvocation
    ? PROVOCATIONS.find((p) => p.slug === activeProvocation) || null
    : null;

  /* ─── RENDER ─── */
  if (page === 'landing') {
    return <LandingPage onEnter={() => setPage('auth')} />;
  }

  if (page === 'auth') {
    return <AuthPage onSubmit={handleAuth} />;
  }

  if (!traveller) {
    return <LandingPage onEnter={() => setPage('auth')} />;
  }

  if (page === 'certificate') {
    return (
      <CertificatePage
        traveller={traveller}
        progress={progress}
        onBlueprint={() => setPage('blueprint')}
        onPortal={() => setPage('portal')}
      />
    );
  }

  if (page === 'blueprint') {
    return (
      <BlueprintPage
        traveller={traveller}
        progress={progress}
        onPortal={() => setPage('portal')}
        onCertificate={() => setPage('certificate')}
      />
    );
  }

  if (page === 'provocation' && activeProvocationData) {
    return (
      <ProvocationPage
        provocation={activeProvocationData}
        questProgress={progress[activeProvocation!] || { discovered: false, created: false, committed: false, deliverable: {}, reflection: '' }}
        onUpdate={(update) => handleUpdateQuest(activeProvocation!, update)}
        onBack={() => { setActiveProvocation(null); setPage('portal'); }}
      />
    );
  }

  // Default: Portal
  return (
    <PortalPage
      traveller={traveller}
      progress={progress}
      onEnterQuest={(slug) => { setActiveProvocation(slug); setPage('provocation'); }}
      onCertificate={() => setPage('certificate')}
      onBlueprint={() => setPage('blueprint')}
    />
  );
}
