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
        bgGradientClass="bg-[#8A0000]"
        bgImage="https://images.pexels.com/photos/8862305/pexels-photo-8862305.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        
        <section className="space-y-6">
          <SectionHeading>The Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Immerse yourself in a virtual time capsule to discover how Artemis transformed education worldwide through Adaptive Paced Learning — a system where progress is measured by mastery and readiness, not by semesters and seat time.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img 
              src="https://images.pexels.com/photos/8862305/pexels-photo-8862305.jpeg?auto=compress&cs=tinysrgb&w=2500" 
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
            <SectionHeading>The Lifecycle</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-2xl">The Freshman-to-Senior ladder was replaced by a three-phase lifecycle — each phase attuned to a different mode of growth. A learner does not advance by calendar, but by readiness.</p>
          <div className="w-full max-w-4xl mx-auto">
            <svg viewBox="0 0 900 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* Connecting arrows */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af"/>
                </marker>
              </defs>
              
              {/* Phase 1: Calibrate */}
              <g transform="translate(50,40)">
                <rect x="0" y="0" width="230" height="200" rx="4" fill="#fef2f2" stroke="#8A0000" strokeWidth="2"/>
                <rect x="0" y="0" width="230" height="48" rx="4" fill="#8A0000"/>
                <text x="115" y="30" textAnchor="middle" fill="white" style={{fontSize:'14px', fontWeight:'bold', letterSpacing:'0.1em'}}>CALIBRATE</text>
                <text x="115" y="68" textAnchor="middle" fill="#8A0000" style={{fontSize:'10px', fontWeight:'bold'}}>3–18 MONTHS</text>
                {/* Waveform - exploring */}
                <path d="M 30,110 Q 55,80 80,110 T 130,110 T 180,110 T 200,110" fill="none" stroke="#8A0000" strokeWidth="2" opacity="0.5"/>
                <circle cx="50" cy="130" r="4" fill="#8A0000" opacity="0.3"/>
                <circle cx="90" cy="130" r="6" fill="#8A0000" opacity="0.4"/>
                <circle cx="140" cy="130" r="8" fill="#8A0000" opacity="0.5"/>
                <circle cx="190" cy="130" r="5" fill="#8A0000" opacity="0.3"/>
                <text x="115" y="170" textAnchor="middle" fill="#6b7280" style={{fontSize:'9px'}}>Explore · Sample · Reflect</text>
                <text x="115" y="185" textAnchor="middle" fill="#6b7280" style={{fontSize:'9px'}}>Find your direction</text>
              </g>
              
              {/* Arrow 1 */}
              <line x1="290" y1="140" x2="330" y2="140" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Phase 2: Elevate */}
              <g transform="translate(335,40)">
                <rect x="0" y="0" width="230" height="200" rx="4" fill="#fef2f2" stroke="#8A0000" strokeWidth="2"/>
                <rect x="0" y="0" width="230" height="48" rx="4" fill="#6B0000"/>
                <text x="115" y="30" textAnchor="middle" fill="white" style={{fontSize:'14px', fontWeight:'bold', letterSpacing:'0.1em'}}>ELEVATE</text>
                <text x="115" y="68" textAnchor="middle" fill="#6B0000" style={{fontSize:'10px', fontWeight:'bold'}}>6–36 MONTHS</text>
                {/* Ascending bars - deepening */}
                <rect x="40" y="150" width="20" height="30" rx="2" fill="#6B0000" opacity="0.3"/>
                <rect x="70" y="130" width="20" height="50" rx="2" fill="#6B0000" opacity="0.4"/>
                <rect x="100" y="110" width="20" height="70" rx="2" fill="#6B0000" opacity="0.5"/>
                <rect x="130" y="95" width="20" height="85" rx="2" fill="#6B0000" opacity="0.6"/>
                <rect x="160" y="80" width="20" height="100" rx="2" fill="#6B0000" opacity="0.7"/>
                <text x="115" y="170" textAnchor="middle" fill="#6b7280" style={{fontSize:'9px'}}>Focus · Deepen · Master</text>
                <text x="115" y="185" textAnchor="middle" fill="#6b7280" style={{fontSize:'9px'}}>Build your expertise</text>
              </g>
              
              {/* Arrow 2 */}
              <line x1="575" y1="140" x2="615" y2="140" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Phase 3: Activate */}
              <g transform="translate(620,40)">
                <rect x="0" y="0" width="230" height="200" rx="4" fill="#fef2f2" stroke="#8A0000" strokeWidth="2"/>
                <rect x="0" y="0" width="230" height="48" rx="4" fill="#4A0000"/>
                <text x="115" y="30" textAnchor="middle" fill="white" style={{fontSize:'14px', fontWeight:'bold', letterSpacing:'0.1em'}}>ACTIVATE</text>
                <text x="115" y="68" textAnchor="middle" fill="#4A0000" style={{fontSize:'10px', fontWeight:'bold'}}>3–12 MONTHS (ONGOING)</text>
                {/* Radiating lines - deploying */}
                <circle cx="115" cy="120" r="25" fill="none" stroke="#4A0000" strokeWidth="2" opacity="0.5"/>
                <circle cx="115" cy="120" r="40" fill="none" stroke="#4A0000" strokeWidth="1.5" opacity="0.3"/>
                <circle cx="115" cy="120" r="55" fill="none" stroke="#4A0000" strokeWidth="1" opacity="0.15"/>
                <circle cx="115" cy="120" r="6" fill="#4A0000"/>
                <text x="115" y="170" textAnchor="middle" fill="#6b7280" style={{fontSize:'9px'}}>Apply · Deploy · Impact</text>
                <text x="115" y="185" textAnchor="middle" fill="#6b7280" style={{fontSize:'9px'}}>Change the world</text>
              </g>

              {/* Return loop arrow */}
              <path d="M 735,250 Q 450,290 165,250" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="6,4" markerEnd="url(#arrowhead)"/>
              <text x="450" y="272" textAnchor="middle" fill="#9ca3af" style={{fontSize:'9px', fontStyle:'italic'}}>Return to any phase at any time — learning never ends</text>
            </svg>
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
               <img src="https://images.pexels.com/photos/8862305/pexels-photo-8862305.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full object-cover" alt="Adaptive Paced Learning"/>
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
              <div className="w-48 h-64 bg-gradient-to-br from-gray-50 to-gray-100 p-4 border border-gray-300 transform -rotate-3">
                <div className="w-full h-full border border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-serif italic text-gray-400">C</span>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">Calibrate</p>
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
              <img src="https://images.pexels.com/photos/8862305/pexels-photo-8862305.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full object-cover" alt="Elevate phase"/>
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
              <img src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full object-cover" alt="Activate phase"/>
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
          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>Adaptive Paced Learning dismantled the tyranny of the academic calendar, replacing it with a system that honoured the individual rhythm of every learner.</p>
          </div>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Eliminated fixed academic years (2035–2050):</strong> Freshman-Senior was replaced by Calibrate-Elevate-Activate — a lifecycle attuned to cognitive and emotional readiness, not the calendar. By 2045, no major university on any continent still used the four-year class designation system. The old vocabulary had become a historical curiosity.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Truly personalized learning (2040–2065):</strong> Pace and style adapted to individual needs, cultural contexts, and life circumstances through Chronos AI. Students who had once been labeled &ldquo;slow&rdquo; or &ldquo;gifted&rdquo; discovered that these categories dissolved entirely when the system bent to the learner instead of the reverse.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Emotional intelligence elevated (2042–2070):</strong> The Cognitive Biofeedback Mirror made meta-cognitive awareness a core competency, producing graduates who were emotionally resilient. Employers consistently ranked Artemis graduates highest in conflict resolution, collaborative problem-solving, and adaptive leadership — skills that no standardized test had ever measured.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Mastery over deadlines (2038–2055):</strong> The stress of arbitrary deadlines was replaced by a focus on genuine mastery and practical application. Anxiety-related dropout rates at Artemis fell below 2% — compared to the 30% attrition that had plagued the old system — proving that rigor and well-being were not opposites but prerequisites for each other.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Global collaboration integral (2045–2075):</strong> Cross-cultural understanding and innovation became woven into every phase of learning. By 2070, the average Artemis student had collaborated with peers in over 15 countries before completing the Activate phase — a statistic that would have been inconceivable under the old model.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Inclusive by design (2040–2060):</strong> Diverse learning styles and life situations accommodated — the system bent to the learner, not the learner to the system. Adaptive Paced Learning became the model that disability rights advocates had been demanding for decades: universal design not as accommodation, but as architecture.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">The Artemis rhythm (2050–2100):</strong> Calibrate, elevate, activate, reflect, adapt — and repeat. This became the lived experience of every Artemis learner. The rhythm became so intuitive that by the 2080s, populi reported unconsciously applying the Calibrate-Elevate-Activate cycle to every new challenge in their professional and personal lives.</span>
            </li>
          </ul>
          <div className="mt-8">
            <blockquote className="border-l-4 border-[#8A0000] pl-6 space-y-4">
              <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                &ldquo;I spent fourteen months in Calibrate. My advisor said that was fine — that readiness wasn&apos;t a race. She was right. When I finally elevated, I elevated with purpose.&rdquo;
              </p>
              <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                &mdash; Navigator, Class of 2071
              </footer>
            </blockquote>
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
