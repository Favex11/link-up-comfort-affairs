"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const InstagramIcon = (_p: { size?: number; className?: string }) => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
const LinkedInIcon = (_p: { size?: number; className?: string }) => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const FacebookIcon = (_p: { size?: number; className?: string }) => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const XIcon = (_p: { size?: number; className?: string }) => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;

const quickLinks = ["About", "Services", "Why Us", "Properties", "Testimonials", "Contact"];
const services = ["Property Letting", "Lease Management", "Property Sales", "Water Treatment", "Swimming Pool", "Generator Servicing", "Cleaning Services", "Security Services", "Electrical Services"];
const socials = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: FacebookIcon, href: "https://www.facebook.com/linkupcomfortaffairs", label: "Facebook" },
  { icon: XIcon, href: "#", label: "X" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative w-full overflow-hidden" style={{ background: "#060905", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="section-wrap" style={{ padding: "clamp(48px, 8vw, 80px) 22px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }} className="footer-grid">
          <style>{`@media(min-width:640px){.footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important}}@media(min-width:1024px){.footer-grid{grid-template-columns:2fr 1fr 1fr 1.5fr!important;gap:40px!important}}`}</style>

          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="font-display font-black text-white" style={{ fontSize: "clamp(1.3rem, 3vw, 1.7rem)" }}>
                Link Up <span style={{ color: "#C9A84C" }}>Comfort</span> Affairs
              </span>
              <span className="font-semibold tracking-[0.3em] uppercase mt-1" style={{ fontSize: "7px", color: "rgba(201,168,76,0.5)" }}>
                Managing Excellence. Delivering Comfort.
              </span>
            </div>
            <p className="leading-relaxed mb-6" style={{ color: "rgba(240,244,238,0.42)", fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)" }}>
              Lagos's premier property and facility management company, delivering excellence, reliability, and long-term value for estates, businesses, and homeowners.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target={href !== "#" ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
                  className="flex items-center justify-center rounded-sm transition-all duration-300"
                  style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(240,244,238,0.45)" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#C9A84C"; el.style.borderColor = "rgba(201,168,76,0.35)"; el.style.background = "rgba(201,168,76,0.05)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(240,244,238,0.45)"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.background = "rgba(255,255,255,0.05)"; }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold tracking-wide mb-5" style={{ color: "#C9A84C", fontSize: "13px" }}>Quick Links</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 transition-colors duration-200 group"
                    style={{ color: "rgba(240,244,238,0.45)", fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C9A84C"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(240,244,238,0.45)"}>
                    <span style={{ width: "12px", height: "1px", background: "rgba(201,168,76,0.3)", flexShrink: 0, transition: "width 0.3s" }} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold tracking-wide mb-5" style={{ color: "#C9A84C", fontSize: "13px" }}>Our Services</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {services.map(service => (
                <li key={service}>
                  <a href="#services"
                    className="flex items-center gap-2 transition-colors duration-200"
                    style={{ color: "rgba(240,244,238,0.45)", fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C9A84C"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(240,244,238,0.45)"}>
                    <span style={{ width: "12px", height: "1px", background: "rgba(201,168,76,0.3)", flexShrink: 0 }} />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold tracking-wide mb-5" style={{ color: "#C9A84C", fontSize: "13px" }}>Contact Us</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <li className="flex gap-3">
                <MapPin size={14} style={{ color: "#C9A84C", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "rgba(240,244,238,0.45)", fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)", lineHeight: 1.7 }}>
                  11, Biaduo Street, Off Keffi Street,<br />Ikoyi S/W, Lagos, Nigeria
                </span>
              </li>
              <li>
                <a href="tel:+2348139941504" className="flex gap-3 transition-colors" style={{ color: "rgba(240,244,238,0.45)", fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C9A84C"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(240,244,238,0.45)"}>
                  <Phone size={14} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }} />
                  +234 813 994 1504
                </a>
              </li>
              <li>
                <a href="tel:+2347043118228" className="flex gap-3 transition-colors" style={{ color: "rgba(240,244,238,0.45)", fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C9A84C"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(240,244,238,0.45)"}>
                  <Phone size={14} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }} />
                  +234 704 311 8228
                </a>
              </li>
              <li>
                <a href="mailto:linkupcomfortaffairs@gmail.com" className="flex gap-3 transition-colors" style={{ color: "rgba(240,244,238,0.45)", fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C9A84C"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(240,244,238,0.45)"}>
                  <Mail size={14} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ wordBreak: "break-all" }}>linkupcomfortaffairs@gmail.com</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={14} style={{ color: "#C9A84C", marginTop: "2px", flexShrink: 0 }} />
                <div style={{ color: "rgba(240,244,238,0.45)", fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)", lineHeight: 1.7 }}>
                  <p>Mon – Fri: 8AM – 6PM</p>
                  <p>Saturday: 9AM – 3PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-12 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ color: "rgba(240,244,238,0.25)", fontSize: "11px", textAlign: "center" }}>
            © {year} Link Up Comfort Affairs. All rights reserved.
          </p>
          <p style={{ color: "rgba(240,244,238,0.18)", fontSize: "11px" }}>
            Designed by{" "}
            <a href="https://favexstudio.netlify.app" target="_blank" rel="noopener noreferrer"
              style={{ color: "rgba(201,168,76,0.38)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C9A84C"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(201,168,76,0.38)"}>
              Favex Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
