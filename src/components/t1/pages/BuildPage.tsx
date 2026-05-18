'use client';

import { SectionHeading, HeroHeader } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function BuildPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader 
        title="Design a Future"
        description="A Rift in Spacetime has opened — and you are the architect of what comes through it. Step into an immersive design exercise to shape the future of learning where you are."
        bgGradientClass="bg-[#d92231]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        
        <section className="space-y-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 border-b pb-2 w-fit italic">A Rift in Spacetime</h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-serif">
             <p className="italic">Imagine that a Rift has torn through the fabric of conventional time. On the other side, you glimpse a world where education has been completely reimagined — where the boundaries between disciplines, institutions, and eras have dissolved. The Rift is unstable. It won&apos;t stay open for long. Your mission: reach through, pull back what you can, and build it here.</p>
             <p>Design a Future is an immersive, gamified exercise that equips you — whether you are a student, educator, policymaker, or innovator — with the tools to experiment toward a new paradigm of learning and living. The futures we&apos;ve envisioned are springboards for your imagination. Adapt them, challenge them, or create entirely new paradigms. Your unique perspective is vital to this global dialogue.</p>
          </div>
        </section>

        <section className="space-y-12">
           <div className="grid md:grid-cols-3 gap-8 text-center text-gray-900 border-t border-b py-12 border-gray-200">
               <div>
                  <h3 className="font-bold text-lg uppercase tracking-wider">Global First, Human-Centered</h3>
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed px-4">Our vision is to nurture a global community of lifelong learners who will drive positive change across cultures and continents.</p>
               </div>
               <div className="md:border-l md:border-r border-gray-200">
                  <h3 className="font-bold text-lg uppercase tracking-wider">Our Provocations, Your Innovations</h3>
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed px-4">The futures we&apos;ve envisioned are springboards. Adapt them, challenge them, or create entirely new paradigms. Your unique perspective is vital.</p>
               </div>
               <div>
                  <h3 className="font-bold text-lg uppercase tracking-wider">Micro-Actions, Macro Impact</h3>
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed px-4">Small, thoughtful actions can cascade into transformative change. You have the power to shape the future of learning — not just where you are, but around the world.</p>
               </div>
           </div>
        </section>

        <section className="space-y-12">
           <h2 className="text-3xl font-bold text-gray-900 border-b pb-2 w-fit italic">The Try-Imagine-Act Cards</h2>
           <p className="text-gray-600 max-w-2xl">Reach through the Rift and pull back tools for building the future. Each card deck guides you through a different phase of the design exercise — from exploration to imagination to action.</p>
           
           <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 text-center">
                 <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-60" />
                    <div className="w-full h-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-4xl font-serif italic text-[#d92231] relative z-10">T</div>
                 </div>
                 <h3 className="font-bold text-xl text-gray-900 italic">Try</h3>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Reach Through the Rift</p>
                 <p className="text-xs text-gray-600">The Try cards invite you to step into the unknown. Each card presents a provocation from the Artemis 2100 exhibit — a fragment of a possible future pulled through the Rift. <strong>Reflection Worksheets</strong> encourage you to engage deeply: What would this future feel like? Who would it serve? What would it require?</p>
                 <button className="text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors">Download Try Cards &gt;</button>
              </div>
              <div className="space-y-4 text-center">
                 <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-60" />
                    <div className="w-full h-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-4xl font-serif italic text-[#461e68] relative z-10">I</div>
                 </div>
                 <h3 className="font-bold text-xl text-gray-900 italic">Imagine</h3>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Craft Your Vision</p>
                 <p className="text-xs text-gray-600">The Imagine cards are spark plugs for creativity. Each one contains a thought-provoking prompt designed to stretch your thinking beyond the boundaries of what education currently is. <strong>Inspiration Cards</strong> help you envision new paradigms: What if universities had no walls? What if learning had no end date? What if every skill was visible?</p>
                 <button className="text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors">Download Imagine Cards &gt;</button>
              </div>
              <div className="space-y-4 text-center">
                 <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-60" />
                    <div className="w-full h-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-4xl font-serif italic text-[#f2b90f] relative z-10">A</div>
                 </div>
                 <h3 className="font-bold text-xl text-gray-900 italic">Act</h3>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Build It Here</p>
                 <p className="text-xs text-gray-600">The Act cards turn vision into reality. Each card provides a concrete micro-action — an experiment you can run in your own context, whether a classroom, a community, or an institution. The <strong>Action Playbook</strong> guides you from prototype to implementation, with strategies for measuring impact and scaling what works.</p>
                 <button className="text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors">Download Playbook &gt;</button>
              </div>
           </div>
        </section>

        <section className="space-y-12">
           <h2 className="text-3xl font-bold text-gray-900 border-b pb-2 w-fit italic">How to Play</h2>
           <div className="grid md:grid-cols-2 gap-12 text-sm text-gray-600 leading-relaxed">
              <div className="space-y-4">
                 <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Step 1: Encounter the Rift</h4>
                 <p>Begin by exploring the four provocations on this site — the Infinite Learning Continuum, Adaptive Paced Learning, the Global Skills Matrix & SkillPrints, and Purpose Learning. Let them challenge your assumptions. As you read, note the moments that surprise, provoke, or inspire you. These are your signals from the other side.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Step 2: Draw Your Cards</h4>
                 <p>Select one Try card, one Imagine card, and one Act card. Use the Try card to ground yourself in a specific provocation. Let the Imagine card push your thinking further. Then use the Act card to design a micro-experiment — something small enough to try this week, but bold enough to matter.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Step 3: Run Your Experiment</h4>
                 <p>Execute your micro-action. Document what happens — the surprises, the failures, the unexpected connections. Share your findings with the Artemis community. Every experiment, no matter how small, contributes to a growing body of evidence that another future is not only possible, but already emerging.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Step 4: Feed the Rift</h4>
                 <p>Your insights become new cards for others. The Rift is not a one-way portal — it&apos;s a living exchange between the future and the present. By sharing what you&apos;ve learned, you expand the deck, deepen the dialogue, and help others reach through the Rift with greater clarity and courage.</p>
              </div>
           </div>
        </section>

      </div>
    </>
  );
}
