'use client';

import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

/* ─── Artemis Shield Logo ─── */
function ArtemisLogo({ size = 28, color = 'white' }: { size?: number; color?: 'white' | 'crimson' }) {
  const stroke = color === 'white' ? 'white' : '#8A0000';
  const fill = color === 'white' ? 'white' : '#8A0000';
  const bgFill = color === 'white' ? 'rgba(255,255,255,0.08)' : 'rgba(138,0,0,0.06)';
  const lineColor = color === 'white' ? 'rgba(255,255,255,0.3)' : 'rgba(138,0,0,0.25)';
  const dotColor = color === 'white' ? 'rgba(255,255,255,0.5)' : 'rgba(138,0,0,0.4)';

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 3L4 9V19.5C4 28.5 11 35.5 20 37.5C29 35.5 36 28.5 36 19.5V9L20 3Z"
        stroke={stroke}
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M20 5.5L6.5 10.8V19.5C6.5 27.2 12.4 33.2 20 35C27.6 33.2 33.5 27.2 33.5 19.5V10.8L20 5.5Z"
        fill={bgFill}
      />
      <path
        d="M20 11L14 24H16.5L17.8 20.8H22.2L23.5 24H26L20 11ZM18.6 18.8L20 14.8L21.4 18.8H18.6Z"
        fill={fill}
      />
      <line x1="12" y1="28" x2="28" y2="28" stroke={lineColor} strokeWidth="0.8" />
      <circle cx="15" cy="30.5" r="0.8" fill={dotColor} />
      <circle cx="20" cy="30.5" r="0.8" fill={dotColor} />
      <circle cx="25" cy="30.5" r="0.8" fill={dotColor} />
    </svg>
  );
}

interface HeaderProps {
  onMenuClick: () => void;
  goHome: () => void;
  goToPage: (page: string) => void;
  onSearchClick?: () => void;
}

export default function Header({ onMenuClick, goHome, goToPage, onSearchClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Education', page: 'education' },
    { label: 'Research', page: 'research' },
    { label: 'Innovation', page: 'innovation' },
    { label: 'Admissions', page: 'admissions' },
    { label: 'Campus Life', page: 'campus' },
    { label: 'Colleges', page: 'colleges' },
    { label: 'About', page: 'about' },
    { label: 'Journal', page: 'blog' },
  ];

  return (
    <header className={cn(
      "w-full fixed top-0 left-0 z-[100] transition-all duration-300",
      scrolled
        ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
        : "bg-transparent"
    )}>
      <div className="flex items-center justify-between h-14 max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20">

        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-1.5" onClick={() => { onMenuClick(); }}>
            <Menu size={20} className={scrolled ? "text-gray-900" : "text-white"} />
          </button>
          <button
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={goHome}
          >
            <ArtemisLogo size={28} color={scrolled ? 'crimson' : 'white'} />
            <div className={cn(
              "leading-[1.15] group-hover:opacity-80 transition-opacity",
              scrolled ? "text-gray-900" : "text-white"
            )}>
              <div className="text-[11px] font-semibold tracking-tight">University of</div>
              <div className="text-[13px] font-bold tracking-tight">Artemis</div>
            </div>
          </button>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className={cn(
          "hidden lg:flex items-center gap-5 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors",
          scrolled ? "text-gray-500" : "text-white/70"
        )}>
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => goToPage(link.page)}
              className={cn(
                "hover:opacity-100 transition-opacity cursor-pointer",
                scrolled ? "hover:text-gray-900" : "hover:text-white"
              )}
              suppressHydrationWarning
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* 2100 badge */}
          <button
            onClick={() => goToPage('artemis-2100')}
            className={cn(
              "hidden lg:inline-flex border px-3 py-1 text-[10px] uppercase tracking-wider cursor-pointer transition-colors",
              scrolled
                ? "border-[#D4A853]/40 text-[#D4A853] hover:bg-[#D4A853]/10"
                : "border-[#D4A853]/50 text-[#D4A853] hover:bg-[#D4A853]/10"
            )}
            suppressHydrationWarning
          >
            2100
          </button>

          {/* T1 badge */}
          <button
            onClick={() => goToPage('t1')}
            className={cn(
              "hidden lg:inline-flex border px-3 py-1 text-[10px] uppercase tracking-wider cursor-pointer transition-colors",
              scrolled
                ? "border-[#007f9c]/40 text-[#007f9c] hover:bg-[#007f9c]/10"
                : "border-[#007f9c]/50 text-[#7dd3fc] hover:bg-[#007f9c]/10"
            )}
            suppressHydrationWarning
          >
            T1
          </button>

          {/* Give */}
          <button
            onClick={() => goToPage('fundraising')}
            className={cn(
              "hidden lg:inline-flex border px-3 py-1 text-[10px] uppercase tracking-wider cursor-pointer transition-colors",
              scrolled
                ? "border-gray-300 text-gray-600 hover:bg-gray-50"
                : "border-white/30 text-white/80 hover:bg-white/10"
            )}
            suppressHydrationWarning
          >
            Give
          </button>

          {/* Apply */}
          <button
            onClick={() => goToPage('apply')}
            className={cn(
              "hidden lg:inline-flex px-3 py-1 text-[10px] uppercase tracking-wider cursor-pointer transition-colors",
              scrolled
                ? "bg-[#8A0000] text-white hover:bg-[#6B0000]"
                : "bg-white text-[#8A0000] hover:bg-gray-100"
            )}
            suppressHydrationWarning
          >
            Apply
          </button>

          {/* Search */}
          <button
            onClick={onSearchClick}
            className={cn(
              "flex items-center cursor-pointer p-2 hover:opacity-70 transition-opacity",
              scrolled ? "text-gray-600" : "text-white"
            )}
            aria-label="Search"
            suppressHydrationWarning
          >
            <Search size={17} />
          </button>
        </div>
      </div>
    </header>
  );
}
