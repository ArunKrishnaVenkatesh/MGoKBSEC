# MGoKBSEC Student ECell Website Design Document

**Student Entrepreneurship Cell of Manipal Government of Karnataka BioIncubator**

---

## 1. Vision & Purpose

A professional, all-in-one digital hub for the MGoKBSEC Student ECell that:
- Showcases student startups and their journeys
- Promotes events, workshops, bootcamps, and pitching sessions
- Serves as a resource hub for aspiring entrepreneurs
- Builds community through team showcase and networking
- Enables collaboration via contact forms and newsletter

---

## 2. Target Audiences

| Audience | Primary Needs |
|----------|---------------|
| Prospective student entrepreneurs | Guidance, resources, inspiration, call-to-action to join |
| Current ECell members | Updates, event info, resources, community connection |
| Investors & mentors | Startup portfolio, contact pathways, credibility |
| Media & press | Brand story, achievements, high-res assets |
| University administration | Reports, metrics, alignment with institution goals |

---

## 3. Proposed Site Structure

### Pages (5 Core + 2 Optional)

| # | Page | Purpose | Key Content |
|---|------|---------|-------------|
| 1 | **Home** | First impression & navigation hub | Hero banner, mission snippet, featured startups (3), upcoming events (3), newsletter CTA, quick stats |
| 2 | **About** | Brand story & credibility | ECell story, mission/vision, impact metrics (startups launched, jobs created, events hosted), partners/institutions |
| 3 | **Startups** | Portfolio showcase | Grid of student ventures with logo, name, tagline, sector, one-liner description; filterable by sector/year |
| 4 | **Events** | Calendar & announcements | Upcoming events list with registration links, past events archive with recaps |
| 5 | **Resources** | Downloads & learning | Categorized toolkits (business plans, pitch decks, legal docs), links to external learning |
| 6 | **Team** *(optional)* | Human connection | Core team photos + roles, faculty advisors, notable mentors |
| 7 | **Contact** | Communication gateway | Inquiry form (partnerships, mentorship, general), newsletter signup, social links |

### Navigation Structure

```
Home
├── About
├── Startups
├── Events
├── Resources
├── Team
└── Contact
```

---

## 4. Feature Requirements

### Must Have
- [ ] Responsive mobile-first design
- [ ] Newsletter signup form
- [ ] Contact/inquiry form with categories (General, Partnership, Mentorship)
- [ ] Event listing with date, title, description, registration link
- [ ] Startup showcase cards (logo, name, tagline, sector, description)
- [ ] Resource download links (PDFs, templates)
- [ ] Team member profiles

### Nice to Have (Phase 2)
- [ ] Blog/news section for articles and success stories
- [ ] Event registration integration
- [ ] Social media feed embeds
- [ ] Startup individual detail pages

---

## 5. Visual Direction

### Style
**Professional & Corporate** — Clean, trustworthy, institution-aligned

### Color Palette (Proposed)
| Role | Color | Hex |
|------|-------|-----|
| Primary | Deep Blue | `#1E3A5F` |
| Secondary | Teal | `#00897B` |
| Accent | Gold/Amber | `#F59E0B` |
| Background | Off-white | `#F8FAFC` |
| Text | Dark Gray | `#1F2937` |
| Light | White | `#FFFFFF` |

### Typography
- **Headings**: Montserrat or Poppins (Google Fonts, free)
- **Body**: Inter or Open Sans (Google Fonts, free)

### Design Principles
- Ample whitespace
- Clear visual hierarchy
- Professional imagery (team photos, startup logos)
- Consistent spacing and alignment
- Subtle shadows and rounded corners

---

## 6. Technology Stack

### Platform: WordPress

**Rationale**: 
- User-friendly CMS for non-technical team members
- Large ecosystem of plugins for required features
- WordPress.com free tier or self-hosted options
- Easy maintenance and updates

### Recommended Setup

| Component | Choice | Cost |
|-----------|--------|------|
| Hosting | 000webhost / InfinityFree (free) or Namecheap Student | Free - ₹200/yr |
| Domain | .in domain via BigRock/GoDaddy | ₹600-800/yr |
| Theme | Astra (free) + Astra Pro OR GeneratePress | Free - $59/yr |
| Page Builder | Gutenberg (built-in) | Free |
| Event Plugin | The Events Calendar | Free |
| Contact Form | WPForms Lite or Contact Form 7 | Free |
| Newsletter | MailChimp for WordPress | Free |
| SEO | Yoast SEO | Free |
| Analytics | Google Analytics (via GA4) | Free |

### Alternative Stack Options
- **Astro/Next.js** (static site, faster, free hosting on Vercel) — if team is tech-savvy
- **Webflow** (visual builder, no-code) — if quick deployment needed

