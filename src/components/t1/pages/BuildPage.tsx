'use client';

import { SectionHeading, HeroHeader } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function BuildPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader 
        title="Design Your Future"
        description="Resources for designing the future of living & learning where you are"
        bgGradientClass="bg-[#d92231]"
      />
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 space-y-24">
        
        <section className="space-y-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 border-b pb-2 w-fit italic">Why Future Stanford?</h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-serif">
             <p className="italic">We are in a moment of disruption and change catalyzed in part by the growth of online learning and educational technology. But what about the physical learning environment?</p>
             <p>We can design a future that amplifies what&apos;s great about Stanford and reimagines what can be better.</p>
             <p>Someone once asked Frederick Terman whether he wanted Stanford to be a teaching institution or a research institution. He said, &ldquo;it should be a learning institution&rdquo;.</p>
             <p className="font-bold text-gray-900 font-sans">Let&apos;s build the future of this great learning institution.</p>
          </div>
        </section>

        <section className="space-y-12">
           <div className="grid md:grid-cols-3 gap-8 text-center text-gray-900 border-t border-b py-12 border-gray-200">
               <div>
                  <h3 className="font-bold text-lg uppercase tracking-wider">People First</h3>
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed px-4">Our hope is that Future Stanford will continue to nurture students and leaders who will lead change and apply their experiences around the globe.</p>
               </div>
               <div className="md:border-l md:border-r border-gray-200">
                  <h3 className="font-bold text-lg uppercase tracking-wider">Our Provocations, Your Projects</h3>
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed px-4">The four provocations are hints at what Stanford&apos;s future(s) might be. Make them your own. Try them, tweak them, push them, or even reject them.</p>
               </div>
               <div>
                  <h3 className="font-bold text-lg uppercase tracking-wider">Small Actions = Big Change</h3>
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed px-4">We think small actions can trigger big changes. We hope that you believe you can build the Future Stanford, or the future of living and learning on campus where you are.</p>
               </div>
           </div>
        </section>

        <section className="space-y-12">
           <h2 className="text-3xl font-bold text-gray-900 border-b pb-2 w-fit italic">How to Use This Toolkit</h2>
           <p className="text-gray-600 max-w-3xl">We made this toolkit to help you build off of four provocations that can inspire exploration of what the future of living and learning on campus might be. This toolkit has three pieces that you can download below, titled <strong>Reflect</strong>, <strong>Imagine</strong>, and <strong>Try</strong>.</p>
           
           <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 text-center">
                 <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-4xl font-serif italic text-gray-300">R</div>
                 </div>
                 <h3 className="font-bold text-xl text-gray-900 italic">Reflect</h3>
                 <p className="text-xs text-gray-600">The <strong>Reflect Worksheets</strong> are excursions into imagined worlds inspired by the provocations.</p>
                 <button className="text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors">Download Worksheets &gt;</button>
              </div>
              <div className="space-y-4 text-center">
                 <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-4xl font-serif italic text-gray-300">I</div>
                 </div>
                 <h3 className="font-bold text-xl text-gray-900 italic">Imagine</h3>
                 <p className="text-xs text-gray-600">The <strong>Imagine Cards</strong> are prompts to spark inspiration in your own work.</p>
                 <button className="text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors">Download Cards &gt;</button>
              </div>
              <div className="space-y-4 text-center">
                 <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-4xl font-serif italic text-gray-300">T</div>
                 </div>
                 <h3 className="font-bold text-xl text-gray-900 italic">Try</h3>
                 <p className="text-xs text-gray-600">The <strong>Try Playbook</strong> is a set of activities and suggestions to get started.</p>
                 <button className="text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors">Download Playbook &gt;</button>
              </div>
           </div>
        </section>

      </div>
    </>
  );
}
