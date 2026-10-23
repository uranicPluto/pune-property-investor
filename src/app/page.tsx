import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { HomeAboutSection } from "@/components/home/HomeAboutSection";
import { HappyCustomersSection } from "@/components/home/HappyCustomersSection";
import { LocationExplorerSection } from "@/components/home/LocationExplorerSection";
import { ProcessTimelineSection } from "@/components/home/ProcessTimelineSection";
import { TrendingProjectsSection } from "@/components/home/TrendingProjectsSection";
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

      {/* Section 5: Happy Customers Scrolling Carousel */}
      <HappyCustomersSection />

      {/* Section 6: Explore Pune by Location */}
      <LocationExplorerSection />

      {/* Section 7: How the Process Works */}
      <ProcessTimelineSection />

      {/* Section 8: Trending Projects Walkthroughs */}
      <TrendingProjectsSection />

      {/* Section 9: Client Testimonials */}
      <TestimonialsSection />

      {/* Section 10: Frequently Asked Questions */}
      <FAQSection />

      {/* Section 11: Flagship Kharadi Office & Google Map */}
      <OfficeMapSection />

      {/* Section 12: Final Call to Action */}
      <FinalCTASection />
    </>
  );
}
