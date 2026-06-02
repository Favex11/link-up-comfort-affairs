"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Properties Managed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: "24/7", suffix: "", label: "Support Available" },
];

function CountUp({ target, suffix }: { target: number | string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (typeof target === "string") return;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const timer = setInterval(() => {
          current += (target as number) / 60;
          if (current >= (target as number)) { current = target as number; clearInterval(timer); }
          setCount(Math.floor(current));
        }, 2000 / 60);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{typeof target === "string" ? target : count}{suffix}</span>;
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#080B05]" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(107,122,62,0.07) 0%, transparent 60%), linear-gradient(160deg, #0F130A 0%, #080B05 60%)" }} />
        <div className="absolute top-0 right-0 rounded-full" style={{ width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", filter: "blur(80px)", transform: "translate(20%, -20%)" }} />
        <div className="absolute bottom-0 left-0 rounded-full" style={{ width: "45vw", height: "45vw", background: "radial-gradient(circle, rgba(107,122,62,0.06) 0%, transparent 70%)", filter: "blur(80px)", transform: "translate(-20%, 20%)" }} />
        <div className="absolute inset-0" style={{ opacity: 0.015, backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      </div>

      <div className="section-wrap relative w-full" style={{ zIndex: 1, paddingTop: "clamp(100px, 18vw, 160px)", paddingBottom: "clamp(60px, 10vw, 100px)" }}>
        <div style={{ maxWidth: "760px" }}>

          {/* Badge */}
          <div className={`inline-flex items-center gap-2.5 mb-7 rounded-full border border-[#C9A84C]/20 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ background: "rgba(201,168,76,0.05)", padding: "7px 14px", backdropFilter: "blur(8px)" }}>
            <span className="rounded-full bg-[#C9A84C] animate-glow flex-shrink-0" style={{ width: "7px", height: "7px" }} />
            <span className="font-bold tracking-[0.18em] uppercase" style={{ color: "#C9A84C", fontSize: "9px" }}>
              Lagos's Premier Property & Facility Management
            </span>
          </div>

          {/* Headline */}
          <h1 className={`font-display font-black text-white mb-5 transition-all duration-700 delay-150 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ fontSize: "clamp(1.9rem, 5.5vw, 4.8rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            Premium Property<br />
            & <span className="gold-shimmer">Facility Management</span><br />
            <em style={{ fontStyle: "italic", color: "rgba(240,244,238,0.8)", fontWeight: 700 }}>Solutions.</em>
          </h1>

          {/* Divider */}
          <div className={`flex items-center gap-3 mb-5 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div style={{ width: "36px", height: "1px", background: "linear-gradient(to right, #C9A84C, transparent)", flexShrink: 0 }} />
            <span className="font-bold tracking-[0.25em] uppercase" style={{ color: "rgba(201,168,76,0.45)", fontSize: "8px" }}>Excellence Since 2009</span>
          </div>

          {/* Sub */}
          <p className={`text-white/55 font-light leading-relaxed mb-9 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ fontSize: "clamp(0.875rem, 2vw, 1.05rem)", maxWidth: "520px" }}>
            Professional property management, facility maintenance, leasing, and technical support — delivered with precision, reliability, and long-term value.
          </p>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 mb-11 transition-all duration-700 delay-[380ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <a href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 font-black tracking-[0.15em] uppercase rounded-sm hover:bg-[#E8D080] hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: "#C9A84C", color: "#080B05", padding: "14px 26px", fontSize: "10px", boxShadow: "0 0 36px rgba(201,168,76,0.22)" }}>
              Get Free Consultation
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services"
              className="inline-flex items-center justify-center gap-2 font-bold tracking-[0.15em] uppercase rounded-sm hover:-translate-y-0.5 transition-all duration-300"
              style={{ border: "1px solid rgba(107,122,62,0.45)", color: "rgba(138,155,78,0.9)", padding: "14px 26px", fontSize: "10px" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(201,168,76,0.6)"; el.style.color = "#C9A84C"; el.style.background = "rgba(201,168,76,0.05)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(107,122,62,0.45)"; el.style.color = "rgba(138,155,78,0.9)"; el.style.background = "transparent"; }}>
              Explore Services
            </a>
          </div>

          {/* Trust */}
          <div className={`flex flex-wrap gap-5 mb-12 transition-all duration-700 delay-[460ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            {[{ icon: Shield, text: "Licensed & Certified" }, { icon: Award, text: "Award-Winning" }, { icon: Clock, text: "24/7 Support" }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2" style={{ color: "rgba(240,244,238,0.28)" }}>
                <Icon size={12} style={{ color: "#6B7A3E", flexShrink: 0 }} />
                <span className="font-semibold tracking-wider uppercase" style={{ fontSize: "9px" }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className={`rounded-sm overflow-hidden transition-all duration-700 delay-[540ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(201,168,76,0.08)" }}>
            <style>{`@media(min-width:480px){.stats-hero{grid-template-columns:repeat(4,1fr)!important}}`}</style>
            <div className="stats-hero" style={{ display: "contents" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="group hover:bg-[#6B7A3E]/6 transition-colors duration-400 cursor-default"
                  style={{ background: "#080B05", padding: "20px 16px", display: "flex", flexDirection: "column", gap: "5px" }}>
                  <span className="font-display font-black group-hover:scale-105 transition-transform duration-300 origin-left inline-block"
                    style={{ color: "#C9A84C", fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)", lineHeight: 1 }}>
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="font-semibold tracking-wider uppercase" style={{ color: "rgba(240,244,238,0.32)", fontSize: "8px" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.12)", zIndex: 1 }}>
        <span className="font-bold tracking-[0.4em] uppercase" style={{ fontSize: "7px" }}>Scroll</span>
        <div className="w-px animate-glow" style={{ height: "28px", background: "linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)" }} />
      </div>
    </section>
  );
}
