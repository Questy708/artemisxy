export type MicroSitePage = 'landing' | 'auth' | 'portal' | 'quest' | 'certificate' | 'blueprint';

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

export interface Provocation {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  narrative: string;
  keyQuote: string;
  questTitle: string;
  questPrompt: string;
  questInputs: QuestInput[];
  reflectionQuestions: string[];
}

export interface QuestInput {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'dropdown' | 'timeline' | 'multi-select';
  options?: string[];
  placeholder?: string;
}

export const COMPETENCY_HUBS = [
  'Sustainable Futures',
  'Interplanetary Collaboration',
  'Biotechnology & Ethics',
  'Quantum Computing & Philosophy',
  'Creative Problem-Solving',
  'Global Governance',
  'Human-AI Synergy',
  'Cultural Evolution',
];

export const CENTERS_OF_INQUIRY = [
  'Frontiers of Artemis Research',
  'Civilization Architecture',
  'Planetary Systems',
  'Space & Frontier Science',
  'Emerging Technologies',
  'Next-Gen Education',
  'Materials, Matter & Manufacturing Futures',
  'Agriculture, Food Systems',
  'Robotics, Mechatronics & Physical Autonomy',
  'Gaming & Worldbuilding',
  'Energy Systems',
  'Health & Bioethics',
  'Urban Futures',
  'Biotech & Life Sciences',
  'Fintech, DeFi & Economics',
];

export const FEELINGS = [
  'Frustrated',
  'Curious',
  'Hopeful',
  'Skeptical',
  'Inspired',
  'Overwhelmed',
];

