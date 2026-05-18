'use client';

import React, { useState, useCallback, useSyncExternalStore } from 'react';
import { LandingPage } from './onboarding/LandingPage';
import { SplitLayout } from './onboarding/SplitLayout';
import { IdentityPage } from './onboarding/IdentityPage';
import { VerifyPage } from './onboarding/VerifyPage';
import { WorkspacePage } from './onboarding/WorkspacePage';
import { AppMockup } from './onboarding/AppMockup';
import { NavBar, Footer } from './Shared';
import HomePage from './pages/HomePage';
import OpenLoopPage from './pages/OpenLoopPage';
import PacedEducationPage from './pages/PacedEducationPage';
import AxisFlipPage from './pages/AxisFlipPage';
import PurposeLearningPage from './pages/PurposeLearningPage';
import CentersOfInquiryPage from './pages/CentersOfInquiryPage';
import DarwinVoyagePage from './pages/DarwinVoyagePage';
import BuildPage from './pages/BuildPage';
import AboutPage from './pages/AboutPage';

type Step = 'LANDING' | 'AUTH' | 'VERIFY' | 'WORKSPACE' | 'APP';

interface T1SiteProps {
  onExit: () => void;
}

const STORAGE_KEY = 'artemis-t1-state';

interface AppState {
  currentStep: Step;
  travelerName: string;
}

const defaultState: AppState = {
  currentStep: 'LANDING',
  travelerName: '',
};

// ─── External store for persisted state ───
let storeListeners: (() => void)[] = [];
let cachedJson: string | null = null;

function storeSubscribe(listener: () => void) {
  storeListeners.push(listener);
  return () => {
    storeListeners = storeListeners.filter(l => l !== listener);
  };
}

function storeGetSnapshot(): string {
  if (cachedJson === null) {
    try {
      cachedJson = localStorage.getItem(STORAGE_KEY) || '';
    } catch {
      cachedJson = '';
    }
  }
  return cachedJson;
}

function storeGetServerSnapshot(): string {
  return '';
}

function storeWrite(state: AppState) {
  try {
    cachedJson = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, cachedJson);
    storeListeners.forEach(l => l());
  } catch {
    /* ignore */
  }
}

function parseSnapshot(snapshot: string): AppState {
  if (!snapshot) return defaultState;
  try {
    return { ...defaultState, ...JSON.parse(snapshot) };
  } catch {
    return defaultState;
  }
}

// ─── T1 Site Content (after onboarding) ───
function T1SiteContent({ currentPage, goTo, onExit }: { currentPage: string; goTo: (page: string) => void; onExit: () => void }) {
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage goTo={goTo} />;
      case 'open-loop-learning':
        return <OpenLoopPage goTo={goTo} />;
      case 'adaptive-paced-learning':
        return <PacedEducationPage goTo={goTo} />;
      case 'global-skills-matrix':
        return <AxisFlipPage goTo={goTo} />;
      case 'purpose-learning':
        return <PurposeLearningPage goTo={goTo} />;
      case 'centers-of-inquiry':
        return <CentersOfInquiryPage goTo={goTo} />;
      case 'darwin-voyage':
        return <DarwinVoyagePage goTo={goTo} />;
      case 'build':
        return <BuildPage goTo={goTo} />;
      case 'about':
        return <AboutPage goTo={goTo} />;
      default:
        return <HomePage goTo={goTo} />;
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <NavBar currentPage={currentPage} goTo={goTo} onExit={onExit} />
      <div className="pt-14 flex-1">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default function T1Site({ onExit }: T1SiteProps) {
  const snapshot = useSyncExternalStore(storeSubscribe, storeGetSnapshot, storeGetServerSnapshot);
  const appState = parseSnapshot(snapshot);

  // Internal page state for t1 site content (after onboarding)
  const [t1Page, setT1Page] = useState('home');

  const isClient = snapshot !== '';

  const setCurrentStep = useCallback((step: Step) => {
    storeWrite({ ...parseSnapshot(storeGetSnapshot()), currentStep: step });
  }, []);

  const setTravelerName = useCallback((name: string) => {
    storeWrite({ ...parseSnapshot(storeGetSnapshot()), travelerName: name });
  }, []);

  // Show loading spinner until client-side hydrated
  if (!isClient) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-200 border-t-[#8A0000] rounded-full animate-spin" />
      </div>
    );
  }

  const { currentStep, travelerName } = appState;

  // After onboarding: show the actual t1 site with all its pages
  if (currentStep === 'APP') {
    return <T1SiteContent currentPage={t1Page} goTo={setT1Page} onExit={onExit} />;
  }

  if (currentStep === 'LANDING') {
    return <LandingPage onNext={() => setCurrentStep('AUTH')} />;
  }

  // Use SplitLayout for AUTH, VERIFY, WORKSPACE
  return (
    <SplitLayout stepId={currentStep} rightPanel={<AppMockup />}>
      {currentStep === 'AUTH' && (
        <IdentityPage 
          onNext={() => setCurrentStep('VERIFY')} 
          travelerName={travelerName}
          setTravelerName={setTravelerName} 
        />
      )}
      {currentStep === 'VERIFY' && (
        <VerifyPage 
          onNext={() => setCurrentStep('WORKSPACE')} 
          onBack={() => setCurrentStep('AUTH')} 
        />
      )}
      {currentStep === 'WORKSPACE' && (
        <WorkspacePage 
          onNext={() => setCurrentStep('APP')} 
          onLogout={() => setCurrentStep('AUTH')} 
          travelerName={travelerName}
        />
      )}
    </SplitLayout>
  );
}
