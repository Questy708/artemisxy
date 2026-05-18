---
Task ID: 1
Agent: Main Agent
Task: Rebuild Artemis 2100 micro-site using artemis-2300 as blueprint

Work Log:
- Analyzed the artemis-2300 GitHub repo (Stanford 2025 clone) thoroughly
- Identified design patterns: parallax sections, scroll spy nav, HeroHeader with decorative shapes, ExploreAnotherFuture CTAs, editorial blockquotes, magazine aesthetic
- Deleted old Artemis2100.tsx (1,506 lines) and Artemis2100Data.ts (369 lines)
- Created new directory structure: src/components/artemis2100/
- Built Shared.tsx with NavBar, Footer, HeroHeader, SectionHeading, ExploreAnotherFuture components
- Built Artemis2100Site.tsx as main container with internal state routing
- Built HomePage.tsx with 5 parallax sections and side-dot scroll spy navigation
- Built 7 provocation detail pages in provocations/ directory:
  - OpenLoopPage.tsx (Open Loop Learning)
  - PurposeLearningPage.tsx (Purpose Learning)
  - PacedEducationPage.tsx (Adaptive Paced Learning)
  - SkillPrintPage.tsx (SkillPrint)
  - CentersOfInquiryPage.tsx (Centers of Inquiry)
  - InfiniteLearningPage.tsx (Infinite Learning Continuum)
  - CalibrateElevatePage.tsx (Calibrate → Elevate → Activate)
- Built BuildPage.tsx (Discover/Create/Commit toolkit)
- Built AboutPage.tsx (About + Acknowledgements)
- Updated ArtemisApp.tsx: fullscreen rendering for micro-site, early return when on 'artemis-2100'
- Fixed all import paths across new files
- Verified build succeeds (HTTP 200)
- Visual testing confirmed all features work

Stage Summary:
- Complete micro-site rebuilt following Stanford 2025 design pattern from artemis-2300 repo
- Micro-site renders fullscreen with its own NavBar/Footer when navigating to "2100" from main site
- All 7 provocations have rich detail pages with HeroHeader, Historical Notes, The Shift, The Achievement sections
- Parallax scroll sections with clip-path + fixed images on home page
- Side-dot navigation with scroll spy on home page
- ExploreAnotherFuture cross-navigation on provocation pages
- Build passes, site compiles, all features verified working

---
Task ID: 2
Agent: Main Agent
Task: Clone artemis-2300- repo as t1 micro-site (exact replica)

Work Log:
- Cloned https://github.com/Questy708/artemis-2300- to /home/z/my-project/t1-ref
- Read all source files from the reference repo (identical to the previous artemis-2300 repo)
- Created src/components/t1/ directory with Shared.tsx, T1Site.tsx, and pages/ subdirectory
- Built Shared.tsx: NavBar, Footer, HeroHeader, SectionHeading, ExploreAnotherFuture (all with original Stanford 2025 branding)
- Built T1Site.tsx: main container with internal state routing for 7 pages
- Built 6 page files in pages/: HomePage, OpenLoopPage, PacedEducationPage, AxisFlipPage, PurposeLearningPage, BuildPage, AboutPage
- All content preserved EXACTLY as original — Stanford branding, text, images, SVGs, CSS
- Only change: react-router-dom Link components converted to button+goTo() for Next.js state routing
- Integrated T1Site into ArtemisApp with fullscreen rendering (same pattern as Artemis2100Site)
- Added "T1" button in Header (teal-colored, next to "2100" button)
- Added "Stanford 2025 (T1)" entry in Sidebar mobile navigation
- Added "Stanford 2025 — T1 Reference" in SearchOverlay
- Build passes successfully

Stage Summary:
- T1 micro-site is an exact clone of the artemis-2300- GitHub repo with original Stanford 2025 content
- Accessible via "T1" button in header or sidebar/search
- Renders fullscreen with its own "Stanford2025" branded NavBar and Footer
- All 4 provocations (Open Loop, Paced Education, Axis Flip, Purpose Learning) + Build + About pages included
- "Back to Artemis" button returns to main site
