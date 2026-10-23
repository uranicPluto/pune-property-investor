import React from "react";
import { ShieldCheck, Building2, MapPin, Award, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function TrustSection() {
  const principles = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: "100% MahaRERA Verified",
      description: "Every listed project undergoes independent title and sanctioned plan audits.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "Zero Buyer Brokerage",
      description: "Institutional developer partnerships provide direct builder terms without broker fees.",
    },
    {
      icon: <Building2 className="w-5 h-5 text-gold" />,
      title: "Tier-1 Developer Access",
      description: "Direct tie-ups with Mantra, Tribeca, Gera, VTP, Kohinoor & Godrej Properties.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold" />,
      title: "Kharadi Flagship Advisory",
      description: "Physical presence at Gera Imperium Alpha with real-time on-ground market data.",
    },
  ];

  return (
    <section className="bg-ivory border-y border-border/80 py-10 sm:py-14">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {principles.map((item, index) => (
            <RevealUp
              key={item.title}
              delay={index * 0.1}
              className="bg-white p-5 rounded-card border border-border/60 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="w-10 h-10 rounded-brand bg-ivory flex items-center justify-center mb-3.5">
                {item.icon}
              </div>
              <h3 className="font-sans font-bold text-navy text-base tracking-tight">
                {item.title}
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm mt-1.5 leading-relaxed">
                {item.description}
              </p>
            </RevealUp>
          ))}
        </div>

        {/* Real Metrics Banner */}
        <div className="mt-8 pt-8 border-t border-border/60 flex flex-col xl:flex-row xl:items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-navy">
            <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
            <span>Trusted by Professionals Across</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:flex xl:flex-wrap items-center justify-center sm:justify-start xl:justify-end gap-6 sm:gap-8 lg:gap-10">
            {COMPANY_INFO.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif font-bold text-2xl sm:text-3xl text-navy">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-text-secondary font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
