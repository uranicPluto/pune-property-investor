import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
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

      {/* Section 4: Explore Pune by Location */}
      <LocationExplorerSection />

      {/* Section 5: How the Process Works */}
      <ProcessTimelineSection />

      {/* Section 6: Market Insights and Guides */}
      <InsightsSection />

      {/* Section 7: Client Testimonials */}
      <TestimonialsSection />

      {/* Section 8: Frequently Asked Questions */}
      <FAQSection />

      {/* Section 9: Flagship Kharadi Office & Google Map */}
      <OfficeMapSection />

      {/* Section 10: Final Call to Action */}
      <FinalCTASection />
    </>
  );
}
