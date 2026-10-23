import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number in Lakhs into Indian currency representation
 * e.g. 85 -> "₹85 Lakh"
 * e.g. 145 -> "₹1.45 Cr"
 * e.g. 280 -> "₹2.80 Cr"
 */
export function formatLakhsToIndianCurrency(lakhs: number): string {
  if (lakhs >= 100) {
    const cr = (lakhs / 100).toFixed(2).replace(/\.00$/, "").replace(/(\.[1-9])0$/, "$1");
    return `₹${cr} Cr`;
  }
  return `₹${lakhs} Lakh`;
}

/**
 * Format a price range
 */
export function formatPriceRange(fromLakhs: number, toLakhs?: number): string {
  if (!toLakhs || fromLakhs === toLakhs) {
    return `${formatLakhsToIndianCurrency(fromLakhs)} Onwards`;
  }
  return `${formatLakhsToIndianCurrency(fromLakhs)} – ${formatLakhsToIndianCurrency(toLakhs)}`;
}

/**
 * Format date string (e.g. 2026-08-15 -> 15 Aug 2026)
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  } catch {
    return dateString;
  }
}

/**
 * Safe slug generator
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
