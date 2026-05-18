'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass } from 'lucide-react';

export function IdentityPage({ onNext, travelerName, setTravelerName }: { onNext: () => void; travelerName: string; setTravelerName: (name: string) => void }) {
  const [isTypingEmail, setIsTypingEmail] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-[360px] mx-auto">
      <h1 className="text-4xl font-medium text-black mb-1">Welcome to Artemis</h1>
      <h2 className="text-4xl font-medium text-gray-500 mb-6">Your AI agent for learning</h2>
      
      <p className="text-[15px] text-gray-600 mb-8 mt-2 leading-relaxed">
        Sign in or sign up for free<br />with your traveler name
      </p>

      <button 
        onClick={onNext}
        className="w-full flex items-center justify-center space-x-3 bg-white border border-gray-200 rounded-full py-3.5 mb-6 hover:bg-gray-50 transition-colors"
      >
        <Compass className="w-5 h-5 text-[#8A0000]" />
        <span className="text-[15px] font-medium text-black">Sign in as Explorer</span>
      </button>

      <div className="flex items-center w-full mb-6 relative">
        <div className="flex-grow border-t border-gray-100"></div>
        <span className="mx-4 text-xs text-gray-300">or</span>
        <div className="flex-grow border-t border-gray-100"></div>
      </div>

      <div className="w-full relative">
         <input
           type="text"
           value={travelerName}
           onChange={(e) => {
             setTravelerName(e.target.value);
             setIsTypingEmail(e.target.value.length > 0);
           }}
           onFocus={() => setIsTypingEmail(travelerName.length > 0)}
           placeholder="name@traveler-handle"
           className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-full text-[15px] outline-none focus:border-gray-400 transition-colors text-center"
         />
      </div>

      <AnimatePresence mode="wait">
        {!isTypingEmail ? (
          <motion.button 
            key="btn-disabled"
            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
            className="w-full mt-4 bg-gray-50 text-gray-400 rounded-full py-3.5 text-[15px] font-medium flex items-center justify-center cursor-not-allowed"
          >
            Enter your traveler name
          </motion.button>
        ) : (
          <motion.div key="btn-active" initial={{ opacity: 0, y: -5, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} exit={{ opacity: 0, y: 5, height: 0 }} className="w-full overflow-hidden flex flex-col items-center">
            <div className="bg-gray-50 text-gray-600 text-[13px] px-6 py-4 rounded-xl mt-4 w-full text-center">
               Using your traveler name will make it easier to collaborate with other explorers across dimensions.
            </div>
            <button 
              onClick={onNext}
              className="w-full mt-4 bg-black text-white hover:bg-black/90 rounded-full py-3.5 text-[15px] font-medium transition-colors"
            >
              Continue anyway
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-[11px] text-gray-400 mt-8 leading-relaxed max-w-[320px]">
        By signing up to a free account or Team workspace, you agree to the <a href="#" className="underline hover:text-gray-600">MSA</a>, <a href="#" className="underline hover:text-gray-600">Product Terms</a>, <a href="#" className="underline hover:text-gray-600">Policies</a>, <a href="#" className="underline hover:text-gray-600">Privacy Notice</a>, and <a href="#" className="underline hover:text-gray-600">Cookie Notice</a>. By signing up to an Enterprise workspace, you agree to the <a href="#" className="underline hover:text-gray-600">Policies</a>, <a href="#" className="underline hover:text-gray-600">Privacy Notice</a>, and <a href="#" className="underline hover:text-gray-600">Cookie Notice</a>.
      </p>
    </div>
  );
}
