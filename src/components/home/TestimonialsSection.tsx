"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function TestimonialsSection() {
  const featured = TESTIMONIALS[0];
  const supporting = TESTIMONIALS.slice(1, 5);

  return (
    <section className="py-20 lg:py-28 bg-ivory/60 border-t border-border/80">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold mb-2">
            <span>Client Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Trusted by Buyers & Investors Across Pune
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3 leading-relaxed">
            Read verified feedback from homebuyers, institutional channel partners, and NRI
            investors who partnered with our advisory team.
          </p>
        </div>

        {/* Testimonials Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Testimonial Card */}
          <div className="lg:col-span-5 flex flex-col">
            <RevealUp className="bg-navy-dark text-white p-8 sm:p-10 rounded-card border border-white/10 shadow-floating flex-1 flex flex-col justify-between relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                  <span className="text-xs text-white/70 ml-2 font-medium">5.0 Star Verified Review</span>
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl text-white/95 leading-snug italic">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center font-serif text-navy-dark font-bold text-lg shrink-0">
                  {featured.avatarText}
                </div>
                <div>
                  <div className="font-sans font-bold text-base text-white flex items-center gap-2">
                    <span>{featured.clientName}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-gold font-medium mt-0.5">
                    {featured.roleOrAffiliation}
                  </div>
                  <div className="text-[11px] text-white/60">
                    {featured.locationOrProject}
                  </div>
                </div>
              </div>
            </RevealUp>
          </div>

          {/* Supporting Testimonial Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {supporting.map((test, index) => (
              <RevealUp
                key={test.id}
                delay={index * 0.1}
                className="bg-white p-6 sm:p-7 rounded-card border border-border/80 shadow-soft hover:shadow-card hover:border-gold/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-text-primary text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center font-serif text-navy font-bold text-sm shrink-0 border border-border">
                    {test.avatarText}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-navy flex items-center gap-1.5">
                      <span>{test.clientName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-status-success" />
                    </div>
                    <div className="text-xs text-text-secondary">
                      {test.roleOrAffiliation} · <span className="text-gold-dark font-medium">{test.locationOrProject}</span>
                    </div>
                  </div>
                </div>
              </RevealUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
