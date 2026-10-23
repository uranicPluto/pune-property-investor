import React from "react";
import { ShieldCheck, CheckCircle2, Clock, Calendar, Check, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectSpecsProps {
  project: Project;
}

export function ProjectSpecs({ project }: ProjectSpecsProps) {
  return (
    <div className="space-y-12">
      {/* Overview & Description */}
      <div className="space-y-4">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
          Project Overview
        </h2>
        <div className="space-y-3 text-text-secondary text-sm sm:text-base leading-relaxed">
          {project.longDescription.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      {/* RERA and Possession Summary Card */}
      <div className="p-6 rounded-card bg-ivory/80 border border-border/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-wider text-text-muted font-medium">MahaRERA ID</div>
          <div className="font-bold text-navy flex items-center gap-1.5 font-mono text-base">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
            <span>{project.reraId}</span>
          </div>
          <a
            href="https://maharera.mahaonline.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-gold-dark hover:underline inline-flex items-center gap-1"
          >
            <span>Verify on MahaRERA Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="space-y-1">
          <div className="text-xs uppercase tracking-wider text-text-muted font-medium">Possession Timeline</div>
          <div className="font-bold text-navy flex items-center gap-1.5 text-base">
            <Calendar className="w-4 h-4 text-gold shrink-0" />
            <span>{project.possessionDate}</span>
          </div>
          <div className="text-[11px] text-text-secondary">As declared under MahaRERA</div>
        </div>

        <div className="space-y-1">
          <div className="text-xs uppercase tracking-wider text-text-muted font-medium">Current Status</div>
          <div className="font-bold text-navy flex items-center gap-1.5 text-base">
            <Clock className="w-4 h-4 text-gold shrink-0" />
            <span>{project.status}</span>
          </div>
          <div className="text-[11px] text-text-secondary">Updated: {project.price.lastUpdated}</div>
        </div>
      </div>

      {/* Floor Plans & Configuration Pricing Table */}
      {project.floorPlans && project.floorPlans.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
              Configurations & Carpet Areas
            </h2>
            <span className="text-xs text-text-secondary">RERA Carpet Area Standards</span>
          </div>

          <div className="overflow-x-auto rounded-card border border-border/80">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-semibold">Layout</th>
                  <th className="py-3.5 px-4 font-semibold">Usable Carpet Area</th>
                  <th className="py-3.5 px-4 font-semibold">Price Guidance</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 bg-white">
                {project.floorPlans.map((fp, idx) => (
                  <tr key={idx} className="hover:bg-ivory/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-navy">{fp.configuration}</td>
                    <td className="py-3.5 px-4 text-text-primary font-medium">{fp.carpetArea}</td>
                    <td className="py-3.5 px-4 text-gold-dark font-bold font-sans">{fp.pricingEstimate}</td>
                    <td className="py-3.5 px-4 text-right">
                      <a
                        href="#enquiry-form"
                        className="text-xs font-semibold text-navy hover:text-gold transition-colors underline underline-offset-4"
                      >
                        Request Floor Plan
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Highlights List */}
      <div className="space-y-4">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
          Key Highlights & Architectural Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {project.highlights.map((h, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3.5 rounded-brand bg-ivory/40 border border-border/60 text-sm text-text-primary"
            >
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span className="leading-snug">{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Amenities */}
      <div className="space-y-4">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
          Verified Lifestyle Amenities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {project.amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-brand bg-white border border-border/80 flex items-center gap-2.5 shadow-sm"
            >
              <div className="w-6 h-6 rounded-full bg-ivory flex items-center justify-center text-gold shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-navy">{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications Table */}
      <div className="space-y-4">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
          Material Specifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          {project.specs.map((spec, idx) => (
            <div key={idx} className="p-3.5 rounded-brand bg-ivory/30 border border-border/60 space-y-1">
              <div className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                {spec.label}
              </div>
              <div className="text-text-primary font-medium leading-snug">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Connectivity Table */}
      <div className="space-y-4">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
          Location & Commute Proximity
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {project.connectivityHighlights.map((conn, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3.5 rounded-brand bg-white border border-border/80 shadow-sm"
            >
              <span className="text-navy font-medium">{conn.destination}</span>
              <span className="text-gold-dark font-bold font-sans text-xs bg-ivory px-2.5 py-1 rounded-full">
                {conn.distanceOrTime}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
