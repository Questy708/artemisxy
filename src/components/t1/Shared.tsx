'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowLeft } from 'lucide-react';
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
  const [scrolled, setScrolled] = useState(false);

  const dimensionSlugs = ['open-loop-learning', 'adaptive-paced-learning', 'global-skills-matrix', 'purpose-learning', 'centers-of-inquiry'];
  const isExplorePath = dimensionSlugs.includes(currentPage);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dimensions = [
    { slug: 'open-loop-learning', label: 'Infinite Learning Continuum', num: '01' },
    { slug: 'adaptive-paced-learning', label: 'Adaptive Paced Learning', num: '02' },
    { slug: 'global-skills-matrix', label: 'SkillPrints', num: '03' },
    { slug: 'purpose-learning', label: 'The Artemis Oath', num: '04' },
    { slug: 'centers-of-inquiry', label: 'Centers of Inquiry', num: '05' },
  ];

  return (
    <header className={cn(
      "w-full fixed top-0 left-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-white/70 backdrop-blur-lg"
    )}>
      <div className="flex items-center justify-between h-14 max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20">
        {/* Logo */}
        <button onClick={() => goTo('home')} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-7 h-7 border-2 border-gray-900 flex items-center justify-center text-[10px] font-bold italic text-gray-900">
            A
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-900">
            Artemis<span className="font-light opacity-60">2100</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">
          <button
            onClick={() => goTo('home')}
            className={cn("hover:opacity-100 transition-opacity cursor-pointer", currentPage === 'home' && "text-gray-900")}
          >
            Home
          </button>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsExploreOpen(true)}
            onMouseLeave={() => setIsExploreOpen(false)}
          >
            <span className={cn("flex items-center gap-1 hover:opacity-100 transition-opacity", isExplorePath && "text-gray-900")}>
              Dimensions <ChevronDown className="w-3 h-3" />
            </span>
            {isExploreOpen && (
              <div className="absolute top-full right-0 pt-3">
                <div className="bg-white border border-gray-100 shadow-2xl shadow-black/10 flex flex-col min-w-[280px] overflow-hidden">
                  {dimensions.map((d) => (
                    <button
                      key={d.slug}
                      onClick={() => { goTo(d.slug); setIsExploreOpen(false); }}
                      className={cn(
                        "px-6 py-3.5 hover:bg-gray-50 transition-colors text-[11px] text-left cursor-pointer flex items-center gap-4 border-b border-gray-50 last:border-0",
                        currentPage === d.slug ? "text-gray-900 font-bold" : "text-gray-500"
                      )}
                    >
                      <span className="text-[9px] font-mono text-gray-300 w-5">{d.num}</span>
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button onClick={() => goTo('build')} className={cn("hover:opacity-100 transition-opacity cursor-pointer", currentPage === 'build' && "text-gray-900")}>Build</button>
          <button onClick={() => goTo('about')} className={cn("hover:opacity-100 transition-opacity cursor-pointer", currentPage === 'about' && "text-gray-900")}>About</button>
          <button onClick={onExit} className="hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-1 text-[#8A0000]">
            <ArrowLeft className="w-3 h-3" /> Exit
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="w-full bg-white shadow-xl shadow-black/10 flex flex-col p-6 md:hidden gap-1 text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
           <button onClick={() => { goTo('home'); setIsMobileMenuOpen(false); }} className="py-3 text-left">Home</button>
           <div className="py-3">
              <span className="text-gray-900">Dimensions</span>
           </div>
           <div className="flex flex-col gap-0 pl-6 border-l-2 border-gray-100">
             {dimensions.map((d) => (
               <button key={d.slug} onClick={() => { goTo(d.slug); setIsMobileMenuOpen(false); }} className="py-2.5 text-left text-[11px]">
                 <span className="font-mono text-gray-300 mr-2">{d.num}</span>{d.label}
               </button>
             ))}
           </div>
           <button onClick={() => { goTo('build'); setIsMobileMenuOpen(false); }} className="py-3 text-left">Build</button>
           <button onClick={() => { goTo('about'); setIsMobileMenuOpen(false); }} className="py-3 text-left">About</button>
           <button onClick={() => { onExit(); setIsMobileMenuOpen(false); }} className="py-3 text-left text-[#8A0000]">Back to Artemis</button>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const currentYear = 2100;

  const dimensionLinks = [
    { slug: 'open-loop-learning', label: 'Infinite Learning Continuum' },
    { slug: 'adaptive-paced-learning', label: 'Adaptive Paced Learning' },
    { slug: 'global-skills-matrix', label: 'SkillPrints' },
    { slug: 'purpose-learning', label: 'The Artemis Oath' },
    { slug: 'centers-of-inquiry', label: 'Centers of Inquiry' },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white w-full mt-auto">
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20">
        {/* Top: Logo + tagline */}
        <div className="py-12 border-b border-white/10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 border-2 border-white/30 flex items-center justify-center text-xs font-bold italic text-white/50">A</div>
              <span className="text-lg font-semibold tracking-[0.2em] uppercase text-white/80">Artemis<span className="font-light opacity-40">2100</span></span>
            </div>
            <p className="text-xs text-white/30 max-w-sm leading-relaxed">An experiment in imagining the future of learning. All ideas speculative. All futures possible.</p>
          </div>
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Est. 2025 — Projected 2100</p>
        </div>

        {/* Middle: Dimensions grid */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {dimensionLinks.map((d, i) => (
            <div key={d.slug} className="group cursor-pointer">
              <div className="text-[9px] font-mono text-white/20 mb-1">0{i + 1}</div>
              <div className="text-[11px] text-white/40 group-hover:text-white/80 transition-colors leading-tight">{d.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom: Copyright */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[10px] text-white/20">Copyright &copy; {currentYear} The University of Artemis. All ideas experimental.</p>
          <p className="text-[10px] text-white/15">Made possible by the courageous women and men inventing the future of global education.</p>
        </div>
      </div>
    </footer>
  );
}

interface ExploreAnotherFutureProps {
  currentPage: string;
  goTo: (page: string) => void;
}

export function ExploreAnotherFuture({ currentPage, goTo }: ExploreAnotherFutureProps) {
  const links = [
    { slug: 'adaptive-paced-learning', label: 'Adaptive Paced<br/>Learning', bg: 'bg-[#007f9c] hover:bg-[#006e87]', border: '' },
    { slug: 'global-skills-matrix', label: 'SkillPrints', bg: 'bg-[#461e68] hover:bg-[#391854]', border: 'border-l-[8px] border-yellow-400' },
    { slug: 'purpose-learning', label: 'The Artemis<br/>Oath', bg: 'bg-[#f2b90f] hover:bg-[#d6a40d]', border: '' },
    { slug: 'centers-of-inquiry', label: 'Centers of<br/>Inquiry', bg: 'bg-[#0f3460] hover:bg-[#0a2647]', border: 'border-l-[8px] border-white' },
    { slug: 'build', label: 'Design a<br/>Future', bg: 'bg-[#d92231] hover:bg-[#b91d29]', border: 'border-l-[8px] border-[#007f9c]', isSpecial: true },
  ].filter(l => l.slug !== currentPage);

  return (
    <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-24 border-t border-gray-200 mt-24">
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

export function HeroHeader({ title, description, bgImage }: { title: string; description: string; bgGradientClass?: string; bgImage?: string }) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative w-full h-[55vh] min-h-[420px] overflow-hidden">
        {/* Full-bleed background image — no color overlay */}
        {bgImage && (
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        )}

        {/* Bottom gradient for title readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        {/* Top gradient for navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/20 to-transparent" />

        {/* Text content — bottom-left, over the image */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 pb-12 pt-24">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold tracking-[0.15em] uppercase text-white mb-5 leading-tight">
              {title}
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
