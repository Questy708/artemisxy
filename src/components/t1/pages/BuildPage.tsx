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
        description="Catalyzing global innovation in learning and living — resources for designing the future of education where you are"
        bgGradientClass="bg-[#d92231]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        
        <section className="space-y-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 border-b pb-2 w-fit italic">Why Design Your Future with Artemis?</h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-serif">
             <p className="italic">We stand at the threshold of a new era in global education and human development. The rapid advancement of technology, the interconnectedness of our world, and the complex challenges we face demand a reimagining of how we learn, live, and contribute to society.</p>
             <p>Artemis invites you to be a co-creator of this future. We believe that the next revolution in education will not come from a single institution or culture, but from a global collaborative effort that harnesses diverse perspectives and innovative ideas.</p>
             <p>As the ancient Greek goddess Artemis was associated with new beginnings, we too are embarking on a new journey — one that transcends traditional boundaries and embraces the infinite potential of human creativity and collaboration.</p>
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
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed px-4">The futures we&apos;ve envisioned are springboards for your imagination. Adapt them, challenge them, or create entirely new paradigms. Your unique perspective is vital to this global dialogue.</p>
               </div>
               <div>
                  <h3 className="font-bold text-lg uppercase tracking-wider">Micro-Actions, Macro Impact</h3>
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed px-4">We believe that small, thoughtful actions can cascade into transformative change. You have the power to shape the future of learning and living, not just where you are, but around the world.</p>
               </div>
           </div>
        </section>

        <section className="space-y-12">
           <h2 className="text-3xl font-bold text-gray-900 border-b pb-2 w-fit italic">How to Use This Global Innovation Toolkit</h2>
           <p className="text-gray-600 max-w-2xl">Empowering Co-Creation with Artemis — The Design Your Future initiative is a call to action for all participants — students, faculty, policymakers, and innovators — to engage in the co-creation of educational experiences.</p>
           
           <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 text-center">
                 <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-4xl font-serif italic text-gray-300">E</div>
                 </div>
                 <h3 className="font-bold text-xl text-gray-900 italic">Explore</h3>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Journey into Possible Futures</p>
                 <p className="text-xs text-gray-600">The Explore section invites participants to engage in deep introspection and exploration of potential futures. Here, you can embark on imaginative excursions that challenge conventional thinking and inspire innovative solutions. <strong>Reflection Worksheets</strong> encourage you to envision your aspirations and the impact of education on your life and community.</p>
                 <button className="text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors">Download Worksheets &gt;</button>
              </div>
              <div className="space-y-4 text-center">
                 <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-4xl font-serif italic text-gray-300">I</div>
                 </div>
                 <h3 className="font-bold text-xl text-gray-900 italic">Imagine</h3>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Craft Your Vision</p>
                 <p className="text-xs text-gray-600">In the Imagine subsection, participants are encouraged to think outside the box and generate bold ideas. This section serves as a springboard for creativity, providing prompts and inspiration to help you envision new paradigms in education and living. <strong>Inspiration Cards</strong> contain thought-provoking prompts designed to spark your imagination and inspire your projects.</p>
                 <button className="text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors">Download Cards &gt;</button>
              </div>
              <div className="space-y-4 text-center">
                 <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-4xl font-serif italic text-gray-300">A</div>
                 </div>
                 <h3 className="font-bold text-xl text-gray-900 italic">Act</h3>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Bring Ideas to Life</p>
                 <p className="text-xs text-gray-600">The Act section focuses on practical application, offering a toolkit of activities and strategies to turn your ideas into reality. This hands-on approach empowers participants to experiment, iterate, and implement their visions for a better future. The <strong>Action Playbook</strong> includes a variety of activities and suggestions that guide you in taking tangible steps toward your goals.</p>
                 <button className="text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors">Download Playbook &gt;</button>
              </div>
           </div>
        </section>

      </div>
    </>
  );
}
