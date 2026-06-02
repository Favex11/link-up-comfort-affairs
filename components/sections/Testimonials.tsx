"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { id: "1", name: "Adaeze Okonkwo", role: "Estate Owner", company: "Victoria Island", avatar: "AO", content: "The level of professionalism and attention to detail is unmatched. Our estate has never looked better, and every maintenance request is handled promptly. Truly a premium service.", rating: 5 },
  { id: "2", name: "Emeka Chukwudi", role: "Managing Director", company: "Chukwudi Property Holdings", avatar: "EC", content: "We've managed over 40 properties in Lagos, and this team is by far the most reliable facility management company we've worked with. Their 24/7 response is genuinely 24/7.", rating: 5 },
  { id: "3", name: "Folake Adeyemi", role: "Real Estate Investor", company: "Adeyemi Investment Group", avatar: "FA", content: "From water treatment to electrical maintenance, everything is handled under one roof. The transparency in billing and service delivery gave us complete peace of mind.", rating: 5 },
  { id: "4", name: "Babatunde Fashola", role: "Property Developer", company: "TF Real Estate, Ikoyi", avatar: "BF", content: "Our occupancy rates improved significantly after partnering for lease management. They brought in quality tenants quickly and handled all the paperwork flawlessly.", rating: 5 },
  { id: "5", name: "Ngozi Eze", role: "Facilities Manager", company: "Eze Commercial Properties", avatar: "NE", content: "The generator servicing and electrical teams are top-notch. Zero downtime since we engaged them. Highly recommended for any serious property owner in Lagos.", rating: 5 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const visible = [testimonials[current], testimonials[(current + 1) % testimonials.length]];

  return (
    <section id="testimonials" className="relative w-full overflow-hidden" style={{ background: "#080B05", padding: "clamp(64px, 12vw, 120px) 0" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />
      <div className="section-wrap relative" style={{ zIndex: 1 }}>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: "28px", height: "1px", background: "#C9A84C", flexShrink: 0 }} />
              <span className="font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "10px" }}>Client Reviews</span>
            </div>
            <h2 className="font-display font-extrabold text-white leading-tight" style={{ fontSize: "clamp(1.55rem, 4vw, 2.8rem)", letterSpacing: "-0.01em" }}>
              What Our Clients <span className="gold-shimmer">Say About Us</span>
            </h2>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {[{ fn: prev, icon: ChevronLeft }, { fn: next, icon: ChevronRight }].map(({ fn, icon: Icon }, i) => (
              <button key={i} onClick={fn}
                className="flex items-center justify-center rounded-sm border transition-all duration-300 hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
                style={{ width: "42px", height: "42px", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)" }}>
                <Icon size={17} />
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px", marginBottom: "28px" }} className="testi-grid">
          <style>{`@media(min-width:768px){.testi-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
          {visible.map((t, i) => (
            <div key={`${t.id}-${i}`} className="glass rounded-sm group hover:border-[#C9A84C]/25 transition-all duration-300"
              style={{ padding: "clamp(18px, 3vw, 28px)", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              {/* Avatar */}
              <div className="flex-shrink-0 rounded-full flex items-center justify-center font-display font-black border-2 group-hover:border-[#C9A84C]/50 transition-all"
                style={{ width: "52px", height: "52px", background: "linear-gradient(135deg, #1A2210, #141A0C)", color: "#C9A84C", fontSize: "1rem", border: "2px solid rgba(201,168,76,0.22)" }}>
                {t.avatar}
              </div>
              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 className="text-white font-bold leading-tight mb-0.5" style={{ fontSize: "clamp(0.875rem, 2vw, 0.975rem)" }}>{t.name}</h4>
                <p className="italic mb-2" style={{ color: "rgba(201,168,76,0.55)", fontSize: "clamp(0.72rem, 1.5vw, 0.8rem)" }}>
                  {t.role} — {t.company}
                </p>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={10} fill="#C9A84C" style={{ color: "#C9A84C" }} />
                  ))}
                </div>
                <p className="text-white/58 leading-relaxed" style={{ fontSize: "clamp(0.8rem, 1.7vw, 0.875rem)" }}>
                  "{t.content}"
                </p>
                <a href="#contact"
                  className="inline-flex items-center gap-1 mt-3 font-bold tracking-[0.15em] uppercase transition-colors hover:text-[#C9A84C]"
                  style={{ color: "rgba(201,168,76,0.45)", fontSize: "8px" }}>
                  Get In Touch <span style={{ fontSize: "14px", lineHeight: 1 }}>›</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: i === current ? "22px" : "7px", height: "7px", background: i === current ? "#C9A84C" : "rgba(255,255,255,0.15)" }}
              aria-label={`Go to ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
