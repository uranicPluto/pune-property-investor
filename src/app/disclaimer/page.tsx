import React from "react";
import { Metadata } from "next";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Property & Investment Disclaimer | Pune Property Investor",
  description: "MahaRERA regulatory compliance disclaimer and investment advisory notice.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Disclaimer", href: "/disclaimer" }]} />

        <div className="bg-white p-8 sm:p-12 rounded-card border border-border shadow-soft space-y-6">
          <div className="space-y-2">
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-navy">
              Real Estate Advisory Disclaimer & Regulatory Notice
            </h1>
            <p className="text-xs text-text-muted">Effective: October 2026</p>
          </div>

          <div className="p-4 rounded-brand bg-ivory border border-border flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <strong className="text-navy font-semibold">MahaRERA Compliance Statement: </strong>
              Pune Property Investor operates in strict adherence to the Real Estate (Regulation and
              Development) Act, 2016 (RERA) and rules framed by Maharashtra Real Estate Regulatory
              Authority (MahaRERA).
            </div>
          </div>

          <div className="prose prose-navy max-w-none space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif font-bold text-xl text-navy pt-2">
              1. Not a Property Developer
            </h2>
            <p>
              Pune Property Investor acts strictly as an advisory consultancy and authorized channel
              partner for developers. We do not construct, own, or develop the listed real estate
              properties. All warranties, construction completion schedules, and delivery
              commitments are solely between the buyer and the respective developer.
            </p>

            <h2 className="font-serif font-bold text-xl text-navy pt-2">
              2. Accuracy of Project Visuals & Pricing
            </h2>
            <p>
              Artistic renders, floor plans, configurations, and walkthrough videos featured on this
              website are provided for informational and visualization purposes. While we regularly
              synchronize pricing data with developer cost sheets, prices are subject to change
              without prior notice based on developer inventory tiers, floor-rise policies, and
              market dynamics.
            </p>

            <h2 className="font-serif font-bold text-xl text-navy pt-2">
              3. Investment Risk & Capital Return Notice
            </h2>
            <p>
              Any historical capital appreciation statistics, rental yield estimates, or infrastructure
              catalyst timelines mentioned on this website or in consultation sessions represent
              analytical estimations based on historical market trends. Real estate investments are
              subject to market risks, and Pune Property Investor does not guarantee fixed capital
              returns or guaranteed future appreciation.
            </p>

            <h2 className="font-serif font-bold text-xl text-navy pt-2">
              4. Verification on Official MahaRERA Portal
            </h2>
            <p>
              We urge every prospective purchaser to cross-check project details, sanctioned building
              plans, and developer disclosures by visiting the official Maharashtra Real Estate
              Regulatory Authority portal at{" "}
              <a
                href="https://maharera.mahaonline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-semibold hover:underline"
              >
                https://maharera.mahaonline.gov.in
              </a>{" "}
              prior to executing binding purchase contracts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
