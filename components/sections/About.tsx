"use client";
import { CheckCircle2, Building2, Users, TrendingUp } from "lucide-react";

const highlights = [
  "End-to-end property and facility solutions",
  "Certified engineers and maintenance professionals",
  "Transparent reporting and client communication",
  "Long-term partnerships built on trust",
  "Serving premium estates across Lagos",
  "Rapid response times for all emergencies",
];
const stats = [
  { value: "500+", label: "Properties Managed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Available" },
];
const pillars = [
  { icon: Building2, title: "Property Excellence", desc: "Premium management of residential and commercial portfolios across Lagos Island and Mainland." },
  { icon: Users, title: "Client-First Culture", desc: "Every decision is guided by our clients' long-term interests, satisfaction, and investment growth." },
  { icon: TrendingUp, title: "Value Creation", desc: "We protect and grow the value of your property through proactive maintenance and strategic management." },
];

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden" style={{ background: "#080B05", padding: "clamp(64px, 12vw, 120px) 0" }}>
      <div className="absolute top-0 left-0 rounded-full pointer-events-none" style={{ width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)", filter: "blur(80px)", transform: "translate(-40%,-40%)" }} />
      <div className="section-wrap">
        <div className="section-label"><span>About Us</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }} className="about-grid">
          <style>{`@media(min-width:1024px){.about-grid{grid-template-columns:1fr 1fr!important;gap:80px!important}}`}</style>

          {/* Left */}
          <div>
            <h2 className="font-display font-extrabold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(1.55rem, 4vw, 2.8rem)", letterSpacing: "-0.01em" }}>
              Lagos's Most Trusted Property &{" "}
              <span className="gold-shimmer">Facility Management</span> Partner
            </h2>
            <p className="text-white/58 leading-relaxed mb-4" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
              We are a full-service property and facility management company dedicated to delivering exceptional results for property owners, real estate investors, corporate estates, and homeowners across Lagos.
            </p>
            <p className="text-white/58 leading-relaxed mb-8" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
              From sourcing the right tenants to maintaining every inch of your facility, we bring professionalism, reliability, and meticulous attention to detail to every engagement. We don't just manage properties — we build lasting partnerships grounded in transparency and measurable results.
            </p>

            <ul style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px", marginBottom: "32px" }} className="highlights-grid">
              <style>{`@media(min-width:480px){.highlights-grid{grid-template-columns:1fr 1fr!important}}`}</style>
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "3px" }} />
                  <span className="text-white/62 leading-snug" style={{ fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact"
              className="inline-flex items-center gap-2 font-black tracking-[0.15em] uppercase rounded-sm hover:bg-[#E8D080] hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: "#C9A84C", color: "#080B05", padding: "13px 24px", fontSize: "10px", boxShadow: "0 0 28px rgba(201,168,76,0.18)" }}>
              Work With Us
            </a>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-sm group hover:border-[#C9A84C]/30 transition-all duration-300"
                  style={{ padding: "20px 18px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span className="font-display font-black text-[#C9A84C] group-hover:scale-105 transition-transform origin-left"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2.1rem)", lineHeight: 1 }}>
                    {stat.value}
                  </span>
                  <span className="font-semibold tracking-wider uppercase" style={{ color: "rgba(240,244,238,0.38)", fontSize: "8px" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-sm group hover:border-[#C9A84C]/22 transition-all duration-300"
                style={{ padding: "18px", display: "flex", gap: "14px" }}>
                <div className="rounded-sm group-hover:bg-[#6B7A3E]/25 transition-colors flex-shrink-0"
                  style={{ width: "40px", height: "40px", background: "rgba(107,122,62,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} style={{ color: "#C9A84C" }} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1.5" style={{ fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)" }}>{title}</h4>
                  <p className="text-white/48 leading-relaxed" style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.875rem)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
