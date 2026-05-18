'use client';

import React, { useState } from 'react';
import { NavBar, Footer } from './Shared';
import HomePage from './pages/HomePage';
import OpenLoopPage from './pages/OpenLoopPage';
import PacedEducationPage from './pages/PacedEducationPage';
import GlobalSkillsMatrixPage from './pages/AxisFlipPage';
import PurposeLearningPage from './pages/PurposeLearningPage';
import BuildPage from './pages/BuildPage';
import AboutPage from './pages/AboutPage';

type T1Page =
  | 'home'
  | 'open-loop-learning'
  | 'adaptive-paced-education'
  | 'global-skills-matrix'
  | 'purpose-learning'
  | 'build'
  | 'about';

interface T1SiteProps {
  onExit: () => void;
}

export default function T1Site({ onExit }: T1SiteProps) {
  const [currentPage, setCurrentPage] = useState<T1Page>('home');

  const goTo = (page: string) => {
    setCurrentPage(page as T1Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage goTo={goTo} />;
      case 'open-loop-learning':
        return <OpenLoopPage goTo={goTo} />;
      case 'adaptive-paced-education':
        return <PacedEducationPage goTo={goTo} />;
      case 'global-skills-matrix':
        return <GlobalSkillsMatrixPage goTo={goTo} />;
      case 'purpose-learning':
        return <PurposeLearningPage goTo={goTo} />;
      case 'build':
        return <BuildPage goTo={goTo} />;
      case 'about':
        return <AboutPage goTo={goTo} />;
      default:
        return <HomePage goTo={goTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased selection:bg-green-200 flex flex-col">
      <NavBar currentPage={currentPage} goTo={goTo} onExit={onExit} />
      <div className="flex-1">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
