import React from "react";
import Link from "next/link";
import { Compass, Home, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ivory/40 py-16 px-4">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-card border border-border shadow-soft space-y-6">
        <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-widest text-gold font-bold">
            404 Error · Page Not Found
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-navy">
            Looking for a specific property?
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            The page or project you requested may have moved or been updated. Let us help you find
            what you need across our verified Pune portfolio.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Button href="/projects" variant="primary" size="md" className="w-full justify-center">
            Explore All Projects
          </Button>

          <Button href="/" variant="outline" size="md" className="w-full justify-center">
            Return to Homepage
          </Button>
        </div>

        <div className="pt-4 border-t border-border/60 text-xs text-text-secondary">
          Need immediate assistance? Call our Kharadi desk at{" "}
          <a href="tel:+917398174444" className="text-gold font-semibold hover:underline">
            +91 73981 74444
          </a>
        </div>
      </div>
    </div>
  );
}
