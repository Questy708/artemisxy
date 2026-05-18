'use client';

import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture, Timeline, HeadlinesFrom2100 } from "../Shared";
import type { TimelineEvent } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

/* ─── Learner Profiles for Interactive Radar ─── */
const learnerProfiles = [
  {
    name: "Amara Okafor",
    location: "Lagos, 2074",
    values: [92, 65, 88, 95, 72], // CT, TM, CI, CA, CS
  },
  {
    name: "Kenji Tanaka",
    location: "Osaka, 2068",
    values: [71, 94, 60, 55, 89],
  },
  {
    name: "Elena Vasquez",
    location: "Bogotá, 2081",
    values: [78, 73, 82, 80, 85],
  },
];

const axisLabels = [
  "Critical Thinking",
  "Technical Mastery",
  "Collaborative Impact",
  "Civic Adaptability",
  "Creative Synthesis",
];

/* ─── Radar axis endpoints (matching the original pentagon geometry) ─── */
const axesMax = [
  { x: 0, y: -180 },     // Critical Thinking (top)
  { x: 156, y: -51 },    // Technical Mastery (top-right)
  { x: 96, y: 132 },     // Collaborative Impact (bottom-right)
  { x: -96, y: 132 },    // Civic Adaptability (bottom-left)
  { x: -156, y: -51 },   // Creative Synthesis (top-left)
];

function computeRadarPoints(values: number[]) {
  return values
    .map((v, i) => {
      const pct = v / 100;
      return `${axesMax[i].x * pct},${axesMax[i].y * pct}`;
    })
    .join(" ");
}

/* ─── Timeline data ─── */
const skillPrintTimeline: TimelineEvent[] = [
  { year: "2025", title: "The SkillPrint Concept", desc: "Artemis proposes replacing transcripts with living competency portraits" },
  { year: "2032", title: "Neural Mapping Breakthrough", desc: "Graphene-based sensors make real-time cognitive mapping possible" },
  { year: "2038", title: "First SkillPrints Issued", desc: "12 pilot universities issue SkillPrints alongside traditional diplomas" },
  { year: "2045", title: "The Transcript Abolished", desc: "Major employers announce they will no longer accept traditional transcripts" },
  { year: "2055", title: "Global SkillPrint Standard", desc: "ISO 2100-SK establishes universal SkillPrint format across 140 nations" },
  { year: "2070", title: "SkillPrint AI Integration", desc: "SkillPrints become predictive, mapping growth trajectories and learning recommendations" },
  { year: "2088", title: "The Universal Learner Profile", desc: "Every human on Earth receives a SkillPrint at birth, updated continuously through life" },
];

/* ─── Headlines data ─── */
const skillPrintHeadlines = [
  "Global SkillPrint Registry surpasses 4 billion active profiles",
  "Neural Skill Mapping detects previously unrecognized talent in 12% of assessed learners",
  "Last traditional university transcript issued in Northern Europe — era officially over",
  "SkillPrint-based hiring now mandatory in 89 countries; GPA references drop to zero",
  "Artemis learner's SkillPrint reveals cross-disciplinary genius missed by 3 traditional institutions",
];

