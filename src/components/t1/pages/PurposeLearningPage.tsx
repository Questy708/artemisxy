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
        title="Purpose Learning"
        description="A look back from 2100 to the era when Artemis students began declaring missions, not majors, transforming education into a deeply personal and globally impactful journey."
        bgGradientClass="bg-[#f2b90f]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        
        <section className="space-y-6">
          <SectionHeading>The Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Dive into archival footage from the future to uncover how learning paths were revolutionized at the University of Artemis through Purpose Learning, where students align their education with personal and societal missions.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2500" 
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
                At the turn of the 21st century, higher education often felt disconnected from the practical needs and aspirations of students. Universities, including Artemis, recognized a growing desire among students for an education that connected academic learning with real-world impact.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                This shift was influenced by the rise of project-based learning in K-12 education, increased access to online learning, and a growing emphasis on social impact among younger generations. The rigid structure of majors often stifled their aspirations, disconnecting academic pursuits from personal passions and societal needs.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Bodies like the Association of American Colleges and Universities noted that high-impact educational practices such as Service Learning and Capstone Courses consistently outpaced traditional methods in rates of student retention and engagement.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Following the boom and bust cycle of the 2nd Great Tech Bubble, generations of students who had once aspired to catch &ldquo;startup fever,&rdquo; began to question the viability&mdash;and desirability&mdash;of those pathways.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The millennial generation, once derided as self-involved &ldquo;slacktivists&rdquo; content to click a button and sign a petition, had matured into leaders of companies and organizations that considered social impact as well as financial impact. This generational evolution signaled a profound cultural transformation&mdash;one that would demand an equally profound transformation in how universities conceived of the educational journey itself.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading>The Shift</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-600 leading-relaxed">
              <p>Recognizing the need for a more integrated and purpose-driven approach, Artemis introduced Purpose Learning. This new paradigm encouraged students to declare a mission instead of a major, allowing them to combine their academic studies with a clear, mission-driven focus.</p>
              <p className="pt-4">&ldquo;I&apos;m a biology major&rdquo; was replaced by &ldquo;I&apos;m learning human biology to eliminate world hunger.&rdquo; Or &ldquo;I&apos;m learning Computer Science and Political Science to rebuild how citizens engage with their governments.&rdquo;</p>
              <p className="pt-4">The goal was to help students select a meaningful course of study while in school, and then scaffold a clear arc for the first 10&ndash;15 years of their professional lives. It wasn&apos;t about the career trajectory, but the reasons behind it.</p>
              <p className="pt-4">This reorientation fundamentally changed the culture of Artemis. Conversations in hallways and dining halls shifted from &ldquo;What are you majoring in?&rdquo; to &ldquo;What problem are you solving?&rdquo; Course selection became an exercise in strategic mission-building rather than checkbox fulfillment. Faculty reported that students arrived to class not merely prepared, but possessed by a sense of urgency and relevance that elevated the intellectual tenor of every seminar and lab.</p>
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Students embracing Purpose Learning at Artemis"/>
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
                Upon entering Artemis, students undergo a comprehensive orientation that includes workshops, mentorship sessions, and reflective practices designed to help them identify their core passions and the societal challenges they wish to address. These immersive experiences guide students through a process of self-discovery, challenging them to articulate not just what they want to study, but why it matters&mdash;to themselves and to the world.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trained facilitators and peer mentors help students navigate the often-uncomfortable space between ambition and uncertainty. The process draws on design thinking methodologies, narrative therapy techniques, and cross-cultural dialogue to ensure that each student&apos;s mission is both authentic and expansive. By the end of orientation, every Artemis student has a drafted mission statement&mdash;a living document that will evolve alongside their intellectual and personal growth.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">Customized Curriculum</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                With their missions identified, students collaborate with faculty to design a personalized curriculum that integrates academic knowledge with practical projects. This curriculum is flexible and interdisciplinary, drawing from multiple departments, research centers, and community partnerships to create a coherent plan of study that serves the student&apos;s mission.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rather than following a prescribed sequence of requirements, students build a learning pathway that might combine courses in engineering, ethics, and public policy&mdash;or weave together art, data science, and urban planning. Faculty advisors serve as intellectual mentors, helping students identify connections between disciplines and ensuring academic rigor is never sacrificed for breadth. The result is a curriculum that feels less like a requirement and more like a calling.
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
                Students spend a minimum of one semester at an Impact Lab, working alongside local communities, NGOs, and international experts. The labs are not volunteer tourism&mdash;they are rigorous, academically credited environments where students produce research, develop solutions, and build the intercultural competence that is essential for globally impactful careers. Alumni consistently cite their Impact Lab experience as the most transformative period of their Artemis education.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">Reflective Practice</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Continuous reflection and adaptation are integral to Purpose Learning. Regular check-ins with mentors and peers, reflective journaling, and portfolio reviews ensure that students remain aligned with their missions. These practices are not ancillary&mdash;they are woven into the academic structure itself, earning credit and institutional recognition.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The reflective framework helps students navigate the inevitable pivots and recalibrations that occur when ambition meets reality. A student who entered Artemis intent on eliminating world hunger might discover, through coursework and field experience, that their most effective contribution lies in agricultural technology policy rather than direct food aid. Reflective practice gives them permission&mdash;and a structured process&mdash;to evolve their mission without abandoning it. Portfolios built over years of reflection become powerful artifacts that graduates carry into their professional lives, chronicling not just what they learned, but who they became.
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
                <h4 className="font-bold italic uppercase tracking-wider text-sm">Yasmin Bhuhati &mdash; Clean Water Initiative in Africa</h4>
                <p className="text-xs text-gray-500 italic">&apos;24, MS ME &apos;28, PhD Microbiology &apos;32</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  During her impact year in Ghana, Yasmin worked on water and sanitation projects that would define the trajectory of her career and research. Partnering with local engineers and community health workers, she helped develop low-cost filtration systems adapted to the specific geological and cultural conditions of the region. Her work didn&apos;t stop at technical solutions&mdash;she also designed community education programs that ensured the sustainability and adoption of new water infrastructure.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yasmin&apos;s doctoral research, inspired by her fieldwork, pioneered new microbial detection methods that dramatically reduced the time required to identify waterborne contaminants. By the time she completed her PhD, her innovations had been adopted by public health agencies across three continents, providing clean water access to millions who had previously lacked it.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?auto=format&fit=crop&q=80&w=800" alt="Clean Water Initiative" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">Juan Carlos Rodriguez &mdash; Renewable Energy Solutions in South America</h4>
                <p className="text-xs text-gray-500 italic">&apos;25, BS Engineering &apos;29</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Collaborated with local communities and international experts to design sustainable energy systems tailored to the unique needs of rural and urban populations across South America. His work bridged the gap between cutting-edge renewable energy research and the practical realities of deployment in resource-constrained environments.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Juan Carlos&apos;s signature contribution was the development of modular solar micro-grids that could be assembled and maintained by local technicians with minimal training. His designs were open-source, enabling communities to replicate and adapt the systems without dependency on external suppliers. Within a decade of graduation, his frameworks had been implemented in fourteen countries, providing reliable electricity to communities that had never been connected to a central grid.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800" alt="Renewable Energy Solutions" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">Priya Sharma &mdash; Healthcare Innovation in Asia</h4>
                <p className="text-xs text-gray-500 italic">&apos;26, BS Biology &apos;30</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Developed telemedicine solutions and community health programs for remote areas that had long been underserved by traditional healthcare infrastructure. Working across villages in northern India and Nepal, Priya designed diagnostic protocols that could be administered by community health workers using low-cost mobile devices, dramatically expanding the reach of medical expertise.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Her telemedicine platform, built during her time at an Artemis Impact Lab in Mumbai, eventually connected over 500 rural clinics with specialists in urban hospitals. The system incorporated AI-assisted triage that could prioritize urgent cases and translate between languages in real time. Priya&apos;s work became a model for healthcare delivery across South and Southeast Asia, earning recognition from the World Health Organization and inspiring a new generation of Artemis students to declare missions in global health equity.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Healthcare Innovation" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>In Purpose Learning:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Students found greater relevance and motivation by aligning their studies with personal and societal missions</li>
              <li>Purpose Learning fostered deep engagement, as students were intrinsically motivated to pursue their missions</li>
              <li>Students&apos; projects had tangible benefits for their communities and society at large</li>
              <li>Students developed academically, personally, and socially, preparing them for mission-driven careers</li>
              <li>The cultural shift at Artemis was captured in a new vernacular: students began asking each other, &ldquo;What&apos;s your verb?&rdquo;</li>
              <li>An endless list of contributions to issues of poverty, health, infrastructure, renewable energy, global governance, space travel, and artistic and cultural achievement</li>
            </ul>
          </div>
        </section>

      </div>
      <ExploreAnotherFuture currentPage="purpose-learning" goTo={goTo} />
    </>
  );
}
