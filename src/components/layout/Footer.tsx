import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { FOOTER_LINKS } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand + Contact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Col 1 & 2: Brand Story & Verified Address */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-brand bg-gold flex items-center justify-center font-serif text-navy-dark font-bold text-xl shadow-gold">
                P
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-tight block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium block">
                  Real Estate Advisory
                </span>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              {COMPANY_INFO.shortAbout}
            </p>

            <div className="space-y-3 pt-2 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <a
                  href={COMPANY_INFO.officeAddress.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors leading-snug"
                >
                  {COMPANY_INFO.officeAddress.full}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div className="space-x-3">
                  <a
                    href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                    className="hover:text-gold transition-colors font-medium"
                  >
                    {COMPANY_INFO.phones.primary}
                  </a>
                  <span>/</span>
                  <a
                    href={`tel:${COMPANY_INFO.phones.secondaryRaw}`}
                    className="hover:text-gold transition-colors font-medium"
                  >
                    {COMPANY_INFO.phones.secondary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 transition-colors font-medium"
                >
                  WhatsApp: +91 73981 74444
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-white/70">{COMPANY_INFO.businessHours}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Prime Locations */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-gold">
              Prime Pune Locations
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {FOOTER_LINKS.locations.slice(0, 7).map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="hover:text-white transition-colors hover:translate-x-0.5 inline-block duration-150"
                  >
                    {loc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Featured Projects */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-gold">
              Featured Projects
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {FOOTER_LINKS.projects.map((proj) => (
                <li key={proj.href}>
                  <Link
                    href={proj.href}
                    className="hover:text-white transition-colors hover:translate-x-0.5 inline-block duration-150"
                  >
                    {proj.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Advisory & Quick Links */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-gold">
              Advisory & Guides
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {FOOTER_LINKS.services.map((serv) => (
                <li key={serv.label}>
                  <Link
                    href={serv.href}
                    className="hover:text-white transition-colors hover:translate-x-0.5 inline-block duration-150"
                  >
                    {serv.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.company.map((comp) => (
                <li key={comp.label}>
                  <Link
                    href={comp.href}
                    className="hover:text-white transition-colors hover:translate-x-0.5 inline-block duration-150"
                  >
                    {comp.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Developer Partners Banner */}
        <div className="py-8 border-b border-white/10">
          <div className="text-xs uppercase tracking-wider text-gold font-semibold mb-4 text-center sm:text-left">
            Institutional Channel Partner Network
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs text-white/60 font-medium">
            {COMPANY_INFO.developerPartners.map((dev) => (
              <span
                key={dev}
                className="px-3 py-1.5 rounded bg-white/5 border border-white/5 hover:border-gold/30 hover:text-white transition-colors"
              >
                {dev}
              </span>
            ))}
          </div>
        </div>

        {/* Legal, MahaRERA Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-white/50 leading-relaxed">
          <div className="flex items-start gap-2 bg-white/5 p-4 rounded-brand border border-white/10">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <p>
              <strong className="text-white/80">MahaRERA Advisory Notice: </strong>
              Pune Property Investor is an authorized real estate marketing and advisory consultancy.
              We are not property developers. Project images, layout plans, and specifications are
              sourced directly from respective developers and are subject to change as sanctioned by
              MahaRERA. Buyers are advised to independently verify MahaRERA registration details,
              sanctioned plans, and title certificates prior to executing purchase transactions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              &copy; {currentYear} {COMPANY_INFO.name}. Developed by{" "}
              <span className="text-gold font-medium">House of Workflow</span>. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              {FOOTER_LINKS.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
