import React, { Suspense } from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { PROJECTS } from "@/data/projects";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Property Projects in Pune | Residential & Luxury Developments",
  description:
    "Explore verified residential developments and luxury apartments in Pune. Filter by locality (Kharadi, Hinjewadi, Baner, Wakad), budget, configuration, and possession status.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />

        {/* Page Title & Intro */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-gold font-bold">
            Verified Developments
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy tracking-tight">
            Residential & Luxury Properties in Pune
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Browse our curated catalogue of MahaRERA approved residential towers, riverfront
            enclaves, and integrated townships. Filter by your preferred locality, budget, and
            timeline to view transparent carpet areas and starting pricing.
          </p>
        </div>

        {/* Interactive Filter and Grid Component wrapped in Suspense */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-text-muted text-sm">
              Loading projects catalogue...
            </div>
          }
        >
          <ProjectFilters initialProjects={PROJECTS} />
        </Suspense>
      </div>
    </div>
  );
}
