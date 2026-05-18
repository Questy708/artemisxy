'use client';

import { ArrowRight } from 'lucide-react';
import { cn } from '../Shared';

interface WelcomeGateProps {
  onBegin: () => void;
  onGoToDashboard: () => void;
}

const dimensionNodes = [
  { label: 'ILC', x: 25, y: 20 },
  { label: 'APL', x: 65, y: 15 },
  { label: 'SP', x: 80, y: 45 },
  { label: 'OATH', x: 60, y: 70 },
  { label: 'CoI', x: 30, y: 75 },
  { label: 'WAC', x: 15, y: 48 },
];

export default function WelcomeGate({ onBegin, onGoToDashboard }: WelcomeGateProps) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side — Content */}
      <div className="flex-1 lg:w-[55%] bg-white flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-16 lg:py-0">
        <div className="max-w-xl">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 border-2 border-gray-900 flex items-center justify-center text-sm font-bold italic text-gray-900">
              A
            </div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-900">
              Artemis
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Imagine the future of learning
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
            An experiment in reimagining education for the next century. Six dimensions. One journey. Your exploration.
          </p>

          {/* CTA */}
          <button
            onClick={onBegin}
            className="inline-flex items-center gap-3 bg-[#8A0000] hover:bg-[#6A0000] text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-colors cursor-pointer group"
          >
            Begin the Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Skip link */}
          <button
            onClick={onGoToDashboard}
            className="block mt-6 text-xs text-gray-400 hover:text-[#8A0000] transition-colors cursor-pointer uppercase tracking-wider"
          >
            Already explored? Go to dashboard &rarr;
          </button>
        </div>
      </div>

      {/* Right Side — Visual */}
      <div className="flex-1 lg:w-[45%] bg-[#0a0a0a] relative overflow-hidden min-h-[400px] lg:min-h-screen flex items-center justify-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        {/* Constellation nodes */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {dimensionNodes.map((node, i) => (
              dimensionNodes.slice(i + 1).map((otherNode, j) => {
                const dist = Math.sqrt(
                  Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
                );
                if (dist < 40) {
                  return (
                    <line
                      key={`${i}-${i + j + 1}`}
                      x1={node.x}
                      y1={node.y}
                      x2={otherNode.x}
                      y2={otherNode.y}
                      stroke="#8A0000"
                      strokeWidth="0.3"
                      opacity="0.3"
                    />
                  );
                }
                return null;
              })
            ))}
          </svg>

          {/* Nodes */}
          {dimensionNodes.map((node, i) => (
            <div
              key={node.label}
              className={cn(
                "absolute w-14 h-14 sm:w-16 sm:h-16 border border-white/20 flex flex-col items-center justify-center",
                "transition-all duration-700",
                "animate-[float_6s_ease-in-out_infinite]"
              )}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-white/80">
                {node.label}
              </span>
              <span className="text-[7px] text-white/30 font-mono mt-0.5">
                0{i + 1}
              </span>
              {/* Crimson accent dot */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#8A0000] rounded-full" />
            </div>
          ))}

          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#8A0000]/5 rounded-full blur-xl" />
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
            Six Dimensions · One Future
          </p>
        </div>
      </div>
    </div>
  );
}
