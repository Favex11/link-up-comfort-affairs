"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Ikoyi Luxury Estate — Full Facility Takeover",
    category: "Facility Management",
    desc: "Comprehensive facility management for a 48-unit gated estate including generator maintenance, pool, water treatment, security, and waste management.",
    tags: ["Generator", "Pool", "Security", "Water Treatment"],
    stat: "48 units",
  },
  {
    id: "2",
    title: "Victoria Island Commercial Complex",
    category: "Property Management",
    desc: "End-to-end property management for a 12-floor commercial building — tenant sourcing, lease administration, and full building maintenance.",
    tags: ["Leasing", "Maintenance", "Electrical", "Plumbing"],
    stat: "12 floors",
  },
  {
    id: "3",
    title: "Lekki Phase 1 Residential Portfolio",
    category: "Letting & Leasing",
    desc: "Managed letting and lease renewals across 23 residential properties. Achieved 100% occupancy within 45 days of onboarding.",
    tags: ["Letting", "Lease Management", "Tenant Vetting"],
    stat: "100% occupancy",
  },
  {
    id: "4",
    title: "Water Treatment Plant Overhaul",
    category: "Facility Management",
    desc: "Full installation and commissioning of a new water treatment plant for a 200-unit estate in Ajah, ensuring clean and compliant water supply.",
    tags: ["Water Treatment", "Installation", "Compliance"],
    stat: "200 units",
  },
  {
    id: "5",
    title: "Corporate HQ Painting & Refurb",
    category: "Maintenance",
    desc: "Complete interior and exterior painting, carpentry, and finishing works for a 6-storey corporate headquarters on Lagos Island.",
    tags: ["Painting", "Carpentry", "Refurbishment"],
    stat: "6 storeys",
  },
  {
    id: "6",
    title: "Banana Island Property Sales",
    category: "Property Sales",
    desc: "Strategic listing, marketing, and sale of three luxury properties on Banana Island with full transaction management from valuation to completion.",
    tags: ["Property Sales", "Valuation", "Marketing"],
    stat: "3 properties",
  },
];

const categories = ["All", "Facility Management", "Property Management", "Letting & Leasing", "Maintenance", "Property Sales"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 md:py-32 w-full bg-[#040a14] overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#C9A84C]/3 rounded-full blur-[150px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-gold text-xs  tracking-[0.3em] uppercase font-medium">
                Our Work
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white leading-tight">
              Projects &{" "}
              <span className="gold-shimmer">Portfolio</span>
            </h2>
          </div>
          <p className="text-white/45  text-sm max-w-xs leading-relaxed md:text-right">
            A selection of completed projects across Lagos&apos;s most prestigious locations.
          </p>
        </div>

        {/* Filter tabs - scrollable on mobile */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-4 py-2 text-xs  font-medium rounded-sm border transition-all duration-300 ${
                active === cat
                  ? "bg-gold text-[#060d1a] border-[#C9A84C] shadow-[0_0_30px_rgba(201,168,76,0.15)]"
                  : "border-white/10 text-white/50 hover:border-[#C9A84C]/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="glass rounded-sm p-6 flex flex-col gap-4 hover:border-[#C9A84C]/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-300 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <span className="text-[10px]  tracking-[0.2em] uppercase text-[#C9A84C]/60 bg-[#C9A84C]/8 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="font-display text-xl font-bold text-gold/20 group-hover:text-[#C9A84C]/40 transition-colors">
                  {project.stat}
                </span>
              </div>

              <h3 className=" font-bold text-white text-base leading-snug group-hover:text-[#C9A84C] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-white/45  text-sm leading-relaxed flex-1">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px]  text-white/30 border border-white/10 px-2 py-0.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
