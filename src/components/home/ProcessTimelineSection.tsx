import React from "react";
import Image from "next/image";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function ProcessTimelineSection() {
  return (
    <section className="py-10 sm:py-14 bg-white border-t border-border/80">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealUp className="text-center mb-6 sm:mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight">
            Our Workflow
          </h2>
          <div className="w-10 h-0.5 bg-gold mx-auto mt-2 rounded-full" />
        </RevealUp>

        {/* Compact Workflow Graphic */}
        <RevealUp delay={0.1} className="w-full">
          <div className="overflow-x-auto scrollbar-none pb-2">
            <div className="min-w-[720px] md:min-w-0 max-w-5xl mx-auto flex justify-center">
              <Image
                src="/images/workflow.jpg"
                alt="Pune Property Investor Advisory Workflow: Select Property, Submit Your Enquiry Form, Meet Our Expert, Visit Property (Site Visit), Buy Property, Loan Assistance, Customer Support"
                width={1600}
                height={338}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </RevealUp>
      </div>
    </section>
  );
}
