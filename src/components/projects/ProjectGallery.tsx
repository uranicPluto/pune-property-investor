"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Keyboard navigation inside lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <>
      <div className="space-y-3">
        {/* Main Featured Image with Click-to-Expand */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Open image in fullscreen gallery"
          onClick={() => setLightboxOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setLightboxOpen(true);
          }}
          className="relative aspect-[16/10] sm:aspect-[16/9] rounded-card overflow-hidden bg-navy/10 cursor-pointer group shadow-card border border-border/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <Image
            src={images[selectedIdx] || images[0]}
            alt={`${projectName} - Photograph ${selectedIdx + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Expand badge */}
          <div className="absolute bottom-4 right-4 bg-navy-dark/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-white/20 shadow-soft">
            <Maximize2 className="w-3.5 h-3.5 text-gold" />
            <span>View Fullscreen Gallery ({images.length} Photos)</span>
          </div>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {images.map((img, idx) => (
              <button
                key={img + idx}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                aria-label={`View photo ${idx + 1}`}
                className={`relative w-24 h-16 sm:w-28 sm:h-20 shrink-0 rounded-brand overflow-hidden border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  selectedIdx === idx
                    ? "border-gold shadow-gold scale-[1.02]"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${projectName} thumbnail ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          className="fixed inset-0 z-50 bg-navy-dark/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white pb-4 border-b border-white/10">
            <div>
              <div className="font-serif font-bold text-lg">{projectName}</div>
              <div className="text-xs text-white/60">
                Photo {selectedIdx + 1} of {images.length}
              </div>
            </div>

            <button
              onClick={() => setLightboxOpen(false)}
              aria-label="Close fullscreen gallery"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Image View with Prev / Next */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <div className="relative w-full h-full max-h-[75vh] max-w-5xl">
              <Image
                src={images[selectedIdx]}
                alt={`${projectName} - Large View`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Left Button */}
            <button
              onClick={() =>
                setSelectedIdx((prev) => (prev - 1 + images.length) % images.length)
              }
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 w-11 h-11 rounded-full bg-black/60 text-white hover:bg-gold hover:text-navy-dark transition-all flex items-center justify-center backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Button */}
            <button
              onClick={() => setSelectedIdx((prev) => (prev + 1) % images.length)}
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 w-11 h-11 rounded-full bg-black/60 text-white hover:bg-gold hover:text-navy-dark transition-all flex items-center justify-center backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails inside Lightbox */}
          <div className="flex justify-center gap-2 overflow-x-auto pt-2 border-t border-white/10">
            {images.map((img, idx) => (
              <button
                key={img + idx}
                onClick={() => setSelectedIdx(idx)}
                className={`relative w-16 h-12 rounded overflow-hidden border-2 transition-all shrink-0 ${
                  selectedIdx === idx ? "border-gold scale-105" : "border-transparent opacity-60"
                }`}
              >
                <Image src={img} alt="thumb" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
