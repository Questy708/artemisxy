'use client';

import { SectionHeading, HeroHeader } from './Shared';

interface Props {
  goTo: (page: string) => void;
}

const CORE_TEAM = [
  'Founding Dean, Curriculum Design',
  'Director, Experiential Learning',
  'Professor of the Practice, Futures Thinking',
  'Lead Designer, Artemis Institute for the Future of Learning',
  'Associate Director, Student Agency Lab',
  'Senior Researcher, Learning Continuum Initiative',
  'Design Strategist, Provocation Studio',
  'Director, Community-Engaged Assessment',
  'Storyteller-in-Residence, Narrative Futures',
];

const PARTNERS = [
  'The Global Collegium Alliance',
  'Lumina Foundation for Innovative Learning',
  'The Horizons Project',
  'Center for Adaptive Learning Systems',
  'The Meridian Institute for Interdisciplinary Inquiry',
  'NextEdu Collaborative',
  'The Long Now Foundation for Education',
  'Civic Futures Initiative',
];

export default function AboutPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="About"
        description="The Artemis 2100 Project, which generated the exhibit and website you're reading now, was sparked at the Artemis Institute for the Future of Learning."
        bgGradientClass="bg-gray-800"
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-24">
        {/* ── Project Background ─────────────────────────────── */}
        <section>
          <SectionHeading>The Project</SectionHeading>
          <div className="mt-8 space-y-6">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The Artemis 2100 Project began with a simple but audacious question: what if we could
              travel to the year 2100 and look back at the pivotal moments that reshaped higher
              education? Not to predict the future, but to expand the horizon of what we believe is
              possible — and to accelerate the changes we already know are needed.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Over the course of two years, a design team at the Artemis Institute for the Future of
              Learning conducted more than three hundred interviews with students, faculty,
              administrators, alumni, employers, and community leaders. We facilitated design
              workshops on five continents. We analyzed demographic data, labor market projections,
              and emerging pedagogical research. We studied experiments at peer institutions and
              innovative organizations far outside the traditional boundaries of higher education.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The provocations that emerged from this process are deliberately bold. They are not
              predictions, and they are not policy recommendations. They are design fictions —
              imagined futures that illuminate the choices we face today. Each one is grounded in
              real trends and real tensions, but each also contains an element of provocation, a
              deliberate stretching of the possible designed to challenge assumptions and open new
              avenues for exploration.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The experiential exhibit &ldquo;Artemis 2100&rdquo; was staged as a time-travel
              journey, inviting participants to arrive in the year 2100 and discover — through
              artifacts, narratives, and interactive installations — how education had transformed
              over the preceding seventy-five years. This website extends that experience into a
              digital format, making the provocations and toolkit accessible to anyone, anywhere,
              who wants to join the conversation about the future of learning.
            </p>
          </div>
        </section>

        {/* ── Our Approach ───────────────────────────────────── */}
        <section>
          <SectionHeading>Our Approach</SectionHeading>
          <div className="mt-8 space-y-6">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We approached this project not as researchers seeking to prove a hypothesis, but as
              designers seeking to expand a conversation. Our methodology drew on speculative
              design, futures thinking, and human-centered design — three traditions that share a
              commitment to rigor without reduction, and to imagination grounded in evidence.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              In the spirit of speculative design, we treated the future as a material to be shaped
              rather than a destiny to be fulfilled. We created artifacts from possible futures —
              course catalogs from 2100, alumni profiles from 2080, campus maps from 2065 — and used
              them as probes to surface the hopes, fears, and unexamined assumptions that shape
              current institutional decisions.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              In the spirit of human-centered design, we centered the voices and experiences of the
              people most affected by educational institutions — learners at every stage of life,
              from every walk of life. Their stories, frustrations, aspirations, and ideas formed
              the raw material from which every provocation was crafted.
            </p>
          </div>
        </section>

        {/* ── Acknowledgements ───────────────────────────────── */}
        <section>
          <SectionHeading>Acknowledgements</SectionHeading>

          <div className="mt-8 space-y-12">
            {/* The Core Team */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                The Core Team
              </h3>
              <ul className="space-y-2">
                {CORE_TEAM.map((role) => (
                  <li key={role} className="text-gray-600 text-sm leading-relaxed">
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Learners */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                Our Learners
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                who helped uncover important insights and sparked many of the key ideas in the
                exhibit. More than three hundred learners — undergraduates, graduate students,
                professional students, returning learners, and lifelong learners — shared their
                stories, sat for interviews, participated in workshops, and bravely offered their
                honest assessments of what works, what doesn&apos;t, and what might yet be. Their
                voices are woven into every provocation on this site.
              </p>
            </div>

            {/* Our Partners */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                Our Partners
              </h3>
              <ul className="space-y-2">
                {PARTNERS.map((partner) => (
                  <li key={partner} className="text-gray-600 text-sm leading-relaxed">
                    {partner}
                  </li>
                ))}
              </ul>
            </div>

            {/* And Special Thanks to... */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                And Special Thanks to&hellip;
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The hundreds of faculty members, staff, and administrators at Artemis and across the
                Global Collegium Alliance who gave generously of their time, their candor, and their
                imagination. The alumni who reflected on their educational journeys with honesty and
                vulnerability. The employers and community leaders who helped us understand what the
                world needs from its learners. The designers, writers, and artists who brought the
                exhibit and this website to life. And above all, the learners — past, present, and
                future — who remind us every day that education is not a system to be optimized but
                a life to be lived, and that the best institutions are the ones that never stop
                asking how they might be better.
              </p>
            </div>
          </div>
        </section>

        {/* ── Colophon ───────────────────────────────────────── */}
        <section>
          <SectionHeading>Colophon</SectionHeading>
          <div className="mt-8 space-y-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              This website was designed and developed by the Artemis Institute for the Future of
              Learning. It was inspired by the Stanford 2025 project at the d.school&apos;s K12 Lab
              and follows a similar design philosophy: that speculative futures can be a powerful
              catalyst for present-day action.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The provocations, toolkit, and all content on this site are released under a Creative
              Commons Attribution-NonCommercial-ShareAlike 4.0 International License. We encourage
              you to remix, adapt, and build upon this work — and to share what you create.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
