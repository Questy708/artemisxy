'use client';

import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function PacedEducationPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader 
        title="Adaptive Paced Education"
        description="In 2100, we reflect on the era when Artemis revolutionized global learning by introducing Adaptive Paced Education, breaking free from rigid timelines and embracing personalized learning journeys."
        bgGradientClass="bg-[#007f9c]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        
        <section className="space-y-6">
          <SectionHeading>The Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Immerse yourself in a virtual time capsule to discover how Artemis transformed education worldwide through its innovative Adaptive Paced Education system.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2500" 
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
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000" className="w-full h-64 object-cover" alt="Diagram" />
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
                Rush, cram, stress, repeat: this was the universal rhythm of students worldwide at the beginning of the 21st century.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The global education landscape was marked by arbitrary timelines, standardized curricula, and a one-size-fits-all approach that failed to account for individual learning styles, cultural differences, and the varying pace at which students mastered different subjects. This system often led to burnout, imposter syndrome, and a disconnect between education and real-world applicability.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                As the world became increasingly interconnected and the pace of change accelerated, it became clear that a more flexible, personalized approach to education was needed — one that could adapt to the needs of diverse learners across the globe while maintaining high standards of academic rigor.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                The age of complexity had begun.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Higher education was an expensive staging ground between an overly supervised adolescence and a wildly complicated adulthood. College needed to regain its place as the experience that taught students how to be perpetual learners and to apply skills to the world outside its walls.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading>The Shift</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-sm text-gray-600 leading-relaxed">
              <p>From the 19th century until 2025, most educational institutions worldwide adhered to fixed academic years and standardized progression. Recognizing the limitations of this approach, Artemis introduced Adaptive Paced Education in 2026, revolutionizing the global learning landscape.</p>
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Student Shift"/>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
               <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">The rhythm before the rhythm</h4>
               <p>Before Artemis, the concept of a &ldquo;learning rhythm&rdquo; was virtually nonexistent in formal education. Students were expected to march in lockstep through predetermined curricula, regardless of their individual readiness, interests, or circumstances. The idea that learning could — or should — be paced according to a student&apos;s cognitive and emotional state was considered radical, even heretical by some traditionalists.</p>
               <p>In the early 2020s, pilot programs across several continents began experimenting with flexible pacing and AI-assisted learning pathways. The results were striking: students in adaptive programs demonstrated not only deeper mastery of content but also significantly higher levels of engagement, well-being, and long-term retention. Artemis synthesized these findings into a coherent, scalable framework that would become Adaptive Paced Education.</p>
               <p>The organization declared that the arbitrary definition of progress based on calendar years and age cohorts was not only outdated but actively harmful to genuine learning. A new paradigm was needed — one built around the learner, not the calendar.</p>
            </div>
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">From Frantic to Adaptive</h4>
              <p>Adaptive Paced Education was designed to promote global exploration, deep mastery, and real-world integration. Learners now moved through phases of education based on their individual readiness and circumstances, allowing them to transform at their own pace — and to cycle back through phases as their needs evolved.</p>
              <p>The three distinct phases were called: Exploration, Mastery, and Integration. Rather than a linear progression, these phases formed a dynamic cycle that learners could revisit throughout their lives, reflecting the reality that learning is never truly &ldquo;complete.&rdquo;</p>
              <p>Advanced learning technologies — including AI-powered cognitive assessments, biometric feedback systems, and immersive virtual reality environments — gave students and educators unprecedented insight into the learning process, grounding each learner&apos;s journey in data-informed personalization.</p>
              <p>To balance these unparalleled technological resources, Artemis made an equal commitment to meditative modes like personal reflection, mindfulness practices, and designated &ldquo;digital silence&rdquo; zones that encouraged deep cognitive processing. The organization championed the Slow Cognition movement, recognizing that true understanding requires not just speed, but stillness.</p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                 <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Exploration (Variable duration: 3-18 months)</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   In this phase, learners embarked on a journey of self-discovery and broad exposure to various fields of knowledge. Using advanced AI-powered assessment tools and virtual reality experiences, students explored different subjects, learning styles, and potential career paths. The Exploration phase was characterized by short, intensive modules that allowed students to sample a wide range of disciplines.
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Cultural exchange was a key component, with learners engaging in virtual and physical global experiences to broaden their perspectives. Students remained in Exploration mode for varying lengths of time depending on personal readiness — some found their direction in just three months, while others took up to eighteen months to sample interest areas, self-reflect, identify learning gaps, and build the confidence to move forward with intention.
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Educators worldwide, initially wary of offering such flexible and varied introductory experiences, soon developed a passion for curating Exploration modules. These bite-size introductions allowed them to interact with a far more diverse range of learners and to identify those who were naturally drawn to their domains of expertise, creating organic mentoring relationships that would flourish in the Mastery phase.
                 </p>
              </div>
              <div className="flex justify-center items-center">
                 <div className="w-48 h-64 bg-gray-100 p-4 border border-gray-300 transform -rotate-6">
                    <div className="w-full h-full border border-dashed border-gray-400"></div>
                 </div>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                 <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Mastery (Flexible duration: 6-36 months)</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Based on their experiences in the Exploration phase, learners chose areas of focus for deep study. The Mastery phase was highly personalized, with AI tutors adapting the pace and style of instruction to each student&apos;s needs. Learners could pursue multiple areas of Mastery simultaneously or sequentially, depending on their goals and cognitive patterns.
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Progress was measured through practical application and demonstration of skills rather than traditional exams. A unique feature was the &ldquo;Global Mastery Network,&rdquo; where students studying similar subjects across different cultures collaborated on projects, sharing diverse perspectives and approaches that enriched everyone&apos;s understanding.
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   The Mastery phase held a special place in the hearts of both educators and learners. Dedicated Mastery environments — part research lab, part creative studio, part collaborative workspace — were established in cities around the world. These spaces were designed to foster deep focus and meaningful mentorship, enabling learners to achieve levels of expertise that previously took decades, often in a fraction of the time.
                 </p>
              </div>
              <div>
                 <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Mastery phase"/>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                 <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Integration (Ongoing, with intensive periods of 3-12 months)</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   The Integration phase focused on applying knowledge to real-world challenges. Students engaged in a series of global internships, research projects, and entrepreneurial ventures, putting their skills to the test in diverse cultural and professional contexts. This phase was characterized by its flexibility, allowing students to cycle between periods of intensive real-world application and further study.
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   The boundaries between education and career became increasingly blurred, with lifelong learning becoming the norm. Integration was not a final step but an ongoing process — learners could return to Exploration or Mastery at any point in their lives, continuously expanding their capabilities and adapting to an ever-changing world.
                 </p>
              </div>
              <div>
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Integration phase"/>
              </div>
           </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>In Adaptive Paced Education:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Artemis eliminated the concept of fixed academic years, allowing students to progress at their optimal pace.</li>
              <li>Learning became a truly personalized experience, adaptable to individual needs, cultural contexts, and life circumstances.</li>
              <li>The stress of arbitrary deadlines was replaced by a focus on genuine mastery and practical application.</li>
              <li>Global collaboration became integral to the learning process, fostering cross-cultural understanding and innovation.</li>
              <li>The education system became more inclusive, accommodating diverse learning styles and life situations.</li>
              <li>Lifelong learning was normalized, with seamless transitions between periods of study and real-world application.</li>
              <li>Explore, focus, master, apply, reflect, adapt... and repeat: this was the experience of an Artemis learner in the era of Adaptive Paced Education.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-24">
          <div>
            <hr className="border-t border-gray-200 mb-12" />
            <SectionHeading>Exhibit Article Archive</SectionHeading>
            <p className="text-sm text-gray-600 mt-4">Browse below to search through video archives of the exhibits displayed on May 1st, 2100.</p>
          </div>

          <div className="space-y-12">
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 23</h3>
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <h4 className="font-bold italic uppercase tracking-wider text-sm">Chronos: The Learning Rhythm Optimizer</h4>
                  <p className="italic text-xs text-gray-500">Biometric Sensors, Cognitive Assessments, Holographic Interface</p>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                     <p>Chronos was the AI system at the heart of Adaptive Paced Education. Named after the Greek god of time, this advanced AI used a combination of biometric data, cognitive assessments, and learning analytics to determine each student&apos;s optimal learning rhythm.</p>
                     <p>Students wore non-invasive biometric sensors monitoring sleep patterns, stress levels, and cognitive load. Chronos analyzed this data to continuously adjust learning schedules and content delivery, ensuring that each learner was always operating in their zone of peak receptivity.</p>
                     <p>The holographic interface allowed students to visualize their learning journey as a dynamic, rhythmic pattern — a living map of their intellectual growth that pulsed and evolved in real time. Chronos didn&apos;t just optimize schedules; it helped learners understand themselves, transforming the invisible art of learning into something visible, tangible, and deeply personal.</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center text-white">
                    <span className="text-sm">Video placeholder</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 56</h3>
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <h4 className="font-bold italic uppercase tracking-wider text-sm">Global Synchrony Pods</h4>
                  <p className="italic text-xs text-gray-500">Immersive Telepresence Chambers, Real-Time Translation AI, Haptic Feedback Systems</p>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                     <p>Global Synchrony Pods were groundbreaking technology enabling truly immersive collaboration between students across the world, regardless of time zones or language barriers. Advanced telepresence technology created the illusion of being in the same physical space, while haptic feedback systems allowed students to manipulate virtual objects together.</p>
                     <p>Real-time translation AI eliminated language barriers entirely, allowing students to communicate naturally in their native tongues while their peers heard seamless translations. The pods themselves were sleek, egg-shaped chambers lined with adaptive neural displays that could simulate any environment — from a bustling marketplace in Marrakech to a serene laboratory in Kyoto.</p>
                     <p>Perhaps most remarkably, the Synchrony Pods learned from each session, gradually optimizing the collaborative experience for each group of students. They adjusted lighting, acoustics, and even virtual spatial arrangements to maximize creative flow and interpersonal connection, making global collaboration feel as natural as sitting across a table from a friend.</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center text-white">
                    <span className="text-sm">Video placeholder</span>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
      <ExploreAnotherFuture currentPage="adaptive-paced-education" goTo={goTo} />
    </>
  );
}
