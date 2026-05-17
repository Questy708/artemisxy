---
Task ID: 1
Agent: Main Agent
Task: UX Audit - Fix broken links, remove dead elements, fix misleading redirects

Work Log:
- Conducted comprehensive audit of all 39 components and 100+ clickable elements
- Identified 5 dead links, 10 misleading redirects, 3 non-functional elements
- Fixed Innovation.tsx: "Join as a Builder" CTA now goes to 'jobs' instead of 'about'
- Fixed Sidebar.tsx: Faculty & Staff → 'our-people' (was 'about'), Alumni → 'the-university' (was 'about'), Privacy → 'policies' (was 'about'), Manifesto → 'the-university' (was 'about')
- Fixed Sidebar.tsx: Replaced dead social icons (X, f, In, IG spans) with real external links to social profiles
- Fixed SubPageFooter.tsx: Privacy → 'policies' (was 'about'), Alumni → 'the-university' (was 'colleges'), "Social Media Hub" → "News & Media" → 'blog', "Lifelong Learning" → "Global Network" → 'collegium-alliance'
- Fixed SubPageFooter.tsx: Replaced dead social icons (𝕏, f, ▶, 📷) with real external links
- Fixed Home.tsx: Removed non-functional "SHARE: X F" text from hero
- Fixed ProgramDetail.tsx: Website link changed from clickable 'about' link to plain text, Course directory items changed from misleading buttons (all going to 'education') to display cards, "Open Roadmap Library" → 'undergraduate' (was 'education')
- Fixed CampusLife.tsx: "Explore all 24 hostels" now scrolls to hostel map section instead of self-referential goToPage('campus'), added id="hostel-map" to the hostel map section

Stage Summary:
- All dead links fixed (social icons now have real external URLs)
- All misleading redirects corrected to appropriate pages
- Non-functional elements removed (SHARE text, fake course link arrows)
- Build compiles successfully
