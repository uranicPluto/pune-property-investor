"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { RevealUp, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";

export function FeaturedProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "luxury" | "under-construction" | "ready">("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === "luxury") return p.propertyType === "luxury";
    if (activeTab === "under-construction") return p.status === "Under Construction";
    if (activeTab === "ready") return p.status === "Ready to Move";
    return true;
  });

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
              Featured Residential Developments
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Handpicked residential towers and riverfront enclaves offering superior construction
              standards, transparent carpet areas, and proven appreciation trajectories.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors shrink-0 group self-start md:self-end"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-border/80 pb-4">
          {[
            { id: "all", label: "All Developments" },
            { id: "luxury", label: "Ultra-Luxury & Riverfront" },
            { id: "under-construction", label: "High-Growth (Under Construction)" },
            { id: "ready", label: "Ready to Move In (Zero GST)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-navy text-white shadow-soft"
                  : "bg-ivory text-text-secondary hover:text-navy hover:bg-border/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.slice(0, 6).map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-card bg-ivory border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-navy">
              Looking for a specific configuration or pre-launch opportunity?
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Our Kharadi advisory team tracks 45+ upcoming towers before public launches.
            </p>
          </div>
          <Link
            href="/contact-us?type=general_enquiry"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-brand bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-navy-light transition-colors shrink-0"
          >
            <span>Request Tailored Shortlist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