---

## 7. Content Outline

### Home Page Sections
1. **Hero**
   - Headline: "Empowering Student Entrepreneurs at Manipal"
   - Subheadline: "Join Karnataka's premier bioincubator student cell"
   - CTA: "Explore Startups" + "Join Us"

2. **Mission Strip**
   - 3 pillars: Innovate | Create | Scale

3. **Featured Startups** (3 cards)
   - Static showcase initially

4. **Upcoming Events** (3 items)
   - Pulls from Events Calendar

5. **Impact Stats**
   - 50+ Startups Supported
   - 200+ Members
   - 25+ Events Conducted
   - 10+ Lac Funding Raised

6. **Newsletter CTA**
   - "Stay Updated" form

### About Page Sections
1. Our Story
2. Mission & Vision
3. Our Team / Advisors
4. Partners & Institutions

### Startups Page
- Filterable grid by: Sector (Biotech, HealthTech, AgriTech, EdTech, General)
- Each card: Logo, Name, Tagline, Sector badge, 2-line description

### Events Page
- Tabbed view: Upcoming / Past
- Each event: Date badge, Title, Description, Register/View button

### Resources Page
- Categories: Business Planning, Pitching, Legal & Compliance, Funding
- Each resource: Icon, Title, Download/View button

### Team Page
- Core Team grid (Photos, Name, Role)
- Faculty Advisors section
- Mentors list

### Contact Page
- Inquiry form fields: Name, Email, Category (dropdown), Message
- Social links: Instagram, LinkedIn, Twitter/X
- Newsletter signup

---

## 8. Budget Breakdown

| Item | Option | Cost |
|------|--------|------|
| Domain (.in) | BigRock/GoDaddy | ₹600-800/year |
| Hosting (Year 1) | 000webhost (free) | ₹0 |
| Theme | Astra Free | ₹0 |
| Plugins | All free versions | ₹0 |
| **Total (Minimum)** | | **₹600-800/year** |

| Item | Option | Cost |
|------|--------|------|
| Domain (.in) | Namecheap | ₹700/year |
| Hosting (Managed) | SiteGround Starter | ₹1,500-2,000/year |
| Theme | Astra Pro | ₹3,500/year |
| Plugins | Premium add-ons | ₹2,000-5,000/year |
| **Total (Professional)** | | **₹8,000-10,000/year** |

---

## 9. Timeline (Proposed)

| Phase | Tasks | Duration |
|-------|-------|----------|
| **Phase 1: Setup** | Domain, hosting, WordPress install, theme setup | Week 1 |
| **Phase 2: Structure** | Pages creation, navigation, basic layout | Week 2 |
| **Phase 3: Content** | Write copy, add images, populate pages | Week 3 |
| **Phase 4: Features** | Forms, events, resources setup | Week 4 |
| **Phase 5: Polish** | Mobile testing, SEO, analytics, launch prep | Week 5 |
| **Phase 6: Launch** | Go live, announce, initial promotion | Week 6 |

---

## 10. Maintenance Plan

| Task | Frequency | Responsible |
|------|-----------|-------------|
| Add new startups | Monthly | Tech team |
| Update events | Weekly/as needed | Team lead |
| Add resources | Monthly | Resource coordinator |
| Post blog/news | Bi-weekly | Content lead |
| Security updates | Weekly | Tech team |
| Plugin updates | Monthly | Tech team |
| Backup verification | Weekly | Tech team |

---

## 11. Reference Websites

For design and functional inspiration:

| Organization | URL | Notes |
|-------------|-----|-------|
| E-Cell IIT Bombay | https://www.ecell.in/ | Established ECell, clean design |
| NSRCEL IIM Bangalore | https://nsrcel.org/ | Bioincubator, Karnataka connection |
| AIC BIIB | https://www.bbic.co.in/ | Bangalore BioInnovation Center |
| E-Cell IIT Delhi | https://www.ecell-iitd.org/ | Modern layout |
| SINE IIT Bombay | https://www.sineiitb.org/ | Startup incubator example |

---

## 12. Next Steps

1. [ ] **Confirm this document** — Review and suggest changes
2. [ ] **Gather brand assets** — Logo file (SVG/PNG), brand colors if available
3. [ ] **Collect content** — Startup list, team photos, event history, resources
4. [ ] **Set up infrastructure** — Register domain, choose hosting, install WordPress
5. [ ] **Design phase** — Create wireframes, then implement design
6. [ ] **Content population** — Add all copy and images
7. [ ] **Testing** — Cross-browser, mobile, form testing
8. [ ] **Launch** — Go live and promote

---

*Document created: April 2026*
*Last updated: April 2026*
