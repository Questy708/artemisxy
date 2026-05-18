/* ═══════════════════════════════════════════════════════════════════════════
   ARTEMIS 2100 — Immersive Micro-Site Data
   Modelled after Stanford d.school's Stanford 2025 project
   Each provocation is a deep, museum-like narrative from the year 2100
   ═══════════════════════════════════════════════════════════════════════════ */

export type MicroSitePage = 'landing' | 'auth' | 'portal' | 'provocation' | 'certificate' | 'blueprint';

export interface TimeTraveller {
  name: string;
  email: string;
  feeling: string;
  change: string;
}

export interface QuestPhase {
  discovered: boolean;
  created: boolean;
  committed: boolean;
  deliverable: Record<string, string>;
  reflection: string;
}

export type QuestProgress = Record<string, QuestPhase>;

export type SectionType =
  | 'setting' | 'narrative' | 'side-by-side' | 'quote' | 'achievement'
  | 'exhibit' | 'impact-story' | 'interlude' | 'activity';

export interface NarrativeSection {
  type: SectionType;
  title?: string;
  subtitle?: string;
  body?: string;
  imageUrl?: string;
  imageCaption?: string;
  items?: string[];
  quote?: string;
  attribution?: string;
  activityType?: 'try' | 'imagine' | 'act';
  activityTitle?: string;
  activityDuration?: string;
  activityPrompt?: string;
  activityRound2?: string;
  activitySteps?: string[];
}

export interface ExhibitArticle {
  id: string;
  title: string;
  date: string;
  source: string;
  excerpt: string;
  body: string;
}

export interface QuestInput {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'dropdown' | 'timeline' | 'multi-select';
  options?: string[];
  placeholder?: string;
}

export interface Provocation {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  cardDescription: string;
  heroImage: string;
  heroSubtitle: string;
  sections: NarrativeSection[];
  exhibitArticles: ExhibitArticle[];
  keyQuote: string;
  achievements: string[];
  yearIntroduced: string;
  questTitle: string;
  questPrompt: string;
  questInputs: QuestInput[];
  reflectionQuestions: string[];
}

export const COMPETENCY_HUBS = [
  'Sustainable Futures', 'Interplanetary Collaboration', 'Biotechnology & Ethics',
  'Quantum Computing & Philosophy', 'Creative Problem-Solving', 'Global Governance',
  'Human-AI Synergy', 'Cultural Evolution',
];

export const CENTERS_OF_INQUIRY = [
  'Frontiers of Artemis Research', 'Civilization Architecture', 'Planetary Systems',
  'Space & Frontier Science', 'Emerging Technologies', 'Next-Gen Education',
  'Materials, Matter & Manufacturing Futures', 'Agriculture, Food Systems',
  'Robotics, Mechatronics & Physical Autonomy', 'Gaming & Worldbuilding',
  'Energy Systems', 'Health & Bioethics', 'Urban Futures',
  'Biotech & Life Sciences', 'Fintech, DeFi & Economics',
];

export const FEELINGS = ['Frustrated', 'Curious', 'Hopeful', 'Skeptical', 'Inspired', 'Overwhelmed'];

