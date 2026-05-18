'use client';

import { useState } from 'react';
import {
  Home,
  LayoutGrid,
  Award,
  Wrench,
  Info,
  ChevronDown,
  ChevronRight,
  Search,
  ArrowLeft,
  Infinity,
  Gauge,
  Fingerprint,
  ScrollText,
  FlaskConical,
  Globe2,
  Sparkles,
} from 'lucide-react';
import { cn } from '../Shared';
import OpenLoopPage from '../pages/OpenLoopPage';
import PacedEducationPage from '../pages/PacedEducationPage';
import GlobalSkillsMatrixPage from '../pages/AxisFlipPage';
import PurposeLearningPage from '../pages/PurposeLearningPage';
import CentersOfInquiryPage from '../pages/CentersOfInquiryPage';
import DarwinVoyagePage from '../pages/DarwinVoyagePage';
import BuildPage from '../pages/BuildPage';
import AboutPage from '../pages/AboutPage';

type DashboardPage = 'home' | 'open-loop-learning' | 'adaptive-paced-learning' | 'global-skills-matrix' | 'purpose-learning' | 'centers-of-inquiry' | 'darwin-voyage' | 'badges' | 'build' | 'about';

interface DashboardProps {
  selectedArchetype: string | null;
  exploredDimensions: string[];
  onExit: () => void;
  onMarkExplored: (dimId: string) => void;
}

const dimensionNavItems = [
  { slug: 'open-loop-learning' as const, label: 'Infinite Learning Continuum', num: '01', icon: Infinity },
  { slug: 'adaptive-paced-learning' as const, label: 'Adaptive Paced Learning', num: '02', icon: Gauge },
  { slug: 'global-skills-matrix' as const, label: 'SkillPrints', num: '03', icon: Fingerprint },
  { slug: 'purpose-learning' as const, label: 'The Artemis Oath', num: '04', icon: ScrollText },
  { slug: 'centers-of-inquiry' as const, label: 'Centers of Inquiry', num: '05', icon: FlaskConical },
  { slug: 'darwin-voyage' as const, label: 'The World as Campus', num: '06', icon: Globe2 },
];

const archetypeLabels: Record<string, string> = {
  explorer: 'Explorer',
  architect: 'Architect',
  guardian: 'Guardian',
  voyager: 'Voyager',
};

const archetypeIcons: Record<string, typeof Home> = {
  explorer: Infinity,
  architect: LayoutGrid,
  guardian: Award,
  voyager: Globe2,
};

