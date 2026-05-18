'use client';

import { HeroHeader } from "../Shared";

interface Props {
  goTo: (page: string) => void;
}

export default function AboutPage({ goTo }: Props) {
  return (
    <>
      <HeroHeader 
        title="About"
        description="The @Stanford Project, which ultimately generated the Stanford2025 exhibit and website you're reading now, was sparked at the d.school in Spring 2013."
        bgGradientClass="bg-gray-800"
      />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-24 space-y-16">
        
        <section className="space-y-6 text-gray-700 leading-relaxed">
           <p>Given the contemporary emphasis being placed on experimentation with online learning, we wondered what interesting changes were also starting to happen in the in-person, physical learning environment? To explore this question further, the project was funded by Dean of the School of Engineering, Jim Plummer.</p>
           <p>The project included three classes, a series of workshops and the development of tools to support individuals who share the goal of experimenting towards a future Stanford, and an experienced project team that worked currently to synthesize and build on the ideas and research initiated by the students and project partners. Design work continued both inside and outside of class for a year, creating the foundation for the exhibit, which debuted in May 2014.</p>
           <p>For media inquiries, please contact <a href="#" className="font-bold underline">debbe@debbestern.com</a></p>
        </section>

        <section className="space-y-12">
           <h2 className="text-3xl font-bold max-w-3xl text-gray-900 border-b pb-2">Acknowledgements</h2>
           
           <div className="space-y-10 text-sm">
             <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-wider text-gray-900">The @Stanford Core Team</h3>
                <p className="text-gray-600 leading-relaxed">Tania Anaissie, Carissa Carter, Scott Doorley, Sarah Stein Greenberg, Ashish Goel, Stacey Gray, Seamus Harte, Jessica Munro &amp; Kelly Schmutte with Charlotte Burgess-Auburn, Jon Feiber, &amp; David Kelley</p>
             </div>

             <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-wider text-gray-900">Our Students</h3>
                <p className="text-gray-500 italic">who helped uncover important insights and sparked many of the key ideas in the exhibit</p>
                <p className="text-gray-600 leading-relaxed">Andy Donohue, Anna Lena Schindl, Aparna Surendra, Borui Wang, Chad Kamisugi, Chris Barber, Chuck Allen, Claire Margolis, David Herman, Ellora Israni, Eric Smalls, Ethan Kessinger, Ivy Guo, Jason Randolph, Jennifer Lau, Jesse Day, Jingshu Chen, Julia Landauer, Katie Kirsch, Katie Topper, Kelsey Dang, Lemiece Zarka, Mariam Semaan, Maurizio Calo Caligaris, Natasha Prats, Nina Church, Pam Shime, Paolo Martin, Petr Johanes, Quyen Nguyen, Rachel Lee, Robert Ruhlandt, Seamus Harte, Shigeki Saito, Sohaib Shaikh, Tania Anaissie, Tara Viswanathan, &amp; Ximena Rivera</p>
             </div>

             <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-wider text-gray-900">Our Partners</h3>
                <p className="text-gray-500 italic">who served as inspiration and helped us frame key design challenges &amp; activities</p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-5">
                   <li>The Experience Institute</li>
                   <li>Mozilla Foundation - Open Badges Project</li>
                   <li>Stanford University Libraries</li>
                   <li>Stanford University Residential Education</li>
                   <li>Office of the Vice Provost for Online Learning</li>
                </ul>
             </div>

             <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-wider text-gray-900">Our Production Team</h3>
                <p className="text-gray-600 leading-relaxed">Delicate Productions, Rachel Pearl, Tyler Winick</p>
             </div>

             <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-wider text-gray-900">And Special Thanks to...</h3>
                <p className="text-gray-600 leading-relaxed">Everyone who gave their time, insights, perspectives, feedback, ideas, and critique to this project over the past year, including:</p>
                <p className="text-gray-600 leading-relaxed">Aaron Buzay, Adina Glickman, Alex Scully, Alice Gardner, Alice Munoz-Shvarts, Alice Petty, Amy Collier, Andrew Todhunter, Arik Lifschitz, Bernd Girod, Brianne Hunt, Brie Bunge, Bruce Boyd, Candace Thille, Carissa Little, Chris Kong, Christina Medina, Colleen Cotter, Dan Klein, David Larsen, Dayo Mitchell, Deborah Golder, Deni Wicklund, Dennis Xu, Devika Patel, Devon Young, Elizabeth Hadly, Ellie Buckley, Emi Kolawole, Emily Goligoski, Eugene Korsunskiy, Glenn Katz, Gretchen Wustrack, Harmandeep Madra, Harry Elam, Helen Josephine, Jarreau Bowen, Jason Oppenheimer, Jim Campbell, Jim Plummer, Jo Boaler, Johan Ismael, Johan Olesund, John Edmark, John Mitchell, Joseph Jay Williams, Joseph Makokha, Katherine Preston, Katie Kirsch, Katie Krummeck, Katie Wang, Kim Kendall-Humphreys, Kyle Barnes, Kyle Keahey, Laura Breyfogle, Lewis Kaneshiro, Lucy LaPier, Luke Terra, Malgorzata Schaefer, Mark Grundberg, Martha Russell, Michael Rouan, Mike Yu, Mindy Hollar, Mitchell Stevens, Natalie Whearley, Paul Hegarty, Paul Marca, Paul Yock, Paul Zenke, Peter Mangiafico, Rachel our UPS Delivery Superstar who would have driven to Kentucky help us if we&apos;d asked her, Richard Shaw, Rob Reich, Robert Prakash, Robert Siegel, Roberta Katz, Robyn Dunbar, Ronnie Fields, Sally Mentzer, Sarah Lester, Sarah Truebe, Scott Calvert, Scott Witthoft, Shari Palmer, Skybox Imaging, Surya Narayanan, Suzanne M Gaulocher, Taylor Cone, Taylor Lemmon, Tim Stearns, Tom Maiorana, Victor Saad, Zac Sargeant</p>
                <p className="text-gray-600 leading-relaxed italic mt-4">...and the many other experimenters and innovators in this field who inspired us along the way!</p>
             </div>
           </div>
        </section>
      </div>
    </>
  );
}
