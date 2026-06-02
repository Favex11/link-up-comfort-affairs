"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Properties", href: "#properties" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 border-b border-[#C9A84C]/8" : "py-5"}`}
        style={{ background: scrolled ? "rgba(8,11,5,0.95)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none" }}>
        <div className="section-wrap flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none flex-shrink-0">
            <span className="font-display font-black text-white" style={{ fontSize: "clamp(1.1rem, 4vw, 1.6rem)", lineHeight: 1.1 }}>
              Link Up <span style={{ color: "#C9A84C" }}>Comfort</span> Affairs
            </span>
            <span className="font-semibold tracking-[0.3em] uppercase mt-0.5" style={{ fontSize: "7px", color: "rgba(201,168,76,0.5)" }}>
              Managing Excellence. Delivering Comfort.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-white/60 hover:text-[#C9A84C] transition-colors duration-300 font-semibold tracking-[0.12em] uppercase"
                style={{ fontSize: "11px" }}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a href="tel:+2348139941504" className="flex items-center gap-2 font-medium transition-colors"
              style={{ color: "rgba(201,168,76,0.7)", fontSize: "12px" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C9A84C"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(201,168,76,0.7)"}>
              <Phone size={13} /> +234 813 994 1504
            </a>
            <a href="#contact"
              className="font-black tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "#C9A84C", color: "#080B05", padding: "10px 20px", fontSize: "10px", boxShadow: "0 0 24px rgba(201,168,76,0.2)" }}>
              Get Consultation
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-white hover:text-[#C9A84C] transition-colors flex-shrink-0"
            aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[99] lg:hidden transition-opacity duration-400 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }} />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 z-[100] lg:hidden flex flex-col transition-transform duration-450 ease-out overflow-y-auto`}
        style={{
          width: "min(82vw, 320px)",
          background: "#0F130A",
          borderLeft: "1px solid rgba(201,168,76,0.12)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        }}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#C9A84C]/8 flex-shrink-0">
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-white" style={{ fontSize: "1.1rem" }}>
              Link Up <span style={{ color: "#C9A84C" }}>Comfort</span> Affairs
            </span>
            <span style={{ fontSize: "7px", letterSpacing: "0.3em", color: "rgba(201,168,76,0.45)", textTransform: "uppercase", fontWeight: 600 }}>
              Managing Excellence. Delivering Comfort.
            </span>
          </div>
          <button onClick={() => setMenuOpen(false)} className="p-1.5 text-white/50 hover:text-[#C9A84C] transition-colors flex-shrink-0">
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col flex-1 p-5 gap-0.5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-4 px-3 text-white/70 hover:text-[#C9A84C] border-b border-white/4 font-semibold tracking-[0.1em] uppercase transition-colors duration-200"
              style={{ fontSize: "13px" }}>
              {link.label}
              <span style={{ color: "rgba(201,168,76,0.35)", fontSize: "18px", lineHeight: 1 }}>›</span>
            </a>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-5 border-t border-[#C9A84C]/8 flex flex-col gap-3 flex-shrink-0">
          <a href="tel:+2348139941504"
            className="flex items-center gap-3 py-3 px-4 rounded-sm text-white/60 font-medium transition-colors"
            style={{ background: "rgba(255,255,255,0.04)", fontSize: "13px" }}>
            <Phone size={14} style={{ color: "#C9A84C", flexShrink: 0 }} />
            +234 813 994 1504
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="block text-center font-black tracking-[0.15em] uppercase rounded-sm transition-colors"
            style={{ background: "#C9A84C", color: "#080B05", padding: "14px 16px", fontSize: "10px" }}>
            Book Free Consultation
          </a>
        </div>
      </div>
    </>
  );
}
