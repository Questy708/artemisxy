'use client';

import { motion } from 'motion/react';

export function LandingPage({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans flex flex-col text-black">
      <header className="flex justify-between items-center py-6 px-12 z-10 sticky top-0 bg-[#FDFDFD]/80 backdrop-blur-md">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-7 h-7 border-2 border-gray-900 flex items-center justify-center text-[10px] font-bold italic text-gray-900">
            A
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-900">Artemis</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium">
          <a href="#" className="hover:opacity-60 transition-opacity">Infinite Learning</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Artemis Oath</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Mission</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Careers</a>
        </nav>

        <div>
          <button 
           onClick={onNext}
           className="bg-black text-white px-6 py-2.5 rounded-full text-[15px] font-medium hover:bg-black/80 transition-colors"
          >
            Enter the Rift
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col mt-20 px-12 pb-20">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-[7rem] leading-[1.05] tracking-tight mb-4"
          >
            Reimagining learning <br /> for the next century
          </motion.h1>
        </div>

        <div className="w-full max-w-[1400px] mx-auto mt-12 relative flex-1">
          <div className="text-[17px] font-medium mb-8">Our dimensions</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[700px]">
            {/* Infinite Learning Card (Dark) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.1 }}
               className="bg-[#1C2025] rounded-[40px] p-12 text-white relative overflow-hidden flex flex-col"
            >
              <h2 className="text-[32px] font-medium mb-1">Infinite Learning</h2>
              <p className="text-[#8B939B] text-xl mb-8">Six dimensions of the future</p>
              
              <div className="flex space-x-3 mt-4">
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">Explore</button>
                <button className="bg-[#8A0000] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6B0000] transition-colors">Begin the Journey</button>
              </div>

              <div className="absolute -bottom-20 -right-20 w-[120%] h-[120%] bg-gradient-to-tr from-white/5 to-transparent rounded-full opacity-20 pointer-events-none rotate-12"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-gradient-to-br from-[#8A0000]/20 to-transparent rounded-3xl opacity-30 mix-blend-overlay rotate-[-15deg] shadow-2xl"></div>
              
              <div className="absolute bottom-10 right-10 w-[300px] bg-[#8A0000] text-white p-4 rounded-3xl rounded-br-sm shadow-xl font-medium z-10 rotate-[-5deg]">
                 Map your skills across all six dimensions and discover where your future begins
              </div>
            </motion.div>

            {/* The Artemis Oath Card (Light) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[#EBF2F7] rounded-[40px] p-12 text-black relative overflow-hidden flex flex-col"
            >
              <h2 className="text-[32px] font-medium mb-1">The Artemis Oath</h2>
              <p className="text-[#647182] text-xl mb-8">Education as commitment</p>
              
              <div className="flex space-x-3 mt-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">Explore</button>
                <button className="bg-white/80 text-black px-6 py-3 rounded-full font-medium hover:bg-white border border-gray-200 transition-colors">Take the Oath</button>
              </div>

              {/* Mockup for desktop app */}
              <div className="absolute bottom-[-20%] right-[-20%] w-full h-full bg-[#8A0000] rounded-tl-3xl opacity-80 shadow-2xl rotate-[-10deg] p-8 pb-0">
                 <div className="w-full h-8 bg-white/20 rounded-t-xl mb-4 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                 </div>
                 <div className="text-white text-center mt-12 font-medium">Prove your commitment</div>
                 <div className="flex justify-center mt-6">
                    <div className="bg-black text-white px-6 py-2 rounded-full font-medium mb-2 inline-block shadow-lg whitespace-nowrap">I pledge to learn without limits</div>
                 </div>
                 <div className="flex justify-center mt-2">
                    <div className="bg-black text-white px-6 py-2 rounded-full font-medium inline-block shadow-lg whitespace-nowrap mr-2">across every dimension...</div>
                    <div className="bg-white text-black px-6 py-2 rounded-full font-medium inline-block shadow-lg whitespace-nowrap">of the future</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
