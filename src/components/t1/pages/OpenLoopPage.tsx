'use client';

import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function OpenLoopPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader 
        title="Open Loop University"
        description="We look back from 2100 at the era when Stanford brought an end to a society of alumni in favor of lifetime learning."
        bgGradientClass="bg-gradient-to-tr from-[#66B83B] via-[#7BCE44] to-[#4A9F2F]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        <section className="space-y-6">
          <SectionHeading>A Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Take a look at archival footage recovered from the future to discover how Stanford was transformed by Open Loop University.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2500" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/60 rounded flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-black/80 transition-colors">
                 <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
            <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 text-xs font-mono border border-black/10">
              BOX_ID: OL_137.191.63<br/>
              CONTENTS:_OPEN_LOOP
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Key Details</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
            {/* Left Column */}
            <div className="space-y-8 relative">
              <div className="absolute -top-16 left-0 opacity-10 text-[120px] italic font-serif leading-none pointer-events-none text-[#66B83B]">Four</div>
              <h3 className="text-xl leading-relaxed font-normal bg-white relative z-10 p-2">
                Students received four years of college education, front-loaded at the beginning of adulthood.
              </h3>
              
              <div className="h-40 flex items-center justify-center border-b border-gray-200 relative">
                <svg width="100%" height="100%" viewBox="0 0 400 100" className="absolute stroke-black stroke-2 fill-none stroke-current text-gray-800">
                  <path d="M 0,50 L 50,50 L 50,20 L 150,20 L 150,80 L 200,80 L 200,50 L 400,50" />
                </svg>
              </div>

              <ul className="text-xs text-gray-600 space-y-3 divide-y divide-gray-100">
                 <li className="pt-2">4 yrs during ages 18-22</li>
                 <li className="pt-2">Formal learning occurred in the classroom only</li>
                 <li className="pt-2">Limited access to academic setting later in life</li>
                 <li className="pt-2">Students needed to prove ability by age 18 to be accepted</li>
                 <li className="pt-2">Alumni returned to campus occasionally for selected events</li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="space-y-8 relative">
              <div className="absolute -top-16 left-0 opacity-10 text-[120px] italic font-serif leading-none pointer-events-none text-[#66B83B]">Loop</div>
              <h3 className="text-xl leading-relaxed font-normal bg-white relative z-10 p-2">
                Students received a lifetime of learning opportunities.
              </h3>
              
              <div className="h-40 flex items-center justify-center border-b border-gray-200 relative">
                <svg width="100%" height="100%" viewBox="0 0 400 100" className="absolute stroke-black stroke-2 fill-none stroke-current text-gray-800">
                  <path d="M 0,50 Q 50,50 100,50 C 120,50 140,20 120,20 C 100,20 100,80 120,80 C 140,80 180,50 200,50 C 220,50 240,20 220,20 C 200,20 200,80 220,80 C 240,80 280,50 300,50 L 400,50" />
                </svg>
              </div>

              <ul className="text-xs text-gray-600 space-y-3 divide-y divide-gray-100">
                 <li className="pt-2">6 yrs over a lifetime</li>
                 <li className="pt-2">Knowledge was obtained across classrooms and practical settings</li>
                 <li className="pt-2">Seasoned adults returned to pivot careers and reconnect with community</li>
                 <li className="pt-2">Students began studies at a range of ages</li>
                 <li className="pt-2">Populi returned as expert practitioners and enriched campus life</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Historical Notes</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Setting</h4>
              <p className="font-bold italic text-sm text-gray-800 leading-relaxed">
                The phonograph, the telephone, human operated vehicles, carbon emitting fuels&mdash;it&apos;s hard to imagine here in 2100 what life might have felt like when that antiquated technology was pervasive. Yet it&apos;s important to try to understand the context of our history, even as we celebrate all that we have become today.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before neurosocial educators fully understood the cognitive processes surrounding human learning, society sent its young people to college for just a few years, early in their adult lives. They were meant to absorb all the information and skills they would need for the rest of their productive lives, and then burst forth fully formed and equipped to succeed&mdash;much like the even older myth of Athena born in full armor, springing from the head of Zeus.
              </p>
            </div>
            
            <div className="space-y-4 mt-8 md:mt-0">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">There Were Early Signs That A Change Was Needed.</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                For example, around 2015, it became clear that only about a quarter of college graduates worked in a field that was directly related to their college major&mdash;either students weren&apos;t choosing well, or the majors themselves did not correspond to the new kinds of professions emerging. The advent of online learning showed a taste of the vast hunger for knowledge and skills from unexpected populations at various times over the course of their lives. The frequency with which graduates changed careers now required advanced learning at unpredictable periods throughout an individual&apos;s life.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>The Shift</SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Until its quasquicentennial in 2016, students applied for admission to Stanford around the age of 17, were admitted and conducted their studies for four years from ages 18 &ndash; 22. They then graduated and became alumni. Some portion would return a few years later to pursue a graduate degree.
              </p>
              <p>That, strangely enough, was it.</p>
              <p>Then, Stanford fully reinvented itself as the first Open Loop University.</p>
              <p>
                Views began to change about the role of higher education over an individual&apos;s life course. The perspective that the university could effectively serve its original mission while continuing to narrowly define the time in one&apos;s life when learning would happen was challenged. Examples of new models started emerging, such as Stanford&apos;s Distinguished Careers Institute &ndash; focused exclusively on providing access to Stanford offerings for older adults who had already accomplished at least one significant phase in their professional lives.
              </p>
              <p>
                The Dean of Admissions conducted an experiment in 2015 to recruit 10 percent of an incoming class using a special &ldquo;age-blind&rdquo; process. The results started to
              </p>
            </div>
            
            <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
               <p>
                diversify the mixture of student ages on campus, and break down the pre-existing class (year) structures. Students built new cohort experiences to create strong and lasting social connections as they had before. Classroom learning was enriched by both the na&iuml;ve, bold perspectives of younger-than-average classmates, and the wisdom of the experienced, older ones.
              </p>
              <div className="w-full flex justify-center">
                <svg width="200" height="80" viewBox="0 0 200 80" className="stroke-black stroke-1 fill-none">
                    <rect x="10" y="20" width="30" height="40" className="fill-white stroke-black stroke-2"/>
                    <text x="25" y="45" textAnchor="middle" className="fill-black stroke-none font-bold text-xl">S</text>
                    <path d="M 40,40 C 60,40 60,60 80,60 M 80,60 C 100,60 100,60 120,60 M 120,60 L 130,50 L 140,60 L 150,60 L 160,50 L 170,60 L 190,60" />
                    <circle cx="80" cy="60" r="2" className="fill-black"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
             <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">The Open Loop University</h4>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    By the time it was fully adopted, the new model had some key characteristics. Students applied when they were ready &ndash; some earlier, and some later than age 17. Upon enrollment, students received six years of access to residential learning opportunities to distribute across their lives as they saw fit.
                  </p>
                  <p>
                    Many students chose to concentrate their on-campus stint for a few years on the earlier side, as the social process of maturation within a peer group remained important. Others, freed from social stigma, attached to taking gap years or years &ldquo;off&rdquo; during their educations. They dove enthusiastically into applied environments&mdash;doing internships and in-country language immersion, reporting back that these experiences sharpened their desire for and ability to select majors and classes that were relevant. Faculty began to report a generally higher level of intellectual engagement from students in their introductory and advanced courses.
                  </p>
                </div>
             </div>
             <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">From Alumni to Populi</h4>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    No longer considered alumni, returning students coming back for a mid-career loop took advantage of on-campus course offerings to launch new chapters of their professional lives. They often provided inspiration and insight that accelerated research in labs. Faculty enjoyed new collegial relationships with these accomplished practitioners.
                  </p>
                  <p>
                    Open Loop pioneer Phil Pizzo once noted, &ldquo;Where we once had an association of alumni looking fondly back at Stanford as just one time in their lives, we now have a populi of 215,000 ongoing students who know that Stanford is there&mdash;and theirs&mdash;throughout a lifetime. These students&apos; deep engagement with the University means we have an activated, distributed Stanford network around the world who are connected whether they are on-campus in residence or not.&rdquo;
                  </p>
                </div>
             </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>Open Loop University:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>De-stigmatized a range of legitimate patterns of learning (gap years, etc.) so that early-career students used their time and investment in on-campus learning wisely and for greater impact</li>
              <li>Provided a way for older adults to pivot careers with an academic grounding, and to reconnect with a meaningful and energizing social context later in life</li>
              <li>Revitalized Stanford with a broader mix of students by creating on-ramps at many ages; enabled populations traditionally underrepresented at elite institutions to gain greater access once they had time to overcome disadvantaged circumstances</li>
              <li>Developed new operational infrastructure for the University with the ability to handle a more dynamic and shifting on-campus population</li>
              <li>Developed a distributed engagement model to maintain the broader network of Stanford populi</li>
              <li>Capitalized on the remarkable accomplishments of its populi through the invitation to return to campus as expert practitioners.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-24">
          <div>
            <hr className="border-t border-gray-200 mb-12" />
            <SectionHeading>Exhibit Article Archive</SectionHeading>
            <p className="text-sm text-gray-600 mt-4">Browse below to search through video archives of the exhibits displayed on May 1st, 2100.</p>
          </div>

          <div className="space-y-12">
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 15</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold italic uppercase tracking-wider text-sm">Advertisements for Open Loop University</h4>
                <p className="italic text-xs text-gray-500">Marketing materials developed and used in publications from 2025-2040</p>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>Stanford&apos;s marketing department focused on communicating the new Open Loop system during the 2020s and 2030s. This was part of a strategic initiative to differentiate the Stanford experience and communicate that Stanford produced curious, intellectually vibrant, and agile lifelong learners.</p>
                  <p>The ads displayed here cover a variety of aspects and benefits of the Open Loop structure, including the archive of loop paths that Stanford curated over time to guide and inspire future students. One successful advertisement highlighted the path journeys of different individuals over their lifetimes. Stanford also began a new campaign when Admissions started recruiting students in 2015, which continued until the eventual closing of the application process in 2035.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer text-white">
                  <span className="text-sm">Video unavailable<br/><span className="text-xs text-gray-400">This video is private</span></span>
                </div>
                <p className="text-xs text-gray-500 italic">Watch Video of Tania Anaissie explain Loop Ads.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <div className="bg-gray-100 aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" alt="Kelly Schmutte" className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                  <p className="text-xs text-gray-500">Kelly Schmutte explaining Loop Ads.</p>
               </div>
               <div className="space-y-2">
                  <div className="bg-gray-100 aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Loop ads" className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                  <p className="text-xs text-gray-500">Loop Ads on display.</p>
               </div>
            </div>
            
            <div className="space-y-6 pt-12">
               <h4 className="text-center font-bold text-sm uppercase tracking-widest text-gray-900">View Loop Ads Gallery</h4>
               <div className="w-full aspect-[2/1] relative overflow-hidden bg-gray-100 border border-t border-b border-gray-200 flex items-center justify-center flex-col p-12 text-center text-gray-800">
                  <p className="text-xl md:text-3xl font-serif italic max-w-2xl text-black">
                    &ldquo;I looped out after 2 years at Stanford to observe and reflect on the role of nonviolent communication in international policy.&rdquo;
                  </p>
                  <p className="mt-8 text-lg md:text-2xl font-serif italic max-w-xl text-black">
                    &ldquo;After my time in Tibet and at the UN, what I was studying at Stanford made sense.&rdquo;
                  </p>
                  <div className="absolute inset-0 z-10 pointer-events-none">
                     <svg width="100%" height="100%" preserveAspectRatio="none" className="stroke-[#c63434] stroke-2 fill-none overflow-visible">
                        <path d="M 0,200 Q 150,50 300,200 T 600,200 T 900,100" />
                     </svg>
                  </div>
                  <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply" alt="Gallery preview" />
               </div>
               <div className="flex justify-center items-center gap-4 py-4">
                  <ChevronLeft className="w-6 h-6 text-gray-400 cursor-pointer" />
                  <div className="flex gap-2 opacity-50">
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=100" className="w-12 h-16 object-cover border" alt="thumb"/>
                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=100" className="w-12 h-16 object-cover border" alt="thumb"/>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100" className="w-12 h-16 object-cover border" alt="thumb"/>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 cursor-pointer" />
               </div>
            </div>
          </div>
        </section>
      </div>
      <ExploreAnotherFuture currentPage="open-loop-university" goTo={goTo} />
    </>
  );
}
