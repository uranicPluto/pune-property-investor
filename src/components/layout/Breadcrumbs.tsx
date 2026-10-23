import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/seo";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    { name: "Home", url: "/" },
    ...items.map((i) => ({ name: i.label, url: i.href || "/" })),
  ];

  return (
    <>
      {/* JSON-LD Schema for breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(schemaItems)) }}
      />

      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-text-secondary">
          <li>
            <Link
              href="/"
              className="hover:text-navy transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5 text-gold" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.label} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
                {isLast || !item.href ? (
                  <span
                    className="font-medium text-navy truncate max-w-[200px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-navy transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
