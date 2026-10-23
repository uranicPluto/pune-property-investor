# SEO Migration & 301 Redirect Map: Pune Property Investor

**Source Domain:** https://punepropertyinvestor.com/  
**Maintained by:** House of Workflow

---

## 1. Redirect Strategy

To preserve Google ranking signals, domain equity, and prevent 404 errors for visitors following legacy links, all legacy URLs will be permanently mapped via 301 redirects in Next.js configuration (`next.config.mjs`).

## 2. URL Mapping Table

| Legacy URL (punepropertyinvestor.com) | New Canonical Route | HTTP Status | Rationale |
|---|---|---|---|
| `/contact/` | `/contact-us` | 301 Permanent | Consolidate duplicate contact pages |
| `/about-us/` | `/about-us` | 301 Permanent | Trailing slash normalization |
| `/contact-us/` | `/contact-us` | 301 Permanent | Trailing slash normalization |
| `/properties/` | `/projects` | 301 Permanent | Upgrade to modern project discovery interface |
| `/luxury-properties-in-pune/` | `/projects?type=luxury` | 301 Permanent | Preserve query intent into filter system |
| `/blogs/` | `/blog` | 301 Permanent | Standardized blog slug |
| `/blog/` | `/blog` | 301 Permanent | Trailing slash normalization |
| `/mantra-burgundy-mundhwa/` | `/projects/mantra-burgundy` | 301 Permanent | Clean, maintainable slug format |
| `/the-ark-voyage-nibm/` | `/projects/the-ark-voyage` | 301 Permanent | Clean, maintainable slug format |
| `/2-bhk-flats-in-kharadi/` | `/locations/kharadi` | 301 Permanent | Consolidate thin keyword page to rich location guide |
| `/why-invest-in-kharadi/` | `/blog/why-invest-in-kharadi` | 301 Permanent | Retain established article URL structure |
| `/2-bhk-flats-in-dhanori/` | `/locations/dhanori` | 301 Permanent | Consolidate to comprehensive location hub |
| `/2-bhk-flats-in-wagholi/` | `/locations/wagholi` | 301 Permanent | Consolidate to comprehensive location hub |
| `/2-bhk-flats-in-charholi/` | `/locations/charholi` | 301 Permanent | Consolidate to comprehensive location hub |
| `/2-bhk-flats-in-mundhwa/` | `/locations/mundhwa` | 301 Permanent | Consolidate to comprehensive location hub |
| `/2-bhk-flats-in-nibm/` | `/locations/nibm` | 301 Permanent | Consolidate to comprehensive location hub |
| `/2-bhk-flats-in-hadapsar/` | `/locations/hadapsar` | 301 Permanent | Consolidate to comprehensive location hub |
| `/dhanori-vs-charholi-homebuying-guidance/` | `/blog/dhanori-vs-charholi-homebuying-guidance` | 301 Permanent | Retain blog equity |
| `/top-5-emerging-real-estate-hotspots-in-east-pune/` | `/blog/top-5-emerging-real-estate-hotspots-in-east-pune` | 301 Permanent | Retain blog equity |
| `/best-locations-to-invest-in-pune/` | `/blog/best-locations-to-invest-in-pune` | 301 Permanent | Retain blog equity |
| `/real-estate-market-trends-analysis/` | `/blog/real-estate-market-trends-analysis` | 301 Permanent | Retain blog equity |
| `/privacy-policy/` | `/privacy-policy` | 301 Permanent | Trailing slash normalization |
| `/career/` | `/contact-us?subject=careers` | 301 Permanent | Forward to careers enquiry |
| `/career-in-pune/` | `/contact-us?subject=careers` | 301 Permanent | Forward to careers enquiry |

---

## 3. SEO Metadata Architecture

Every canonical page in the new Next.js architecture will dynamically generate:
- Unique `<title>` with brand suffix `| Pune Property Investor`.
- Dedicated `<meta name="description">` under 160 characters.
- `<link rel="canonical">` referencing the absolute URL.
- OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`, `og:type`).
- Twitter card tags (`twitter:card: "summary_large_image"`).
- JSON-LD Structured Data:
  - Homepage: `RealEstateAgent` / `Organization` / `WebSite` schema
  - Projects: `RealEstateListing` / `Product` schema
  - Locations: `Place` / `AdministrativeArea` schema
  - Articles: `BlogPosting` / `Article` schema
  - Global: `BreadcrumbList` schema
