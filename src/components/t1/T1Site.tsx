'use client';

import React, { useState, useCallback, useSyncExternalStore } from 'react';
import { LandingPage } from './onboarding/LandingPage';
import { SplitLayout } from './onboarding/SplitLayout';
import { IdentityPage } from './onboarding/IdentityPage';
import { VerifyPage } from './onboarding/VerifyPage';
import { WorkspacePage } from './onboarding/WorkspacePage';
import { AppMockup } from './onboarding/AppMockup';
import { MainApp } from './dashboard/MainApp';
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

// Map page slugs to t1 page components
function T1PageContent({ page, goTo }: { page: string; goTo: (p: string) => void }) {
  switch (page) {
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
    case 'home':
      return <HomePage goTo={goTo} />;
    default:
      return <HomePage goTo={goTo} />;
  }
}

export default function T1Site({ onExit }: T1SiteProps) {
  const snapshot = useSyncExternalStore(storeSubscribe, storeGetSnapshot, storeGetServerSnapshot);
  const appState = parseSnapshot(snapshot);

  const isClient = snapshot !== '';

  // Internal page state for navigating within t1 after onboarding
  // 'dashboard' = MainApp, anything else = provocation page
  const [t1Page, setT1Page] = useState<string>('dashboard');

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

  // Navigation handler: 'dashboard' goes back to MainApp, any slug goes to that page
  const handleGoTo = useCallback((page: string) => {
    setT1Page(page);
  }, []);

  const handleBackToDashboard = useCallback(() => {
    setT1Page('dashboard');
  }, []);

  // Step 5: After onboarding — MainApp dashboard or provocation pages
  if (currentStep === 'APP') {
    // If user clicked a dimension/provocation, show the actual page with NavBar + Footer
    if (t1Page !== 'dashboard') {
      return (
        <div className="w-full min-h-screen flex flex-col bg-white">
          <NavBar currentPage={t1Page} goTo={handleGoTo} onExit={handleBackToDashboard} />
          <div className="pt-14 flex-1">
            <T1PageContent page={t1Page} goTo={handleGoTo} />
          </div>
          <Footer />
        </div>
      );
    }

    // Default: show the MainApp dashboard
    return <MainApp travelerName={travelerName} onExit={onExit} goTo={handleGoTo} />;
  }

  // Step 1: Landing page (full screen)
  if (currentStep === 'LANDING') {
    return <LandingPage onNext={() => setCurrentStep('AUTH')} />;
  }

  // Steps 2-4: SplitLayout with left panel form + right panel AppMockup
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
