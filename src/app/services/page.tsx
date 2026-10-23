import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { LineChart, Compass, CheckCircle2, Car, ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Real Estate Advisory & Consulting Services in Pune | Pune Property Investor",
  description:
    "End-to-end property consulting in Pune. Strategic investment modeling, home buying guidance, unbiased project comparison due diligence, and VIP site visit concierge.",
  path: "/services",
});

export default function ServicesPage() {
  const serviceIcons: Record<string, React.ReactNode> = {
    "property-investment-consulting": <LineChart className="w-6 h-6 text-gold" />,
    "home-buying-assistance": <Compass className="w-6 h-6 text-gold" />,
    "project-comparison": <CheckCircle2 className="w-6 h-6 text-gold" />,
    "site-visit-assistance": <Car className="w-6 h-6 text-gold" />,
  };

  return (
    <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-bold">
            <span>Specialized Advisory</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy tracking-tight">
            Independent Real Estate Advisory Services
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            We provide data-backed analysis, legal verification, and on-ground representation to
            homebuyers and investors across Pune. No broker pressure, no commission bias—just
            disciplined guidance.
          </p>
        </div>

        {/* Services Detail Sections */}
        <div className="space-y-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.slug}
              className="bg-white rounded-card p-8 sm:p-12 border border-border shadow-soft scroll-mt-28 space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border/80">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-brand bg-navy flex items-center justify-center shadow-soft mb-3">
                    {serviceIcons[service.id]}
                  </div>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
                    {service.title}
                  </h2>
                  <p className="text-gold-dark font-medium text-sm">
                    {service.tagline}
                  </p>
                </div>

                <Button
                  href={`/contact-us?service=${service.slug}`}
                  variant="primary"
                  size="md"
                  className="self-start md:self-auto shrink-0 shadow-gold"
                >
                  Book This Service
                </Button>
              </div>

              {/* 3-Column Breakdown: Who it is for, Problems Solved, What We Deliver */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="p-5 rounded-brand bg-ivory/50 border border-border/60 space-y-2.5">
                  <h3 className="font-sans font-bold text-navy uppercase text-xs tracking-wider">
                    Who It Is For
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    {service.whoItIsFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-brand bg-ivory/50 border border-border/60 space-y-2.5">
                  <h3 className="font-sans font-bold text-navy uppercase text-xs tracking-wider">
                    Pain Points Eliminated
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    {service.problemsSolved.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-status-error mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-brand bg-ivory/50 border border-border/60 space-y-2.5">
                  <h3 className="font-sans font-bold text-navy uppercase text-xs tracking-wider">
                    Concrete Deliverables
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    {service.whatWeDeliver.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-status-success mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Workflow Roadmap */}
              <div className="space-y-4 pt-4">
                <h3 className="font-serif font-bold text-xl text-navy">
                  Step-by-Step Execution Workflow
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {service.workflowSteps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-4 rounded-brand border border-border bg-white space-y-1.5 shadow-sm"
                    >
                      <div className="text-xs font-bold text-gold uppercase tracking-wider">
                        Step 0{step.stepNumber}
                      </div>
                      <div className="font-bold text-navy text-sm">{step.title}</div>
                      <div className="text-xs text-text-secondary leading-relaxed">
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Accordion */}
              {service.faqList && service.faqList.length > 0 && (
                <div className="pt-4 border-t border-border/80">
                  <h3 className="font-serif font-bold text-lg text-navy mb-3">
                    Service FAQs
                  </h3>
                  <Accordion
                    items={service.faqList.map((f, i) => ({
                      id: `faq-${service.id}-${i}`,
                      title: f.question,
                      content: <p>{f.answer}</p>,
                    }))}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Consultation Trigger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-navy">
              Ready to explore suitable Pune properties with guidance?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Schedule an exploratory consultation with our senior advisory team at our Kharadi
              office, or request a customized project shortlist directly to your inbox.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-text-muted">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>100% confidential · Zero spam guarantee · No brokerage fees</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ContactForm initialType="advisory_call" />
          </div>
        </div>
      </div>
    </div>
  );
}
