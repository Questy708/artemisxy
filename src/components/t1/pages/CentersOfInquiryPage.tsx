'use client';

import { useState } from "react";
import { Play } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

/* ─── Real Center Data (from Artemis University) ─── */
const centers = [
  { num: '01', name: 'Frontiers of Artemis Research', desc: 'The coordinating hub defining Artemis\'s research identity, seeding bold interdisciplinary inquiries.', nodes: 'Valletta — Tokyo — San Francisco', investigators: 10, fellows: 40 },
  { num: '02', name: 'Civilization Architecture', desc: 'Designing governance systems, legal frameworks, and social contracts for resilient civilizations.', nodes: 'Geneva — Singapore — Accra', investigators: 12, fellows: 44 },
  { num: '03', name: 'Planetary Systems', desc: 'Understanding Earth as an integrated system — and extending that understanding to other worlds.', nodes: 'Reykjavik — Sydney — São Paulo', investigators: 11, fellows: 42 },
  { num: '04', name: 'Space & Frontier Science', desc: 'Pushing human presence beyond Earth — orbital habitats, deep-space propulsion, cosmic expansion ethics.', nodes: 'Houston — Darmstadt — Tanegashima', investigators: 13, fellows: 48 },
  { num: '05', name: 'Emerging Technologies', desc: 'Tracking and shaping quantum computing, synthetic biology, neurotechnology, and their convergence.', nodes: 'Zurich — Seoul — Boston', investigators: 14, fellows: 50 },
  { num: '06', name: 'Next-Gen Education', desc: 'Reimagining learning with AI tutors, immersive environments, and lifelong learning continua.', nodes: 'Helsinki — Melbourne — Nairobi', investigators: 9, fellows: 36 },
  { num: '07', name: 'Materials, Matter & Manufacturing Futures', desc: 'Metamaterials, programmable matter, additive manufacturing at scale.', nodes: 'Munich — Shenzhen — Detroit', investigators: 11, fellows: 38 },
  { num: '08', name: 'Agriculture, Food Systems', desc: 'Precision agriculture, cellular agriculture, closed-loop food ecosystems.', nodes: 'Wageningen — Hyderabad — Davis', investigators: 10, fellows: 40 },
  { num: '09', name: 'Robotics, Mechatronics & Physical Autonomy', desc: 'From surgical micro-robots to autonomous construction crews and swarm logistics.', nodes: 'Tokyo — Zurich — Pittsburgh', investigators: 13, fellows: 46 },
  { num: '10', name: 'Gaming & Worldbuilding', desc: 'Play, simulation, and narrative worldbuilding as research and civic imagination tools.', nodes: 'Montreal — Kyoto — Stockholm', investigators: 8, fellows: 32 },
  { num: '11', name: 'Energy Systems', desc: 'Post-carbon energy infrastructure: fusion, orbital solar, microgrids, energy sovereignty.', nodes: 'Copenhagen — Abu Dhabi — Santiago', investigators: 12, fellows: 44 },
  { num: '12', name: 'Health & Bioethics', desc: 'Advancing health while examining moral dimensions of biomedical innovation.', nodes: 'Boston — Cape Town — Hyderabad', investigators: 14, fellows: 52 },
  { num: '13', name: 'Urban Futures', desc: 'Designing resilient, equitable, adaptive cities.', nodes: 'Copenhagen — Medellín — Singapore', investigators: 10, fellows: 38 },
  { num: '14', name: 'Biotech & Life Sciences', desc: 'Gene editing, synthetic organisms, ecosystem engineering, de-extinction.', nodes: 'Cambridge — Basel — Guangzhou', investigators: 15, fellows: 54 },
  { num: '15', name: 'Fintech, DeFi & Economics', desc: 'Rethinking money, markets, and economic governance for a decentralized world.', nodes: 'London — Singapore — Lagos', investigators: 11, fellows: 42 },
];

