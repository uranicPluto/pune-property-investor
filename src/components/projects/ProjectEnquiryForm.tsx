"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Calendar, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProjectEnquiryFormProps {
  projectName: string;
  developer: string;
  locality: string;
  configurations: string[];
}

export function ProjectEnquiryForm({
  projectName,
  developer,
  locality,
  configurations,
}: ProjectEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectOrServiceOfInterest: `${projectName} (${locality})`,
    preferredConfiguration: configurations[0] || "",
    preferredLocality: locality,
    enquiryType: "site_visit",
    consent: true,
    websiteField_hp: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

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
          text: `Your visit request for ${projectName} has been registered! Our project manager will call you to confirm your preferred timing.`,
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectOrServiceOfInterest: `${projectName} (${locality})`,
          preferredConfiguration: configurations[0] || "",
          preferredLocality: locality,
          enquiryType: "site_visit",
          consent: true,
          websiteField_hp: "",
        });
      } else {
        if (result.errors) setErrors(result.errors);
        setStatusMessage({
          type: "error",
          text: result.message || "Please check required fields.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Could not submit right now. Please call us at +91 73981 74444.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-7 rounded-card border border-border shadow-soft sticky top-28">
      <div className="border-b border-border/80 pb-4 mb-5">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold mb-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>Priority Access</span>
        </div>
        <h3 className="font-serif font-bold text-xl text-navy">
          Enquire About {projectName}
        </h3>
        <p className="text-xs text-text-secondary mt-1">
          Get verified cost sheets, floor plans, and schedule guided site walkthroughs.
        </p>
      </div>

      {statusMessage && (
        <div
          role="alert"
          className={`p-3.5 rounded-brand mb-4 flex items-start gap-2.5 text-xs ${
            statusMessage.type === "success"
              ? "bg-emerald-50 text-status-success border border-emerald-200"
              : "bg-red-50 text-status-error border border-red-200"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-status-success shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-4 h-4 text-status-error shrink-0 mt-0.5" />
          )}
          <div>
            <div className="font-semibold">
              {statusMessage.type === "success" ? "Enquiry Confirmed" : "Error"}
            </div>
            <div className="mt-0.5">{statusMessage.text}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
        {/* Hidden Honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="websiteField_hp"
            tabIndex={-1}
            value={formData.websiteField_hp}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div>
          <label className="font-semibold uppercase tracking-wider text-navy block mb-1">
            Full Name <span className="text-status-error">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-ivory/60 border rounded-brand px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.name ? "border-status-error" : "border-border"
            }`}
          />
          {errors.name && <p className="text-status-error mt-0.5">{errors.name[0]}</p>}
        </div>

        <div>
          <label className="font-semibold uppercase tracking-wider text-navy block mb-1">
            Mobile Number <span className="text-status-error">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full bg-ivory/60 border rounded-brand px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.phone ? "border-status-error" : "border-border"
            }`}
          />
          {errors.phone && <p className="text-status-error mt-0.5">{errors.phone[0]}</p>}
        </div>

        <div>
          <label className="font-semibold uppercase tracking-wider text-navy block mb-1">
            Email Address <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-ivory/60 border border-border rounded-brand px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <div>
          <label className="font-semibold uppercase tracking-wider text-navy block mb-1">
            Preferred Configuration
          </label>
          <select
            name="preferredConfiguration"
            value={formData.preferredConfiguration}
            onChange={handleChange}
            className="w-full bg-ivory/60 border border-border rounded-brand px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold"
          >
            {configurations.map((cfg) => (
              <option key={cfg} value={cfg}>
                {cfg}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold uppercase tracking-wider text-navy block mb-1">
            What do you need?
          </label>
          <select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full bg-ivory/60 border border-border rounded-brand px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="site_visit">Schedule Guided Site Visit</option>
            <option value="brochure_download">Request Cost Sheet & Brochure</option>
            <option value="advisory_call">Speak to Project Advisor</option>
          </select>
        </div>

        <div className="pt-1">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="w-3.5 h-3.5 rounded text-gold focus:ring-gold border-border mt-0.5"
            />
            <span className="text-[11px] text-text-secondary leading-snug">
              I agree to receive verified project details and pricing for {projectName}.
            </span>
          </label>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={loading}
          className="w-full justify-center shadow-gold font-semibold text-xs mt-2"
          rightIcon={<Send className="w-3.5 h-3.5" />}
        >
          Request Project Details
        </Button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-text-muted pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          <span>Zero spam guarantee · Direct developer pricing</span>
        </div>
      </form>
    </div>
  );
}
