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
        title="The Infinite Learning Continuum"
        description="Open Loop Learning evolved from a radical idea into a cradle-to-grave model — where learning never ends, it only transforms. From Early Explorers to Legacy Builders, Artemis redefined what it means to be a lifelong learner."
        bgGradientClass="bg-gradient-to-tr from-[#66B83B] via-[#7BCE44] to-[#4A9F2F]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Step into a virtual time capsule to discover how Artemis reshaped education worldwide through the Infinite Learning Continuum — where learners of every age move fluidly through a lifetime of discovery, mastery, and contribution.
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
              BOX_ID: ILC_2100.001<br/>
              CONTENTS:_INFINITE_CONTINUUM
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
              <div className="absolute -top-16 left-0 opacity-10 text-[120px] italic font-serif leading-none pointer-events-none text-[#66B83B]">Linear</div>
              <h3 className="text-xl leading-relaxed font-normal bg-white relative z-10 p-2">
                Education was segmented into distinct phases: primary, secondary, tertiary, then professional development. Learning had a clear beginning and end — a finite loop that closed the moment a degree was conferred.
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
              <div className="absolute -top-16 left-0 opacity-10 text-[120px] italic font-serif leading-none pointer-events-none text-[#66B83B]">Infinite</div>
              <h3 className="text-xl leading-relaxed font-normal bg-white relative z-10 p-2">
                The Infinite Learning Continuum discarded the idea of education as a finite process. Learning became a cradle-to-grave journey — an infinite loop where individuals evolve through distinct life stages, each with its own rhythm, purpose, and mode of engagement.
              </h3>

              <div className="h-40 flex items-center justify-center border-b border-gray-200 relative">
                <svg width="100%" height="100%" viewBox="0 0 400 100" className="absolute stroke-black stroke-2 fill-none stroke-current text-gray-800">
                  <path d="M 0,50 Q 50,50 100,50 C 120,50 140,20 120,20 C 100,20 100,80 120,80 C 140,80 180,50 200,50 C 220,50 240,20 220,20 C 200,20 200,80 220,80 C 240,80 280,50 300,50 L 400,50" />
                </svg>
              </div>

              <ul className="text-xs text-gray-600 space-y-3 divide-y divide-gray-100">
                 <li className="pt-2">Learning begins before university and continues beyond it</li>
                 <li className="pt-2">Five life stages replace the traditional degree timeline</li>
                 <li className="pt-2">Every return to Artemis deepens expertise and community</li>
                 <li className="pt-2">Knowledge flows between generations in both directions</li>
                 <li className="pt-2">&ldquo;Populi&rdquo; replace &ldquo;alumni&rdquo; — learners for life, not graduates for a day</li>
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
                In the early 21st century, education was segmented into distinct phases: primary, secondary, and tertiary, followed by professional development in the workforce. The assumption was that learning happened in sequential stages, with a clear beginning and end.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The rapid pace of technological advancement and the increasing complexity of societal challenges demanded a more fluid approach. The rigid structures of the traditional system began to show their limitations, as individuals struggled to adapt to ever-changing career landscapes and evolving personal aspirations.
              </p>
            </div>

            <div className="space-y-4 mt-8 md:mt-0">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Leap from Open Loop to Infinite Continuum</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Open Loop Learning began as a radical proposition: that learners should be able to enter and exit the university at any point. But it evolved into something far more ambitious — the Infinite Learning Continuum. Where Open Loop asked &ldquo;what if you could come back?&rdquo;, the Continuum asked &ldquo;what if learning never stopped?&rdquo; The model expanded from flexible undergraduate entry to a cradle-to-grave framework encompassing every stage of human development.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Five Stages</SectionHeading>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Early Explorers (Ages 5–17)</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The Continuum begins before university. Young learners engage with Artemis through immersive digital camps, mentorship circles, and curiosity-driven micro-courses. These aren&apos;t pre-college prep programs — they&apos;re genuine encounters with interdisciplinary thinking, designed to ignite purpose and wonder early. Early Explorers discover what questions excite them, building a foundation of intrinsic motivation that shapes their entire learning journey.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-48 h-64 bg-gradient-to-br from-green-50 to-green-100 p-4 border border-gray-300">
                  <div className="w-full h-full border border-dashed border-green-300 flex items-center justify-center text-green-500 text-6xl font-serif italic">α</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Pathfinders (Ages 18–25)</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The traditional &ldquo;undergraduate&rdquo; phase was reconceived entirely. Pathfinders navigate through Calibrate, Elevate, and Activate cycles (as described in Adaptive Paced Learning), entering and exiting as their life demands. They declare missions, not majors. They move between Centers of Inquiry rather than departments. Some loop out for real-world immersion and loop back with fresh perspective. The fixed four-year window dissolved into a flexible, purpose-driven arc.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-48 h-64 bg-gradient-to-br from-teal-50 to-teal-100 p-4 border border-gray-300">
                  <div className="w-full h-full border border-dashed border-teal-300 flex items-center justify-center text-teal-500 text-6xl font-serif italic">β</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Navigators (Ages 25–45)</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Working professionals return to Artemis — not as &ldquo;alumni&rdquo; visiting their past, but as Navigators charting new territory. They loop back for mid-career accelerators, specialized micro-credentials, and collaborative sabbaticals. Navigators bring real-world complexity into the classroom, enriching discourse and bridging theory with practice. Their presence transforms Artemis from a place of preparation into a living laboratory of applied wisdom.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-48 h-64 bg-gradient-to-br from-purple-50 to-purple-100 p-4 border border-gray-300">
                  <div className="w-full h-full border border-dashed border-purple-300 flex items-center justify-center text-purple-500 text-6xl font-serif italic">γ</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Catalysts (Ages 45–65)</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Later-career practitioners return as Catalysts — part mentor, part co-learner, part provocateur. They teach in Centers of Inquiry, lead transdisciplinary research pods, and guide the next generation of Pathfinders. But they also learn: emerging fields, new methodologies, and the fresh perspectives that only young minds can provide. The Catalyst stage dissolves the boundary between teacher and student entirely, creating a community where expertise flows in every direction.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-48 h-64 bg-gradient-to-br from-amber-50 to-amber-100 p-4 border border-gray-300">
                  <div className="w-full h-full border border-dashed border-amber-300 flex items-center justify-center text-amber-500 text-6xl font-serif italic">δ</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Legacy Builders (Ages 65+)</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The Continuum&apos;s final stage is perhaps its most revolutionary. Legacy Builders remain engaged with Artemis as scholars-in-residence, community elders, and architects of institutional memory. They curate knowledge across generations, write the narratives that shape Artemis&apos;s evolving identity, and ensure that wisdom is never lost to time. Legacy Builders prove that the hunger for learning does not diminish with age — it only deepens.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-48 h-64 bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 border border-gray-300">
                  <div className="w-full h-full border border-dashed border-yellow-300 flex items-center justify-center text-yellow-500 text-6xl font-serif italic">Ω</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>The Infinite Learning Continuum:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>De-stigmatized a range of legitimate patterns of learning so that students used their time wisely and for greater impact</li>
              <li>Provided a way for adults at any stage to pivot careers with academic grounding and reconnect with meaningful social contexts</li>
              <li>Revitalized Artemis with a broader mix of students by creating on-ramps at many ages; enabled populations traditionally underrepresented at elite institutions to gain greater access</li>
              <li>Transformed &ldquo;alumni&rdquo; into &ldquo;populi&rdquo; — a lifelong community of learners who remain active, engaged, and evolving</li>
              <li>Established a cradle-to-grave model that treats learning as an infinite human endeavor, not a finite transaction</li>
              <li>Capitalized on the remarkable accomplishments of its populi through the invitation to return as expert practitioners at every life stage</li>
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
                  <p>Advanced AI systems revolutionized personalized learning by analyzing data from millions of learners to create customized educational experiences. These platforms adapted in real-time to the learner&apos;s progress, offering tailored content and feedback. By leveraging machine learning algorithms, natural language processing, and behavioral analytics, the platforms identified knowledge gaps, predicted learning difficulties, and dynamically adjusted material to keep each learner in their optimal zone of development.</p>
                  <p>The impact was profound: completion rates soared, learner satisfaction reached unprecedented levels, and the gap between different socioeconomic groups narrowed significantly as AI tutors provided one-on-one guidance that had previously been available only to the privileged few.</p>
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
                  <p>Micro-credentials became the new standard, allowing learners to acquire specific skills quickly. These credentials could be stacked over time to build comprehensive qualifications, offering a flexible alternative to traditional degrees. Rather than requiring years of continuous enrollment, micro-credentials broke learning into discrete, verifiable units that could be earned in weeks or months and combined incrementally toward larger certifications.</p>
                  <p>Employers embraced micro-credentials as a more precise signal of competency. At Artemis, the micro-credential ecosystem became a thriving marketplace of knowledge, with learners assembling unique portfolios that reflected not just what they had studied, but what they could demonstrably do.</p>
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
                <h4 className="font-bold italic uppercase tracking-wider text-sm">From Alumni to Populi: The Distributed Network</h4>
                <p className="italic text-xs text-gray-500">Case studies and network development records from 2032&ndash;2060</p>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>As the Infinite Learning Continuum matured, the traditional concept of &ldquo;alumni&rdquo; — people who had once attended an institution — gave way to &ldquo;populi&rdquo;: a distributed network of lifelong learners who remained actively engaged with Artemis and with each other. Populi weren&apos;t merely graduates looking back fondly; they were practitioners, mentors, researchers, and community members who moved fluidly between learning and leading.</p>
                  <p>This transformation created a self-reinforcing ecosystem. Populi returned as Navigators and Catalysts, bringing real-world challenges into the classroom and carrying new knowledge back into their communities. The distributed network became one of Artemis&apos;s most powerful assets — a living, breathing web of expertise that spanned every continent, every discipline, and every generation.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                  <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                </div>
                <p className="text-xs text-gray-500 italic">Watch the From Alumni to Populi documentary.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-12">
             <h4 className="text-center font-bold text-sm uppercase tracking-widest text-gray-900">View Infinite Learning Continuum Gallery</h4>
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
