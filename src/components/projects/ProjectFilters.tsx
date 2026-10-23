"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Filter, X, ArrowUpDown, RotateCcw, Building2, MapPin, IndianRupee, Layers } from "lucide-react";
import { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";

interface ProjectFiltersProps {
  initialProjects: Project[];
}

export function ProjectFilters({ initialProjects }: ProjectFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read initial filter values from URL search params
  const [locality, setLocality] = useState<string>(searchParams.get("locality") || "");
  const [propertyType, setPropertyType] = useState<string>(searchParams.get("type") || "");
  const [status, setStatus] = useState<string>(searchParams.get("status") || "");
  const [config, setConfig] = useState<string>(searchParams.get("config") || "");
  const [budget, setBudget] = useState<string>(searchParams.get("budget") || "");
  const [sort, setSort] = useState<string>(searchParams.get("sort") || "featured");

  // Keep local state in sync when URL params change (e.g. browser back/forward)
  useEffect(() => {
    setLocality(searchParams.get("locality") || "");
    setPropertyType(searchParams.get("type") || "");
    setStatus(searchParams.get("status") || "");
    setConfig(searchParams.get("config") || "");
    setBudget(searchParams.get("budget") || "");
    setSort(searchParams.get("sort") || "featured");
  }, [searchParams]);

  // Sync state to URL query string
  const updateUrl = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.replace(`/projects?${params.toString()}`, { scroll: false });
  };

  const handleLocalityChange = (val: string) => {
    setLocality(val);
    updateUrl({ locality: val });
  };

  const handleTypeChange = (val: string) => {
    setPropertyType(val);
    updateUrl({ type: val });
  };

  const handleStatusChange = (val: string) => {
    setStatus(val);
    updateUrl({ status: val });
  };

  const handleConfigChange = (val: string) => {
    setConfig(val);
    updateUrl({ config: val });
  };

  const handleBudgetChange = (val: string) => {
    setBudget(val);
    updateUrl({ budget: val });
  };

  const handleSortChange = (val: string) => {
    setSort(val);
    updateUrl({ sort: val });
  };

  const clearAllFilters = () => {
    setLocality("");
    setPropertyType("");
    setStatus("");
    setConfig("");
    setBudget("");
    setSort("featured");
    router.replace("/projects", { scroll: false });
  };

  // Filter and sort computation
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Locality
      if (locality && project.locality.toLowerCase() !== locality.toLowerCase()) {
        return false;
      }
      // Type
      if (propertyType && project.propertyType.toLowerCase() !== propertyType.toLowerCase()) {
        return false;
      }
      // Status
      if (status && project.status.toLowerCase() !== status.toLowerCase()) {
        return false;
      }
      // Configuration
      if (config && !project.configurations.some((c) => c.toLowerCase() === config.toLowerCase())) {
        return false;
      }
      // Budget Range
      if (budget) {
        if (budget === "under-75" && project.price.from >= 75) return false;
        if (budget === "75-125" && (project.price.from > 125 || (project.price.to && project.price.to < 75))) return false;
        if (budget === "125-200" && (project.price.from > 200 || (project.price.to && project.price.to < 125))) return false;
        if (budget === "above-200" && project.price.from < 200) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sort === "price-asc") return a.price.from - b.price.from;
      if (sort === "price-desc") return (b.price.to || b.price.from) - (a.price.to || a.price.from);
      if (sort === "area-desc") return b.carpetAreaRange.max - a.carpetAreaRange.max;
      // Default / featured
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [initialProjects, locality, propertyType, status, config, budget, sort]);

  const activeFiltersCount = [locality, propertyType, status, config, budget].filter(Boolean).length;

  return (
    <div className="space-y-8">
      {/* Top Filter Controls Bar */}
      <div className="bg-white p-5 sm:p-6 rounded-card border border-border shadow-soft space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gold" />
            <h2 className="font-sans font-bold text-navy text-sm uppercase tracking-wider">
              Filter Projects
            </h2>
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-gold text-navy-dark text-xs font-bold flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-secondary font-medium flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort By:</span>
            </span>
            <select
              value={sort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="bg-ivory border border-border text-xs font-medium text-navy rounded-brand px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="featured">Featured & Curated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="area-desc">Carpet Area: Largest First</option>
            </select>
          </div>
        </div>

        {/* Filter Selectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
          {/* Locality */}
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary block mb-1">
              Locality
            </label>
            <select
              value={locality}
              onChange={(e) => handleLocalityChange(e.target.value)}
              className="w-full bg-ivory/60 border border-border rounded-brand p-2 text-navy focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">All Localities</option>
              <option value="Kharadi">Kharadi</option>
              <option value="Hinjewadi">Hinjewadi</option>
              <option value="Baner">Baner</option>
              <option value="Wakad">Wakad</option>
              <option value="Mundhwa">Mundhwa</option>
              <option value="NIBM">NIBM</option>
              <option value="Hadapsar">Hadapsar</option>
              <option value="Dhanori">Dhanori</option>
              <option value="Charholi">Charholi</option>
              <option value="Wagholi">Wagholi</option>
            </select>
          </div>

          {/* Property Category */}
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary block mb-1">
              Category
            </label>
            <select
              value={propertyType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="w-full bg-ivory/60 border border-border rounded-brand p-2 text-navy focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">All Categories</option>
              <option value="residential">Residential</option>
              <option value="luxury">Luxury Residences</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          {/* Construction Status */}
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary block mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="w-full bg-ivory/60 border border-border rounded-brand p-2 text-navy focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">All Statuses</option>
              <option value="Under Construction">Under Construction</option>
              <option value="Ready to Move">Ready to Move</option>
              <option value="New Launch">New Launch</option>
            </select>
          </div>

          {/* Configuration */}
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary block mb-1">
              Layout
            </label>
            <select
              value={config}
              onChange={(e) => handleConfigChange(e.target.value)}
              className="w-full bg-ivory/60 border border-border rounded-brand p-2 text-navy focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Any Layout</option>
              <option value="1 BHK">1 BHK</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
              <option value="5 BHK">5 BHK</option>
            </select>
          </div>

          {/* Budget Range */}
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary block mb-1">
              Budget
            </label>
            <select
              value={budget}
              onChange={(e) => handleBudgetChange(e.target.value)}
              className="w-full bg-ivory/60 border border-border rounded-brand p-2 text-navy focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Any Budget</option>
              <option value="under-75">Under ₹75 Lakh</option>
              <option value="75-125">₹75 Lakh – ₹1.25 Cr</option>
              <option value="125-200">₹1.25 Cr – ₹2.00 Cr</option>
              <option value="above-200">Above ₹2.00 Cr</option>
            </select>
          </div>
        </div>

        {/* Selected Filter Tags & Reset Action */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/60 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-text-secondary font-medium">Applied:</span>

              {locality && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-ivory border border-border text-navy font-medium">
                  Locality: {locality}
                  <button onClick={() => handleLocalityChange("")} aria-label="Remove locality filter">
                    <X className="w-3 h-3 hover:text-gold" />
                  </button>
                </span>
              )}

              {propertyType && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-ivory border border-border text-navy font-medium">
                  Type: {propertyType}
                  <button onClick={() => handleTypeChange("")} aria-label="Remove type filter">
                    <X className="w-3 h-3 hover:text-gold" />
                  </button>
                </span>
              )}

              {status && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-ivory border border-border text-navy font-medium">
                  Status: {status}
                  <button onClick={() => handleStatusChange("")} aria-label="Remove status filter">
                    <X className="w-3 h-3 hover:text-gold" />
                  </button>
                </span>
              )}

              {config && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-ivory border border-border text-navy font-medium">
                  Layout: {config}
                  <button onClick={() => handleConfigChange("")} aria-label="Remove configuration filter">
                    <X className="w-3 h-3 hover:text-gold" />
                  </button>
                </span>
              )}

              {budget && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-ivory border border-border text-navy font-medium">
                  Budget: {budget}
                  <button onClick={() => handleBudgetChange("")} aria-label="Remove budget filter">
                    <X className="w-3 h-3 hover:text-gold" />
                  </button>
                </span>
              )}
            </div>

            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1 text-gold-dark hover:text-navy font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Results Count Header */}
      <div className="flex items-center justify-between text-sm text-text-secondary px-1">
        <div>
          Showing <strong className="text-navy">{filteredProjects.length}</strong> verified development
          {filteredProjects.length === 1 ? "" : "s"} in Pune
        </div>
      </div>

      {/* Grid of Results */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-ivory/60 rounded-card p-12 text-center border border-border/80 max-w-xl mx-auto space-y-4">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-gold mx-auto shadow-soft">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-2xl text-navy">
            No developments matched your current criteria
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            Try adjusting your budget or locality filters, or reach out to our Kharadi advisory desk
            to discover unlisted pre-launch developments matching your specific parameters.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Button onClick={clearAllFilters} variant="primary" size="md">
              Reset Filters
            </Button>
            <Button href="/contact-us?type=general_enquiry" variant="outline" size="md">
              Ask an Advisor
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
