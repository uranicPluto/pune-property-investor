import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions | Pune Property Investor",
  description: "Terms and conditions governing the advisory services of Pune Property Investor.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms-and-conditions" }]} />

        <div className="bg-white p-8 sm:p-12 rounded-card border border-border shadow-soft space-y-6">
          <div className="space-y-2">
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-navy">
              Terms & Conditions
            </h1>
            <p className="text-xs text-text-muted">Effective: October 2026</p>
          </div>

          <div className="prose prose-navy max-w-none space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              Welcome to <strong>Pune Property Investor</strong>. By accessing or utilizing this
              website and our advisory services, you acknowledge and agree to comply with the terms
              outlined herein.
            </p>

            <h2 className="font-serif font-bold text-xl text-navy pt-4">
              1. Advisory Scope
            </h2>
            <p>
              Pune Property Investor operates as an independent real estate advisory and authorized
              marketing channel partner for verified developers across Maharashtra. We are not
              property developers, civil contractors, or banking financial institutions.
            </p>

            <h2 className="font-serif font-bold text-xl text-navy pt-4">
              2. Independent Verification by Buyers
            </h2>
            <p>
              While all project specifications, floor plans, starting prices, and possession dates
              are obtained directly from developers and checked against MahaRERA public records,
              buyers are advised to independently verify title clearances, sanctioned plans, and
              agreement clauses prior to remitting booking tokens or signing sale deeds.
            </p>

            <h2 className="font-serif font-bold text-xl text-navy pt-4">
              3. Intellectual Property
            </h2>
            <p>
              The content, editorial analysis, design tokens, trademarks, and code comprising this
              website are the intellectual property of Pune Property Investor and House of Workflow.
              Unauthorized scraping, republication, or automated harvesting of listings is strictly
              prohibited.
            </p>

            <h2 className="font-serif font-bold text-xl text-navy pt-4">
              4. Governing Law and Jurisdiction
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising out of the use of
              this website or advisory services shall be subject to the exclusive jurisdiction of the
              competent courts in Pune, Maharashtra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
