'use client';

import { useState, useCallback } from 'react';
import { Search, Compass, Zap, BookOpen, MoreHorizontal, Settings, Plus, ChevronDown, Check, ArrowLeft, Home, Hammer, Info, MessageCircle, Sparkles, Rss, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FeedPanel } from './FeedPanel';
import { TutorChat } from './TutorChat';
import HomePage from '../pages/HomePage';
import OpenLoopPage from '../pages/OpenLoopPage';
import PacedEducationPage from '../pages/PacedEducationPage';
import AxisFlipPage from '../pages/AxisFlipPage';
import PurposeLearningPage from '../pages/PurposeLearningPage';
import CentersOfInquiryPage from '../pages/CentersOfInquiryPage';
import DarwinVoyagePage from '../pages/DarwinVoyagePage';
import BuildPage from '../pages/BuildPage';
import AboutPage from '../pages/AboutPage';

interface MainAppProps {
  travelerName?: string;
  onExit: () => void;
}

type ViewSlug = 'feed' | 'home' | 'open-loop-learning' | 'adaptive-paced-learning' | 'global-skills-matrix' | 'purpose-learning' | 'centers-of-inquiry' | 'darwin-voyage' | 'build' | 'about';

const DIMENSIONS = [
  { slug: 'open-loop-learning' as ViewSlug, label: '01 Infinite Learning', icon: Compass, shortLabel: 'Infinite Learning' },
  { slug: 'adaptive-paced-learning' as ViewSlug, label: '02 Adaptive Paced', icon: Zap, shortLabel: 'Adaptive Paced' },
  { slug: 'global-skills-matrix' as ViewSlug, label: '03 SkillPrints', icon: BookOpen, shortLabel: 'SkillPrints' },
  { slug: 'purpose-learning' as ViewSlug, label: '04 Artemis Oath', icon: Compass, shortLabel: 'Artemis Oath' },
  { slug: 'centers-of-inquiry' as ViewSlug, label: '05 Centers of Inquiry', icon: BookOpen, shortLabel: 'Centers of Inquiry' },
  { slug: 'darwin-voyage' as ViewSlug, label: '06 World as Campus', icon: Compass, shortLabel: 'World as Campus' },
];

const SIDEBAR_NAV = [
  { slug: 'feed' as ViewSlug, label: 'Feed', icon: Rss },
  { slug: 'home' as ViewSlug, label: 'Home', icon: Home },
];

const SIDEBAR_BOTTOM = [
  { slug: 'build' as ViewSlug, label: 'Build', icon: Hammer },
  { slug: 'about' as ViewSlug, label: 'About', icon: Info },
];

