"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { RevealUp } from "@/components/motion/MotionWrapper";

const CUSTOMER_MOMENTS = [
  {
    image: "/images/customers/customer-handover-1.png",
    title: "Dream Home Documentation & Kit Handover",
    description:
      "Joyful family receiving their documentation kit with our advisory team at the Kharadi flagship desk.",
    tag: "Kharadi Corridor",
    metric: "3 BHK Premium Residence",
  },
  {
    image: "/images/customers/customer-handover-2.png",
    title: "Sanctioned Agreement Ceremony",
    description:
      "Young couple securing their new home with 100% MahaRERA verification and zero brokerage fees.",
    tag: "East Pune Corridor",
    metric: "Riverfront Tower",
  },
  {
    image: "/images/customers/customer-handover-3.png",
    title: "Family Home Allotment",
    description:
      "End-to-end guidance from comparative site visits to final developer documentation.",
    tag: "Wagholi & Dhanori",
    metric: "2.5 BHK Luxury Layout",
  },
  {
    image: "/images/customers/customer-handover-4.jpg",
    title: "Mega Township Launch Allotment",
    description:
      "Securing exclusive pre-launch developer pricing and direct builder terms at grand event.",
    tag: "Township Launch",
    metric: "Pre-Launch Privilege",
  },
  {
    image: "/images/customers/customer-handover-5.png",
    title: "Belmont Skyverse Key Handover",
    description:
      "Excited homebuyers celebrating their booking at Belmont Skyverse sales lounge.",
    tag: "Belmont Skyverse",
    metric: "Skyline Suite",
  },
];

export function HappyCustomersSection() {
  // Duplicate array to achieve infinite, seamless marquee looping
  const duplicatedMoments = [...CUSTOMER_MOMENTS, ...CUSTOMER_MOMENTS];

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden border-b border-border/80">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        {/* Section Header */}
        <RevealUp className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-bold px-3 py-1 rounded-full bg-ivory border border-border">
            <HeartHandshake className="w-3.5 h-3.5 text-gold" />
            <span>Verified Client Success</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Our Happy Homebuyers &amp; Investors
          </h2>

          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Real families, real moments, and verified property milestones guided by our Pune
            advisory desk with 100% transparency and zero brokerage.
          </p>
        </RevealUp>
      </div>

      {/* Infinite Smooth Scrolling Track */}
      <div className="relative w-full overflow-hidden">
        {/* Edge Gradient Overlays for smooth entry/exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* CSS Hardware-Accelerated Marquee with Hover-Pause */}
        <div className="animate-marquee flex gap-6 sm:gap-8 items-stretch py-2 cursor-grab active:cursor-grabbing">
          {duplicatedMoments.map((moment, idx) => (
            <div
              key={`${moment.title}-${idx}`}
              className="w-[290px] sm:w-[350px] lg:w-[390px] shrink-0 bg-white rounded-card overflow-hidden border border-border/80 shadow-soft hover:shadow-card transition-all duration-300 group flex flex-col"
            >
              {/* Customer Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-navy-dark">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  sizes="(max-width: 640px) 290px, (max-width: 1024px) 350px, 390px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-80" />

                {/* Micro-market Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-navy/85 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20 shadow-sm">
                  {moment.tag}
                </div>

                {/* Configuration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-gold/90 text-white text-[10px] font-bold tracking-wide uppercase shadow-sm">
                  {moment.metric}
                </div>
              </div>

              {/* Caption and Review Highlights */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-navy leading-snug group-hover:text-gold transition-colors">
                    {moment.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {moment.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-text-secondary font-medium">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Handover
                  </span>
                  <span>Zero Brokerage</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sub-CTA */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 sm:p-5 rounded-brand bg-ivory/80 border border-border/80">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-navy font-semibold">
            <Sparkles className="w-4 h-4 text-gold shrink-0" />
            <span>Ready to find your dream property in Pune?</span>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-brand bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-navy-light transition-colors shadow-soft"
          >
            <span>Plan a Free Site Visit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
