"use client";
import { useState } from "react";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { propertyServices, facilityServices } from "@/lib/data";

type Tab = "all" | "property" | "facility";

const serviceDetails: Record<string, string[]> = {
  "letting": [
    "Thorough tenant screening and background checks",
    "Professional property listing and marketing",
    "Lease agreement preparation and signing",
    "Smooth tenant onboarding and handover",
  ],
  "lease-management": [
    "Lease renewal negotiation and documentation",
    "Rent review and compliance monitoring",
    "Dispute resolution and mediation",
    "Full lease lifecycle administration",
  ],
  "property-sales": [
    "Professional property valuation",
    "Strategic marketing and buyer sourcing",
    "Full transaction management",
    "Legal documentation and closing support",
  ],
  "water-treatment": [
    "Water treatment plant installation and commissioning",
    "Routine maintenance and chemical balancing",
    "Emergency repair and fault diagnosis",
    "Compliance with health and safety standards",
  ],
  "swimming-pool": [
    "Regular chemical testing and balancing",
    "Filtration and pump system servicing",
    "Pool cleaning and debris removal",
    "Structural inspection and leak detection",
  ],
  "generator": [
    "Scheduled oil changes and filter replacement",
    "Load testing and performance checks",
    "Emergency breakdown response",
    "Full service history documentation",
  ],
  "sewage": [
    "Scheduled sewage evacuation and disposal",
    "Septic tank inspection and maintenance",
    "Regulatory compliance certification",
    "Emergency overflow response",
  ],
  "refuse": [
    "Scheduled waste collection and sorting",
    "Responsible and certified disposal",
    "Recycling coordination",
    "Estate hygiene monitoring",
  ],
  "cleaning": [
    "Daily and weekly janitorial services",
    "Deep cleaning and post-construction cleanup",
    "Hospital-grade products and trained staff",
    "Common area and facility maintenance",
  ],
  "security": [
    "Trained and certified security personnel",
    "CCTV installation and monitoring",
    "Access control system management",
    "24/7 incident reporting and response",
  ],
  "plumbing": [
    "Pipe installation, repair and replacement",
    "Leak detection and emergency response",
    "Drainage and blockage clearing",
    "Routine plumbing inspections",
  ],
  "carpentry": [
    "Custom furniture and woodwork",
    "Door, window and fixture repairs",
    "Structural woodwork and installations",
    "Surface finishing and restoration",
  ],
  "electrical": [
    "Wiring installation and upgrades",
    "Fault diagnosis and repair",
    "Electrical safety inspections",
    "Code compliance and certification",
  ],
  "painting": [
    "Interior and exterior painting",
    "Surface preparation and priming",
    "Texture and decorative finishes",
    "Premium coating application",
  ],
};

