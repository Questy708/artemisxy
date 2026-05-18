'use client';

import { Play } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function PacedEducationPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader 
        title="Adaptive Paced Learning"
        description="Calibrate. Elevate. Activate. In 2100, we reflect on how Artemis replaced the archaic Freshman-Senior model with a three-stage learning lifecycle attuned to each individual's cognitive and emotional rhythm."
        bgGradientClass="bg-[#007f9c]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        
        <section className="space-y-6">
          <SectionHeading>The Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Immerse yourself in a virtual time capsule to discover how Artemis transformed education worldwide through Adaptive Paced Learning — a system where progress is measured by mastery and readiness, not by semesters and seat time.
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
                The global education landscape was marked by arbitrary timelines, standardized curricula, and a one-size-fits-all approach that failed to account for individual learning styles, cultural differences, and the varying pace at which students mastered different subjects. This system led to burnout, imposter syndrome, and a disconnect between education and real-world applicability.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Higher education was an expensive staging ground between an overly supervised adolescence and a wildly complicated adulthood. College needed to regain its place as the experience that taught students how to be perpetual learners and to apply skills to the world outside its walls.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The age of complexity had begun — and with it, the recognition that pacing education by the calendar rather than the learner was not just inefficient, but actively harmful.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading>The Shift</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p>From the 19th century until 2025, most educational institutions adhered to fixed academic years and standardized progression. Recognizing the limitations, Artemis introduced Adaptive Paced Learning — a three-stage lifecycle that replaced the archaic Freshman-Sophomore-Junior-Senior model with something far more human: Calibrate, Elevate, Activate.</p>
              <p>The shift was not merely structural but philosophical. The old model assumed all 18-year-olds were ready for the same challenges at the same time. Adaptive Paced Learning assumed the opposite: that every learner arrives at understanding on their own schedule, and that forcing pace creates the illusion of learning without its substance.</p>
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Adaptive Paced Learning"/>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Three Stages</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Calibrate (Variable duration: 3–18 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Calibrate phase replaces the traditional &ldquo;freshman year&rdquo; with something more intentional. Here, learners embark on a journey of self-discovery and broad exposure. Using the Cognitive Biofeedback Mirror — a revolutionary tool that visualizes a learner&apos;s cognitive patterns, emotional states, and learning preferences in real time — students gain unprecedented insight into how they actually learn.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cultural exchange is a key component, with learners engaging in virtual and physical global experiences. Students remain in Calibrate mode for varying lengths of time depending on personal readiness — some find their direction in just three months, while others take up to eighteen months to sample interest areas, self-reflect, and build the confidence to move forward with intention.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Educators worldwide, initially wary of such flexible introductory experiences, soon developed a passion for curating Calibrate modules. These bite-size introductions allowed them to interact with a far more diverse range of learners and identify those naturally drawn to their domains.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-48 h-64 bg-gradient-to-br from-cyan-50 to-teal-50 p-4 border border-gray-300 transform -rotate-3">
                <div className="w-full h-full border border-dashed border-teal-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-serif italic text-teal-400">C</span>
                    <p className="text-[10px] text-teal-400 uppercase tracking-widest mt-2">Calibrate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Elevate (Flexible duration: 6–36 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Based on their Calibrate experiences, learners choose areas of focus for deep study. The Elevate phase is highly personalized, with AI tutors adapting the pace and style of instruction to each student&apos;s needs. Progress is measured through practical application and demonstration of skills rather than traditional exams.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                A unique feature is the &ldquo;Global Mastery Network,&rdquo; where students studying similar subjects across different cultures collaborate on projects, sharing diverse perspectives that enrich everyone&apos;s understanding. Dedicated Elevate environments — part research lab, part creative studio, part collaborative workspace — were established in cities around the world, fostering deep focus and meaningful mentorship.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Elevate is where the Chronos AI system becomes most active. Named after the Greek god of time, Chronos continuously monitors each learner&apos;s biometric signals — sleep quality, stress levels, cognitive load — and adjusts schedules, content delivery, and even environmental factors like lighting and sound to ensure each learner is operating in their zone of peak receptivity.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Elevate phase"/>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Activate (Ongoing, with intensive periods of 3–12 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Activate phase focuses on applying knowledge to real-world challenges. Students engage in global internships, research projects, and entrepreneurial ventures, putting their skills to the test in diverse cultural and professional contexts. This phase is characterized by its flexibility, allowing students to cycle between periods of intensive real-world application and further study.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The boundaries between education and career become increasingly blurred, with lifelong learning becoming the norm. Activate is not a final step but an ongoing process — learners can return to Calibrate or Elevate at any point in their lives, continuously expanding their capabilities and adapting to an ever-changing world.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Activate phase"/>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Emotional Intelligence at the Core</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">The Cognitive Biofeedback Mirror</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                One of the most transformative innovations in Adaptive Paced Learning was the Cognitive Biofeedback Mirror — a system that made the invisible dynamics of learning visible. Using non-invasive biometric sensors, the Mirror provided real-time feedback on cognitive load, emotional state, attention patterns, and stress responses. Learners could literally see when they were in flow, when they were struggling, and when they needed rest.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Mirror didn&apos;t just optimize academic performance — it cultivated emotional intelligence. By making students aware of their own cognitive patterns, it taught them to recognize and regulate their emotional responses to challenge, uncertainty, and failure. This meta-cognitive awareness became one of the most valued outcomes of an Artemis education, producing graduates who were not only knowledgeable but emotionally resilient.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Chronos AI: The Rhythm Keeper</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Chronos was the AI system at the heart of Adaptive Paced Learning. It used biometric data, cognitive assessments, and learning analytics to determine each student&apos;s optimal learning rhythm. Students wore non-invasive biometric sensors monitoring sleep patterns, stress levels, and cognitive load. Chronos analyzed this data to continuously adjust learning schedules and content delivery.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                But Chronos was more than a scheduler — it was a learning companion that helped students understand themselves. The holographic interface allowed students to visualize their learning journey as a dynamic, rhythmic pattern — a living map of their intellectual growth that pulsed and evolved in real time. Chronos transformed the invisible art of learning into something visible, tangible, and deeply personal.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>In Adaptive Paced Learning:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Artemis eliminated the concept of fixed academic years, replacing Freshman-Senior with Calibrate-Elevate-Activate</li>
              <li>Learning became truly personalized, adaptable to individual needs, cultural contexts, and life circumstances</li>
              <li>Emotional intelligence was elevated to a core competency through the Cognitive Biofeedback Mirror</li>
              <li>The stress of arbitrary deadlines was replaced by a focus on genuine mastery and practical application</li>
              <li>Global collaboration became integral, fostering cross-cultural understanding and innovation</li>
              <li>The system became more inclusive, accommodating diverse learning styles and life situations</li>
              <li>Calibrate, elevate, activate, reflect, adapt... and repeat: this was the experience of an Artemis learner.</li>
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
                     <p>Chronos was the AI system at the heart of Adaptive Paced Learning. Named after the Greek god of time, this advanced AI used biometric data, cognitive assessments, and learning analytics to determine each student&apos;s optimal learning rhythm.</p>
                     <p>Students wore non-invasive biometric sensors monitoring sleep patterns, stress levels, and cognitive load. Chronos analyzed this data to continuously adjust learning schedules and content delivery, ensuring that each learner was always operating in their zone of peak receptivity.</p>
                     <p>The holographic interface allowed students to visualize their learning journey as a dynamic, rhythmic pattern — a living map of their intellectual growth that pulsed and evolved in real time. Chronos didn&apos;t just optimize schedules; it helped learners understand themselves.</p>
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
                  <h4 className="font-bold italic uppercase tracking-wider text-sm">The Cognitive Biofeedback Mirror</h4>
                  <p className="italic text-xs text-gray-500">Neural Display Arrays, Emotional Resonance Mapping, Real-Time Biofeedback</p>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                     <p>The Cognitive Biofeedback Mirror was perhaps the most personally transformative technology in Adaptive Paced Learning. It rendered a learner&apos;s cognitive and emotional state as a living visual portrait — part data visualization, part mirror, part mentor. Students could see their attention patterns, emotional responses, and cognitive load rendered in real time as shifting colors, forms, and rhythms.</p>
                     <p>The Mirror made the invisible visible. It taught learners to recognize when they were in flow, when they were pushing too hard, and when they needed to step back and integrate. Over time, students developed an almost instinctive awareness of their own cognitive rhythms — a skill that served them far beyond the classroom and into every challenging moment of their professional and personal lives.</p>
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
      <ExploreAnotherFuture currentPage="adaptive-paced-learning" goTo={goTo} />
    </>
  );
}
