import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-navy-dark text-white/90 text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
      <div className="max-w-container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-gold font-medium bg-gold/15 px-2 py-0.5 rounded-full text-[11px]">
            <Sparkles className="w-3 h-3" />
            Advisory Desk
          </span>
          <span className="text-white/80">
            Headquartered at Gera Imperium Alpha, Kharadi. Unbiased Pune property consulting.
          </span>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <Link
            href="/contact-us?type=site_visit"
            className="hover:text-gold transition-colors inline-flex items-center gap-1 font-medium"
          >
            <span>Book Guided Site Visit</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <span className="text-white/30">|</span>
          <a
            href="tel:+917398174444"
            className="hover:text-gold transition-colors font-medium"
          >
            +91 73981 74444
          </a>
        </div>
      </div>
    </div>
  );
}
