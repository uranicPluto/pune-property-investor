"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  initialServiceOrProject?: string;
  initialType?: "site_visit" | "advisory_call" | "general_enquiry" | "career";
  className?: string;
}

export function ContactForm({
  initialServiceOrProject = "",
  initialType = "general_enquiry",
  className = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectOrServiceOfInterest: initialServiceOrProject,
    preferredLocality: "",
    budgetRange: "",
    preferredConfiguration: "",
    message: "",
    enquiryType: initialType,
    consent: true,
    websiteField_hp: "", // Honeypot
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field-level error on change
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);
    setErrors({});

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatusMessage({
          type: "success",
          text: result.message || "Thank you! An advisor will reach out shortly.",
        });
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectOrServiceOfInterest: initialServiceOrProject,
          preferredLocality: "",
          budgetRange: "",
          preferredConfiguration: "",
          message: "",
          enquiryType: initialType,
          consent: true,
          websiteField_hp: "",
        });
      } else {
        if (result.errors) {
          setErrors(result.errors);
        }
        setStatusMessage({
          type: "error",
          text: result.message || "Please correct the highlighted fields.",
        });
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatusMessage({
        type: "error",
        text: "Could not send enquiry right now. Please call us directly at +91 73981 74444.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`bg-white p-6 sm:p-8 rounded-card border border-border shadow-soft ${className}`}>
      {statusMessage && (
        <div
          role="alert"
          className={`p-4 rounded-brand mb-6 flex items-start gap-3 text-sm ${
            statusMessage.type === "success"
              ? "bg-emerald-50 text-status-success border border-emerald-200"
              : "bg-red-50 text-status-error border border-red-200"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 shrink-0 text-status-success mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0 text-status-error mt-0.5" />
          )}
          <div>
            <div className="font-semibold">
              {statusMessage.type === "success" ? "Enquiry Confirmed" : "Submission Failed"}
            </div>
            <div className="mt-0.5 leading-relaxed">{statusMessage.text}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden Honeypot Field for Spam Protection */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="websiteField_hp">Leave empty</label>
          <input
            type="text"
            id="websiteField_hp"
            name="websiteField_hp"
            tabIndex={-1}
            value={formData.websiteField_hp}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        {/* Enquiry Type Selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-navy">
            How can we assist you?
          </label>
          <select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full bg-ivory/60 border border-border rounded-brand px-3.5 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="general_enquiry">General Property Advisory</option>
            <option value="site_visit">Schedule Guided Site Visit</option>
            <option value="advisory_call">Book 1-on-1 Investment Consultation</option>
            <option value="brochure_download">Request Project Brochure & Pricing Sheet</option>
            <option value="career">Career / Channel Partnership</option>
          </select>
        </div>

        {/* Name & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-navy">
              Full Name <span className="text-status-error">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-ivory/60 border rounded-brand px-3.5 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.name ? "border-status-error bg-red-50/40" : "border-border"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-status-error">{errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-navy">
              Mobile Number <span className="text-status-error">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full bg-ivory/60 border rounded-brand px-3.5 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.phone ? "border-status-error bg-red-50/40" : "border-border"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-status-error">{errors.phone[0]}</p>
            )}
          </div>
        </div>

        {/* Email & Project / Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-navy">
              Email Address <span className="text-text-muted text-[11px]">(Optional)</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-ivory/60 border rounded-brand px-3.5 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.email ? "border-status-error bg-red-50/40" : "border-border"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-status-error">{errors.email[0]}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-navy">
              Preferred Locality
            </label>
            <select
              name="preferredLocality"
              value={formData.preferredLocality}
              onChange={handleChange}
              className="w-full bg-ivory/60 border border-border rounded-brand px-3.5 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Any Locality</option>
              <option value="Kharadi">Kharadi (East)</option>
              <option value="Hinjewadi">Hinjewadi (West)</option>
              <option value="Baner">Baner (West)</option>
              <option value="Wakad">Wakad (West)</option>
              <option value="Mundhwa">Mundhwa (East)</option>
              <option value="NIBM">NIBM (South)</option>
              <option value="Hadapsar">Hadapsar (East)</option>
              <option value="Dhanori">Dhanori (North-East)</option>
              <option value="Charholi">Charholi (North-East)</option>
              <option value="Wagholi">Wagholi (East)</option>
            </select>
          </div>
        </div>

        {/* Budget & Configuration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-navy">
              Budget Range
            </label>
            <select
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full bg-ivory/60 border border-border rounded-brand px-3.5 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Select Budget</option>
              <option value="under-75">Under ₹75 Lakh</option>
              <option value="75-125">₹75 Lakh – ₹1.25 Cr</option>
              <option value="125-200">₹1.25 Cr – ₹2.00 Cr</option>
              <option value="above-200">Above ₹2.00 Cr</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-navy">
              Configuration
            </label>
            <select
              name="preferredConfiguration"
              value={formData.preferredConfiguration}
              onChange={handleChange}
              className="w-full bg-ivory/60 border border-border rounded-brand px-3.5 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Select Configuration</option>
              <option value="1 BHK">1 BHK</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK+">4 BHK & Penthouse</option>
              <option value="Commercial">Commercial Office / Retail</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-navy">
            Specific Requirements or Notes
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about your timeline, floor preference, or preferred projects..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-ivory/60 border border-border rounded-brand px-3.5 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="w-4 h-4 rounded text-gold focus:ring-gold border-border mt-0.5"
            />
            <span className="text-xs text-text-secondary leading-snug">
              I consent to receiving property brochures, pricing updates, and advisory calls from
              Pune Property Investor in compliance with RERA privacy guidelines.
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-status-error mt-1">{errors.consent[0]}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={loading}
          className="w-full justify-center shadow-gold font-semibold text-sm mt-2"
          rightIcon={<Send className="w-4 h-4" />}
        >
          Submit Consultation Request
        </Button>
      </form>
    </div>
  );
}