const pillars = [
  { title: 'Unified Knowledge', desc: 'Centers replace departments — knowledge as a cohesive whole, fostering a "philosophical habit of mind." When a biologist, a philosopher, and a computer scientist share a research agenda, the questions they ask become fundamentally different — and so do the answers they discover.' },
  { title: 'Junior Fellows', desc: 'Students join as full participants — not peripheral interns. Every capstone must align with a Center mission, evaluated against dual criteria: epistemic contribution and civic impact. Centers function as research institutes, think tanks, and innovation incubators simultaneously.' },
  { title: 'Core Investigators', desc: 'Long-term, renewable appointments free investigators from grant cycles. Intellectual risk-taking replaces short-term, outcome-predictable projects. Investigators anchor epistemic rigour, mentoring junior fellows and shaping research agendas that span years.' },
  { title: 'Translational Programs', desc: 'Bridge research → application: IP licensing, funding, entrepreneurial mentorship, ethical oversight. Every translational project is reviewed for social implications, ensuring application never compromises equity, sustainability, and human dignity.' },
  { title: 'Technology Centers', desc: 'The technological backbone — centralized innovation hub providing cutting-edge resources. Bio-fabrication labs, quantum computing cleanrooms, computational modelling infrastructure. Breakthrough tools developed for one domain are rapidly available across the entire network.' },
];

const guildLayers = [
  { layer: 'Inquiry', desc: 'Transdisciplinary research advancing foundational questions', icon: '◆' },
  { layer: 'Capstone Catalysts', desc: 'Student projects embedded in live Guild missions', icon: '◇' },
  { layer: 'Deployment Interfaces', desc: 'Field-testing tools in civic, planetary, industry settings', icon: '▲' },
  { layer: 'Commons Nodes', desc: 'Open-access outputs with modular remix licenses', icon: '○' },
  { layer: 'Challenge Engines', desc: 'Seasonal sprints (2-6 weeks) and residencies', icon: '△' },
];

interface Props {
  goTo: (page: string) => void;
}

