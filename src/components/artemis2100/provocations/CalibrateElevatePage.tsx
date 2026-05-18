'use client';

import { Play } from 'lucide-react';
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from '../Shared';

interface Props {
  goTo: (page: string) => void;
}

export default function CalibrateElevatePage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="Calibrate → Elevate → Activate"
        description="A retrospective from 2100 on the three-phase model that redefined how learners progress."
        bgGradientClass="bg-[#4338ca]"
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* ── Summary with Video Thumbnail ── */}
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Explore the origins of the Calibrate-Elevate-Activate model through interviews with the
            educators and learners who lived through its first implementation.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2500"
              alt="Learner working through the Calibrate-Elevate-Activate phases"
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/60 rounded flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-black/80 transition-colors">
                <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
          </div>
        </section>

        {/* ── The Setting ── */}
        <section className="space-y-8">
          <SectionHeading>The Setting</SectionHeading>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                The old system advanced students by the calendar. Freshman, Sophomore, Junior, Senior
                — four steps, evenly spaced, same pace for everyone. If you were ready to dive deep
                into quantum mechanics as a first-year student, too bad — you were a Freshman, and
                Freshmen took introductory courses. If you needed three years to find your intellectual
                footing, too bad — by Junior year you were expected to have declared a major and begun
                your thesis. The system did not accommodate readiness; it accommodated the academic
                calendar.
              </p>
              <p>
                This produced a culture of &ldquo;getting through.&rdquo; Students spoke of
                &ldquo;surviving&rdquo; courses, &ldquo;knocking out&rdquo; requirements, and
                &ldquo;getting to&rdquo; the next stage. Learning was not the objective — progression
                was. The Stanford Duck Syndrome — calm on the surface, paddling frantically underneath
                — was not a pathology of individual students but a structural consequence of a system
                that measured progress by time served, not capability developed.
              </p>
            </div>

            <div>
              <blockquote className="border-l-4 border-[#4338ca] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;Everyone was moving at the same speed, but no one was moving at their speed.
                  Some of us were drowning; some of us were barely treading water; and some of us had
                  already crossed the ocean but were told to wait at the shoreline.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Diego Reyes, Artemis learner, from &ldquo;Three Phases,&rdquo; 2036
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              The consequences were severe. Students who needed more time to explore were rushed into
              premature specialization. Students who were ready for advanced work were held back by
              prerequisites designed for the median. Transfer students, adult learners, and
              neurodivergent learners were systematically disadvantaged by a system that assumed a
              single, linear trajectory from age 18 to 22. The drop-out rate among students who felt
              &ldquo;out of sync&rdquo; with the prescribed timeline was triple the institutional
              average — not because they lacked ability, but because the system lacked flexibility.
            </p>
            <p>
              The SUES report had identified this problem as early as 2012, noting that &ldquo;the
              pace of education should be determined by the learner&rsquo;s readiness, not by the
              calendar.&rdquo; But the recommendation languished for over a decade, caught between
              logistical complexity and institutional inertia. It was not until the founding of
              Artemis — and the clean-slate design philosophy that defined it — that the idea could
              finally be realized at scale.
            </p>
          </div>
        </section>

        {/* ── The Shift ── */}
        <section className="space-y-8">
          <SectionHeading>The Shift</SectionHeading>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                In 2028, Artemis introduced the three-phase model: Calibrate, Elevate, Activate.
                Unlike the old year-based system, these phases were defined not by time but by
                readiness. A learner moved from Calibrate to Elevate not when the calendar said so,
                but when they — and their Board of Advisors — agreed they were prepared. The phases
                were not linear. A learner might cycle through Calibrate-Elevate-Activate multiple
                times over a lifetime, each cycle building on the last, each one deeper and more
                integrated than before.
              </p>
              <p>
                The model was inspired by research on expertise development, by the mentorship
                traditions of craft guilds, and by the observation that real learning follows a
                rhythm of exploration, deepening, and application — not a uniform march through
                semesters. It recognized that readiness is not a function of age but of experience,
                reflection, and self-awareness. And it acknowledged that the most meaningful learning
                happens when the learner — not the institution — determines the pace.
              </p>
            </div>

            <div>
              <blockquote className="border-l-4 border-[#4338ca] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;We stopped asking &lsquo;What year are you?&rsquo; and started asking
                  &lsquo;What phase are you in?&rsquo; The answer told us nothing about your age and
                  everything about your mind.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Dr. Priya Chandrasekaran, Dean of Learner Progress, 2030
                </footer>
              </blockquote>
            </div>
          </div>

          {/* ── Phase 1: Calibrate ── */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              {/* Calibrate SVG Icon */}
              <div className="w-14 h-14 shrink-0">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="24" stroke="#4338ca" strokeWidth="3" strokeDasharray="6 4" />
                  <circle cx="28" cy="28" r="8" fill="#4338ca" opacity="0.3" />
                  <circle cx="28" cy="28" r="3" fill="#4338ca" />
                  <line x1="28" y1="4" x2="28" y2="14" stroke="#4338ca" strokeWidth="2" />
                  <line x1="28" y1="42" x2="28" y2="52" stroke="#4338ca" strokeWidth="2" />
                  <line x1="4" y1="28" x2="14" y2="28" stroke="#4338ca" strokeWidth="2" />
                  <line x1="42" y1="28" x2="52" y2="28" stroke="#4338ca" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 tracking-wide">CALIBRATE</h3>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">6–18 months &middot; Explore &middot; Discover &middot; Reflect</p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The Calibrate phase is a period of intentional exploration. Learners sample widely
                across Centers of Inquiry, taking short immersive experiences — each lasting between
                two and six weeks — that expose them to different questions, methods, and ways of
                thinking. The goal is not mastery but calibration: discovering what excites you, what
                challenges you, where your gaps lie, and what you genuinely want to understand more
                deeply.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                During Calibrate, every learner works with a personal Board of Advisors — a small
                group of mentors, peers, and community members who help them interpret their
                experiences and identify patterns. The Board does not prescribe a path; it reflects
                what the learner is discovering back to them, helping them see what they might not
                yet see in themselves. Calibrate culminates in a &ldquo;Readiness Review&rdquo; — not
                an exam, but a structured conversation in which the learner articulates what they&rsquo;ve
                learned about themselves and declares their intention for the Elevate phase.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Some learners complete Calibrate in six months, arriving quickly at a clear sense of
                direction. Others take the full eighteen months — or longer — and that extra time is
                not seen as delay but as depth. The learners who spend the longest in Calibrate often
                make the most distinctive contributions later, because they have explored more
                broadly and chosen more deliberately.
              </p>
            </div>
          </div>

          {/* ── Phase 2: Elevate ── */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              {/* Elevate SVG Icon */}
              <div className="w-14 h-14 shrink-0">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="38" width="12" height="12" rx="2" fill="#4338ca" opacity="0.2" />
                  <rect x="22" y="26" width="12" height="24" rx="2" fill="#4338ca" opacity="0.4" />
                  <rect x="36" y="10" width="12" height="40" rx="2" fill="#4338ca" opacity="0.7" />
                  <path d="M42 6L46 14H38L42 6Z" fill="#4338ca" />
                  <line x1="6" y1="50" x2="50" y2="50" stroke="#4338ca" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 tracking-wide">ELEVATE</h3>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">12–24 months &middot; Deepen &middot; Focus &middot; Master</p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Having calibrated their interests and identified their direction, learners enter the
                Elevate phase — a period of sustained, focused deepening. This is where the old model&rsquo;s
                &ldquo;major&rdquo; would have been, but Elevate is more deliberate and more intense.
                Learners choose a singular focus: a question, a problem, a craft, or a domain that
                they pursue with intensity and rigor. The Board of Advisors helps design a customized
                curriculum that draws from multiple Centers of Inquiry but always serves the
                learner&rsquo;s central purpose.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Elevate is characterized by what educational psychologists call &ldquo;deliberate
                practice&rdquo; — structured, effortful engagement with tasks just beyond the
                learner&rsquo;s current ability. It is not passive consumption of lectures; it is
                active, often uncomfortable, growth. Learners work closely with faculty mentors who
                are themselves practitioners in the relevant field. They produce real work — research
                papers, prototypes, performances, policy proposals — that is evaluated not by grades
                but by its contribution to the world.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The duration of Elevate varies with the complexity of the focus. A learner studying
                the intersection of artificial intelligence and constitutional law might need the full
                twenty-four months; a learner deepening their expertise in a single craft might be
                ready to Activate in twelve. What matters is not the time spent but the depth
                achieved. The phase ends not with a final exam but with an &ldquo;Elevation
                Exhibition&rdquo; — a public presentation of the learner&rsquo;s work to the
                community, demonstrating both mastery and readiness to apply it.
              </p>
            </div>
          </div>

          {/* ── Phase 3: Activate ── */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              {/* Activate SVG Icon */}
              <div className="w-14 h-14 shrink-0">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="20" stroke="#4338ca" strokeWidth="2.5" />
                  <path d="M23 18L38 28L23 38V18Z" fill="#4338ca" />
                  <line x1="28" y1="2" x2="28" y2="8" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                  <line x1="28" y1="48" x2="28" y2="54" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                  <line x1="2" y1="28" x2="8" y2="28" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                  <line x1="48" y1="28" x2="54" y2="28" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                  <line x1="9.5" y1="9.5" x2="13.7" y2="13.7" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                  <line x1="42.3" y1="42.3" x2="46.5" y2="46.5" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                  <line x1="9.5" y1="46.5" x2="13.7" y2="42.3" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                  <line x1="42.3" y1="13.7" x2="46.5" y2="9.5" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 tracking-wide">ACTIVATE</h3>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">12–18 months &middot; Apply &middot; Impact &middot; Integrate</p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The Activate phase is where knowledge meets the world. Learners step out of the
                classroom — and often out of the campus entirely — to apply what they have elevated
                in real-world contexts. This takes many forms: internships with partner organizations,
                entrepreneurial ventures, community-based research projects, artistic residencies,
                public service placements, or clinical practice. The common thread is that the learner
                is no longer practicing — they are doing. And they are doing it where the stakes are
                real.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Activate is not a formality. It is the crucible in which elevated knowledge is tested,
                refined, and often transformed by contact with reality. A learner who has elevated
                their understanding of sustainable architecture discovers, during an Activate
                placement with a housing nonprofit, that the greatest obstacles are not technical but
                political and financial. This discovery does not invalidate their expertise — it
                deepens it, adding dimensions that no classroom could provide. The Board of Advisors
                remains active during Activate, helping the learner process these discoveries and
                integrate them into their evolving understanding.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The phase culminates in a &ldquo;Transition Celebration&rdquo; — the event that
                replaced the old graduation ceremony. At the celebration, the learner presents not
                just what they know but who they have become: a whole person, with calibrated
                awareness, elevated expertise, and activated experience. And then — because this is
                the continuum — they are invited to begin again. A new Calibrate phase. A new cycle.
                Deeper each time.
              </p>
            </div>
          </div>

          {/* ── The Cycling Visual ── */}
          <div className="bg-gray-50 border border-gray-200 p-8 space-y-6 mt-8">
            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm">The Lifelong Cycle</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learners do not pass through Calibrate-Elevate-Activate once. They cycle through it
              repeatedly throughout their lives — each iteration building on the last, each phase
              experienced at a deeper level. A neurosurgeon who calibrated at 20, elevated at 22,
              and activated at 24 might return to calibrate again at 40, drawn by new questions about
              AI-assisted diagnosis, then elevate in computational neuroscience, then activate by
              building a diagnostic tool that saves thousands of lives.
            </p>
            <div className="flex items-center justify-center py-6">
              <svg viewBox="0 0 400 160" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Cycle arrows */}
                <path d="M60 100 Q60 40 140 40" stroke="#4338ca" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead)" />
                <path d="M160 40 Q240 40 240 100" stroke="#4338ca" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead)" />
                <path d="M240 120 Q240 140 160 140 Q80 140 60 120" stroke="#4338ca" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead)" />
                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#4338ca" />
                  </marker>
                </defs>
                {/* Phase nodes */}
                <circle cx="60" cy="110" r="30" fill="#4338ca" opacity="0.15" stroke="#4338ca" strokeWidth="2" />
                <text x="60" y="106" textAnchor="middle" className="text-xs" fill="#4338ca" fontWeight="bold" fontSize="9" fontFamily="sans-serif">CALI-</text>
                <text x="60" y="118" textAnchor="middle" className="text-xs" fill="#4338ca" fontWeight="bold" fontSize="9" fontFamily="sans-serif">BRATE</text>
                <circle cx="160" cy="30" r="30" fill="#4338ca" opacity="0.25" stroke="#4338ca" strokeWidth="2" />
                <text x="160" y="34" textAnchor="middle" className="text-xs" fill="#4338ca" fontWeight="bold" fontSize="10" fontFamily="sans-serif">ELEVATE</text>
                <circle cx="260" cy="110" r="30" fill="#4338ca" opacity="0.4" stroke="#4338ca" strokeWidth="2" />
                <text x="260" y="114" textAnchor="middle" className="text-xs" fill="white" fontWeight="bold" fontSize="9" fontFamily="sans-serif">ACTIVATE</text>
                {/* Cycle label */}
                <text x="160" y="95" textAnchor="middle" fill="#4338ca" fontWeight="bold" fontSize="8" fontFamily="sans-serif" letterSpacing="0.15em">REPEAT</text>
                <path d="M145 100 L160 108 L175 100" stroke="#4338ca" strokeWidth="1.5" fill="none" />
                {/* Depth indicator */}
                <text x="340" y="50" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="sans-serif">1st cycle</text>
                <text x="340" y="80" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="sans-serif">2nd cycle</text>
                <text x="340" y="110" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="sans-serif">3rd cycle</text>
                <line x1="320" y1="55" x2="320" y2="115" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" />
                <polygon points="320,50 317,58 323,58" fill="#9ca3af" />
                <text x="320" y="130" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="sans-serif">deeper each time</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── The Achievement ── */}
        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              From the vantage point of 2100, the Calibrate-Elevate-Activate model appears as
              obvious and necessary as the heliocentric model of the solar system — a truth that was
              always there, waiting to be recognized. The year-based progression system, like the
              geocentric model, was not merely inaccurate; it actively distorted our understanding of
              how learning works. By replacing it with a readiness-based, cyclical model, Artemis
              didn&rsquo;t just improve education — it corrected a fundamental error.
            </p>
          </div>

          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-[#4338ca] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Learner well-being improved dramatically.</strong> The
                Duck Syndrome — that culture of concealed struggle — was effectively eliminated within
                a decade. When progression is based on readiness rather than time, there is no
                &ldquo;falling behind.&rdquo; There is only being where you are. Rates of anxiety and
                depression among Artemis learners dropped by 58% in the first five years.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#4338ca] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Learning depth increased while time-to-expertise decreased.</strong>
                Paradoxically, by allowing learners to move at their own pace, the model actually
                accelerated expertise development. Learners who calibrated thoroughly before elevating
                reached mastery faster than those who had been rushed through a prescribed curriculum.
                The average time from entry to first Activation was 3.2 years — compared to 4.0 years
                under the old system — but the quality and applicability of the learning was
                measurably superior.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#4338ca] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Neurodivergent learners thrived.</strong> The rigid
                pacing of the year-based system had been particularly punishing for learners with ADHD,
                autism, and other cognitive differences. The Calibrate-Elevate-Activate model — with
                its flexible durations, multiple modalities, and emphasis on self-directed pacing —
                became the gold standard for neurodiversity-affirming education worldwide.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#4338ca] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">The &ldquo;mid-career crisis&rdquo; was reframed as a new Calibrate phase.</strong>
                What had been pathologized as burnout or stagnation was recognized as a natural
                signal that a learner was ready to explore new directions. The cyclical model
                normalized reinvention and removed the stigma of &ldquo;starting over.&rdquo;
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#4338ca] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">The Board of Advisors model was adopted across industries.</strong>
                What began as a support structure for Artemis learners became a widely emulated
                practice. By 2070, over 60% of Fortune 500 companies had implemented some version of
                the Board of Advisors model for employee development, and several nations incorporated
                it into their public education systems.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#4338ca] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">The model proved that structure and freedom are not opposites.</strong>
                Critics had feared that removing year-based progression would lead to chaos. What
                they found instead was that the three phases provided more structure than the old
                system — not less. The structure was simply organized around the learner&rsquo;s
                internal readiness rather than an external calendar, and that made all the difference.
              </span>
            </li>
          </ul>

          <div className="mt-8">
            <blockquote className="border-l-4 border-[#4338ca] pl-6 space-y-4">
              <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                &ldquo;The genius of Calibrate-Elevate-Activate was not that it was new. The rhythm of
                exploration, deepening, and application is as old as human learning itself — as old as
                the apprentice who watches, then practices, then builds. The genius was in recognizing
                that this rhythm is not a straight line but a spiral — and that each turn of the spiral
                brings you closer to who you are meant to become.&rdquo;
              </p>
              <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                &mdash; Dr. Priya Chandrasekaran, &ldquo;The Spiral and the Line,&rdquo; 2052
              </footer>
            </blockquote>
          </div>
        </section>
      </div>

      <ExploreAnotherFuture currentPage="calibrate-elevate" goTo={goTo} />
    </>
  );
}
