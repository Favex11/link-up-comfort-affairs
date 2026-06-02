"use client";
import { MapPin, Building2 } from "lucide-react";

const properties = [
  { id: "1", name: "Bourdillon Court", location: "Bourdillon Road, Ikoyi", category: "Residential Estate", status: "Fully Occupied", statusColor: "#4CAF50", units: "48 Units", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80", tag: "Property Management" },
  { id: "2", name: "Victoria Towers", location: "Ahmadu Bello Way, V/I", category: "Commercial Complex", status: "95% Occupied", statusColor: "#C9A84C", units: "12 Floors", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", tag: "Facility Management" },
  { id: "3", name: "Lekki Phase 1 Gardens", location: "Admiralty Way, Lekki", category: "Gated Community", status: "Fully Occupied", statusColor: "#4CAF50", units: "36 Units", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80", tag: "Full Management" },
  { id: "4", name: "Banana Island Residences", location: "Banana Island, Ikoyi", category: "Luxury Villas", status: "Available", statusColor: "#6B7A3E", units: "6 Villas", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80", tag: "Property Sales" },
];

export default function Properties() {
  return (
    <section id="properties" className="relative w-full overflow-hidden" style={{ background: "#0A0E05", padding: "clamp(64px, 12vw, 120px) 0" }}>
      <div className="absolute top-1/2 right-0 rounded-full pointer-events-none" style={{ width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)", filter: "blur(80px)", transform: "translate(35%,-50%)" }} />
      <div className="section-wrap relative" style={{ zIndex: 1 }}>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="section-label"><span>Portfolio</span></div>
            <h2 className="font-display font-extrabold text-white leading-tight" style={{ fontSize: "clamp(1.55rem, 4vw, 2.8rem)", letterSpacing: "-0.01em" }}>
              Featured <span className="gold-shimmer">Properties</span>
            </h2>
          </div>
          <a href="#contact"
            className="inline-flex items-center gap-2 font-bold tracking-[0.15em] uppercase rounded-sm hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
            style={{ border: "1px solid rgba(201,168,76,0.22)", color: "rgba(201,168,76,0.75)", padding: "11px 20px", fontSize: "9px" }}>
            Enquire About a Property
          </a>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }} className="prop-grid">
          <style>{`@media(min-width:540px){.prop-grid{grid-template-columns:repeat(2,1fr)!important}}@media(min-width:1024px){.prop-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
          {properties.map((prop) => (
            <div key={prop.id}
              className="group relative rounded-sm overflow-hidden border border-[#C9A84C]/8 hover:border-[#C9A84C]/38 hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
              style={{ height: "clamp(300px, 38vw, 390px)" }}>
              <img src={prop.image} alt={prop.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,11,5,0.97) 0%, rgba(8,11,5,0.55) 50%, rgba(8,11,5,0.12) 100%)" }} />

              {/* Status */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full"
                style={{ background: "rgba(8,11,5,0.82)", backdropFilter: "blur(8px)", padding: "4px 10px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="rounded-full flex-shrink-0" style={{ width: "5px", height: "5px", background: prop.statusColor }} />
                <span className="font-bold" style={{ color: "rgba(240,244,238,0.78)", fontSize: "8px", letterSpacing: "0.08em" }}>{prop.status}</span>
              </div>

              {/* Tag */}
              <div className="absolute top-3 right-3 rounded-sm"
                style={{ background: "rgba(201,168,76,0.1)", backdropFilter: "blur(8px)", padding: "4px 9px", border: "1px solid rgba(201,168,76,0.15)" }}>
                <span className="font-bold uppercase" style={{ color: "#C9A84C", fontSize: "7px", letterSpacing: "0.1em" }}>{prop.tag}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0" style={{ padding: "18px" }}>
                <div style={{ width: "20px", height: "1px", background: "#C9A84C", marginBottom: "10px" }} />
                <p className="font-bold tracking-[0.18em] uppercase mb-1" style={{ color: "rgba(201,168,76,0.55)", fontSize: "8px" }}>{prop.category}</p>
                <h3 className="font-display font-extrabold text-white mb-2 leading-tight" style={{ fontSize: "clamp(1rem, 2.2vw, 1.15rem)" }}>
                  {prop.name}
                </h3>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <MapPin size={10} style={{ color: "#6B7A3E", flexShrink: 0 }} />
                  <span style={{ color: "rgba(240,244,238,0.48)", fontSize: "11px" }}>{prop.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 size={10} style={{ color: "#6B7A3E", flexShrink: 0 }} />
                  <span style={{ color: "rgba(240,244,238,0.38)", fontSize: "11px" }}>{prop.units}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
