'use client';

import { Play } from 'lucide-react';
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from '../Shared';

interface Props {
  goTo: (page: string) => void;
}

export default function CentersOfInquiryPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="Centers of Inquiry"
        description="Looking back from 2100 at the radical experiment that replaced departments with interdisciplinary inquiry hubs."
        bgGradientClass="bg-[#461e68]"
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* ── Summary with Video Thumbnail ── */}
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Take a look at archival footage from the early days of the Centers of Inquiry — when faculty
            from formerly separate departments gathered under one roof for the first time.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2500"
              alt="Scholars collaborating in an interdisciplinary center"
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/60 rounded flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-black/80 transition-colors">
                <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Historical Notes: The Setting ── */}
        <section className="space-y-8">
          <SectionHeading>The Setting</SectionHeading>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                For centuries, universities organized knowledge into rigid departments — Biology, History,
                Computer Science, Philosophy — each a sovereign territory with its own faculty, its own
                curriculum, its own culture. Departmental boundaries were defended with the fervor of
                medieval city-states. A biologist might study the neural basis of decision-making, but
                crossing into the Psychology department to collaborate required diplomatic negotiations
                that could take semesters. The structure was efficient for administering tenure reviews and
                allocating office space, but it was catastrophically misaligned with the nature of real
                problems.
              </p>
              <p>
                The cracks had been visible for decades. Climate change refused to respect the boundary
                between atmospheric science and public policy. Artificial intelligence upended ethics,
                law, labor economics, and cognitive science simultaneously. The opioid crisis sat at the
                intersection of neuroscience, sociology, pharmacology, and public health — yet no single
                department could claim jurisdiction. Students, meanwhile, were stitching together their own
                interdisciplinary pathways through double majors, minors, and ad-hoc independent studies,
                navigating bureaucratic labyrinths that treated intellectual curiosity as an administrative
                inconvenience.
              </p>
            </div>

            <div>
              <blockquote className="border-l-4 border-[#461e68] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;The department was a container built for a world that no longer existed — a world
                  where knowledge sat neatly in labeled boxes. But the most important questions had already
                  escaped those boxes and were roaming free.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Dr. Lena Vasquez, inaugural Dean of the Center for Planetary Stewardship, 2028
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              The Study of Undergraduate Education at Stanford — known as SUES — had identified the
              problem as early as 2012. Its report called for greater integration across disciplines, for
              educational experiences that connected rather than compartmentalized. But the report&rsquo;s
              recommendations, like so many before them, were absorbed into the existing structure rather
              than transforming it. New interdisciplinary programs were created, but they were layered on
              top of the departmental system like scaffolding around a building that no one was willing
              to demolish. The departments remained the load-bearing walls.
            </p>
            <p>
              By the mid-2020s, the strain was undeniable. Faculty voted with their feet, establishing
              informal research clusters that operated entirely outside departmental channels. Students
              increasingly designed their own curricula, treating the course catalog as a buffet rather
              than a prescribed meal. Employers reported that graduates were technically proficient but
              lacked the integrative thinking needed to address complex, multi-causal challenges. The
              institution was producing specialists for a world that needed synthesists.
            </p>
          </div>
        </section>

        {/* ── Unexpected Intersections ── */}
        <section className="space-y-8">
          <SectionHeading>Unexpected Intersections</SectionHeading>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              When the Centers of Inquiry were first proposed, critics warned that dissolving departments
              would lead to intellectual incoherence — a campus of generalists who knew a little about
              everything and nothing deeply. What happened instead was something no one predicted: the
              collision of different ways of thinking produced insights that no single discipline could
              have reached alone. These unexpected intersections became the hallmark of the Artemis model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-50 p-6 border border-gray-200 space-y-4">
              <div className="w-10 h-10 bg-[#461e68] rounded flex items-center justify-center text-white text-lg font-bold">
                1
              </div>
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Poetics & Code</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                When poets and computer scientists at the Center for Digital Ethics began working
                together, they discovered that natural language processing could be understood through
                the lens of metaphor theory. This insight led to the &ldquo;Hermeneutic Compiler&rdquo; — a tool
                that could detect when AI systems were making category errors invisible to purely
                statistical analysis. The breakthrough was cited in the 2054 Turing Lecture.
              </p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200 space-y-4">
              <div className="w-10 h-10 bg-[#461e68] rounded flex items-center justify-center text-white text-lg font-bold">
                2
              </div>
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Ecology & Economics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Center for Planetary Stewardship brought ecologists and economists into daily
                conversation for the first time. Within three years, they co-developed the
                &ldquo;Regenerative Value Framework&rdquo; — a model that could price ecosystem services in
                real time and integrate them into financial markets. By 2045, the framework was adopted
                by the G20 and fundamentally reshaped global trade policy.
              </p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200 space-y-4">
              <div className="w-10 h-10 bg-[#461e68] rounded flex items-center justify-center text-white text-lg font-bold">
                3
              </div>
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Music & Medicine</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                At the Center for Human Flourishing, a musicologist and a neurologist discovered that
                complex rhythmic patterns could accelerate neuroplasticity in stroke patients by 340%
                compared to conventional therapy. The resulting &ldquo;Temporal Healing Protocol&rdquo; became
                the global standard for neurological rehabilitation by 2051, and the duo shared the
                Lasker Award in 2053.
              </p>
            </div>
          </div>
        </section>

        {/* ── The Shift ── */}
        <section className="space-y-8">
          <SectionHeading>The Shift</SectionHeading>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                In 2027, the Artemis Board of Trustees approved the most radical restructuring in the
                university&rsquo;s history. Every department was dissolved. In its place, 15 Centers of
                Inquiry were established — each organized around a grand challenge question rather than
                a discipline. The decision was not without controversy. Some faculty threatened to resign;
                alumni donors warned of withdrawn support; accreditation bodies expressed alarm. But the
                Board held firm, convinced that the existing structure was not merely outdated but
                actively harmful to the mission of the university.
              </p>
              <p>
                Each Center was given a Dean, a physical space on campus designed to encourage
                collaboration, and a mandate to bring together faculty from any and all fields whose
                expertise was relevant to the Center&rsquo;s animating question. The Center for Human
                Flourishing asked: &ldquo;What does it mean to live a good life in an age of artificial
                intelligence?&rdquo; The Center for Planetary Stewardship asked: &ldquo;How do we become
                regenerative inhabitants of Earth?&rdquo; The Center for Digital Ethics asked: &ldquo;How
                do we build technologies that honor human dignity?&rdquo;
              </p>
            </div>

            <div>
              <blockquote className="border-l-4 border-[#461e68] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;I spent twenty years in a Political Science department arguing that my work on
                  algorithmic governance wasn&rsquo;t &lsquo;really&rsquo; political science. On my first
                  day at the Center for Digital Ethics, a philosopher, an engineer, and a poet all
                  told me my work was exactly what they&rsquo;d been missing. I wept in my office.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Prof. Amara Osei, Center for Digital Ethics, 2029
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              Faculty were no longer hired into departments but into Centers, and they could rotate
              between Centers on a semester or annual basis. A marine biologist might spend two years
              at the Center for Planetary Stewardship studying ocean acidification, then rotate to the
              Center for Human Flourishing to explore the cultural significance of vanishing coastal
              communities. This fluidity was not without friction — tenure reviews, funding allocations,
              and curriculum design all required new governance structures — but the intellectual energy
              it released was extraordinary.
            </p>
            <p>
              Students, too, were liberated from the tyranny of the departmental major. They could
              affiliate with multiple Centers, moving between them as their interests evolved. A
              student might begin at the Center for Digital Ethics, drawn by questions of AI fairness,
              then discover a passion for the ecological dimensions of technology and migrate to the
              Center for Planetary Stewardship. The transcript — later replaced by the SkillPrint —
              reflected not a linear march through a single discipline, but a rich, branching journey
              across interconnected questions.
            </p>
          </div>

          {/* Centers list */}
          <div className="bg-gray-50 border border-gray-200 p-8 space-y-4 mt-8">
            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm">The 15 Centers of Inquiry</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3 text-sm text-gray-700">
              <p>Center for Human Flourishing</p>
              <p>Center for Planetary Stewardship</p>
              <p>Center for Digital Ethics</p>
              <p>Center for Democratic Resilience</p>
              <p>Center for Cognitive Frontiers</p>
              <p>Center for Regenerative Design</p>
              <p>Center for Narrative & Meaning</p>
              <p>Center for Biomolecular Futures</p>
              <p>Center for Spatial Justice</p>
              <p>Center for Computational Imagination</p>
              <p>Center for Embodied Learning</p>
              <p>Center for Intercultural Translation</p>
              <p>Center for Systems Wisdom</p>
              <p>Center for Economic Possibility</p>
              <p>Center for Temporal Studies</p>
            </div>
          </div>
        </section>

        {/* ── The Achievement ── */}
        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              Looking back from 2100, the dissolution of departments and the creation of Centers of
              Inquiry is recognized as one of the most consequential decisions in the history of higher
              education. It did not merely reform the university — it fundamentally reconceived what a
              university is for. The department asked: &ldquo;What do we know?&rdquo; The Center asked:
              &ldquo;What do we need to understand?&rdquo; That subtle reorientation changed everything.
            </p>
          </div>

          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-[#461e68] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Interdisciplinary research became the default</strong>, not
                the exception. Within a decade, 78% of Artemis publications were co-authored by faculty
                from different Centers — a figure that would have been unimaginable under the departmental
                system, where cross-departmental collaboration hovered around 12%.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#461e68] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Grand challenge breakthroughs accelerated.</strong> The
                Centers produced the first viable carbon-negative building material (2041), the Ethical AI
                Governance Framework adopted by 90+ nations (2039), and the Universal Neurodiversity
                Accommodation Protocol (2047) — achievements that required expertise no single discipline
                possessed.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#461e68] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Faculty satisfaction and retention improved dramatically.</strong>
                The chronic problem of &ldquo;disciplinary exile&rdquo; — scholars whose work didn&rsquo;t
                fit neatly into any department — was eliminated. Faculty reported 60% higher job
                satisfaction within the first five years, and Artemis attracted researchers who had
                previously avoided academia altogether.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#461e68] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Students developed integrative intelligence.</strong> Rather
                than learning to think within a single paradigm, Artemis graduates learned to synthesize
                across perspectives — a capability that employers, governments, and communities found
                indispensable in an era of compounding crises.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#461e68] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">The model spread globally.</strong> By 2080, over 200
                universities on six continents had adopted some version of the Centers model. The
                &ldquo;Artemis Architecture&rdquo; — as it came to be known — became the dominant paradigm
                for organizing research universities in the 21st century.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#461e68] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Deep disciplinary expertise was preserved, not lost.</strong>
                Contrary to critics&rsquo; fears, the Centers model actually deepened specialization by
                connecting experts to problems that demanded their deepest knowledge, while simultaneously
                situating that expertise within a broader intellectual ecology.
              </span>
            </li>
          </ul>

          <div className="mt-8">
            <blockquote className="border-l-4 border-[#461e68] pl-6 space-y-4">
              <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                &ldquo;We did not abandon disciplines. We liberated them from the prisons they had built
                for themselves. A discipline is a way of seeing — and the Centers taught us that the
                most powerful vision comes from many eyes, looking together.&rdquo;
              </p>
              <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                &mdash; Inscription at the entrance to the Center for Systems Wisdom, dedicated 2034
              </footer>
            </blockquote>
          </div>
        </section>
      </div>

      <ExploreAnotherFuture currentPage="centers-of-inquiry" goTo={goTo} />
    </>
  );
}