export function MainApp({ travelerName, onExit }: MainAppProps) {
  const [activeView, setActiveView] = useState<ViewSlug>('feed');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const goTo = useCallback((page: string) => {
    setActiveView(page as ViewSlug);
  }, []);

  const currentDimension = DIMENSIONS.find(d => d.slug === activeView)?.slug;

  const renderContent = () => {
    switch (activeView) {
      case 'feed':
        return <FeedPanel onDimensionClick={goTo} />;
      case 'home':
        return (
          <div className="w-full">
            <HomePage goTo={goTo} />
          </div>
        );
      case 'open-loop-learning':
        return (
          <div className="w-full">
            <OpenLoopPage goTo={goTo} />
          </div>
        );
      case 'adaptive-paced-learning':
        return (
          <div className="w-full">
            <PacedEducationPage goTo={goTo} />
          </div>
        );
      case 'global-skills-matrix':
        return (
          <div className="w-full">
            <AxisFlipPage goTo={goTo} />
          </div>
        );
      case 'purpose-learning':
        return (
          <div className="w-full">
            <PurposeLearningPage goTo={goTo} />
          </div>
        );
      case 'centers-of-inquiry':
        return (
          <div className="w-full">
            <CentersOfInquiryPage goTo={goTo} />
          </div>
        );
      case 'darwin-voyage':
        return (
          <div className="w-full">
            <DarwinVoyagePage goTo={goTo} />
          </div>
        );
      case 'build':
        return (
          <div className="w-full">
            <BuildPage goTo={goTo} />
          </div>
        );
      case 'about':
        return (
          <div className="w-full">
            <AboutPage goTo={goTo} />
          </div>
        );
      default:
        return <FeedPanel onDimensionClick={goTo} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#FAFAFA] font-sans text-black overflow-hidden relative">
      
      {/* ─── Left Sidebar ─── */}
      <aside className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-[#F2F2F2] h-full flex flex-col justify-between py-4 px-2 border-r border-gray-200 transition-all duration-300 shrink-0`}>
        
        <div className="overflow-hidden">
          {/* Workspace Selector */}
          <div className="flex justify-between items-center px-2 mb-4 hover:bg-gray-200/50 p-1.5 rounded-lg cursor-pointer">
            <span className="font-medium text-sm truncate">{sidebarCollapsed ? 'A' : 'Artemis Workshop'}</span>
            {!sidebarCollapsed && (
              <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center">
                <div className="w-2.5 h-3 bg-gray-400 rounded-sm"></div>
              </div>
            )}
          </div>

          {/* Collapse Toggle */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center justify-center py-1 mb-4 text-gray-400 hover:text-gray-600 hover:bg-gray-200/50 rounded-lg transition-colors"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${sidebarCollapsed ? 'rotate-90' : '-rotate-90'}`} />
          </button>

          {/* New Exploration Button */}
          {!sidebarCollapsed && (
            <div className="px-1 mb-4">
              <button 
                onClick={() => goTo('feed')}
                className="w-full bg-white border border-gray-200 shadow-sm rounded-lg py-1.5 px-3 flex items-center text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                New exploration
              </button>
            </div>
          )}

          {/* Main Nav */}
          <nav className="space-y-0.5 px-1 mb-4">
            {SIDEBAR_NAV.map((item) => (
              <button
                key={item.slug}
                onClick={() => goTo(item.slug)}
                className={`flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'px-3'} py-1.5 text-sm rounded-lg w-full text-left transition-colors ${
                  activeView === item.slug ? 'bg-gray-200/80 text-gray-900' : 'hover:bg-gray-200/50 text-gray-700'
                }`}
              >
                <item.icon className={`w-4 h-4 ${sidebarCollapsed ? '' : 'mr-2'} opacity-70 shrink-0`} />
                {!sidebarCollapsed && item.label}
              </button>
            ))}
            <button
              onClick={() => setIsTutorOpen(!isTutorOpen)}
              className={`flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'px-3'} py-1.5 text-sm rounded-lg w-full text-left transition-colors ${
                isTutorOpen ? 'bg-[#8A0000]/10 text-[#8A0000]' : 'hover:bg-gray-200/50 text-gray-700'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${sidebarCollapsed ? '' : 'mr-2'} ${isTutorOpen ? 'text-[#8A0000]' : 'opacity-70'} shrink-0`} />
              {!sidebarCollapsed && 'Tutor'}
            </button>
            <button className={`flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'px-3'} py-1.5 text-sm hover:bg-gray-200/50 rounded-lg text-gray-700 w-full text-left`}>
              <Search className={`w-4 h-4 ${sidebarCollapsed ? '' : 'mr-2'} opacity-70 shrink-0`} />
              {!sidebarCollapsed && 'Search'}
            </button>
          </nav>

          {/* Dimensions Section */}
          {!sidebarCollapsed && (
            <div className="px-1 mb-4">
              <div className="px-3 text-xs font-medium text-gray-500 mb-2">Dimensions</div>
              {DIMENSIONS.map((d) => (
                <button 
                  key={d.slug} 
                  onClick={() => goTo(d.slug)}
                  className={`flex items-center px-3 py-1.5 text-sm rounded-lg w-full text-left transition-colors ${
                    activeView === d.slug ? 'bg-gray-200/80 text-gray-900' : 'hover:bg-gray-200/50 text-gray-700'
                  }`}
                >
                  <d.icon className={`w-4 h-4 mr-2 ${activeView === d.slug ? 'text-[#8A0000]' : 'opacity-70'} shrink-0`} />
                  <span className="truncate">{d.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Collapsed: Show dimension icons only */}
          {sidebarCollapsed && (
            <div className="space-y-0.5 px-1 mb-4">
              {DIMENSIONS.map((d) => (
                <button
                  key={d.slug}
                  onClick={() => goTo(d.slug)}
                  className={`w-full flex items-center justify-center py-1.5 rounded-lg transition-colors ${
                    activeView === d.slug ? 'bg-gray-200/80 text-gray-900' : 'hover:bg-gray-200/50 text-gray-700'
                  }`}
                  title={d.shortLabel}
                >
                  <d.icon className={`w-4 h-4 ${activeView === d.slug ? 'text-[#8A0000]' : 'opacity-70'}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Bottom */}
        <div className="overflow-hidden">
          {/* Upgrade Card */}
          {!sidebarCollapsed && (
            <div className="px-1 mb-4">
              <div className="bg-[#EAEAEA] rounded-xl p-4">
                <div className="w-6 h-6 rounded-full border-2 border-[#8A0000] mb-2"></div>
                <p className="text-sm font-medium mb-1 leading-snug">3 of 6 dimensions explored</p>
                <p className="text-xs text-gray-500 mb-4">Upgrade for full access</p>
                <button 
                  onClick={() => setShowUpgradeModal(true)}
                  className="w-full bg-black text-white text-sm font-medium py-2 rounded-lg hover:bg-black/80 transition-colors">
                  Upgrade
                </button>
              </div>
            </div>
          )}

          {/* Bottom Nav */}
          <div className="px-1 space-y-0.5">
            {SIDEBAR_BOTTOM.map((item) => (
              <button
                key={item.slug}
                onClick={() => goTo(item.slug)}
                className={`flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'px-3'} py-1.5 text-sm rounded-lg w-full text-left transition-colors ${
                  activeView === item.slug ? 'bg-gray-200/80 text-gray-900' : 'hover:bg-gray-200/50 text-gray-700'
                }`}
              >
                <item.icon className={`w-4 h-4 ${sidebarCollapsed ? '' : 'mr-2'} opacity-70 shrink-0`} />
                {!sidebarCollapsed && item.label}
              </button>
            ))}
            <button
              className={`flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'px-2'} py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200/50 rounded-lg w-full transition-colors`}
            >
              <Settings className={`w-4 h-4 ${sidebarCollapsed ? '' : 'mr-2'} opacity-50 shrink-0`} />
              {!sidebarCollapsed && 'Settings'}
            </button>
            <button
              onClick={onExit}
              className={`flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'px-2'} py-1.5 text-sm font-medium text-[#8A0000] hover:bg-[#8A0000]/5 rounded-lg w-full transition-colors`}
            >
              <ArrowLeft className={`w-4 h-4 ${sidebarCollapsed ? '' : 'mr-2'} shrink-0`} />
              {!sidebarCollapsed && 'Exit the Rift'}
            </button>
          </div>
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="flex-1 flex flex-col h-full bg-white relative max-h-screen overflow-y-auto">
        
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-6 py-3 sticky top-0 bg-white/80 backdrop-blur z-10 w-full border-b border-gray-100">
          <div className="flex items-center gap-3">
            <button className="flex items-center text-sm font-medium hover:bg-gray-100 rounded-lg px-2 py-1 transition-colors">
              All <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
            </button>
            {/* Breadcrumb-style view indicator */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-gray-300">/</span>
              <span className="font-medium text-gray-900 capitalize">
                {activeView === 'feed' ? 'Feed' :
                 activeView === 'home' ? 'Home' :
                 activeView === 'build' ? 'Build' :
                 activeView === 'about' ? 'About' :
                 DIMENSIONS.find(d => d.slug === activeView)?.shortLabel || activeView}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsTutorOpen(!isTutorOpen)}
              className={`flex items-center text-sm font-medium ${isTutorOpen ? 'bg-[#8A0000] text-white' : 'bg-gray-100 hover:bg-gray-200'} px-3 py-1.5 rounded-full transition-colors`}
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
              Tutor
            </button>
            <button className="flex items-center text-sm font-medium bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors">
              <span className="w-4 h-4 rounded-full border border-gray-400 mr-2 flex items-center justify-center text-[10px]">+</span>
              Invite
            </button>
            <button className="text-sm font-medium bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors">
              Help
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 w-full">
          {renderContent()}
        </div>
      </main>

      {/* ─── Intelligent Tutor Chat ─── */}
      <TutorChat
        isOpen={isTutorOpen}
        onToggle={() => setIsTutorOpen(!isTutorOpen)}
        currentDimension={currentDimension}
      />

      {/* ─── Upgrade Modal ─── */}
      <AnimatePresence>
        {showUpgradeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/20 backdrop-blur-sm"
               onClick={() => { setShowUpgradeModal(false); setTimeout(() => setShowAnalyticsModal(true), 500); }}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-2 max-h-[90vh] overflow-y-auto"
            >
               <button onClick={() => { setShowUpgradeModal(false); setTimeout(() => setShowAnalyticsModal(true), 500); }} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"><X className="w-4 h-4" /></button>
               
               <div className="py-12 px-8 flex flex-col items-center">
                  <h2 className="text-3xl font-medium mb-6 text-center">Deepen your journey</h2>
                  
                  <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center text-sm font-medium mb-12 shadow-inner">
                    Unlock all dimensions with <span className="font-semibold mx-1">annual exploration</span> 
                    <div className="w-8 h-5 ml-3 bg-[#8A0000] rounded-full p-0.5 flex flex-col justify-center">
                       <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                     <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-xl font-medium mb-4">Explorer</h3>
                        <div className="mb-1"><span className="text-3xl font-medium">Free</span></div>
                        <p className="text-sm text-gray-500 mb-8">3 dimensions included</p>
                        <button className="w-full bg-black text-white hover:bg-black/90 font-medium py-3 rounded-xl mb-8 transition-colors">Current plan</button>
                        <div className="space-y-4">
                           {['3 of 6 dimensions', 'Basic SkillPrints', 'Community access', 'Self-paced exploration'].map((feature, i) => (
                             <div key={i} className="flex items-start">
                                <Check className="w-4 h-4 mr-3 text-gray-400 shrink-0 mt-0.5" />
                                <span className="text-sm font-medium text-gray-700">{feature}</span>
                             </div>
                           ))}
                        </div>
                     </div>

                     <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-[#8A0000]/20 ring-1 ring-[#8A0000]/10">
                        <h3 className="text-xl font-medium mb-4">Architect</h3>
                        <div className="flex items-end mb-1"><span className="text-3xl font-medium">$30/month</span></div>
                        <p className="text-sm text-gray-500 mb-8">Per explorer, billed annually</p>
                        <button className="w-full bg-[#8A0000] text-white hover:bg-[#6B0000] font-medium py-3 rounded-xl mb-8 transition-colors">Select Architect</button>
                        <div className="space-y-4">
                           {['All 6 dimensions', 'Advanced SkillPrints & analytics', 'Priority support', 'Early access to new dimensions', 'Custom learning paths', 'Up to 50 explorers per workspace'].map((feature, i) => (
                             <div key={i} className="flex items-start">
                                <Check className="w-4 h-4 mr-3 text-[#8A0000] shrink-0 mt-0.5" />
                                <span className="text-sm font-medium text-gray-700">{feature}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <p className="text-xs text-center text-gray-400 mt-12 w-full max-w-lg">Your data is stored locally and encrypted. The Artemis Rift respects your privacy across all dimensions.</p>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Analytics Modal ─── */}
      <AnimatePresence>
        {showAnalyticsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/20 backdrop-blur-sm"
               onClick={() => setShowAnalyticsModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-[480px] bg-white rounded-3xl shadow-2xl p-8 pt-10"
            >
               <button onClick={() => setShowAnalyticsModal(false)} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"><X className="w-4 h-4" /></button>
               
               <div className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center mb-6">
                 <div className="text-black font-serif font-bold text-lg">A</div>
               </div>
               
               <h3 className="text-xl font-medium mb-3">Help us improve</h3>
               <p className="text-gray-500 text-[15px] mb-8 leading-relaxed pr-4">
                 Allow your exploration data to be logged anonymously to help us improve the Rift. You can opt-out at any time in Settings. Learn more in our <a href="#" className="font-medium text-black">Privacy Notice</a>.
               </p>

               <div className="flex justify-end space-x-3">
                 <button onClick={() => setShowAnalyticsModal(false)} className="px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors">Don&apos;t share</button>
                 <button onClick={() => setShowAnalyticsModal(false)} className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-black/90 transition-colors">Share analytics</button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
