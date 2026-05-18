'use client';

import { Play } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function PurposeLearningPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader 
        title="The Artemis Oath"
        description="Every learner takes an oath to pursue something that matters. A look back from 2100 to the era when Artemis students declared what they would change in the world — and built their education around that commitment."
        bgGradientClass="bg-[#f2b90f]"
        bgImage="https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        
        <section className="space-y-6">
          <SectionHeading>The Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Dive into archival footage from the future to uncover how learning paths were revolutionized at the University of Artemis through The Artemis Oath — where every learner takes an oath to pursue something that matters, aligning their education with personal and societal missions that anchor the entire Artemis vision in impact.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img 
              src="https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg?auto=compress&cs=tinysrgb&w=2500" 
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
            <SectionHeading>Historical Notes</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Setting</h4>
              <p className="font-bold italic text-sm text-gray-800 leading-relaxed">
                At the turn of the 21st century, higher education often felt disconnected from the practical needs and aspirations of students. A growing desire emerged for an education that connected academic learning with real-world impact.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The rigid structure of majors stifled aspirations, disconnecting academic pursuits from personal passions and societal needs. Bodies like the Association of American Colleges and Universities noted that high-impact educational practices such as Service Learning and Capstone Courses consistently outpaced traditional methods in student retention and engagement.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Following the boom and bust cycle of the 2nd Great Tech Bubble, generations of students who had once aspired to catch &ldquo;startup fever&rdquo; began to question the viability — and desirability — of those pathways. The millennial generation, once derided as self-involved &ldquo;slacktivists,&rdquo; had matured into leaders who considered social impact alongside financial impact.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                This generational evolution signaled a profound cultural transformation — one that would demand an equally profound transformation in how universities conceived of the educational journey itself. The question was no longer &ldquo;what will you study?&rdquo; but &ldquo;what will you change?&rdquo;
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading>The Shift</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p>Recognizing the need for a more integrated and purpose-driven approach, Artemis introduced The Artemis Oath. This new paradigm required every learner to take an oath — a personal commitment to pursue something that matters — and encouraged students to declare a mission instead of a major, combining their academic studies with a clear, mission-driven focus anchored in societal impact.</p>
              <p>&ldquo;I&apos;m a biology major&rdquo; was replaced by &ldquo;I&apos;m learning human biology to eliminate world hunger.&rdquo; Or &ldquo;I&apos;m learning Computer Science and Political Science to rebuild how citizens engage with their governments.&rdquo;</p>
              <p>The goal was to help students select a meaningful course of study while in school, and then scaffold a clear arc for the first 10–15 years of their professional lives. It wasn&apos;t about the career trajectory, but the reasons behind it.</p>
              <p>This reorientation fundamentally changed the culture of Artemis. Conversations shifted from &ldquo;What are you majoring in?&rdquo; to &ldquo;What problem are you solving?&rdquo; Faculty reported that students arrived to class not merely prepared, but possessed by a sense of urgency and relevance that elevated every seminar and lab.</p>
            </div>
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 340 400" className="w-full max-w-[320px]" xmlns="http://www.w3.org/2000/svg">
                {/* Oath Scroll */}
                <rect x="40" y="20" width="260" height="360" rx="8" fill="#fffbeb" stroke="#f2b90f" strokeWidth="2"/>
                <rect x="40" y="20" width="260" height="40" rx="8" fill="#f2b90f"/>
                <text x="170" y="46" textAnchor="middle" fill="white" style={{fontSize:'14px', fontWeight:'bold', letterSpacing:'0.15em'}}>THE ARTEMIS OATH</text>
                
                {/* Seal */}
                <circle cx="170" cy="100" r="30" fill="none" stroke="#d6a40d" strokeWidth="2"/>
                <circle cx="170" cy="100" r="22" fill="none" stroke="#d6a40d" strokeWidth="1"/>
                <text x="170" y="96" textAnchor="middle" fill="#d6a40d" style={{fontSize:'8px', fontWeight:'bold'}}>ARTEMIS</text>
                <text x="170" y="108" textAnchor="middle" fill="#d6a40d" style={{fontSize:'7px'}}>2100</text>
                
                {/* Oath text lines */}
                <text x="170" y="155" textAnchor="middle" fill="#92400e" style={{fontSize:'10px', fontStyle:'italic'}}>I declare not a major,</text>
                <text x="170" y="172" textAnchor="middle" fill="#92400e" style={{fontSize:'10px', fontStyle:'italic'}}>but a mission.</text>
                
                <line x1="80" y1="188" x2="260" y2="188" stroke="#e5e7eb" strokeWidth="0.5"/>
                
                <text x="170" y="210" textAnchor="middle" fill="#78716c" style={{fontSize:'9px'}}>I commit my learning</text>
                <text x="170" y="225" textAnchor="middle" fill="#78716c" style={{fontSize:'9px'}}>to the service of</text>
                <text x="170" y="240" textAnchor="middle" fill="#78716c" style={{fontSize:'9px'}}>something that matters.</text>
                
                <line x1="80" y1="258" x2="260" y2="258" stroke="#e5e7eb" strokeWidth="0.5"/>
                
                {/* Signature line */}
                <line x1="80" y1="310" x2="220" y2="310" stroke="#a8a29e" strokeWidth="1"/>
                <text x="150" y="325" textAnchor="middle" fill="#a8a29e" style={{fontSize:'8px'}}>Learner&apos;s Signature</text>
                
                <line x1="80" y1="350" x2="220" y2="350" stroke="#a8a29e" strokeWidth="1"/>
                <text x="150" y="365" textAnchor="middle" fill="#a8a29e" style={{fontSize:'8px'}}>Witness</text>
                
                {/* Decorative corners */}
                <line x1="50" y1="30" x2="50" y2="55" stroke="#d6a40d" strokeWidth="1" opacity="0.4"/>
                <line x1="50" y1="30" x2="75" y2="30" stroke="#d6a40d" strokeWidth="1" opacity="0.4"/>
                <line x1="290" y1="30" x2="290" y2="55" stroke="#d6a40d" strokeWidth="1" opacity="0.4"/>
                <line x1="290" y1="30" x2="265" y2="30" stroke="#d6a40d" strokeWidth="1" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Components</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">Mission Identification</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Upon entering Artemis, students undergo a comprehensive orientation that includes workshops, mentorship sessions, and reflective practices designed to help them identify their core passions and the societal challenges they wish to address. These immersive experiences challenge them to articulate not just what they want to study, but why it matters — to themselves and to the world.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trained facilitators and peer mentors help students navigate the often-uncomfortable space between ambition and uncertainty. By the end of orientation, every Artemis student has a drafted mission statement — a living document that will evolve alongside their intellectual and personal growth.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">Customized Curriculum</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                With their missions identified, students collaborate with faculty to design a personalized curriculum that integrates academic knowledge with practical projects. This curriculum is flexible and interdisciplinary, drawing from multiple Centers of Inquiry, research centers, and community partnerships.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rather than following a prescribed sequence of requirements, students build a learning pathway that might combine engineering, ethics, and public policy — or weave together art, data science, and urban planning. Faculty advisors serve as intellectual mentors, ensuring academic rigor is never sacrificed for breadth. The result is a curriculum that feels less like a requirement and more like a calling.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">Global Impact Labs</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Artemis established Impact Labs in diverse global locations, each focused on specific societal challenges. These labs provide students with immersive, hands-on experiences where they can apply their knowledge to real-world problems. From water sustainability in sub-Saharan Africa to renewable energy deployment in Southeast Asia, each Impact Lab is a living laboratory where theory meets practice.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Students spend a minimum of one semester at an Impact Lab, working alongside local communities, NGOs, and international experts. The labs are not volunteer tourism — they are rigorous, academically credited environments where students produce research, develop solutions, and build the intercultural competence essential for globally impactful careers.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">Reflective Practice</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Continuous reflection and adaptation are integral to The Artemis Oath. Regular check-ins with mentors and peers, reflective journaling, and portfolio reviews ensure that students remain aligned with their missions. These practices are not ancillary — they are woven into the academic structure itself, earning credit and institutional recognition.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The reflective framework helps students navigate the inevitable pivots that occur when ambition meets reality. A student who entered Artemis intent on eliminating world hunger might discover that their most effective contribution lies in agricultural technology policy rather than direct food aid. Reflective practice gives them permission — and a structured process — to evolve their mission without abandoning it.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Impact Stories</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">Yasmin Bhuhati — Clean Water Initiative in Africa</h4>
                <p className="text-xs text-gray-500 italic">&apos;24, MS ME &apos;28, PhD Microbiology &apos;32</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  During her impact year in Ghana, Yasmin worked on water and sanitation projects that would define the trajectory of her career. Partnering with local engineers and community health workers, she helped develop low-cost filtration systems adapted to the specific geological and cultural conditions of the region. Her work didn&apos;t stop at technical solutions — she also designed community education programs ensuring sustainability and adoption of new water infrastructure.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Her doctoral research pioneered new microbial detection methods that dramatically reduced the time required to identify waterborne contaminants. By the time she completed her PhD, her innovations had been adopted by public health agencies across three continents.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 aspect-video overflow-hidden">
                  <img src="https://images.pexels.com/photos/3662617/pexels-photo-3662617.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Clean Water Initiative" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">Juan Carlos Rodriguez — Renewable Energy Solutions in South America</h4>
                <p className="text-xs text-gray-500 italic">&apos;25, BS Engineering &apos;29</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Collaborated with local communities and international experts to design sustainable energy systems tailored to the unique needs of rural and urban populations across South America. His signature contribution was the development of modular solar micro-grids that could be assembled and maintained by local technicians with minimal training.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  His designs were open-source, enabling communities to replicate and adapt the systems without dependency on external suppliers. Within a decade of graduation, his frameworks had been implemented in fourteen countries, providing reliable electricity to communities that had never been connected to a central grid.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 aspect-video overflow-hidden">
                  <img src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Renewable Energy Solutions" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">Priya Sharma — Healthcare Innovation in Asia</h4>
                <p className="text-xs text-gray-500 italic">&apos;26, BS Biology &apos;30</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Developed telemedicine solutions and community health programs for remote areas that had long been underserved by traditional healthcare infrastructure. Working across villages in northern India and Nepal, Priya designed diagnostic protocols that could be administered by community health workers using low-cost mobile devices.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Her telemedicine platform, built during her time at an Artemis Impact Lab in Mumbai, eventually connected over 500 rural clinics with specialists in urban hospitals. The system incorporated AI-assisted triage that could prioritize urgent cases and translate between languages in real time, becoming a model for healthcare delivery across South and Southeast Asia.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 aspect-video overflow-hidden">
                  <img src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Healthcare Innovation" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>The Artemis Oath anchored the entire Artemis vision in impact — every dimension, from the Infinite Learning Continuum to SkillPrints, pointed toward this: learning in service of the world.</p>
          </div>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-[#d6a40d] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Relevance and motivation unlocked:</strong> Students found greater purpose by aligning their studies with societal missions — &ldquo;What&apos;s your verb?&rdquo; replaced &ldquo;What&apos;s your major?&rdquo;</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#d6a40d] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">The anchoring dimension:</strong> The Artemis Oath connected every other dimension — Infinite Learning, SkillPrints, Centers of Inquiry — into a coherent vision of impact-driven education</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#d6a40d] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Tangible community benefits:</strong> Students&apos; projects delivered measurable improvements in communities and societies around the world</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#d6a40d] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Whole-person development:</strong> Students grew academically, personally, and socially — prepared not just for careers, but for mission-driven lives</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#d6a40d] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">A new cultural vernacular:</strong> &ldquo;What&apos;s your verb?&rdquo; became the defining question of the Artemis experience — a shift from identity to action</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#d6a40d] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Endless contributions:</strong> An uncountable list of impact on poverty, health, infrastructure, renewable energy, global governance, space travel, and artistic and cultural achievement</span>
            </li>
          </ul>
          <div className="mt-8">
            <blockquote className="border-l-4 border-[#d6a40d] pl-6 space-y-4">
              <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                &ldquo;I declared a verb, not a major. My verb was &lsquo;restore.&rsquo; Every course, every project, every late night in the lab — it all pointed toward healing what was broken. That clarity changed everything.&rdquo;
              </p>
              <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                &mdash; Pathfinder, Class of 2058
              </footer>
            </blockquote>
          </div>
        </section>

      </div>
      <ExploreAnotherFuture currentPage="purpose-learning" goTo={goTo} />
    </>
  );
}
