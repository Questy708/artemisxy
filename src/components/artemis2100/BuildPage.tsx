'use client';

import { SectionHeading, HeroHeader } from './Shared';
import { Download } from 'lucide-react';

interface Props {
  goTo: (page: string) => void;
}

const TOOLKIT_CARDS = [
  {
    letter: 'R',
    title: 'Discover',
    italicTitle: 'Discover',
    description:
      'The Discover Worksheets are excursions into imagined worlds inspired by the provocations. Each worksheet invites you to step fully into a possible future, explore its contours, and reflect on what feels familiar, what feels alien, and what feels inevitable. Through guided prompts and imaginative scenarios, you will map the landscape of each provocation and surface the assumptions you carry about how education could — and should — work.',
    color: '#66B83B',
    buttonLabel: 'Download Discover Worksheets',
  },
  {
    letter: 'I',
    title: 'Create',
    italicTitle: 'Create',
    description:
      'The Create Cards are prompts to spark inspiration and design your own provocations. Whether you are a student dreaming up a new kind of transcript, a faculty member rethinking the seminar, or an administrator imagining a campus without departments, these cards give you a starting point. Mix, remix, combine, and riff on them — the goal is not perfection but provocation. Every great experiment begins with a question that feels slightly dangerous to ask.',
    color: '#007f9c',
    buttonLabel: 'Download Create Cards',
  },
  {
    letter: 'T',
    title: 'Commit',
    italicTitle: 'Commit',
    description:
      'The Commit Playbook is a set of activities and deliverables to turn ideas into action. Moving from imagination to implementation is the hardest part of any design process. The Playbook provides structured activities — from stakeholder mapping and rapid prototyping to pilot design and impact assessment — that help you take the spark of a provocation and give it structure, timeline, and accountability. This is where the future stops being theoretical and starts becoming real.',
    color: '#d92231',
    buttonLabel: 'Download Commit Playbook',
  },
];

export default function BuildPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="Design Your Future"
        description="Resources for designing the future of living & learning where you are"
        bgGradientClass="bg-[#d92231]"
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* ── Why Future Artemis? ─────────────────────────────── */}
        <section>
          <SectionHeading>Why Future Artemis?</SectionHeading>
          <div className="mt-8 max-w-3xl">
            <p className="font-serif italic text-xl md:text-2xl text-gray-800 leading-relaxed">
              The world is changing faster than our institutions. At Artemis, we believe that the
              best way to prepare for an uncertain future is not to predict it — but to design for
              it. Future Artemis is our commitment to proactive, imaginative, human-centered design
              thinking applied to the most complex system we know: how people learn, grow, and
              contribute throughout their lives.
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
              The provocations you have explored on this site are not science fiction. They are
              design fictions — carefully constructed thought experiments rooted in real trends, real
              tensions, and real possibilities. Each one emerged from hundreds of conversations with
              learners, educators, employers, and community leaders. Each one is an invitation to
              ask: &ldquo;What if?&rdquo; — and then to follow that question all the way through to
              action.
            </p>
          </div>
        </section>

        {/* ── Three Column Grid ──────────────────────────────── */}
        <section>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* People First */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#66B83B] flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                People First
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Every provocation in the Artemis 2100 project begins with a question about people —
                not systems, not technology, not policy. How do learners actually experience their
                education? What do they need at 18, at 28, at 58? What would a university look like
                if it were designed around the full arc of a human life rather than a four-year
                window? People First means centering the lived experience of learners and educators
                in every design decision, every experiment, and every policy change.
              </p>
            </div>

            {/* Our Provocations, Your Projects */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#007f9c] flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                Our Provocations, Your Projects
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                The provocations on this site are starting points, not endpoints. They are
                deliberately provocative — meant to challenge assumptions, spark debate, and open
                doors that you might not have known existed. But provocations alone do not change
                the world. Projects do. We invite you to take any idea from this exhibit — whether
                it resonates with you completely or makes you uncomfortable — and use it as the seed
                for a real experiment in your own context. Adapt it, extend it, subvert it. Make it
                yours.
              </p>
            </div>

            {/* Small Actions = Big Change */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#d92231] flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                Small Actions = Big Change
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                You do not need to redesign an entire university to make a difference. The most
                powerful changes in education have often started small — a single course offered in a
                new way, a new kind of advising relationship, a different way of recognizing student
                achievement. The Commit Playbook is built around the idea that small, deliberate
                actions, taken with intention and measured with care, can compound into
                transformational change. Start where you are. Use what you have. Do what you can.
              </p>
            </div>
          </div>
        </section>

        {/* ── How to Use This Toolkit ────────────────────────── */}
        <section>
          <SectionHeading>How to Use This Toolkit</SectionHeading>
          <p className="mt-8 text-gray-600 leading-relaxed text-sm md:text-base max-w-3xl">
            The Artemis 2100 toolkit is organized into three progressive phases. You can move
            through them in order — from discovery to creation to commitment — or you can jump in
            wherever you feel most ready. Each phase builds on the one before, but each also stands
            on its own. The important thing is to begin.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {TOOLKIT_CARDS.map((card) => (
              <div
                key={card.letter}
                className="bg-gray-100 aspect-[4/3] rounded-lg p-4 md:p-6 flex items-center justify-center"
              >
                <div className="bg-white rounded shadow-lg p-6 md:p-8 w-full h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <span
                        className="text-5xl md:text-6xl font-bold leading-none"
                        style={{ color: card.color }}
                      >
                        {card.letter}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif italic text-gray-900 mt-2">
                        {card.italicTitle}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <button
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white px-4 py-2 rounded transition-colors cursor-pointer"
                    style={{ backgroundColor: card.color }}
                  >
                    <Download className="w-3 h-3" />
                    {card.buttonLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Getting Started ────────────────────────────────── */}
        <section>
          <SectionHeading>Getting Started</SectionHeading>
          <div className="mt-8 max-w-3xl space-y-6">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              There is no single right way to use this toolkit. Some teams will start with Discover,
              immersing themselves in the imagined futures before sketching their own. Others will
              dive straight into Create, using the cards as catalysts for brainstorming sessions and
              design sprints. Still others will begin with Commit, using the Playbook to structure
              an experiment they have already been thinking about.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We recommend gathering a small group — three to eight people who share a context, a
              question, or a stake in the future of learning. Read the provocations together. Use
              the Discover Worksheets to deepen your understanding. Pull Create Cards at random and
              let the unexpected combinations spark new thinking. Then use the Commit Playbook to
              turn your best ideas into a concrete plan with a timeline, metrics, and
              accountability.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The future of education is not something that happens to us. It is something we make
              — together, one experiment at a time. This toolkit is your compass. The journey is
              yours to design.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