export const PROVOCATIONS: Provocation[] = [
  {
    slug: 'open-loop',
    icon: '🌐',
    title: 'Open Loop Learning',
    tagline: 'We dissolved the idea of a four-year degree',
    narrative:
      "Before 2028, universities operated on a bizarre premise: that a human being could absorb everything they needed for 80 years of living in just 4 years of study, between ages 18–22. Students entered, crammed, graduated, and were cast out as 'alumni' — a word that literally means 'nourished ones,' though the nourishment was expected to last a lifetime.\n\nArtemis was the first university to formally abandon this model. Upon enrollment, students received 10 years of access to the micro-college network to distribute across their lives as they saw fit. Some concentrated their years early, as the social process of maturation within a peer group remained important. Others spread their decades across career pivots, parenthood, and retirement reinventions.\n\nThe micro-colleges became intergenerational by design — a 19-year-old exploring philosophy alongside a 47-year-old pivoting from engineering to public health. The word 'alumni' was replaced by 'Artemis Living' — because you never stopped being a student, you only paused.",
    keyQuote: "The word 'alumni' was replaced by 'Artemis Living' — because you never stopped being a student, you only paused.",
    questTitle: 'Design Your Learning Timeline',
    questPrompt:
      'You have 10 years of access to distribute across your life. Plot your learning loops (periods at university) and application loops (periods in the world) across a 20-year timeline. Click each year slot to toggle between Learning (▲), Application (▼), or blank.',
    questInputs: [
      {
        key: 'timeline',
        label: 'Your 20-Year Learning Timeline',
        type: 'timeline',
      },
      {
        key: 'timeline-reflection',
        label: 'How did you decide when to learn vs. when to apply? What surprised you about your timeline?',
        type: 'textarea',
        placeholder: 'Reflect on your choices...',
      },
    ],
    reflectionQuestions: [
      'How did you decide when to take learning loops versus application loops?',
      'What surprised you about distributing 10 years across a lifetime?',
    ],
  },
  {
    slug: 'purpose-learning',
    icon: '🎯',
    title: 'Purpose Learning',
    tagline: 'Students declared missions, not majors',
    narrative:
      "For centuries, students organized their education around disciplines — a system inherited from medieval guilds. You chose a box and sat inside it for four years. Artemis's provocation was simple: What if students declared missions instead of majors?\n\n'I'm studying biology' was replaced by 'I'm learning human biology to eliminate preventable disease in sub-Saharan Africa.' 'I'm studying political science' became 'I'm learning governance to redesign how citizens engage with their governments.'\n\nThe mission wasn't a career goal — it was a reason. It didn't tell you what job to take; it told you why you were learning. Faculty became mission advisors rather than department gatekeepers. Courses were selected not by requirement grids but by relevance to the mission.\n\nArtemis established Global Impact Labs around the world where students and faculty tackled global challenges through immersion. The vernacular shifted: students stopped asking 'What's your major?' and started asking 'What's your verb?'",
    keyQuote: "What's your verb?",
    questTitle: 'Declare Your Mission',
    questPrompt:
      'Write your mission statement. Not a major, not a career — a reason. Format: "I\'m learning [subject/knowledge] to [impact/change]"',
    questInputs: [
      {
        key: 'mission',
        label: 'Your Mission Statement',
        type: 'text',
        placeholder: "I'm learning ________ to ________",
      },
      {
        key: 'hubs',
        label: 'Which Competency Hubs connect to your mission?',
        type: 'multi-select',
        options: COMPETENCY_HUBS,
      },
      {
        key: 'mission-reflection',
        label: 'How does framing your education as a mission change what you\'d study? What would you drop? What would you add?',
        type: 'textarea',
        placeholder: 'Think about the difference between a major and a mission...',
      },
    ],
    reflectionQuestions: [
      'How does a mission change what you study compared to a major?',
      'What would you drop from your current education if you followed your mission?',
    ],
  },
  {
    slug: 'adaptive-paced',
    icon: '🔥',
    title: 'Adaptive Paced Learning',
    tagline: 'We abolished the academic calendar',
    narrative:
      "Rush, cram, stress, repeat: this was the universal rhythm of students worldwide at the beginning of the 21st century. The global education landscape was marked by arbitrary timelines, standardized curricula, and a one-size-fits-all approach that failed to account for individual learning styles.\n\nArtemis introduced Adaptive Paced Education, designed to flex with each learner's individual rhythm. The system was built on three interlinked phases:\n\nExploration (3–18 months) — Broad exposure, self-discovery, short intensive modules, cultural exchange through virtual and physical global experiences.\n\nMastery (6–36 months) — Deep personalized study, AI tutors adapting pace and style, practical demonstration over exams, the Global Mastery Network for cross-cultural collaboration.\n\nIntegration (3–12 months intensive, ongoing) — Real-world application through internships, research, and entrepreneurial ventures. The boundaries between education and career blurred, with lifelong learning becoming the norm.\n\nNo freshman, sophomore, junior, or senior. Just your own rhythm, your own pace, your own journey.",
    keyQuote: "Explore, focus, master, apply, reflect, adapt... and repeat",
    questTitle: 'Chart Your Rhythm',
    questPrompt:
      'If you could design your own learning rhythm, how would you cycle through Exploration, Mastery, and Integration? Map your ideal first 5 years.',
    questInputs: [
      {
        key: 'rhythm-year-1',
        label: 'Year 1',
        type: 'dropdown',
        options: ['Exploration', 'Mastery', 'Integration'],
      },
      {
        key: 'rhythm-year-2',
        label: 'Year 2',
        type: 'dropdown',
        options: ['Exploration', 'Mastery', 'Integration'],
      },
      {
        key: 'rhythm-year-3',
        label: 'Year 3',
        type: 'dropdown',
        options: ['Exploration', 'Mastery', 'Integration'],
      },
      {
        key: 'rhythm-year-4',
        label: 'Year 4',
        type: 'dropdown',
        options: ['Exploration', 'Mastery', 'Integration'],
      },
      {
        key: 'rhythm-year-5',
        label: 'Year 5',
        type: 'dropdown',
        options: ['Exploration', 'Mastery', 'Integration'],
      },
      {
        key: 'rhythm-detail',
        label: 'What would you explore, master, or integrate in each phase?',
        type: 'textarea',
        placeholder: 'Describe your learning journey year by year...',
      },
      {
        key: 'rhythm-reflection',
        label: 'How does personalizing your pace change your relationship with learning?',
        type: 'textarea',
        placeholder: 'Reflect on freedom from deadlines...',
      },
    ],
    reflectionQuestions: [
      'How does personalizing your pace change your relationship with learning?',
      'What would you master if no deadline was pressing?',
    ],
  },
  {
    slug: 'skillprint',
    icon: '💡',
    title: 'SkillPrint',
    tagline: 'We replaced the transcript with a living record',
    narrative:
      "Academic transcripts were the gold standard for recording student achievements — static documents listing courses and grades, relics of an era that valued memorization and standardized testing. As the world grew more complex, the limitations became evident. Grades alone failed to capture the breadth of skills, experiences, and personal growth that truly define an individual's capabilities.\n\nThe SkillPrint was born — a living, breathing record that grows and changes with the student. Unlike a static transcript, a SkillPrint captures academic achievements, co-curricular activities, work experiences, personal projects, and micro-credentials earned outside traditional settings.\n\nSkillPrints are powered by sophisticated algorithms that track a student's progress across various domains. They emphasize skills over grades — highlighting competencies such as critical thinking, creativity, collaboration, and leadership. Students curate their own SkillPrints, selecting which experiences to highlight and how to present their skills. This empowers them to tell their own stories.\n\nSecured by blockchain and enhanced by AI, the SkillPrint became the primary way individuals represent themselves — replacing the traditional resume.",
    keyQuote: "Skills over grades. Growth over completion.",
    questTitle: 'Map Your SkillPrint',
    questPrompt:
      "List your top 5 skills — not grades, not courses, but actual capabilities. Then create 3 new class titles that combine at least 2 Competency Hubs each.",
    questInputs: [
      {
        key: 'skill-1',
        label: 'Skill 1',
        type: 'text',
        placeholder: 'e.g. Cross-cultural communication',
      },
      {
        key: 'skill-2',
        label: 'Skill 2',
        type: 'text',
        placeholder: 'e.g. Systems thinking',
      },
      {
        key: 'skill-3',
        label: 'Skill 3',
        type: 'text',
        placeholder: 'e.g. Data-driven storytelling',
      },
      {
        key: 'skill-4',
        label: 'Skill 4',
        type: 'text',
        placeholder: 'e.g. Rapid prototyping',
      },
      {
        key: 'skill-5',
        label: 'Skill 5',
        type: 'text',
        placeholder: 'e.g. Ethical reasoning',
      },
      {
        key: 'class-1',
        label: 'New Class Title 1 (combine 2+ hubs)',
        type: 'text',
        placeholder: 'e.g. Quantum Ethics & Cultural Evolution',
      },
      {
        key: 'class-2',
        label: 'New Class Title 2 (combine 2+ hubs)',
        type: 'text',
        placeholder: 'e.g. Sustainable Governance through Creative Problem-Solving',
      },
      {
        key: 'class-3',
        label: 'New Class Title 3 (combine 2+ hubs)',
        type: 'text',
        placeholder: 'e.g. Human-AI Synergy in Biotechnology & Ethics',
      },
      {
        key: 'skillprint-reflection',
        label: 'How does a skill profile change how you see yourself compared to a GPA?',
        type: 'textarea',
        placeholder: 'Think about what grades miss...',
      },
    ],
    reflectionQuestions: [
      'How does a skill profile change how you see yourself compared to a GPA?',
      'What skills are you missing that matter?',
    ],
  },
  {
    slug: 'centers-of-inquiry',
    icon: '🏛️',
    title: 'Centers of Inquiry',
    tagline: 'We replaced departments with curiosity-driven hubs',
    narrative:
      "Specialize, isolate, compete, stagnate: this was the typical cycle of academic research at the dawn of the 21st century. The global research landscape was fragmented into rigid academic departments, each operating in relative isolation. This siloed approach failed to address the complex, interconnected challenges of an increasingly dynamic world.\n\nArtemis introduced the Centers of Inquiry — interdisciplinary hubs of innovation and discovery built on three interconnected pillars:\n\nCore Investigators — Brilliant minds freed from the constraints of traditional academic funding models. These researchers received long-term, unrestricted funding with renewable eight-year terms, fostering intellectual risk-taking and long-term vision.\n\nTechnology Development Centers — Cutting-edge facilities serving as the technological backbone, utilizing AI-driven design processes and quantum computing to push the boundaries of what was technologically possible in research.\n\nTranslational Programs — Bridging fundamental research and real-world applications using predictive algorithms to identify promising research and VR simulations to test applications before implementation.\n\nStudents joined as Junior Fellows, working alongside Core Investigators across multiple Centers. A new generation of polymaths emerged — capable of synthesizing knowledge across multiple disciplines to solve complex problems that no single department could address.",
    keyQuote: "Curiosity, not credentials, drives discovery",
    questTitle: 'Choose Your Center',
    questPrompt:
      "Which Center of Inquiry aligns with your mission? Choose one and explain how your purpose connects to its focus areas.",
    questInputs: [
      {
        key: 'center-choice',
        label: 'Choose a Center of Inquiry',
        type: 'dropdown',
        options: CENTERS_OF_INQUIRY,
      },
      {
        key: 'center-explanation',
        label: 'How does your mission connect to this Center?',
        type: 'textarea',
        placeholder: 'Explain the connection between your purpose and this Center...',
      },
      {
        key: 'center-reflection',
        label: 'How does working in a Center of Inquiry differ from a traditional department? What questions could you ask here that you couldn\'t elsewhere?',
        type: 'textarea',
        placeholder: 'Think about the freedom of interdisciplinary inquiry...',
      },
    ],
    reflectionQuestions: [
      'How does working in a Center of Inquiry differ from a traditional department?',
      'What questions could you ask here that you couldn\'t elsewhere?',
    ],
  },
  {
    slug: 'infinite-continuum',
    icon: '🌱',
    title: 'The Infinite Learning Continuum',
    tagline: 'We made learning last a lifetime — and then some',
    narrative:
      "Segregate, educate, graduate, stagnate: this was the typical lifecycle of learning for most individuals at the dawn of the 21st century. The global education landscape was fragmented into distinct stages with artificial barriers between life stages and educational institutions.\n\nArtemis introduced the Infinite Learning Continuum — a seamless, interconnected journey from early childhood to senior years, built on five interlinked clusters:\n\nEarly Explorers (ages 3–10) — Nurturing curiosity, creativity, and foundational skills through play-based learning, immersive experiences, and AI-adapted instruction.\n\nNavigators (ages 11–18) — Deepening understanding through VR career exploration, peer-to-peer cross-cultural networks, and self-awareness development.\n\nGlobal Pioneers (ages 18–22) — Integrating the open loop university concept with flexible undergraduate experiences, internships, and global service projects.\n\nCatalysts (ages 22–64) — Lifelong learning through micro-credentials, VR training, AI-guided personalized paths, and global collaboration platforms.\n\nLegacy Builders (ages 65+) — Intergenerational knowledge transfer, mentorship, holographic time capsules, and courses for cognitive health and personal growth.\n\nThe boundaries between life stages dissolved. The emergence of Homo Eruditus — eternally learning humans — led to more resilient, adaptable, and innovative societies.",
    keyQuote: "Explore, connect, grow, contribute, reflect, adapt... and repeat infinitely",
    questTitle: 'Plot Your Lifetime Learning Journey',
    questPrompt:
      'Map yourself across all 5 clusters. What would you learn at each stage of your life? How does earlier learning feed into later stages?',
    questInputs: [
      {
        key: 'cluster-explorers',
        label: 'Early Explorers (ages 3–10) — What would you learn?',
        type: 'text',
        placeholder: 'Curiosity, play, foundations...',
      },
      {
        key: 'cluster-navigators',
        label: 'Navigators (ages 11–18) — What would you learn?',
        type: 'text',
        placeholder: 'Self-awareness, career exploration, resilience...',
      },
      {
        key: 'cluster-pioneers',
        label: 'Global Pioneers (ages 18–22) — What would you learn?',
        type: 'text',
        placeholder: 'Open loop university, global service, internships...',
      },
      {
        key: 'cluster-catalysts',
        label: 'Catalysts (ages 22–64) — What would you learn?',
        type: 'text',
        placeholder: 'Micro-credentials, career pivots, collaboration...',
      },
      {
        key: 'cluster-legacy',
        label: 'Legacy Builders (ages 65+) — What would you learn?',
        type: 'text',
        placeholder: 'Mentorship, wisdom transfer, cognitive growth...',
      },
      {
        key: 'continuum-connection',
        label: 'How does earlier learning feed into later stages?',
        type: 'textarea',
        placeholder: 'Connect the dots across your lifetime...',
      },
      {
        key: 'continuum-reflection',
        label: 'How does thinking of learning as infinite change what you\'d prioritize now?',
        type: 'textarea',
        placeholder: 'What would your Legacy Builder self want your current self to start?',
      },
    ],
    reflectionQuestions: [
      'How does thinking of learning as infinite change what you\'d prioritize now?',
      'What would your Legacy Builder self want your current self to start?',
    ],
  },
  {
    slug: 'calibrate-elevate-activate',
    icon: '🧭',
    title: 'Calibrate → Elevate → Activate',
    tagline: 'We replaced the freshman year with a year of unlearning',
    narrative:
      "The first year of university used to be a shock — not because learning was hard, but because unlearning was never acknowledged as a legitimate phase. Students arrived conditioned by years of standardized testing, ranking, and conformity. They knew how to pass exams but not how to ask questions.\n\nArtemis introduced The Calibration Phase: a 6–12 month period where no grades were given, no credits earned, and no majors declared. Instead, students explored — widely, recklessly, without consequence. They sat in on lectures from every micro-college. They travelled to campuses they hadn't chosen. They failed at things they'd never tried. The point wasn't to find yourself — it was to lose the version of yourself that had been constructed by someone else's expectations.\n\nOnly after Calibration did students enter Elevation (12–24 months of focused, rigorous pursuit of competence) and then Activation (12–18 months applying that competence in the world). These three phases replaced the freshman-sophomore-junior-senior model entirely. Students cycled through them multiple times, at their own pace.\n\nThe Artemis Compass device helped students discover their learning styles, strengths, and areas for growth during Calibration — a personal guide through the wilderness of self-discovery.",
    keyQuote: "Calibration isn't about finding yourself — it's about losing the version constructed by someone else's expectations",
    questTitle: 'Build Your Calibration Compass',
    questPrompt:
      'If you were entering Calibration today, what 5 experiences would you explore? Write 3 things the Artemis Compass could help you discover about yourself.',
    questInputs: [
      {
        key: 'explore-1',
        label: 'Exploration Experience 1',
        type: 'text',
        placeholder: 'e.g. A philosophy seminar on consciousness',
      },
      {
        key: 'explore-2',
        label: 'Exploration Experience 2',
        type: 'text',
        placeholder: 'e.g. A bio lab growing cultures',
      },
      {
        key: 'explore-3',
        label: 'Exploration Experience 3',
        type: 'text',
        placeholder: 'e.g. A community project in Kampala',
      },
      {
        key: 'explore-4',
        label: 'Exploration Experience 4',
        type: 'text',
        placeholder: 'e.g. A coding bootcamp on AI ethics',
      },
      {
        key: 'explore-5',
        label: 'Exploration Experience 5',
        type: 'text',
        placeholder: 'e.g. A wilderness solo expedition',
      },
      {
        key: 'compass-1',
        label: 'Compass Discovery 1',
        type: 'text',
        placeholder: 'e.g. I learn best through dialogue, not lectures',
      },
      {
        key: 'compass-2',
        label: 'Compass Discovery 2',
        type: 'text',
        placeholder: 'e.g. I am energized by ambiguity, not clarity',
      },
      {
        key: 'compass-3',
        label: 'Compass Discovery 3',
        type: 'text',
        placeholder: 'e.g. My deepest curiosity lives at the intersection of X and Y',
      },
      {
        key: 'calibrate-reflection',
        label: 'What would you unlearn if you had 6 months with no grades, no credits, no expectations?',
        type: 'textarea',
        placeholder: 'What version of yourself might emerge?',
      },
    ],
    reflectionQuestions: [
      'What would you unlearn if you had 6 months with no expectations?',
      'What version of yourself might emerge from Calibration?',
    ],
  },
];
