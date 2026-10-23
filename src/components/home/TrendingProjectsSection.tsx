"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play, MessageSquare, ArrowUpRight } from "lucide-react";
import { RevealUp } from "@/components/motion/MotionWrapper";
import { COMPANY_INFO } from "@/data/company";

export interface TrendingProject {
  id: string;
  title: string;
  location: string;
  developer: string;
  config: string;
  price: string;
  youtubeId: string;
  embedUrl: string;
}

export const TRENDING_PROJECTS: TrendingProject[] = [
  {
    id: "yashwin-enchante",
    title: "Yashwin Enchante Upper Kharadi",
    location: "Upper Kharadi, Pune",
    developer: "Vilas Javdekar Developers",
    config: "Smart 2 & 3 BHK Homes",
    price: "₹85 Lakhs* Onwards",
    youtubeId: "yreTepzYTV0",
    embedUrl: "https://www.youtube.com/embed/yreTepzYTV0",
  },
  {
    id: "nivasa-enchante",
    title: "Nivasa Enchante Lohegaon",
    location: "Lohegaon, Pune",
    developer: "Nivasa Group",
    config: "2, 2.5 & 3 BHK Apartments",
    price: "₹82.5 Lakhs* Onwards",
    youtubeId: "YJvolAk54-I",
    embedUrl: "https://www.youtube.com/embed/YJvolAk54-I",
  },
  {
    id: "mahindra-ivylush",
    title: "Mahindra IvyLush Kharadi",
    location: "Kharadi East, Pune",
    developer: "Mahindra Lifespaces",
    config: "2, 3 & 4 BHK Luxury Residences",
    price: "₹99 Lakhs* Onwards",
    youtubeId: "qS8TCWHBwlk",
    embedUrl: "https://www.youtube.com/embed/qS8TCWHBwlk",
  },
  {
    id: "yoo-one-nibm",
    title: "YOO ONE NIBM Pune",
    location: "NIBM Road, South Pune",
    developer: "Tribeca & Panchshil",
    config: "3.5 & 4.5 BHK Luxury Residences",
    price: "₹3.01 Cr* Onwards",
    youtubeId: "PRCOvxoYAzo",
    embedUrl: "https://www.youtube.com/embed/PRCOvxoYAzo?si=WZcC8qnFt1mS7rlU",
  },
  {
    id: "empyrean-leela",
    title: "Empyrean Leela Kharadi",
    location: "Kharadi, Pune",
    developer: "Empyrean Group",
    config: "2 & 3 BHK Premium Flats",
    price: "₹1.10 Cr* Onwards",
    youtubeId: "M1sDYNUJQrY",
    embedUrl: "https://www.youtube.com/embed/M1sDYNUJQrY?si=8I_XNoMfRZFOk1ln",
  },
  {
    id: "shubh-tristar",
    title: "Shubh Tristar Mundhwa",
    location: "Mundhwa, Pune",
    developer: "Shubh Developers",
    config: "3 & 4 BHK Riverfront Homes",
    price: "₹2.11 Cr* Onwards",
    youtubeId: "ejgE93smbwQ",
    embedUrl: "https://www.youtube.com/embed/ejgE93smbwQ?si=7RdDp_e2wyBlfm9d",
  },
  {
    id: "kumar-palmsprings",
    title: "Kumar Palmsprings Towers NIBM",
    location: "NIBM Road, Pune",
    developer: "Kumar Properties",
    config: "2 & 3 BHK Towers",
    price: "₹99 Lakhs* Onwards",
    youtubeId: "KTFwSmAT3qM",
    embedUrl: "https://www.youtube.com/embed/KTFwSmAT3qM?si=c54hz4szacTBMk-h",
  },
];

export function TrendingProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (current) {
        current.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector<HTMLElement>("[data-trending-card]");
    const step = card ? card.offsetWidth + 24 : 360;
    container.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section id="trending" className="scroll-mt-20 py-12 sm:py-16 lg:py-20 bg-white border-t border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <RevealUp className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight">
            Trending Projects
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-2 rounded-full" />
        </RevealUp>

        {/* Carousel Container with Side Navigation Arrows */}
        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous trending projects"
            className={`absolute -left-3 sm:-left-5 lg:-left-6 top-[38%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center transition-all ${
              canScrollLeft
                ? "text-navy hover:text-gold hover:border-gold cursor-pointer hover:scale-105 active:scale-95"
                : "text-neutral-300 border-neutral-100 cursor-not-allowed opacity-30"
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next trending projects"
            className={`absolute -right-3 sm:-right-5 lg:-right-6 top-[38%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center transition-all ${
              canScrollRight
                ? "text-navy hover:text-gold hover:border-gold cursor-pointer hover:scale-105 active:scale-95"
                : "text-neutral-300 border-neutral-100 cursor-not-allowed opacity-30"
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Horizontal Scroll Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4 pt-1 px-1"
          >
            {TRENDING_PROJECTS.map((project) => {
              const isPlaying = playingId === project.id;
              const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(
                `Hello Pune Property Investor, I watched the walkthrough for ${project.title} and would like to enquire about pricing and arrange a site visit.`
              )}`;

              return (
                <div
                  key={project.id}
                  data-trending-card
                  className="flex-[0_0_88%] sm:flex-[0_0_calc((100%-24px)/2)] lg:flex-[0_0_calc((100%-48px)/3)] snap-start bg-white border border-neutral-200/90 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  {/* Video / Thumbnail Container */}
                  <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden">
                    {isPlaying ? (
                      <iframe
                        src={`${project.embedUrl}${
                          project.embedUrl.includes("?") ? "&" : "?"
                        }autoplay=1`}
                        title={project.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingId(project.id)}
                        className="relative w-full h-full text-left group/thumb cursor-pointer focus:outline-none"
                        aria-label={`Play walkthrough for ${project.title}`}
                      >
                        {/* YouTube High-Res Thumbnail */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                          loading="lazy"
                        />

                        {/* Subtle dark gradient overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-black/30 transition-colors" />

                        {/* Circular Play Button matching reference image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/thumb:scale-110 group-hover/thumb:bg-white text-navy">
                            <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-current text-navy" />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-medium text-navy tracking-tight hover:text-gold transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <div className="mt-1 flex items-center justify-between text-xs sm:text-sm text-text-secondary">
                        <span>{project.config}</span>
                        <span className="font-semibold text-navy">{project.price}</span>
                      </div>
                    </div>

                    {/* Quick Action Bar */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <Link
                        href={`/contact-us?project=${encodeURIComponent(project.title)}`}
                        className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-navy transition-colors font-medium"
                      >
                        <span>Schedule Visit</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
