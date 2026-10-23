# Website Audit: Pune Property Investor (https://punepropertyinvestor.com/)

**Date of Audit:** October 2026  
**Auditor / Engineering Team:** House of Workflow  
**Current Production Stack:** WordPress (Astra Theme, Elementor Pro, LiteSpeed Cache, Swiper/BdThemes)  
**Target Production Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Motion for React, Lucide React

---

## 1. Executive Summary

The existing website for **Pune Property Investor** is built on WordPress using the Astra theme and Elementor page builder. While it contains valuable verified business information (phone numbers, Kharadi office address, genuine testimonials, developer partnerships, and locality blog articles), it suffers from typical WordPress builder limitations:
- Heavy render-blocking styles and script bundles (LiteSpeed cache, Elementor Pro widget assets).
- Fragmented navigation with duplicated links (`/contact-us/` vs `/contact/`, `/blogs/` vs `/blog/`, `/career-in-pune/` vs `/career/`).
- Poor semantic heading hierarchy (e.g. H1 followed immediately by placeholder H3s like `${project.name}`).
- Non-interactive, static property cards with no real filtering, sorting, or URL parameter state preservation.
- Inconsistent mobile experience and lack of accessibility compliance (missing labels, low-contrast text).
- Unstructured property listings without RERA status badges, floor plans, interactive galleries, or clear carpet area definitions.

The new Next.js implementation will retain all verified business equity and SEO authority while replacing the architecture with a lightning-fast, accessible, animated, and conversion-optimized digital advisory platform.

---

## 2. Technical Stack Audit

| Dimension | Current WordPress Site | New Next.js Architecture |
|---|---|---|
| **Platform** | WordPress 6.x + Elementor Pro | Next.js 14/15 (App Router, React 18/19, TypeScript) |
| **Styling** | Astra Theme CSS + LiteSpeed inline CSS (~350KB) | Tailwind CSS 3.4+ with strict design tokens |
| **Animation** | Elementor scroll/widget animations (janky, heavy JS) | Motion for React (Framer Motion) with `prefers-reduced-motion` |
| **Typography** | Mixed Google Fonts ('Fredoka', 'Aclonica', 'Roboto') | Refined pairing: DM Serif Display + Inter / Manrope |
| **Performance** | LCP > 3.8s, CLS > 0.18, INP > 280ms | LCP < 1.8s, CLS < 0.05, INP < 100ms |
| **Data Layer** | Unstructured WP posts / Elementor templates | Strongly-typed TypeScript data layer + Zod validation |
| **Forms** | Basic Elementor form / mailto | Server-side validated API routes + CSRF + honest status states |

---

## 3. Brand & Business Assets Discovered

- **Brand Name:** Pune Property Investor
- **Tagline / Positioning:** Real Estate Consultant in Pune for Smart Property Investment
- **Verified Phone Numbers:**
  - `+91 73981 74444` (Primary)
  - `+91 99220 39898` (Secondary)
- **Verified Email:** `info@punepropertyinvestor.com`
- **Verified Office Address:**  
  *3rd floor, Gera Imperium Alpha, Grant Rd, Vitthal Nagar, Kharadi, Pune, Maharashtra 411014*
- **Social Media Presences:**
  - Facebook: `https://www.facebook.com/punepropertyinvestors/`
  - Instagram: `https://www.instagram.com/punepropertyinvestor/`
  - LinkedIn: `https://www.linkedin.com/company/pune-property-investor1/`
  - Twitter/X: `https://x.com/pune_investors`
  - YouTube: `https://www.youtube.com/@PunePropertyInvestor`
- **Verified Client Testimonials:**
  - *Jay Dev:* "Innovative marketing strategies at Pune Property Investor! Our property got the attention it deserved. The results speak for themselves."
  - *Shifa Nikhat:* "Pune Property Investor - the channel partner you need! Collaborating with them was a smart move. Their support is invaluable."
  - *Ankit Agarwal:* "Channel partnership success! Pune Property Investor's collaboration was a game-changer for our business. Trustworthy and result-oriented."

---

## 4. Key UX & Conversion Opportunities

1. **Integrated Property Discovery:** Build a real-time, responsive multi-attribute filter system (Locality, Budget, Configuration, Status, Property Type) on `/projects` with instant URL query synchronization.
2. **Detailed Project Pages:** Add structured carpet areas, RERA registration numbers, pricing guidelines, verified amenity badges, high-resolution galleries with lightbox, and direct site-visit scheduling forms.
3. **Dedicated Locality Hubs:** In-depth neighborhood profiles for Kharadi, Hinjewadi, Baner, Wakad, Hadapsar, Dhanori, Charholi, Mundhwa, NIBM, and Viman Nagar with commute connectivity, lifestyle amenities, and investment dynamics.
4. **Advisory Services:** Highlight homebuying assistance, investment consulting, project comparative analysis, and site-visit assistance with transparent, non-commission-biased guidance.
