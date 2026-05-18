'use client';

import { useEffect, useState } from 'react';
import { cn, SectionHeading, PROVOCATIONS } from './Shared';
import { Play } from 'lucide-react';

const SECTIONS = [
  {
    id: 'intro',
    title: 'Learning & Living at Artemis',
    desc: 'An exploration of education experiences in the future',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&q=80&w=2500',
  },
  {
    id: 'context-1',
    title: "'A complex and special setting'",
    desc: '',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2500',
  },
  {
    id: 'context-3',
    title: 'Exploring a shifting landscape',
    desc: '',
    img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=2500',
  },
  {
    id: 'context-4',
    title: 'Provocations to Spark Experiments',
    desc: '',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2500',
  },
  {
    id: 'fast-forward',
    title: "Let's fast forward to a possible future...",
    desc: 'What might the university experience be then?',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2500',
  },
];

interface HomePageProps {
  goTo: (page: string) => void;
}

export default function HomePage({ goTo }: HomePageProps) {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      let currentSection = 'intro';
      for (const el of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentSection = el.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full relative bg-white">
      {/* Side Dots Navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="relative group w-3 h-3 flex items-center justify-end"
            aria-label={`Scroll to ${s.title}`}
          >
            <div className={cn(
              "w-2 h-2 rounded-full transition-all duration-300 md:w-3 md:h-3",
              activeSection === s.id ? "bg-gray-800 scale-125" : "bg-gray-400 group-hover:bg-gray-600"
            )} />
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 whitespace-nowrap hidden md:block">
              {s.title}
            </span>
          </a>
        ))}
      </nav>

      {/* Intro */}
      <ParallaxSection section={SECTIONS[0]}>
        <div className="space-y-12">
          <SectionHeading>This is a fascinating time to be at Artemis.</SectionHeading>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
              <p>Our university—like most—was designed around a model of education that had remained fairly constant for hundreds of years. But many schools and educators are currently looking at this model with fresh eyes. The potential disruption posed by online learning allows us to question how time, space, expertise, accreditation, and student agency may also change within higher education. Many parts of the educational experience are ripe for reinvention.</p>
            </div>
            <div>
              <blockquote className="border-l-4 border-yellow-400 pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;Education is about building a great human—intellectually and emotionally—and answering the question: &lsquo;who do I want to be?&rsquo;&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Artemis Founding Charter, 2025
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Context 1 */}
      <ParallaxSection section={SECTIONS[1]}>
        <div className="space-y-12">
          <h2 className="text-3xl font-bold max-w-2xl text-gray-900 leading-tight">Exploring the learning experience</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
              <p>Education has multiple aims: it is a place to gain expertise and develop abilities, but also to come of age. These are entwined together in a residential learning experience—a complex and special setting. Enormous energy and investment were being placed in experimentation and pioneering in the <em>online</em> learning space. We wanted to complement these efforts with an exploration of learning and living <em>on campus</em>, now and in the future.</p>
            </div>
            <div>
              <blockquote className="border-l-4 border-[#007f9c] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;I needed the right stimuli to provoke &lsquo;breaking moments&rsquo; to get to know myself.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Artemis Student, Class of 2031
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Context 3 */}
      <ParallaxSection section={SECTIONS[2]}>
        <div className="space-y-12">
          <h2 className="text-3xl font-bold max-w-2xl text-gray-900 leading-tight">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
              <p>A design team from the Artemis Institute worked with hundreds of perceptive, creative, and generous students, faculty, and administrators across the global collegium to explore this territory. We considered many lenses—from how learners prepare for an Artemis education, to patterns of decision-making about what and how they study, to the shifting needs and expectations from future employers and communities alike.</p>
            </div>
            <div>
              <blockquote className="border-l-4 border-[#d92231] pl-6 space-y-4">
                <p className="font-serif italic text-xl text-gray-800 leading-snug">
                  &ldquo;According to the World Economic Forum, 65% of children entering primary school will end up in jobs that do not yet exist. The old model cannot prepare them for an unknowable future.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-2 block leading-[1.6]">
                  &mdash; Future of Jobs Report, 2023
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Context 4 */}
      <ParallaxSection section={SECTIONS[3]}>
        <div className="space-y-12">
          <h2 className="text-3xl font-bold max-w-2xl text-gray-900 leading-tight">An invitation to travel through time</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
              <p>The project culminated with an experiential exhibit entitled &ldquo;Artemis 2100,&rdquo; staged as a time-travel journey. The community embarked to the distant future—and landed just at the moment when Artemis was looking back retrospectively at major paradigm shifts that &ldquo;happened&rdquo; around 2025. These possible shifts were shared as provocations—a subjective, learner-centered imagining of what could happen as the future unfolds.</p>
              <p>Here, on this website, we invite you to travel with us and explore these possible futures. Then, we hope you will use the provocations—and the tools available on the site—to spark your own vision for the future of education by trying some experiments.</p>
              <p>Now, strap in, and let&rsquo;s go to the year 2100&hellip;</p>
            </div>
            <div>
              <blockquote className="border-l-4 border-[#461e68] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;The purpose of education is &lsquo;preparation for appointments not yet made.&rsquo;&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-2 block leading-[1.6]">
                  &mdash; Howard Swearer, as quoted in the SUES report
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Fast Forward */}
      <div id={SECTIONS[4].id} className="w-full relative shadow-[0_-15px_30px_rgba(0,0,0,0.1)]">
        <div style={{ clipPath: 'inset(0 0 0 0)' }} className="relative w-full min-h-[50vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#461e68]">
          <img
            src={SECTIONS[4].img}
            alt={SECTIONS[4].title}
            className="fixed top-0 left-0 w-[100vw] h-[100vh] object-[center_20%] object-cover pointer-events-none -z-10 opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-transparent pointer-events-none -z-10" />
          <div className="relative z-10 p-6 md:p-12 w-full max-w-5xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-[0.10em] drop-shadow-md">
              {SECTIONS[4].title}
            </h2>
            <p className="text-xl md:text-2xl font-serif text-gray-100 italic drop-shadow-md">
              {SECTIONS[4].desc}
            </p>
          </div>
        </div>

        <div className="bg-white w-full relative z-20 shadow-[0_-15px_30px_rgba(0,0,0,0.1)]">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b pb-2 w-fit italic">Choose a future to explore.</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full font-serif text-white">
                {PROVOCATIONS.map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => goTo(p.slug)}
                    className="relative group block aspect-square bg-gray-900 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={p.gridImg}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity transform group-hover:scale-105 duration-700"
                      alt={p.title}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                      <span className="text-lg md:text-xl font-bold italic tracking-wide leading-tight">{p.title}</span>
                    </div>
                  </button>
                ))}
                {/* Build card */}
                <button
                  onClick={() => goTo('build')}
                  className="relative group block aspect-square bg-[#d92231] overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                    <span className="text-lg md:text-xl font-bold italic tracking-wide">Design a<br/>Future</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────── ParallaxSection ──────────────────────────── */

function ParallaxSection({ section, children }: { section: typeof SECTIONS[0]; children: React.ReactNode }) {
  return (
    <div id={section.id} className="w-full relative shadow-[0_-15px_30px_rgba(0,0,0,0.15)] bg-white">
      <div
        className="relative w-full min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gray-900"
        style={{ clipPath: 'inset(0 0 0 0)' }}
      >
        <img
          src={section.img}
          alt={section.title}
          className="fixed top-0 left-0 w-[100vw] h-[100vh] object-cover pointer-events-none -z-10 opacity-70"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none -z-10" />
        <div className="relative z-10 p-6 md:p-12 w-full max-w-5xl mx-auto space-y-4 pt-24 pb-12">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-[0.10em] uppercase drop-shadow-lg">
            {section.title}
          </h2>
          {section.desc && (
            <p className="text-xl md:text-3xl font-serif text-gray-200 mt-6 italic drop-shadow-md">
              {section.desc}
            </p>
          )}
        </div>
      </div>

      <div className="bg-white w-full relative z-20 shadow-[0_-15px_30px_rgba(0,0,0,0.15)]">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          {children}
        </div>
      </div>
    </div>
  );
}