export default function CentersOfInquiryPage({ goTo }: Props) {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <>
      <HeroHeader
        title="Centers of Inquiry"
        description="In 2100, we look back at the moment Artemis abolished the department and replaced it with interdisciplinary hubs organized around grand challenges — reimagining not just what students learn, but where learning happens, and who it happens with."
        bgGradientClass="bg-gradient-to-tr from-[#1a1a2e] via-[#16213e] to-[#0f3460]"
        bgImage="https://images.pexels.com/photos/256392/pexels-photo-256392.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">

        {/* ── Summary ── */}
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Step into a virtual time capsule to discover how Artemis replaced the department with 15 Centers of Inquiry — each organized around a grand challenge, each spanning three global nodes, each dissolving the boundaries between disciplines, generations, and geographies.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.pexels.com/photos/256392/pexels-photo-256392.jpeg?auto=compress&cs=tinysrgb&w=2500"
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

        {/* ── Historical Notes ── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Historical Notes</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Setting</h4>
              <p className="font-bold italic text-sm text-gray-800 leading-relaxed">
                The department was the atom of the university — the indivisible unit around which everything was organized. Faculty were hired, promoted, and protected by departments. Students were admitted, advised, and credentialed by departments. The entire architecture of higher education was departmental.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                But the world&apos;s great challenges — climate change, pandemics, inequality, democratic erosion — did not respect departmental boundaries. They were inherently interdisciplinary, requiring integration of knowledge that no single department could provide. The gap between how problems existed in the world and how universities were organized to address them had become a chasm.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Shift</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Artemis abolished departments entirely, replacing them with 15 Centers of Inquiry — interdisciplinary hubs organized around grand challenges rather than historical divisions of academic knowledge. Where departments created silos, Centers created bridges. Where departments trained students to think within walls, Centers trained them to think across landscapes.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                &ldquo;The department was a container built for a world that no longer existed — a world where knowledge sat neatly in labeled boxes. But the most important questions had already escaped those boxes and were roaming free.&rdquo; — Dr. Lena Vasquez, 2028
              </p>
            </div>
          </div>
        </section>

        {/* ── The 15 Centers (Visual Grid) ── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The 15 Centers</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-3xl">Each Center spans three global nodes, houses a team of Core Investigators and Junior Fellows, and pursues research organized around a single grand challenge. Together, they form a complete map of the questions that matter most to humanity&apos;s future.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {centers.map((c) => (
              <div key={c.num} className="border border-gray-200 p-5 hover:border-[#0f3460] transition-colors group cursor-default">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono text-[#0f3460] font-bold">{c.num}</span>
                  <div className="flex gap-2 text-[10px] text-gray-400">
                    <span>{c.investigators} CI</span>
                    <span>·</span>
                    <span>{c.fellows} JF</span>
                  </div>
                </div>
                <h4 className="font-bold text-sm text-gray-900 leading-tight group-hover:text-[#0f3460] transition-colors">{c.name}</h4>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{c.desc}</p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{c.nodes}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── The 5 Pillars (Interactive Tabs) ── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Five Pillars</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-3xl">Every Center of Inquiry is built on five structural pillars — the organizational DNA that makes the model fundamentally different from the departmental system it replaced.</p>

          <div className="mt-8">
            {/* Pillar Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {pillars.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActivePillar(i)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                    activePillar === i
                      ? 'bg-[#0f3460] text-white border-[#0f3460]'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-[#0f3460] hover:text-[#0f3460]'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>

            {/* Active Pillar Content */}
            <div className="border border-gray-200 p-8 md:p-12 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 italic">{pillars[activePillar].title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">{pillars[activePillar].desc}</p>
            </div>
          </div>

          {/* Visual: Pillar Architecture */}
          <div className="relative w-full max-w-3xl mx-auto mt-12">
            <div className="flex items-end justify-center gap-1 h-48">
              {pillars.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActivePillar(i)}
                  className={`flex-1 max-w-[120px] transition-all duration-500 cursor-pointer flex flex-col items-center justify-end ${
                    activePillar === i ? 'bg-[#0f3460]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={{ height: `${60 + (activePillar === i ? 40 : i * 10)}%` }}
                >
                  <span className={`text-[9px] font-bold uppercase tracking-wider mb-2 whitespace-nowrap ${
                    activePillar === i ? 'text-white' : 'text-gray-600'
                  }`} style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    {p.title}
                  </span>
                </button>
              ))}
            </div>
            <div className="w-full h-2 bg-[#0f3460] mt-0" />
            <p className="text-center text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-3">Foundation: Centers of Inquiry</p>
          </div>
        </section>

        {/* ── Guild Layers (Visual) ── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Guild Layers</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-3xl">Each Center operates through five nested Guild Layers — from foundational inquiry to challenge-driven action. Together, they ensure that research doesn&apos;t stay in the lab but cycles through application, reflection, and iteration.</p>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="relative">
              {/* Concentric layers visualization */}
              <div className="flex flex-col items-center gap-2">
                {guildLayers.map((g, i) => (
                  <div
                    key={g.layer}
                    className="w-full border border-gray-200 p-4 flex items-center gap-4 hover:border-[#0f3460] transition-colors"
                    style={{ marginLeft: `${i * 16}px`, marginRight: `${i * 16}px` }}
                  >
                    <span className="text-lg text-[#0f3460] font-serif">{g.icon}</span>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900">{g.layer}</h4>
                      <p className="text-xs text-gray-500 mt-1">{g.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Cycles ── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Cycles</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-3xl">Learning and research at the Centers move through three distinct cycles — each with its own rhythm, intensity, and output. Together, they ensure that inquiry is never static.</p>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="border border-gray-200 p-6 space-y-4">
              <div className="text-xs font-mono text-[#0f3460] font-bold">3–6 MONTHS</div>
              <h4 className="font-bold text-lg text-gray-900 italic">Residency Cycles</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Immersive embeds in Guild missions. Students and fellows rotate across global nodes — from Nairobi for urban futures to Zurich for emerging tech — producing capstone prototypes tested in civic contexts.</p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-[10px] text-gray-400">
                  <span className="w-1.5 h-1.5 bg-[#0f3460] rounded-full" />
                  <span>CoI Proposal</span>
                  <span>→</span>
                  <span>Team Formation</span>
                  <span>→</span>
                  <span>Research</span>
                  <span>→</span>
                  <span>Field Lab</span>
                  <span>→</span>
                  <span>Deploy</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 p-6 space-y-4">
              <div className="text-xs font-mono text-[#0f3460] font-bold">2–6 WEEKS</div>
              <h4 className="font-bold text-lg text-gray-900 italic">Sprint Cycles</h4>
              <p className="text-xs text-gray-600 leading-relaxed">High-intensity challenges drawn from CoI priorities. Open to junior fellows and external collaborators, culminating in hackathon-style deliverables. Mandatory for Year 3+ students.</p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-[10px] text-gray-400">
                  <span className="w-1.5 h-1.5 bg-[#0f3460] rounded-full" />
                  <span>Challenge</span>
                  <span>→</span>
                  <span>Team Up</span>
                  <span>→</span>
                  <span>Ideate</span>
                  <span>→</span>
                  <span>Prototype</span>
                  <span>→</span>
                  <span>Open IP</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 p-6 space-y-4">
              <div className="text-xs font-mono text-[#0f3460] font-bold">ONGOING · QUARTERLY REVIEWS</div>
              <h4 className="font-bold text-lg text-gray-900 italic">Deployment Cycles</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Real-world testing in planetary settings, with iterative feedback from civic advisors. Outputs loop back to Inquiry layers for refinement — capstones contribute to the Knowledge Core, not just the classroom.</p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-[10px] text-gray-400">
                  <span className="w-1.5 h-1.5 bg-[#0f3460] rounded-full" />
                  <span>Select</span>
                  <span>→</span>
                  <span>Field Test</span>
                  <span>→</span>
                  <span>Feedback</span>
                  <span>→</span>
                  <span>Refine</span>
                  <span>→</span>
                  <span>Archive</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Reimagining Place ── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Reimagining Place</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">The Distributed Campus</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every Center spans three global nodes — strategically chosen for cultural richness, challenge relevance, and community connection. A learner might begin in Valletta, deepen in Tokyo, and activate in San Francisco — all within a single Center of Inquiry. The distributed campus didn&apos;t just remove geographic barriers; it transformed them into opportunities for cultural immersion and local impact.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                With 15 Centers × 3 nodes each, Artemis maintains 45 physical locations worldwide — plus virtual environments, Synchrony Pods, and partner sites that extend the network to every inhabited continent.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Synchrony Pods & Virtual Spaces</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Synchrony Pods enable truly immersive collaboration regardless of time zones or language barriers. Advanced telepresence creates the illusion of physical co-presence, haptic feedback allows manipulation of virtual objects together, and real-time translation AI eliminates language barriers entirely.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Beyond the Pods, a rich ecosystem of virtual learning environments — holographic design studios, simulated field sites, meditative reflection gardens, high-intensity crisis simulations — expanded what &ldquo;place&rdquo; could mean. At Artemis, place is defined by purpose, not geography.
              </p>
            </div>
          </div>

          {/* Visual: Global Node Map */}
          <div className="mt-8 border border-gray-200 bg-gray-50 p-8 text-center">
            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">45 Global Nodes Across 15 Centers</p>
            <div className="flex flex-wrap justify-center gap-3">
              {centers.map((c) => (
                <div key={c.num} className="text-center">
                  <div className="w-8 h-8 bg-[#0f3460] flex items-center justify-center text-white text-[9px] font-bold">{c.num}</div>
                  <div className="mt-1 text-[8px] text-gray-400 leading-tight max-w-[80px]">{c.nodes}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Achievement ── */}
        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>In Centers of Inquiry:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Artemis abolished the department, replacing siloed disciplines with 15 interdisciplinary hubs organized around grand challenges</li>
              <li>Five structural pillars — Unified Knowledge, Junior Fellows, Core Investigators, Translational Programs, Technology Centers — form the organizational DNA</li>
              <li>Guild Layers and Cycles ensure research cycles from inquiry through deployment, never staying in the lab</li>
              <li>The campus became a distributed network of 45 global nodes across every inhabited continent</li>
              <li>Place was reimagined: defined by purpose, not geography — physical, virtual, and hybrid</li>
              <li>By 2080, the Centers of Inquiry model had spread to 200+ universities worldwide</li>
            </ul>
          </div>
        </section>

        {/* ── Exhibit Article Archive ── */}
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
                  <p>The abolition of departments was a carefully orchestrated transition over five years. Each department held a Closure Ceremony — part celebration, part mourning, part provocation — in which faculty and students publicly reflected on what the department had given the world and what its boundaries had cost.</p>
                  <p>The last department to close was Philosophy. Its Closure Ceremony became one of the most-watched events in Artemis history, with the department&apos;s final chair declaring: &ldquo;We do not end. We dissolve into everything. Philosophy was never a container — it was a way of asking. And asking has no department.&rdquo;</p>
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
                  <p>The Kampala Hub was the first purpose-built Center of Inquiry — and its architecture was itself a provocation. There were no corridors, no offices with doors, no lecture halls. Instead, the building was organized around overlapping &ldquo;convexities&rdquo; — open spaces where different activities naturally intersected. A quantum computing lab opened onto a ceramics studio. A policy simulation room shared a wall with a meditation garden.</p>
                  <p>The building forced encounters that departmental architecture had spent centuries preventing. Within a decade, its design principles had been adapted for hubs on every inhabited continent, demonstrating that the physical environment of learning is not neutral — it either enables or prevents the kind of thinking the future requires.</p>
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
