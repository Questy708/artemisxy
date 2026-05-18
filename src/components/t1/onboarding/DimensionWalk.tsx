'use client';

import { ArrowLeft, ArrowRight, Check, Infinity, Gauge, Fingerprint, ScrollText, FlaskConical, Globe2 } from 'lucide-react';
import { cn } from '../Shared';

interface DimensionWalkProps {
  currentDimensionIndex: number;
  exploredDimensions: string[];
  onMarkExplored: (dimensionId: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onComplete: () => void;
  onBack: () => void;
}

const dimensions = [
  {
    id: 'open-loop-learning',
    num: '01',
    name: 'Infinite Learning Continuum',
    description: 'Learning never stops. The continuum replaces degrees with an unbroken thread of growth from cradle to cosmos.',
    icon: Infinity,
  },
  {
    id: 'adaptive-paced-learning',
    num: '02',
    name: 'Adaptive Paced Learning',
    description: 'Calibrate. Elevate. Activate. Three stages replace the four-year model, each attuned to your rhythm.',
    icon: Gauge,
  },
  {
    id: 'global-skills-matrix',
    num: '03',
    name: 'SkillPrints',
    description: 'The transcript dissolves. What remains is a living portrait of capability — biometric, dynamic, evolving.',
    icon: Fingerprint,
  },
  {
    id: 'purpose-learning',
    num: '04',
    name: 'The Artemis Oath',
    description: 'Every learner pledges to pursue something that matters. Education becomes commitment, not consumption.',
    icon: ScrollText,
  },
  {
    id: 'centers-of-inquiry',
    num: '05',
    name: 'Centers of Inquiry',
    description: 'Departments dissolve. Interdisciplinary hubs organized around grand challenges take their place.',
    icon: FlaskConical,
  },
  {
    id: 'darwin-voyage',
    num: '06',
    name: 'The World as Campus',
    description: 'The campus is everywhere. A voyage rotation carries learners across continents, oceans, and challenges.',
    icon: Globe2,
  },
];

export default function DimensionWalk({
  currentDimensionIndex,
  exploredDimensions,
  onMarkExplored,
  onNext,
  onPrevious,
  onComplete,
  onBack,
}: DimensionWalkProps) {
  const dim = dimensions[currentDimensionIndex];
  const isExplored = exploredDimensions.includes(dim.id);
  const isFirst = currentDimensionIndex === 0;
  const isLast = currentDimensionIndex === dimensions.length - 1;
  const allExplored = exploredDimensions.length === dimensions.length;
  const Icon = dim.icon;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top bar — Step indicator */}
      <div className="w-full border-b border-gray-100 px-8 sm:px-12 lg:px-20 py-5">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="text-xs text-gray-400 hover:text-gray-700 transition-colors cursor-pointer uppercase tracking-wider flex items-center gap-1"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>
          <div className="flex-1" />
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Step 2 of 3</span>
          <div className="flex gap-1.5">
            <div className="w-8 h-1 bg-[#8A0000]" />
            <div className="w-8 h-1 bg-[#8A0000]" />
            <div className="w-8 h-1 bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Progress bar — 6 segments */}
      <div className="w-full px-8 sm:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-1">
            {dimensions.map((d, i) => (
              <div
                key={d.id}
                className={cn(
                  "flex-1 h-1 transition-all duration-300",
                  i < currentDimensionIndex
                    ? "bg-[#8A0000]"
                    : i === currentDimensionIndex
                    ? "bg-[#8A0000]/50"
                    : "bg-gray-200"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="flex-1 flex items-center justify-center px-8 sm:px-12 lg:px-20 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Large faded number */}
          <div className="text-[120px] sm:text-[160px] font-bold text-gray-100 leading-none select-none">
            {dim.num}
          </div>

          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 border-2 border-[#8A0000]/30 flex items-center justify-center">
              <Icon className="w-8 h-8 text-[#8A0000]" />
            </div>
          </div>

          {/* Dimension name */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {dim.name}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto">
            {dim.description}
          </p>

          {/* Mark as explored */}
          <button
            onClick={() => onMarkExplored(dim.id)}
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 border-2 text-sm font-bold uppercase tracking-wider transition-all cursor-pointer",
              isExplored
                ? "border-[#8A0000] bg-[#8A0000]/5 text-[#8A0000]"
                : "border-gray-200 text-gray-400 hover:border-[#8A0000]/40 hover:text-gray-600"
            )}
          >
            <Check className={cn("w-4 h-4", isExplored ? "text-[#8A0000]" : "text-gray-300")} />
            {isExplored ? 'Marked as explored' : 'Mark as explored'}
          </button>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="w-full border-t border-gray-100 px-8 sm:px-12 lg:px-20 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={onPrevious}
            disabled={isFirst}
            className={cn(
              "flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer",
              isFirst ? "text-gray-200 cursor-not-allowed" : "text-gray-500 hover:text-gray-900"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">
            {currentDimensionIndex + 1} / {dimensions.length}
          </div>

          {isLast && allExplored ? (
            <button
              onClick={onComplete}
              className="flex items-center gap-2 bg-[#8A0000] hover:bg-[#6A0000] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Complete Onboarding
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : isLast ? (
            <button
              onClick={onComplete}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              Skip to Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onNext}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
            >
              Next dimension
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export { dimensions };
