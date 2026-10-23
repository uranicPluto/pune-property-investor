import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { Project } from "@/types/project";
import { Location } from "@/types/location";
import { Article } from "@/types/content";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://punepropertyinvestor.com";

interface MetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
}

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/images/og-default.jpg",
  type = "website",
  publishedTime,
  authors,
}: MetadataProps): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${BASE_URL}${cleanPath}`;
  const fullTitle = `${title} | Pune Property Investor`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: image.startsWith("http") ? image : `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.startsWith("http") ? image : `${BASE_URL}${image}`],
      creator: "@pune_investors",
      site: "@pune_investors",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Organization and RealEstateAgent JSON-LD Schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "Organization"],
    "@id": `${BASE_URL}/#organization`,
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    description: COMPANY_INFO.shortAbout,
    telephone: COMPANY_INFO.phones.primary,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.officeAddress.street,
      addressLocality: COMPANY_INFO.officeAddress.locality,
      addressRegion: COMPANY_INFO.officeAddress.state,
      postalCode: COMPANY_INFO.officeAddress.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5529",
      longitude: "73.9352",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:30",
        closes: "19:30",
      },
    ],
    sameAs: [
      COMPANY_INFO.socials.facebook,
      COMPANY_INFO.socials.instagram,
      COMPANY_INFO.socials.linkedin,
      COMPANY_INFO.socials.twitter,
      COMPANY_INFO.socials.youtube,
    ],
  };
}

/**
 * Project / RealEstateListing JSON-LD Schema
 */
export function generateProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    "@id": `${BASE_URL}/projects/${project.slug}#listing`,
    name: project.name,
    description: project.shortDescription,
    image: project.heroImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: project.address,
      addressLocality: project.locality,
      addressRegion: "Maharashtra",
      postalCode: "411014",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5529",
      longitude: "73.9352",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: project.price.from * 100000,
      highPrice: project.price.to ? project.price.to * 100000 : undefined,
      offerCount: "1",
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * Article JSON-LD Schema
 */
export function generateArticleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE_URL}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt,
    image: article.heroImage,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate || article.publishedDate,
    author: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${article.slug}`,
    },
  };
}

/**
 * BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}
