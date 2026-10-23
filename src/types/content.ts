export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  tagline: string;
  whoItIsFor: string[];
  problemsSolved: string[];
  whatWeDeliver: string[];
  workflowSteps: {
    stepNumber: number;
    title: string;
    description: string;
  }[];
  faqList: { question: string; answer: string }[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: "Market Trends" | "Locality Comparison" | "Investment Strategy" | "Homebuyer Education" | "Legal & RERA";
  excerpt: string;
  body: string[]; // markdown or paragraphs
  heroImage: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedDate: string; // ISO date
  updatedDate?: string;
  readingTimeMinutes: number;
  tags: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  roleOrAffiliation: string;
  locationOrProject: string;
  quote: string;
  verified: boolean;
  avatarText: string;
  rating: number;
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  projectOrServiceOfInterest?: string;
  preferredConfiguration?: string;
  preferredLocality?: string;
  budgetRange?: string;
  message?: string;
  enquiryType: "site_visit" | "brochure_download" | "general_enquiry" | "advisory_call" | "career";
  consent: boolean;
}
