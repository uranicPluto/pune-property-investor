"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight, Phone } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { COMPANY_INFO } from "@/data/company";

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Buying Process", "Legal & RERA", "Advisory & Fees", "Investment & Locations"];

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory === "All") return true;
    return faq.category === activeCategory;
  });

  const accordionItems = filteredFaqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: <p>{faq.answer}</p>,
    defaultOpen: faq.id === "faq-1",
  }));

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-border/80" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Buyer Guidance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3 leading-relaxed">
            Clear, straightforward answers about Pune property acquisition, MahaRERA protections,
            additional taxes, and our zero-brokerage advisory model.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-navy text-white shadow-soft"
                  : "bg-ivory text-text-secondary hover:text-navy hover:bg-border/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Component */}
        <Accordion items={accordionItems} />

        {/* Contact Us Card */}
        <div className="mt-12 p-6 rounded-card bg-ivory border border-border/80 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-bold text-lg text-navy">
              Have a specific question about a Pune project?
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Speak directly with our senior advisors at our Kharadi office.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-brand bg-white border border-border text-navy text-xs font-semibold hover:border-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call Us</span>
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-brand bg-navy text-white text-xs font-semibold hover:bg-navy-light transition-colors"
            >
              <span>Ask Advisor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
