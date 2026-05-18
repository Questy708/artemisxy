'use client';

import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function PacedEducationPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader 
        title="Paced Education"
        description="In 2100, we examine the eras when Stanford abolished the class year and embraced adaptive learning."
        bgGradientClass="bg-[#007f9c]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        
        <section className="space-y-6">
          <SectionHeading>The Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Take a peek into archival footage rescued from the future to discover how learning on campus was transformed by Paced Education.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2500" 
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

        <section className="space-y-12">
          <div className="space-y-4">
            <SectionHeading>Key Details</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>
          <div className="w-full max-w-[1000px] pb-12">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000" className="w-full h-64 object-cover" alt="Diagram" />
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
                Prepare, apply, cram, conform, get through, graduate ... then search, flounder, flail: this was the archetypal experience of a university student at the turn of the 21st century.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Disruptive technologies were launching faster than humans could learn them, and the newly globalized economy meant an unprecedented level of interconnectedness. It was a polarized, class-divided, risk-averse, but thrill-seeking world.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Schools at that time&mdash;society&apos;s core mechanism for strengthening people&apos;s ability to adapt&mdash;were mired in conventional approaches and struggling to change. The K-12 education system in the United States was still built upon a metronomic, industrial approach, while the working world was more chaotic and ambiguous than ever before.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                The age of complexity had begun.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Higher education was an expensive staging ground between an overly supervised adolescence and a wildly complicated adulthood. College needed to regain its place as the experience that taught students how to be perpetual learners and to apply skills to the world outside its walls.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading>The Shift</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-sm text-gray-600 leading-relaxed">
              <p>From 1891-2019, students at Stanford were slotted into one of four groups based on age: Freshman, Sophomore, Junior, and Senior. They moved through this legacy organizational system year after year, but in 2019 the landscape changed.</p>
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Student Shift"/>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
               <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">The ducks before the ducks</h4>
               <p>Unlike today, Duck Syndrome used to be a pejorative term. Linguistic historians determined that, pre-2019, it was used to characterize the appearance of sun-soaked, laid-back ease while Stanford students were actually paddling furiously below the surface to keep up. This syndrome, with complete disregard for mental health, was not only accepted, but expected to affect all students.</p>
               <p>In the early 2010s, multiple pilots were launched with the express intent of curbing Duck Syndrome and building students&apos; resilience. With increasing success from new programs on reflection, longevity, and personalized learning, Stanford leaders concluded that the arbitrary definition of progress based on the calendar year and students&apos; ages was driving the &ldquo;get through&rdquo; mentality, and simply outdated.</p>
               <p>The University decided to part ways with the class-year system and adopt Paced education. Over time, Duck Syndrome became synonymous with personal growth and the ability to adapt to a variety of environments&mdash;to walk, run, swim or fly as needed.</p>
               <p>In other words, the process of becoming.</p>
            </div>
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">From Frantic to Paced</h4>
              <p>Paced education was designed to promote academic exploration and then push rigor within disciplines. Students now moved through phases of learning based on their individual readiness, allowing them to transform at their own pace.</p>
              <p>The three distinct phases were called: Calibration, Elevation, and Activation. While undergraduates, students cycled through these phases multiple times.</p>
              <p>Advanced learning technologies gave students and faculty new types of bio-cognitive feedback to ground this process.</p>
              <p>To balance these unparalleled technological resources, the University made an equal commitment to meditative modes like personal reflection through the now ubiquitous zones of digital silence, not-spots. Stanford humanists then helped pioneer the Slow Cognition movement.</p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                 <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Calibration (6-18 months)</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   We now know that students need to learn how they learn best. Calibration offered short (one day to one week), immersive, introductory experiences designed by faculty and practitioners, so students experienced a wide range of subject areas, learning models, and career trajectories.
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Students remained in Calibration mode for varying lengths of time depending on personal readiness. Some stayed only six months, while others took nearly 18 months to sample interest areas, self-reflect (using both their GritBits and non-technological means), find learning gaps, and build the confidence to move forward with intention.
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Faculty, initially wary of offering short courses, soon developed a taste for teaching bite-size introductions and experimental offerings. Not only intellectually invigorating, these courses also allowed professors to interact with a wider range of students. They were able to identify and nurture those who were best suited to their domains of expertise more easily.
                 </p>
              </div>
              <div className="flex justify-center items-center">
                 <div className="w-48 h-64 bg-gray-100 p-4 border border-gray-300 transform -rotate-6">
                    <div className="w-full h-full border border-dashed border-gray-400"></div>
                 </div>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                 <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Elevation (12-24 months)</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Elevation took students deep into a content area with a singular focus. In this phase, intellectual rigor was paramount. Students entered the Elevation phase by coordinating with their self-selected personal Board of Advisors (BOA). Composed of academic and personal mentors, as well as more advanced students and trusted confidantes, the BOA had replaced all other forms of academic advising by 2018.
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Elevation held a special place in the hearts of both faculty and students. When Stanford gutted all of the lecture halls in the Main Quad area of campus in 2016, Elevation-specific living and learning quarters were created. In true Stanford tradition, these quickly became referred to as the &ldquo;LivLerns.&rdquo;
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   The new hybrid environments were lauded for their ability to foster meaningful relationships between professors and students. Those relationships contributed to the accelerated achievement, often equivalent to a pre-2015 PhD, that students reached in just 18-24 months.
                 </p>
              </div>
              <div>
                 <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Elevation phase"/>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                 <h4 className="font-bold italic uppercase tracking-wider text-sm text-gray-900">Activation (12-18 months)</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   After learning how to acquire deep expertise in Elevation, students translated their knowledge to several real-world applications throughout the Activation phase. This allowed them to exercise and iterate upon their academic knowledge in the context of internships, service projects, high-caliber research, and entrepreneurship.
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Activation was a time to apply skills and knowledge in a range of different modes. Students cherished the opportunity to try on career vectors while still within the context and explorational safety of the university.
                 </p>
              </div>
              <div>
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Activation phase"/>
              </div>
           </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>In Paced Education:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Stanford moved from the four-year system to three phases that were individually paced: Calibration, Elevation, and Activation.</li>
              <li>Students made better choices about what to study deeply, and graduated with mastery not just of what they learned, but also how they learned.</li>
              <li>Faculty developed new Calibration micro-courses, allowing them to experiment with new offerings and better identify potential students for their Elevation phase.</li>
              <li>New spaces were created for reflection, as well as rigorous professor-student learning.</li>
              <li>Duck Syndrome became synonymous with bravery, resilience, and self-reflection.</li>
              <li>Taste, try, reflect, achieve, fail, reflect, pursue, succeed, apply, apply, apply... then again: this was the experience of a Stanford student in the era of Paced education.</li>
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
            <h3 className="text-center font-bold text-xl uppercase tracking-widest text-gray-900">Article 67</h3>
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <h4 className="font-bold italic uppercase tracking-wider text-sm">Grit Bit &amp; Growth Grid</h4>
                  <p className="italic text-xs text-gray-500">Organic Semiconductors, &amp; Molecular electronics, Acetate Applicator</p>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                     <p>Applied as a temporary tattoo, even these early 1st generation Grit Bits were able to provide context around learning goals, helping students become self-aware, adaptable learners.</p>
                     <p>The original Grit Bit tracked stress &amp; mood, physical &amp; social activity, and location. Detailed data were available only to the individual student, while a small amount of anonymous aggregate data were available to the university on an opt-in basis.</p>
                     <p>Student Growth Grids (displayed here on Apple iPads&mdash;early &ldquo;tablet&rdquo; computers) were used to set learning goals, place them in context, and set activity reminders; allowing students to reflect on the conditions contributing to their learning progress and to experiment with new ways to learn and live.</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center text-white">
                    <span className="text-sm">Video placeholder</span>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
      <ExploreAnotherFuture currentPage="paced-education" goTo={goTo} />
    </>
  );
}
