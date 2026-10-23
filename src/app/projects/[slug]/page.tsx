import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ShieldCheck, Phone, MessageSquare, ArrowRight, Bed, Maximize2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectSpecs } from "@/components/projects/ProjectSpecs";
import { ProjectEnquiryForm } from "@/components/projects/ProjectEnquiryForm";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { MobileStickyBar } from "@/components/projects/MobileStickyBar";
import { constructMetadata, generateProjectSchema } from "@/lib/seo";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.name} in ${project.locality}, Pune | Prices, Floor Plans & Reviews`,
    description: `${project.shortDescription} Configurations: ${project.configurations.join(", ")}. Starting ${project.price.displayText}. MahaRERA: ${project.reraId}.`,
    path: `/projects/${project.slug}`,
    image: project.heroImage,
  });
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter(
    (p) => p.id !== project.id && (p.locality === project.locality || p.propertyType === project.propertyType)
  ).slice(0, 3);

  const statusBadgeVariant =
    project.status === "Ready to Move"
      ? "success"
      : project.status === "New Launch"
      ? "warning"
      : "navy";

  const projectSchema = generateProjectSchema(project);

  return (
    <>
      {/* Real Estate Listing JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Trail */}
          <Breadcrumbs
            items={[
              { label: "Projects", href: "/projects" },
              { label: project.locality, href: `/locations/${project.locality.toLowerCase()}` },
              { label: project.name },
            ]}
          />

          {/* Project Hero Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-border/80">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant={statusBadgeVariant} dot>
                  {project.status}
                </Badge>
                <span className="text-xs uppercase tracking-wider text-text-muted font-bold">
                  By {project.developer}
                </span>
                {project.reraApproved && (
                  <span className="inline-flex items-center gap-1 text-xs text-gold-dark font-medium bg-gold/15 px-2.5 py-0.5 rounded-full border border-gold/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>MahaRERA: {project.reraId}</span>
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
                {project.name}
              </h1>

              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>{project.address}</span>
              </div>
            </div>

            {/* Price & Fast CTAs */}
            <div className="bg-white p-5 rounded-card border border-border shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-5 shrink-0">
              <div>
                <div className="text-xs uppercase tracking-wider text-text-muted font-medium">Starting Price</div>
                <div className="font-sans font-bold text-2xl text-navy">
                  {project.price.displayText}
                </div>
                <div className="text-[11px] text-text-muted">Updated: {project.price.lastUpdated}</div>
              </div>

              <a
                href="#enquiry-form"
                className="px-5 py-2.5 rounded-brand bg-gold text-navy-dark text-sm font-bold shadow-gold hover:bg-gold-light transition-colors"
              >
                Schedule Site Visit
              </a>
            </div>
          </div>

          {/* Main 2-Column Grid: Left Content (70%), Right Sticky Form (30%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Interactive Photo Gallery */}
              <ProjectGallery
                images={project.galleryImages}
                projectName={project.name}
              />

              {/* Specifications, Configurations, Amenities & Location */}
              <ProjectSpecs project={project} />
            </div>

            {/* Right Column: Sticky Enquiry Form */}
            <div className="lg:col-span-4" id="enquiry-form">
              <ProjectEnquiryForm
                projectName={project.name}
                developer={project.developer}
                locality={project.locality}
                configurations={project.configurations}
              />
            </div>
          </div>

          {/* Related Developments Section */}
          {relatedProjects.length > 0 && (
            <div className="pt-16 border-t border-border/80 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
                    Similar Developments in {project.locality}
                  </h2>
                  <p className="text-xs sm:text-sm text-text-secondary mt-1">
                    Compare configurations, price per sq.ft., and amenities with neighboring projects.
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="text-xs sm:text-sm font-semibold text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  <span>All Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <MobileStickyBar projectName={project.name} />
    </>
  );
}
