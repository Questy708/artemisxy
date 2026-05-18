'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavBarProps {
  currentPage: string;
  goTo: (page: string) => void;
  onExit: () => void;
}

export function NavBar({ currentPage, goTo, onExit }: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const provocationSlugs = ['open-loop-university', 'paced-education', 'axis-flip', 'purpose-learning'];
  const isExplorePath = provocationSlugs.includes(currentPage);

  return (
    <header className="flex items-center justify-between px-8 py-6 w-full max-w-6xl mx-auto relative z-50">
      <div className="flex items-center gap-2">
        <button onClick={() => goTo('home')} className="text-2xl font-semibold italic tracking-tight text-gray-900 cursor-pointer">
          Stanford<span className="font-light">2025</span>
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
        <button
          onClick={() => goTo('home')}
          className={cn("hover:text-gray-900 transition-colors cursor-pointer", currentPage === 'home' && "text-gray-900 border-b border-gray-900 pb-1")}
        >
          Home
        </button>
        <div
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsExploreOpen(true)}
          onMouseLeave={() => setIsExploreOpen(false)}
        >
          <span className={cn("flex items-center gap-1 hover:text-gray-900 transition-colors pb-1", isExplorePath && "text-gray-900 border-b border-gray-900")}>
            Explore <ChevronDown className="w-3 h-3" />
          </span>
          {isExploreOpen && (
            <div className="absolute top-full right-0 pt-4">
              <div className="bg-white border border-gray-100 shadow-xl shadow-black/5 rounded flex flex-col min-w-[220px] overflow-hidden whitespace-nowrap">
                <button onClick={() => { goTo('open-loop-university'); setIsExploreOpen(false); }} className={cn("px-6 py-4 hover:bg-gray-50 transition-colors text-xs text-gray-600 text-left cursor-pointer", currentPage === 'open-loop-university' && "font-bold text-gray-900")}>Open Loop University</button>
                <button onClick={() => { goTo('paced-education'); setIsExploreOpen(false); }} className={cn("px-6 py-4 hover:bg-gray-50 transition-colors text-xs text-gray-600 text-left cursor-pointer", currentPage === 'paced-education' && "font-bold text-gray-900")}>Paced Education</button>
                <button onClick={() => { goTo('axis-flip'); setIsExploreOpen(false); }} className={cn("px-6 py-4 hover:bg-gray-50 transition-colors text-xs text-gray-600 text-left cursor-pointer", currentPage === 'axis-flip' && "font-bold text-gray-900")}>Axis Flip</button>
                <button onClick={() => { goTo('purpose-learning'); setIsExploreOpen(false); }} className={cn("px-6 py-4 hover:bg-gray-50 transition-colors text-xs text-gray-600 text-left cursor-pointer", currentPage === 'purpose-learning' && "font-bold text-gray-900")}>Purpose Learning</button>
              </div>
            </div>
          )}
        </div>
        <button onClick={() => goTo('build')} className={cn("hover:text-gray-900 transition-colors cursor-pointer", currentPage === 'build' && "text-gray-900 border-b border-gray-900 pb-1")}>Build</button>
        <button onClick={() => goTo('about')} className={cn("hover:text-gray-900 transition-colors cursor-pointer", currentPage === 'about' && "text-gray-900 border-b border-gray-900 pb-1")}>About</button>
        <span className="hover:text-gray-900 transition-colors cursor-pointer">Part 2 (New!)</span>
        <button onClick={onExit} className="hover:text-gray-900 transition-colors cursor-pointer text-[#8A0000]">Back to Artemis</button>
      </nav>

      {/* Mobile Toggle */}
      <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl shadow-black/10 flex flex-col p-6 md:hidden gap-6 font-bold text-sm tracking-widest text-gray-400 uppercase">
           <button onClick={() => { goTo('home'); setIsMobileMenuOpen(false); }}>Home</button>
           <div className="space-y-4">
              <span className="text-gray-900 border-b border-gray-900 pb-1 w-fit">Explore</span>
              <div className="flex flex-col gap-4 pl-4 border-l border-gray-100">
                <button onClick={() => { goTo('open-loop-university'); setIsMobileMenuOpen(false); }}>Open Loop University</button>
                <button onClick={() => { goTo('paced-education'); setIsMobileMenuOpen(false); }}>Paced Education</button>
                <button onClick={() => { goTo('axis-flip'); setIsMobileMenuOpen(false); }}>Axis Flip</button>
                <button onClick={() => { goTo('purpose-learning'); setIsMobileMenuOpen(false); }}>Purpose Learning</button>
              </div>
           </div>
           <button onClick={() => { goTo('build'); setIsMobileMenuOpen(false); }}>Build</button>
           <button onClick={() => { goTo('about'); setIsMobileMenuOpen(false); }}>About</button>
           <button onClick={() => { onExit(); setIsMobileMenuOpen(false); }} className="text-[#8A0000]">Back to Artemis</button>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#171717] text-white py-16 text-center text-xs space-y-2 mt-auto w-full">
      <p>Copyright &copy; 2100 Stanford University. All ideas experimental.</p>
      <p className="text-gray-400">This website was made possible by the courageous women and men who invented the future of Stanford University.</p>
    </footer>
  );
}

