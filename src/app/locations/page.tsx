import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, TrendingUp, Percent, ArrowUpRight, ArrowRight, ShieldCheck, Building } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LOCATIONS } from "@/data/locations";
import { Button } from "@/components/ui/Button";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Pune Locality Guides & Real Estate Micro-Markets | Property Investor",
  description:
    "Explore comprehensive locality guides across Pune: Kharadi, Hinjewadi, Baner, Wakad, Mundhwa, NIBM, and more. Compare average sq.ft. prices, rental yields, and upcoming infrastructure.",
  path: "/locations",
});

export default function LocationsIndexPage() {
  return (
    <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: "Locality Guides", href: "/locations" }]} />

        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-gold font-bold">
            Micro-Market Intelligence
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy tracking-tight">
            Pune Real Estate Locality Guides
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Every neighborhood in Pune offers distinct economic catalysts, commute dynamics, and
            rental yields. Explore our verified micro-market profiles to find the corridor that best
            matches your family lifestyle or capital growth objectives.
          </p>
        </div>

        {/* Locality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="group bg-white rounded-card border border-border/80 overflow-hidden shadow-soft hover:shadow-card hover:border-gold/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-light/10">
                  <Image
                    src={loc.heroImage}
                    alt={loc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="bg-navy-dark/90 backdrop-blur-sm text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                      {loc.region}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                    <h2 className="font-serif font-bold text-2xl text-white group-hover:text-gold transition-colors flex items-center justify-between">
                      <span>{loc.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                    </h2>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  <p className="text-text-secondary text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {loc.headline}
                  </p>

                  {/* Financial & Yield Benchmarks */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-border/60 text-xs">
                    <div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">
                        Avg. Price
                      </div>
                      <div className="font-bold text-navy mt-0.5">{loc.averageSqftPrice}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">
                        Rental Yield
                      </div>
                      <div className="font-bold text-gold-dark mt-0.5">
                        {loc.rentalYieldEstimate}
                      </div>
                    </div>
                  </div>

                  {/* Key Economic Hubs */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-navy">
                      Key Employment & Growth Hubs:
                    </div>
                    <ul className="space-y-1 text-xs text-text-secondary">
                      {loc.keyHubs.slice(0, 2).map((hub) => (
                        <li key={hub} className="flex items-start gap-1.5 line-clamp-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                          <span>{hub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 border-t border-border/40 mt-4 flex items-center justify-between">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-xs font-semibold text-navy group-hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  <span>Locality Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/projects?locality=${loc.name}`}
                  className="text-xs font-medium text-text-muted hover:text-navy transition-colors inline-flex items-center gap-1"
                >
                  <Building className="w-3 h-3" />
                  <span>View Projects</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Consultation Box */}
        <div className="p-8 rounded-card bg-navy-dark text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Not sure which Pune corridor fits your investment plan?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-2xl">
              Book a 1-on-1 session with our senior analysts to review commuter patterns, upcoming
              metro extensions, and expected capital appreciation over 3–7 years.
            </p>
          </div>
          <Button href="/contact-us?type=advisory_call" variant="primary" size="md" className="shrink-0">
            Speak to an Advisor
          </Button>
        </div>
      </div>
    </div>
  );
}