export default function Dashboard({ selectedArchetype, exploredDimensions, onExit, onMarkExplored }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState<DashboardPage>('home');
  const [isDimensionsOpen, setIsDimensionsOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const exploredCount = exploredDimensions.length;
  const totalDimensions = 6;
  const progressPct = Math.round((exploredCount / totalDimensions) * 100);

  const goTo = (page: DashboardPage) => {
    setCurrentPage(page);
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dimensionSlugs = dimensionNavItems.map(d => d.slug);
  const isDimensionPage = dimensionSlugs.includes(currentPage as any);

  // Auto-expand dimensions section when on a dimension page
  if (isDimensionPage && !isDimensionsOpen) {
    setIsDimensionsOpen(true);
  }

  const renderMainContent = () => {
    switch (currentPage) {
      case 'home':
        return <DashboardHome archetype={selectedArchetype} exploredDimensions={exploredDimensions} onNavigate={goTo} onMarkExplored={onMarkExplored} />;
      case 'open-loop-learning':
        return <OpenLoopPage goTo={(p) => goTo(p as DashboardPage)} />;
      case 'adaptive-paced-learning':
        return <PacedEducationPage goTo={(p) => goTo(p as DashboardPage)} />;
      case 'global-skills-matrix':
        return <GlobalSkillsMatrixPage goTo={(p) => goTo(p as DashboardPage)} />;
      case 'purpose-learning':
        return <PurposeLearningPage goTo={(p) => goTo(p as DashboardPage)} />;
      case 'centers-of-inquiry':
        return <CentersOfInquiryPage goTo={(p) => goTo(p as DashboardPage)} />;
      case 'darwin-voyage':
        return <DarwinVoyagePage goTo={(p) => goTo(p as DashboardPage)} />;
      case 'badges':
        return <BadgesPage exploredDimensions={exploredDimensions} />;
      case 'build':
        return <BuildPage goTo={(p) => goTo(p as DashboardPage)} />;
      case 'about':
        return <AboutPage goTo={(p) => goTo(p as DashboardPage)} />;
      default:
        return <DashboardHome archetype={selectedArchetype} exploredDimensions={exploredDimensions} onNavigate={goTo} onMarkExplored={onMarkExplored} />;
    }
  };

  const ArchetypeIcon = selectedArchetype ? (archetypeIcons[selectedArchetype] || Home) : Home;

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar — Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#0a0a0a] text-white shrink-0 min-h-screen">
        <SidebarContent
          currentPage={currentPage}
          isDimensionsOpen={isDimensionsOpen}
          setIsDimensionsOpen={setIsDimensionsOpen}
          goTo={goTo}
          onExit={onExit}
          exploredCount={exploredCount}
          totalDimensions={totalDimensions}
          progressPct={progressPct}
        />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-[#0a0a0a] text-white flex flex-col overflow-y-auto">
            <SidebarContent
              currentPage={currentPage}
              isDimensionsOpen={isDimensionsOpen}
              setIsDimensionsOpen={setIsDimensionsOpen}
              goTo={goTo}
              onExit={onExit}
              exploredCount={exploredCount}
              totalDimensions={totalDimensions}
              progressPct={progressPct}
            />
          </aside>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 border-b border-gray-100 flex items-center gap-4 px-6 shrink-0">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <LayoutGrid className="w-5 h-5" />
          </button>

          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input
                type="text"
                placeholder="What would you like to explore?"
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:border-[#8A0000]/40 transition-colors"
              />
            </div>
          </div>

          <div className="flex-1" />

          {/* Archetype badge */}
          {selectedArchetype && (
            <div className="hidden sm:flex items-center gap-2 bg-[#8A0000]/5 border border-[#8A0000]/20 px-3 py-1.5">
              <ArchetypeIcon className="w-3.5 h-3.5 text-[#8A0000]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A0000]">
                {archetypeLabels[selectedArchetype] || selectedArchetype}
              </span>
            </div>
          )}

          {/* Avatar */}
          <div className="w-8 h-8 bg-[#0a0a0a] flex items-center justify-center text-white text-xs font-bold italic">
            {selectedArchetype ? selectedArchetype.charAt(0).toUpperCase() : 'A'}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
}

/* ─── Sidebar Content (shared between mobile and desktop) ─── */
function SidebarContent({
  currentPage,
  isDimensionsOpen,
  setIsDimensionsOpen,
  goTo,
  onExit,
  exploredCount,
  totalDimensions,
  progressPct,
}: {
  currentPage: DashboardPage;
  isDimensionsOpen: boolean;
  setIsDimensionsOpen: (open: boolean) => void;
  goTo: (page: DashboardPage) => void;
  onExit: () => void;
  exploredCount: number;
  totalDimensions: number;
  progressPct: number;
}) {
  const dimensionSlugs = dimensionNavItems.map(d => d.slug);
  const isDimensionPage = dimensionSlugs.includes(currentPage as any);

  return (
    <>
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border-2 border-white/30 flex items-center justify-center text-[10px] font-bold italic text-white/60">
            A
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
            Artemis
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <NavButton
          icon={Home}
          label="Home"
          isActive={currentPage === 'home'}
          onClick={() => goTo('home')}
        />

        {/* Dimensions — expandable */}
        <div>
          <button
            onClick={() => setIsDimensionsOpen(!isDimensionsOpen)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded transition-colors cursor-pointer",
              isDimensionPage ? "text-white bg-white/10" : "text-white/50 hover:text-white/80 hover:bg-white/5"
            )}
          >
            <LayoutGrid className="w-4 h-4 shrink-0" />
            <span className="flex-1 text-left">Dimensions</span>
            {isDimensionsOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>

          {isDimensionsOpen && (
            <div className="ml-4 mt-1 space-y-0.5 border-l border-white/10 pl-3">
              {dimensionNavItems.map((dim) => {
                const DimIcon = dim.icon;
                return (
                  <button
                    key={dim.slug}
                    onClick={() => goTo(dim.slug)}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-3 py-2 text-[11px] rounded transition-colors cursor-pointer",
                      currentPage === dim.slug ? "text-white bg-white/10" : "text-white/40 hover:text-white/70 hover:bg-white/5"
                    )}
                  >
                    <DimIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="flex-1 text-left truncate">{dim.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <NavButton
          icon={Award}
          label="Badges"
          isActive={currentPage === 'badges'}
          onClick={() => goTo('badges')}
        />

        <NavButton
          icon={Wrench}
          label="Build"
          isActive={currentPage === 'build'}
          onClick={() => goTo('build')}
        />

        <NavButton
          icon={Info}
          label="About"
          isActive={currentPage === 'about'}
          onClick={() => goTo('about')}
        />
      </nav>

      {/* Bottom section */}
      <div className="px-6 py-5 border-t border-white/10 space-y-4">
        {/* Progress */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] text-white/40 uppercase tracking-wider">{exploredCount} of {totalDimensions} dimensions explored</span>
            <span className="text-[10px] font-mono text-white/30">{progressPct}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#8A0000] rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Upgrade link */}
        <button
          className="w-full py-2.5 border border-[#8A0000]/30 text-[#8A0000] text-[10px] font-bold uppercase tracking-wider hover:bg-[#8A0000]/10 transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <Sparkles className="w-3 h-3" />
          Upgrade your journey
        </button>

        {/* Exit */}
        <button
          onClick={onExit}
          className="flex items-center gap-2 text-[10px] text-white/30 hover:text-white/60 transition-colors cursor-pointer uppercase tracking-wider"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Artemis
        </button>
      </div>
    </>
  );
}

/* ─── Nav Button ─── */
function NavButton({ icon: Icon, label, isActive, onClick }: { icon: typeof Home; label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded transition-colors cursor-pointer",
        isActive ? "text-white bg-white/10" : "text-white/50 hover:text-white/80 hover:bg-white/5"
      )}
    >
      <Icon className="w-4 h-4 shrink-0" />
      <span className="text-left">{label}</span>
    </button>
  );
}

/* ─── Dashboard Home View ─── */
function DashboardHome({
  archetype,
  exploredDimensions,
  onNavigate,
  onMarkExplored,
}: {
  archetype: string | null;
  exploredDimensions: string[];
  onNavigate: (page: DashboardPage) => void;
  onMarkExplored: (dimId: string) => void;
}) {
  const archetypeLabels: Record<string, string> = {
    explorer: 'Explorer',
    architect: 'Architect',
    guardian: 'Guardian',
    voyager: 'Voyager',
  };

  const dimCards = [
    { slug: 'open-loop-learning' as const, name: 'Infinite Learning Continuum', short: 'Learning never stops. The continuum replaces degrees with an unbroken thread of growth.', icon: Infinity },
    { slug: 'adaptive-paced-learning' as const, name: 'Adaptive Paced Learning', short: 'Calibrate. Elevate. Activate. Three stages replace the four-year model.', icon: Gauge },
    { slug: 'global-skills-matrix' as const, name: 'SkillPrints', short: 'The transcript dissolves. What remains is a living portrait of capability.', icon: Fingerprint },
    { slug: 'purpose-learning' as const, name: 'The Artemis Oath', short: 'Every learner pledges to pursue something that matters.', icon: ScrollText },
    { slug: 'centers-of-inquiry' as const, name: 'Centers of Inquiry', short: 'Departments dissolve. Interdisciplinary hubs take their place.', icon: FlaskConical },
    { slug: 'darwin-voyage' as const, name: 'The World as Campus', short: 'The campus is everywhere. A voyage rotation carries learners across continents.', icon: Globe2 },
  ];

  const exploredCount = exploredDimensions.length;
  const progressPct = Math.round((exploredCount / 6) * 100);

  const recentActivity = [
    { text: 'Explored the Infinite Learning Continuum', time: '2 hours ago', slug: 'open-loop-learning' },
    { text: 'Took the Artemis Oath', time: '1 day ago', slug: 'purpose-learning' },
    { text: 'Visited Centers of Inquiry', time: '3 days ago', slug: 'centers-of-inquiry' },
  ].filter(a => exploredDimensions.includes(a.slug));

  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-[1400px] mx-auto">
      {/* Welcome message */}
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Welcome back{archetype ? `, ${archetypeLabels[archetype] || archetype}` : ''}
        </h1>
        <p className="text-sm text-gray-500">Continue your exploration of the six dimensions.</p>
      </div>

      {/* Dimension cards — 3x2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {dimCards.map((dim) => {
          const DimIcon = dim.icon;
          const isExplored = exploredDimensions.includes(dim.slug);
          return (
            <div
              key={dim.slug}
              className="bg-[#0a0a0a] text-white p-6 flex flex-col gap-4 group hover:bg-[#111] transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                  <DimIcon className="w-5 h-5 text-white/60" />
                </div>
                {isExplored && (
                  <span className="text-[9px] font-mono text-[#8A0000] uppercase tracking-wider bg-[#8A0000]/10 px-2 py-1">
                    Explored
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-bold text-base mb-2">{dim.name}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{dim.short}</p>
              </div>
              <div className="mt-auto flex items-center gap-3">
                <button
                  onClick={() => onNavigate(dim.slug)}
                  className="text-[10px] font-bold uppercase tracking-wider text-[#8A0000] hover:text-[#A50000] transition-colors cursor-pointer"
                >
                  Explore &rarr;
                </button>
                {!isExplored && (
                  <button
                    onClick={() => onMarkExplored(dim.slug)}
                    className="text-[10px] text-white/20 hover:text-white/50 transition-colors cursor-pointer"
                  >
                    Mark explored
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Your Progress */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-gray-100 p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Your Progress</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Dimensions explored</span>
              <span className="font-mono">{exploredCount}/6</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8A0000] rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="text-center p-3 bg-gray-50">
                <div className="text-lg font-bold text-gray-900">{exploredCount}</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider">Explored</div>
              </div>
              <div className="text-center p-3 bg-gray-50">
                <div className="text-lg font-bold text-gray-900">{6 - exploredCount}</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider">Remaining</div>
              </div>
              <div className="text-center p-3 bg-gray-50">
                <div className="text-lg font-bold text-gray-900">{progressPct}%</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider">Complete</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border border-gray-100 p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Recent Activity</h3>
          {recentActivity.length > 0 ? (
            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A0000] mt-1.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-700 truncate">{activity.text}</p>
                    <p className="text-[10px] text-gray-400 font-mono mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-400 italic">No activity yet. Start exploring dimensions!</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Badges Page ─── */
function BadgesPage({ exploredDimensions }: { exploredDimensions: string[] }) {
  const allBadges = [
    { id: 'rift-explorer', name: 'Rift Explorer', icon: '◈', desc: 'Visited all 6 dimensions', earned: exploredDimensions.length >= 6 },
    { id: 'continuum-walker', name: 'Continuum Walker', icon: '∞', desc: 'Explored the Infinite Learning Continuum', earned: exploredDimensions.includes('open-loop-learning') },
    { id: 'pace-setter', name: 'Pace Setter', icon: '⊿', desc: 'Explored Adaptive Paced Learning', earned: exploredDimensions.includes('adaptive-paced-learning') },
    { id: 'skill-reader', name: 'Skill Reader', icon: '◉', desc: 'Explored SkillPrints', earned: exploredDimensions.includes('global-skills-matrix') },
    { id: 'oath-taker', name: 'Oath Taker', icon: '⸙', desc: 'Explored the Artemis Oath', earned: exploredDimensions.includes('purpose-learning') },
    { id: 'field-correspondent', name: 'Field Correspondent', icon: '✉', desc: 'Explored Centers of Inquiry', earned: exploredDimensions.includes('centers-of-inquiry') },
    { id: 'voyage-witness', name: 'Voyage Witness', icon: '✦', desc: 'Explored The World as Campus', earned: exploredDimensions.includes('darwin-voyage') },
    { id: 'first-step', name: 'First Step', icon: '▸', desc: 'Explored your first dimension', earned: exploredDimensions.length >= 1 },
  ];

  const earnedCount = allBadges.filter(b => b.earned).length;

  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-[1400px] mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Badges</h1>
      <p className="text-sm text-gray-500 mb-8">{earnedCount} of {allBadges.length} badges earned</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {allBadges.map((badge) => (
          <div
            key={badge.id}
            className={cn(
              "border-2 p-6 text-center transition-all",
              badge.earned
                ? "border-[#8A0000] bg-[#8A0000]/5"
                : "border-gray-200 bg-white opacity-50"
            )}
          >
            <div className={cn("text-3xl mb-3", badge.earned ? "text-[#8A0000]" : "text-gray-300")}>
              {badge.icon}
            </div>
            <h3 className={cn("text-xs font-bold uppercase tracking-wider", badge.earned ? "text-gray-900" : "text-gray-400")}>
              {badge.name}
            </h3>
            <p className="text-[10px] text-gray-400 mt-1">{badge.desc}</p>
            <div className={cn("mt-3 text-[9px] font-mono uppercase tracking-widest", badge.earned ? "text-[#8A0000]" : "text-gray-300")}>
              {badge.earned ? '✓ EARNED' : 'LOCKED'}
            </div>
          </div>
        ))}
      </div>

      {/* Certificates section */}
      <div className="mt-16">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Certificates</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: 'Rift Navigator', condition: 'Visit all 6 dimensions', qualified: exploredDimensions.length >= 6 },
            { title: 'Future Architect', condition: 'Earn 4+ badges', qualified: earnedCount >= 4 },
            { title: 'Continuum Guardian', condition: 'Earn all 8 badges', qualified: earnedCount >= 8 },
          ].map(cert => (
            <div key={cert.title} className={cn("border-2 p-5", cert.qualified ? "border-[#8A0000] bg-[#8A0000]/5" : "border-gray-200 opacity-50")}>
              <div className="flex items-center gap-3 mb-3">
                <div className={cn("w-8 h-8 flex items-center justify-center text-sm", cert.qualified ? "bg-[#8A0000] text-white" : "bg-gray-200 text-gray-400")}>
                  {cert.qualified ? '★' : '?'}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{cert.title}</h4>
                  <p className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">{cert.condition}</p>
                </div>
              </div>
              <div className={cn("text-[10px] font-mono uppercase tracking-wider text-center py-2", cert.qualified ? "text-[#8A0000]" : "text-gray-300")}>
                {cert.qualified ? '✓ QUALIFIED' : 'LOCKED'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
