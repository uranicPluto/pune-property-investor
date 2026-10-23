export interface FAQ {
  id: string;
  category: "Buying Process" | "Legal & RERA" | "Advisory & Fees" | "Investment & Locations";
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    category: "Buying Process",
    question: "How can I compare residential projects in Pune objectively?",
    answer:
      "When comparing projects, look beyond cosmetic brochures. Evaluate: (1) Usable carpet area efficiency rather than vague super built-up terms, (2) MahaRERA declared delivery dates and past delivery track record of the developer, (3) Proximity to employment nodes like EON Free Zone or Hinjewadi IT Park, and (4) Floor-to-density ratio (number of apartments per elevator and per acre). Our advisory team provides a 24-point evaluation matrix to help you compare your shortlisted options side-by-side.",
  },
  {
    id: "faq-2",
    category: "Legal & RERA",
    question: "What legal documents should I review before paying a booking token?",
    answer:
      "Always inspect: (1) MahaRERA Registration Number and verify the uploaded Title Certificate on maharera.mahaonline.gov.in, (2) Commencement Certificate (CC) for your specific tower and floor, (3) Sanctioned building layout plans, (4) Encumbrance Certificate verifying clear land ownership, and (5) Draft Agreement for Sale to check payment milestones against construction progress.",
  },
  {
    id: "faq-3",
    category: "Advisory & Fees",
    question: "Do you charge homebuyers a fee for consultation and site visits?",
    answer:
      "No. As institutional channel partners accredited by Pune's leading developers, our consulting, project comparison, site visits, and negotiation assistance are completely complimentary for homebuyers. Developers compensate channel partners directly, and because of our transaction volume, we often unlock preferential pricing, waiver of floor-rise, or flexible payment plans that individual buyers cannot secure alone.",
  },
  {
    id: "faq-4",
    category: "Buying Process",
    question: "How do I arrange a private site visit through Pune Property Investor?",
    answer:
      "You can book a site visit online through our website, via WhatsApp at +91 73981 74444, or by calling our Kharadi office. We coordinate with developer project directors, organize convenient timings, and arrange guided transportation where requested, ensuring you inspect actual sample flats without sales harassment.",
  },
  {
    id: "faq-5",
    category: "Legal & RERA",
    question: "What is the difference between carpet area and super built-up area in Maharashtra?",
    answer:
      "Under MahaRERA rules, developers are legally required to sell exclusively on 'Carpet Area'—the net usable floor area of an apartment excluding the thickness of external walls, but including internal partition walls. Usable balconies and utility areas must be separately declared. Super built-up area is an obsolete term that bundled common lobbies and staircases and is no longer recognized by MahaRERA as a legal basis for sales agreements.",
  },
  {
    id: "faq-6",
    category: "Investment & Locations",
    question: "Which areas in Pune offer the highest capital appreciation and rental yield in 2026?",
    answer:
      "For rental yield (4.2%–5.2%), Kharadi and Hinjewadi lead due to high workforce density from multinational tech parks. For capital appreciation over the next 3–5 years, Mundhwa (riverfront infrastructure connecting to Koregaon Park), Upper Kharadi / New Kharadi (Ring Road and metro expansion), and Wakad / Punawale offer superior appreciation potential.",
  },
  {
    id: "faq-7",
    category: "Legal & RERA",
    question: "What additional costs should I budget for on top of the base flat price?",
    answer:
      "In Maharashtra, additional expenses typically total 8% to 11% of the agreement value: (1) Stamp Duty: 6% (inclusive of local body tax in PMC limits), (2) Registration: ₹30,000, (3) GST: 5% for under-construction residential (0% for ready-to-move projects with Occupancy Certificate), (4) Society formation, legal charges, and advance maintenance (usually ₹1 to ₹3 Lakh).",
  },
];
