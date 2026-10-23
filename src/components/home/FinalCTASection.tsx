import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function FinalCTASection() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy-dark text-white overflow-hidden">
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Architecture"
          fill
          sizes="100vw"
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-navy-dark/95" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealUp className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-gold font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Unbiased Pune Advisory & Zero Buyer Brokerage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Let&apos;s find the right property for your{" "}
            <span className="italic font-normal text-gold">next chapter.</span>
          </h2>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you are upgrading to a riverfront luxury residence or securing high-yield assets
            in Kharadi, our advisory desk delivers verified inventory and preferential builder pricing.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact-us?type=advisory_call"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Book Advisory Consultation
            </Button>

            <a
              href={COMPANY_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-brand bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-base font-semibold hover:bg-emerald-600/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <span>Direct Desk: <strong className="text-white">{COMPANY_INFO.phones.primary}</strong></span>
            <span>·</span>
            <span>Office: <strong className="text-white">Gera Imperium Alpha, Kharadi</strong></span>
            <span>·</span>
            <span>Working Hours: <strong className="text-white">7 Days (9:30 AM – 7:30 PM)</strong></span>
          </div>
        </RevealUp>
      </div>
    </section>
  );
}
