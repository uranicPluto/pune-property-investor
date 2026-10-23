"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ArrowUpRight } from "lucide-react";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor scroll for sticky header transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hover handlers with 180ms grace period so dropdown never prematurely closes
  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Close dropdown on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  const handleCloseMobile = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-navy-dark/95 backdrop-blur-md shadow-card border-b border-white/10 py-3"
            : "bg-navy text-white border-b border-white/10 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-brand bg-gold flex items-center justify-center font-serif text-navy-dark font-bold text-xl shadow-gold group-hover:scale-105 transition-transform">
              P
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight block leading-tight">
                Pune Property Investor
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium block">
                Premium Real Estate Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = activeDropdown === item.label;
              const isActive =
                pathname === item.href ||
                (item.children && item.children.some((c) => pathname === c.href));

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-brand text-sm font-medium transition-colors ${
                      isActive
                        ? "text-gold bg-white/5 font-semibold"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`px-3.5 py-2 rounded-brand text-sm font-medium transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      isActive || isOpen
                        ? "text-gold bg-white/5 font-semibold"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-gold" : "text-white/60"
                      }`}
                    />
                  </Link>

                  {/* Mega Menu / Dropdown Panel with PT-2 padding bridge */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-0 pt-2 w-80 xl:w-96 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="p-3 bg-navy-dark border border-white/15 rounded-card shadow-floating">
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block p-3 rounded-brand hover:bg-white/5 transition-colors group/item"
                            >
                              <div className="flex items-center justify-between text-sm font-semibold text-white group-hover/item:text-gold transition-colors">
                                <span>{child.label}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity text-gold" />
                              </div>
                              {child.description && (
                                <p className="text-xs text-white/60 mt-0.5 leading-snug">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href="/contact-us?type=advisory_call"
              variant="primary"
              size="md"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="w-10 h-10 rounded-brand bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={handleCloseMobile}
      />
    </>
  );
}