interface ExploreAnotherFutureProps {
  currentPage: string;
  goTo: (page: string) => void;
}

export function ExploreAnotherFuture({ currentPage, goTo }: ExploreAnotherFutureProps) {
  const links = [
    { slug: 'paced-education', label: 'Paced<br/>Education', bg: 'bg-[#007f9c] hover:bg-[#006e87]', border: '' },
    { slug: 'axis-flip', label: 'Axis Flip', bg: 'bg-[#461e68] hover:bg-[#391854]', border: 'border-l-[8px] border-yellow-400' },
    { slug: 'purpose-learning', label: 'Purpose<br/>Learning', bg: 'bg-[#f2b90f] hover:bg-[#d6a40d]', border: '' },
    { slug: 'build', label: 'Design a<br/>Future', bg: 'bg-[#d92231] hover:bg-[#b91d29]', border: 'border-l-[8px] border-[#007f9c]', isSpecial: true },
  ].filter(l => l.slug !== currentPage);

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 border-t border-gray-200 mt-24">
      <SectionHeading>Explore Another Future</SectionHeading>
      
      <div className="flex flex-wrap justify-center gap-4 mt-12 w-full text-center">
        {links.map((l) => (
          <button
            key={l.slug}
            onClick={() => goTo(l.slug)}
            className={`${l.bg} transition-colors text-white font-bold w-48 h-24 flex items-center justify-center italic text-xl ${l.border} relative overflow-hidden group cursor-pointer`}
          >
            {l.isSpecial && (
              <div className="absolute left-0 top-0 w-10 h-10 bg-yellow-400 -translate-x-5 -translate-y-5 rotate-45 group-hover:scale-110 transition-transform" />
            )}
            <span dangerouslySetInnerHTML={{ __html: l.label }} />
          </button>
        ))}
      </div>
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-[0.15em] uppercase text-gray-900 border-b border-black w-fit pr-12 pb-1">
      {children}
    </h2>
  );
}

export function HeroHeader({ title, description, bgGradientClass }: { title: string; description: string; bgGradientClass: string }) {
  return (
    <div className={cn("relative w-full h-[400px] overflow-hidden flex items-center", bgGradientClass)}>
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full border-[10px] border-white/40 border-dashed" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full border-[20px] border-white/20" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="bg-white p-8 md:p-12 w-full md:w-2/3 lg:w-[600px] border border-gray-100 shadow-xl relative mt-16">
          <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-gray-900 mb-6 border-b-2 border-black inline-block pb-1">
            {title}
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
