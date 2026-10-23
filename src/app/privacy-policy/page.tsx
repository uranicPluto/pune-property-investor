import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | Pune Property Investor",
  description: "Privacy policy and client data handling commitments for Pune Property Investor.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

        <div className="bg-white p-8 sm:p-12 rounded-card border border-border shadow-soft space-y-6">
          <div className="space-y-2">
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-navy">
              Privacy Policy
            </h1>
            <p className="text-xs text-text-muted">Last Updated: October 2026</p>
          </div>

          <div className="prose prose-navy max-w-none space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              At <strong>Pune Property Investor</strong>, we are committed to respecting and
              protecting the personal privacy of our visitors, homebuyers, and clients. This
              policy explains how we collect, store, and utilize information collected across{" "}
              <code>punepropertyinvestor.com</code>.
            </p>

            <h2 className="font-serif font-bold text-xl text-navy pt-4">
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry form, schedule a site visit, or request a brochure, we may
              collect your full name, telephone number, email address, preferred localities, budget
              range, and specific property configuration preferences.
            </p>

            <h2 className="font-serif font-bold text-xl text-navy pt-4">
              2. How We Use Your Data
            </h2>
            <p>
              Your contact details are exclusively utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Coordinate requested property walkthroughs and guided site visits.</li>
              <li>Provide verified cost sheets, floor plans, and developer payment plans.</li>
              <li>Answer your specific inquiries regarding real estate developments in Pune.</li>
              <li>Ensure compliance with Maharashtra Real Estate Regulatory Authority (MahaRERA) guidelines.</li>
            </ul>

            <h2 className="font-serif font-bold text-xl text-navy pt-4">
              3. Strict Anti-Spam & No-Sale Commitment
            </h2>
            <p>
              We enforce a strict zero-spam policy. We do not sell, rent, trade, or distribute your
              personal contact information to third-party telemarketing networks, bulk SMS brokers,
              or unaffiliated third parties.
            </p>

            <h2 className="font-serif font-bold text-xl text-navy pt-4">
              4. Contact and Grievance Officer
            </h2>
            <p>
              For questions regarding your data or to request deletion of your contact records,
              please reach out to our privacy officer at{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-gold font-medium">
                {COMPANY_INFO.email}
              </a>{" "}
              or at our Kharadi office: {COMPANY_INFO.officeAddress.full}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
