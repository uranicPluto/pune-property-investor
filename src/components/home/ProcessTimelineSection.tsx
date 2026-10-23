import React from "react";
import { MessageSquare, Filter, Compass, CheckCircle } from "lucide-react";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function ProcessTimelineSection() {
  const steps = [
    {
      number: "01",
      title: "Understand Your Goals",
      description:
        "We discuss your commute requirements, family space needs, preferred schooling corridors, budget range, and timeline.",
      icon: <MessageSquare className="w-5 h-5 text-gold" />,
    },
    {
      number: "02",
      title: "Shortlist Verified Projects",
      description:
        "We filter active Pune developments, verifying MahaRERA title certificates, sanctioned plans, and carpet area efficiency.",
      icon: <Filter className="w-5 h-5 text-gold" />,
    },
    {
      number: "03",
      title: "Guided On-Ground Visits",
      description:
        "We arrange private, chauffeured site visits to inspect actual mock-up units, ambient noise levels, and construction speed.",
      icon: <Compass className="w-5 h-5 text-gold" />,
    },
    {
      number: "04",
      title: "Negotiation & Possession",
      description:
        "We secure builder price advantages, review agreement draft clauses, and guide you through registration and handover.",
      icon: <CheckCircle className="w-5 h-5 text-gold" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory/50 border-t border-border/80">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold mb-2">
            <span>Structured Advisory Roadmap</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            How the Buyer Journey Works
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3 leading-relaxed">
            A transparent 4-step framework designed to eliminate stress, prevent costly missteps,
            and secure your ideal Pune residence with total peace of mind.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => (
            <RevealUp
              key={step.number}
              delay={index * 0.1}
              className="bg-white p-6 sm:p-7 rounded-card border border-border/80 shadow-soft hover:shadow-card transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-brand bg-navy flex items-center justify-center text-white shadow-soft">
                    {step.icon}
                  </div>
                  <span className="font-serif font-bold text-3xl text-border/80">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-navy">
                  {step.title}
                </h3>

                <p className="text-text-secondary text-xs sm:text-sm mt-2.5 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 text-[11px] font-semibold uppercase tracking-wider text-gold">
                Step {index + 1} of 4
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
