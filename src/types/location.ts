export interface LocalityAdvantage {
  title: string;
  description: string;
}

export interface LandmarkDistance {
  landmark: string;
  type: "it_hub" | "airport" | "railway" | "school" | "hospital" | "shopping";
  timeMinutes: string;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  region: "East Pune" | "West Pune" | "South Pune" | "North-East Pune" | "Central Pune";
  headline: string;
  heroImage: string;
  overview: string[];
  averageSqftPrice: string; // e.g. "₹8,500 - ₹12,500 / sq.ft."
  rentalYieldEstimate: string; // e.g. "3.8% - 4.5%"
  annualAppreciationTrend: string; // e.g. "8% - 11% CAGR"
  keyHubs: string[];
  connectivityHighlights: LandmarkDistance[];
  advantages: LocalityAdvantage[];
  targetBuyerPersona: string;
  faqList: { question: string; answer: string }[];
  featured: boolean;
}
