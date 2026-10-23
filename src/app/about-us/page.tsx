import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, MapPin, CheckCircle2, ArrowRight, Building, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Pune Property Investor | Trusted Real Estate Advisory in Kharadi, Pune",
  description:
    "Learn about Pune Property Investor, our Kharadi headquarters, our mission to provide data-backed property guidance, and our zero-brokerage channel partner model.",
  path: "/about-us",
});

export default function AboutUsPage() {
  const values = [
    {
      title: "Radical Transparency",
      description:
        "We disclose all dimensions: usable RERA carpet area, true maintenance costs, loading ratios, and potential infrastructure delay risks upfront.",
    },
    {
      title: "Data-Driven Recommendations",
      description:
        "We evaluate developments using quantitative metrics: commercial absorption velocity, rental yields, and infrastructure alignments rather than emotional hype.",
    },
    {
      title: "Zero Buyer Brokerage",
      description:
        "We operate as institutional channel partners. Our compensation is handled directly by developers, ensuring our buyers receive complimentary advisory and preferential terms.",
    },
    {
      title: "End-to-End Handholding",
      description:
        "From initial shortlist and chauffeured site visits to legal agreement review, home loan sanctioning, and final possession inspections, we stay by your side.",
    },
  ];

  return (
    <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: "About Us", href: "/about-us" }]} />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-bold">
              <span>Our Story & Mission</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-tight">
              A Modern Real Estate Advisory Built on Trust & Local Intelligence.
            </h1>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Headquartered in the commercial heart of East Pune at Gera Imperium Alpha, Kharadi,
              Pune Property Investor was established to bring corporate rigor, architectural scrutiny,
              and data transparency to residential property acquisition.
            </p>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We recognized that homebuyers and NRI investors were overwhelmed by aggressive sales
              pitches, opaque broker incentives, and misleading marketing claims. Our mission is to
              act as your trusted advocate—vetting every project through legal, financial, and
              structural lenses.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Button href="/contact-us" variant="primary" size="md">
                Meet Our Advisory Team
              </Button>
              <Button href="/projects" variant="outline" size="md">
                Browse Projects
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] rounded-card overflow-hidden shadow-card border border-border">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="Gera Imperium Alpha Kharadi - Pune Property Investor Headquarters"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-brand bg-white/90 backdrop-blur-md border border-white/20 text-navy">
              <div className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Flagship Advisory Desk</span>
              </div>
              <div className="font-serif font-bold text-base text-navy mt-1">
                Gera Imperium Alpha, Kharadi
              </div>
              <div className="text-xs text-text-secondary">
                Grant Road, Vitthal Nagar, Pune, Maharashtra 411014
              </div>
            </div>
          </div>
        </div>

        {/* Real Numbers Banner */}
        <div className="bg-navy-dark text-white rounded-card p-8 sm:p-12 border border-white/10 shadow-floating">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center sm:text-left">
            {COMPANY_INFO.stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-gold">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Guiding Principles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs uppercase tracking-wider text-gold font-bold">
              Our Core Commitments
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
              Advisory Principles That Protect Your Interests
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <div
                key={val.title}
                className="bg-white p-7 rounded-card border border-border shadow-soft space-y-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-xl text-navy">{val.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Network */}
        <div className="bg-white rounded-card p-8 sm:p-10 border border-border shadow-soft space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-wider text-gold font-bold">
              Institutional Accreditation
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy mt-1">
              Authorized Developer Channel Partnerships
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm mt-2">
              We hold authorized institutional channel partnerships with Maharashtra’s premier
              real estate developers, ensuring direct builder access and preferred pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {COMPANY_INFO.developerPartners.map((dev) => (
              <span
                key={dev}
                className="px-4 py-2 rounded-brand bg-ivory border border-border text-xs sm:text-sm font-semibold text-navy shadow-sm"
              >
                {dev}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
