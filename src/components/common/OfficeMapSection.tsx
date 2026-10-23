import React from "react";
import { MapPin, Phone, MessageSquare, Clock, ExternalLink, Navigation } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface OfficeMapSectionProps {
  className?: string;
  showIntro?: boolean;
}

export function OfficeMapSection({ className = "", showIntro = true }: OfficeMapSectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-white border-t border-border/80 ${className}`}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {showIntro && (
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Flagship Advisory Headquarters</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
              Visit Our Kharadi Advisory Office
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Centrally located at Gera Imperium Alpha on Grant Road in Kharadi, our advisory desk is
              staffed 7 days a week for in-person consultations, blueprint reviews, and site visit coordination.
            </p>
          </div>
        )}

        <div className="bg-ivory/50 rounded-card border border-border/80 overflow-hidden shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left 4 Cols: Office Details & Direct Actions */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white border-b lg:border-b-0 lg:border-r border-border/80">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                    Corporate Office
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-navy mt-1">
                    Gera Imperium Alpha
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    3rd Floor, Kharadi, Pune
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-text-primary">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div className="leading-snug text-text-secondary">
                      {COMPANY_INFO.officeAddress.full}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-text-secondary">{COMPANY_INFO.businessHours}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold shrink-0" />
                    <a
                      href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                      className="font-semibold text-navy hover:text-gold transition-colors"
                    >
                      {COMPANY_INFO.phones.primary}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                    <a
                      href={COMPANY_INFO.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      WhatsApp: +91 73981 74444
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border/60 space-y-2.5">
                <a
                  href={COMPANY_INFO.officeAddress.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-brand bg-navy text-white text-xs font-semibold hover:bg-navy-light transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3 text-white/70" />
                </a>

                <a
                  href={COMPANY_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-brand bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp (73981 74444)</span>
                </a>
              </div>
            </div>

            {/* Right 8 Cols: Embedded Interactive Google Map */}
            <div className="lg:col-span-8 relative min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] w-full bg-ivory">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13754698.277883217!2d45.934062821002016!3d19.162506720782623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3765debcf13%3A0xa371ed3960673e03!2sPune%20Property%20Investor!5e0!3m2!1sen!2sin!4v1792768403412!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Pune Property Investor Google Maps Location at Gera Imperium Alpha, Kharadi"
                className="w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
