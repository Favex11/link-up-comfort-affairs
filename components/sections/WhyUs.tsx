const items = [
  { title: "Experienced Professionals", desc: "Our team brings decades of combined experience in property management, engineering, and facility operations across Lagos's most prestigious estates.", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", num: "01" },
  { title: "Reliable Maintenance", desc: "Scheduled and reactive maintenance delivered on time, every time. We prevent problems before they escalate and resolve issues with speed and precision.", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80", num: "02" },
  { title: "24/7 Support", desc: "Emergencies don't keep business hours. Our dedicated support team is available around the clock for urgent maintenance and property management needs.", image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=600&q=80", num: "03" },
  { title: "Transparent Delivery", desc: "Detailed service reports, clear billing, and regular updates. You always know what work was done, when, and what it cost — no surprises.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", num: "04" },
  { title: "Premium Standards", desc: "We work exclusively with certified professionals and high-quality materials. Every service delivered meets the standards expected by elite property owners.", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80", num: "05" },
  { title: "Cost Efficiency", desc: "Comprehensive facility management at a single cost beats managing multiple vendors. We reduce operational overhead while elevating service quality.", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80", num: "06" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative w-full overflow-hidden" style={{ background: "#080B05", padding: "clamp(64px, 12vw, 120px) 0" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(107,122,62,0.04) 0%, transparent 70%)" }} />
      <div className="section-wrap relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-12" style={{ maxWidth: "560px", margin: "0 auto clamp(40px, 7vw, 72px)" }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div style={{ width: "28px", height: "1px", background: "#C9A84C" }} />
            <span className="font-bold tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "10px" }}>Why Choose Us</span>
            <div style={{ width: "28px", height: "1px", background: "#C9A84C" }} />
          </div>
          <h2 className="font-display font-extrabold text-white leading-tight mb-4" style={{ fontSize: "clamp(1.55rem, 4vw, 2.8rem)", letterSpacing: "-0.01em" }}>
            The Standard of <span className="gold-shimmer">Excellence</span> You Deserve
          </h2>
          <p className="text-white/55 leading-relaxed" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
            We combine deep industry expertise with genuine commitment to client success — delivering results that protect, grow, and maximize every property we manage.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px", marginBottom: "clamp(36px, 6vw, 56px)" }} className="why-grid">
          <style>{`@media(min-width:540px){.why-grid{grid-template-columns:repeat(2,1fr)!important}}@media(min-width:1024px){.why-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
          {items.map((item) => (
            <div key={item.title} className="group relative rounded-sm overflow-hidden border border-[#C9A84C]/8 hover:border-[#C9A84C]/35 hover:-translate-y-1 transition-all duration-500" style={{ height: "clamp(220px, 28vw, 300px)" }}>
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,11,5,0.97) 0%, rgba(8,11,5,0.6) 50%, rgba(8,11,5,0.15) 100%)" }} />
              <span className="absolute top-3 right-4 font-display font-black select-none" style={{ color: "rgba(255,255,255,0.07)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}>{item.num}</span>
              <div className="absolute bottom-0 left-0 right-0" style={{ padding: "16px" }}>
                <div style={{ width: "20px", height: "1px", background: "#C9A84C", marginBottom: "8px" }} />
                <h3 className="font-display font-bold text-white group-hover:text-[#C9A84C] transition-colors duration-300" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
                  {item.title}
                </h3>
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-24 mt-1">
                  <p className="text-white/62 leading-relaxed" style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.825rem)" }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border-[#C9A84C]/15"
          style={{ padding: "clamp(24px, 4vw, 40px)" }}>
          <div style={{ flex: 1 }}>
            <p className="font-display font-extrabold text-white mb-2 leading-tight" style={{ fontSize: "clamp(1.2rem, 3vw, 1.9rem)" }}>
              Ready to Experience the Difference?
            </p>
            <p className="text-white/48 leading-relaxed" style={{ fontSize: "clamp(0.825rem, 1.8vw, 0.95rem)" }}>
              Join 500+ satisfied property owners who trust Link Up Comfort Affairs with their most valuable assets.
            </p>
          </div>
          <a href="#contact"
            className="flex-shrink-0 font-black tracking-[0.15em] uppercase rounded-sm hover:bg-[#E8D080] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            style={{ background: "#C9A84C", color: "#080B05", padding: "13px 24px", fontSize: "10px", boxShadow: "0 0 28px rgba(201,168,76,0.18)" }}>
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
