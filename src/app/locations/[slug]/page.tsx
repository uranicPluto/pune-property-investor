import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, TrendingUp, Percent, Building2, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { LOCATIONS } from "@/data/locations";
import { PROJECTS } from "@/data/projects";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Accordion } from "@/components/ui/Accordion";
import { ContactForm } from "@/components/forms/ContactForm";
import { constructMetadata } from "@/lib/seo";

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const loc = LOCATIONS.find((l) => l.slug === params.slug);
  if (!loc) return {};

  return constructMetadata({
    title: `Properties in ${loc.name}, Pune | Real Estate Investment Guide & Rates`,
    description: `Complete 2026 property guide for ${loc.name}, Pune. Average rates: ${loc.averageSqftPrice}, Rental yields: ${loc.rentalYieldEstimate}. IT parks, schools & top residential projects.`,
    path: `/locations/${loc.slug}`,
    image: loc.heroImage,
  });
}

export default function LocationDetailPage({ params }: LocationPageProps) {
  const location = LOCATIONS.find((l) => l.slug === params.slug);

  if (!location) {
    notFound();
  }

  const matchingProjects = PROJECTS.filter(
    (p) => p.locality.toLowerCase() === location.name.toLowerCase()
  );

  const otherLocations = LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 4);

  const faqItems = location.faqList.map((faq, i) => ({
    id: `faq-${i}`,
    title: faq.question,
    content: <p>{faq.answer}</p>,
    defaultOpen: i === 0,
  }));

  return (
    <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Trail */}
        <Breadcrumbs
          items={[
            { label: "Locations", href: "/projects" },
            { label: `${location.name}, Pune` },
          ]}
        />

        {/* Hero Header with Background Visual */}
        <div className="relative rounded-card overflow-hidden bg-navy-dark text-white p-8 sm:p-12 lg:p-16 shadow-card border border-border">
          <Image
            src={location.heroImage}
            alt={location.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{location.region} · Micro-Market Profile</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Real Estate in {location.name}, Pune
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {location.headline}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15 text-xs sm:text-sm">
              <div className="p-3 rounded bg-white/10 backdrop-blur-sm">
                <div className="text-white/60 text-[11px] uppercase tracking-wider">Average Price</div>
                <div className="font-bold text-white text-base mt-0.5">{location.averageSqftPrice}</div>
              </div>
              <div className="p-3 rounded bg-white/10 backdrop-blur-sm">
                <div className="text-white/60 text-[11px] uppercase tracking-wider">Rental Yield</div>
                <div className="font-bold text-gold text-base mt-0.5">{location.rentalYieldEstimate}</div>
              </div>
              <div className="p-3 rounded bg-white/10 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-white/60 text-[11px] uppercase tracking-wider">5-Year Appreciation</div>
                <div className="font-bold text-white text-base mt-0.5">{location.annualAppreciationTrend}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Body: Left (Overview, Connectivity, Projects), Right (Form & Nav) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-card border border-border shadow-soft">
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
                About Living & Investing in {location.name}
              </h2>
              <div className="space-y-3 text-text-secondary text-sm sm:text-base leading-relaxed">
                {location.overview.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Micro-market Advantages */}
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
                Key Strategic Advantages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {location.advantages.map((adv, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-card bg-white border border-border shadow-soft space-y-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h3 className="font-sans font-bold text-base text-navy">{adv.title}</h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Commute and Major Connectivity */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-card border border-border shadow-soft">
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
                Commute Distances & Landmark Access
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {location.connectivityHighlights.map((conn, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-brand bg-ivory/50 border border-border/80"
                  >
                    <span className="text-navy font-medium">{conn.landmark}</span>
                    <span className="text-gold-dark font-bold text-xs bg-white px-2.5 py-1 rounded-full border border-border shadow-sm">
                      {conn.timeMinutes}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Projects in Locality */}
            {matchingProjects.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
                    Featured Developments in {location.name}
                  </h2>
                  <Link
                    href={`/projects?locality=${location.name}`}
                    className="text-xs sm:text-sm font-semibold text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {matchingProjects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                  ))}
                </div>
              </div>
            )}

            {/* Locality FAQs */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-card border border-border shadow-soft">
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
                {location.name} Real Estate FAQs
              </h2>
              <Accordion items={faqItems} />
            </div>
          </div>

          {/* Right Column: Contact Form & Neighbouring Locations */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              <ContactForm
                initialServiceOrProject={`Properties in ${location.name}`}
                initialType="advisory_call"
              />

              {/* Other Localities List */}
              <div className="p-6 rounded-card bg-white border border-border shadow-soft space-y-3">
                <h3 className="font-serif font-bold text-lg text-navy">
                  Explore Neighboring Corridors
                </h3>
                <ul className="divide-y divide-border/60 text-sm">
                  {otherLocations.map((other) => (
                    <li key={other.slug} className="py-2.5">
                      <Link
                        href={`/locations/${other.slug}`}
                        className="flex items-center justify-between text-text-primary hover:text-gold transition-colors"
                      >
                        <span className="font-medium">{other.name}</span>
                        <span className="text-xs text-text-muted">{other.region}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
