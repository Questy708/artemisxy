'use client';

import { Play } from 'lucide-react';
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from '../Shared';

interface Props {
  goTo: (page: string) => void;
}

export default function PurposeLearningPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="Purpose Learning"
        description="A look back from 2100 to the era when Artemis students began declaring missions, not majors."
        bgGradientClass="bg-[#f2b90f]"
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* ── Summary section with video thumbnail ── */}
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Watch the restored documentary footage from the early days of Purpose Learning — when
            students at Artemis first walked into the registrar&rsquo;s office and, instead of writing
            &ldquo;Biology&rdquo; or &ldquo;Economics,&rdquo; wrote statements of intent that would reshape the
            entire architecture of higher education.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2500"
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
              alt="Purpose Learning archival footage"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/60 rounded flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-black/80 transition-colors">
                <Play className="w-8 h-8 ml-1" />
              </div>
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
              <p className="text-sm text-gray-600 leading-relaxed">
                For generations, the declaration of a major was the defining act of a student&rsquo;s
                academic identity. &ldquo;I&rsquo;m a psychology major,&rdquo; one would say, and everyone
                understood the boundaries of that declaration — a set of required courses, a
                departmental home, a trajectory toward a defined profession. The system was orderly,
                efficient, and deeply impersonal. It organized knowledge into silos and students
                into silo-dwellers. The major told you what you studied, but it said nothing about
                why.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                This was the central paradox of early twenty-first century education: students
                entered university burning with questions about the world — How do I end homelessness?
                How do I make clean energy accessible? How do I prevent the next pandemic? — and the
                institution responded not with pathways to those questions, but with menus of
                disciplines. The gap between a student&rsquo;s deepest motivations and their chosen major
                was often vast, and it widened over time. By mid-career, many graduates found
                themselves working in fields only tangentially related to what they had studied,
                their original sense of purpose dimmed to a faint memory.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                The discipline-centric model also produced a kind of intellectual parochialism.
                A biology student and an economics student might sit next to each other in a dining
                hall, both passionate about food security, yet their academic lives would never
                intersect. The university&rsquo;s organizing principle — the department — prevented the
                very collaboration that the world&rsquo;s problems demanded. Complex challenges refused
                to respect disciplinary boundaries; the old academic architecture was a map drawn
                for a territory that no longer existed.
              </p>
              <blockquote className="border-l-4 border-[#f2b90f] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;I spent four years becoming an excellent economist. It took me another ten
                  years to realize I had wanted to eliminate poverty — and economics was only one
                  of the tools I needed.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Amara Osei, Artemis Populi, Class of 2028
                </footer>
              </blockquote>
              <p className="text-sm text-gray-600 leading-relaxed">
                The hunger for purpose-driven education was not new — it had been expressed in
                student activism, in the rise of social entrepreneurship programs, in the
                proliferation of double majors and interdisciplinary certificates. But these were
                workarounds within a system that remained fundamentally organized around
                disciplines. What was needed was not a patch but a paradigm shift: an inversion
                of the relationship between purpose and discipline.
              </p>
            </div>
          </div>
        </section>

        {/* ── The Shift ── */}
        <section className="space-y-12">
          <SectionHeading>The Shift</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                Artemis introduced Purpose Learning with a deceptively simple change: instead of
                declaring a major, students declared a mission. &ldquo;I am learning biology to eliminate
                world hunger.&rdquo; &ldquo;I am learning computer science to build ethical AI.&rdquo; &ldquo;I am
                learning literature to restore empathy in public discourse.&rdquo; The discipline became
                the instrument; the mission became the organizing principle.
              </p>
              <p>
                This inversion was radical in its implications. A student who declared &ldquo;I am learning
                to ensure clean water access for all&rdquo; might study environmental engineering,
                public policy, community organizing, data science, and history — not as electives
                tacked onto a major, but as intentional components of a coherent mission. The
                curriculum was not abandoned; it was <em>scaffolded</em> around the purpose. Faculty
                advisors became mission coaches, helping students navigate the territory between
                their aspiration and the competencies required to achieve it.
              </p>
              <p>
                Purpose Learning also transformed the relationship between students and their
                communities. Each mission was, by definition, outward-facing — it named a problem
                in the world that the student intended to address. This meant that from their first
                day, students were thinking about impact, not just input. They were not passive
                recipients of knowledge; they were active architects of change, and the university
                was their workshop.
              </p>
            </div>

            <div className="space-y-6">
              <blockquote className="border-l-4 border-[#f2b90f] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;When a student says &lsquo;I&rsquo;m a biology major,&rsquo; the conversation ends. When they say
                  &lsquo;I&rsquo;m learning biology to cure Alzheimer&rsquo;s,&rsquo; the conversation begins. Every person in
                  the room has something to contribute to that mission.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Provost Miriam Hale, Artemis Inaugural Purpose Address, 2029
                </footer>
              </blockquote>

              <div className="bg-gray-50 border border-gray-200 p-6 space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-700">The Mechanism</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Each student&rsquo;s mission was recorded in a living Purpose Declaration — a document
                  that evolved alongside their understanding. It was not a contract but a compass:
                  it pointed a direction, and the student&rsquo;s coursework, fieldwork, and creative
                  projects were all calibrated to move them along that bearing. The Declaration
                  could be revised — missions matured as students did — but it could never be
                  abandoned without reflection. Purpose was treated as a practice, not a destination.
                </p>
              </div>

              <div className="bg-[#fefce8] border border-[#f2b90f]/30 p-6 space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-wider text-[#92400e]">Sample Purpose Declarations</h4>
                <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f2b90f] mt-1">&#9670;</span>
                    <span>&ldquo;I am learning neuroscience and design to restore autonomy to people with motor disabilities.&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f2b90f] mt-1">&#9670;</span>
                    <span>&ldquo;I am learning ecology and economics to create regenerative food systems for arid climates.&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f2b90f] mt-1">&#9670;</span>
                    <span>&ldquo;I am learning education and technology to ensure every child has access to world-class learning.&rdquo;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Achievement ── */}
        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p className="leading-relaxed">
              The adoption of Purpose Learning at Artemis — and its subsequent spread to institutions
              across the collegium — produced transformations that were both measurable and profound.
              It did not merely change what students studied; it changed who they became.
            </p>
            <ul className="list-disc pl-5 space-y-3 leading-relaxed">
              <li>
                <strong className="text-gray-800">Dramatic increase in post-graduation purpose alignment:</strong>{' '}
                Within a decade of implementation, 84% of Artemis Purpose Learning graduates reported
                working in fields directly connected to their declared mission, compared to 31% under
                the old major-based system. The gap between aspiration and occupation had been the
                defining frustration of a generation; Purpose Learning closed it.
              </li>
              <li>
                <strong className="text-gray-800">Natural interdisciplinarity:</strong> Because missions
                inherently spanned multiple domains, students organically wove together disciplines
                that the old departmental structure kept separate. The average Purpose Learning student
                engaged with 4.2 disciplinary areas, compared to 1.8 for traditional majors — and
                their integration was cohesive, not scattered.
              </li>
              <li>
                <strong className="text-gray-800">Retention and motivation:</strong> Students who
                connected their learning to a personal mission showed measurably higher intrinsic
                motivation, course completion rates, and creative output. The &ldquo;sophomore slump&rdquo; —
                a well-documented phenomenon under the old model — effectively disappeared among
                Purpose Learning students.
              </li>
              <li>
                <strong className="text-gray-800">Community and employer engagement:</strong> External
                organizations found Purpose Learning graduates uniquely prepared to contribute.
                Employers reported that these graduates brought not just technical skills but a
                clear sense of direction and the ability to collaborate across boundaries — qualities
                that traditional majors rarely cultivated.
              </li>
              <li>
                <strong className="text-gray-800">Cultural transformation of the institution:</strong>{' '}
                Faculty reported that Purpose Learning made teaching more rewarding. Students came
                to class with questions, not just requirements. Departments began collaborating not
                out of administrative mandate but because students&rsquo; missions demanded it. The
                university became less a collection of silos and more an ecology of purpose.
              </li>
              <li>
                <strong className="text-gray-800">Ripple effects beyond Artemis:</strong> The Purpose
                Learning model inspired K-12 curricula, corporate training programs, and government
                workforce development initiatives worldwide. The idea that learning should be
                organized around impact rather than discipline became one of the defining educational
                principles of the twenty-first century.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <ExploreAnotherFuture currentPage="purpose-learning" goTo={goTo} />
    </>
  );
}
