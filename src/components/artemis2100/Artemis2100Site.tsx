'use client';

import React, { useState } from 'react';
import { NavBar, Footer } from './Shared';
import HomePage from './HomePage';
import OpenLoopPage from './provocations/OpenLoopPage';
import PurposeLearningPage from './provocations/PurposeLearningPage';
import PacedEducationPage from './provocations/PacedEducationPage';
import SkillPrintPage from './provocations/SkillPrintPage';
import CentersOfInquiryPage from './provocations/CentersOfInquiryPage';
import InfiniteLearningPage from './provocations/InfiniteLearningPage';
import CalibrateElevatePage from './provocations/CalibrateElevatePage';
import BuildPage from './BuildPage';
import AboutPage from './AboutPage';

type MicroSitePage =
  | 'home'
  | 'open-loop'
  | 'purpose-learning'
  | 'paced-education'
  | 'skillprint'
  | 'centers-of-inquiry'
  | 'infinite-learning'
  | 'calibrate-elevate'
  | 'build'
  | 'about';

interface Artemis2100SiteProps {
  onExit: () => void;
}

export default function Artemis2100Site({ onExit }: Artemis2100SiteProps) {
  const [currentPage, setCurrentPage] = useState<MicroSitePage>('home');

  const goTo = (page: string) => {
    setCurrentPage(page as MicroSitePage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage goTo={goTo} />;
      case 'open-loop':
        return <OpenLoopPage goTo={goTo} />;
      case 'purpose-learning':
        return <PurposeLearningPage goTo={goTo} />;
      case 'paced-education':
        return <PacedEducationPage goTo={goTo} />;
      case 'skillprint':
        return <SkillPrintPage goTo={goTo} />;
      case 'centers-of-inquiry':
        return <CentersOfInquiryPage goTo={goTo} />;
      case 'infinite-learning':
        return <InfiniteLearningPage goTo={goTo} />;
      case 'calibrate-elevate':
        return <CalibrateElevatePage goTo={goTo} />;
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
