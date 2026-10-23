import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { HomeAboutSection } from "@/components/home/HomeAboutSection";
import { LocationExplorerSection } from "@/components/home/LocationExplorerSection";
import { ProcessTimelineSection } from "@/components/home/ProcessTimelineSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { OfficeMapSection } from "@/components/common/OfficeMapSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Trust indicators */}
      <TrustSection />

      {/* Section 3: Featured Projects */}
      <FeaturedProjectsSection />

      {/* Section 4: About Us */}
      <HomeAboutSection />

      {/* Section 5: Explore Pune by Location */}
      <LocationExplorerSection />

      {/* Section 6: How the Process Works */}
      <ProcessTimelineSection />

      {/* Section 7: Market Insights and Guides */}
      <InsightsSection />

      {/* Section 8: Client Testimonials */}
      <TestimonialsSection />

      {/* Section 9: Frequently Asked Questions */}
      <FAQSection />

      {/* Section 10: Flagship Kharadi Office & Google Map */}
      <OfficeMapSection />

      {/* Section 11: Final Call to Action */}
      <FinalCTASection />
    </>
  );
}
