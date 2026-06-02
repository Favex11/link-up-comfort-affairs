"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const url = `https://wa.me/2348139941504?text=${encodeURIComponent("Hello, I'd like to enquire about your property and facility management services.")}`;

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "20px", zIndex: 50, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
      {showTooltip && (
        <div style={{ position: "relative", background: "#0F130A", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px", padding: "10px 14px", maxWidth: "180px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
          <button onClick={() => setShowTooltip(false)}
            style={{ position: "absolute", top: "-8px", right: "-8px", background: "#1A2210", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "50%", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "rgba(240,244,238,0.5)" }}>
            <X size={9} />
          </button>
          <p style={{ fontSize: "11px", color: "rgba(240,244,238,0.8)", fontWeight: 600, lineHeight: 1.4, marginBottom: "2px" }}>Chat with us 👋</p>
          <p style={{ fontSize: "9px", color: "rgba(201,168,76,0.5)", fontWeight: 500 }}>Typically replies in minutes</p>
          <div style={{ position: "absolute", bottom: "-5px", right: "20px", width: "10px", height: "10px", background: "#0F130A", border: "1px solid rgba(201,168,76,0.2)", borderTop: "none", borderLeft: "none", transform: "rotate(45deg)" }} />
        </div>
      )}
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        style={{ position: "relative", width: "52px", height: "52px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 4px 20px rgba(37,211,102,0.28)", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)", textDecoration: "none" }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08) translateY(-2px)"; el.style.boxShadow = "0 8px 32px rgba(37,211,102,0.42)"; }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1) translateY(0)"; el.style.boxShadow = "0 4px 20px rgba(37,211,102,0.28)"; }}>
        <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(37,211,102,0.3)", animation: "pulse-ring 2.5s ease-out infinite" }} />
        <svg viewBox="0 0 32 32" width="24" height="24" fill="white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.695-1.813A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 01-4.9-1.28l-.36-.213-3.732.879.906-3.645-.234-.375A9.958 9.958 0 016 15c0-5.523 4.477-10 10-10zm-3.172 5.5c-.26 0-.678.097-.99.437-.31.34-1.186 1.159-1.186 2.828 0 1.67 1.213 3.28 1.382 3.508.17.228 2.368 3.773 5.832 5.148 2.88 1.14 3.465.912 4.09.856.624-.056 2.014-.823 2.3-1.617.284-.793.284-1.473.199-1.617-.085-.143-.312-.228-.652-.399-.34-.17-2.01-1.001-2.32-1.115-.312-.114-.537-.17-.763.17-.227.34-.876 1.1-1.074 1.33-.197.227-.397.255-.737.085-.34-.17-1.437-.534-2.736-1.698-1.012-.908-1.695-2.027-1.893-2.37-.198-.34-.021-.524.149-.693.153-.153.34-.4.509-.6.17-.2.227-.342.34-.57.114-.228.057-.427-.028-.597-.085-.17-.748-1.847-1.047-2.517-.27-.626-.552-.555-.763-.563z"/>
        </svg>
      </a>
    </div>
  );
}
