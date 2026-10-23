import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { formatDate } from "@/lib/utils";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function InsightsSection() {
  const articles = ARTICLES.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-border/80">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold mb-2">
              <span>Research & Editorial</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
              Pune Real Estate Market Insights
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              In-depth research on micro-market price appreciation, infrastructure catalysts,
              and comparative buyer guides authored by our advisory desk.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors shrink-0 group self-start md:self-end"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <RevealUp key={article.id} delay={index * 0.1}>
              <article className="group bg-white rounded-card border border-border/80 overflow-hidden shadow-soft hover:shadow-card hover:border-gold/30 transition-all flex flex-col h-full">
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
                    <div className="flex items-center gap-4 text-xs text-text-muted mb-2.5">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        <span>{formatDate(article.publishedDate)}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>{article.readingTimeMinutes} min read</span>
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-navy group-hover:text-gold-dark transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-text-secondary text-xs sm:text-sm mt-2.5 line-clamp-3 leading-relaxed">
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
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
