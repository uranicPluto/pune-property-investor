# Production Launch Checklist: Pune Property Investor

**Project:** Pune Property Investor  
**Engineering Team:** House of Workflow  
**Current State:** Fully implemented Next.js App Router application with passing TypeScript checks, production builds, and automated tests.

---

## 1. Pre-Flight Verification Matrix

| Checklist Item | Status | Verification Detail |
|---|---|---|
| **Route Architecture** | Complete | All 37 static & dynamic pages prerendered (`/`, `/about-us`, `/services`, `/contact-us`, `/projects`, `/projects/[slug]`, `/locations/[slug]`, `/blog`, `/blog/[slug]`, legal routes). |
| **Homepage 12 Sections** | Complete | Hero, Trust indicators, Featured projects, Location explorer, Services, Why choose us, Process timeline, Insights, Testimonials, FAQs, Final CTA, Footer. |
| **Property Filter System** | Complete | Client component with real-time multi-attribute filtering (locality, budget, status, layout, type) and URL query synchronization. |
| **Project Detail Templates** | Complete | Image gallery with accessible fullscreen lightbox, specifications table, RERA validation link, floor plans, and mobile sticky action bar. |
| **Locality Guides** | Complete | Comprehensive guides for Kharadi, Hinjewadi, Baner, Wakad, Mundhwa, NIBM, Hadapsar, Dhanori, Charholi, and Wagholi. |
| **Data Integrity** | Complete | Real verified phone numbers (+91 73981 74444 / +91 99220 39898), Gera Imperium Alpha Kharadi office, genuine testimonials (Jay Dev, Shifa Nikhat, Ankit Agarwal). Zero fake stats. |
| **Form & Lead Handling** | Complete | Server-side validation route (`/api/enquiry`) using Zod, phone regex, consent enforcement, and honeypot anti-spam. |
| **SEO & Canonicals** | Complete | Dynamic OpenGraph, Twitter Cards, canonical tags, `sitemap.xml`, `robots.txt`, and JSON-LD structured data (Organization, RealEstateListing, BlogPosting, BreadcrumbList). |
| **301 Redirect Mapping** | Complete | Configured in `next.config.mjs` preserving legacy WordPress/Elementor URLs. |
| **Type Safety & Build** | Complete | `tsc --noEmit` exits with 0 errors. `next build` compiles and prerenders all 37 routes cleanly. |
| **Automated Tests** | Complete | 12 automated test suites in `tests/run-tests.ts` passing with 0 failures. |

---

## 2. Production Deployment Readiness

### Environment Configuration
When deploying to Vercel, AWS Amplify, or a custom Node.js server, set the following environment variables:
```bash
NEXT_PUBLIC_SITE_URL=https://punepropertyinvestor.com
# Optional CRM / Webhook integration:
CRM_WEBHOOK_URL=https://...
SMTP_HOST=smtp.sendgrid.net
SMTP_USER=apikey
SMTP_PASSWORD=...
```

### DNS & Cutover Procedure (Preserving Live Site)
> [!IMPORTANT]
> As mandated by the Master Implementation Prompt, do NOT alter live DNS or domain records until the client and stakeholders explicitly review and authorize cutover.

1. Deploy the new Next.js build to a preview environment (e.g. `pune-property-investor-preview.vercel.app`).
2. Conduct user acceptance testing (UAT) on mobile, tablet, and desktop viewports.
3. Test live enquiry form submissions against the client's internal sales inbox or CRM.
4. Obtain formal written sign-off from Pune Property Investor.
5. Update DNS A / CNAME records to route `punepropertyinvestor.com` to the new Next.js deployment.
6. Verify 301 redirects for legacy URLs in Google Search Console.
