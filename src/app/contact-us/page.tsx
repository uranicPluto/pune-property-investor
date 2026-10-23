import React, { Suspense } from "react";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { COMPANY_INFO } from "@/data/company";
import { ContactForm } from "@/components/forms/ContactForm";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us | Pune Property Investor | Kharadi Office & Phone",
  description:
    "Get in touch with Pune Property Investor. Call +91 73981 74444 or visit our flagship advisory office at 3rd Floor, Gera Imperium Alpha, Kharadi, Pune 411014.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: "Contact Us", href: "/contact-us" }]} />

        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-gold font-bold">
            Flagship Advisory Office
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy tracking-tight">
            Connect with Our Pune Property Specialists
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Whether you want to inspect a sample flat in Kharadi, evaluate investment yields in
            Hinjewadi, or request legal due diligence on a shortlist, our advisory team is ready
            to assist you 7 days a week.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Verified Contact Details & Office Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-card border border-border shadow-soft space-y-6">
              <h2 className="font-serif font-bold text-2xl text-navy pb-3 border-b border-border/80">
                Kharadi Headquarters
              </h2>

              <div className="space-y-4 text-sm text-text-primary">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-brand bg-ivory flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-xs uppercase tracking-wider">Office Address</div>
                    <div className="mt-1 leading-snug text-text-secondary">
                      {COMPANY_INFO.officeAddress.full}
                    </div>
                    <a
                      href={COMPANY_INFO.officeAddress.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-gold-dark hover:underline inline-flex items-center gap-1 mt-1.5"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-brand bg-ivory flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-xs uppercase tracking-wider">Telephone</div>
                    <div className="mt-1 space-y-1">
                      <div>
                        <a
                          href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                          className="font-medium text-navy hover:text-gold transition-colors"
                        >
                          {COMPANY_INFO.phones.primary} (Primary Desk)
                        </a>
                      </div>
                      <div>
                        <a
                          href={`tel:${COMPANY_INFO.phones.secondaryRaw}`}
                          className="font-medium text-navy hover:text-gold transition-colors"
                        >
                          {COMPANY_INFO.phones.secondary} (Alternate)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-brand bg-ivory flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-xs uppercase tracking-wider">Email</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-medium text-navy hover:text-gold transition-colors block mt-1"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-brand bg-ivory flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-xs uppercase tracking-wider">Working Hours</div>
                    <div className="text-text-secondary mt-1">{COMPANY_INFO.businessHours}</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-border/80">
                <a
                  href={COMPANY_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-brand bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Advisory Guarantee Box */}
            <div className="p-5 rounded-card bg-ivory border border-border/80 flex items-start gap-3 text-xs text-text-secondary leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy font-semibold">Privacy & Advisory Guarantee: </strong>
                Your phone number is strictly used for requested property guidance and scheduled
                site visit coordination. We never sell contact information to third-party telemarketers.
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div>Loading form...</div>}>
              <ContactForm initialType="general_enquiry" />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
