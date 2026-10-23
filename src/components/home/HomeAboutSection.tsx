import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Sparkles } from "lucide-react";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function HomeAboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-ivory border-y border-border/80">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial & Story */}
          <RevealUp className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold uppercase tracking-wider text-gold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>About Pune Property Investor</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight">
              Your Trusted Partner in Real Estate
            </h2>

            <p className="text-text-primary text-base sm:text-lg leading-relaxed font-sans">
              Welcome to Pune Property Investor, your trusted partner in real estate. We are a leading
              real estate company dedicated to providing exceptional services and delivering
              outstanding results to our valued clients. With our extensive industry knowledge,
              professional expertise, and unwavering commitment, we strive to exceed expectations
              and make your real estate journey seamless and rewarding.
            </p>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="bg-white p-4 rounded-brand border border-border/70 shadow-soft">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-bold text-xs sm:text-sm text-navy">
                  Industry Knowledge
                </h4>
                <p className="text-[11px] sm:text-xs text-text-secondary mt-1 leading-relaxed">
                  Deep intelligence across Pune&apos;s prime growth corridors.
                </p>
              </div>

              <div className="bg-white p-4 rounded-brand border border-border/70 shadow-soft">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark mb-2.5">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-bold text-xs sm:text-sm text-navy">
                  Professional Expertise
                </h4>
                <p className="text-[11px] sm:text-xs text-text-secondary mt-1 leading-relaxed">
                  MahaRERA verified guidance with zero buyer brokerage.
                </p>
              </div>

              <div className="bg-white p-4 rounded-brand border border-border/70 shadow-soft">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark mb-2.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-bold text-xs sm:text-sm text-navy">
                  Unwavering Commitment
                </h4>
                <p className="text-[11px] sm:text-xs text-text-secondary mt-1 leading-relaxed">
                  End-to-end transparency from site visit to final handover.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-brand bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-navy-light transition-colors shadow-soft"
              >
                <span>Discover More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-brand bg-white border border-border text-navy text-xs sm:text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                <span>Book Consultation</span>
              </Link>
            </div>
          </RevealUp>

          {/* Right Column: Visual Feature */}
          <RevealUp delay={0.15} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-card border border-border">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="Pune Property Investor - Flagship Advisory Office in Kharadi, Pune"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-brand bg-white/95 backdrop-blur-md border border-white/30 text-navy shadow-floating">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Advisory Headquarters</span>
                  </div>
                  <span className="text-[11px] font-bold text-navy bg-ivory px-2 py-0.5 rounded-full border border-border">
                    Kharadi
                  </span>
                </div>
                <div className="font-serif font-bold text-base sm:text-lg text-navy mt-1.5">
                  Gera Imperium Alpha
                </div>
                <p className="text-xs text-text-secondary mt-0.5">
                  Grant Road, Vitthal Nagar, Kharadi, Pune, Maharashtra 411014
                </p>
              </div>
            </div>
          </RevealUp>
        </div>
      </div>
    </section>
  );
}
