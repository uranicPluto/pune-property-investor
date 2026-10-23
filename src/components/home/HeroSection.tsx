"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PropertySearchPanel } from "./PropertySearchPanel";
import { RevealUp, FadeIn } from "@/components/motion/MotionWrapper";

export function HeroSection() {
  return (
    <section className="relative min-h-[85svh] lg:min-h-[92svh] flex flex-col justify-between bg-navy-dark text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Background Architectural Visual with Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Modern Architectural Residential Residence in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 scale-105 animate-in fade-in zoom-in-95 duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy-dark/40 to-navy-dark" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center">
        {/* Eyebrow Pill */}
        <RevealUp delay={0.1} yOffset={16} className="inline-block mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm text-gold font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Pune&apos;s Trusted Real Estate Investment Consultancy</span>
          </div>
        </RevealUp>

        {/* Main Display Headline */}
        <RevealUp delay={0.2} yOffset={24}>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.12]">
            Discover a property that{" "}
            <span className="italic font-normal text-gold underline decoration-gold/40 decoration-wavy decoration-1 underline-offset-8">
              moves you forward.
            </span>
          </h1>
        </RevealUp>

        {/* Supporting Copy */}
        <RevealUp delay={0.3} yOffset={20}>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-sans">
            Explore curated residential residences and strategic investment corridors across
            Pune with transparent, data-backed guidance tailored to your ambitions.
          </p>
        </RevealUp>

        {/* CTAs */}
        <RevealUp delay={0.4} yOffset={16} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/projects"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Projects
          </Button>

          <Button
            href="/contact-us?type=advisory_call"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white"
            leftIcon={<PhoneCall className="w-4 h-4 text-gold" />}
          >
            Speak to an Advisor
          </Button>
        </RevealUp>
      </div>

      {/* Floating Property Search Box */}
      <div className="relative z-20 max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 sm:mt-14">
        <FadeIn delay={0.5}>
          <PropertySearchPanel />
        </FadeIn>
      </div>
    </section>
  );
}
