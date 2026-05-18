'use client';

import { Play } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

/* ─── Voyage Rotation Data ─── */
const voyageLegs = [
  {
    num: 'I',
    name: 'The Atlantic Awakening',
    region: 'West Africa → Brazil → Caribbean',
    years: '2035–2042',
    desc: 'The first rotation sent learners along the routes of the Atlantic world — not as tourists, but as witnesses. They traced the arcs of forced migration, resistance, and cultural synthesis that shaped the modern Atlantic. In Lagos, they studied urban innovation in the world\'s fastest-growing cities. In Salvador, they examined how Yoruba spiritual systems survived the Middle Passage and reinvented themselves as Candomblé. In Port-au-Prince, they witnessed the unfinished revolution — the first Black republic still fighting the consequences of its liberation. The Atlantic Awakening was not comfortable. It was not meant to be.',
    anchor: 'Lagos · Salvador · Port-au-Prince',
    duration: '12–18 months',
  },
  {
    num: 'II',
    name: 'The Indian Ocean Circuit',
    region: 'East Africa → South Asia → Southeast Asia',
    years: '2043–2051',
    desc: 'The second rotation followed the monsoon routes that for millennia connected Zanzibar to Kerala, Mogadishu to Mumbai, Mombasa to Malacca. Learners studied how the ocean — not the land — was the true connective tissue of civilizations. In Zanzibar, they mapped the remains of the spice trade and the architecture of cosmopolitan coexistence. In Kerala, they investigated how ancient mathematical traditions prefigured modern computing. In Jakarta, they witnessed the collision of megacity growth and subsidence — a civilization building upward while its ground sank below sea level.',
    anchor: 'Zanzibar · Kochi · Jakarta',
    duration: '12–24 months',
  },
  {
    num: 'III',
    name: 'The Pacific Archipelago',
    region: 'Oceania → Japan → Pacific Islands',
    years: '2052–2060',
    desc: 'The Pacific was Darwin\'s crucible — the Galápagos taught him that isolation breeds adaptation. Artemis learners discovered the same principle in human systems. In Fiji, they studied how small island states became laboratories for climate adaptation, pioneering floating infrastructure and community-governed marine reserves. In Osaka, they examined how density bred innovation — a civilization that had learned to do more with less for centuries. In Samoa, they encountered the Fa\'a Samoa, a governance system that predated Western democracy by millennia and offered radical alternatives to representation and decision-making.',
    anchor: 'Suva · Osaka · Apia',
    duration: '10–18 months',
  },
  {
    num: 'IV',
    name: 'The Continental Traverse',
    region: 'Southern Africa → Andes → Mediterranean',
    years: '2061–2070',
    desc: 'The fourth rotation crossed landmasses — tracing the Great Rift Valley from Johannesburg to Addis Ababa, scaling the Andes from Patagonia to Bogotá, and navigating the Mediterranean from Tangier to Athens. Learners were transformed by the sheer verticality of human adaptation, by the ingenuity of communities building at altitude, by the coexistence of ancient agricultural wisdom and quantum computing labs in the same valley. The Continental Traverse taught that the world\'s most important knowledge is not in any one place — it is in the movement between places.',
    anchor: 'Johannesburg → Addis Ababa · Patagonia → Bogotá · Tangier → Athens',
    duration: '18–36 months',
  },
  {
    num: 'V',
    name: 'The Circumpolar Return',
    region: 'Arctic → Antarctic → Equator',
    years: '2071–2082',
    desc: 'The final rotation went to the poles. In Svalbard, learners studied the Global Seed Vault and the ethics of preserving biodiversity in frozen chambers. In Antarctica, they witnessed the only continent governed by scientific treaty rather than sovereign claim — a living experiment in collective governance. In the equatorial return, they came full circle, applying polar lessons to tropical urgency. The Circumpolar Return was the most demanding rotation — extreme conditions, extreme isolation, extreme beauty. Those who completed it carried a perspective that no classroom could ever provide: the view from above, the planet as a single system, the fragility and resilience of a world learning to sustain itself.',
    anchor: 'Svalbard · McMurdo · Quito',
    duration: '12–24 months',
  },
];

