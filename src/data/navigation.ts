export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: "Projects",
    href: "/projects",
    children: [
      {
        label: "All Developments",
        href: "/projects",
        description: "Browse verified residential and luxury developments across Pune.",
      },
      {
        label: "Luxury Residences",
        href: "/projects?type=luxury",
        description: "Ultra-premium 3, 4 & 5 BHK sky suites and riverfront homes.",
      },
      {
        label: "Under Construction",
        href: "/projects?status=Under+Construction",
        description: "High-appreciation developments with flexible construction-linked payment plans.",
      },
      {
        label: "Ready to Move",
        href: "/projects?status=Ready+to+Move",
        description: "Occupancy Certificate (OC) received homes with zero GST and immediate possession.",
      },
    ],
  },
  {
    label: "Locations",
    href: "/projects",
    children: [
      {
        label: "Kharadi",
        href: "/locations/kharadi",
        description: "EON Free Zone, World Trade Center, and prime East Pune IT corridor.",
      },
      {
        label: "Hinjewadi",
        href: "/locations/hinjewadi",
        description: "Rajiv Gandhi Infotech Park & West Pune tech capital.",
      },
      {
        label: "Baner",
        href: "/locations/baner",
        description: "Balewadi High Street, luxury dining, and Mumbai expressway gateway.",
      },
      {
        label: "Wakad",
        href: "/locations/wakad",
        description: "Booming residential hub adjacent to Hinjewadi and Phoenix Mall.",
      },
      {
        label: "Mundhwa",
        href: "/locations/mundhwa",
        description: "Riverfront corridor bridging Koregaon Park with Kharadi.",
      },
      {
        label: "NIBM",
        href: "/locations/nibm",
        description: "Scenic 200-acre reserve forest views and heritage schools in South Pune.",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Property Investment Consulting",
        href: "/services#property-investment-consulting",
        description: "Data-driven capital allocation and yield modeling for investors & NRIs.",
      },
      {
        label: "Home Buying Assistance",
        href: "/services#home-buying-assistance",
        description: "Personalized guidance, needs discovery, and negotiation for families.",
      },
      {
        label: "Project Comparison Matrix",
        href: "/services#project-comparison",
        description: "Unbiased 24-point technical and financial comparison.",
      },
      {
        label: "Site Visit Concierge",
        href: "/services#site-visit-assistance",
        description: "Stress-free on-ground property exploration and chauffeured visits.",
      },
    ],
  },
  {
    label: "Insights",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about-us",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
];

export const FOOTER_LINKS = {
  projects: [
    { label: "Mantra Burgundy (Mundhwa)", href: "/projects/mantra-burgundy" },
    { label: "The Ark Voyage (NIBM)", href: "/projects/the-ark-voyage" },
    { label: "Trustfort Icon (Kharadi)", href: "/projects/trustfort-icon" },
    { label: "Gera Planet of Joy (Kharadi)", href: "/projects/gera-planet-of-joy" },
    { label: "Kohinoor Courtyard One (Wakad)", href: "/projects/kohinoor-courtyard-one" },
    { label: "VTP Pegasus (New Kharadi)", href: "/projects/vtp-pegasus" },
    { label: "Rohan Viti (Baner)", href: "/projects/rohan-viti" },
  ],
  locations: [
    { label: "Properties in Kharadi", href: "/locations/kharadi" },
    { label: "Properties in Hinjewadi", href: "/locations/hinjewadi" },
    { label: "Properties in Baner", href: "/locations/baner" },
    { label: "Properties in Wakad", href: "/locations/wakad" },
    { label: "Properties in Mundhwa", href: "/locations/mundhwa" },
    { label: "Properties in NIBM", href: "/locations/nibm" },
    { label: "Properties in Hadapsar", href: "/locations/hadapsar" },
    { label: "Properties in Dhanori", href: "/locations/dhanori" },
    { label: "Properties in Charholi", href: "/locations/charholi" },
    { label: "Properties in Wagholi", href: "/locations/wagholi" },
  ],
  services: [
    { label: "Property Investment Consulting", href: "/services#property-investment-consulting" },
    { label: "Home Buying Assistance", href: "/services#home-buying-assistance" },
    { label: "Project Comparison Due Diligence", href: "/services#project-comparison" },
    { label: "VIP Site Visit Concierge", href: "/services#site-visit-assistance" },
  ],
  company: [
    { label: "About Pune Property Investor", href: "/about-us" },
    { label: "Contact & Kharadi Office", href: "/contact-us" },
    { label: "Market Insights & Articles", href: "/blog" },
    { label: "Frequently Asked Questions", href: "/#faqs" },
    { label: "Schedule Site Visit", href: "/contact-us?type=site_visit" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "RERA & Advisory Disclaimer", href: "/disclaimer" },
  ],
};
