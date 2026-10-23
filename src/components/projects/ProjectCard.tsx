import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Maximize2, ShieldCheck, ArrowUpRight, Bed } from "lucide-react";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { formatPriceRange } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const statusBadgeVariant =
    project.status === "Ready to Move"
      ? "success"
      : project.status === "New Launch"
      ? "warning"
      : "navy";

  return (
    <div className="group relative bg-white border border-border/80 rounded-card overflow-hidden shadow-soft hover:shadow-card hover:border-gold/30 transition-all duration-300 flex flex-col h-full">
      {/* Image Thumbnail with Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-light/10">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
          <Badge variant={statusBadgeVariant} size="sm" dot>
            {project.status}
          </Badge>

          {project.reraApproved && (
            <span className="bg-navy-dark/85 backdrop-blur-sm text-gold text-[11px] font-medium px-2.5 py-1 rounded-full border border-gold/30 inline-flex items-center gap-1 shadow-sm">
              <ShieldCheck className="w-3 h-3 text-gold" />
              <span>RERA Approved</span>
            </span>
          )}
        </div>

        {/* Bottom Locality Badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-navy-dark/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-brand inline-flex items-center gap-1.5 border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>{project.locality}</span>
            {project.subLocality && (
              <span className="text-white/60 text-[11px]">· {project.subLocality}</span>
            )}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-muted font-medium mb-1">
            {project.developer}
          </div>

          <h3 className="font-serif font-bold text-xl text-navy group-hover:text-gold-dark transition-colors line-clamp-1">
            <Link href={`/projects/${project.slug}`}>
              {project.name}
            </Link>
          </h3>

          <p className="text-text-secondary text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Key Attributes Grid */}
        <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-border/60 text-xs">
          <div className="flex items-center gap-2 text-text-primary">
            <div className="w-7 h-7 rounded-md bg-ivory flex items-center justify-center text-gold-dark shrink-0">
              <Bed className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider">Layouts</div>
              <div className="font-semibold text-navy truncate">
                {project.configurations.join(", ")}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-text-primary">
            <div className="w-7 h-7 rounded-md bg-ivory flex items-center justify-center text-gold-dark shrink-0">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider">Carpet Area</div>
              <div className="font-semibold text-navy truncate">
                {project.carpetAreaRange.min} – {project.carpetAreaRange.max} sq.ft.
              </div>
            </div>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <div>
            <div className="text-[11px] text-text-muted uppercase tracking-wider">Starting Price</div>
            <div className="font-sans font-bold text-lg text-navy tracking-tight">
              {project.price.displayText}
            </div>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy bg-ivory hover:bg-gold hover:text-navy-dark px-3.5 py-2 rounded-brand transition-colors border border-border/80 group-hover:border-gold/40"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
