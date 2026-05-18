'use client';

import { useEffect, useState } from 'react';
import { cn, SectionHeading } from '../Shared';
import { Play } from 'lucide-react';

const SECTIONS = [
  { id: "intro", title: "Learning & Living at Stanford", desc: "An exploration of undergraduate experiences in the future", img: "https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1398817302287-HSJD6LY65BUT5GMUT8V7/Exhibit_Title.jpg" },
  { id: "context-1", title: "'A complex and special setting'", desc: "", img: "https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1398882588280-1K4AKDL84P3BAIJZE9OH/IMG_9794.jpg" },
  { id: "context-3-1-1", title: "Exploring a shifting landscape", desc: "", img: "https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1398882987952-X2GZ3OY7F53PLB1XL17Z/IMG_0350.jpg" },
  { id: "context-3-1-1-1", title: "Provocations to Spark Experiments", desc: "", img: "https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1398883065287-E99ZFQRMG4VM7XFARP97/IMG_0772.jpg" },
  { id: "context-4", title: "Moments in time", desc: "", img: "https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1406175906356-COAZHHD5LC8DP29XT15T/Time+Machine+1.jpg" },
  { id: "fast-forward", title: "Let's fast forward to a possible future...", desc: "What might the university experience be then?", img: "https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1398817195405-5BBO5QHPZPCZM28UISFD/calibcolors.jpg" },
];

interface HomePageProps {
  goTo: (page: string) => void;
}

