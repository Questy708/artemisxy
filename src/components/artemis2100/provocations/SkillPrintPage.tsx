'use client';

import { Play } from 'lucide-react';
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from '../Shared';

interface Props {
  goTo: (page: string) => void;
}

export default function SkillPrintPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader
        title="SkillPrint"
        description="A view from 2100 of the era when Artemis replaced transcripts with living skill-prints."
        bgGradientClass="bg-[#1a365d]"
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* ── Summary section with video thumbnail ── */}
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            View the restored exhibit documentary on the SkillPrint revolution — the moment when
            Artemis consigned the traditional transcript to the archive and introduced a living
            document that mapped who learners were becoming, not just what courses they had passed.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2500"
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
              alt="SkillPrint archival footage"
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
                The academic transcript was one of the most enduring and least adequate artifacts of
                twentieth-century education. A single sheet of paper — or, later, a digital PDF
                masquerading as progress — it listed courses taken, grades received, and credits
                earned. It was legible to registrars and comprehensible to graduate admissions
                committees, but it communicated almost nothing about what a student could actually
                do. A B+ in &ldquo;Introduction to Statistics&rdquo; told you that someone had sat through a
                class and performed adequately on exams; it did not tell you whether they could
                design an experiment, interpret a dataset, or communicate findings to a
                non-technical audience.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                This information asymmetry created enormous inefficiencies. Employers, faced with
                thousands of nearly identical transcripts, resorted to proxy measures — institutional
                prestige, GPA cutoffs, alumni networks — to make hiring decisions. The result was a
                system that rewarded pedigree over ability, credentials over competence, and
                conformity over creativity. Students who had acquired genuine skills through
                unconventional paths — independent projects, community work, entrepreneurial
                ventures — found these achievements invisible on their transcripts. The document
                that was supposed to represent their learning actually obscured it.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                The transcript was also fundamentally static. It captured a snapshot of a moment —
                the courses completed by a particular date — and then froze. There was no mechanism
                for updating, supplementing, or contextualizing. A thirty-year-old professional
                applying for a position was still represented by a document from their early
                twenties, as if nothing they had learned or accomplished in the intervening decade
                counted. In an era of lifelong learning, the transcript was not merely inadequate;
                it was an active obstacle to recognition and mobility.
              </p>
              <blockquote className="border-l-4 border-[#1a365d] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;The transcript was a map of a territory that no longer existed — a record of
                  where you had been, with no indication of where you could go.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Dr. Ren Akagi, Artemis Registrar, 2031–2049
                </footer>
              </blockquote>
              <p className="text-sm text-gray-600 leading-relaxed">
                Early attempts at reform — digital portfolios, competency-based transcripts,
                badges and micro-credentials — nibbled at the edges but failed to replace the
                underlying model. They were add-ons to a system designed for a different era,
                and employers continued to default to the familiar. What was needed was not an
                improved transcript but a fundamentally different kind of document — one that was
                born digital, continuously updated, and designed to reveal capability rather than
                record compliance.
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
                Artemis replaced the transcript with the SkillPrint — a living, evolving document
                that mapped competencies across multiple dimensions, continuously updated throughout
                a learner&rsquo;s lifetime. Where the transcript asked &ldquo;What courses did you take?&rdquo;, the
                SkillPrint asked &ldquo;What can you do?&rdquo; Where the transcript was static, the SkillPrint
                was dynamic. Where the transcript reduced a person to a list of grades, the
                SkillPrint rendered them as a multidimensional profile of demonstrated ability.
              </p>
              <p>
                The SkillPrint was organized around competency clusters rather than course lists.
                Each cluster — such as &ldquo;Quantitative Reasoning,&rdquo; &ldquo;Collaborative Leadership,&rdquo;
                &ldquo;Creative Synthesis,&rdquo; or &ldquo;Ethical Reasoning in Complex Systems&rdquo; — contained
                evidence of demonstrated skill: projects completed, artifacts created, assessments
                passed, peer evaluations received, and real-world impact documented. The level of
                detail was extraordinary, but the design was elegant. A reviewer could zoom out to
                see a holistic profile or zoom in to examine the specific evidence behind any
                competency claim.
              </p>
              <p>
                Crucially, the SkillPrint was not a self-reported resume. Every competency claim
                required verified evidence — a paper published, a prototype built, a community
                served, a problem solved. The verification came from multiple sources: faculty
                assessors, peer reviewers, external partners, and automated analysis of work
                products. It was, in essence, a crowdsourced, multi-source validation of an
                individual&rsquo;s capabilities — far more reliable than any single professor&rsquo;s grade.
              </p>
            </div>

            <div className="space-y-6">
              <blockquote className="border-l-4 border-[#1a365d] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;My SkillPrint showed employers not just what I knew, but how I thought, how I
                  collaborated, and what I had actually built. It was the difference between
                  reading someone&rsquo;s medical chart and watching them run a marathon.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Priya Sharma, Populi Cohort 2038
                </footer>
              </blockquote>

              <div className="bg-gray-50 border border-gray-200 p-6 space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-700">SkillPrint Architecture</h4>
                <div className="space-y-3 text-xs text-gray-600 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="bg-[#1a365d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0">01</span>
                    <span><strong>Competency Clusters</strong> — Organized not by department but by capability domain</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-[#1a365d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0">02</span>
                    <span><strong>Evidence Artifacts</strong> — Tangible proof: publications, prototypes, community impact</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-[#1a365d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0">03</span>
                    <span><strong>Multi-Source Verification</strong> — Faculty, peers, external partners, automated analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-[#1a365d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0">04</span>
                    <span><strong>Temporal Layering</strong> — Skills grow over time; the map evolves with the person</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-[#1a365d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0">05</span>
                    <span><strong>Granular Privacy</strong> — Learners control what is visible to whom, and when</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Details: Comparison ── */}
        <section className="space-y-12">
          <SectionHeading>Key Details</SectionHeading>
          <p className="text-sm text-gray-600 leading-relaxed">
            The structural difference between the old transcript and the SkillPrint was not merely
            a matter of format — it was a difference of kind. The transcript represented learning
            as a list; the SkillPrint represented it as a landscape. Below, a visual comparison.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Old transcript */}
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-500">
                The Old Transcript — Static List
              </h4>
              <div className="bg-gray-50 border border-gray-200 p-6 min-h-64 flex flex-col items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full max-w-xs" preserveAspectRatio="xMidYMid meet">
                  {/* Simulated transcript - a list of lines */}
                  <rect x="10" y="5" width="180" height="110" rx="2" fill="white" stroke="#d1d5db" strokeWidth="0.5" />
                  <text x="100" y="18" textAnchor="middle" className="text-[5px] fill-gray-500 font-bold uppercase tracking-widest">Official Transcript</text>
                  <line x1="20" y1="22" x2="180" y2="22" stroke="#e5e7eb" strokeWidth="0.5" />
                  {/* Course lines */}
                  <text x="25" y="32" className="text-[4px] fill-gray-400">Intro to Economics ............ B+</text>
                  <text x="25" y="40" className="text-[4px] fill-gray-400">Calculus I ................... A-</text>
                  <text x="25" y="48" className="text-[4px] fill-gray-400">Western Civ .................. B</text>
                  <text x="25" y="56" className="text-[4px] fill-gray-400">Intro to Philosophy .......... A</text>
                  <text x="25" y="64" className="text-[4px] fill-gray-400">Statistics 101 ............... B+</text>
                  <text x="25" y="72" className="text-[4px] fill-gray-400">Microeconomics ............... B-</text>
                  <text x="25" y="80" className="text-[4px] fill-gray-400">Ethics ........................ A-</text>
                  <line x1="20" y1="86" x2="180" y2="86" stroke="#e5e7eb" strokeWidth="0.5" />
                  <text x="25" y="94" className="text-[4px] fill-gray-500 font-bold">GPA: 3.42</text>
                  <text x="25" y="104" className="text-[3.5px] fill-gray-300">No information about skills, projects, or capabilities</text>
                </svg>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                A static list of courses and grades — a snapshot frozen in time. It tells you what
                someone sat through, not what they can do. No evidence of applied skill, no record
                of growth, no window into how this person thinks, creates, or leads.
              </p>
            </div>

            {/* SkillPrint */}
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-[#1a365d]">
                The SkillPrint — Dynamic Map
              </h4>
              <div className="bg-gray-50 border border-gray-200 p-6 min-h-64 flex flex-col items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full max-w-xs" preserveAspectRatio="xMidYMid meet">
                  {/* SkillPrint as a constellation / network map */}
                  <rect x="10" y="5" width="180" height="110" rx="2" fill="white" stroke="#1a365d" strokeWidth="0.5" opacity="0.1" />

                  {/* Central node */}
                  <circle cx="100" cy="60" r="6" fill="#1a365d" opacity="0.9" />
                  <text x="100" y="63" textAnchor="middle" className="text-[3.5px] fill-white font-bold">YOU</text>

                  {/* Competency clusters as connected nodes */}
                  <circle cx="55" cy="35" r="10" fill="#1a365d" opacity="0.2" stroke="#1a365d" strokeWidth="0.5" />
                  <text x="55" y="37" textAnchor="middle" className="text-[3px] fill-[#1a365d] font-bold">Quant.</text>

                  <circle cx="145" cy="30" r="12" fill="#1a365d" opacity="0.15" stroke="#1a365d" strokeWidth="0.5" />
                  <text x="145" y="32" textAnchor="middle" className="text-[3px] fill-[#1a365d] font-bold">Creative</text>

                  <circle cx="40" cy="75" r="9" fill="#1a365d" opacity="0.25" stroke="#1a365d" strokeWidth="0.5" />
                  <text x="40" y="77" textAnchor="middle" className="text-[3px] fill-[#1a365d] font-bold">Lead.</text>

                  <circle cx="150" cy="80" r="11" fill="#1a365d" opacity="0.18" stroke="#1a365d" strokeWidth="0.5" />
                  <text x="150" y="82" textAnchor="middle" className="text-[3px] fill-[#1a365d] font-bold">Ethical</text>

                  <circle cx="100" cy="100" r="8" fill="#1a365d" opacity="0.22" stroke="#1a365d" strokeWidth="0.5" />
                  <text x="100" y="102" textAnchor="middle" className="text-[3px] fill-[#1a365d] font-bold">Collab.</text>

                  {/* Evidence dots inside clusters */}
                  <circle cx="52" cy="33" r="1.5" fill="#1a365d" />
                  <circle cx="58" cy="37" r="1.5" fill="#1a365d" />
                  <circle cx="55" cy="31" r="1.5" fill="#1a365d" />

                  <circle cx="142" cy="28" r="1.5" fill="#1a365d" />
                  <circle cx="148" cy="32" r="1.5" fill="#1a365d" />
                  <circle cx="145" cy="26" r="1.5" fill="#1a365d" />
                  <circle cx="143" cy="34" r="1.5" fill="#1a365d" />

                  <circle cx="38" cy="73" r="1.5" fill="#1a365d" />
                  <circle cx="42" cy="77" r="1.5" fill="#1a365d" />

                  <circle cx="148" cy="78" r="1.5" fill="#1a365d" />
                  <circle cx="153" cy="83" r="1.5" fill="#1a365d" />
                  <circle cx="147" cy="84" r="1.5" fill="#1a365d" />

                  {/* Connection lines */}
                  <line x1="100" y1="60" x2="55" y2="35" stroke="#1a365d" strokeWidth="0.3" opacity="0.4" />
                  <line x1="100" y1="60" x2="145" y2="30" stroke="#1a365d" strokeWidth="0.3" opacity="0.4" />
                  <line x1="100" y1="60" x2="40" y2="75" stroke="#1a365d" strokeWidth="0.3" opacity="0.4" />
                  <line x1="100" y1="60" x2="150" y2="80" stroke="#1a365d" strokeWidth="0.3" opacity="0.4" />
                  <line x1="100" y1="60" x2="100" y2="100" stroke="#1a365d" strokeWidth="0.3" opacity="0.4" />

                  {/* Cross-cluster connections */}
                  <line x1="55" y1="35" x2="145" y2="30" stroke="#1a365d" strokeWidth="0.2" opacity="0.2" strokeDasharray="2,2" />
                  <line x1="40" y1="75" x2="150" y2="80" stroke="#1a365d" strokeWidth="0.2" opacity="0.2" strokeDasharray="2,2" />

                  <text x="100" y="15" textAnchor="middle" className="text-[4px] fill-[#1a365d] font-bold uppercase tracking-widest">Living SkillPrint</text>
                  <text x="100" y="114" textAnchor="middle" className="text-[3px] fill-gray-400">Continuously updated · Evidence-based · Multi-dimensional</text>
                </svg>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                A living constellation of demonstrated competencies — each node a cluster of verified
                skills, each connection a relationship between domains. The map grows and evolves
                with the person, reflecting not just what they know but who they are becoming.
              </p>
            </div>
          </div>
        </section>

        {/* ── The Achievement ── */}
        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p className="leading-relaxed">
              The SkillPrint did not merely replace the transcript — it redefined the relationship
              between learning, work, and identity. Its adoption at Artemis and across the global
              collegium produced cascading effects that transformed the entire ecosystem of
              education and employment.
            </p>
            <ul className="list-disc pl-5 space-y-3 leading-relaxed">
              <li>
                <strong className="text-gray-800">Employer revolution:</strong> Within a decade,
                major employers across industries had adopted SkillPrint-compatible hiring systems.
                The traditional resume — a self-reported, unverified, format-locked document — was
                replaced by SkillPrint views that employers could query for the specific competencies
                they needed. Hiring became faster, fairer, and more accurate.
              </li>
              <li>
                <strong className="text-gray-800">Equity and access:</strong> Because the SkillPrint
                verified demonstrated competence regardless of where or how it was acquired, it
                eliminated the advantage of institutional prestige. A self-taught coder with a
                verified SkillPrint could compete on equal footing with an Ivy League graduate.
                The credentialism that had reinforced social stratification for generations began
                to dissolve.
              </li>
              <li>
                <strong className="text-gray-800">Lifelong relevance:</strong> The SkillPrint was
                designed to grow with its owner. Every new skill, project, and accomplishment was
                added to the map, creating a continuously updated record of capability. A
                fifty-year-old&rsquo;s SkillPrint was as current and accurate as a twenty-year-old&rsquo;s —
                and far richer, reflecting decades of accumulated expertise.
              </li>
              <li>
                <strong className="text-gray-800">Learner agency:</strong> The granular privacy
                controls of the SkillPrint gave learners unprecedented ownership of their own
                narrative. They could choose which competencies to highlight for different audiences,
                share evidence at varying levels of detail, and control who saw what. The document
                served the learner, not the institution.
              </li>
              <li>
                <strong className="text-gray-800">Curricular transformation:</strong> Once the
                SkillPrint became the primary artifact of learning, courses and programs evolved to
                produce demonstrable competencies rather than seat-time and grades. Faculty designed
                assessments that generated evidence for the SkillPrint, and students chose learning
                experiences based on the competency gaps in their maps.
              </li>
              <li>
                <strong className="text-gray-800">Interoperability and portability:</strong> The
                SkillPrint was built on open standards, allowing it to be read and verified across
                institutions, employers, and borders. A learner could carry their SkillPrint from
                Artemis to any institution in the global collegium — or to any employer in the world —
                and it would be immediately legible. The walled gardens of institutional transcripts
                were replaced by a universal language of demonstrated capability.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <ExploreAnotherFuture currentPage="skillprint" goTo={goTo} />
    </>
  );
}
