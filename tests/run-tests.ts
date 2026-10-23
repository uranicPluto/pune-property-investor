import assert from "node:assert";
import { PROJECTS } from "@/data/projects";
import { LOCATIONS } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { ARTICLES } from "@/data/articles";
import { FAQS } from "@/data/faqs";
import { TESTIMONIALS } from "@/data/testimonials";
import { COMPANY_INFO } from "@/data/company";
import { enquiryFormSchema } from "@/lib/validation";

console.log("==========================================");
console.log("PUNE PROPERTY INVESTOR - AUTOMATED TEST SUITE");
console.log("==========================================\n");

let passed = 0;
let failed = 0;

function test(name: string, fn: () => void) {
  try {
    fn();
    console.log(`✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`❌ FAIL: ${name}`);
    console.error(err);
    failed++;
  }
}

// 1. Data Integrity Tests
test("Company contact info has verified Kharadi address and phone", () => {
  assert.equal(COMPANY_INFO.phones.primaryRaw, "+917398174444");
  assert.equal(COMPANY_INFO.email, "info@punepropertyinvestor.com");
  assert.ok(COMPANY_INFO.officeAddress.full.includes("Gera Imperium Alpha"));
  assert.ok(COMPANY_INFO.officeAddress.full.includes("Kharadi"));
  assert.ok(COMPANY_INFO.whatsapp.link.includes("917398174444"));
});

test("Projects dataset has valid unique slugs, RERA IDs, and pricing", () => {
  assert.ok(PROJECTS.length >= 7, "Should have at least 7 verified projects");
  const slugs = new Set<string>();
  for (const p of PROJECTS) {
    assert.ok(p.id, `Project missing id: ${p.name}`);
    assert.ok(p.slug, `Project missing slug: ${p.name}`);
    assert.ok(!slugs.has(p.slug), `Duplicate slug detected: ${p.slug}`);
    slugs.add(p.slug);
    assert.ok(p.price.from > 0, `Invalid price for ${p.name}`);
    assert.ok(p.carpetAreaRange.min > 0, `Invalid carpet area for ${p.name}`);
    assert.ok(p.reraId.startsWith("P521000"), `Invalid MahaRERA ID format for ${p.name}: ${p.reraId}`);
    assert.ok(p.galleryImages.length >= 3, `Project should have at least 3 gallery photos: ${p.name}`);
    assert.ok(p.amenities.length >= 4, `Project should have verified amenities: ${p.name}`);
  }
});

test("Locations dataset has essential Pune micro-markets", () => {
  const expectedLocs = ["kharadi", "hinjewadi", "baner", "wakad", "mundhwa", "nibm", "hadapsar", "dhanori", "charholi", "wagholi"];
  const slugs = LOCATIONS.map((l) => l.slug);
  for (const loc of expectedLocs) {
    assert.ok(slugs.includes(loc), `Missing expected location: ${loc}`);
  }
});

test("Articles dataset preserves original SEO migration topics", () => {
  const articleSlugs = ARTICLES.map((a) => a.slug);
  assert.ok(articleSlugs.includes("dhanori-vs-charholi-homebuying-guidance"));
  assert.ok(articleSlugs.includes("why-invest-in-kharadi"));
  assert.ok(articleSlugs.includes("top-5-emerging-real-estate-hotspots-in-east-pune"));
  assert.ok(articleSlugs.includes("best-locations-to-invest-in-pune"));
  assert.ok(articleSlugs.includes("real-estate-market-trends-analysis"));
});

test("Testimonials dataset has verified reviews (Jay Dev, Shifa Nikhat, Ankit Agarwal)", () => {
  const clientNames = TESTIMONIALS.map((t) => t.clientName);
  assert.ok(clientNames.includes("Jay Dev"));
  assert.ok(clientNames.includes("Shifa Nikhat"));
  assert.ok(clientNames.includes("Ankit Agarwal"));
});

// 2. Form Validation Tests
test("Enquiry form validation succeeds with valid Indian mobile number", () => {
  const validData = {
    name: "Vikram Malhotra",
    phone: "9823012345",
    email: "vikram@example.com",
    projectOrServiceOfInterest: "Mantra Burgundy",
    preferredLocality: "Mundhwa",
    enquiryType: "site_visit",
    consent: true,
  };
  const res = enquiryFormSchema.safeParse(validData);
  assert.ok(res.success, "Should succeed with valid data");
});

test("Enquiry form rejects invalid phone numbers", () => {
  const invalidData = {
    name: "Vikram Malhotra",
    phone: "12345", // too short
    enquiryType: "general_enquiry",
    consent: true,
  };
  const res = enquiryFormSchema.safeParse(invalidData);
  assert.ok(!res.success, "Should fail with invalid phone");
  assert.ok(res.error.flatten().fieldErrors.phone, "Should have error on phone field");
});

test("Enquiry form enforces consent checkbox", () => {
  const noConsentData = {
    name: "Vikram Malhotra",
    phone: "9823012345",
    enquiryType: "general_enquiry",
    consent: false,
  };
  const res = enquiryFormSchema.safeParse(noConsentData);
  assert.ok(!res.success, "Should fail without consent");
});

test("Enquiry form detects bot spam honeypot", () => {
  const botData = {
    name: "Bot User",
    phone: "9823012345",
    enquiryType: "general_enquiry",
    consent: true,
    websiteField_hp: "I am a spam bot",
  };
  const res = enquiryFormSchema.safeParse(botData);
  assert.ok(!res.success, "Honeypot should reject input");
});

// 3. Filtering & Business Logic Tests
test("Filtering by Locality narrows results accurately", () => {
  const kharadiProjects = PROJECTS.filter((p) => p.locality.toLowerCase() === "kharadi");
  assert.ok(kharadiProjects.length >= 2, "Kharadi should have multiple developments");
  for (const p of kharadiProjects) {
    assert.equal(p.locality.toLowerCase(), "kharadi");
  }
});

test("Filtering by Luxury Property Type isolates luxury residences", () => {
  const luxuryProjects = PROJECTS.filter((p) => p.propertyType === "luxury");
  assert.ok(luxuryProjects.length >= 2, "Should have luxury residences");
  for (const p of luxuryProjects) {
    assert.equal(p.propertyType, "luxury");
  }
});

test("Filtering by Ready to Move status isolates OC received developments", () => {
  const readyProjects = PROJECTS.filter((p) => p.status === "Ready to Move");
  assert.ok(readyProjects.length >= 1, "Should have ready to move developments");
  for (const p of readyProjects) {
    assert.equal(p.status, "Ready to Move");
  }
});

test("Configuration filter for '4 BHK' includes projects with 4 BHK and 5 BHK layouts", () => {
  const largeUnits = PROJECTS.filter((p) =>
    p.configurations.some((c) => c.startsWith("4") || c.startsWith("5"))
  );
  assert.ok(largeUnits.length >= 2, "Should find at least 2 developments with 4 BHK or 5 BHK");
  for (const p of largeUnits) {
    assert.ok(p.configurations.some((c) => c.includes("4 BHK") || c.includes("5 BHK")));
  }
});

test("FAQ categories match expected buyer guidance themes", () => {
  const expectedCategories = ["Buying Process", "Legal & RERA", "Advisory & Fees", "Investment & Locations"];
  for (const cat of expectedCategories) {
    const hasCategory = FAQS.some((f) => f.category === cat);
    assert.ok(hasCategory, `Missing FAQ for category: ${cat}`);
  }
});

console.log("\n==========================================");
console.log(`RESULTS: ${passed} Passed, ${failed} Failed`);
console.log("==========================================");

if (failed > 0) {
  process.exit(1);
}
