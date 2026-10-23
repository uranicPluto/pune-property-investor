import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, LineChart, CheckCircle2, Car, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function ServicesSection() {
  const serviceIcons = [
    <LineChart key="chart" className="w-6 h-6 text-gold" />,
    <Compass key="compass" className="w-6 h-6 text-gold" />,
    <CheckCircle2 key="check" className="w-6 h-6 text-gold" />,
    <Car key="car" className="w-6 h-6 text-gold" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="services">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Advisory Excellence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Comprehensive Real Estate Advisory Services
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3 leading-relaxed">
            From technical due diligence and high-yield portfolio allocation to chauffeured site
            inspections, we provide disciplined guidance at every phase of your property journey.
          </p>
        </div>

        {/* 2x2 Clean Service Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <RevealUp
              key={service.id}
              delay={index * 0.1}
              className="bg-ivory/50 rounded-card p-8 border border-border/80 hover:border-gold/40 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-brand bg-navy flex items-center justify-center shadow-soft">
                  {serviceIcons[index % serviceIcons.length]}
                </div>

                <div>
                  <h3 className="font-serif font-bold text-2xl text-navy">
                    {service.title}
                  </h3>
                  <p className="text-gold-dark text-xs uppercase tracking-wider font-semibold mt-1">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Who benefits bullets */}
                <div className="pt-2 space-y-2">
                  <div className="text-xs uppercase tracking-wider font-semibold text-navy">
                    Key Value Delivered:
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-text-primary">
                    {service.whatWeDeliver.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/80 flex items-center justify-between">
                <Link
                  href={`/services#${service.slug}`}
                  className="text-xs font-semibold text-navy hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Read Full Process</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Button
                  href={`/contact-us?service=${service.slug}`}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Book Service
                </Button>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
