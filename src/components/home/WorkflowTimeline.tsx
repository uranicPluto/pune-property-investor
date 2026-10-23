"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  FileText,
  UserCheck,
  Compass,
  Key,
  BadgePercent,
  Headphones,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { RevealUp } from "@/components/motion/MotionWrapper";

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Select Property",
    shortLabel: "Discovery",
    description: "Browse verified residential towers, riverfront enclaves, and integrated townships matching your budget.",
    icon: <Search className="w-3.5 h-3.5" />,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    href: "/projects",
  },
  {
    step: "02",
    title: "Submit Enquiry",
    shortLabel: "Requirement",
    description: "Share your layout preference, target locality, and timeline via our 1-click consultation form or WhatsApp.",
    icon: <FileText className="w-3.5 h-3.5" />,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
    href: "/contact-us?type=general_enquiry",
  },
  {
    step: "03",
    title: "Meet Our Expert",
    shortLabel: "Advisory",
    description: "1-on-1 strategy session at our Kharadi office or virtually to analyze MahaRERA filings, floor plates, and prices.",
    icon: <UserCheck className="w-3.5 h-3.5" />,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    href: "/contact-us?type=advisory_call",
  },
  {
    step: "04",
    title: "Visit Property",
    shortLabel: "Site Visit",
    description: "Private chauffeured tours to inspect sample flats, actual carpet areas, acoustic quality, and construction speed.",
    icon: <Compass className="w-3.5 h-3.5" />,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    href: "/contact-us?type=site_visit",
  },
  {
    step: "05",
    title: "Buy Property",
    shortLabel: "Zero Brokerage",
    description: "Lock in direct developer terms with zero buyer brokerage, preferential inventory, and legal clause review.",
    icon: <Key className="w-3.5 h-3.5" />,
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=800&auto=format&fit=crop",
    href: "/services#home-buying-assistance",
  },
  {
    step: "06",
    title: "Loan Assistance",
    shortLabel: "Financing",
    description: "Direct banking coordination with SBI, HDFC, and ICICI for fast turnaround, pre-approvals, and optimal ROI rates.",
    icon: <BadgePercent className="w-3.5 h-3.5" />,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    href: "/contact-us?type=general_enquiry",
  },
  {
    step: "07",
    title: "Customer Support",
    shortLabel: "Possession",
    description: "End-to-end guidance from builder agreement registration and milestone payments to possession and key handover.",
    icon: <Headphones className="w-3.5 h-3.5" />,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    href: "/contact-us",
  },
];

export function WorkflowTimeline() {
  return (
    <div className="pt-14 sm:pt-20 border-t border-border/80">
      {/* Workflow Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Structured Advisory Framework</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
          How Our Advisory Workflow Works
        </h2>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          From your initial discovery through private site visits to zero-brokerage closing and
          lifelong post-sales support — here is the exact 7-step journey we navigate with you.
        </p>
      </div>

      {/* Desktop Connected Flow (Visible on XL screens) */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-7 gap-3 relative items-start">
          {WORKFLOW_STEPS.map((step, index) => (
            <div key={step.step} className="relative flex flex-col items-center text-center group">
              {/* Connecting Chevron to Next Step */}
              {index < WORKFLOW_STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute top-11 -right-3 z-20 text-gold/40 group-hover:text-gold group-hover:translate-x-0.5 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}

              {/* Step Circular Image with Concentric Golden Rings */}
              <div className="relative mb-4">
                {/* Outer Concentric Dotted Ring referencing original motif */}
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-gold/40 p-1.5 flex items-center justify-center transition-all duration-500 group-hover:border-gold group-hover:scale-105 group-hover:shadow-gold bg-white">
                  {/* Inner Photo Container */}
                  <div className="w-full h-full rounded-full overflow-hidden relative shadow-sm">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="100px"
                      className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-navy-dark/15 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* Floating Step Number Badge */}
                <span className="absolute -top-1 -right-1 bg-navy text-gold text-[10px] font-bold px-2 py-0.5 rounded-full border border-gold/40 shadow-sm">
                  {step.step}
                </span>

                {/* Floating Mini Icon Badge */}
                <span className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-gold text-navy-dark flex items-center justify-center shadow-sm">
                  {step.icon}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif font-bold text-sm text-navy group-hover:text-gold-dark transition-colors tracking-tight">
                {step.title}
              </h3>
              <p className="text-[11px] text-text-secondary leading-snug mt-1.5 px-1 line-clamp-3">
                {step.description}
              </p>

              <Link
                href={step.href}
                className="mt-3 text-[11px] font-semibold text-gold-dark hover:text-navy inline-flex items-center gap-1 group/link transition-colors"
              >
                <span>{step.shortLabel}</span>
                <ArrowRight className="w-2.5 h-2.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Grid for Tablets & Mobile (Visible below XL) */}
      <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {WORKFLOW_STEPS.map((step) => (
          <div
            key={step.step}
            className="group bg-white p-5 rounded-card border border-border/80 shadow-soft hover:shadow-card hover:border-gold/40 transition-all flex items-start gap-4"
          >
            {/* Circular Photo */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-gold/40 p-1 flex items-center justify-center bg-white group-hover:border-gold transition-colors">
                <div className="w-full h-full rounded-full overflow-hidden relative shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <span className="absolute -top-1 -right-1 bg-navy text-gold text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-gold/40">
                {step.step}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-1 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-base text-navy group-hover:text-gold-dark transition-colors">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {step.description}
              </p>
              <Link
                href={step.href}
                className="inline-flex items-center gap-1 text-xs font-semibold text-gold-dark hover:text-navy transition-colors pt-1"
              >
                <span>{step.shortLabel}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Workflow Bottom Advisory Bar */}
      <div className="mt-10 sm:mt-12 p-6 sm:p-7 rounded-card bg-navy-dark text-white border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-soft">
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-wider text-gold font-semibold">
            Ready to Begin Step 01?
          </div>
          <h4 className="font-serif font-bold text-lg sm:text-xl text-white">
            Explore Pune&apos;s verified towers or consult our Kharadi desk
          </h4>
          <p className="text-xs text-white/70">
            Zero buyer brokerage · 100% MahaRERA certified · Institutional developer terms
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-brand bg-gold text-navy-dark text-xs font-bold hover:bg-gold-light transition-colors shadow-gold"
          >
            <span>Browse Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contact-us?type=advisory_call"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-brand bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors border border-white/15"
          >
            <span>Book Consultation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