export default function AxisFlipPage({ goTo }: Props) {
  /* ─── Interactive Radar State ─── */
  const [activeProfile, setActiveProfile] = useState(0);
  const [displayValues, setDisplayValues] = useState<number[]>(learnerProfiles[0].values);
  const prevValuesRef = useRef<number[]>([...learnerProfiles[0].values]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const startValues = [...prevValuesRef.current];
    const targetValues = learnerProfiles[activeProfile].values;
    const duration = 600;
    const startTime = performance.now();

    cancelAnimationFrame(rafRef.current);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // easeInOutQuad
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const current = startValues.map((s, i) => s + (targetValues[i] - s) * eased);
      setDisplayValues(current);
      prevValuesRef.current = current;

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [activeProfile]);

  return (
    <>
      <HeroHeader
        title="SkillPrints"
        description="In 2100, we examine the era when Artemis replaced the traditional transcript with biometric, AI-powered SkillPrints — dynamic portraits of capability that evolve alongside the learner."
        bgGradientClass="bg-[#8A0000]"
        bgImage="https://images.pexels.com/photos/6147082/pexels-photo-6147082.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">

        {/* ═══ The Summary ═══ */}
        <section className="space-y-6">
          <SectionHeading>The Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Step into a virtual time capsule to discover how Artemis transformed qualifications worldwide through SkillPrints — replacing static disciplinary silos and paper transcripts with a dynamic, biometric, AI-powered system for mapping human capability.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img
              src="https://images.pexels.com/photos/6147082/pexels-photo-6147082.jpeg?auto=compress&cs=tinysrgb&w=2500"
              alt="Video Thumbnail"
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/60 rounded flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-black/80 transition-colors">
                 <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ The SkillPrint — Interactive Radar (#5) ═══ */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The SkillPrint</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-2xl">A SkillPrint is not a transcript — it is a living portrait of capability. Where transcripts list courses, SkillPrints map competencies across five dimensions, revealing not just what you studied, but what you can do, who you collaborate with, and where you are headed.</p>

          {/* Profile selector buttons */}
          <div className="flex flex-wrap gap-3">
            {learnerProfiles.map((profile, i) => (
              <button
                key={i}
                onClick={() => setActiveProfile(i)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border cursor-pointer transition-all duration-300 ${
                  activeProfile === i
                    ? "bg-[#8A0000] text-white border-[#8A0000]"
                    : "bg-white text-gray-600 border-gray-300 hover:border-[#8A0000] hover:text-[#8A0000]"
                }`}
              >
                {profile.name}, {profile.location}
              </button>
            ))}
          </div>

          {/* Interactive radar chart */}
          <div className="w-full max-w-3xl mx-auto">
            <svg viewBox="0 0 500 440" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(250,210)">
                {/* Grid rings */}
                <polygon points="0,-180 156,-51 96,132 -96,132 -156,-51" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                <polygon points="0,-135 117,-38 72,99 -72,99 -117,-38" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                <polygon points="0,-90 78,-26 48,66 -48,66 -78,-26" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                <polygon points="0,-45 39,-13 24,33 -24,33 -39,-13" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                {/* Axes */}
                <line x1="0" y1="0" x2="0" y2="-180" stroke="#d1d5db" strokeWidth="1"/>
                <line x1="0" y1="0" x2="156" y2="-51" stroke="#d1d5db" strokeWidth="1"/>
                <line x1="0" y1="0" x2="96" y2="132" stroke="#d1d5db" strokeWidth="1"/>
                <line x1="0" y1="0" x2="-96" y2="132" stroke="#d1d5db" strokeWidth="1"/>
                <line x1="0" y1="0" x2="-156" y2="-51" stroke="#d1d5db" strokeWidth="1"/>

                {/* Data polygon — animated via React state */}
                <polygon
                  points={computeRadarPoints(displayValues)}
                  fill="rgba(138,0,0,0.15)"
                  stroke="#8A0000"
                  strokeWidth="2.5"
                />

                {/* Data points */}
                {displayValues.map((v, i) => {
                  const pct = v / 100;
                  return (
                    <circle
                      key={i}
                      cx={axesMax[i].x * pct}
                      cy={axesMax[i].y * pct}
                      r="5"
                      fill="#8A0000"
                    />
                  );
                })}

                {/* Center dot */}
                <circle cx="0" cy="0" r="3" fill="#8A0000"/>
              </g>
              {/* Labels */}
              <text x="250" y="22" textAnchor="middle" style={{fontSize:'11px', fontWeight:'bold'}} className="fill-gray-800">Critical Thinking</text>
              <text x="430" y="172" textAnchor="start" style={{fontSize:'11px', fontWeight:'bold'}} className="fill-gray-800">Technical Mastery</text>
              <text x="366" y="370" textAnchor="start" style={{fontSize:'11px', fontWeight:'bold'}} className="fill-gray-800">Collaborative Impact</text>
              <text x="134" y="370" textAnchor="end" style={{fontSize:'11px', fontWeight:'bold'}} className="fill-gray-800">Civic Adaptability</text>
              <text x="70" y="172" textAnchor="end" style={{fontSize:'11px', fontWeight:'bold'}} className="fill-gray-800">Creative Synthesis</text>
              {/* Title — shows active profile */}
              <text x="250" y="432" textAnchor="middle" style={{fontSize:'10px', letterSpacing:'0.15em'}} className="fill-gray-400 font-mono uppercase">
                {learnerProfiles[activeProfile].name.toUpperCase()}, {learnerProfiles[activeProfile].location.toUpperCase()}
              </text>
            </svg>
          </div>

          {/* Animated percentage readout */}
          <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto text-center">
            {displayValues.map((v, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs font-bold text-[#8A0000]">{Math.round(v)}%</div>
                <div className="text-[10px] text-gray-500">{axisLabels[i]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Historical Notes ═══ */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Historical Notes</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Setting</h4>
              <p className="font-bold italic text-sm text-gray-800 leading-relaxed">
                Memorize, test, forget, repeat: this was the typical experience of students worldwide at the dawn of the 21st century. The global economy was evolving at an unprecedented pace, with emerging technologies and shifting job markets creating a skills gap that traditional education struggled to bridge.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Students were increasingly finding their degrees obsolete before they even entered the workforce. Education systems varied wildly across countries, creating uneven opportunities and hindering global collaboration. The world needed a unified approach that could adapt to rapid change while celebrating cultural diversity.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">From Transcript to SkillPrint</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                The traditional academic transcript — a static list of courses and grades — was a 19th-century invention that persisted well into the 21st. It told employers almost nothing about what a graduate could actually do. SkillPrints replaced this relic: a dynamic, evolving record of a learner&apos;s abilities, experiences, and potential, powered by neural mapping and AI analysis.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Where transcripts captured what you studied, SkillPrints captured what you could do — and what you were capable of becoming. They emphasized skills over grades, competencies over credit hours, and growth over static achievement.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ Neural Skill Mapping ═══ */}
        <section className="space-y-12">
          <SectionHeading>Neural Skill Mapping</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                The backbone of SkillPrints was Neural Skill Mapping — a revolutionary system that used advanced brain-computer interfaces to create a real-time map of a learner&apos;s neural pathways. Students wore non-invasive, graphene-based sensors that monitored brain activity during learning and problem-solving tasks.
              </p>
              <p>
                The data was processed by quantum computers, creating a dynamic, three-dimensional representation of the student&apos;s evolving skill set — a living portrait of capability that grew and shifted with every new experience. This allowed educators and AI mentors to provide precisely targeted interventions, helping students strengthen weak areas and leverage their natural aptitudes more effectively.
              </p>
              <p>
                Neural Skill Mapping provided a highly visual and futuristic way to think about qualifications. No longer were students reduced to a GPA or a degree title. Their entire cognitive landscape — strengths, connections, growth edges, and untapped potential — was rendered visible and actionable.
              </p>
            </div>
            <div>
               <img src="https://images.pexels.com/photos/8294554/pexels-photo-8294554.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" alt="Neural Skill Mapping Visualization" />
            </div>
          </div>
        </section>

        {/* ═══ The Matrix Dimensions ═══ */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Matrix Dimensions</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Core Competencies (6-12 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Students began by developing a strong foundation in universal skills — critical thinking, digital literacy, and cross-cultural communication. This phase used advanced AI tutors and virtual reality simulations to provide personalized, immersive learning experiences. Learners engaged in global micro-projects, collaborating with peers from different continents to solve real-world challenges.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                This approach not only built core skills but fostered a sense of global citizenship from the outset. By working alongside teammates from diverse backgrounds, students developed the empathy, adaptability, and communication abilities that would serve as the bedrock of their entire journey.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Specialization Pathways (12-24 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Based on their interests, aptitudes, and global demand, students chose multiple specialization pathways — not traditional majors, but flexible routes through the Skills Matrix that combined knowledge areas in unique ways. A student might blend environmental science, blockchain technology, and indigenous wisdom to create innovative solutions for climate change.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The AI-driven system continuously suggested new connections and learning opportunities based on the student&apos;s progress and emerging global trends. No two students followed the same trajectory, yet all emerged with complementary skill sets that could interlock in powerful ways.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Global Implementation (12-18 months)</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Students applied their unique skill combinations to real-world projects across the globe. Using Artemis&apos;s network of partner organizations, they engaged in international internships, research projects, and entrepreneurial ventures. Advanced augmented reality tools ensured solutions were culturally appropriate and truly impactful.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Projects ranged from designing sustainable water systems in sub-Saharan Africa to developing AI-driven healthcare diagnostics in Southeast Asia, each leaving a tangible mark on the world while shaping the student into a versatile, globally-minded professional.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">The SkillPrint</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                The SkillPrint replaced traditional academic transcripts as a dynamic, evolving record of a student&apos;s abilities, experiences, and potential. Unlike static transcripts, SkillPrints captured academic achievements, co-curricular activities, work experiences, personal projects, and micro-credentials — all mapped through neural analysis and verified through AI-driven competency assessment.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Powered by sophisticated algorithms, SkillPrints emphasized skills over grades, highlighting competencies such as critical thinking, creativity, collaboration, and leadership. They grew and evolved alongside the learner, providing a living portrait of capabilities that employers, collaborators, and institutions could access and interpret in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ Transcript vs SkillPrint (#6) ═══ */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Transcript vs SkillPrint</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT — The Old Model */}
            <div className="bg-gray-100 border border-gray-300 p-6 space-y-5">
              <div className="text-center border-b border-gray-300 pb-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">Office of the Registrar</p>
                <h4 className="font-mono text-base font-bold text-gray-700">State University — Official Transcript</h4>
                <p className="text-[9px] font-mono text-gray-400 mt-1">Document ID: SU-2025-04781 · Issued: May 15, 2025</p>
              </div>

              <div className="space-y-1 text-xs font-mono text-gray-600">
                <p><span className="text-gray-400">Name:</span> Doe, Jane M.</p>
                <p><span className="text-gray-400">Student ID:</span> 4781-2930</p>
                <p><span className="text-gray-400">Program:</span> B.A. Economics</p>
                <p><span className="text-gray-400">Cumulative GPA:</span> <span className="font-bold text-gray-800">3.47</span></p>
              </div>

              <div className="border-t border-gray-200 pt-3">
                <p className="text-[9px] font-mono uppercase tracking-wider text-gray-400 mb-2">Course History</p>
                <div className="space-y-1.5 text-[11px] font-mono">
                  <div className="flex justify-between text-gray-600">
                    <span>Intro to Economics</span><span className="text-gray-800">B+</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Statistics 101</span><span className="text-gray-800">A-</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Microeconomics</span><span className="text-gray-800">B</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Macroeconomics</span><span className="text-gray-800">B+</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Calculus I</span><span className="text-gray-800">C+</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Political Science</span><span className="text-gray-800">B-</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Accounting Principles</span><span className="text-gray-800">B</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Senior Seminar</span><span className="text-gray-800">A-</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-3">
                <p className="text-[11px] font-mono text-gray-500">
                  <span className="text-gray-400">Degree Conferred:</span> B.A. Economics, 2025
                </p>
                <p className="text-[9px] font-mono text-gray-400 mt-2">This document is official only if bearing the seal of State University.</p>
              </div>

              <div className="text-center pt-2">
                <p className="text-[9px] font-mono uppercase tracking-widest text-gray-400">The Old Model</p>
              </div>
            </div>

            {/* RIGHT — The New Model */}
            <div className="bg-white border-2 border-[#8A0000]/20 p-6 space-y-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#8A0000]/15 pb-4">
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-[#8A0000]/60">Artemis SkillPrint</p>
                  <h4 className="text-base font-bold text-gray-900">Jane Doe</h4>
                </div>
                <div className="w-10 h-10 border-2 border-[#8A0000] flex items-center justify-center">
                  <span className="text-[10px] font-bold italic text-[#8A0000]">A</span>
                </div>
              </div>

              {/* Mini radar + percentage bars */}
              <div className="space-y-3">
                <p className="text-[9px] font-mono uppercase tracking-widest text-gray-400">Competency Map</p>
                {[
                  { label: "Critical Thinking", pct: 88 },
                  { label: "Technical Mastery", pct: 62 },
                  { label: "Collaborative Impact", pct: 79 },
                  { label: "Civic Adaptability", pct: 91 },
                  { label: "Creative Synthesis", pct: 74 },
                ].map((c) => (
                  <div key={c.label} className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-700 font-medium">{c.label}</span>
                      <span className="font-bold text-[#8A0000]">{c.pct}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#8A0000] rounded-full"
                        style={{ width: `${c.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Specialization Badges */}
              <div className="space-y-2">
                <p className="text-[9px] font-mono uppercase tracking-widest text-gray-400">Specializations</p>
                <div className="flex flex-wrap gap-2">
                  {["Data & Policy", "Urban Systems", "Community Finance"].map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border border-[#8A0000]/30 text-[#8A0000] bg-[#8A0000]/5"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Records */}
              <div className="space-y-2">
                <p className="text-[9px] font-mono uppercase tracking-widest text-gray-400">Verified Impact</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8A0000] mt-0.5 shrink-0">&#9654;</span>
                    <div>
                      <p className="text-[11px] font-bold text-gray-800">Designed floating school in Lagos</p>
                      <p className="text-[9px] text-gray-400">Verified · Collaborative Impact +12 · Civic Adaptability +8</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#8A0000] mt-0.5 shrink-0">&#9654;</span>
                    <div>
                      <p className="text-[11px] font-bold text-gray-800">Deployed microfinance platform in Medellín</p>
                      <p className="text-[9px] text-gray-400">Verified · Community Finance spec · Technical Mastery +6</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2 border-t border-[#8A0000]/10">
                <p className="text-[9px] font-mono uppercase tracking-widest text-[#8A0000]/60">The New Model</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic text-center max-w-2xl mx-auto">
            One person. Two records. The transcript reduced Jane Doe to a 3.47 and eight letter grades. The SkillPrint revealed a civic engineer, a community financier, a cross-disciplinary thinker the old system never thought to look for.
          </p>
        </section>

        {/* ═══ The Achievement ═══ */}
        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>SkillPrints did not merely update the transcript — they redefined what it meant to be qualified, replacing static records of coursework with living portraits of capability.</p>
          </div>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Rigid disciplines dissolved (2038–2055):</strong> Artemis replaced fixed majors with a flexible, AI-powered system that adapted to global needs in real-time. By 2050, the very concept of a &ldquo;major&rdquo; had become archaic — a relic of the industrial sorting mindset that had outlived its usefulness by at least half a century.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Qualifications became visual (2040–2065):</strong> Neural Skill Mapping made competencies dynamic, deeply personal, and instantly communicable. Employers stopped asking for transcripts and started requesting SkillPrint access — a shift that eliminated the information asymmetry that had plagued hiring for generations.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Unique skill portfolios (2042–2070):</strong> Students graduated with a portfolio of transferable skills rather than a traditional degree — no two SkillPrints alike. This diversity of capability became one of Artemis&apos;s most celebrated outcomes: a community where every member brought a genuinely irreplaceable combination of strengths.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Education-employment gap eliminated (2035–2055):</strong> Learning became directly tied to evolving global challenges, making graduation synonymous with readiness. The phrase &ldquo;entry-level job requiring three years of experience&rdquo; — once a cruel paradox — became unimaginable when every graduate carried a verified, evolving record of demonstrable capability.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Cultural intelligence at the core (2045–2075):</strong> Adaptability and cross-cultural competence became essential components of every educational journey. By 2070, SkillPrints included a &ldquo;Cultural Fluency&rdquo; dimension that employers ranked above technical mastery — a reversal that would have stunned the hiring managers of the 2020s.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#8A0000] font-bold mt-1 shrink-0">&#9632;</span>
              <span><strong className="text-gray-900">Transcripts replaced (2050–2080):</strong> Dynamic, biometric, evolving SkillPrints became the new global standard for recording each learner&apos;s journey. By 2080, the last university still issuing paper transcripts was profiled in an academic journal as a &ldquo;living museum&rdquo; — a cautionary tale about institutional inertia.</span>
            </li>
          </ul>
          <div className="mt-8">
            <blockquote className="border-l-4 border-[#8A0000] pl-6 space-y-4">
              <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                &ldquo;My transcript said I took Economics 301. My SkillPrint said I could restructure a failing municipal budget while navigating three stakeholder languages. Which would you hire?&rdquo;
              </p>
              <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                &mdash; Catalyst, Class of 2084
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ═══ Timeline (#7) ═══ */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The SkillPrint Timeline</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-2xl">
            From radical proposal to universal standard — the eight-decade journey that consigned the academic transcript to history and gave every learner a living portrait of capability.
          </p>
          <Timeline events={skillPrintTimeline} />
        </section>

        {/* ═══ Dispatches from 2100 (#16) ═══ */}
        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Dispatches from 2100</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <p className="text-sm text-gray-600 max-w-2xl">
            Intercepted transmissions from the global SkillPrint network — proof that the future of qualification is not a document, but a dialogue.
          </p>
          <HeadlinesFrom2100 headlines={skillPrintHeadlines} />
        </section>

        {/* ═══ Exhibit Article Archive ═══ */}
        <section className="space-y-24">
          <div>
            <hr className="border-t border-gray-200 mb-12" />
            <SectionHeading>Exhibit Article Archive</SectionHeading>
            <p className="text-sm text-gray-600 mt-4">Browse below to search through video archives of the exhibits displayed on May 1st, 2100.</p>
          </div>

          <div className="space-y-24">
            <div className="space-y-12">
              <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 42</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="font-bold italic uppercase tracking-wider text-sm">Neural Skill Mapping: The Technology</h4>
                  <p className="italic text-xs text-gray-500">Holographic interface, quantum computing core, bio-neural feedback sensors</p>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                    <p>Neural Skill Mapping was the backbone of SkillPrints. This revolutionary system used advanced brain-computer interfaces to create a real-time map of a learner&apos;s neural pathways, identifying strengths, potential connections, and areas for growth. Students wore non-invasive, graphene-based sensors that monitored brain activity during learning and problem-solving tasks.</p>
                    <p>The data was processed by quantum computers, creating a dynamic, three-dimensional representation of the student&apos;s evolving skill set. This allowed educators and AI mentors to provide precisely targeted interventions, helping students strengthen weak areas and leverage their natural aptitudes more effectively.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                    <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                  </div>
                  <p className="text-xs text-gray-500 italic">Watch the Neural Skill Mapping demonstration.</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 78</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="font-bold italic uppercase tracking-wider text-sm">Global Challenge Simulator</h4>
                  <p className="italic text-xs text-gray-500">Immersive holodeck, swarm intelligence algorithms, haptic feedback suits</p>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                    <p>The Global Challenge Simulator was a cornerstone of the Core Competencies phase. This advanced facility allowed students to tackle complex, multifaceted global issues in a safe, simulated environment. Using holographic technology, haptic feedback, and swarm intelligence algorithms, the simulator created realistic scenarios that adapted in real-time to students&apos; decisions.</p>
                    <p>Scenarios ranged from pandemic response coordination to climate adaptation planning, giving students a depth of experiential learning that would have been impossible in the physical world alone. The system&apos;s AI moderator ensured balanced teams and meaningful participation for every student.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                    <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                  </div>
                  <p className="text-xs text-gray-500 italic">Watch the Global Challenge Simulator in action.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <ExploreAnotherFuture currentPage="global-skills-matrix" goTo={goTo} />
    </>
  );
}