export default function Services() {
  const [tab, setTab] = useState<Tab>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const displayed =
    tab === "property"
      ? propertyServices
      : tab === "facility"
      ? facilityServices
      : [...propertyServices, ...facilityServices];

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <section id="services" className="relative w-full overflow-hidden" style={{ background: "#0A0E05", padding: "clamp(64px, 12vw, 120px) 0" }}>
      <div className="absolute top-1/2 right-0 rounded-full pointer-events-none" style={{ width: "35vw", height: "35vw", background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)", filter: "blur(80px)", transform: "translate(40%,-50%)" }} />

      <div className="section-wrap relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: "580px", marginBottom: "clamp(36px, 6vw, 64px)" }}>
          <div className="section-label"><span>What We Offer</span></div>
          <h2 className="font-display font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.55rem, 4vw, 2.8rem)", letterSpacing: "-0.01em" }}>
            Comprehensive Property & <span className="gold-shimmer">Facility Services</span>
          </h2>
          <p className="text-white/55 leading-relaxed" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
            One trusted partner for every property and facility need — click any service to learn more.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 mb-10" style={{ background: "rgba(255,255,255,0.04)", padding: "4px", borderRadius: "2px", width: "fit-content", border: "1px solid rgba(255,255,255,0.05)" }}>
          {(["all", "property", "facility"] as Tab[]).map((t) => (
            <button key={t} onClick={() => { setTab(t); setOpenId(null); }}
              className="font-bold tracking-[0.12em] uppercase rounded-sm transition-all duration-300"
              style={{ padding: "10px 16px", fontSize: "9px", background: tab === t ? "#C9A84C" : "transparent", color: tab === t ? "#080B05" : "rgba(240,244,238,0.5)", cursor: "pointer", border: "none" }}>
              {t === "all" ? "All" : t === "property" ? "Property" : "Facility"}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }} className="svc-grid">
          <style>{`
            @media(min-width:480px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}}
            @media(min-width:768px){.svc-grid{grid-template-columns:repeat(3,1fr)!important}}
            @media(min-width:1200px){.svc-grid{grid-template-columns:repeat(4,1fr)!important}}
          `}</style>

          {displayed.map((service) => {
            const isOpen = openId === service.id;
            const bullets = serviceDetails[service.id] ?? [];

            return (
              <div
                key={service.id}
                onClick={() => toggle(service.id)}
                className="group relative rounded-sm overflow-hidden border cursor-pointer transition-all duration-500"
                style={{
                  borderColor: isOpen ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.08)",
                  boxShadow: isOpen ? "0 0 40px rgba(201,168,76,0.1)" : "none",
                  transform: isOpen ? "translateY(-2px)" : "translateY(0)",
                }}>

                {/* Background image — shrinks when open */}
                <div
                  className="relative overflow-hidden transition-all duration-500"
                  style={{ height: isOpen ? "140px" : "clamp(220px, 28vw, 300px)" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,11,5,0.97) 0%, rgba(8,11,5,0.5) 60%, rgba(8,11,5,0.15) 100%)" }} />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="font-bold tracking-[0.18em] uppercase"
                      style={{ color: "#C9A84C", background: "rgba(8,11,5,0.8)", backdropFilter: "blur(8px)", padding: "4px 10px", borderRadius: "100px", border: "1px solid rgba(201,168,76,0.2)", fontSize: "8px" }}>
                      {service.category === "property" ? "Property" : "Facility"}
                    </span>
                  </div>

                  {/* Title + chevron always visible */}
                  <div className="absolute bottom-0 left-0 right-0" style={{ padding: "14px" }}>
                    <div style={{ width: "18px", height: "1px", background: "#C9A84C", marginBottom: "7px", transition: "width 0.4s" }} className={isOpen ? "w-10" : ""} />
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-white leading-snug transition-colors duration-300"
                        style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", color: isOpen ? "#C9A84C" : "#fff" }}>
                        {service.title}
                      </h3>
                      <ChevronDown
                        size={16}
                        style={{ color: "#C9A84C", flexShrink: 0, transition: "transform 0.4s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Expandable content */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}>
                  <div style={{ background: "#0F130A", padding: "16px", borderTop: "1px solid rgba(201,168,76,0.1)" }}>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed mb-4"
                      style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)" }}>
                      {service.description}
                    </p>

                    {/* Bullet points */}
                    <ul style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                      {bullets.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <CheckCircle2 size={13} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }} />
                          <span className="text-white/65 leading-snug" style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.85rem)" }}>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href="#contact"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 font-black tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:bg-[#E8D080] hover:-translate-y-0.5"
                      style={{ background: "#C9A84C", color: "#080B05", padding: "11px 20px", fontSize: "9px", boxShadow: "0 0 20px rgba(201,168,76,0.2)", textDecoration: "none" }}>
                      Get a Quote <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a href="#contact"
            className="inline-flex items-center gap-2 font-bold tracking-[0.15em] uppercase rounded-sm hover:-translate-y-0.5 transition-all duration-300"
            style={{ border: "1px solid rgba(201,168,76,0.25)", color: "rgba(201,168,76,0.8)", padding: "13px 24px", fontSize: "10px", textDecoration: "none" }}>
            Request a Custom Service Package <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
