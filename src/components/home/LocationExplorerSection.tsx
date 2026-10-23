import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, Percent, MapPin } from "lucide-react";
import { LOCATIONS } from "@/data/locations";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function LocationExplorerSection() {
  const featuredLocality = LOCATIONS.find((l) => l.slug === "kharadi") || LOCATIONS[0];
  const supportingLocalities = LOCATIONS.filter((l) => l.slug !== "kharadi").slice(0, 5);

  return (
    <section className="pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 bg-ivory/60 border-t border-border/80">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Micro-Market Intelligence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
              Explore Pune by Investment Corridor
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Every Pune neighborhood offers distinct economic anchors, commute patterns, and rental
              demographics. Discover where your lifestyle and capital thrive best.
            </p>
          </div>

          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors shrink-0 group self-start md:self-end"
          >
            <span>View All Locality Guides</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Featured Large Tile: Kharadi */}
          <div className="lg:col-span-7">
            <RevealUp className="h-full">
              <Link
                href={`/locations/${featuredLocality.slug}`}
                className="group relative block h-[420px] sm:h-[500px] lg:h-full rounded-card overflow-hidden shadow-card border border-border/80"
              >
                <Image
                  src={featuredLocality.heroImage}
                  alt={featuredLocality.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gold text-navy-dark font-sans font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Flagship Tech Hub
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 text-white space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gold uppercase tracking-widest font-semibold">
                    <span>{featuredLocality.region}</span>
                    <span>·</span>
                    <span>IT Capital</span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-4xl text-white group-hover:text-gold transition-colors flex items-center justify-between">
                    <span>{featuredLocality.name}</span>
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-gold group-hover:text-navy-dark transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </h3>

                  <p className="text-white/80 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {featuredLocality.headline}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-white/15 text-xs">
                    <div>
                      <div className="text-white/60 text-[10px] uppercase">Avg. Price</div>
                      <div className="font-semibold text-white mt-0.5">{featuredLocality.averageSqftPrice}</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-[10px] uppercase">Rental Yield</div>
                      <div className="font-semibold text-gold mt-0.5">{featuredLocality.rentalYieldEstimate}</div>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-white/60 text-[10px] uppercase">5-Yr Trend</div>
                      <div className="font-semibold text-white mt-0.5">{featuredLocality.annualAppreciationTrend}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealUp>
          </div>

          {/* Supporting Grid of 4 Localities */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
            {supportingLocalities.slice(0, 4).map((loc, idx) => (
              <RevealUp key={loc.id} delay={idx * 0.1}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group relative flex flex-col justify-end p-5 sm:p-6 rounded-card overflow-hidden shadow-soft border border-border/80 h-48 lg:h-[160px] bg-navy-dark"
                >
                  <Image
                    src={loc.heroImage}
                    alt={loc.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 40vw"
                    className="object-cover opacity-45 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-transparent" />

                  <div className="relative z-10 text-white flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                        {loc.region}
                      </div>
                      <h4 className="font-serif font-bold text-xl text-white group-hover:text-gold transition-colors">
                        {loc.name}
                      </h4>
                      <div className="text-xs text-white/70 mt-1">
                        Avg: <span className="text-white font-medium">{loc.averageSqftPrice}</span>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-navy-dark transition-all shrink-0 ml-3">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </RevealUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
