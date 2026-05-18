'use client';

import { Play } from 'lucide-react';
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from '../Shared';

interface Props {
  goTo: (page: string) => void;
}

export default function OpenLoopPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="Open Loop Learning"
        description="We look back from 2100 at the era when Artemis brought an end to front-loaded education in favor of lifetime learning loops."
        bgGradientClass="bg-gradient-to-tr from-[#66B83B] via-[#7BCE44] to-[#4A9F2F]"
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* ── Summary section with video thumbnail ── */}
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Take a look at archival footage from the transition era, when the first Open Loop cohorts
            began their lifetime learning journeys — and the old four-year model started to dissolve.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2500"
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
              alt="Open Loop Learning archival footage"
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
                For centuries, higher education operated on a simple premise: you learned everything you
                needed in four concentrated years, typically between the ages of eighteen and twenty-two.
                This front-loaded model — the &ldquo;closed loop&rdquo; — assumed that knowledge acquired in youth
                would suffice for an entire career. Students matriculated, consumed a predetermined
                curriculum, graduated, and were expected to carry those four years of learning for the
                next forty. The model was elegant in its simplicity, but it was built for a world where
                careers were linear, industries changed slowly, and expertise had a long shelf life.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                By the early 2020s, it was clear that this compact was breaking down. Workers were
                changing careers not once but five to seven times across their lifetimes. Entire
                industries — social media management, genomic counseling, prompt engineering — emerged
                and transformed within a single decade. The knowledge from a 2015 degree was already
                antiquated by 2025. People needed to relearn, retool, and reinvent themselves
                repeatedly, yet the institutional architecture offered no mechanism for returning.
                Alumni associations hosted cocktail parties, not curricula.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Online learning platforms — the MOOCs and their descendants — revealed an enormous,
                latent hunger for lifelong education. Millions of adults enrolled in courses, not for
                credentials, but because they genuinely needed new knowledge. Yet these platforms
                remained peripheral, supplemental, second-class. They lacked the rigor, community, and
                transformative power of a residential university experience. The signal was clear:
                people wanted to keep learning, but the system had no formal place for them.
              </p>
              <blockquote className="border-l-4 border-[#66B83B] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;The four-year degree was a beautifully engineered solution to a problem that no
                  longer existed — the assumption that learning had a finish line.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Dr. Elena Vasquez, Artemis Institute, 2034
                </footer>
              </blockquote>
              <p className="text-sm text-gray-600 leading-relaxed">
                The question was no longer whether the closed loop would open, but what shape the open
                loop would take. How could a university offer lifetime access without diluting its
                standards? How could learners loop in and out without losing continuity? And what would
                &ldquo;alumni&rdquo; even mean when no one truly left?
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
                Artemis&rsquo;s answer was the Open Loop: every admitted student would receive six years
                of access to the university&rsquo;s learning ecosystem, distributed across their entire
                lifetime rather than compressed into a single consecutive block. A student might spend
                two years on campus in their early twenties, return for a semester at thirty-five to
                retool for a career pivot, and come back at fifty to deepen expertise in an entirely
                new domain. The years were theirs to deploy — a personal learning endowment that
                matured alongside them.
              </p>
              <p>
                This was not simply a policy change. It was an ontological reframing of what it meant
                to be a student. The old binary — you were either enrolled or you were an alum —
                dissolved entirely. In its place emerged a new category: <em>Populi</em>. The Populi
                were perpetual members of the Artemis learning community, always connected, always
                welcome. The campus was no longer a place you visited once; it was a place that
                remained yours throughout your life.
              </p>
              <p>
                Older practitioners who returned to campus brought something the traditional model
                could never provide: lived experience. A forty-year-old environmental scientist
                sitting beside a nineteen-year-old in a climate systems seminar created a
                pedagogical chemistry that no textbook could replicate. The returning Populi became
                expert contributors — mentors, case-study sources, living laboratories of applied
                knowledge. They weren&rsquo;t going back to school; they were bringing the world into
                the school.
              </p>
            </div>

            <div className="space-y-6">
              <blockquote className="border-l-4 border-[#66B83B] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;I first came to Artemis at twenty-one, terrified and brilliant in equal measure.
                  I came back at thirty-eight, humbled by a decade of failure, and I learned more in
                  those six months than in my entire first tour. Because this time, I knew what I
                  didn&rsquo;t know.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Marcus Chen, Populi Cohort 2041
                </footer>
              </blockquote>

              <div className="bg-gray-50 border border-gray-200 p-6 space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-700">Key Mechanism</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The Open Loop was supported by a personal learning ledger — a living document that
                  tracked each Populi&rsquo;s learning journey across their lifetime. When a student
                  returned, the ledger provided continuity: faculty could see what had been studied
                  before, what competencies had been demonstrated in the field, and what gaps
                  remained. There was never a need to start over — only to continue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Details: Comparison ── */}
        <section className="space-y-12">
          <SectionHeading>Key Details</SectionHeading>
          <p className="text-sm text-gray-600 leading-relaxed">
            The structural difference between the old closed-loop model and the Open Loop was not
            merely quantitative — it was qualitative. The same six years, distributed across a
            lifetime, produced fundamentally different learning outcomes than four consecutive years
            consumed in youth. Below, a visual comparison of the two learning waveforms.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Old model */}
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-500">
                The Old Model — 4 Years, Front-Loaded
              </h4>
              <div className="bg-gray-50 border border-gray-200 p-6 h-48 flex items-end justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  <rect x="10" y="10" width="80" height="60" rx="2" fill="#d1d5db" opacity="0.5" />
                  <text x="50" y="5" textAnchor="middle" className="text-[6px] fill-gray-400 font-bold">YEARS 18–22</text>
                  <text x="50" y="78" textAnchor="middle" className="text-[5px] fill-gray-400">Then nothing for 40+ years</text>
                  {/* Flat line after the block */}
                  <line x1="90" y1="70" x2="190" y2="70" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3" />
                  <text x="140" y="66" textAnchor="middle" className="text-[4px] fill-gray-400">No formal learning</text>
                </svg>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                A single, concentrated block of learning followed by decades of professional practice
                with no institutional support for re-education. Knowledge decayed; careers pivoted;
                the university offered no path back.
              </p>
            </div>

            {/* New model */}
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-[#66B83B]">
                The Open Loop — 6 Years, Distributed Over a Lifetime
              </h4>
              <div className="bg-gray-50 border border-gray-200 p-6 h-48 flex items-end justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  {/* Waveform representing distributed learning */}
                  <path
                    d="M 10 60 Q 20 15, 40 20 Q 50 22, 55 55 Q 60 65, 80 58 Q 85 55, 90 50 Q 95 35, 110 30 Q 120 28, 125 55 Q 130 65, 150 58 Q 155 50, 165 45 Q 175 30, 190 25"
                    fill="none"
                    stroke="#66B83B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <text x="25" y="10" className="text-[4px] fill-[#66B83B] font-bold">Age 20</text>
                  <text x="90" y="42" className="text-[4px] fill-[#66B83B] font-bold">Age 35</text>
                  <text x="170" y="20" className="text-[4px] fill-[#66B83B] font-bold">Age 52</text>
                  {/* Dots at peaks */}
                  <circle cx="40" cy="20" r="3" fill="#66B83B" />
                  <circle cx="110" cy="30" r="3" fill="#66B83B" />
                  <circle cx="190" cy="25" r="3" fill="#66B83B" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Learning pulses across a lifetime — deep engagement when needed, connection maintained
                during periods of practice. Each return builds on prior knowledge, creating a spiral
                of deepening competence rather than a single peak followed by decline.
              </p>
            </div>
          </div>
        </section>

        {/* ── The Achievement ── */}
        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p className="leading-relaxed">
              By the time the Open Loop became the universal model at Artemis — and eventually across
              the global collegium — its achievements were unmistakable. The transformation was not
              merely structural; it rewired the relationship between learning and life itself.
            </p>
            <ul className="list-disc pl-5 space-y-3 leading-relaxed">
              <li>
                <strong className="text-gray-800">Career longevity and resilience:</strong> Workers
                who could return to deep learning at any life stage navigated economic disruptions
                with far greater agility. The Open Loop cohort of 2035–2045 reported 73% fewer
                &ldquo;career crises&rdquo; compared to closed-loop graduates of the same era.
              </li>
              <li>
                <strong className="text-gray-800">Intergenerational classroom chemistry:</strong> The
                mixing of twenty-year-olds and fifty-year-olds in the same seminars produced
                breakthroughs in creativity, empathy, and practical problem-solving that neither
                demographic achieved alone. Research from the Artemis Learning Sciences Lab
                confirmed that mixed-age cohorts outperformed age-homogenous groups on complex,
                open-ended tasks by a factor of 2.4.
              </li>
              <li>
                <strong className="text-gray-800">From alumni to Populi:</strong> The dissolution of
                the student–alumni binary created a community of perpetual belonging. The Populi
                contributed back as mentors, guest lecturers, and real-world project hosts,
                creating a self-reinforcing ecosystem of knowledge exchange.
              </li>
              <li>
                <strong className="text-gray-800">Elimination of the &ldquo;mid-career cliff&rdquo;:</strong>{' '}
                The phenomenon where professionals in their forties and fifties experienced
                stagnation, obsolescence, or burnout — because they had no pathway to re-immerse
                in learning — effectively disappeared among Open Loop participants.
              </li>
              <li>
                <strong className="text-gray-800">Redefinition of the campus:</strong> Physical
                campuses evolved from four-year holding pens into lifelong learning hubs. The
                Artemis campus of 2100 is a place of constant arrival and departure, with Populi
                cycling through at every stage of life.
              </li>
              <li>
                <strong className="text-gray-800">Economic model transformation:</strong> The
                university&rsquo;s funding model shifted from a one-time tuition event to a lifetime
                learning partnership — more sustainable for the institution and more equitable for
                learners who could distribute costs across their earning years.
              </li>
            </ul>
          </div>
        </section>

        {/* ── Exhibit Article Archive ── */}
        <section className="space-y-12">
          <SectionHeading>Exhibit Article Archive</SectionHeading>
          <p className="text-sm text-gray-600 leading-relaxed">
            The following archival images document the Open Loop era — from the first Populi
            returning to campus to the intergenerational learning spaces that became the defining
            architecture of Artemis in the twenty-first century.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="aspect-[4/3] overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt="First Open Loop cohort returning to campus"
                />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                The First Return — Populi Cohort 2031
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Archival photograph of the first group of Populi to exercise their Open Loop access,
                re-entering campus after a decade in the field.
              </p>
            </div>

            <div className="space-y-3">
              <div className="aspect-[4/3] overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt="Mixed-age seminar in progress"
                />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                Intergenerational Seminar Room, 2043
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                A mixed-age seminar in the newly designed flexible learning spaces. Note the
                integration of field practitioners with first-cycle students.
              </p>
            </div>

            <div className="space-y-3">
              <div className="aspect-[4/3] overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt="Lifetime learning celebration"
                />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                Populi Convocation, 2058
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                The annual Populi Convocation — a celebration that replaced the traditional
                graduation ceremony, honoring learning at every life stage.
              </p>
            </div>
          </div>
        </section>
      </div>

      <ExploreAnotherFuture currentPage="open-loop" goTo={goTo} />
    </>
  );
}
