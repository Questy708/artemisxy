'use client';

import { Play } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function AxisFlipPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="SkillPrints"
        description="In 2100, we examine the era when Artemis replaced the traditional transcript with biometric, AI-powered SkillPrints — dynamic portraits of capability that evolve alongside the learner."
        bgGradientClass="bg-[#461e68]"
        bgImage="https://images.pexels.com/photos/6147082/pexels-photo-6147082.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">

        <section className="space-y-6">
          <SectionHeading>The Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Step into a virtual time capsule to discover how Artemis transformed qualifications worldwide through SkillPrints — replacing static disciplinary silos and paper transcripts with a dynamic, biometric, AI-powered system for mapping human capability.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.pexels.com/photos/6147082/pexels-photo-6147082.jpeg?auto=compress&cs=tinysrgb&w=2500"
              alt="Video Thumbnail"
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/60 rounded flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-black/80 transition-colors">
                 <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The SkillPrint</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-2xl">A SkillPrint is not a transcript — it is a living portrait of capability. Where transcripts list courses, SkillPrints map competencies across six dimensions, revealing not just what you studied, but what you can do, who you collaborate with, and where you are headed.</p>
          <div className="w-full max-w-3xl mx-auto">
            <svg viewBox="0 0 500 440" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* Radar chart background */}
              <g transform="translate(250,210)">
                {/* Grid rings */}
                <polygon points="0,-180 156,-51 96,132 -96,132 -156,-51" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                <polygon points="0,-135 117,-38 72,99 -72,99 -117,-38" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                <polygon points="0,-90 78,-26 48,66 -48,66 -78,-26" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                <polygon points="0,-45 39,-13 24,33 -24,33 -39,-13" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                {/* Axes */}
                <line x1="0" y1="0" x2="0" y2="-180" stroke="#d1d5db" strokeWidth="1"/>
                <line x1="0" y1="0" x2="156" y2="-51" stroke="#d1d5db" strokeWidth="1"/>
                <line x1="0" y1="0" x2="96" y2="132" stroke="#d1d5db" strokeWidth="1"/>
                <line x1="0" y1="0" x2="-96" y2="132" stroke="#d1d5db" strokeWidth="1"/>
                <line x1="0" y1="0" x2="-156" y2="-51" stroke="#d1d5db" strokeWidth="1"/>
                {/* Data polygon - the SkillPrint */}
                <polygon points="0,-162 133,-43 67,99 -82,112 -140,-46" fill="rgba(70,30,104,0.15)" stroke="#461e68" strokeWidth="2.5"/>
                {/* Data points */}
                <circle cx="0" cy="-162" r="5" fill="#461e68"/>
                <circle cx="133" cy="-43" r="5" fill="#461e68"/>
                <circle cx="67" cy="99" r="5" fill="#461e68"/>
                <circle cx="-82" cy="112" r="5" fill="#461e68"/>
                <circle cx="-140" cy="-46" r="5" fill="#461e68"/>
                {/* Center dot */}
                <circle cx="0" cy="0" r="3" fill="#461e68"/>
              </g>
              {/* Labels */}
              <text x="250" y="22" textAnchor="middle" className="text-[11px] font-bold fill-gray-800" style={{fontSize:'11px', fontWeight:'bold'}}>Critical Thinking</text>
              <text x="430" y="172" textAnchor="start" className="text-[11px] font-bold fill-gray-800" style={{fontSize:'11px', fontWeight:'bold'}}>Technical Mastery</text>
              <text x="366" y="370" textAnchor="start" className="text-[11px] font-bold fill-gray-800" style={{fontSize:'11px', fontWeight:'bold'}}>Collaborative Impact</text>
              <text x="134" y="370" textAnchor="end" className="text-[11px] font-bold fill-gray-800" style={{fontSize:'11px', fontWeight:'bold'}}>Civic Adaptability</text>
              <text x="70" y="172" textAnchor="end" className="text-[11px] font-bold fill-gray-800" style={{fontSize:'11px', fontWeight:'bold'}}>Creative Synthesis</text>
              {/* Title */}
              <text x="250" y="432" textAnchor="middle" className="text-[10px] font-mono fill-gray-400 uppercase tracking-widest" style={{fontSize:'10px', letterSpacing:'0.15em'}}>SAMPLE SKILLPRINT — ARTEMIS CLASS OF 2084</text>
            </svg>
          </div>
          <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto text-center">
            <div className="space-y-1">
              <div className="text-xs font-bold text-[#461e68]">90%</div>
              <div className="text-[10px] text-gray-500">Critical Thinking</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-[#461e68]">85%</div>
              <div className="text-[10px] text-gray-500">Technical Mastery</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-[#461e68]">75%</div>
              <div className="text-[10px] text-gray-500">Collaborative Impact</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-[#461e68]">62%</div>
              <div className="text-[10px] text-gray-500">Civic Adaptability</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-[#461e68]">78%</div>
              <div className="text-[10px] text-gray-500">Creative Synthesis</div>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Historical Notes</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Setting</h4>
              <p className="font-bold italic text-sm text-gray-800 leading-relaxed">
                Memorize, test, forget, repeat: this was the typical experience of students worldwide at the dawn of the 21st century. The global economy was evolving at an unprecedented pace, with emerging technologies and shifting job markets creating a skills gap that traditional education struggled to bridge.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Students were increasingly finding their degrees obsolete before they even entered the workforce. Education systems varied wildly across countries, creating uneven opportunities and hindering global collaboration. The world needed a unified approach that could adapt to rapid change while celebrating cultural diversity.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">From Transcript to SkillPrint</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                The traditional academic transcript — a static list of courses and grades — was a 19th-century invention that persisted well into the 21st. It told employers almost nothing about what a graduate could actually do. SkillPrints replaced this relic: a dynamic, evolving record of a learner&apos;s abilities, experiences, and potential, powered by neural mapping and AI analysis.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Where transcripts captured what you studied, SkillPrints captured what you could do — and what you were capable of becoming. They emphasized skills over grades, competencies over credit hours, and growth over static achievement.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading>Neural Skill Mapping</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                The backbone of SkillPrints was Neural Skill Mapping — a revolutionary system that used advanced brain-computer interfaces to create a real-time map of a learner&apos;s neural pathways. Students wore non-invasive, graphene-based sensors that monitored brain activity during learning and problem-solving tasks.
              </p>
              <p>
                The data was processed by quantum computers, creating a dynamic, three-dimensional representation of the student&apos;s evolving skill set — a living portrait of capability that grew and shifted with every new experience. This allowed educators and AI mentors to provide precisely targeted interventions, helping students strengthen weak areas and leverage their natural aptitudes more effectively.
              </p>
              <p>
                Neural Skill Mapping provided a highly visual and futuristic way to think about qualifications. No longer were students reduced to a GPA or a degree title. Their entire cognitive landscape — strengths, connections, growth edges, and untapped potential — was rendered visible and actionable.
              </p>
            </div>
            <div>
               <img src="https://images.pexels.com/photos/8294554/pexels-photo-8294554.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" alt="Neural Skill Mapping Visualization" />
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Matrix Dimensions</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Core Competencies (6-12 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Students began by developing a strong foundation in universal skills — critical thinking, digital literacy, and cross-cultural communication. This phase used advanced AI tutors and virtual reality simulations to provide personalized, immersive learning experiences. Learners engaged in global micro-projects, collaborating with peers from different continents to solve real-world challenges.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                This approach not only built core skills but fostered a sense of global citizenship from the outset. By working alongside teammates from diverse backgrounds, students developed the empathy, adaptability, and communication abilities that would serve as the bedrock of their entire journey.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Specialization Pathways (12-24 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Based on their interests, aptitudes, and global demand, students chose multiple specialization pathways — not traditional majors, but flexible routes through the Skills Matrix that combined knowledge areas in unique ways. A student might blend environmental science, blockchain technology, and indigenous wisdom to create innovative solutions for climate change.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The AI-driven system continuously suggested new connections and learning opportunities based on the student&apos;s progress and emerging global trends. No two students followed the same trajectory, yet all emerged with complementary skill sets that could interlock in powerful ways.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Global Implementation (12-18 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Students applied their unique skill combinations to real-world projects across the globe. Using Artemis&apos;s network of partner organizations, they engaged in international internships, research projects, and entrepreneurial ventures. Advanced augmented reality tools ensured solutions were culturally appropriate and truly impactful.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Projects ranged from designing sustainable water systems in sub-Saharan Africa to developing AI-driven healthcare diagnostics in Southeast Asia, each leaving a tangible mark on the world while shaping the student into a versatile, globally-minded professional.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">The SkillPrint</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                The SkillPrint replaced traditional academic transcripts as a dynamic, evolving record of a student&apos;s abilities, experiences, and potential. Unlike static transcripts, SkillPrints captured academic achievements, co-curricular activities, work experiences, personal projects, and micro-credentials — all mapped through neural analysis and verified through AI-driven competency assessment.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Powered by sophisticated algorithms, SkillPrints emphasized skills over grades, highlighting competencies such as critical thinking, creativity, collaboration, and leadership. They grew and evolved alongside the learner, providing a living portrait of capabilities that employers, collaborators, and institutions could access and interpret in real-time.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>In SkillPrints:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Artemis replaced rigid disciplines with a flexible, AI-powered system that adapted to global needs in real-time</li>
              <li>Neural Skill Mapping made qualifications visual, dynamic, and deeply personal</li>
              <li>Students graduated with a unique portfolio of transferable skills rather than a traditional degree</li>
              <li>The gap between education and employment disappeared as learning became directly tied to evolving global challenges</li>
              <li>Cultural intelligence and adaptability became core components of every educational journey</li>
              <li>Transcripts were replaced by SkillPrints — dynamic, biometric, evolving records of each learner&apos;s journey</li>
            </ul>
            <p className="pt-4 font-bold italic">
               The SkillPrints era transformed Artemis into a truly global university, one whose graduates were not just knowledgeable, but capable, adaptable, and deeply connected to the challenges and opportunities of their time.
            </p>
          </div>
        </section>

        <section className="space-y-24">
          <div>
            <hr className="border-t border-gray-200 mb-12" />
            <SectionHeading>Exhibit Article Archive</SectionHeading>
            <p className="text-sm text-gray-600 mt-4">Browse below to search through video archives of the exhibits displayed on May 1st, 2100.</p>
          </div>

          <div className="space-y-24">
            <div className="space-y-12">
              <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 42</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="font-bold italic uppercase tracking-wider text-sm">Neural Skill Mapping: The Technology</h4>
                  <p className="italic text-xs text-gray-500">Holographic interface, quantum computing core, bio-neural feedback sensors</p>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                    <p>Neural Skill Mapping was the backbone of SkillPrints. This revolutionary system used advanced brain-computer interfaces to create a real-time map of a learner&apos;s neural pathways, identifying strengths, potential connections, and areas for growth. Students wore non-invasive, graphene-based sensors that monitored brain activity during learning and problem-solving tasks.</p>
                    <p>The data was processed by quantum computers, creating a dynamic, three-dimensional representation of the student&apos;s evolving skill set. This allowed educators and AI mentors to provide precisely targeted interventions, helping students strengthen weak areas and leverage their natural aptitudes more effectively.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                    <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                  </div>
                  <p className="text-xs text-gray-500 italic">Watch the Neural Skill Mapping demonstration.</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 78</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="font-bold italic uppercase tracking-wider text-sm">Global Challenge Simulator</h4>
                  <p className="italic text-xs text-gray-500">Immersive holodeck, swarm intelligence algorithms, haptic feedback suits</p>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                    <p>The Global Challenge Simulator was a cornerstone of the Core Competencies phase. This advanced facility allowed students to tackle complex, multifaceted global issues in a safe, simulated environment. Using holographic technology, haptic feedback, and swarm intelligence algorithms, the simulator created realistic scenarios that adapted in real-time to students&apos; decisions.</p>
                    <p>Scenarios ranged from pandemic response coordination to climate adaptation planning, giving students a depth of experiential learning that would have been impossible in the physical world alone. The system&apos;s AI moderator ensured balanced teams and meaningful participation for every student.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                    <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                  </div>
                  <p className="text-xs text-gray-500 italic">Watch the Global Challenge Simulator in action.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <ExploreAnotherFuture currentPage="global-skills-matrix" goTo={goTo} />
    </>
  );
}
