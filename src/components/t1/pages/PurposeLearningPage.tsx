'use client';

import { Play } from "lucide-react";
import { SectionHeading, HeroHeader, ExploreAnotherFuture } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function PurposeLearningPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader 
        title="Purpose Learning"
        description="A look back from 2100 to the era when Stanford students began declaring missions, not majors."
        bgGradientClass="bg-[#f2b90f]"
      />
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20 py-16 lg:py-24 space-y-24">
        
        <section className="space-y-6">
          <SectionHeading>The Summary</SectionHeading>
          <p className="text-sm text-gray-600">
            Take a peek into archival footage brought from the future to discover how the learning paths were transformed by Purpose Learning.
          </p>
          <div className="w-full aspect-video bg-gray-200 relative group cursor-pointer overflow-hidden max-w-4xl border border-gray-300">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2500" 
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
            <SectionHeading>Historical Notes</SectionHeading>
            <hr className="border-t border-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold italic uppercase tracking-wider text-sm">The Setting</h4>
              <p className="font-bold italic text-sm text-gray-800 leading-relaxed">
                 The Stanford graduate is known as a &ldquo;leader of enterprise, builder of states,&rdquo; as touted by the institution&apos;s first president, David Starr Jordan. Situated in Silicon Valley, Stanford had always celebrated the relationship with industry and opportunities for students to apply their learning in context.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                 A few decades into the 21st century, faculty noticed a change in incoming Stanford students. Already familiar with the core content being taught due to online course exposure during high school, they showed greater abilities in both integrative thinking and collaboration than ever before. Experts in educational theory drew the link between the widespread adoption of project-based learning in K-12 education that began with the Occupy Kindergarten movement, and the emerging needs of students entering college.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                 Bodies like the Association of American Colleges and Universities, which had long been collecting research on high-impact educational practices such as Service Learning and Capstone Courses, also noted that these consistently outpaced traditional methods in rates of student retention and student engagement. 
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                 Following the boom and bust cycle of the 2nd Great Tech Bubble, generations of students who had once aspired to catch &ldquo;startup fever,&rdquo; began to question the viability&mdash;and desirability&mdash;of those pathways.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                 The millennial generation, which had once been derided as self-involved &ldquo;slacktivists&rdquo; who were content to click a button and sign a petition, matured into leaders of companies and organizations that considered social impact as well as financial impact.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading>The Shift</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-600 leading-relaxed">
              <p>As Stanford graduates would soon be called upon to lead in a world in which economic, political, social and technological disruptions created some of the largest collective risks that humans had yet faced, the University established Purpose Learning, whereby students declared a mission, not a major. The intent was that students couple their disciplinary pursuit with the purpose that fueled it.</p>
              <p className="pt-4">&ldquo;I&apos;m a biology major&rdquo; was replaced by &ldquo;I&apos;m learning human biology to eliminate world hunger.&rdquo; Or &ldquo;I&apos;m learning Computer Science and Political Science to rebuild how citizens engage with their governments.&rdquo;</p>
              <p className="pt-4">The goal was to help students select a meaningful course of study while in school, and then scaffold a clear arc for the first 10 - 15 years of their professional lives. It wasn&apos;t about the career trajectory, but the reasons behind it.</p>
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" className="w-full object-cover" alt="Student Shift"/>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading>The Achievement</SectionHeading>
          <div className="space-y-4 text-sm text-gray-600">
            <p>In Purpose Learning:</p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Stanford graduates accelerated both their personal sense of meaning and outward global impact</li>
              <li>Alumni fondly reflected on how their personal missions established while at Stanford acted as an anchor as they charted their path beyond the Farm</li>
              <li>An endless list of contributions to issues of poverty, health, infrastructure, renewable energy, global governance, space travel, artistic and cultural achievement, etc.</li>
            </ul>
          </div>
        </section>

      </div>
      <ExploreAnotherFuture currentPage="purpose-learning" goTo={goTo} />
    </>
  );
}