export default function HomePage({ goTo }: HomePageProps) {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      let currentSection = "intro";
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
          <SectionHeading>This is a fascinating time to be at Stanford.</SectionHeading>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
              <p>Our university—like most—was designed around a model of education that has remained fairly constant for hundreds of years. But many schools and educators are currently looking at this model with fresh eyes. The potential disruption posed by online learning allows us to question how time, space, expertise, accreditation, and student agency may also change within higher education. Many parts of the undergraduate experience are ripe for reinvention.</p>
            </div>
            <div>
              <blockquote className="border-l-4 border-yellow-400 pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;College is about building a great human—intellectually and emotionally—and answering the question: &lsquo;who do I want to be?&rsquo;&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Stanford Graduate, Class of 2003
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Context 1 */}
      <ParallaxSection section={SECTIONS[1]}>
        <div className="space-y-12">
          <h2 className="text-3xl font-bold max-w-2xl text-gray-900 leading-tight">Exploring the on-campus experience</h2>
          <div className="grid md:grid-cols-2 gap-16">
             <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
                <p>College has multiple aims: it&apos;s a place to gain expertise and develop abilities, but also to come of age. These are entwined together in a residential college experience—a complex and special setting. Enormous energy and investment are now being placed in experimentation and pioneering in the <em>online</em> learning space. We wanted to complement these efforts with an exploration of learning and living <em>on campus</em>, now and in the future.</p>
             </div>
             <div>
              <blockquote className="border-l-4 border-[#007f9c] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;I needed the right stimuli to provoke &lsquo;breaking moments&apos; to get to know myself.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                  &mdash; Stanford Graduate, Class of 2003
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Context 3-1-1 */}
      <ParallaxSection section={SECTIONS[2]}>
        <div className="space-y-12">
          <h2 className="text-3xl font-bold max-w-2xl text-gray-900 leading-tight">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-16">
             <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
                <p>A design team from the Stanford d.school worked with hundreds of perceptive, creative, and generous students, faculty, and administrators over the course of a year to explore this territory. We considered many lenses—from how students prepare for a Stanford education while still in high school, to patterns of undergraduate decision-making about what and how they study, to the shifting needs and expectations from future employers.</p>
             </div>
             <div>
              <blockquote className="border-l-4 border-[#d92231] pl-6 space-y-4">
                <p className="font-serif italic text-xl text-gray-800 leading-snug">
                  &ldquo;According to the Bureau of Labor Statistics, the average worker today stays at each of his or her jobs for 4.4 years, but the expected tenure of the workforce&apos;s youngest employees is about half that.&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-2 block leading-[1.6]">
                  &mdash; Jeanne Meister, &ldquo;Job Hopping Is the &lsquo;New Normal&apos; for Millennials,&rdquo; Forbes, August 14, 2012
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Context 3-1-1-1 */}
      <ParallaxSection section={SECTIONS[3]}>
        <div className="space-y-12">
          <h2 className="text-3xl font-bold max-w-2xl text-gray-900 leading-tight">An invitation to travel through time</h2>
          <div className="grid md:grid-cols-2 gap-16">
             <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
                <p>The project culminated with an experiential exhibit entitled &ldquo;Stanford 2025,&rdquo; held at the d.school in May 2014. To encourage an exploratory mindset, the event was staged as a time-travel journey. The community embarked to the distant future—and landed just at the moment when Stanford was looking back retrospectively at major paradigm shifts that &ldquo;happened&rdquo; around 2025. These possible shifts were shared as provocations—a subjective, student-centered imagining of what could happen as the future unfolds.</p>
                <p>Here, on this website, we invite you to travel with us and explore these possible futures. Then, we hope you will use the provocations—and the tools available on the site—to spark your own vision for the future of higher education by trying some experiments.</p>
                <p>Now, strap in, and let&apos;s go to the year 2100…</p>
             </div>
             <div>
              <blockquote className="border-l-4 border-[#461e68] pl-6 space-y-4">
                <p className="font-serif italic text-2xl text-gray-800 leading-snug">
                  &ldquo;The purpose of a liberal education is &lsquo;preparation for appointments not yet made.&rsquo;&rdquo;
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-2 block leading-[1.6]">
                  &mdash; Howard Swearer, former President of Brown University, as quoted in the SUES report
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Context 4 */}
      <ParallaxSection section={SECTIONS[4]}>
        <div className="space-y-12">
          <h2 className="text-3xl font-bold max-w-2xl text-gray-900 leading-tight">Show Don&apos;t Tell</h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">Take a quick look at the journey of faculty, staff, students, and guests at the Stanford 2025 experience.</p>
          
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden border border-gray-300 max-w-4xl">
              <img
                src="https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1406177443557-T7R0F6NBRQXIAIQCI2SJ/Space+6.jpg?format=1000w"
                alt="Video Thumbnail"
                className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-black/60 rounded flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-black/80 transition-colors">
                    <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
          </div>

          <hr className="border-t border-gray-200 !my-16" />

          <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
            <h3 className="font-bold text-xl text-gray-900">Your time to travel</h3>
            <p>Now it&apos;s your turn! Be pulled back into history before launching into the future. Hear the moments that made Stanford what it is today and listen for the moments that will make it to tomorrow.</p>
            <p className="italic">Headphones recommended</p>
            <div className="bg-[#171717] w-full p-4 flex items-center gap-4 text-white border-l-4 border-white mt-4 max-w-sm">
                <Play fill="currentColor" className="w-5 h-5 text-white cursor-pointer hover:opacity-80" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Time Machine</span>
                </div>
                <span className="text-xs text-gray-400 cursor-pointer hover:text-white transition-colors ml-auto uppercase font-bold tracking-wider">Download</span>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Fast Forward */}
      <section id={SECTIONS[5].id} className="relative w-full overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div style={{ clipPath: "inset(0 0 0 0)" }} className="relative w-full min-h-[50vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#461e68]">
            <img
              src={SECTIONS[5].img}
              alt={SECTIONS[5].title}
              className="fixed top-0 left-0 w-[100vw] h-[100vh] object-[center_20%] object-cover pointer-events-none -z-10 opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-transparent pointer-events-none -z-10" />
            <div className="relative z-10 p-6 md:p-12 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-20 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-[0.10em] drop-shadow-md">
                {SECTIONS[5].title}
              </h2>
              <p className="text-xl md:text-2xl font-serif text-gray-100 italic drop-shadow-md">
                {SECTIONS[5].desc}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white w-full relative z-20">
          <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b pb-2 w-fit italic">Choose a future to explore.</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full font-serif text-white">
                <button onClick={() => goTo('open-loop-university')} className="relative group block aspect-square bg-gray-900 overflow-hidden cursor-pointer">
                   <img src="https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1398902059821-RP15PQTSY8SOKL2MGTOS/image-asset.jpeg" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity transform group-hover:scale-105 duration-700" alt="Open Loop" />
                   <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                      <span className="text-lg md:text-xl font-bold italic tracking-wide">Open Loop<br/>University</span>
                   </div>
                </button>
                <button onClick={() => goTo('paced-education')} className="relative group block aspect-square bg-gray-900 overflow-hidden cursor-pointer">
                   <img src="https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1398902029404-08X95JWIUC0ET7E7EMWQ/nav_paced_education.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity transform group-hover:scale-105 duration-700" alt="Paced Education" />
                   <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                      <span className="text-lg md:text-xl font-bold italic tracking-wide">Paced<br/>Education</span>
                   </div>
                </button>
                <button onClick={() => goTo('axis-flip')} className="relative group block aspect-square bg-gray-900 overflow-hidden cursor-pointer">
                   <img src="https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1398902001655-AHTZLR3OYOOL337G49HW/image-asset.jpeg" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity transform group-hover:scale-105 duration-700" alt="Axis Flip" />
                   <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                      <span className="text-lg md:text-xl font-bold italic tracking-wide">Axis Flip</span>
                   </div>
                </button>
                <button onClick={() => goTo('purpose-learning')} className="relative group block aspect-square bg-gray-900 overflow-hidden cursor-pointer">
                   <img src="https://images.squarespace-cdn.com/content/v1/535afa04e4b071a2c2df86e4/1398902073224-40XEGRCIXAE6GKIU1YL7/image-asset.jpeg" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity transform group-hover:scale-105 duration-700" alt="Purpose Learning" />
                   <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                      <span className="text-lg md:text-xl font-bold italic tracking-wide">Purpose<br/>Learning</span>
                   </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function ParallaxSection({ section, children }: { section: typeof SECTIONS[0]; children: React.ReactNode }) {
  return (
    <section id={section.id} className="relative w-full overflow-hidden bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div
          className="relative w-full min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gray-900"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          <img
            src={section.img}
            alt={section.title}
            className="fixed top-0 left-0 w-[100vw] h-[100vh] object-cover pointer-events-none -z-10 opacity-70"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none -z-10" />
          <div className="relative z-10 p-6 md:p-12 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-20 space-y-4 pt-24 pb-12">
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
      </div>

      <div className="bg-white w-full relative z-20">
        <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
          {children}
        </div>
      </div>
    </section>
  );
}
