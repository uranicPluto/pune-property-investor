import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/image";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, ArrowUpRight, Share2 } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { formatDate } from "@/lib/utils";
import { ContactForm } from "@/components/forms/ContactForm";
import { constructMetadata, generateArticleSchema } from "@/lib/seo";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  return constructMetadata({
    title: `${article.title} | Pune Property Investor`,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    image: article.heroImage,
    type: "article",
    publishedTime: article.publishedDate,
    authors: [article.author.name],
  });
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);
  const articleSchema = generateArticleSchema(article);

  return (
    <>
      {/* BlogPosting JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-ivory/30 min-h-screen py-8 lg:py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <Breadcrumbs
            items={[
              { label: "Insights", href: "/blog" },
              { label: article.category, href: "/blog" },
              { label: article.title },
            ]}
          />

          {/* Article Header */}
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold-dark border border-gold/30 text-xs font-semibold">
              <span>{article.category}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-text-secondary">
              <span className="flex items-center gap-1.5 font-medium text-navy">
                <User className="w-4 h-4 text-gold" />
                <span>{article.author.name}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gold" />
                <span>{formatDate(article.publishedDate)}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold" />
                <span>{article.readingTimeMinutes} min read</span>
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto relative aspect-[16/9] rounded-card overflow-hidden shadow-card border border-border">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          {/* 2-Column Content: Left Reading Column, Right Sticky Lead Box */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
            {/* Article Body */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-card border border-border shadow-soft space-y-6">
              <div className="prose prose-navy max-w-none space-y-4 text-text-primary text-base sm:text-lg leading-relaxed">
                {article.body.map((para, idx) => {
                  if (para.startsWith("### ")) {
                    return (
                      <h2
                        key={idx}
                        className="font-serif font-bold text-2xl text-navy pt-4 pb-1 border-b border-border/60"
                      >
                        {para.replace("### ", "")}
                      </h2>
                    );
                  }
                  if (para.startsWith("1. ") || para.startsWith("- ")) {
                    return (
                      <p key={idx} className="pl-4 border-l-2 border-gold text-text-secondary text-sm sm:text-base">
                        {para}
                      </p>
                    );
                  }
                  return (
                    <p key={idx} className="text-text-secondary leading-relaxed text-sm sm:text-base">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-border/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-text-muted">Tags:</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-ivory border border-border text-xs text-navy font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Sticky Consultation Column */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-white p-6 rounded-card border border-border shadow-soft space-y-4">
                <h3 className="font-serif font-bold text-lg text-navy">
                  Need Help Evaluating These Areas?
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Our Kharadi advisory team can review your specific budget and prepare a side-by-side
                  comparison for you.
                </p>
                <ContactForm initialType="advisory_call" />
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="max-w-4xl mx-auto pt-12 border-t border-border/80 space-y-6">
              <h2 className="font-serif font-bold text-2xl text-navy">
                Related Pune Property Articles
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    className="bg-white p-6 rounded-card border border-border shadow-soft hover:border-gold/40 transition-colors space-y-3"
                  >
                    <div className="text-xs text-gold-dark font-semibold uppercase tracking-wider">
                      {rel.category}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-navy hover:text-gold transition-colors">
                      <a href={`/blog/${rel.slug}`}>{rel.title}</a>
                    </h3>
                    <p className="text-xs text-text-secondary line-clamp-2">
                      {rel.excerpt}
                    </p>
                    <a
                      href={`/blog/${rel.slug}`}
                      className="text-xs font-semibold text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
