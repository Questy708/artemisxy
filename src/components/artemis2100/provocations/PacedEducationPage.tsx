'use client';

import { Play } from 'lucide-react';
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from '../Shared';

interface Props {
  goTo: (page: string) => void;
}

export default function PacedEducationPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="Adaptive Paced Learning"
        description="In 2100, we examine the era when Artemis abolished the class year and embraced adaptive learning."
        bgGradientClass="bg-[#007f9c]"
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* ── Summary section with video thumbnail ── */}
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Explore the restored visual essay from the Artemis exhibit — a comparison of the
            metronomic education system and the adaptive paced model that replaced it, told through
            the stories of three students who experienced the transition firsthand.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2500"
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
              alt="Adaptive Paced Learning archival footage"
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
                The class year was one of the most enduring and least examined institutions in higher
                education. Freshman, Sophomore, Junior, Senior — these labels sorted students by
                time served, not by knowledge gained, readiness achieved, or growth accomplished.
                The system was metronomic: every student advanced at the same pace, regardless of
                whether they had mastered the material or were still struggling. It was, at its core,
                an industrial model — optimized for administrative efficiency, not human development.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The consequences were severe and well-documented. Students who needed more time were
                made to feel deficient — &ldquo;behind&rdquo; was the word — while those who could move faster
                were held back, bored into complacency. The &ldquo;Duck Syndrome&rdquo; — appearing calm on the
                surface while paddling frantically underneath — became a cultural shorthand at
                elite institutions for the toll that the one-size-fits-all pace took on student
                wellbeing. Anxiety, imposter syndrome, and burnout were not bugs in the system;
                they were features of a model that measured time served rather than competence
                demonstrated.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                The problem was compounded by the assumption that all eighteen-year-olds arrived
                at university with similar levels of preparation and maturity. In reality, the
                variance was enormous. Some students came from elite preparatory programs and could
                have tested out of their entire first year; others came from under-resourced schools
                and needed foundational support before they could engage with college-level material.
                The class year system forced both into the same starting line, the same pace, the
                same finish — a model that served neither well.
              </p>
              <blockquote className="border-l-4 border-[#007f9c] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;I spent my entire freshman year pretending I belonged, terrified that someone
                  would discover I didn&rsquo;t know what a syllabus was. By the time I found my footing,
                  the year was over — and the system declared me a Sophomore, ready or not.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Jordan Reeves, First-Generation Student, Class of 2027
                </footer>
              </blockquote>
              <p className="text-sm text-gray-600 leading-relaxed">
                Researchers had been documenting the failures of paced-by-clock education for
                decades. Self-paced learning experiments in the 1970s had shown promise but
                were abandoned in the rush toward standardization. By the 2020s, the evidence
                was overwhelming: fixed-pace education was leaving millions of learners behind
                while simultaneously under-charging millions more. What was needed was not a
                tweak but a fundamental rethinking of the temporal architecture of learning.
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
                Artemis abolished the class year entirely. In its place, the university introduced
                three adaptive phases — Calibration, Elevation, and Activation — each with flexible
                durations tailored to the individual learner. Students moved through these phases
                not by the calendar but by demonstrated readiness. The Freshman became the
                Calibrator; the Senior became the Activator — but the time between those states
                could be three years or seven, depending on the person.
              </p>
              <p>
                This was not &ldquo;self-paced&rdquo; in the old, isolationist sense of correspondence courses
                and lonely MOOCs. Adaptive Paced Learning was deeply social — students formed
                communities of practice within and across phases, not by age cohort but by
                intellectual affinity and shared mission. A twenty-year-old in Elevation and a
                thirty-five-year-old in Calibration might work together on a project, each
                contributing from their phase-appropriate strengths. The system was fluid but not
                formless; rigorous but not rigid.
              </p>
              <p>
                The abolition of the class year also eliminated the social stigma of being
                &ldquo;behind.&rdquo; In a world where everyone moved at their own pace, there was no behind —
                only here and next. Students who needed more time in Calibration were no longer
                labeled remedial; they were recognized as learners investing in a stronger
                foundation. Those who accelerated through Elevation were no longer outliers; they
                were simply ready to deepen sooner.
              </p>
            </div>

            <div className="space-y-6">
              <blockquote className="border-l-4 border-[#007f9c] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;The day Artemis killed the class year, it killed the most pernicious lie in
                  education: that all humans bloom on the same schedule.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Editorial, The Artemis Chronicle, 2032
                </footer>
              </blockquote>

              <div className="bg-gray-50 border border-gray-200 p-6 space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-700">The Three Phases at a Glance</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#007f9c] text-white text-xs font-bold px-2 py-1 rounded shrink-0">CAL</span>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <strong>Calibration</strong> — 6 to 18 months. Explore broadly, discover strengths and gaps,
                      find your bearing.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-[#007f9c] text-white text-xs font-bold px-2 py-1 rounded shrink-0">ELE</span>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <strong>Elevation</strong> — 12 to 24 months. Deepen expertise in chosen domains, build
                      disciplinary fluency.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-[#007f9c] text-white text-xs font-bold px-2 py-1 rounded shrink-0">ACT</span>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <strong>Activation</strong> — 12 to 18 months. Apply knowledge in real-world contexts,
                      demonstrate mastery through impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Three Phases — Detailed ── */}
        <section className="space-y-16">
          <SectionHeading>The Three Phases</SectionHeading>

          {/* Calibration */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="bg-[#007f9c] text-white font-bold text-sm px-4 py-2 tracking-widest uppercase">Calibration</span>
              <span className="text-sm text-gray-400 italic">6–18 months</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-sm text-gray-600 leading-relaxed space-y-4">
                <p>
                  Calibration was the phase of exploration — a structured period of intellectual
                  wandering designed to help students discover what they didn&rsquo;t know they didn&rsquo;t
                  know. It replaced the old freshman year, but it was longer, more intentional, and
                  free from the pressure to declare a path prematurely. Students sampled widely across
                  disciplines, engaged in short immersive projects, and worked closely with
                  calibration coaches who helped them identify their intellectual strengths, their
                  gaps, and their emerging sense of purpose.
                </p>
                <p>
                  The key innovation of Calibration was the &ldquo;diagnostic residency&rdquo; — a series of
                  intensive, week-long experiences in different knowledge domains, each designed to
                  surface the student&rsquo;s aptitudes and curiosities. Rather than choosing a major based
                  on vague impressions or parental pressure, students emerged from Calibration with
                  a data-rich understanding of where their abilities and passions intersected. It was
                  the educational equivalent of getting a full medical workup before prescribing
                  treatment — obvious in retrospect, revolutionary at the time.
                </p>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-full object-cover"
                    alt="Calibration phase exploration"
                  />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A Calibration cohort during a diagnostic residency in environmental field methods.
                  Students explored multiple domains before committing to a learning pathway.
                </p>
              </div>
            </div>
          </div>

          {/* Elevation */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="bg-[#007f9c] text-white font-bold text-sm px-4 py-2 tracking-widest uppercase">Elevation</span>
              <span className="text-sm text-gray-400 italic">12–24 months</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-sm text-gray-600 leading-relaxed space-y-4">
                <p>
                  Elevation was where depth replaced breadth. Students who had calibrated their
                  direction now plunged into the deep end of their chosen domains, building the
                  disciplinary fluency that would serve as the foundation for their life&rsquo;s work.
                  But this was not the old major — it was a dynamic, mission-driven program of study
                  that evolved as the student evolved. Faculty mentors worked with each student to
                  design a bespoke curriculum that balanced rigor with relevance, depth with
                  integration.
                </p>
                <p>
                  The distinguishing feature of Elevation was the &ldquo;mastery portfolio&rdquo; — a growing
                  body of work that demonstrated competence, not just completion. Students did not
                  simply pass courses; they produced evidence of understanding. A student in
                  Elevation might write a publishable paper, build a functional prototype, compose
                  an original piece of music, or design a community intervention — and each of
                  these artifacts became part of their evolving record. The question was never
                  &ldquo;Did you take the class?&rdquo; but &ldquo;What can you now do that you couldn&rsquo;t before?&rdquo;
                </p>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-full object-cover"
                    alt="Elevation phase deep work"
                  />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  An Elevation student presents their mastery portfolio to a faculty review panel.
                  The portfolio demonstrated competence across multiple dimensions, replacing the
                  traditional transcript.
                </p>
              </div>
            </div>
          </div>

          {/* Activation */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="bg-[#007f9c] text-white font-bold text-sm px-4 py-2 tracking-widest uppercase">Activation</span>
              <span className="text-sm text-gray-400 italic">12–18 months</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-sm text-gray-600 leading-relaxed space-y-4">
                <p>
                  Activation was the bridge between learning and impact. In this phase, students
                  applied their knowledge in real-world contexts — not as interns performing
                  menial tasks, but as emerging professionals tackling genuine problems. Activation
                  projects were ambitious: students founded organizations, conducted original
                  research, built technologies, created art, and implemented policy solutions.
                  The university provided scaffolding — mentorship, resources, peer support — but
                  the work was authentically consequential.
                </p>
                <p>
                  Activation also served as a testing ground. By working on real problems under
                  real conditions, students discovered the gaps in their preparation that no
                  classroom could reveal. Many chose to loop back into Elevation for additional
                  study before completing their Activation — a decision that was encouraged, not
                  stigmatized. The phase was not a race to the finish; it was a rehearsal for
                  the rest of one&rsquo;s life, and it was worth getting right.
                </p>
                <p>
                  Upon successful completion of Activation — assessed not by credits earned but by
                  impact demonstrated — students transitioned from learners to Populi, the lifelong
                  community of Artemis. There was no graduation ceremony in the old sense. Instead,
                  there was the Activation Presentation: a public demonstration of what the student
                  had accomplished and what they intended to do next. It was not an ending but a
                  beginning — and everyone in the room understood that the learner would be back.
                </p>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-full object-cover"
                    alt="Activation phase real-world project"
                  />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  An Activation Presentation in the Artemis amphitheater. The student demonstrated
                  a community health platform they had deployed across three cities — their ticket
                  from learner to Populi.
                </p>
                <blockquote className="border-l-4 border-[#007f9c] pl-6 space-y-3 mt-4">
                  <p className="font-serif italic text-lg text-gray-800 leading-snug">
                    &ldquo;Activation taught me that the real test of knowledge is not whether you can
                    pass an exam, but whether you can change something that matters.&rdquo;
                  </p>
                  <footer className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                    &mdash; Yuki Tanaka, Populi Cohort 2037
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Achievement ── */}
        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p className="leading-relaxed">
              The transition from class years to adaptive phases was one of the most consequential
              reforms in the history of higher education. Its achievements reshaped not only how
              people learned but how they understood growth itself.
            </p>
            <ul className="list-disc pl-5 space-y-3 leading-relaxed">
              <li>
                <strong className="text-gray-800">Elimination of the &ldquo;Duck Syndrome&rdquo;:</strong> With
                the pressure of the class year removed, students reported dramatic reductions in
                anxiety, imposter syndrome, and performance-related mental health crises. Artemis
                counseling centers saw a 68% decrease in acute stress presentations within five
                years of the transition.
              </li>
              <li>
                <strong className="text-gray-800">Equity in preparation time:</strong> Students from
                under-resourced backgrounds — who had previously been forced to compete on unequal
                footing under the fixed-pace model — thrived under adaptive pacing. Calibration
                gave them the foundation they needed, and they subsequently outperformed their
                peers in Elevation and Activation.
              </li>
              <li>
                <strong className="text-gray-800">Deeper mastery:</strong> By allowing students to
                spend the time they actually needed on each phase, the adaptive model produced
                graduates with demonstrably deeper competence. Employers consistently ranked
                adaptive-paced graduates above traditional graduates on problem-solving ability,
                creative thinking, and professional readiness.
              </li>
              <li>
                <strong className="text-gray-800">End of the &ldquo;four-year finish line&rdquo;:</strong> The
                arbitrary four-year timeline — which had forced students to compress or extend their
                learning to fit an institutional schedule — was replaced by a model that honored
                the natural rhythm of human development. Some students completed all three phases
                in three years; others took six. Both were equally celebrated.
              </li>
              <li>
                <strong className="text-gray-800">Redefinition of &ldquo;graduation&rdquo;:</strong> The
                Activation Presentation replaced the graduation ceremony as the culminating academic
                experience. It was not a conferral of credentials but a demonstration of capacity —
                and it was, by all accounts, far more meaningful to the students who experienced it.
              </li>
              <li>
                <strong className="text-gray-800">Global influence:</strong> Adaptive pacing became
                the standard model not only at Artemis but at institutions across the global
                collegium. The idea that learners should advance by readiness, not by clock, is
                now so deeply embedded in educational culture that the old class-year system seems
                as archaic as bloodletting.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <ExploreAnotherFuture currentPage="paced-education" goTo={goTo} />
    </>
  );
}
