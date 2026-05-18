'use client';

import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function AxisFlipPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="Global Skills Matrix"
        description="In 2100, we examine the era when Artemis revolutionized education by introducing the Global Skills Matrix, transcending traditional disciplines and geographical boundaries."
        bgGradientClass="bg-[#461e68]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">

        <section className="space-y-6">
          <SectionHeading>The Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Step into a virtual time capsule to discover how learning was transformed worldwide through Artemis&apos;s innovative Global Skills Matrix.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2500"
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
            <SectionHeading>Key Details</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <div className="w-full max-w-4xl pb-12">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000" className="w-full h-64 object-cover" alt="Global Skills Matrix Diagram" />
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
                Memorize, test, forget, repeat: this was the typical experience of students worldwide at the dawn of the 21st century. The global economy was evolving at an unprecedented pace, with emerging technologies and shifting job markets creating a skills gap that traditional education struggled to bridge. Students were increasingly finding their degrees obsolete before they even entered the workforce.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Education systems varied wildly across countries, creating uneven opportunities and hindering global collaboration. The world needed a unified approach to learning that could adapt to rapid change while celebrating cultural diversity.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Shift</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                From the 20th century until 2025, most educational institutions organized knowledge into rigid disciplines and measured progress through standardized testing. Artemis recognized the limitations of this approach and in 2026 introduced the Global Skills Matrix.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Matrix was built on three interwoven dimensions, each designed to develop not just knowledge, but the ability to apply that knowledge across contexts, cultures, and challenges. It was a radical departure from the one-size-fits-all model that had dominated education for over a century.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading>The Shift</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                The Global Skills Matrix replaced static disciplinary silos with a dynamic, interconnected framework. Instead of declaring a major in a single field, students navigated through a rich landscape of competencies, guided by AI mentors and global demand signals.
              </p>
              <p>
                The three dimensions of the Matrix&mdash;Core Competencies, Specialization Pathways, and Global Implementation&mdash;were not sequential steps but overlapping, reinforcing layers. Students moved fluidly between them, deepening their skills and broadening their perspectives with each cycle.
              </p>
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800" className="w-full h-full object-cover" alt="Skills Matrix Hub Map" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Core Competencies (6-12 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Students began by developing a strong foundation in universal skills such as critical thinking, digital literacy, and cross-cultural communication. This phase used advanced AI tutors and virtual reality simulations to provide personalized, immersive learning experiences. Learners engaged in global micro-projects, collaborating with peers from different continents to solve real-world challenges.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                This approach not only built core skills but also fostered a sense of global citizenship from the outset. By working alongside teammates from diverse backgrounds, students developed the empathy, adaptability, and communication abilities that would serve as the bedrock of their entire educational journey.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Specialization Pathways (12-24 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Based on their interests, aptitudes, and global demand, students chose multiple specialization pathways. These weren&apos;t traditional majors, but flexible routes through the Skills Matrix that combined knowledge areas in unique ways. For example, a student might forge a path that blended environmental science, blockchain technology, and indigenous wisdom to create innovative solutions for climate change.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The AI-driven system continuously suggested new connections and learning opportunities based on the student&apos;s progress and emerging global trends. This meant that no two students followed the same trajectory, yet all emerged with complementary skill sets that could interlock in powerful ways when they later collaborated.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Global Implementation (12-18 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                In this phase, students applied their unique skill combinations to real-world projects across the globe. Using Artemis&apos;s network of partner organizations, students engaged in a series of international internships, research projects, and entrepreneurial ventures. Students used advanced augmented reality tools to collaborate with local experts and communities, ensuring their solutions were culturally appropriate and truly impactful.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Global Implementation phase was where theory met reality, and where students discovered the true power of their interdisciplinary skill combinations. Projects ranged from designing sustainable water systems in sub-Saharan Africa to developing AI-driven healthcare diagnostics in Southeast Asia, each one leaving a tangible mark on the world while shaping the student into a versatile, globally-minded professional.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">The SkillPrint</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                The SkillPrint replaced traditional academic transcripts as a dynamic, evolving record of a student&apos;s abilities, experiences, and potential. Unlike static transcripts, SkillPrints captured academic achievements, co-curricular activities, work experiences, personal projects, and micro-credentials.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Powered by sophisticated algorithms, they emphasized skills over grades, highlighting competencies such as critical thinking, creativity, collaboration, and leadership. SkillPrints grew and evolved alongside the learner, providing a living portrait of their capabilities that employers, collaborators, and institutions could access and interpret in real-time.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>In the Global Skills Matrix:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Artemis replaced rigid disciplines with a flexible, AI-powered system that adapted to global needs in real-time</li>
              <li>Students graduated with a unique portfolio of transferable skills rather than a traditional degree</li>
              <li>The gap between education and employment disappeared as learning became directly tied to evolving global challenges</li>
              <li>Cultural intelligence and adaptability became core components of every educational journey</li>
              <li>A new global standard for skills and competencies emerged, facilitating international collaboration and mobility</li>
              <li>Transcripts were replaced by SkillPrints&mdash;dynamic, evolving records of each learner&apos;s journey</li>
            </ul>
            <p className="pt-4 font-bold italic">
               The Global Skills Matrix era transformed Artemis into a truly global university, one whose graduates were not just knowledgeable, but capable, adaptable, and deeply connected to the challenges and opportunities of their time.
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
                  <h4 className="font-bold italic uppercase tracking-wider text-sm">Neural Skill Mapping</h4>
                  <p className="italic text-xs text-gray-500">Holographic interface, quantum computing core, bio-neural feedback sensors</p>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                    <p>The Neural Skill Mapping technology was the backbone of the Global Skills Matrix. This revolutionary system used advanced brain-computer interfaces to create a real-time map of a learner&apos;s neural pathways, identifying strengths, potential connections, and areas for growth. Students wore non-invasive, graphene-based sensors that monitored brain activity during learning and problem-solving tasks.</p>
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
                    <p>The system&apos;s AI moderator ensured that teams were balanced and that each participant had opportunities to lead and contribute meaningfully. Scenarios ranged from pandemic response coordination to climate adaptation planning, giving students a depth of experiential learning that would have been impossible in the physical world alone.</p>
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
