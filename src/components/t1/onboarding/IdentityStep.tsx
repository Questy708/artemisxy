'use client';

import { ArrowLeft, ArrowRight, Compass, PencilRuler, Shield, Globe } from 'lucide-react';
import { cn } from '../Shared';

interface IdentityStepProps {
  selectedArchetype: string | null;
  onSelect: (archetype: string) => void;
  onContinue: () => void;
  onBack: () => void;
}

const archetypes = [
  {
    id: 'explorer',
    name: 'Explorer',
    description: 'You seek what\'s beyond the horizon',
    icon: Compass,
    color: '#8A0000',
  },
  {
    id: 'architect',
    name: 'Architect',
    description: 'You build systems that outlast you',
    icon: PencilRuler,
    color: '#6B0000',
  },
  {
    id: 'guardian',
    name: 'Guardian',
    description: 'You protect what matters and forge commitment',
    icon: Shield,
    color: '#4A0000',
  },
  {
    id: 'voyager',
    name: 'Voyager',
    description: 'You learn by moving through the world',
    icon: Globe,
    color: '#A50000',
  },
];

export default function IdentityStep({ selectedArchetype, onSelect, onContinue, onBack }: IdentityStepProps) {
  const selectedArchetypeData = archetypes.find(a => a.id === selectedArchetype);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side — Content */}
      <div className="flex-1 lg:w-1/2 bg-white flex flex-col px-8 sm:px-12 lg:px-16 py-8 lg:py-12">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-700 transition-colors cursor-pointer uppercase tracking-wider mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          Back
        </button>

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Step 1 of 3</span>
          <div className="flex gap-1.5">
            <div className="w-8 h-1 bg-[#8A0000]" />
            <div className="w-8 h-1 bg-gray-200" />
            <div className="w-8 h-1 bg-gray-200" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Choose your traveler identity
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-md">
          Every explorer brings a different lens. How do you see the future?
        </p>

        {/* Archetype Cards — 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {archetypes.map((archetype) => {
            const Icon = archetype.icon;
            const isSelected = selectedArchetype === archetype.id;
            return (
              <button
                key={archetype.id}
                onClick={() => onSelect(archetype.id)}
                className={cn(
                  "p-5 sm:p-6 border-2 text-left transition-all duration-200 cursor-pointer group",
                  isSelected
                    ? "border-[#8A0000] bg-[#8A0000]/5"
                    : "border-gray-200 hover:border-[#8A0000]/40 bg-white"
                )}
              >
                <Icon
                  className={cn(
                    "w-6 h-6 mb-4 transition-colors",
                    isSelected ? "text-[#8A0000]" : "text-gray-300 group-hover:text-gray-500"
                  )}
                />
                <h3 className={cn(
                  "font-bold text-sm mb-2 transition-colors",
                  isSelected ? "text-gray-900" : "text-gray-700"
                )}>
                  {archetype.name}
                </h3>
                <p className={cn(
                  "text-xs italic leading-relaxed transition-colors",
                  isSelected ? "text-gray-600" : "text-gray-400"
                )}>
                  {archetype.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Continue button */}
        <button
          onClick={onContinue}
          disabled={!selectedArchetype}
          className={cn(
            "inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-all cursor-pointer",
            selectedArchetype
              ? "bg-[#8A0000] hover:bg-[#6A0000] text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          )}
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right Side — Visual */}
      <div className="flex-1 lg:w-1/2 bg-[#0a0a0a] relative overflow-hidden min-h-[300px] lg:min-h-screen flex items-center justify-center">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        {selectedArchetypeData ? (
          /* Selected archetype visualization */
          <div className="relative flex flex-col items-center gap-8 animate-[fadeIn_0.5s_ease-out]">
            {/* Large icon with glow */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: selectedArchetypeData.color, width: '200px', height: '200px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 border-2 border-[#8A0000]/50 flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]">
                {(() => {
                  const Icon = selectedArchetypeData.icon;
                  return <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-[#8A0000]" />;
                })()}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedArchetypeData.name}</h3>
              <p className="text-sm text-white/40 italic">{selectedArchetypeData.description}</p>
            </div>

            {/* Particle dots */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#8A0000]/40 rounded-full animate-[float_4s_ease-in-out_infinite]"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        ) : (
          /* No selection state */
          <div className="text-center px-8">
            <div className="w-24 h-24 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Compass className="w-10 h-10 text-white/20" />
            </div>
            <p className="text-sm text-white/30 italic">Select an identity to reveal your archetype</p>
          </div>
        )}
      </div>
    </div>
  );
}