export const PROVOCATIONS: Provocation[] = [
  /* ═══ 1. OPEN LOOP UNIVERSITY ═══ */
  {
    slug: 'open-loop',
    icon: '🌐',
    title: 'Open Loop University',
    tagline: 'We dissolved the idea of a four-year degree',
    cardDescription: 'Students received 10 years of access to distribute across their lives. The word "alumni" was replaced by "Artemis Living."',
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
    heroSubtitle: 'We look back from 2100 at the era when Artemis brought an end to a society of alumni in favor of lifetime learning.',
    yearIntroduced: '2026',
    sections: [
      { type: 'setting', title: 'The World Before', subtitle: 'Memorize, test, forget, repeat.', body: "Before neurosocial educators fully understood the cognitive processes surrounding human learning, society sent its young people to college for just a few years, early in their adult lives. They were meant to absorb all the information and skills they would need for the rest of their productive lives, and then burst forth fully formed and equipped to succeed — much like the even older myth of Athena born in full armor, springing from the head of Zeus.\n\nUntil the mid-2020s, students applied for admission around the age of 17, conducted their studies for four years from ages 18 to 22, then graduated and became 'alumni.' Some portion would return a few years later for a graduate degree. That, strangely enough, was it. The entire premise of higher education was built on the assumption that learning had a finish line." },
      { type: 'interlude', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=1920&q=80', imageCaption: 'The Old Model: A linear path with a clear endpoint. Photo: Artemis Archives, 2024.' },
      { type: 'narrative', title: 'There Were Early Signs', body: "Around 2015, it became clear that only about a quarter of college graduates worked in a field directly related to their college major — either students weren't choosing well, or the majors themselves did not correspond to the new kinds of professions emerging. The advent of online learning showed a taste of the vast hunger for knowledge from skills from unexpected populations at various times over the course of their lives. The frequency with which graduates changed careers now required advanced learning at unpredictable periods throughout an individual's life.\n\nViews began to change about the role of higher education over an individual's life course. The perspective that the university could effectively serve its original mission while continuing to narrowly define the time in one's life when learning would happen was challenged." },
      { type: 'narrative', title: 'The Open Loop University', body: "By the time it was fully adopted, the new model had some key characteristics. Students applied when they were ready — some earlier, and some later than age 17. Upon enrollment, students received ten years of access to the micro-college network to distribute across their lives as they saw fit.\n\nMany students chose to concentrate their on-campus stint for a few years on the earlier side, as the social process of maturation within a peer group remained important. Others, freed from social stigma attached to taking gap years or years 'off,' dove enthusiastically into applied environments — doing internships and in-country language immersion, reporting back that these experiences sharpened their desire for and ability to select majors and classes that were relevant. Faculty began to report a generally higher level of intellectual engagement." },
      { type: 'side-by-side', title: 'From Alumni to Artemis Living', body: "No longer considered alumni, returning students coming back for a mid-career loop took advantage of on-campus course offerings to launch new chapters of their professional lives. They often provided inspiration and insight that accelerated research in labs. Faculty enjoyed new collegial relationships with these accomplished practitioners.\n\nOpen Loop pioneer and Artemis founding dean noted: 'Where we once had an association of alumni looking fondly back at Artemis as just one time in their lives, we now have a living community of 215,000 ongoing students who know that Artemis is there — and theirs — throughout a lifetime.'" },
      { type: 'quote', quote: "The word 'alumni' was replaced by 'Artemis Living' — because you never stopped being a student, you only paused.", attribution: 'Artemis Archives, 2031' },
      { type: 'achievement', title: 'The Achievement', items: ['De-stigmatized a range of legitimate patterns of learning (gap years, career loops) so that early-career students used their time wisely and for greater impact', 'Provided a way for older adults to pivot careers with academic grounding, reconnecting with a meaningful and energizing social context later in life', 'Revitalized Artemis with a broader mix of students by creating on-ramps at many ages; enabled traditionally underrepresented populations to gain greater access', 'Developed new operational infrastructure for a more dynamic and shifting on-campus population', 'Developed a distributed engagement model to maintain the broader network of Artemis Living members', 'Capitalized on the remarkable accomplishments of its community through invitation to return as expert practitioners'] },
      { type: 'activity', activityType: 'try', activityTitle: 'Sketch the Future', activityDuration: '10 min', activityPrompt: 'Sketch your concept of Open Loop Learning on a blank sheet of paper. What does a life of distributed learning look like? Don\'t overthink — just draw.', activityRound2: 'Now create 5 variations of your sketch. How many different ways could someone distribute 10 years of learning?' },
      { type: 'activity', activityType: 'imagine', activityTitle: 'Open Loop Learning', activityPrompt: 'How might we design a flexible education model allowing seamless re-entry throughout life? What would the infrastructure look like? The culture?' },
      { type: 'activity', activityType: 'act', activityTitle: 'Design Your Learning Journey', activityPrompt: 'You have 10 years of access to distribute across your life. Plot your Learning Loops (▲) and Application Loops (▼) across a 20-year timeline.', activitySteps: ['Roll a die: 1-2 = Technology, 3-4 = Sustainability, 5 = Interplanetary Studies, 6 = Wildcard', 'Plot ▲ and ▼ symbols across 20 years', 'For each Learning Loop, note what you\'d study. For each Application Loop, note what you\'d do.', 'Reflect: How did you decide when to learn vs. when to apply?'] },
    ],
    exhibitArticles: [
      { id: 'OL-101', title: 'AI-Driven Personalized Learning Platforms', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall A', excerpt: 'The neural learning platforms that made Open Loop possible.', body: "By 2035, Artemis had deployed the first AI-driven personalized learning platform capable of adapting curricula in real-time based on individual cognitive patterns, emotional states, and life circumstances. The system — originally called Athena's Web — used biometric feedback and learning analytics to recommend not just what to study, but when to study it. Students who had previously struggled with rigid schedules flourished under the system's flexible recommendations." },
      { id: 'OL-102', title: 'Rise of Micro-Credentials', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall A', excerpt: 'How stackable credentials replaced the four-year degree.', body: "The transition from monolithic degrees to micro-credentials began in earnest in 2028 when Artemis became the first institution to offer fully stackable, blockchain-verified micro-credentials. Each credential represented a demonstrable skill or competency — not seat time. By 2040, over 70% of employers worldwide recognized Artemis micro-credentials as equivalent to or more informative than traditional degrees." },
      { id: 'OL-103', title: 'The Role of Mentorship in Open-Loop Learning', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall B', excerpt: 'Mentorship networks became the connective tissue of the Open Loop.', body: "When Artemis dissolved the alumni model, it replaced it with a mentorship network spanning every generation of learner. Returning mid-career students became natural mentors for those in their first learning loops. The Mentorship Matching Algorithm, introduced in 2031, paired learners based on complementary goals, not just expertise overlap. These bidirectional mentorship relationships became the defining feature of Artemis Living culture." },
    ],
    keyQuote: "The word 'alumni' was replaced by 'Artemis Living' — because you never stopped being a student, you only paused.",
    achievements: ['De-stigmatized gap years and career loops as legitimate learning patterns', 'Enabled career pivots at any life stage with academic grounding', 'Created on-ramps at many ages for underrepresented populations', 'Built infrastructure for dynamic, shifting on-campus populations', 'Developed distributed engagement model for 215,000+ living members'],
    questTitle: 'Design Your Learning Timeline', questPrompt: 'You have 10 years of access to distribute across your life. Plot your learning loops and application loops across a 20-year timeline.',
    questInputs: [{ key: 'timeline', label: 'Your 20-Year Learning Timeline', type: 'timeline' as const }, { key: 'timeline-reflection', label: 'How did you decide when to learn vs. when to apply? What surprised you?', type: 'textarea' as const, placeholder: 'Reflect on your choices...' }],
    reflectionQuestions: ['How did you decide when to take learning loops versus application loops?', 'What surprised you about distributing 10 years across a lifetime?'],
  },

  /* ═══ 2. PURPOSE LEARNING ═══ */
  {
    slug: 'purpose-learning',
    icon: '🎯',
    title: 'Purpose Learning',
    tagline: 'Students declared missions, not majors',
    cardDescription: '"What\'s your verb?" replaced "What\'s your major?" Students organized their education around impact, not disciplines.',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80',
    heroSubtitle: 'Reflecting from the year 2100, we look back at when Artemis students began declaring missions, not majors.',
    yearIntroduced: '2027',
    sections: [
      { type: 'setting', title: 'The World Before', subtitle: 'Choose a box. Sit inside it for four years.', body: "For centuries, students organized their education around disciplines — a system inherited from medieval guilds and cemented by industrial-era efficiency demands. You chose a box and sat inside it for four years. Biology students didn't study philosophy. Engineering students didn't study art history.\n\nBy the early 2020s, the cracks were visible. Only about a quarter of college graduates worked in a field directly related to their college major. Students arrived at university having done project-based learning in K-12 and were hungry for real-world impact — only to find themselves in lecture halls organized by century-old department structures." },
      { type: 'narrative', title: 'The Provocation', body: "Artemis's provocation was devastatingly simple: What if students declared missions instead of majors?\n\n'I'm studying biology' was replaced by 'I'm learning human biology to eliminate preventable disease in sub-Saharan Africa.' 'I'm studying political science' became 'I'm learning governance to redesign how citizens engage with their governments.'\n\nThe mission wasn't a career goal — it was a reason. It didn't tell you what job to take; it told you why you were learning. Faculty became mission advisors rather than department gatekeepers. Courses were selected not by requirement grids but by relevance to the mission." },
      { type: 'side-by-side', title: 'The Four Pillars of Purpose Learning', body: "Mission Identification — Introspective workshops, mentorship, and exploratory projects helped students discover the intersection of their passions and societal challenges. This wasn't career counseling; it was purpose archaeology.\n\nCustomized Curriculum — Each student's course of study was personalized and interdisciplinary by design. A student on a mission to address climate change might study environmental science alongside policy, engineering, and indigenous ecological knowledge.\n\nGlobal Impact Labs — Artemis established immersive, hands-on experience centers worldwide where students and faculty collaborated on real problems. These weren't internships — they were missions in action.\n\nReflective Practice — Regular mentor check-ins, reflective journaling, portfolio reviews, and peer reflection groups ensured the mission remained alive and responsive." },
      { type: 'quote', quote: "Students stopped asking 'What's your major?' and started asking 'What's your verb?'", attribution: 'Artemis Verbal Archives, 2029' },
      { type: 'interlude', imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80', imageCaption: 'The cultural shift: from "What do you study?" to "What are you working toward?" Photo: Artemis Archives, 2032.' },
      { type: 'impact-story', title: 'Impact Stories from the Field', body: "Yasmin Bhuhati ('24, MS ME '28, PhD Microbiology '32) dedicated her purpose to clean water access in Africa. Her impact year in Ghana on water and sanitation projects led to the development of low-cost filtration systems now used across 14 nations.\n\nJuan Carlos Rodriguez ('25, BS Engineering '29) pursued renewable energy solutions in South America. His work on sustainable energy systems in rural areas became the blueprint for Artemis's first Global Impact Lab in Buenos Aires.\n\nPriya Sharma ('26, BS Biology '30) focused on healthcare innovation in Asia. Her telemedicine solutions and community health programs in remote areas demonstrated that Purpose Learning didn't just produce better students — it produced solutions that saved lives." },
      { type: 'achievement', title: 'The Achievement', items: ['Enhanced student engagement through intrinsic motivation replacing external requirements', 'Greater relevance of education to real-world challenges across every discipline', 'Measurable community impact in 40+ countries through Global Impact Lab projects', 'Holistic development — academic, personal, and social growth became inseparable', 'A cultural shift in how society talks about education: from "major" to "mission"'] },
      { type: 'activity', activityType: 'try', activityTitle: 'Write a News Headline', activityDuration: '15 min', activityPrompt: 'Write a news headline and two sentences as if Purpose Learning is making news in 2100. What does the world look like when everyone has a mission instead of a major?', activityRound2: 'Now write the same headline from three different perspectives: a student, an employer, and a grandparent.' },
      { type: 'activity', activityType: 'imagine', activityTitle: 'Purpose Learning', activityPrompt: 'How might we align educational experiences with personal passions and societal challenges? What would a university built entirely around missions look like?' },
      { type: 'activity', activityType: 'act', activityTitle: 'The Artemis Compass', activityPrompt: 'There are no freshmen or sophomores at Artemis — only people in Calibration. Imagine a device called "The Artemis Compass" that helps students discover their mission.', activitySteps: ['Write 3 things the Artemis Compass could help you discover about yourself', 'Write your mission statement: "I\'m learning [X] to [Y]"', 'Identify which Competency Hubs connect to your mission', 'Reflect: How does this change your approach to education?'] },
    ],
    exhibitArticles: [
      { id: 'PL-201', title: 'The Death of the Major', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall C', excerpt: 'How the mission declaration replaced the major declaration.', body: "The final major declaration at Artemis occurred on March 15, 2029. After that date, the Registrar's Office no longer accepted major declarations — only mission statements. The data was unequivocal: students with declared missions showed 340% higher engagement, 200% more interdisciplinary course selection, and 180% higher post-graduation satisfaction." },
      { id: 'PL-202', title: 'Global Impact Labs: The First Decade', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall C', excerpt: 'How immersive experience centers changed the meaning of fieldwork.', body: "The first Global Impact Lab opened in Nairobi in 2028, followed by labs in Buenos Aires, Mumbai, and Reykjavik within three years. Each lab was co-designed with local communities to ensure mutual benefit. By 2038, the network had expanded to 23 locations across 6 continents, producing over 12,000 documented community improvements and 3,400 peer-reviewed publications." },
    ],
    keyQuote: "What's your verb?",
    achievements: ['Enhanced student engagement through intrinsic motivation', 'Greater relevance of education to real-world challenges', 'Measurable community impact in 40+ countries', 'Holistic development — academic, personal, and social', 'Cultural shift from "major" to "mission"'],
    questTitle: 'Declare Your Mission', questPrompt: "Write your mission statement. Not a major, not a career — a reason. Format: \"I'm learning [subject/knowledge] to [impact/change]\"",
    questInputs: [{ key: 'mission', label: 'Your Mission Statement', type: 'text' as const, placeholder: "I'm learning ________ to ________" }, { key: 'hubs', label: 'Which Competency Hubs connect to your mission?', type: 'multi-select' as const, options: COMPETENCY_HUBS }, { key: 'mission-reflection', label: 'How does framing your education as a mission change what you\'d study?', type: 'textarea' as const, placeholder: 'Think about the difference between a major and a mission...' }],
    reflectionQuestions: ['How does a mission change what you study compared to a major?', 'What would you drop from your current education if you followed your mission?'],
  },

  /* ═══ 3. ADAPTIVE PACED EDUCATION ═══ */
  {
    slug: 'adaptive-paced',
    icon: '🔥',
    title: 'Adaptive Paced Education',
    tagline: 'We abolished the academic calendar',
    cardDescription: 'No more semesters. No more "freshman year." Just your own rhythm — Exploration, Mastery, Integration — at your own pace.',
    heroImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80',
    heroSubtitle: 'We look back from 2100 at the era when Artemis replaced the academic calendar with each learner\'s own rhythm.',
    yearIntroduced: '2026',
    sections: [
      { type: 'setting', title: 'The World Before', subtitle: 'Rush, cram, stress, repeat.', body: "The global education landscape was marked by arbitrary timelines, standardized curricula, and a one-size-fits-all approach. Every student, regardless of their pace, cognitive style, or life circumstances, was expected to progress through the same material in the same timeframe. The semester system — inherited from an agricultural calendar — dictated when learning began and ended.\n\nStudents who needed more time were labeled 'slow.' Students who needed less were labeled 'disruptive.' Neither label was accurate. Both were damaging. The system measured seat time, not mastery." },
      { type: 'narrative', title: 'The Three Phases', body: "Artemis introduced Adaptive Paced Education, built on three interlinked phases:\n\nExploration (3–18 months) — Broad exposure, self-discovery, short intensive modules, cultural exchange through virtual and physical global experiences. This phase replaced the freshman year — but it could last as long as a learner needed.\n\nMastery (6–36 months) — Deep personalized study, AI tutors adapting pace and style, practical demonstration over exams, the Global Mastery Network for cross-cultural collaboration.\n\nIntegration (3–12 months intensive, ongoing) — Real-world application through internships, research, and entrepreneurial ventures. The boundaries between education and career blurred, with lifelong learning becoming the norm.\n\nNo freshman, sophomore, junior, or senior. Just your own rhythm, your own pace, your own journey." },
      { type: 'quote', quote: "Explore, focus, master, apply, reflect, adapt... and repeat", attribution: 'Artemis Learning Rhythm Model, 2028' },
      { type: 'exhibit', title: 'Exhibit Article Archive', subtitle: 'Recovered artifacts from the Adaptive Paced Education exhibits, displayed May 1st, 2100.', body: "Article 23 — Chronos (Learning Rhythm Optimizer): By 2033, the Chronos device used quantum AI cores with biometric sensors and holographic interfaces to monitor sleep patterns, stress levels, and cognitive load. It visualized each learner's optimal learning rhythm as a dynamic, living pattern.\n\nArticle 56 — Global Synchrony Pods: Immersive telepresence chambers with real-time translation AI and haptic feedback eliminated time zone and language barriers. Students in Nairobi, São Paulo, and Tokyo could collaborate in real-time as if they shared the same physical space." },
      { type: 'interlude', imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80', imageCaption: 'The Chronos device visualizing a student\'s optimal learning rhythm. Photo: Artemis Archives, 2035.' },
      { type: 'achievement', title: 'The Achievement', items: ['Fixed academic years eliminated — replaced by personalized learning phases', 'The stress of artificial deadlines replaced by genuine mastery milestones', 'Global collaboration became integral, not supplemental', 'Inclusive of diverse learning styles, neurodivergent learners, and non-traditional paths', 'Lifelong learning normalized — no "too late" or "too early"'] },
      { type: 'activity', activityType: 'try', activityTitle: 'Make a Timeline', activityDuration: '20 min', activityPrompt: 'Plot 5 key moments in your ideal learning journey. For each moment, consider what comes before and after. What triggers the transition from one phase to the next?', activityRound2: 'Now compress your timeline to half its length. What changes? What stays?' },
      { type: 'activity', activityType: 'imagine', activityTitle: 'Adaptive Paced Education', activityPrompt: 'How might we create personalized pathways for students to progress at their own speed? What would a university without semesters look like?' },
      { type: 'activity', activityType: 'act', activityTitle: 'Chart Your Rhythm', activityPrompt: 'If you could design your own learning rhythm, how would you cycle through Exploration, Mastery, and Integration?', activitySteps: ['For each of the next 5 years, choose: Exploration, Mastery, or Integration', 'Describe what you\'d do in each phase', 'Identify what would trigger your transition to the next phase', 'Reflect: How does personalizing your pace change your relationship with learning?'] },
    ],
    exhibitArticles: [
      { id: 'AP-301', title: 'The Last Semester', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall D', excerpt: 'How the semester system was finally put to rest.', body: "The last traditional semester at Artemis ended on December 15, 2027. The following January, the university transitioned entirely to the Adaptive Paced model. Within two years, the data was irrefutable: deeper learning, higher retention, and dramatically reduced student anxiety." },
      { id: 'AP-302', title: 'The Neurodiversity Revolution', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall D', excerpt: 'How adaptive pacing unlocked learning for neurodivergent students.', body: "Perhaps the most profound impact was on neurodivergent learners. Students with ADHD, dyslexia, and autism spectrum conditions thrived under the new model. By 2040, Artemis's neurodivergent graduation rate had surpassed its neurotypical rate — a result that would have been inconceivable under the old system." },
    ],
    keyQuote: "Explore, focus, master, apply, reflect, adapt... and repeat",
    achievements: ['Fixed academic years eliminated — personalized phases instead', 'Deadline stress replaced by genuine mastery milestones', 'Global collaboration integral, not supplemental', 'Inclusive of diverse learning styles and neurodivergent learners', 'Lifelong learning normalized'],
    questTitle: 'Chart Your Rhythm', questPrompt: 'If you could design your own learning rhythm, how would you cycle through Exploration, Mastery, and Integration?',
    questInputs: [
      { key: 'rhythm-year-1', label: 'Year 1', type: 'dropdown' as const, options: ['Exploration', 'Mastery', 'Integration'] },
      { key: 'rhythm-year-2', label: 'Year 2', type: 'dropdown' as const, options: ['Exploration', 'Mastery', 'Integration'] },
      { key: 'rhythm-year-3', label: 'Year 3', type: 'dropdown' as const, options: ['Exploration', 'Mastery', 'Integration'] },
      { key: 'rhythm-year-4', label: 'Year 4', type: 'dropdown' as const, options: ['Exploration', 'Mastery', 'Integration'] },
      { key: 'rhythm-year-5', label: 'Year 5', type: 'dropdown' as const, options: ['Exploration', 'Mastery', 'Integration'] },
      { key: 'rhythm-detail', label: 'What would you explore, master, or integrate in each phase?', type: 'textarea' as const, placeholder: 'Describe your learning journey year by year...' },
      { key: 'rhythm-reflection', label: 'How does personalizing your pace change your relationship with learning?', type: 'textarea' as const, placeholder: 'Reflect on freedom from deadlines...' },
    ],
    reflectionQuestions: ['How does personalizing your pace change your relationship with learning?', 'What would you master if no deadline was pressing?'],
  },

  /* ═══ 4. SKILLPRINT ═══ */
  {
    slug: 'skillprint',
    icon: '💡',
    title: 'SkillPrint',
    tagline: 'We replaced the transcript with a living record',
    cardDescription: 'A living, breathing record that captures skills, growth, and capabilities — not just courses and grades.',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80',
    heroSubtitle: 'We look back from 2100 at the era when Artemis replaced the static transcript with a living record of skills and capabilities.',
    yearIntroduced: '2027',
    sections: [
      { type: 'setting', title: 'The World Before', subtitle: 'A piece of paper that reduced a human being to a GPA.', body: "Academic transcripts were the gold standard for recording student achievements — static documents listing courses and grades, relics of an era that valued memorization and standardized testing. A 3.8 GPA told you nothing about a student's ability to collaborate across cultures, think creatively under pressure, or lead a team through ambiguity.\n\nGrades alone failed to capture the breadth of skills, experiences, and personal growth that truly define an individual's capabilities. Employers were left guessing. Students were left reduced to numbers." },
      { type: 'narrative', title: 'The SkillPrint', body: "The SkillPrint was born — a living, breathing record that grows and changes with the student. Unlike a static transcript, a SkillPrint captures academic achievements, co-curricular activities, work experiences, personal projects, and micro-credentials earned outside traditional settings.\n\nSkillPrints are powered by sophisticated algorithms that track progress across various domains. They emphasize skills over grades — highlighting competencies such as critical thinking, creativity, collaboration, and leadership. Students curate their own SkillPrints, selecting which experiences to highlight and how to present their skills. This empowers them to tell their own stories.\n\nSecured by blockchain and enhanced by AI, the SkillPrint became the primary way individuals represent themselves — replacing the traditional resume, the traditional transcript, and eventually, the traditional job interview." },
      { type: 'side-by-side', title: 'From GPA to Growth Profile', body: "The transition wasn't just a technology change — it was an epistemological shift. The old system asked 'How well did you perform on standardized measures?' The new system asked 'What can you actually do, and how have you grown?'\n\nEmployers stopped asking for transcripts and started asking for SkillPrints — not because they were more detailed, but because they were more honest. A SkillPrint showed struggles alongside strengths, failed experiments alongside breakthroughs. It told the story of a whole person, not a test-taking machine." },
      { type: 'quote', quote: "Skills over grades. Growth over completion. Stories over scores.", attribution: 'SkillPrint Manifesto, 2029' },
      { type: 'exhibit', title: 'Exhibit Article Archive', subtitle: 'Recovered artifacts from the SkillPrint evolution.', body: "Article 45 — Birth of SkillPrints: The first SkillPrint was generated on September 3, 2028 for a student named only as 'Pioneer Alpha.' It contained 47 data points across 8 skill domains. By 2100, the average SkillPrint contained over 12,000 data points across 340 skill domains.\n\nArticle 67 — From GPA to Skill Profile: The last GPA was calculated at Artemis on June 14, 2029. Within a decade, 78% of Fortune 500 companies had adopted SkillPrint-based hiring." },
      { type: 'achievement', title: 'The Achievement', items: ['Shifted focus from teaching to the test to fostering deeper, more authentic learning', 'Employers assess readiness based on demonstrated skills, not grades', 'Students empowered to curate and own their learning narratives', 'Blockchain verification eliminated credential fraud', 'AI integration enabled personalized, evolving skill profiles', 'Replaced the traditional resume with a richer, more honest representation'] },
      { type: 'activity', activityType: 'try', activityTitle: 'Prototype a New Learning Experience', activityDuration: '30 min', activityPrompt: 'Design a prototype of a learning experience that incorporates Artemis SkillPrint elements. Include: what skills would be tracked, how they would be demonstrated, and how the record would evolve.', activityRound2: 'Now refine: What would the SkillPrint UI look like? Sketch a rough layout.' },
      { type: 'activity', activityType: 'imagine', activityTitle: 'SkillPrint & The Future', activityPrompt: 'How might we develop a dynamic AI-powered system that continuously updates a person\'s competencies in real-time?' },
      { type: 'activity', activityType: 'act', activityTitle: 'Map Your SkillPrint', activityPrompt: 'List your top 5 skills — not grades, not courses, but actual capabilities. Then create 3 new class titles combining Competency Hubs.', activitySteps: ['Write your 5 most genuine capabilities', 'For each skill, note one concrete way you\'ve demonstrated it', 'Create 3 new class titles combining 2+ Competency Hubs', 'Reflect: How does a skill profile change how you see yourself vs. a GPA?'] },
    ],
    exhibitArticles: [
      { id: 'SP-401', title: 'The Last Transcript', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall E', excerpt: 'The document that became a museum piece.', body: "Artemis's last traditional academic transcript was issued on June 14, 2029. It now hangs in the University Museum alongside other artifacts of educational antiquity — the Scantron sheet, the No. 2 pencil requirement, and the blue examination booklet." },
      { id: 'SP-402', title: 'Blockchain and the Future of Credentialing', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall E', excerpt: 'How distributed ledger technology made credentials trustworthy.', body: "The blockchain layer of SkillPrint solved a problem that had plagued education for centuries: credential verification. Combined with AI that continuously updated skill assessments based on real-world performance data, SkillPrint became the most trusted credential system in history." },
    ],
    keyQuote: "Skills over grades. Growth over completion. Stories over scores.",
    achievements: ['Shifted focus from test-taking to authentic learning', 'Employers assess demonstrated skills, not grades', 'Students own their learning narratives', 'Blockchain eliminated credential fraud', 'AI-powered evolving skill profiles', 'Replaced the traditional resume'],
    questTitle: 'Map Your SkillPrint', questPrompt: 'List your top 5 skills and create 3 new class titles that combine Competency Hubs.',
    questInputs: [
      { key: 'skill-1', label: 'Skill 1', type: 'text' as const, placeholder: 'e.g. Cross-cultural communication' },
      { key: 'skill-2', label: 'Skill 2', type: 'text' as const, placeholder: 'e.g. Systems thinking' },
      { key: 'skill-3', label: 'Skill 3', type: 'text' as const, placeholder: 'e.g. Data-driven storytelling' },
      { key: 'skill-4', label: 'Skill 4', type: 'text' as const, placeholder: 'e.g. Rapid prototyping' },
      { key: 'skill-5', label: 'Skill 5', type: 'text' as const, placeholder: 'e.g. Ethical reasoning' },
      { key: 'class-1', label: 'New Class Title 1 (combine 2+ hubs)', type: 'text' as const, placeholder: 'e.g. Quantum Ethics & Cultural Evolution' },
      { key: 'class-2', label: 'New Class Title 2 (combine 2+ hubs)', type: 'text' as const, placeholder: 'e.g. Sustainable Governance' },
      { key: 'class-3', label: 'New Class Title 3 (combine 2+ hubs)', type: 'text' as const, placeholder: 'e.g. Human-AI Synergy in Biotech' },
      { key: 'skillprint-reflection', label: 'How does a skill profile change how you see yourself compared to a GPA?', type: 'textarea' as const, placeholder: 'Think about what grades miss...' },
    ],
    reflectionQuestions: ['How does a skill profile change how you see yourself compared to a GPA?', 'What skills are you missing that matter?'],
  },

  /* ═══ 5. CENTERS OF INQUIRY ═══ */
  {
    slug: 'centers-of-inquiry',
    icon: '🏛️',
    title: 'Centers of Inquiry',
    tagline: 'We replaced departments with curiosity-driven hubs',
    cardDescription: 'Disciplinary boundaries dissolved. Researchers received 8-year terms with unrestricted funding. Students became Junior Fellows.',
    heroImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80',
    heroSubtitle: 'We look back from 2100 at the era when Artemis abolished departments and created curiosity-driven, interdisciplinary hubs of discovery.',
    yearIntroduced: '2026',
    sections: [
      { type: 'setting', title: 'The World Before', subtitle: 'Specialize, isolate, compete, stagnate.', body: "The global research landscape was fragmented into rigid academic departments, each operating in relative isolation. Research funding was tied to departmental allegiances, publication quantity was valued over innovation, and the most groundbreaking ideas — those that lived between disciplines — fell through the cracks.\n\nA quantum physicist who wanted to explore consciousness had no home. A literary scholar who saw patterns in epidemiological data had no funding. The system produced narrower specialists, while the world's problems grew broader and more interconnected." },
      { type: 'narrative', title: 'The Three Pillars', body: "Core Investigators — Brilliant minds freed from traditional academic funding. Long-term, unrestricted funding with renewable eight-year terms, fostering intellectual risk-taking and long-term vision. Selected not for publication records but for curiosity trajectories.\n\nTechnology Development Centers — Cutting-edge facilities using AI-driven design processes and quantum computing to push the boundaries of what was technologically possible in research.\n\nTranslational Programs — Bridging fundamental research and real-world applications using predictive algorithms and VR simulations to test applications before implementation." },
      { type: 'interlude', imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80', imageCaption: 'The Quantum Thought Synthesizer, a core technology of the Centers of Inquiry. Photo: Artemis Archives, 2042.' },
      { type: 'narrative', title: 'Students as Junior Fellows', body: "Students joined as Junior Fellows, working alongside Core Investigators across multiple Centers. This wasn't an internship — it was a genuine partnership in inquiry. Junior Fellows contributed fresh perspectives; Core Investigators contributed depth and methodological rigor.\n\nA new generation of polymaths emerged — capable of synthesizing knowledge across multiple disciplines to solve complex problems that no single department could address." },
      { type: 'quote', quote: "Curiosity, not credentials, drives discovery.", attribution: 'Centers of Inquiry Charter, 2026' },
      { type: 'exhibit', title: 'Exhibit Article Archive', subtitle: 'Recovered artifacts from the Centers of Inquiry exhibit.', body: "Article 45 — Quantum Thought Synthesizer: Quantum computing with holographic visualization and cross-disciplinary pattern recognition AI to identify connections between research streams that no human could perceive. A breakthrough in materials science triggered an advance in public health.\n\nArticle 73 — Global Impact Accelerator: Real-time societal need analysis combined with predictive innovation modeling and virtual implementation simulations meant that research moved from lab to application in months rather than decades." },
      { type: 'achievement', title: 'The Achievement', items: ['Disciplinary boundaries eliminated — curiosity and impact drive research direction', 'Gap between fundamental research and real-world applications closed by design', 'Global collaboration became the norm', 'Students as Junior Fellows — a new generation of polymaths emerged', 'Eight-year terms enabled moon-shot thinking instead of grant-chasing'] },
      { type: 'activity', activityType: 'try', activityTitle: 'Make It Physical', activityDuration: '15–20 min', activityPrompt: 'Create a physical representation of a Center of Inquiry using whatever materials you have. What does a curiosity-driven hub look like? Show the three pillars.', activityRound2: 'Show your prototype to someone. Ask for one improvement suggestion. Then rebuild.' },
      { type: 'activity', activityType: 'imagine', activityTitle: 'Centers of Inquiry', activityPrompt: 'How might we create interdisciplinary hubs for cross-field collaboration on real-world problems?' },
      { type: 'activity', activityType: 'act', activityTitle: 'The Artemis Project Map', activityPrompt: 'The 8 Competency Hubs are the backbone of the Centers. Map your existing knowledge to the hubs, then create new connections.', activitySteps: ['Mark 5 existing classes or skills to their matching Competency Hubs', 'Create 5 new class titles that combine 2+ hubs each', 'Identify which Center of Inquiry would be your intellectual home', 'Reflect: How does working without disciplinary boundaries change what you could discover?'] },
    ],
    exhibitArticles: [
      { id: 'CI-501', title: 'The Last Department Meeting', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall F', excerpt: 'When departments dissolved into Centers.', body: "The last department meeting at Artemis was held on August 28, 2026, when the Faculty Senate voted unanimously to dissolve all 47 academic departments. The meeting lasted 14 hours. There were tears, standing ovations, and a surprisingly upbeat moment when the Department of Classics and the Department of Computer Science realized they'd been studying the same patterns in different languages for decades." },
      { id: 'CI-502', title: 'The Eight-Year Experiment', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall F', excerpt: 'How unrestricted, long-term funding changed research.', body: "The first cohort of Core Investigators received their eight-year appointments in 2027 — unconditional, no progress reports, no publication requirements. Within five years, Artemis Core Investigators produced 340% more breakthrough discoveries per capita than peers at traditional institutions. The key wasn't talent — it was time." },
    ],
    keyQuote: "Curiosity, not credentials, drives discovery.",
    achievements: ['Disciplinary boundaries eliminated', 'Research-to-application gap closed by design', 'Global collaboration became the norm', 'Students as Junior Fellows — new generation of polymaths', 'Eight-year terms enabled moon-shot thinking'],
    questTitle: 'Choose Your Center', questPrompt: "Which Center of Inquiry aligns with your mission? Choose one and explain the connection.",
    questInputs: [
      { key: 'center-choice', label: 'Choose a Center of Inquiry', type: 'dropdown' as const, options: CENTERS_OF_INQUIRY },
      { key: 'center-explanation', label: 'How does your mission connect to this Center?', type: 'textarea' as const, placeholder: 'Explain the connection...' },
      { key: 'center-reflection', label: 'How does working in a Center differ from a traditional department?', type: 'textarea' as const, placeholder: 'Think about the freedom of interdisciplinary inquiry...' },
    ],
    reflectionQuestions: ['How does working in a Center of Inquiry differ from a traditional department?', 'What questions could you ask here that you couldn\'t elsewhere?'],
  },

  /* ═══ 6. INFINITE LEARNING CONTINUUM ═══ */
  {
    slug: 'infinite-continuum',
    icon: '🌱',
    title: 'The Infinite Learning Continuum',
    tagline: 'We made learning last a lifetime — and then some',
    cardDescription: 'From Early Explorers to Legacy Builders — education with no endpoints, only chapters.',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1920&q=80',
    heroSubtitle: 'We look back from 2100 at the era when Artemis dissolved the artificial barriers between life stages and learning.',
    yearIntroduced: '2026',
    sections: [
      { type: 'setting', title: 'The World Before', subtitle: 'Segregate, educate, graduate, stagnate.', body: "The global education landscape was fragmented into distinct stages with artificial barriers. A 60-year-old wanting to learn quantum physics was treated as an anomaly. A 12-year-old passionate about ethics had no structured path. Elders held lifetimes of contextual knowledge that never reached young learners. Young people brought fresh perspectives that never informed experienced practitioners. The bridge between generations was built on nostalgia, not knowledge exchange." },
      { type: 'narrative', title: 'The Five Clusters', body: "Early Explorers (ages 3–10) — Nurturing curiosity, creativity, and foundational skills through play-based learning, immersive experiences, and AI-adapted instruction. No tests. No grades. Just wonder.\n\nNavigators (ages 11–18) — Deepening understanding through VR career exploration, peer-to-peer cross-cultural networks, and self-awareness development.\n\nGlobal Pioneers (ages 18–22) — Integrating the open loop university concept with flexible undergraduate experiences, internships, and global service projects.\n\nCatalysts (ages 22–64) — Lifelong learning through micro-credentials, VR training, AI-guided personalized paths, and global collaboration platforms.\n\nLegacy Builders (ages 65+) — Intergenerational knowledge transfer, mentorship, holographic time capsules, and courses for cognitive health and personal growth. Elders became the most valued members of the learning community." },
      { type: 'quote', quote: "Explore, connect, grow, contribute, reflect, adapt... and repeat infinitely.", attribution: 'Infinite Learning Continuum Charter, 2026' },
      { type: 'interlude', imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80', imageCaption: 'An intergenerational learning session in the Legacy Builders program. Photo: Artemis Archives, 2055.' },
      { type: 'exhibit', title: 'Exhibit Article Archive', subtitle: 'Recovered artifacts from the Infinite Learning Continuum exhibit.', body: "Article 37 — Neural Plasticity Enhancer: Quantum nanotechnology enabled non-invasive neural stimulation that enhanced cognitive plasticity at any age. Learners in their 80s could absorb new languages with the neural efficiency of a 20-year-old.\n\nArticle 82 — Intergenerational Wisdom Exchange: Holographic time capsules, empathy amplification fields, and collective consciousness interfaces created a bridge between generations that transcended the limitations of language and memory." },
      { type: 'achievement', title: 'The Achievement', items: ['Educational endpoints eliminated — continuous, personalized journey', 'Barriers between life stages dissolved — learning flows freely across ages', 'Cross-generational learning became the norm', 'More equitable access — age and circumstance no longer barriers', 'The emergence of Homo Eruditus — eternally learning, adapting humans', 'More resilient, innovative societies built on continuous knowledge exchange'] },
      { type: 'activity', activityType: 'try', activityTitle: 'Act It Out', activityDuration: '15–20 min', activityPrompt: 'Act out a scene where the Infinite Learning Continuum is reality. You\'re a 75-year-old in a learning session with a 9-year-old. What are you teaching each other?', activityRound2: 'Ask a teammate to join your scene. How does intergenerational learning feel different from same-age learning?' },
      { type: 'activity', activityType: 'imagine', activityTitle: 'Infinite Learning Continuum', activityPrompt: 'How might we design education supporting continuous learning from early childhood through senior years?' },
      { type: 'activity', activityType: 'act', activityTitle: 'Plot Your Lifetime Learning Journey', activityPrompt: 'Map yourself across all 5 clusters. What would you learn at each stage?', activitySteps: ['Write what you\'d learn as an Early Explorer (3–10)', 'Write what you\'d learn as a Navigator (11–18)', 'Write what you\'d learn as a Global Pioneer (18–22)', 'Write what you\'d learn as a Catalyst (22–64)', 'Write what you\'d learn as a Legacy Builder (65+)', 'Connect the dots: How does each stage feed into the next?'] },
    ],
    exhibitArticles: [
      { id: 'ILC-601', title: 'The End of Retirement', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall G', excerpt: 'How the Legacy Builders program redefined what it means to age.', body: "By 2050, the concept of 'retirement' had become as antiquated as the concept of 'graduation.' Legacy Builders reported 78% higher life satisfaction, 45% better cognitive health outcomes, and became the most innovative contributors to the Centers of Inquiry." },
      { id: 'ILC-602', title: 'The First Homo Eruditus', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall G', excerpt: 'The emergence of a new kind of human.', body: "The term Homo Eruditus — the learned, adaptable human — was coined in 2038. It described not a genetic evolution but a cultural one: humans shaped by the Infinite Learning Continuum from childhood through elderhood. They weren't smarter than their predecessors — they were more adaptable. And in a world of accelerating change, adaptability was the ultimate intelligence." },
    ],
    keyQuote: "Explore, connect, grow, contribute, reflect, adapt... and repeat infinitely.",
    achievements: ['Educational endpoints eliminated', 'Barriers between life stages dissolved', 'Cross-generational learning became the norm', 'More equitable access regardless of age', 'Emergence of Homo Eruditus'],
    questTitle: 'Plot Your Lifetime Learning Journey', questPrompt: 'Map yourself across all 5 clusters. What would you learn at each stage?',
    questInputs: [
      { key: 'cluster-explorers', label: 'Early Explorers (ages 3–10)', type: 'text' as const, placeholder: 'Curiosity, play, foundations...' },
      { key: 'cluster-navigators', label: 'Navigators (ages 11–18)', type: 'text' as const, placeholder: 'Self-awareness, career exploration...' },
      { key: 'cluster-pioneers', label: 'Global Pioneers (ages 18–22)', type: 'text' as const, placeholder: 'Open loop university, global service...' },
      { key: 'cluster-catalysts', label: 'Catalysts (ages 22–64)', type: 'text' as const, placeholder: 'Micro-credentials, career pivots...' },
      { key: 'cluster-legacy', label: 'Legacy Builders (ages 65+)', type: 'text' as const, placeholder: 'Mentorship, wisdom transfer...' },
      { key: 'continuum-connection', label: 'How does earlier learning feed into later stages?', type: 'textarea' as const, placeholder: 'Connect the dots across your lifetime...' },
      { key: 'continuum-reflection', label: 'How does thinking of learning as infinite change what you\'d prioritize now?', type: 'textarea' as const, placeholder: 'What would your Legacy Builder self want your current self to start?' },
    ],
    reflectionQuestions: ['How does thinking of learning as infinite change what you\'d prioritize now?', 'What would your Legacy Builder self want your current self to start?'],
  },

  /* ═══ 7. CALIBRATE → ELEVATE → ACTIVATE ═══ */
  {
    slug: 'calibrate-elevate-activate',
    icon: '🧭',
    title: 'Calibrate, Elevate, Activate',
    tagline: 'We replaced the freshman year with a year of unlearning',
    cardDescription: 'No grades, no credits, no majors for 6–12 months. Just exploration, self-discovery, and unlearning the habits that held you back.',
    heroImage: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1920&q=80',
    heroSubtitle: 'We look back from 2100 at the era when Artemis replaced the freshman-sophomore-junior-senior model with a cycle of growth, mastery, and application.',
    yearIntroduced: '2027',
    sections: [
      { type: 'setting', title: 'The World Before', subtitle: 'The first year was a shock — not because learning was hard, but because unlearning was never acknowledged.', body: "Students arrived conditioned by years of standardized testing, ranking, and conformity. They knew how to pass exams but not how to ask questions. They knew how to follow rubrics but not how to follow curiosity. They knew how to compete but not how to collaborate.\n\nTraditional education prioritized content mastery over holistic development. The first year was designed to weed out the 'unprepared' rather than prepare everyone. Students who didn't fit the mold were considered problems with the student, not problems with the mold." },
      { type: 'narrative', title: 'The Three Phases', body: "Calibrate (6–12 months) — No grades, no credits, no majors declared. Students explored widely, recklessly, without consequence. They sat in on lectures from every micro-college. They failed at things they'd never tried. The point wasn't to find yourself — it was to lose the version of yourself constructed by someone else's expectations.\n\nElevate (12–24 months) — Deep, focused pursuit of competence. Intellectual rigor balanced with emotional development. Close mentor and peer relationships formed the scaffolding for genuine expertise. Students didn't just accumulate knowledge — they developed judgment, taste, and the ability to discern signal from noise.\n\nActivate (12–18 months) — Real-world application through internships, collaborative projects, and entrepreneurial endeavors. Students didn't just demonstrate what they knew — they demonstrated what they could become.\n\nThese three phases replaced the freshman-sophomore-junior-senior model entirely. Students cycled through them multiple times, at their own pace." },
      { type: 'quote', quote: "Calibration isn't about finding yourself — it's about losing the version constructed by someone else's expectations.", attribution: 'Artemis Orientation Address, 2028' },
      { type: 'interlude', imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80', imageCaption: 'A Calibration workshop in the Artemis Compass Center. Photo: Artemis Archives, 2030.' },
      { type: 'narrative', title: 'The Artemis Compass', body: "During Calibration, each student was issued the Artemis Compass — a personal guidance device that helped them discover their learning styles, cognitive strengths, emotional patterns, and areas for growth. The Compass didn't tell students what to study; it helped them understand how they learned.\n\nStudents wrote three things the Compass could help them discover about themselves. These became the foundation for their entire educational journey — not a declared major, but a declared orientation toward growth. The Compass readings evolved as the student evolved, providing a living map of their intellectual and personal development." },
      { type: 'achievement', title: 'The Achievement', items: ['Education evolved from a rigid one-dimensional process to a dynamic, multi-faceted journey', 'The continuous loop of Calibrate → Elevate → Activate replaced the linear four-year model', 'Self-discovery became the foundation of education, not an optional extra', 'Students developed genuine judgment alongside knowledge', 'Unlearning was formally acknowledged as essential as learning', 'Personal and academic growth became inseparable'] },
      { type: 'activity', activityType: 'try', activityTitle: 'Change Your Space', activityDuration: '30 min', activityPrompt: 'Make one change to your physical space that supports the idea of Calibration — unstructured exploration without grades or expectations.', activityRound2: 'Now think about organizational space changes. What would a university built for Calibration look like architecturally?' },
      { type: 'activity', activityType: 'imagine', activityTitle: 'Moments of Pause', activityPrompt: 'How might we create intentional pauses for reflection — not as breaks from learning, but as essential phases of learning?' },
      { type: 'activity', activityType: 'act', activityTitle: 'Build Your Calibration Compass', activityPrompt: 'If you were entering Calibration today, what 5 experiences would you explore? Write 3 things the Artemis Compass could help you discover about yourself.', activitySteps: ['Write 5 experiences you\'d explore during Calibration', 'Write 3 things the Artemis Compass could help you discover about yourself', 'What would you unlearn if you had 6 months with no grades, no credits, no expectations?', 'Reflect: What version of yourself might emerge from Calibration?'] },
    ],
    exhibitArticles: [
      { id: 'CA-701', title: 'The First Calibration', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall H', excerpt: 'The first Calibration workshop at Artemis.', body: "The first Calibration workshop took place on January 8, 2028. Forty-seven students entered a room with no syllabus, no schedule, and no declared major. They were told only: 'Explore. Ask questions. Follow your curiosity. We'll check back in three months.' By the end of the first week, 44 of the 47 reported that the experience was 'the most liberating of their educational career.' By 2029, the waiting list for Calibration had 2,300 names." },
      { id: 'CA-702', title: 'The Artemis Compass Device', date: 'May 1, 2100', source: 'Artemis Archives — Exhibit Hall H', excerpt: 'How a device became a metaphor for self-discovery.', body: "The Artemis Compass was both a physical device and a metaphor. The physical version used biometric sensors and AI analysis to help students discover their learning orientation. But its deeper function was symbolic: it reminded students that direction matters more than speed, and that the most important journey is inward before it's outward. By 2035, every Artemis student received a Compass on their first day of Calibration." },
    ],
    keyQuote: "Calibration isn't about finding yourself — it's about losing the version constructed by someone else's expectations.",
    achievements: ['Self-discovery became the foundation of education', 'The linear four-year model was replaced by the Calibrate → Elevate → Activate cycle', 'Unlearning was formally acknowledged as essential as learning', 'Personal and academic growth became inseparable'],
    questTitle: 'Build Your Calibration Compass', questPrompt: 'If you were entering Calibration today, what 5 experiences would you explore? Write 3 things the Artemis Compass could help you discover about yourself.',
    questInputs: [
      { key: 'explore-1', label: 'Exploration Experience 1', type: 'text' as const, placeholder: 'e.g. A philosophy seminar on consciousness' },
      { key: 'explore-2', label: 'Exploration Experience 2', type: 'text' as const, placeholder: 'e.g. A bio lab growing cultures' },
      { key: 'explore-3', label: 'Exploration Experience 3', type: 'text' as const, placeholder: 'e.g. A community project in Kampala' },
      { key: 'explore-4', label: 'Exploration Experience 4', type: 'text' as const, placeholder: 'e.g. A coding bootcamp on AI ethics' },
      { key: 'explore-5', label: 'Exploration Experience 5', type: 'text' as const, placeholder: 'e.g. A wilderness solo expedition' },
      { key: 'compass-1', label: 'Compass Discovery 1', type: 'text' as const, placeholder: 'e.g. I learn best through dialogue' },
      { key: 'compass-2', label: 'Compass Discovery 2', type: 'text' as const, placeholder: 'e.g. I am energized by ambiguity' },
      { key: 'compass-3', label: 'Compass Discovery 3', type: 'text' as const, placeholder: 'e.g. My deepest curiosity lives at the intersection of X and Y' },
      { key: 'calibrate-reflection', label: 'What would you unlearn if you had 6 months with no expectations?', type: 'textarea' as const, placeholder: 'What version of yourself might emerge?' },
    ],
    reflectionQuestions: ['What would you unlearn if you had 6 months with no expectations?', 'What version of yourself might emerge from Calibration?'],
  },
];
