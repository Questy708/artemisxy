'use client';

import { useState, useEffect } from 'react';
import { Search, Compass, Zap, BookOpen, MoreHorizontal, Folder, Settings, Plus, ChevronDown, Check, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MainAppProps {
  travelerName?: string;
  onExit: () => void;
}

export function MainApp({ travelerName, onExit }: MainAppProps) {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowUpgradeModal(true), 1000);
    return () => clearTimeout(t1);
  }, []);

  const closeUpgrade = () => {
    setShowUpgradeModal(false);
    setTimeout(() => setShowAnalyticsModal(true), 500);
  };

  const closeAnalytics = () => {
    setShowAnalyticsModal(false);
  };

  const dimensions = [
    { num: '01', label: 'Infinite Learning', slug: 'dimension-01' },
    { num: '02', label: 'Adaptive Paced', slug: 'dimension-02' },
    { num: '03', label: 'SkillPrints', slug: 'dimension-03' },
    { num: '04', label: 'The Artemis Oath', slug: 'dimension-04' },
    { num: '05', label: 'Centers of Inquiry', slug: 'dimension-05' },
    { num: '06', label: 'The World as Campus', slug: 'dimension-06' },
  ];

  return (
    <div className="flex h-screen w-full bg-[#FAFAFA] font-sans text-black overflow-hidden relative">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#F2F2F2] h-full flex flex-col justify-between py-4 px-3 border-r border-gray-200">
        
        <div>
          <div className="flex justify-between items-center px-3 mb-6 hover:bg-gray-200/50 p-1.5 rounded-lg cursor-pointer">
            <span className="font-medium text-sm">Artemis</span>
            <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center">
              <div className="w-2.5 h-3 bg-gray-400 rounded-sm"></div>
            </div>
          </div>

          <div className="px-1 mb-6">
            <button className="w-full bg-white border border-gray-200 shadow-sm rounded-lg py-1.5 px-3 flex items-center text-sm font-medium hover:bg-gray-50 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              New exploration
            </button>
          </div>

          <nav className="space-y-0.5 px-1 mb-8">
            <a href="#" className="flex items-center px-3 py-1.5 text-sm hover:bg-gray-200/50 rounded-lg text-gray-700">
               <Compass className="w-4 h-4 mr-2 opacity-70" /> Dimensions
            </a>
            <a href="#" className="flex items-center px-3 py-1.5 text-sm hover:bg-gray-200/50 rounded-lg text-gray-700">
               <Search className="w-4 h-4 mr-2 opacity-70" /> Search
            </a>
            <a href="#" className="flex items-center px-3 py-1.5 text-sm hover:bg-gray-200/50 rounded-lg text-gray-700">
               <Zap className="w-4 h-4 mr-2 opacity-70" /> SkillPrints
            </a>
            <a href="#" className="flex items-center px-3 py-1.5 text-sm hover:bg-gray-200/50 rounded-lg text-gray-700">
               <BookOpen className="w-4 h-4 mr-2 opacity-70" /> Oath
            </a>
            <a href="#" className="flex items-center px-3 py-1.5 text-sm hover:bg-gray-200/50 rounded-lg text-gray-700">
               <MoreHorizontal className="w-4 h-4 mr-2 opacity-70" /> More
            </a>
          </nav>

          <div className="px-1">
            <div className="px-3 text-xs font-medium text-gray-500 mb-2">Folders</div>
            {dimensions.slice(0, 4).map((d) => (
              <a key={d.slug} href="#" className="flex items-center px-3 py-1.5 text-sm hover:bg-gray-200/50 rounded-lg text-gray-700">
                 <Folder className="w-4 h-4 mr-2 opacity-70" /> Dimension {d.num}
              </a>
            ))}
            <a href="#" className="flex items-center px-3 py-1.5 text-sm hover:bg-gray-200/50 rounded-lg text-gray-700">
               <MoreHorizontal className="w-4 h-4 mr-2 opacity-70" /> View all
            </a>
          </div>
        </div>

        <div className="px-2">
           <div className="bg-[#EAEAEA] rounded-xl p-4 mb-4">
              <div className="w-6 h-6 rounded-full border-2 border-[#8A0000] mb-2"></div>
              <p className="text-sm font-medium mb-1 leading-snug">3 of 6 dimensions explored</p>
              <p className="text-xs text-gray-500 mb-4">Upgrade for full access</p>
              <button 
                onClick={() => setShowUpgradeModal(true)}
                className="w-full bg-black text-white text-sm font-medium py-2 rounded-lg hover:bg-black/80 transition-colors">
                Upgrade
              </button>
           </div>
           
           <div className="flex items-center justify-between px-2 py-1.5 hover:bg-gray-200/50 rounded-lg cursor-pointer text-sm font-medium text-gray-700">
              <span className="flex items-center"><Settings className="w-4 h-4 mr-2 opacity-50" /> Settings</span>
              <MoreHorizontal className="w-4 h-4 opacity-50" />
           </div>

           <button
             onClick={onExit}
             className="flex items-center px-2 py-1.5 text-sm font-medium text-[#8A0000] hover:bg-gray-200/50 rounded-lg w-full transition-colors"
           >
             <ArrowLeft className="w-4 h-4 mr-2" /> Exit the Rift
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full bg-white relative max-h-screen overflow-y-auto">
        
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white/80 backdrop-blur z-10 w-full">
          <button className="flex items-center text-sm font-medium hover:bg-gray-100 rounded-lg px-2 py-1 transition-colors">
            All <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
          </button>
          <div className="flex space-x-2">
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
        <div className="flex-1 flex flex-col items-center justify-center pt-10 pb-20 px-8 w-full">
           
           <div className="w-full max-w-2xl mx-auto">
              {/* Input Area */}
              <div className="bg-gray-100 rounded-full flex items-center px-4 py-3 mb-6 shadow-sm border border-gray-200 focus-within:border-gray-400 transition-colors">
                <Compass className="w-5 h-5 text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="What would you like to explore?"
                  className="bg-transparent flex-1 outline-none text-sm font-medium placeholder:text-gray-500"
                />
                <button className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white hover:bg-gray-400 transition-colors">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100 w-full px-2 text-sm text-gray-500 font-medium">
                <div className="flex space-x-6">
                   <button className="flex items-center text-black"><span className="mr-2">&#10024;</span> Create</button>
                   <button className="flex items-center hover:text-black"><span className="mr-2">+</span> Sources</button>
                </div>
                <button className="flex items-center hover:text-black">
                   <Settings className="w-4 h-4 mr-1 opacity-50" /> Default
                </button>
              </div>

              {/* Task List */}
              <div className="space-y-1">
                 
                 <div className="flex items-center px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors group border border-transparent hover:border-gray-100 shadow-sm hover:shadow">
                   <div className="w-6 h-6 rounded bg-[#8A0000]/10 flex items-center justify-center mr-4">
                      <span className="text-[10px] font-bold text-[#8A0000]">01</span>
                   </div>
                   <div className="text-sm font-medium text-gray-600">Explore the <span className="text-black">Infinite Learning Continuum</span></div>
                 </div>

                 <div className="flex items-center px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100 shadow-sm hover:shadow">
                   <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-[10px] font-bold">02</span>
                   </div>
                   <div className="text-sm font-medium text-gray-600">Discover <span className="text-black">Adaptive Paced Learning</span></div>
                 </div>

                 <div className="flex items-center px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100 shadow-sm hover:shadow">
                   <div className="w-6 h-6 rounded bg-[#8A0000]/10 flex items-center justify-center mr-4">
                      <span className="text-[10px] font-bold text-[#8A0000]">03</span>
                   </div>
                   <div className="text-sm font-medium text-gray-600">Map your <span className="text-black">SkillPrints</span> across dimensions</div>
                 </div>

                 <div className="flex items-center px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100 shadow-sm hover:shadow">
                   <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center mr-4">
                      <span className="text-[10px]">04</span>
                   </div>
                   <div className="text-sm font-medium text-gray-600">Take the <span className="text-black">Artemis Oath</span></div>
                 </div>

                 <div className="flex items-center px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100 shadow-sm hover:shadow">
                   <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-[10px] font-bold">05</span>
                   </div>
                   <div className="text-sm font-medium text-gray-600">Visit the <span className="text-black">Centers of Inquiry</span></div>
                 </div>

                 <div className="flex items-center px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100 shadow-sm hover:shadow">
                   <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center mr-4">
                      <span className="text-[10px]">06</span>
                   </div>
                   <div className="text-sm font-medium text-gray-600">Experience <span className="text-black">The World as Campus</span></div>
                 </div>

                 <div className="flex items-center px-4 py-3 mt-4 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                   <span className="text-gray-400 mr-4">...</span>
                   <div className="text-sm font-medium text-gray-500">Explore all six dimensions &rarr;</div>
                 </div>

              </div>

           </div>
           
        </div>
      </main>

      {/* Upgrade Modal Overlay */}
      <AnimatePresence>
        {showUpgradeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/20 backdrop-blur-sm"
               onClick={closeUpgrade}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-2 max-h-[90vh] overflow-y-auto"
            >
               <button onClick={closeUpgrade} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"></path></svg></button>
               
               <div className="py-12 px-8 flex flex-col items-center">
                  <h2 className="text-3xl font-medium mb-6 text-center">Deepen your journey</h2>
                  
                  <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center text-sm font-medium mb-12 shadow-inner">
                    Unlock all dimensions with <span className="font-semibold mx-1">annual exploration</span> 
                    <div className="w-8 h-5 ml-3 bg-[#8A0000] rounded-full p-0.5 flex flex-col justify-center">
                       <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                     {/* Explorer (Free) Card */}
                     <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-xl font-medium mb-4">Explorer</h3>
                        <div className="mb-1">
                           <span className="text-3xl font-medium">Free</span>
                        </div>
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

                     {/* Architect (Team) Card */}
                     <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-[#8A0000]/20 ring-1 ring-[#8A0000]/10">
                        <h3 className="text-xl font-medium mb-4">Architect</h3>
                        <div className="flex items-end mb-1">
                           <span className="text-3xl font-medium">$30/month</span>
                        </div>
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

                     {/* Guardian (Enterprise) Card */}
                     <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-xl font-medium mb-4">Guardian</h3>
                        <div className="mb-1">
                           <span className="text-3xl font-medium">Custom</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-8">Contact the Collegium</p>
                        <button className="w-full bg-black text-white hover:bg-black/90 font-medium py-3 rounded-xl mb-8 transition-colors">Schedule a meeting</button>
                        
                        <div className="space-y-4">
                           {['Everything in Architect', 'Institutional deployment', 'SAML-based SSO & SCIM', 'Dedicated success team', 'Analytics dashboard', 'Custom integrations & API access'].map((feature, i) => (
                             <div key={i} className="flex items-start">
                                <Check className="w-4 h-4 mr-3 text-gray-400 shrink-0 mt-0.5" />
                                <span className="text-sm font-medium text-gray-700">{feature}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <p className="text-xs text-center text-gray-400 mt-8 mt-12 w-full max-w-lg">Your data is stored locally and encrypted. The Artemis Rift respects your privacy across all dimensions.</p>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Analytics Modal Overlay (Help us improve) */}
      <AnimatePresence>
        {showAnalyticsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/20 backdrop-blur-sm"
               onClick={closeAnalytics}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-[480px] bg-white rounded-3xl shadow-2xl p-8 pt-10"
            >
               <button onClick={closeAnalytics} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"></path></svg></button>
               
               <div className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center mb-6">
                 <div className="text-black font-serif font-bold text-lg">A</div>
               </div>
               
               <h3 className="text-xl font-medium mb-3">Help us improve</h3>
               <p className="text-gray-500 text-[15px] mb-8 leading-relaxed pr-4">
                 Allow your exploration data to be logged anonymously to help us improve the Rift. You can opt-out at any time in Settings. Learn more in our <a href="#" className="font-medium text-black">Privacy Notice</a>.
               </p>

               <div className="flex justify-end space-x-3">
                 <button onClick={closeAnalytics} className="px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors">Don&apos;t share</button>
                 <button onClick={closeAnalytics} className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-black/90 transition-colors">Share analytics</button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
