'use client';

import { Play } from 'lucide-react';
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from '../Shared';

interface Props {
  goTo: (page: string) => void;
}

export default function InfiniteLearningPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="Infinite Learning Continuum"
        description="From 2100, we reflect on the era when Artemis ended graduation and began the infinite continuum."
        bgGradientClass="bg-[#d92231]"
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* ── Summary with Video Thumbnail ── */}
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Watch the final graduation ceremony in Artemis history — and the first Transition Celebration
            that replaced it. Recorded in the spring of 2031, this moment marked the end of an ending
            and the beginning of forever.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2500"
              alt="Graduation ceremony transitioning to continuum celebration"
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
                For as long as anyone could remember, education had a clear endpoint: graduation day.
                A ceremony, a diploma, a handshake, and then — departure. The university and the student
                parted ways, sometimes warmly, sometimes with quiet relief, but always with finality.
                Alumni associations existed to maintain the social bonds, but the intellectual bonds
                were severed. You could attend reunions, donate money, even audit a course here and
                there, but the university was no longer your learning home. You had graduated. You were
                done.
              </p>
              <p>
                The word itself — &ldquo;graduated&rdquo; — carried a double meaning. It meant you had
                achieved something, but it also meant you had been graded, sorted, and deposited at a
                fixed level. It was a word about completion, not continuation. And in a world where
                knowledge was doubling every eighteen months, where entire professions were being
                created and destroyed within a single career, completion was an illusion — and a
                dangerous one. The half-life of a technical skill in 2025 was estimated at just five
                years. Within a decade, the expertise gained in a four-year degree was more than
                halfway obsolete.
              </p>
            </div>

            <div>
              <blockquote className="border-l-4 border-[#d92231] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;I walked across the stage, shook the Chancellor&rsquo;s hand, and felt an
                  overwhelming sense of loss. Not because I was leaving — but because the institution
                  was leaving me. I was twenty-two, and my formal education was over. That seemed
                  absurd even then.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Yuki Tanaka, Artemis Class of 2024, from the oral history project &ldquo;Before the Continuum&rdquo;
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              Alumni associations, for their part, were social clubs, not learning communities. They
              organized galas and golf outings. They published magazines celebrating alumni
              achievements. But they did not provide continued access to the intellectual life of the
              university. A graduate of 2010 who wanted to learn about quantum computing in 2025 had
              essentially nowhere to go within their alma mater. The university had fulfilled its
              contract: four years of education, a credential, and a lifetime subscription to the
              alumni magazine.
            </p>
            <p>
              Meanwhile, the &ldquo;skills gap&rdquo; narrative dominated public discourse. Employers
              complained that graduates lacked practical skills. Workers complained that their degrees
              were obsolete. Politicians proposed retraining programs that treated adult learners as
              broken machines needing repair rather than as curious minds seeking growth. The entire
              system was built on a catastrophic assumption: that learning was something you did first,
                and then stopped doing while you worked. Artemis recognized this assumption for what
                it was — not just wrong, but structurally impossible in a world of accelerating change.
            </p>
          </div>
        </section>

        {/* ── The Shift ── */}
        <section className="space-y-8">
          <SectionHeading>The Shift</SectionHeading>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                In 2029, Artemis made the announcement that shocked the academic world: there would be
                no more graduation ceremonies. Not because the university was closing — but because it
                was opening. Forever. The concept of &ldquo;graduating&rdquo; was replaced with
                &ldquo;transition points&rdquo; — moments of celebration and reflection that marked not
                an ending, but a shift in the learner&rsquo;s relationship to the university. A
                transition point acknowledged that you had completed a phase of deep work, acquired a
                set of credentials, and were ready to redirect your energy. But the door never closed.
              </p>
              <p>
                The infrastructure of the university was redesigned to support this permanence.
                Libraries expanded their digital collections to include lifelong access for all
                current and former learners. Faculty office hours were opened to anyone who had ever
                been affiliated with Artemis. Research positions, mentorship pairings, and
                collaborative projects were made available to returning learners at any stage of life.
                The campus — physical and virtual — became a perpetual commons.
              </p>
            </div>

            <div>
              <blockquote className="border-l-4 border-[#d92231] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;We did not eliminate endings. We eliminated the pretense that an ending was
                  permanent. A transition point says: &lsquo;You have grown. Now go grow elsewhere.
                  And when you need us again, we will be here.&rsquo;&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Chancellor Miriam Okafor, Address to the Faculty Senate, 2029
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              The credentialing system was overhauled to match. Rather than a single degree conferred
              at a single moment, learners accumulated micro-credentials over the course of a lifetime.
              Each credential represented a verified capability — not just knowledge, but demonstrated
              skill. The SkillPrint replaced the transcript as the official record of a learner&rsquo;s
              journey, and it was a living document, constantly updated as new capabilities were
              acquired. A forty-year-old returning to study regenerative agriculture after a career in
              finance didn&rsquo;t start over — they added a new dimension to an already rich profile.
            </p>
            <p>
              Perhaps the most radical change was cultural. The word &ldquo;alumnus&rdquo; — from the
              Latin for &ldquo;foster child&rdquo; — was retired. In its place, Artemis adopted the
              term &ldquo;perpetual community member.&rdquo; The shift was more than semantic. An
              alumnus was someone who had been sent forth. A perpetual community member was someone
              who belonged, always. The university ceased to be a place you attended and became a place
              you inhabited — physically, intellectually, and socially — for your entire life. The
              boundaries between &ldquo;student&rdquo; and &ldquo;not-student&rdquo; dissolved entirely.
            </p>
          </div>

          {/* Continuum visual */}
          <div className="bg-gray-50 border border-gray-200 p-8 space-y-6 mt-8">
            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm">The Continuum Model</h3>
            <div className="flex flex-col md:flex-row items-stretch gap-4">
              <div className="flex-1 bg-white p-6 border border-gray-200 space-y-3">
                <div className="w-full h-2 bg-[#d92231] rounded-full" />
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Arrive</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enter the continuum. Begin your first Calibrate phase. No predetermined endpoint.
                  You are now — and will always be — a learner in progress.
                </p>
              </div>
              <div className="flex items-center justify-center text-gray-300 text-2xl font-light md:rotate-0 rotate-90">
                →
              </div>
              <div className="flex-1 bg-white p-6 border border-gray-200 space-y-3">
                <div className="w-full h-2 bg-[#d92231]/60 rounded-full" />
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Transition</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Celebrate what you&rsquo;ve learned. Accumulate credentials. Redirect your focus. The
                  door never closes — it only swings inward again.
                </p>
              </div>
              <div className="flex items-center justify-center text-gray-300 text-2xl font-light md:rotate-0 rotate-90">
                →
              </div>
              <div className="flex-1 bg-white p-6 border border-gray-200 space-y-3">
                <div className="w-full h-2 bg-[#d92231]/30 rounded-full" />
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Return</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Come back at any age, any stage. New questions, new skills, new credentials. The
                  campus is always open. The community is always yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Achievement ── */}
        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              From the vantage point of 2100, the shift from graduation to continuum appears
              inevitable — as all great paradigm shifts do in retrospect. But at the time, it was
              regarded as utopian fantasy by some and dangerous heresy by others. That it succeeded
              is a testament not only to the vision of Artemis&rsquo;s leaders but to the millions of
              learners who proved, through their choices and their lives, that the model worked.
            </p>
          </div>

          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-[#d92231] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Lifelong learning became structural, not aspirational.</strong>
                Rather than exhorting alumni to &ldquo;keep learning&rdquo; while providing no
                infrastructure for it, Artemis built the infrastructure into the very fabric of the
                institution. By 2060, the average Artemis learner returned for formal study 4.7 times
                over the course of their life.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#d92231] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">The skills gap was eliminated at its source.</strong>
                Because learners never stopped acquiring credentials, they never fell into the
                obsolescence trap. Employers shifted from hiring based on degrees to hiring based on
                SkillPrint profiles — living records of continuously updated capabilities.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#d92231] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Intergenerational learning transformed the campus.</strong>
                With learners ranging from 17 to 87 studying side by side, the Artemis campus became
                a place of extraordinary generational exchange. Younger learners gained perspective
                and mentorship; older learners gained energy and fresh viewpoints. The age segregation
                that had characterized the old university model was revealed to be a design flaw, not
                a natural order.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#d92231] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">Transition celebrations replaced graduation as cultural touchstones.</strong>
                These celebrations — less formal, more personal, often designed by the learners
                themselves — became among the most cherished rituals in the Artemis community. They
                honored not just what had been learned, but what was yet to come.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#d92231] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">The university&rsquo;s financial model was revolutionized.</strong>
                With perpetual community members contributing to a lifelong learning endowment, Artemis
                achieved a financial stability that tuition-dependent institutions could never match.
                The model proved that investing in learners for life was not just morally right — it
                was economically sustainable.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#d92231] font-bold mt-1 shrink-0">&#9632;</span>
              <span>
                <strong className="text-gray-900">The concept of &ldquo;adult education&rdquo; was retired.</strong>
                When everyone is always learning, there is no separate category for those who return
                to learning later in life. The stigma of retraining, the anxiety of starting over, the
                feeling of being &ldquo;out of place&rdquo; among younger students — all of it
                evaporated. Learning was simply what humans do, at every age.
              </span>
            </li>
          </ul>

          <div className="mt-8">
            <blockquote className="border-l-4 border-[#d92231] pl-6 space-y-4">
              <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                &ldquo;The day we buried graduation was the day the university became immortal — not
                as an institution, but as a relationship. We stopped asking &lsquo;When will you
                finish?&rsquo; and started asking &lsquo;What will you learn next?&rsquo; That
                question has no end. And that is the point.&rdquo;
              </p>
              <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                &mdash; Chancellor Miriam Okafor, Farewell Address, 2047
              </footer>
            </blockquote>
          </div>
        </section>
      </div>

      <ExploreAnotherFuture currentPage="infinite-learning" goTo={goTo} />
    </>
  );
}
