"use client";

import React from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface MobileStickyBarProps {
  projectName: string;
}

export function MobileStickyBar({ projectName }: MobileStickyBarProps) {
  const whatsappUrl = `https://wa.me/917398174444?text=${encodeURIComponent(
    `Hello, I would like to enquire about ${projectName} in Pune.`
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-dark/95 backdrop-blur-md border-t border-white/15 p-3 px-4 shadow-floating safe-area-bottom">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp enquiry"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-brand bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
          aria-label="Call Advisor"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-brand bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors border border-white/10"
        >
          <Phone className="w-3.5 h-3.5 text-gold" />
          <span>Call Desk</span>
        </a>

        <a
          href="#enquiry-form"
          className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-brand bg-gold text-navy-dark text-xs font-bold hover:bg-gold-light transition-colors shadow-gold"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Site Visit</span>
        </a>
      </div>
    </div>
  );
}
