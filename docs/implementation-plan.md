# Implementation Plan: Pune Property Investor Redesign

**Development Lead:** House of Workflow  
**Platform:** Next.js (App Router), TypeScript, Tailwind CSS, Motion for React, Lucide React

---

## Phase Breakdown & Milestone Schedule

### Phase 1: Discovery & Audit (COMPLETE)
- [x] Crawled and scraped live site https://punepropertyinvestor.com/
- [x] Extracted verified contact info (Kharadi office address, phones, email, social links)
- [x] Extracted genuine client testimonials and developer partners
- [x] Created `docs/website-audit.md`
- [x] Created `docs/content-inventory.md`
- [x] Created `docs/seo-migration-map.md`
- [x] Created `docs/implementation-plan.md`

### Phase 2: Foundation & Infrastructure (NEXT)
- [ ] Initialize Next.js project with App Router, TypeScript, and Tailwind CSS
- [ ] Configure design tokens: Midnight Navy `#142A43`, Deep Navy `#0B1929`, Champagne Gold `#B99762`, Warm Ivory `#F6F3ED`, Pure White `#FFFFFF`
- [ ] Install dependencies (`lucide-react`, `framer-motion` / `motion`, `zod`, `clsx`, `tailwind-merge`)
- [ ] Implement reusable motion primitives (`RevealUp`, `FadeIn`, `StaggerContainer`, `StaggerItem`) with `prefers-reduced-motion` compliance
- [ ] Build global site shell: Sticky Header with blur/scroll transition, announcement strip, mobile drawer navigation, comprehensive footer with verified credentials
- [ ] Establish typed models (`Project`, `Location`, `Service`, `Article`, `Testimonial`, `EnquiryPayload`)

### Phase 3: Homepage Implementation (All 12 Sections)
- [ ] Section 1: Hero with architectural visual, typography, CTA buttons, and interactive multi-field search panel
- [ ] Section 2: Trust indicators (verified service principles, Kharadi HQ presence, channel partner network)
- [ ] Section 3: Featured projects with editorial card layout, pricing, configurations, and status tags
- [ ] Section 4: Explore Pune by location (interactive neighborhood cards for Kharadi, Hinjewadi, Baner, Wakad, etc.)
- [ ] Section 5: Advisory services (Homebuying assistance, investment advisory, project comparison, site visit concierge)
- [ ] Section 6: Why work with us (trust-focused editorial values, transparent communication)
- [ ] Section 7: Process timeline (4-step buyer journey: Goals -> Shortlist -> Site Visit -> Decision)
- [ ] Section 8: Market insights and guides (editorial article cards)
- [ ] Section 9: Testimonials (verified reviews from Jay Dev, Shifa Nikhat, Ankit Agarwal)
- [ ] Section 10: Frequently Asked Questions (accessible accordion components)
- [ ] Section 11: Final Call to Action with consultation booking
- [ ] Section 12: Global footer with sitemap links, legal notices, and copyright

### Phase 4: Core Pages & Reusable Dynamic Templates
- [ ] `/projects` — Live property directory with search, filtering (locality, budget, configuration, status), sorting, clear-all, URL query state, empty state
- [ ] `/projects/[slug]` — Project detail template with hero, interactive image gallery + lightbox, specifications table, RERA details, verified amenities, location & connectivity, project-specific enquiry form, related developments, and mobile sticky action bar
- [ ] `/locations/[slug]` — Locality guide template with neighborhood overview, connectivity breakdown, major IT parks, price trends, residential options, and active projects
- [ ] `/services` — Services overview & dedicated service details
- [ ] `/about-us` — Company story, leadership principles, Kharadi office details, client commitments
- [ ] `/contact-us` — Full contact page with interactive form, phone, email, WhatsApp, and office address
- [ ] `/blog` & `/blog/[slug]` — Blog hub with categories, article detail view with breadcrumbs, table of contents, reading time, author, and related reading
- [ ] `/privacy-policy`, `/terms-and-conditions`, `/disclaimer` — Legal templates
- [ ] Custom `not-found.tsx` (404) and `error.tsx`

### Phase 5: Interactive Functionality & APIs
- [ ] Server-side enquiry API route (`/api/enquiry`) with Zod schema validation
- [ ] Client form state handling (loading, inline validation, honeypot spam prevention, confirmed success & error states)
- [ ] URL-persisted search filter synchronization on `/projects`
- [ ] Lightbox image modal with keyboard (Esc, arrows) and touch navigation
- [ ] Mobile drawer menu with body scroll locking and keyboard accessibility

### Phase 6: SEO & Core Web Vitals
- [ ] Dynamic Next.js Metadata API for all routes
- [ ] Dynamic `sitemap.ts` and `robots.ts`
- [ ] JSON-LD Structured Data (RealEstateAgent, Product, Place, Article, BreadcrumbList)
- [ ] 301 legacy redirects in `next.config.mjs`
- [ ] Next/Image optimization with explicit aspect ratios to avoid CLS

### Phase 7: Quality Assurance & Build Verification
- [ ] TypeScript compilation (`tsc --noEmit`)
- [ ] Production build (`next build`)
- [ ] Automated browser / integration test suite
- [ ] Responsive testing across 360px, 768px, 1024px, 1440px
- [ ] Final launch verification checklist
