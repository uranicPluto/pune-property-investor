import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { formatDate } from "@/lib/utils";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Pune Real Estate Insights & Market Analysis | Pune Property Investor Blog",
  description:
    "Authoritative market trends, locality comparisons (Dhanori vs Charholi, Kharadi investment drivers), and buyer guides for residential real estate in Pune.",
  path: "/blog",
});

export default function BlogListingPage() {
  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const remainingArticles = ARTICLES.filter((a) => a.id !== featuredArticle.id);

  return (
    <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: "Market Insights", href: "/blog" }]} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider text-gold font-bold">
            Research & Intelligence
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy tracking-tight">
            Pune Real Estate Market Insights & Guides
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Data-backed editorial reports, infrastructure analysis, and comparative neighborhood
            evaluations authored by our on-ground advisory desk.
          </p>
        </div>

        {/* Featured Article Card */}
        {featuredArticle && (
          <div className="bg-white rounded-card border border-border shadow-soft overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[320px]">
                <Image
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold-dark border border-gold/30 text-xs font-semibold">
                  <span>{featuredArticle.category}</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{formatDate(featuredArticle.publishedDate)}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>{featuredArticle.readingTimeMinutes} min read</span>
                  </span>
                </div>

                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy hover:text-gold-dark transition-colors leading-snug">
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors"
                  >
                    <span>Read Full Editorial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Article Grid */}
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-2xl text-navy">
            Recent Articles & Locality Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-card border border-border overflow-hidden shadow-soft hover:shadow-card hover:border-gold/30 transition-all flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-light/10">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="bg-navy-dark/90 backdrop-blur-sm text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        <span>{formatDate(article.publishedDate)}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>{article.readingTimeMinutes} min read</span>
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-navy group-hover:text-gold-dark transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-text-secondary text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy group-hover:text-gold transition-colors"
                    >
                      <span>Read Full Analysis</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
