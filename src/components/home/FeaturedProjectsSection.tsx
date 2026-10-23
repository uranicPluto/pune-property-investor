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
    <section id="projects" className="scroll-mt-20 pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 bg-white">
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
        <div
          role="tablist"
          aria-label="Project category filters"
          className="flex flex-wrap items-center gap-2 mb-8 border-b border-border/80 pb-4"
        >
          {[
            { id: "all", label: "All Developments" },
            { id: "luxury", label: "Ultra-Luxury & Riverfront" },
            { id: "under-construction", label: "High-Growth (Under Construction)" },
            { id: "ready", label: "Ready to Move In (Zero GST)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
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
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.slice(0, 6).map((project) => (
              <div key={project.id} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-ivory/60 rounded-card border border-border/80 p-8 space-y-3">
            <p className="text-navy font-serif font-bold text-lg">No developments currently match this filter.</p>
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className="text-xs font-semibold text-gold-dark hover:underline"
            >
              Reset to all developments
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
