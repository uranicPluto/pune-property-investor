export type PropertyType = "residential" | "commercial" | "luxury" | "plot";

export type ProjectStatus = "New Launch" | "Under Construction" | "Ready to Move" | "Pre-Launch";

export type Configuration = "1 BHK" | "2 BHK" | "3 BHK" | "4 BHK" | "5 BHK" | "Penthouse" | "Commercial Office" | "Retail";

export interface ProjectPrice {
  from: number; // in Lakhs (e.g. 85 = 85 Lakhs, 145 = 1.45 Cr)
  to?: number;
  displayText: string; // e.g. "₹85 Lakh - ₹1.45 Cr" or "₹1.25 Cr Onwards"
  lastUpdated: string;
}

export interface CarpetAreaRange {
  min: number;
  max: number;
  unit: "sq.ft." | "sq.m.";
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectAmenity {
  name: string;
  category: "fitness" | "leisure" | "lifestyle" | "security" | "convenience";
  iconName?: string;
}

export interface ProjectFloorPlan {
  configuration: string;
  carpetArea: string;
  pricingEstimate: string;
  image?: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  developer: string;
  locality: string; // e.g. "Kharadi"
  subLocality?: string; // e.g. "Grant Road / Vitthal Nagar"
  address: string;
  propertyType: PropertyType;
  configurations: Configuration[];
  price: ProjectPrice;
  status: ProjectStatus;
  carpetAreaRange: CarpetAreaRange;
  possessionDate: string; // e.g. "Dec 2027" or "Ready to Move"
  reraId: string;
  reraApproved: boolean;
  featured: boolean;
  trending?: boolean;
  tagline: string;
  shortDescription: string;
  longDescription: string[];
  heroImage: string;
  galleryImages: string[];
  amenities: ProjectAmenity[];
  specs: ProjectSpec[];
  floorPlans?: ProjectFloorPlan[];
  highlights: string[];
  connectivityHighlights: {
    destination: string;
    distanceOrTime: string;
  }[];
  published: boolean;
}
