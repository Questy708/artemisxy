'use client';

import React, { useState, useCallback, useSyncExternalStore } from 'react';
import WelcomeGate from './onboarding/WelcomeGate';
import IdentityStep from './onboarding/IdentityStep';
import DimensionWalk, { dimensions as walkDimensions } from './onboarding/DimensionWalk';
import Dashboard from './dashboard/Dashboard';

type AppPhase = 'onboarding' | 'dashboard';
type OnboardingStep = 'welcome' | 'identity' | 'dimensions' | 'complete';

interface T1SiteProps {
  onExit: () => void;
}

const STORAGE_KEY = 'artemis-t1-state';

interface AppState {
  phase: AppPhase;
  onboardingStep: OnboardingStep;
  selectedArchetype: string | null;
  exploredDimensions: string[];
}

const defaultState: AppState = {
  phase: 'onboarding',
  onboardingStep: 'welcome',
  selectedArchetype: null,
  exploredDimensions: [],
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
  // Subscribe to localStorage via useSyncExternalStore — no setState in effects needed
  const snapshot = useSyncExternalStore(storeSubscribe, storeGetSnapshot, storeGetServerSnapshot);
  const appState = parseSnapshot(snapshot);

  // Track dimension walk index separately (not persisted)
  const [currentDimensionIndex, setCurrentDimensionIndex] = useState(0);

  // Check if we're on the client by comparing snapshot to server snapshot
  const isClient = snapshot !== ''; // server always returns ''

  // Handlers — write to external store, which triggers re-render via useSyncExternalStore
  const handleBeginJourney = useCallback(() => {
    storeWrite({ ...parseSnapshot(storeGetSnapshot()), onboardingStep: 'identity' });
  }, []);

  const handleGoToDashboard = useCallback(() => {
    storeWrite({ ...parseSnapshot(storeGetSnapshot()), phase: 'dashboard' });
  }, []);

  const handleIdentityBack = useCallback(() => {
    storeWrite({ ...parseSnapshot(storeGetSnapshot()), onboardingStep: 'welcome' });
  }, []);

  const handleIdentityContinue = useCallback(() => {
    storeWrite({ ...parseSnapshot(storeGetSnapshot()), onboardingStep: 'dimensions' });
  }, []);

  const handleDimensionsBack = useCallback(() => {
    storeWrite({ ...parseSnapshot(storeGetSnapshot()), onboardingStep: 'identity' });
  }, []);

  const handleMarkExplored = useCallback((dimId: string) => {
    const current = parseSnapshot(storeGetSnapshot());
    if (!current.exploredDimensions.includes(dimId)) {
      storeWrite({ ...current, exploredDimensions: [...current.exploredDimensions, dimId] });
    }
  }, []);

  const handleDimensionNext = useCallback(() => {
    setCurrentDimensionIndex(prev => {
      if (prev < walkDimensions.length - 1) return prev + 1;
      return prev;
    });
  }, []);

  const handleDimensionPrevious = useCallback(() => {
    setCurrentDimensionIndex(prev => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  }, []);

  const handleCompleteOnboarding = useCallback(() => {
    storeWrite({ ...parseSnapshot(storeGetSnapshot()), phase: 'dashboard', onboardingStep: 'complete' });
  }, []);

  const handleSelectArchetype = useCallback((archetype: string) => {
    storeWrite({ ...parseSnapshot(storeGetSnapshot()), selectedArchetype: archetype });
  }, []);

  // Show loading spinner until client-side hydrated
  if (!isClient) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-200 border-t-[#8A0000] rounded-full animate-spin" />
      </div>
    );
  }

  const { phase, onboardingStep, selectedArchetype, exploredDimensions } = appState;

  // ─── Render based on phase ───
  if (phase === 'dashboard') {
    return (
      <Dashboard
        selectedArchetype={selectedArchetype}
        exploredDimensions={exploredDimensions}
        onExit={onExit}
        onMarkExplored={handleMarkExplored}
      />
    );
  }

  // ─── Onboarding phase ───
  switch (onboardingStep) {
    case 'welcome':
      return (
        <WelcomeGate
          onBegin={handleBeginJourney}
          onGoToDashboard={handleGoToDashboard}
        />
      );

    case 'identity':
      return (
        <IdentityStep
          selectedArchetype={selectedArchetype}
          onSelect={handleSelectArchetype}
          onContinue={handleIdentityContinue}
          onBack={handleIdentityBack}
        />
      );

    case 'dimensions':
      return (
        <DimensionWalk
          currentDimensionIndex={currentDimensionIndex}
          exploredDimensions={exploredDimensions}
          onMarkExplored={handleMarkExplored}
          onNext={handleDimensionNext}
          onPrevious={handleDimensionPrevious}
          onComplete={handleCompleteOnboarding}
          onBack={handleDimensionsBack}
        />
      );

    default:
      return (
        <WelcomeGate
          onBegin={handleBeginJourney}
          onGoToDashboard={handleGoToDashboard}
        />
      );
  }
}
