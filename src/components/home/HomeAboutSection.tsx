import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function HomeAboutSection() {
  return (
    <section className="pt-2 pb-6 sm:pt-4 sm:pb-8 lg:pb-10 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <RevealUp className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            About Us
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-3 rounded-full" />
        </RevealUp>

        {/* Wide Panoramic Team Banner with Text Overlay */}
        <RevealUp delay={0.1}>
          <div className="relative rounded-card overflow-hidden shadow-floating border border-border/80 min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] flex items-center justify-center p-6 sm:p-12 lg:p-16">
            {/* Real Pune Property Investor Team Photo */}
            <Image
              src="/images/ppi-group-photo.jpeg"
              alt="Pune Property Investor Team at Flagship Kharadi Headquarters"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[center_35%]"
            />

            {/* Contrast-enhancing dark gradient overlay for optimal legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/70 to-navy-dark/80" />

            {/* Overlaid About Us Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-loose font-sans font-normal tracking-wide drop-shadow-md">
                Welcome to Pune Property Investor, your trusted partner in real estate. We are a
                leading real estate company dedicated to providing exceptional services and
                delivering outstanding results to our valued clients. With our extensive industry
                knowledge, professional expertise, and unwavering commitment, we strive to exceed
                expectations and make your real estate journey seamless and rewarding.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-brand bg-gold text-white text-xs sm:text-sm font-semibold hover:bg-gold-dark transition-colors shadow-soft"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-brand bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/30 backdrop-blur-sm transition-colors"
                >
                  <span>Book Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </RevealUp>
      </div>
    </section>
  );
}
