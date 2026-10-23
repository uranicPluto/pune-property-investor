import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, UserCheck, Scale, Award } from "lucide-react";
import { RevealUp } from "@/components/motion/MotionWrapper";

export function WhyChooseUsSection() {
  const pillars = [
    {
      icon: <Scale className="w-5 h-5 text-gold" />,
      title: "Commission-Neutral Unbiased Advisory",
      description:
        "Unlike sales brokers who push whichever project pays the highest incentive, we evaluate projects on construction velocity, legal compliance, and true floor-plate usability.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: "MahaRERA Rigor & Legal Audit",
      description:
        "We independently review sanctioned plans, commencement certificates, encumbrance certificates, and builder escrow accounts before endorsing any development.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-gold" />,
      title: "Kharadi Flagship On-Ground Expertise",
      description:
        "Operating daily from Gera Imperium Alpha, we witness civic developments, road expansions, and commercial leasing milestones in real time.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "Institutional Price Negotiations",
      description:
        "Our volume relationships with Pune's premier developers allow us to secure preferential floor-rise waivers, flexible payment structures, and priority inventory access.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-dark text-white relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <RevealUp className="relative aspect-[4/5] rounded-card overflow-hidden border border-white/15 shadow-floating">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                alt="Pune Property Investor Advisory Experience"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />

              {/* Float Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-brand bg-navy/90 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-lg text-white">
                      1,200+ Discerning Clients
                    </div>
                    <div className="text-xs text-white/70">
                      Guided across Pune residential & luxury developments
                    </div>
                  </div>
                </div>
              </div>
            </RevealUp>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <RevealUp>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                <span>The Advisory Advantage</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Why Pune Property Investors Choose Our Guidance
              </h2>
              <p className="text-white/70 text-sm sm:text-base mt-4 leading-relaxed">
                Navigating Pune’s booming real estate ecosystem requires more than marketing brochures.
                We combine architectural scrutiny, financial modeling, and on-ground local intelligence
                to ensure you invest with complete conviction.
              </p>
            </RevealUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((pillar, i) => (
                <RevealUp
                  key={pillar.title}
                  delay={i * 0.1}
                  className="p-5 rounded-brand bg-white/5 border border-white/10 hover:border-gold/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center mb-3">
                    {pillar.icon}
                  </div>
                  <h3 className="font-sans font-bold text-base text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {pillar.description}
                  </p>
                </RevealUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
