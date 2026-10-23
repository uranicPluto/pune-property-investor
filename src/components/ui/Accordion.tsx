"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    return items.filter((i) => i.defaultOpen).map((i) => i.id);
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      }
      return prev.includes(id) ? [] : [id];
    });
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              "border border-border/80 rounded-card transition-all duration-200 overflow-hidden bg-white",
              isOpen ? "border-gold/40 shadow-soft" : "hover:border-navy/20"
            )}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 font-medium text-navy text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="font-sans font-semibold tracking-tight">{item.title}</span>
              <span
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                  isOpen ? "bg-gold/15 text-gold-dark rotate-180" : "bg-ivory text-text-secondary"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-text-secondary text-sm sm:text-base leading-relaxed border-t border-border/40">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
