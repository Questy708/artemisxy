'use client';

import { Play } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function CentersOfInquiryPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="Centers of Inquiry"
        description="In 2100, we look back at the moment Artemis abolished the department and replaced it with interdisciplinary hubs — reimagining not just what students learn, but where learning happens, and who it happens with."
        bgGradientClass="bg-gradient-to-tr from-[#1a1a2e] via-[#16213e] to-[#0f3460]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">

        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Step into a virtual time capsule to discover how Artemis transformed the very architecture of knowledge — replacing departments with Centers of Inquiry, and reimagining &ldquo;place&rdquo; as a fluid, borderless, globally connected experience rather than a fixed campus with fixed boundaries.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2500"
              alt="Video Thumbnail"
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/60 rounded flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-black/80 transition-colors">
                 <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
            <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 text-xs font-mono border border-black/10">
              BOX_ID: COI_2100.005<br/>
              CONTENTS:_CENTERS_OF_INQUIRY
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
              <div className="absolute -top-16 left-0 opacity-10 text-[120px] italic font-serif leading-none pointer-events-none text-[#0f3460]">Dept</div>
              <h3 className="text-xl leading-relaxed font-normal bg-white relative z-10 p-2">
                Knowledge was organized into departments — rigid silos that separated disciplines, isolated scholars, and trained students to think within walls they never chose. A physics student never sat with a poet. An economist never crossed paths with an ecologist. The campus was a map of boundaries.
              </h3>

              <ul className="text-xs text-gray-600 space-y-3 divide-y divide-gray-100">
                 <li className="pt-2">Disciplines housed in separate buildings, budgets, and cultures</li>
                 <li className="pt-2">Students declared a major and stayed within its borders</li>
                 <li className="pt-2">Interdisciplinary work was the exception, not the architecture</li>
                 <li className="pt-2">Campus was a fixed location — attendance meant relocation</li>
                 <li className="pt-2">Global presence meant satellite campuses, not distributed collaboration</li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="space-y-8 relative">
              <div className="absolute -top-16 left-0 opacity-10 text-[120px] italic font-serif leading-none pointer-events-none text-[#0f3460]">Hub</div>
              <h3 className="text-xl leading-relaxed font-normal bg-white relative z-10 p-2">
                Centers of Inquiry dissolved the walls. Organized around grand challenges rather than academic traditions, these interdisciplinary hubs brought together everyone whose work touched a problem — regardless of discipline, geography, or generation. The campus became a network, not a location.
              </h3>

              <ul className="text-xs text-gray-600 space-y-3 divide-y divide-gray-100">
                 <li className="pt-2">Hubs organized by challenge, not discipline</li>
                 <li className="pt-2">Students moved fluidly between centers based on their mission</li>
                 <li className="pt-2">Interdisciplinary collaboration was the default, not the exception</li>
                 <li className="pt-2">Physical, virtual, and hybrid spaces for every mode of learning</li>
                 <li className="pt-2">Global network of Impact Labs, Synchrony Pods, and partner sites</li>
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
                The department was the atom of the university — the indivisible unit around which everything was organized. Faculty were hired by departments, promoted by departments, and protected by departments. Students were admitted to departments, advised by departments, and credentialed by departments. The entire architecture of higher education was departmental.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                But the world&apos;s great challenges — climate change, pandemics, inequality, democratic erosion — did not respect departmental boundaries. They were inherently interdisciplinary, requiring the integration of knowledge, methods, and perspectives that no single department could provide. The gap between how problems existed in the world and how universities were organized to address them had become a chasm.
              </p>
            </div>

            <div className="space-y-4 mt-8 md:mt-0">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">There Were Early Signs That A Change Was Needed</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Interdisciplinary programs had been proliferating for decades — environmental studies, bioengineering, digital humanities — but they existed as exceptions within the departmental rule, often underfunded and always dependent on the goodwill of the very departments they sought to transcend. The most innovative research was already happening at the intersections, yet the institutional architecture discouraged exactly the kind of boundary-crossing that the future demanded.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Meanwhile, the concept of &ldquo;place&rdquo; was being radically redefined. Remote work, virtual collaboration, and global networks had already dissolved the assumption that productive intellectual work required physical co-location. If the workplace had been liberated from geography, why not the campus?
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Shift</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                The shift was both structural and spatial. Structurally, Artemis abolished departments entirely, replacing them with Centers of Inquiry — interdisciplinary hubs organized around the grand challenges facing humanity rather than the historical divisions of academic knowledge. No longer would a student of water sustainability need to choose between engineering, ecology, public policy, and anthropology. At a Center of Inquiry, all of these perspectives converged around the challenge itself.
              </p>
              <p>
                Spatially, the shift was equally radical. The campus was no longer a single location — it was a distributed network. Physical hubs existed in cities around the world, each designed for the specific challenges and communities it served. Virtual spaces used immersive telepresence, holographic collaboration, and AI-moderated environments to make distance irrelevant. The very concept of &ldquo;place&rdquo; was reimagined: where you learned mattered less than what you learned and who you learned with.
              </p>
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800" className="w-full h-full object-cover" alt="Centers of Inquiry" />
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Four Centers</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Technology Development</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Where engineering, computer science, materials research, and quantum physics converge to create the tools and systems that will define the next century. This Center attracts everyone from AI architects to biotechnology pioneers, fostering collaboration between builders and theorists who would never have crossed paths in a traditional departmental structure. Researchers work alongside practitioners, students alongside seasoned Catalysts — all united by the conviction that technology must serve humanity, not the other way around.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The Technology Development Center maintains fabrication labs, quantum computing clusters, and simulation environments distributed across three continents. Its signature program — the Build Sprint — brings together mixed teams of students, Navigators, and external partners for intensive 12-week prototyping cycles that have produced breakthroughs in clean energy, medical diagnostics, and adaptive infrastructure.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-48 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 border border-gray-300">
                  <div className="w-full h-full border border-dashed border-indigo-300 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-serif italic text-indigo-400">T</span>
                      <p className="text-[10px] text-indigo-400 uppercase tracking-widest mt-2">Technology<br/>Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Translational Programs</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Where knowledge moves from theory to practice. This Center bridges academic research and real-world application, pairing scholars with community leaders, policymakers, and industry partners. It is the engine of impact — ensuring that insights generated within Artemis don&apos;t remain confined to journals and conferences but reach the communities and contexts where they are needed most.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Translational Programs operates Impact Labs in over forty countries, each a living laboratory where Artemis learners work alongside local partners on challenges defined by the community, not the academy. The Center also manages the Policy Bridge — a program that places Artemis graduates in government and NGO roles worldwide, translating academic expertise into actionable governance.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-48 h-64 bg-gradient-to-br from-emerald-50 to-teal-50 p-4 border border-gray-300">
                  <div className="w-full h-full border border-dashed border-teal-300 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-serif italic text-teal-400">Tr</span>
                      <p className="text-[10px] text-teal-400 uppercase tracking-widest mt-2">Translational<br/>Programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Human Flourishing</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Where psychology, philosophy, neuroscience, and the arts converge to explore what it means to live a meaningful life. This Center addresses the questions that disciplines alone cannot answer — about purpose, well-being, identity, and the nature of human potential. It is the soul of Artemis, ensuring that technological and structural innovation never loses sight of the human beings they are meant to serve.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Human Flourishing houses the Cognitive Biofeedback Mirror research program, the Slow Cognition initiative, and the Arts as Inquiry collective — a group of artists-in-residence who use creative practice as a mode of research. The Center also stewards the Legacy Builders program, ensuring that the wisdom of elder scholars is preserved and transmitted across generations.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-48 h-64 bg-gradient-to-br from-rose-50 to-pink-50 p-4 border border-gray-300">
                  <div className="w-full h-full border border-dashed border-rose-300 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-serif italic text-rose-400">H</span>
                      <p className="text-[10px] text-rose-400 uppercase tracking-widest mt-2">Human<br/>Flourishing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Planetary Systems</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Where climate science, ecology, economics, and governance come together to address the existential challenges of the Planetary Phase of Civilization. This Center trains the leaders and thinkers who will navigate the Great Transition — the progressive transformation from industrial-era civilization to a sustainable, equitable, and globally coordinated future.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Planetary Systems operates the Global Challenge Simulator, runs the Synchrony Pod network for real-time international collaboration, and coordinates Artemis&apos;s partnership with the United Nations, the African Union, and regional governance bodies worldwide. Its graduates don&apos;t just study the future of civilization — they build it.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-48 h-64 bg-gradient-to-br from-amber-50 to-yellow-50 p-4 border border-gray-300">
                  <div className="w-full h-full border border-dashed border-amber-300 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-serif italic text-amber-400">P</span>
                      <p className="text-[10px] text-amber-400 uppercase tracking-widest mt-2">Planetary<br/>Systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Reimagining Place</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">The Distributed Campus</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Artemis&apos;s campus was never a single location — it was a network. Physical hubs existed in cities chosen for their cultural richness, strategic relevance, and connection to the challenges the Centers of Inquiry were designed to address. Each hub was architecturally distinct, reflecting the character and needs of its community, yet all were connected by immersive telepresence technology that made collaboration across time zones feel like sitting in the same room.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learners could begin their journey in Kampala, deepen their mastery in Singapore, and activate their skills in São Paulo — all within a single Artemis education. The distributed campus didn&apos;t just remove geographic barriers; it transformed them into opportunities for cultural immersion, local impact, and global perspective.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Synchrony Pods & Virtual Spaces</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Synchrony Pods were groundbreaking technology enabling truly immersive collaboration between students across the world, regardless of time zones or language barriers. Advanced telepresence created the illusion of physical co-presence, while haptic feedback systems allowed students to manipulate virtual objects together. Real-time translation AI eliminated language barriers entirely.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Beyond the Pods, Artemis developed a rich ecosystem of virtual learning environments — from holographic design studios to simulated field sites, from meditative reflection gardens to high-intensity crisis simulations. These spaces were not substitutes for physical presence; they were expansions of what &ldquo;place&rdquo; could mean. At Artemis, place was no longer defined by geography. It was defined by purpose.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>In Centers of Inquiry:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Artemis abolished the department, replacing siloed disciplines with interdisciplinary hubs organized around grand challenges</li>
              <li>Students moved fluidly between Centers, building unique combinations of knowledge no single department could provide</li>
              <li>The campus became a distributed network — physical hubs in cities worldwide, connected by immersive technology</li>
              <li>Place was reimagined: no longer a fixed location, but a purpose-driven constellation of spaces physical, virtual, and hybrid</li>
              <li>Synchrony Pods and virtual environments made geography irrelevant to meaningful collaboration</li>
              <li>The gap between how problems exist in the world and how universities address them was finally closed</li>
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
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 61</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">The Last Department: A Requiem</h4>
                <p className="italic text-xs text-gray-500">Archived documentation from the Department Closure Ceremonies, 2027–2032</p>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>The abolition of departments at Artemis was not a single event but a carefully orchestrated transition that unfolded over five years. Each department held a Closure Ceremony — part celebration, part mourning, part provocation — in which faculty and students publicly reflected on what the department had given the world and what its boundaries had cost. The ceremonies were deliberately emotional, acknowledging that disciplines carry identity, community, and belonging alongside their intellectual content.</p>
                  <p>The last department to close was Philosophy — fittingly, the discipline that had spent millennia questioning the nature of boundaries. Its Closure Ceremony became one of the most-watched events in Artemis history, with the department&apos;s final chair declaring: &ldquo;We do not end. We dissolve into everything. Philosophy was never a container — it was a way of asking. And asking has no department.&rdquo;</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                  <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                </div>
                <p className="text-xs text-gray-500 italic">Watch the Department Closure Ceremonies compilation.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 87</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">The Kampala Hub: Architecture as Pedagogy</h4>
                <p className="italic text-xs text-gray-500">Design documentation and impact assessment from the first Artemis Center of Inquiry building</p>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>The Kampala Hub was the first purpose-built Center of Inquiry — and its architecture was itself a provocation. There were no corridors, no offices with doors, no lecture halls. Instead, the building was organized around a series of overlapping &ldquo;convexities&rdquo; — open spaces where different activities naturally intersected. A quantum computing lab opened onto a ceramics studio. A policy simulation room shared a wall with a meditation garden. The building forced encounters that departmental architecture had spent centuries preventing.</p>
                  <p>The Kampala Hub became a pilgrimage site for architects and educators worldwide, demonstrating that the physical environment of learning is not neutral — it either enables or prevents the kind of thinking the future requires. Within a decade, its design principles had been adapted for hubs on every inhabited continent.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                  <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                </div>
                <p className="text-xs text-gray-500 italic">Watch the Kampala Hub design walkthrough.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <ExploreAnotherFuture currentPage="centers-of-inquiry" goTo={goTo} />
    </>
  );
}
