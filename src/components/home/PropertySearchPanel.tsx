"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Building, IndianRupee, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PropertySearchPanel() {
  const router = useRouter();
  const [locality, setLocality] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [configuration, setConfiguration] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (locality) params.set("locality", locality);
    if (propertyType) params.set("type", propertyType);
    if (budget) params.set("budget", budget);
    if (configuration) params.set("config", configuration);

    const query = params.toString();
    router.push(`/projects${query ? `?${query}` : ""}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-card shadow-floating border border-white/20">
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
        {/* Locality Selector */}
        <div className="space-y-1.5 text-left">
          <label htmlFor="search-locality" className="text-xs font-semibold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>Locality</span>
          </label>
          <select
            id="search-locality"
            name="locality"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            className="w-full bg-ivory/60 border border-border rounded-brand px-3 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
          >
            <option value="">All Pune Localities</option>
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

        {/* Property Type */}
        <div className="space-y-1.5 text-left">
          <label htmlFor="search-type" className="text-xs font-semibold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-gold" />
            <span>Property Type</span>
          </label>
          <select
            id="search-type"
            name="propertyType"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full bg-ivory/60 border border-border rounded-brand px-3 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
          >
            <option value="">All Categories</option>
            <option value="residential">Residential Apartments</option>
            <option value="luxury">Luxury & Riverfront</option>
            <option value="commercial">Commercial & Retail</option>
          </select>
        </div>

        {/* Configuration */}
        <div className="space-y-1.5 text-left">
          <label htmlFor="search-config" className="text-xs font-semibold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>Bedrooms</span>
          </label>
          <select
            id="search-config"
            name="configuration"
            value={configuration}
            onChange={(e) => setConfiguration(e.target.value)}
            className="w-full bg-ivory/60 border border-border rounded-brand px-3 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
          >
            <option value="">Any Layout</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK & Above</option>
          </select>
        </div>

        {/* Budget Range */}
        <div className="space-y-1.5 text-left">
          <label htmlFor="search-budget" className="text-xs font-semibold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-gold" />
            <span>Budget</span>
          </label>
          <select
            id="search-budget"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-ivory/60 border border-border rounded-brand px-3 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
          >
            <option value="">Any Budget</option>
            <option value="under-75">Under ₹75 Lakh</option>
            <option value="75-125">₹75 Lakh – ₹1.25 Cr</option>
            <option value="125-200">₹1.25 Cr – ₹2.00 Cr</option>
            <option value="above-200">Above ₹2.00 Cr</option>
          </select>
        </div>

        {/* Submit Search Button */}
        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full py-2.5 sm:py-2.5 justify-center shadow-gold font-semibold text-sm"
            leftIcon={<Search className="w-4 h-4" />}
          >
            Search Projects
          </Button>
        </div>
      </form>
    </div>
  );
}
