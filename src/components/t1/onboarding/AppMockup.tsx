'use client';

import { Maximize2, Minimize2, X } from 'lucide-react';

export function AppMockup() {
  return (
    <div className="w-full h-full bg-[#1A1A1A] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 flex flex-col pt-4 pl-4 pr-0 pb-0 relative">
      {/* Fake macOS toolbar */}
      <div className="flex items-center space-x-2 px-4 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56] flex items-center justify-center">
            <X className="w-2 h-2 text-black/50 opacity-0 hover:opacity-100" />
        </div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] flex items-center justify-center">
            <Minimize2 className="w-2 h-2 text-black/50 opacity-0 hover:opacity-100" />
        </div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F] flex items-center justify-center">
            <Maximize2 className="w-2 h-2 text-black/50 opacity-0 hover:opacity-100" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden h-full">
        {/* Fake sidebar */}
        <div className="w-64 border-r border-white/10 flex flex-col py-4 px-3 flex-shrink-0">
          <div className="flex items-center space-x-2 mb-8 px-2">
            <div className="w-6 h-6 rounded bg-[#8A0000] flex items-center justify-center font-serif font-bold text-white text-xs">A</div>
            <span className="text-white font-medium">Artemis</span>
          </div>

          <div className="space-y-1 text-sm text-gray-400">
            <div className="px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer flex items-center justify-between">
              <span>Chat</span>
              <span className="text-gray-500 text-xs">&#8984;</span>
            </div>
            <div className="px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer flex items-center justify-between">
                <span>Search</span>
                 <span className="text-gray-500 text-xs">&#8984;K</span>
            </div>
            <div className="px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer">Assistants</div>
            <div className="px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer">Tasks</div>
            <div className="px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer mt-4">Integrations</div>
            <div className="px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer">Collections</div>
            <div className="px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer">Your content</div>
          </div>
        </div>

        {/* Fake main content */}
        <div className="flex-1 p-8 bg-[#121212] rounded-tl-2xl border-t border-l border-white/10 overflow-hidden relative">
           
           {/* Top nav */}
           <div className="flex space-x-6 text-sm mb-12">
            <span className="text-white font-medium">For you</span>
            <span className="text-gray-500">Learning Agent</span>
            <span className="text-gray-500">Skills Intern</span>
            <span className="text-gray-500">Dimension 01</span>
            <span className="text-gray-500">Browse agents</span>
           </div>

           {/* Grid layout */}
           <div className="grid grid-cols-2 gap-6 max-w-4xl">
              <div className="bg-[#8A0000] rounded-3xl p-6 text-white flex flex-col justify-between h-56 shadow-lg shadow-[#8A0000]/10 relative overflow-hidden">
                <div>
                   <div className="text-sm font-medium mb-2 opacity-80 flex items-center"><span className="w-2 h-2 rounded-full bg-white mr-2"></span> Suggested task</div>
                   <h3 className="text-2xl font-medium leading-tight">Map your skills<br/>across six<br/>dimensions</h3>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden mr-3">
                     <img src="https://i.pravatar.cc/100?img=1" alt="avatar" />
                  </div>
                  <div className="text-xs font-medium">Explorer x Mentor: Skills sync<br/><span className="opacity-60">From 9:00am</span></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-[#1F1F1F] rounded-2xl p-4 text-white">
                  <div className="text-xs text-[#8A0000] font-medium mb-1 flex items-center"><span className="w-2 h-2 rounded-full bg-[#8A0000] mr-2"></span> Recent journey</div>
                  <h4 className="text-lg font-medium mb-2">Explore the Infinite Learning Continuum</h4>
                  <div className="flex -space-x-2">
                     <img src="https://i.pravatar.cc/100?img=1" className="w-6 h-6 rounded-full border-2 border-[#1F1F1F]" />
                     <img src="https://i.pravatar.cc/100?img=2" className="w-6 h-6 rounded-full border-2 border-[#1F1F1F]" />
                     <img src="https://i.pravatar.cc/100?img=3" className="w-6 h-6 rounded-full border-2 border-[#1F1F1F]" />
                     <span className="text-xs text-gray-500 ml-4 pl-3 flex items-center">5 explorers</span>
                  </div>
                </div>
                <div className="bg-[#1F1F1F] rounded-2xl p-4 text-white">
                   <div className="text-xs text-[#8A0000] font-medium mb-1">&#9632; Recently updated</div>
                   <h4 className="text-lg font-medium mb-2">Help me finalize these learning guidelines for my team</h4>
                </div>
              </div>

           </div>
           
           {/* Chat input mockup */}
           <div className="absolute bottom-8 left-8 right-8 bg-[#2A2A2A] rounded-2xl p-3 px-4 flex items-center justify-between border border-white/5">
              <span className="text-gray-400">Ask Learning Agent anything</span>
              <div className="w-8 h-8 bg-[#8A0000] rounded-full flex items-center justify-center">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
           </div>
        </div>
      </div>
      
      {/* Keyboard mockup overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none flex items-end justify-center pb-2">
         <div className="flex space-x-1 opacity-20 hidden md:flex">
             {Array.from({length: 12}).map((_, i) => (
                <div key={i} className="w-12 h-10 bg-white/20 rounded shadow-[0_2px_0_rgba(255,255,255,0.1)] mb-[-10px] transform skew-x-12 rotate-[-5deg]"></div>
             ))}
         </div>
      </div>
    </div>
  );
}
