'use client';

import React, { useState, useCallback, useSyncExternalStore } from 'react';
import { LandingPage } from './onboarding/LandingPage';
import { SplitLayout } from './onboarding/SplitLayout';
import { IdentityPage } from './onboarding/IdentityPage';
import { VerifyPage } from './onboarding/VerifyPage';
import { WorkspacePage } from './onboarding/WorkspacePage';
import { AppMockup } from './onboarding/AppMockup';
import { MainApp } from './dashboard/MainApp';

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

export default function T1Site({ onExit }: T1SiteProps) {
  const snapshot = useSyncExternalStore(storeSubscribe, storeGetSnapshot, storeGetServerSnapshot);
  const appState = parseSnapshot(snapshot);

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

  // Step 5: MainApp dashboard (after onboarding completes)
  if (currentStep === 'APP') {
    return <MainApp travelerName={travelerName} onExit={onExit} />;
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
