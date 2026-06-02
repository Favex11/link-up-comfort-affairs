"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema } from "@/lib/validation";

const services = ["Property Letting","Lease Management","Property Sales","Water Treatment Plant","Swimming Pool Maintenance","Generator Servicing","Sewage Disposal","Refuse Disposal","Cleaning Services","Security Services","Plumbing Services","Carpentry Services","Electrical Services","Painting Services","Other / General Enquiry"];

const contactCards = [
  { icon: MapPin, title: "Head Office", lines: ["11, Biaduo Street, Off Keffi Street,", "Ikoyi S/W, Lagos, Nigeria"], action: null },
  { icon: Phone, title: "Phone Numbers", lines: ["+234 813 994 1504", "+234 704 311 8228"], action: "tel" },
  { icon: Mail, title: "Email Address", lines: ["linkupcomfortaffairs@gmail.com"], action: "mailto" },
  { icon: Clock, title: "Business Hours", lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Saturday: 9:00 AM – 3:00 PM", "Sunday: Closed"], action: null },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormState>("idle");
  const [serverMsg, setServerMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => { const n = { ...p }; delete n[name]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = contactFormSchema.safeParse(form);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.issues.forEach(err => { if (err.path[0]) fe[err.path[0] as string] = err.message; });
      setErrors(fe);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok) { setStatus("success"); setServerMsg(data.message); setForm({ fullName: "", email: "", phone: "", service: "", message: "" }); }
      else { setStatus("error"); setServerMsg(data.error || "Something went wrong."); }
    } catch { setStatus("error"); setServerMsg("Network error. Please try again."); }
  };

  const inputCls = (field: string) =>
    `w-full rounded-sm text-white placeholder-white/22 focus:outline-none transition-all duration-300 ${errors[field] ? "border-red-500/50 focus:border-red-400" : "border-[#3D4A28]/55 focus:border-[#6B7A3E]"}`;

  const inputStyle = { background: "#141A0C", border: "1px solid", padding: "13px 16px", fontSize: "clamp(0.85rem, 1.8vw, 0.925rem)" };

  return (
    <section id="contact" className="relative w-full overflow-hidden" style={{ background: "#0A0E05", padding: "clamp(64px, 12vw, 120px) 0" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none" style={{ width: "60vw", height: "30vh", background: "radial-gradient(ellipse, rgba(107,122,62,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="section-wrap relative" style={{ zIndex: 1 }}>

        {/* Header */}
        <div className="text-center mb-12" style={{ maxWidth: "560px", margin: "0 auto clamp(40px, 7vw, 64px)" }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div style={{ width: "28px", height: "1px", background: "#C9A84C" }} />
            <span className="font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "10px" }}>Get in Touch</span>
            <div style={{ width: "28px", height: "1px", background: "#C9A84C" }} />
          </div>
          <h2 className="font-display font-extrabold text-white leading-tight mb-4" style={{ fontSize: "clamp(1.55rem, 4vw, 2.8rem)", letterSpacing: "-0.01em" }}>
            Need Reliable Property & <span className="gold-shimmer">Facility Management?</span>
          </h2>
          <p className="text-white/52 leading-relaxed" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
            Speak with our team today. We'll respond within 24 hours.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }} className="contact-grid">
          <style>{`@media(min-width:1024px){.contact-grid{grid-template-columns:2fr 3fr!important;gap:32px!important}}`}</style>

          {/* Left — Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {contactCards.map(({ icon: Icon, title, lines, action }) => (
              <div key={title} className="glass rounded-sm group hover:border-[#6B7A3E]/38 transition-all duration-300"
                style={{ padding: "16px 18px", display: "flex", gap: "14px" }}>
                <div className="rounded-sm flex-shrink-0 flex items-center justify-center group-hover:bg-[#6B7A3E]/25 transition-colors"
                  style={{ width: "40px", height: "40px", background: "rgba(107,122,62,0.14)" }}>
                  <Icon size={16} style={{ color: "#C9A84C" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p className="font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#8A9B4E", fontSize: "9px" }}>{title}</p>
                  {lines.map(line =>
                    action === "tel" ? (
                      <a key={line} href={`tel:${line.replace(/\s+/g, "")}`} className="block font-medium hover:text-[#C9A84C] transition-colors mb-0.5" style={{ color: "rgba(240,244,238,0.62)", fontSize: "clamp(0.825rem, 1.8vw, 0.9rem)" }}>{line}</a>
                    ) : action === "mailto" ? (
                      <a key={line} href={`mailto:${line}`} className="block font-medium hover:text-[#C9A84C] transition-colors truncate" style={{ color: "rgba(240,244,238,0.62)", fontSize: "clamp(0.825rem, 1.8vw, 0.9rem)" }}>{line}</a>
                    ) : (
                      <p key={line} style={{ color: "rgba(240,244,238,0.48)", fontSize: "clamp(0.825rem, 1.8vw, 0.9rem)" }}>{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}
            {/* Map */}
            <div className="glass rounded-sm overflow-hidden flex-shrink-0" style={{ height: "160px" }}>
              <iframe src="https://maps.google.com/maps?q=Ikoyi+Lagos+Nigeria&output=embed" className="w-full h-full" style={{ opacity: 0.75 }} loading="lazy" title="Office Location" />
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass rounded-sm" style={{ padding: "clamp(20px, 4vw, 36px)" }}>
            <h3 className="font-display font-extrabold text-white mb-2 leading-tight" style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.6rem)" }}>
              Request a Free Consultation
            </h3>
            <p style={{ color: "rgba(240,244,238,0.32)", fontSize: "clamp(0.825rem, 1.8vw, 0.9rem)", marginBottom: "24px" }}>
              Fill in your details and our team will contact you within 24 hours.
            </p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 text-center" style={{ padding: "48px 0" }}>
                <CheckCircle size={48} style={{ color: "#8A9B4E" }} />
                <p className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}>Request Received!</p>
                <p style={{ color: "rgba(240,244,238,0.45)", fontSize: "clamp(0.825rem, 1.8vw, 0.9rem)", maxWidth: "320px", lineHeight: 1.7 }}>{serverMsg}</p>
                <button onClick={() => setStatus("idle")} className="font-bold tracking-[0.15em] uppercase rounded-sm hover:bg-[#6B7A3E]/10 transition-colors"
                  style={{ color: "#C9A84C", border: "1px solid rgba(107,122,62,0.38)", padding: "11px 22px", fontSize: "9px", marginTop: "8px" }}>
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }} className="form-row-1">
                  <style>{`@media(min-width:480px){.form-row-1{grid-template-columns:1fr 1fr!important}}`}</style>
                  <div>
                    <label className="block font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(240,244,238,0.42)", fontSize: "9px" }}>Full Name *</label>
                    <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="e.g. Adaeze Okonkwo" className={inputCls("fullName")} style={inputStyle} />
                    {errors.fullName && <p className="text-red-400 mt-1.5" style={{ fontSize: "11px" }}>{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(240,244,238,0.42)", fontSize: "9px" }}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputCls("email")} style={inputStyle} />
                    {errors.email && <p className="text-red-400 mt-1.5" style={{ fontSize: "11px" }}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }} className="form-row-2">
                  <style>{`@media(min-width:480px){.form-row-2{grid-template-columns:1fr 1fr!important}}`}</style>
                  <div>
                    <label className="block font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(240,244,238,0.42)", fontSize: "9px" }}>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" className={inputCls("phone")} style={inputStyle} />
                    {errors.phone && <p className="text-red-400 mt-1.5" style={{ fontSize: "11px" }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(240,244,238,0.42)", fontSize: "9px" }}>Service Needed *</label>
                    <select name="service" value={form.service} onChange={handleChange} className={inputCls("service")}
                      style={{ ...inputStyle, color: form.service ? "#f0f4ee" : "rgba(240,244,238,0.22)" }}>
                      <option value="" disabled style={{ background: "#141A0C", color: "rgba(240,244,238,0.4)" }}>Select a service</option>
                      {services.map(s => <option key={s} value={s} style={{ background: "#141A0C", color: "#f0f4ee" }}>{s}</option>)}
                    </select>
                    {errors.service && <p className="text-red-400 mt-1.5" style={{ fontSize: "11px" }}>{errors.service}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(240,244,238,0.42)", fontSize: "9px" }}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about your property and management needs..."
                    className={inputCls("message")} style={{ ...inputStyle, resize: "none" }} />
                  {errors.message && <p className="text-red-400 mt-1.5" style={{ fontSize: "11px" }}>{errors.message}</p>}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2.5 rounded-sm" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)", padding: "12px 14px" }}>
                    <AlertCircle size={15} style={{ color: "#f87171", flexShrink: 0 }} />
                    <p style={{ color: "#fca5a5", fontSize: "clamp(0.825rem, 1.8vw, 0.9rem)" }}>{serverMsg}</p>
                  </div>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="flex items-center justify-center gap-2.5 font-black tracking-[0.15em] uppercase rounded-sm hover:bg-[#E8D080] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "#C9A84C", color: "#080B05", padding: "14px 24px", fontSize: "10px", boxShadow: "0 0 28px rgba(201,168,76,0.18)" }}>
                  {status === "loading" ? (
                    <><span className="w-4 h-4 rounded-full animate-spin" style={{ border: "2px solid rgba(8,11,5,0.25)", borderTop: "2px solid #080B05" }} />Sending...</>
                  ) : (
                    <><Send size={13} />Submit Request — Free</>
                  )}
                </button>

                <p className="text-center font-medium" style={{ color: "rgba(240,244,238,0.18)", fontSize: "10px" }}>
                  Your information is secure and will never be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