/* ─── Two Lineages, One Framework ─── */
const dualLineage = [
  {
    source: 'Minerva\'s Global Rotation',
    icon: 'M',
    principles: [
      { name: 'No Campus, Only Cities', desc: 'Minerva University proved that a university could exist without a campus — its students rotated through seven cities over four years, each location becoming both classroom and laboratory. The city was not a backdrop; it was the curriculum. Artemis adopted this principle and scaled it: not seven cities, but entire oceanic and continental circuits, each rotation leg lasting up to three years rather than a semester.' },
      { name: 'Sequential Immersion', desc: 'Minerva\'s rotation was not random — each city was chosen to build on the previous one, creating a cumulative learning arc. Artemis refined this into the Voyage Rotation: the Atlantic Awakening preceded the Indian Ocean Circuit because the history of forced migration demanded understanding before the study of voluntary trade routes. The Pacific followed because isolation could only be understood after connection. The sequence was pedagogy.' },
      { name: 'Location as Pedagogy', desc: 'At Minerva, the city was not supplementary to the curriculum — it was integral. Students in Berlin studied the architecture of memory; students in Buenos Aires examined the economics of recovery. Artemis made this principle absolute: each anchor city was selected because the problems it contained could not be understood anywhere else. Lagos could not teach what Kyoto taught. Svalbard could not teach what Salvador taught. The location was the lesson.' },
    ],
  },
  {
    source: 'Darwin\'s Voyages',
    icon: 'D',
    principles: [
      { name: 'Observation Before Theory', desc: 'Darwin spent five years observing before publishing a single word. The Voyage Rotation demanded the same: learners must spend a minimum of three months in immersive observation at each anchor before proposing any hypothesis or intervention. At Artemis, this became the "Slow Knowing" doctrine — the radical insistence that understanding must precede action, that the urgency to solve must never outpace the commitment to comprehend.' },
      { name: 'Variation as Insight', desc: 'Darwin\'s breakthrough came not from finding what was the same, but from cataloguing what was different — the finches, the tortoises, the mockingbirds. Variation was not noise; it was signal. The Voyage Rotation trained learners to seek variation across cultures, ecosystems, and knowledge systems. A solution that works in Quito may fail in Lagos — and that failure is data, not defeat.' },
      { name: 'The Voyage as Method', desc: 'Darwin did not understand natural selection in a laboratory. He understood it on a ship, in a storm, on a volcanic island, in conversation with a gaúcho. The method was the journey itself. The Voyage Rotation was not preparation for the real world — it was the real world. Every rotation leg produced publishable research, deployable solutions, and irrevocably changed perspectives.' },
    ],
  },
];

/* ─── The Rotation Protocol ─── */
const rotationProtocol = [
  {
    phase: 'A',
    name: 'Docking',
    duration: '3–6 months',
    desc: 'Learners arrive at an anchor city and spend a minimum of three months in immersive observation. No interventions, no proposals, no solutions. The Docking phase demands humility: listen, watch, map, question. Live in the community. Eat the food. Learn the language — not Duolingo proficiency, but the language of the streets, the markets, the council chambers. The Docking phase produces a Field Notebook — a detailed ethnographic and ecological record that becomes the foundation for all subsequent work.',
    output: 'Field Notebook',
  },
  {
    phase: 'B',
    name: 'Surveying',
    duration: '3–9 months',
    desc: 'With the Field Notebook as guide, learners begin systematic inquiry — partnering with local institutions, conducting research, testing hypotheses against the reality they have now come to understand. Surveying teams are always mixed: at least one local collaborator for every visiting learner. The power dynamic is explicit: local partners hold veto authority over any project. Surveying produces Working Papers — draft analyses that must be reviewed by both academic and community panels before proceeding.',
    output: 'Working Papers',
  },
  {
    phase: 'C',
    name: 'Specimen',
    duration: '3–9 months',
    desc: 'The final phase produces a Specimen — a concrete, deployable contribution. It might be a technology, a policy framework, a work of art, a community infrastructure project, or a published research paper. Every Specimen must meet dual criteria: epistemic rigour (it must be true) and civic impact (it must matter). Specimens are presented at the annual Voyage Convocation — a gathering of all rotating learners, faculty, and community partners that became one of the most important knowledge events in the world.',
    output: 'Voyage Convocation',
  },
];

