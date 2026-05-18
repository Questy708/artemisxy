'use client';

import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function OpenLoopPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="Open Loop Learning"
        description="We look back from 2100 at the era when Artemis redefined lifelong education, making it an adaptable, continuous journey rather than a linear path."
        bgGradientClass="bg-gradient-to-tr from-[#66B83B] via-[#7BCE44] to-[#4A9F2F]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Step into a virtual time capsule to discover how Artemis reshaped education worldwide through Open Loop Learning, where learners can enter and re-enter the educational system at any point in their lives.
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
            <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 text-xs font-mono border border-black/10">
              BOX_ID: OL_137.191.63<br/>
              CONTENTS:_OPEN_LOOP
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Key Details</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
            {/* Left Column */}
            <div className="space-y-8 relative">
              <div className="absolute -top-16 left-0 opacity-10 text-[120px] italic font-serif leading-none pointer-events-none text-[#66B83B]">Four</div>
              <h3 className="text-xl leading-relaxed font-normal bg-white relative z-10 p-2">
                Education was primarily segmented into distinct phases: primary, secondary, and tertiary, followed by professional development. The assumption was that learning happened in sequential stages, with a clear beginning and end.
              </h3>

              <div className="h-40 flex items-center justify-center border-b border-gray-200 relative">
                <svg width="100%" height="100%" viewBox="0 0 400 100" className="absolute stroke-black stroke-2 fill-none stroke-current text-gray-800">
                  <path d="M 0,50 L 50,50 L 50,20 L 150,20 L 150,80 L 200,80 L 200,50 L 400,50" />
                </svg>
              </div>

              <ul className="text-xs text-gray-600 space-y-3 divide-y divide-gray-100">
                 <li className="pt-2">Fixed 4-year degree window</li>
                 <li className="pt-2">Learning confined to classroom years</li>
                 <li className="pt-2">Limited access to academic settings later in life</li>
                 <li className="pt-2">Adults returning to school overwhelmed by outdated curricula</li>
                 <li className="pt-2">&ldquo;Lifelong learning&rdquo; discussed but rarely implemented</li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="space-y-8 relative">
              <div className="absolute -top-16 left-0 opacity-10 text-[120px] italic font-serif leading-none pointer-events-none text-[#66B83B]">Loop</div>
              <h3 className="text-xl leading-relaxed font-normal bg-white relative z-10 p-2">
                Open Loop Learning discarded the idea of education as a linear process that ends with graduation, embracing continuous learning where individuals could enter and exit at any point.
              </h3>

              <div className="h-40 flex items-center justify-center border-b border-gray-200 relative">
                <svg width="100%" height="100%" viewBox="0 0 400 100" className="absolute stroke-black stroke-2 fill-none stroke-current text-gray-800">
                  <path d="M 0,50 Q 50,50 100,50 C 120,50 140,20 120,20 C 100,20 100,80 120,80 C 140,80 180,50 200,50 C 220,50 240,20 220,20 C 200,20 200,80 220,80 C 240,80 280,50 300,50 L 400,50" />
                </svg>
              </div>

              <ul className="text-xs text-gray-600 space-y-3 divide-y divide-gray-100">
                 <li className="pt-2">Flexible entry and exit points throughout life</li>
                 <li className="pt-2">Knowledge obtained across classrooms and real-world settings</li>
                 <li className="pt-2">Seasoned adults returned to pivot careers and reconnect</li>
                 <li className="pt-2">Students began studies at a range of ages</li>
                 <li className="pt-2">Populi returned as expert practitioners enriching campus life</li>
              </ul>
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
                In the early 21st century, education was primarily segmented into distinct phases: primary, secondary, and tertiary, followed by professional development in the workforce. The assumption was that learning happened in these sequential stages, with a clear beginning and end.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                However, the rapid pace of technological advancement, global interconnectivity, and the increasing complexity of societal challenges demanded a more fluid approach to education. The rigid structures of the traditional educational system began to show their limitations, as individuals struggled to adapt to ever-changing career landscapes and evolving personal aspirations.
              </p>
            </div>

            <div className="space-y-4 mt-8 md:mt-0">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">There Were Early Signs That A Change Was Needed.</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                The traditional education model left many graduates ill-prepared for modern life&apos;s complexities. Adults found themselves returning to school in their 30s, 40s, and beyond, often overwhelmed by the outdated curricula and disconnected from the younger generations who dominated the classrooms. The concept of &ldquo;lifelong learning&rdquo; was often discussed but rarely implemented in a meaningful way.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Shift</SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                The shift towards Open Loop Learning began in the late 2020s as universities and educational institutions recognized the need for a more flexible and inclusive approach to learning. This new model discarded the idea of education as a linear process that ends with graduation. Instead, it embraced the concept of continuous learning, where individuals could enter and exit the educational system at any point in their lives, depending on their needs and interests.
              </p>
              <p>
                Rather than confining education to a narrow window of early adulthood, Open Loop Learning acknowledged that human curiosity and professional reinvention could spark at any age. Institutions began dismantling the rigid prerequisites and age-based admissions criteria that had long excluded capable learners from accessing world-class education.
              </p>
            </div>

            <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
               <p>
                The Open Loop Learning model fundamentally restructured how Artemis engaged with its learners across the entire arc of their lives. No longer was enrollment a one-time event; it became an ongoing relationship, with learners returning at pivotal moments to deepen expertise, shift directions, or reconnect with intellectual community.
               </p>
              <div className="w-full flex justify-center">
                <svg width="200" height="80" viewBox="0 0 200 80" className="stroke-black stroke-1 fill-none">
                    <rect x="10" y="20" width="30" height="40" className="fill-white stroke-black stroke-2"/>
                    <text x="25" y="45" textAnchor="middle" className="fill-black stroke-none font-bold text-xl">A</text>
                    <path d="M 40,40 C 60,40 60,60 80,60 M 80,60 C 100,60 100,60 120,60 M 120,60 L 130,50 L 140,60 L 150,60 L 160,50 L 170,60 L 190,60" />
                    <circle cx="80" cy="60" r="2" className="fill-black"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
             <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">The Open Loop Learning Model</h4>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    By the time it was fully adopted, the new model had some key characteristics. <strong>Flexible Entry and Exit Points</strong> allowed learners to begin their studies at any age, pausing and resuming as their life circumstances demanded. The traditional pressure to complete a degree within a fixed timeframe evaporated, replaced by a culture that valued depth of experience alongside academic achievement.
                  </p>
                  <p>
                    <strong>Personalized Learning Paths</strong>, powered by AI and data analytics, ensured that each learner&apos;s journey was tailored to their unique goals, prior knowledge, and learning style. <strong>Interdisciplinary Learning</strong> broke down the silos between departments, encouraging students to weave together knowledge from multiple fields to address complex, real-world problems. <strong>Micro-Credentials and Stackable Degrees</strong> offered modular certifications that could be accumulated over time, providing tangible milestones and recognized qualifications at every stage. <strong>Mentorship and Community Support</strong> connected learners with experienced practitioners who guided them through both academic and professional challenges, fostering a vibrant ecosystem of shared knowledge and mutual growth.
                  </p>
                </div>
             </div>
             <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">From Alumni to Populi</h4>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    No longer considered alumni, returning learners coming back for a mid-career loop took advantage of on-campus and virtual course offerings to launch new chapters of their professional lives. They often provided inspiration and insight that accelerated research in labs and enriched classroom discourse. Faculty enjoyed new collegial relationships with these accomplished practitioners, creating a dynamic interplay between theory and practice that elevated the entire institution.
                  </p>
                  <p>
                    Open Loop Learning pioneer noted, &ldquo;Where we once had an association of alumni looking fondly back at Artemis as just one time in their lives, we now have a populi of ongoing learners who know that Artemis is there&mdash;and theirs&mdash;throughout a lifetime. These learners&apos; deep engagement with the University means we have an activated, distributed Artemis network around the world who are connected whether they are on-campus in residence or not.&rdquo;
                  </p>
                </div>
             </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>Open Loop Learning:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>De-stigmatized a range of legitimate patterns of learning so that students used their time and investment wisely and for greater impact</li>
              <li>Provided a way for adults at any stage to pivot careers with academic grounding and reconnect with meaningful social contexts</li>
              <li>Revitalized Artemis with a broader mix of students by creating on-ramps at many ages; enabled populations traditionally underrepresented at elite institutions to gain greater access</li>
              <li>The traditional divide between education and work blurred, with learning and professional development becoming an integrated, ongoing process</li>
              <li>Developed a distributed engagement model to maintain the broader network of Artemis populi</li>
              <li>Capitalized on the remarkable accomplishments of its populi through the invitation to return as expert practitioners</li>
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
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 101</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">AI-Driven Personalized Learning Platforms</h4>
                <p className="italic text-xs text-gray-500">Archived research and documentation from 2028&ndash;2045</p>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>Advanced AI systems revolutionized personalized learning by analyzing data from millions of learners to create customized educational experiences. These platforms adapt in real-time to the learner&apos;s progress, offering tailored content and feedback. By leveraging machine learning algorithms, natural language processing, and behavioral analytics, the platforms could identify knowledge gaps, predict learning difficulties, and dynamically adjust the difficulty and pacing of material to keep each learner in their optimal zone of development.</p>
                  <p>The impact was profound: completion rates soared, learner satisfaction reached unprecedented levels, and the gap between different socioeconomic groups narrowed significantly as AI tutors provided one-on-one guidance that had previously been available only to the privileged few. These systems also enabled Artemis to serve a globally distributed population of learners, each with unique backgrounds, goals, and constraints.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                  <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                </div>
                <p className="text-xs text-gray-500 italic">Watch the AI-Driven Learning Platform demonstration.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <div className="bg-gray-100 aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" alt="AI Learning Platform" className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                  <p className="text-xs text-gray-500">Early AI-driven personalized learning interface.</p>
               </div>
               <div className="space-y-2">
                  <div className="bg-gray-100 aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Learning analytics" className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                  <p className="text-xs text-gray-500">Learning analytics dashboard in use.</p>
               </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 102</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">The Rise of Micro-Credentials</h4>
                <p className="italic text-xs text-gray-500">Policy documents and implementation records from 2030&ndash;2050</p>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>Micro-credentials became the new standard in education, allowing learners to acquire specific skills and knowledge quickly. These credentials can be stacked over time to build comprehensive qualifications, offering a flexible alternative to traditional degrees. Rather than requiring years of continuous enrollment, micro-credentials broke learning into discrete, verifiable units that could be earned in weeks or months, immediately applied in professional settings, and combined incrementally toward larger certifications.</p>
                  <p>Employers embraced micro-credentials as a more precise signal of competency than traditional degree titles, which often obscured the specific capabilities a graduate possessed. At Artemis, the micro-credential ecosystem became a thriving marketplace of knowledge, with learners assembling unique portfolios that reflected not just what they had studied, but what they could demonstrably do. The stackable nature of these credentials ensured that no learning was ever lost&mdash;each module built upon the last, creating a coherent and cumulative record of achievement.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                  <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                </div>
                <p className="text-xs text-gray-500 italic">Watch the Micro-Credentials explainer video.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 103</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">The Role of Mentorship in Open-Loop Learning</h4>
                <p className="italic text-xs text-gray-500">Case studies and mentorship program records from 2032&ndash;2060</p>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>Mentorship became a cornerstone of the Open-Loop Learning model. Learners are paired with mentors who guide them through their educational journey, offering insights, support, and real-world experience. Unlike traditional academic advising, which focused primarily on course selection and degree requirements, the mentorship framework within Open Loop Learning addressed the whole person&mdash;their career aspirations, personal development, and evolving sense of purpose.</p>
                  <p>Mentors were drawn from Artemis&apos;s vast network of populi, creating a virtuous cycle where those who had benefited from the Open Loop system returned to guide the next generation. This intergenerational exchange enriched both parties: mentors found renewed inspiration and perspective, while mentees gained access to wisdom that no textbook could provide. The mentorship program also served as a powerful retention mechanism, as learners who felt personally connected to someone who had walked a similar path were far more likely to persist through the inevitable challenges of their educational journey.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                  <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                </div>
                <p className="text-xs text-gray-500 italic">Watch the Mentorship in Open-Loop Learning documentary.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-12">
             <h4 className="text-center font-bold text-sm uppercase tracking-widest text-gray-900">View Open Loop Learning Gallery</h4>
             <div className="w-full aspect-[2/1] relative overflow-hidden bg-gray-100 border border-t border-b border-gray-200 flex items-center justify-center flex-col p-12 text-center text-gray-800">
                <p className="text-xl md:text-3xl font-serif italic max-w-2xl text-black">
                  &ldquo;I looped out after 2 years at Artemis to observe and reflect on the role of nonviolent communication in international policy.&rdquo;
                </p>
                <p className="mt-8 text-lg md:text-2xl font-serif italic max-w-xl text-black">
                  &ldquo;After my time in Tibet and at the UN, what I was studying at Artemis made sense.&rdquo;
                </p>
                <div className="absolute inset-0 z-10 pointer-events-none">
                   <svg width="100%" height="100%" preserveAspectRatio="none" className="stroke-[#66B83B] stroke-2 fill-none overflow-visible">
                      <path d="M 0,200 Q 150,50 300,200 T 600,200 T 900,100" />
                   </svg>
                </div>
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply" alt="Gallery preview" />
             </div>
             <div className="flex justify-center items-center gap-4 py-4">
                <ChevronLeft className="w-6 h-6 text-gray-400 cursor-pointer" />
                <div className="flex gap-2 opacity-50">
                  <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=100" className="w-12 h-16 object-cover border" alt="thumb"/>
                  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=100" className="w-12 h-16 object-cover border" alt="thumb"/>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100" className="w-12 h-16 object-cover border" alt="thumb"/>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 cursor-pointer" />
             </div>
          </div>
        </section>
      </div>
      <ExploreAnotherFuture currentPage="open-loop-learning" goTo={goTo} />
    </>
  );
}
