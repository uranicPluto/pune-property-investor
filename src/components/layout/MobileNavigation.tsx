"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronRight, Phone, MessageSquare } from "lucide-react";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/Button";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const prevPathnameRef = useRef(pathname);

  // Close ONLY when pathname actually changes to another route
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Handle escape key and lock body scroll safely
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-[60] lg:hidden flex flex-col bg-navy-dark text-white animate-in fade-in duration-200"
    >
      {/* Header bar inside drawer */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center font-serif text-navy-dark font-bold text-lg">
            P
          </div>
          <div>
            <div className="font-serif font-bold text-base leading-tight tracking-tight text-white">
              Pune Property Investor
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium">
              Real Estate Advisory
            </div>
          </div>
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
        {MAIN_NAV_ITEMS.map((item, index) => {
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expandedIndex === index;

          if (!hasChildren) {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-gold font-semibold"
                    : "text-white/90 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          }

          return (
            <div key={item.label} className="border-b border-white/10 pb-2">
              <button
                type="button"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-white/90 hover:text-white text-left cursor-pointer"
              >
                <span>{item.label}</span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform duration-200 text-gold ${
                    isExpanded ? "rotate-90" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="pl-4 pr-2 py-2 space-y-2 bg-white/5 rounded-lg my-1">
                  {/* Direct link to main parent landing page */}
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-3 py-2 rounded text-sm text-gold font-semibold hover:bg-white/5 transition-colors border-b border-white/10 pb-2 mb-1"
                  >
                    View All {item.label} →
                  </Link>

                  {item.children?.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={onClose}
                      className="block px-3 py-2 rounded text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      <div className="font-medium text-white">{sub.label}</div>
                      {sub.description && (
                        <div className="text-xs text-white/60 line-clamp-1">
                          {sub.description}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Quick Location Pills */}
        <div className="pt-4">
          <div className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">
            Popular Locations
          </div>
          <div className="flex flex-wrap gap-2">
            {["Kharadi", "Hinjewadi", "Baner", "Wakad", "Mundhwa", "NIBM"].map((loc) => (
              <Link
                key={loc}
                href={`/locations/${loc.toLowerCase()}`}
                onClick={onClose}
                className="px-3 py-1.5 rounded-full text-xs bg-white/10 hover:bg-gold/20 hover:text-gold text-white/90 border border-white/10 transition-colors"
              >
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Drawer Action Bar */}
      <div className="p-6 border-t border-white/10 bg-navy space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={COMPANY_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-brand bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-sm font-semibold hover:bg-emerald-600/30 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-brand bg-white/10 text-white border border-white/10 text-sm font-semibold hover:bg-white/20 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Desk</span>
          </a>
        </div>

        <Button
          href="/contact-us?type=site_visit"
          variant="primary"
          className="w-full justify-center"
          onClick={onClose}
        >
          Book Consultation & Site Visit
        </Button>
      </div>
    </div>
  );
}