interface Props {
  goTo: (page: string) => void;
}

export default function DarwinVoyagePage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="The World as Campus"
        description="In 2100, we look back at how two radical ideas — Minerva's global rotation that dissolved the campus into cities, and Darwin's five-year voyage that dissolved the classroom into the planet — merged to create Artemis's most transformative dimension: the Voyage Rotation."
        bgImage="https://images.pexels.com/photos/18702957/pexels-photo-18702957.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">

        {/* ── Summary ── */}
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600 leading-relaxed">
            Step into a virtual time capsule to discover how Artemis replaced the campus with the planet itself. The Voyage Rotation — a five-leg global circumnavigation born from the merger of two lineages — transformed every Artemis learner into a witness, a participant, and a contributor to the world&rsquo;s most urgent challenges. From Minerva, it inherited the structural logic of sequential rotation: the city as curriculum, the absence of a campus, the insistence that place shapes understanding. From Darwin, it inherited the methodological logic of observational voyage: slow knowing before swift action, variation as insight, the journey itself as epistemology.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.pexels.com/photos/5301733/pexels-photo-5301733.jpeg?auto=compress&cs=tinysrgb&w=2500"
              alt="The World as Campus"
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/60 rounded flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-black/80 transition-colors">
                <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
            <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 text-xs font-mono border border-black/10">
              BOX_ID: WAC_2100.006<br/>
              CONTENTS:_VOYAGE_ROTATION
            </div>
          </div>
        </section>

        {/* ── Two Lineages ── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Two Lineages, One Framework</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
            The World as Campus was not the invention of a single mind. It was the convergence of two radical educational traditions — one that reimagined where learning happens, and one that reimagined how learning happens. Minerva University proved that the campus could be dissolved into cities; Darwin proved that the classroom could be dissolved into the voyage. Artemis merged both into a single, unified framework: the Voyage Rotation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {dualLineage.map((lineage) => (
              <div key={lineage.source} className="border border-gray-200 p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#8A0000] flex items-center justify-center text-white text-sm font-bold italic">
                    {lineage.icon}
                  </div>
                  <h4 className="font-bold italic uppercase tracking-wider text-sm text-[#8A0000]">{lineage.source}</h4>
                </div>
                <div className="space-y-6">
                  {lineage.principles.map((p) => (
                    <div key={p.name} className="space-y-2">
                      <h5 className="font-bold text-sm text-gray-900">{p.name}</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Minerva Provocation</h4>
              <p className="font-bold italic text-sm text-gray-800 leading-relaxed">
                In 2014, Minerva University launched with a provocation: what if a university had no campus at all? Its students rotated through seven cities — San Francisco, Berlin, Buenos Aires, Seoul, Hyderabad, London, Taipei — living and learning in each for a semester. There were no lecture halls, no quad, no library building. The city was the campus. The world was the infrastructure.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Minerva proved that the campus was not a necessity but an inheritance — a legacy of medieval monasticism that had calcified into architectural assumption. Students who rotated through cities developed a kind of cultural fluency that no residential campus could provide. They learned to navigate difference, to adapt to unfamiliar systems, to see their own assumptions reflected in the mirror of other cultures. But Minerva&rsquo;s rotations were brief — a semester per city — and its students remained, in a sense, visitors. The Artemis Project asked: what would happen if the rotation were not a semester but years? What if learners were not visitors but witnesses?
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Darwin Provocation</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                In 1831, a 22-year-old naturalist boarded HMS Beagle and spent five years circumnavigating the globe. Charles Darwin did not discover evolution in a laboratory at Cambridge. He discovered it in the volcanic soils of the Galápagos, in the fossils of Patagonia, in the coral atolls of the Pacific. The voyage was not supplementary to his education — it was his education. The method of knowing was the journey itself.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                But Darwin&rsquo;s voyage was solitary, unstructured, and privileged — the observations of a single man from a single empire. The Artemis Project asked another provocation: what if the voyage were collective, structured, and equitable? What if every learner&rsquo;s education included a voyage of comparable scope, but designed with the methodological rigour and ethical framework that Darwin&rsquo;s era lacked? What if the Beagle carried not one observer but hundreds, from every continent, and the voyage produced not just theory but tangible contributions to the communities it touched?
              </p>
            </div>
          </div>
        </section>

        {/* ── The Voyage Rotation Map ── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Voyage Rotation</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">Five legs. Five years. Every learner completes at least two. Each leg combines Minerva&rsquo;s sequential immersion — the city as curriculum — with Darwin&rsquo;s observational methodology — the voyage as method. The routes follow the arcs of history and the circuits of contemporary challenge: the Atlantic world, the Indian Ocean, the Pacific, the continental interiors, the poles.</p>

          {/* SVG Route Map */}
          <div className="w-full max-w-4xl mx-auto border border-gray-200 bg-gray-50 p-4">
            <svg viewBox="0 0 1000 500" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* World outline - simplified */}
              <rect width="1000" height="500" fill="#f9fafb" />
              
              {/* Grid lines */}
              {[100, 200, 300, 400].map(y => (
                <line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
              ))}
              {[200, 400, 600, 800].map(x => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500" stroke="#e5e7eb" strokeWidth="0.5" />
              ))}

              {/* Simplified continent shapes */}
              {/* Africa */}
              <path d="M 470,120 L 500,100 L 520,120 L 540,160 L 550,200 L 540,260 L 520,320 L 500,350 L 480,340 L 470,300 L 460,240 L 460,180 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />
              {/* South America */}
              <path d="M 280,180 L 320,160 L 340,200 L 350,260 L 340,320 L 320,380 L 300,400 L 280,380 L 270,320 L 260,260 L 270,200 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />
              {/* Europe */}
              <path d="M 460,60 L 500,50 L 540,60 L 550,80 L 530,100 L 500,110 L 470,100 L 460,80 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />
              {/* Asia */}
              <path d="M 560,50 L 700,40 L 780,60 L 800,100 L 780,140 L 720,160 L 660,170 L 600,150 L 560,120 L 550,80 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />
              {/* Australia */}
              <path d="M 760,280 L 820,270 L 860,290 L 870,330 L 840,360 L 800,360 L 770,340 L 750,310 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />
              {/* North America */}
              <path d="M 120,60 L 220,40 L 280,60 L 300,100 L 280,140 L 240,160 L 200,170 L 160,160 L 130,130 L 110,100 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />

              {/* Voyage route lines */}
              {/* Leg I: Atlantic - West Africa to Brazil to Caribbean */}
              <path d="M 490,220 L 340,220 L 300,180" fill="none" stroke="#8A0000" strokeWidth="2.5" strokeDasharray="8,4" opacity="0.7" />
              {/* Leg II: Indian Ocean */}
              <path d="M 530,280 L 620,260 L 720,300" fill="none" stroke="#8A0000" strokeWidth="2.5" strokeDasharray="8,4" opacity="0.7" />
              {/* Leg III: Pacific */}
              <path d="M 780,300 L 820,220 L 780,200" fill="none" stroke="#8A0000" strokeWidth="2.5" strokeDasharray="8,4" opacity="0.7" />
              {/* Leg IV: Continental Traverse */}
              <path d="M 500,320 L 380,300 L 300,260 L 500,80" fill="none" stroke="#8A0000" strokeWidth="2.5" strokeDasharray="8,4" opacity="0.7" />
              {/* Leg V: Circumpolar */}
              <path d="M 150,20 L 500,10 L 800,30" fill="none" stroke="#8A0000" strokeWidth="2.5" strokeDasharray="8,4" opacity="0.7" />

              {/* Anchor points with labels */}
              {/* Leg I */}
              <circle cx="490" cy="220" r="6" fill="#8A0000" />
              <text x="500" y="225" style={{fontSize:'9px', fontWeight:'bold', fill:'#8A0000'}}>Lagos</text>
              <circle cx="340" cy="220" r="5" fill="#8A0000" opacity="0.6" />
              <text x="310" y="235" style={{fontSize:'8px', fill:'#6B7280'}}>Salvador</text>
              <circle cx="300" cy="180" r="5" fill="#8A0000" opacity="0.6" />
              <text x="260" y="175" style={{fontSize:'8px', fill:'#6B7280'}}>Port-au-Prince</text>

              {/* Leg II */}
              <circle cx="530" cy="280" r="5" fill="#8A0000" opacity="0.6" />
              <text x="540" y="285" style={{fontSize:'8px', fill:'#6B7280'}}>Zanzibar</text>
              <circle cx="620" cy="260" r="5" fill="#8A0000" opacity="0.6" />
              <text x="630" y="255" style={{fontSize:'8px', fill:'#6B7280'}}>Kochi</text>
              <circle cx="720" cy="300" r="5" fill="#8A0000" opacity="0.6" />
              <text x="730" y="305" style={{fontSize:'8px', fill:'#6B7280'}}>Jakarta</text>

              {/* Leg III */}
              <circle cx="780" cy="300" r="5" fill="#8A0000" opacity="0.6" />
              <text x="790" y="315" style={{fontSize:'8px', fill:'#6B7280'}}>Suva</text>
              <circle cx="820" cy="220" r="5" fill="#8A0000" opacity="0.6" />
              <text x="830" y="215" style={{fontSize:'8px', fill:'#6B7280'}}>Osaka</text>
              <circle cx="780" cy="200" r="5" fill="#8A0000" opacity="0.6" />

              {/* Leg IV */}
              <circle cx="500" cy="320" r="5" fill="#8A0000" opacity="0.6" />
              <text x="510" y="335" style={{fontSize:'8px', fill:'#6B7280'}}>Johannesburg</text>
              <circle cx="300" cy="260" r="5" fill="#8A0000" opacity="0.6" />
              <text x="255" y="265" style={{fontSize:'8px', fill:'#6B7280'}}>Bogotá</text>

              {/* Leg V */}
              <circle cx="150" cy="20" r="5" fill="#8A0000" opacity="0.6" />
              <text x="120" y="35" style={{fontSize:'8px', fill:'#6B7280'}}>Svalbard</text>

              {/* Legend */}
              <g transform="translate(30, 420)">
                <rect width="200" height="60" fill="white" stroke="#e5e7eb" strokeWidth="1" rx="2" />
                <line x1="15" y1="20" x2="45" y2="20" stroke="#8A0000" strokeWidth="2.5" strokeDasharray="8,4" />
                <text x="55" y="24" style={{fontSize:'9px', fill:'#6B7280'}}>Voyage Rotation Legs I–V</text>
                <circle cx="22" cy="42" r="5" fill="#8A0000" />
                <text x="55" y="46" style={{fontSize:'9px', fill:'#6B7280'}}>Anchor City</text>
              </g>

              {/* Title */}
              <text x="970" y="485" textAnchor="end" style={{fontSize:'9px', letterSpacing:'0.15em', fill:'#9CA3AF'}} className="font-mono uppercase">Voyage Rotation Map — Artemis 2100</text>
            </svg>
          </div>
        </section>

        {/* ── The Five Legs ── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Five Legs</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="space-y-16">
            {voyageLegs.map((leg, idx) => (
              <div key={leg.num} className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#8A0000] flex items-center justify-center text-white text-sm font-bold italic">
                      {leg.num}
                    </div>
                    <div>
                      <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">{leg.name}</h4>
                      <p className="text-xs text-gray-400 font-mono">{leg.years} · {leg.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{leg.desc}</p>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Anchors: {leg.anchor}</span>
                  </div>
                </div>
                <div className="bg-gray-100 aspect-video overflow-hidden border border-gray-200">
                  <img 
                    src={
                      idx === 0 ? "https://images.pexels.com/photos/6238198/pexels-photo-6238198.jpeg?auto=compress&cs=tinysrgb&w=800" :
                      idx === 1 ? "https://images.pexels.com/photos/5301733/pexels-photo-5301733.jpeg?auto=compress&cs=tinysrgb&w=800" :
                      idx === 2 ? "https://images.pexels.com/photos/5940839/pexels-photo-5940839.jpeg?auto=compress&cs=tinysrgb&w=800" :
                      idx === 3 ? "https://images.pexels.com/photos/5940845/pexels-photo-5940845.jpeg?auto=compress&cs=tinysrgb&w=800" :
                      "https://images.pexels.com/photos/6238027/pexels-photo-6238027.jpeg?auto=compress&cs=tinysrgb&w=800"
                    }
                    alt={leg.name}
                    className="w-full h-full object-cover grayscale opacity-60" 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── The Rotation Protocol ── */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Rotation Protocol</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">Every Voyage Rotation follows the Rotation Protocol — a structured methodology that merges Minerva&rsquo;s location-based pedagogy with Darwin&rsquo;s observational discipline. The protocol ensures that the voyage produces rigorous knowledge, not mere travel, and that every city becomes a true classroom, not a postcard.</p>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {rotationProtocol.map((phase) => (
              <div key={phase.phase} className="border border-gray-200 p-6 space-y-4">
                <div className="text-xs font-mono text-[#8A0000] font-bold">PHASE {phase.phase} · {phase.duration.toUpperCase()}</div>
                <h4 className="font-bold text-lg text-gray-900 italic">{phase.name}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{phase.desc}</p>
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-mono text-[#8A0000] uppercase tracking-wider">Output: {phase.output}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Visual: The Rotation Protocol Cycle */}
          <div className="w-full max-w-3xl mx-auto mt-12">
            <svg viewBox="0 0 600 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrowWAC" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af"/>
                </marker>
              </defs>
              
              {/* Docking */}
              <g transform="translate(30,30)">
                <rect width="150" height="120" rx="4" fill="white" stroke="#8A0000" strokeWidth="2"/>
                <rect width="150" height="36" rx="4" fill="#8A0000"/>
                <text x="75" y="23" textAnchor="middle" fill="white" style={{fontSize:'12px', fontWeight:'bold', letterSpacing:'0.1em'}}>DOCKING</text>
                <text x="75" y="60" textAnchor="middle" fill="#6B7280" style={{fontSize:'9px'}}>Observe · Listen · Map</text>
                <text x="75" y="78" textAnchor="middle" fill="#8A0000" style={{fontSize:'10px', fontWeight:'bold'}}>Field Notebook</text>
                <text x="75" y="100" textAnchor="middle" fill="#9CA3AF" style={{fontSize:'8px'}}>3–6 months</text>
              </g>
              
              <line x1="190" y1="90" x2="220" y2="90" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowWAC)"/>
              
              {/* Surveying */}
              <g transform="translate(225,30)">
                <rect width="150" height="120" rx="4" fill="white" stroke="#8A0000" strokeWidth="2"/>
                <rect width="150" height="36" rx="4" fill="#6B0000"/>
                <text x="75" y="23" textAnchor="middle" fill="white" style={{fontSize:'12px', fontWeight:'bold', letterSpacing:'0.1em'}}>SURVEYING</text>
                <text x="75" y="60" textAnchor="middle" fill="#6B7280" style={{fontSize:'9px'}}>Inquire · Partner · Test</text>
                <text x="75" y="78" textAnchor="middle" fill="#8A0000" style={{fontSize:'10px', fontWeight:'bold'}}>Working Papers</text>
                <text x="75" y="100" textAnchor="middle" fill="#9CA3AF" style={{fontSize:'8px'}}>3–9 months</text>
              </g>
              
              <line x1="385" y1="90" x2="415" y2="90" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowWAC)"/>
              
              {/* Specimen */}
              <g transform="translate(420,30)">
                <rect width="150" height="120" rx="4" fill="white" stroke="#8A0000" strokeWidth="2"/>
                <rect width="150" height="36" rx="4" fill="#4A0000"/>
                <text x="75" y="23" textAnchor="middle" fill="white" style={{fontSize:'12px', fontWeight:'bold', letterSpacing:'0.1em'}}>SPECIMEN</text>
                <text x="75" y="60" textAnchor="middle" fill="#6B7280" style={{fontSize:'9px'}}>Create · Deploy · Present</text>
                <text x="75" y="78" textAnchor="middle" fill="#8A0000" style={{fontSize:'10px', fontWeight:'bold'}}>Voyage Convocation</text>
                <text x="75" y="100" textAnchor="middle" fill="#9CA3AF" style={{fontSize:'8px'}}>3–9 months</text>
              </g>

              {/* Return loop */}
              <path d="M 495,160 Q 350,195 105,160" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="6,4" markerEnd="url(#arrowWAC)"/>
              <text x="300" y="185" textAnchor="middle" fill="#9ca3af" style={{fontSize:'8px', fontStyle:'italic'}}>Return to Docking at the next anchor — the rotation continues</text>
            </svg>
          </div>
        </section>

        {/* ── The Achievement ── */}
        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>The World as Campus did not merely send students abroad — it dismantled the very concept of &ldquo;abroad,&rdquo; replacing it with a planet understood as a single, interconnected system of knowledge and challenge. By merging Minerva&rsquo;s structural insight — that the campus could be dissolved into cities — with Darwin&rsquo;s methodological insight — that the voyage could be a form of knowing — Artemis created something that neither lineage could have produced alone.</p>
          </div>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">The campus dissolved (2040–2055):</strong> By the 2040s, the notion that learning happened inside buildings had come to seem as quaint as the notion that the Earth was flat. The Voyage Rotation proved that the most transformative learning occurred at the intersection of difference — cultural, ecological, linguistic, economic. Campuses did not disappear; they became nodes in a global network rather than the centre of the educational universe, exactly as Minerva had first demonstrated at a smaller scale.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Sequential immersion institutionalised (2035–2065):</strong> Minerva&rsquo;s insight that each rotation city must build on the previous one became the governing logic of the Voyage Rotation. The Atlantic Awakening preceded the Indian Ocean Circuit because the history of forced migration demanded understanding before the study of voluntary trade routes. The sequence was not arbitrary — it was pedagogy, each leg a chapter in a cumulative education that no single location could provide.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">The Rotation Protocol exported (2050–2080):</strong> Docking, Surveying, Specimen became the global standard for immersive learning. Over 200 universities on six continents adopted the protocol, adapting it to their own contexts while preserving its essential structure: observe before you act, partner before you lead, contribute before you leave. The protocol proved that Minerva&rsquo;s rotation logic and Darwin&rsquo;s observational discipline were not competitors but complements — structure without method was tourism, method without structure was wandering.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Community veto power (2035–present):</strong> The insistence that local partners hold veto authority over visiting projects was initially controversial — some faculty saw it as an infringement on academic freedom. Within a decade, it was universally recognised as the protocol&rsquo;s most important safeguard. It prevented the extractive research that had characterised Western academia&rsquo;s relationship with the Global South for centuries and ensured that the rotation was a partnership, not a passage.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">The Voyage Convocation (2042–present):</strong> What began as an annual gathering of rotating learners became the world&rsquo;s most important interdisciplinary knowledge event — a place where a climate scientist from Svalbard, a governance scholar from Lagos, and a marine ecologist from Suva presented their Specimens side by side. The Convocation demonstrated that the most powerful ideas emerge not from silos but from the collision of perspectives that only a voyage can produce.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">A new kind of graduate (2055–present):</strong> Artemis learners who completed the Voyage Rotation carried something no traditional graduate possessed: a planetary perspective grounded in both structure and method. They had seen the world&rsquo;s problems from multiple vantage points, understood that every solution is local before it is global, and possessed the humility that only sustained encounter with difference can teach. Employers, governments, and communities recognised them immediately — not by their credentials, but by their questions.</span>
            </li>
          </ul>
          <div className="mt-8">
            <blockquote className="border-l-4 border-[#8A0000] pl-6 space-y-4">
              <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                &ldquo;Minerva proved that the campus could be anywhere. Darwin proved that the journey could be the method. We proved that both were true — and that together, they were unstoppable. The world is not our campus. The world is our curriculum.&rdquo;
              </p>
              <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                &mdash; Navigator, Voyage Convocation 2089
              </footer>
            </blockquote>
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
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 112</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">The Lagos Docking: A Field Notebook</h4>
                <p className="italic text-xs text-gray-500">Archived Field Notebook, Leg I, Anchor City: Lagos, 2037</p>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>The first Field Notebook from the inaugural Voyage Rotation became the most-cited document in Artemis history. Its author, Amara Okafor, spent four months in Makoko — Lagos&rsquo;s floating community — without proposing a single intervention. Her notebook recorded the ingenuity of a community building a civilization on water: the floating schools, the mobile markets, the governance structures that operated entirely outside the formal economy.</p>
                  <p>When she finally entered the Surveying phase, her Working Paper on &ldquo;Adaptive Infrastructure in Aquatic Communities&rdquo; was initially rejected by the community review panel — they felt it didn&rsquo;t adequately capture the role of women in the governance structure. She spent three more months in Docking. The revised paper became the foundation for floating city designs deployed across three continents.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                  <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                </div>
                <p className="text-xs text-gray-500 italic">Watch Amara Okafor&rsquo;s Field Notebook reading at the 2038 Voyage Convocation.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 147</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">The Svalbard Specimen: Seeds of Governance</h4>
                <p className="italic text-xs text-gray-500">Specimen Archive, Leg V, Anchor City: Svalbard, 2074</p>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>The most celebrated Specimen in Voyage Rotation history was produced not by a single learner but by a team of twelve — six from the Arctic, six from the Equator. Their project, &ldquo;Seeds of Governance,&rdquo; asked a question that had haunted the Circumpolar Return: could the Antarctic Treaty System — the world&rsquo;s most successful experiment in collective governance — be adapted for contested territories in the tropics?</p>
                  <p>The team spent eighteen months designing a governance framework that combined the Antarctic Treaty&rsquo;s principles of scientific cooperation with indigenous consensus-building traditions from the Amazon, the Sahel, and the Pacific. The resulting model was adopted by three West African nations for transboundary water management, and by 2100 had influenced governance frameworks across fourteen climate-vulnerable regions.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                  <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                </div>
                <p className="text-xs text-gray-500 italic">Watch the Seeds of Governance presentation at the 2074 Voyage Convocation.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <ExploreAnotherFuture currentPage="darwin-voyage" goTo={goTo} />
    </>
  );
}
