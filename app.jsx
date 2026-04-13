import { useState, useEffect, useRef } from "react";

const THEMES = {
  light: {
    bg: "#F0F4FF", surface: "#FFFFFF", card: "#FFFFFF", cardHover: "#F8FAFF",
    border: "rgba(0,0,0,0.08)", borderGlow: "rgba(79,158,248,0.3)",
    text: "#0D1425", textMuted: "#556080", textFaint: "#9AAAC5",
    accent: "#2B7FE0", accentGlow: "rgba(43,127,224,0.15)",
    green: "#059669", red: "#DC2626", amber: "#D97706", purple: "#7C3AED", teal: "#0D9488", pink: "#DB2777",
    gradient1: "linear-gradient(135deg, #E0EDFF 0%, #C7DCFF 100%)",
    sidebarBg: "#FFFFFF", glass: "rgba(255,255,255,0.9)",
  },
  dark: {
    bg: "#0A0E1A", surface: "#111827", card: "#1A2236", cardHover: "#1E2A40",
    border: "rgba(255,255,255,0.07)", borderGlow: "rgba(99,179,237,0.3)",
    text: "#F0F4FF", textMuted: "#8899BB", textFaint: "#4A5A7A",
    accent: "#4F9EF8", accentGlow: "rgba(79,158,248,0.2)",
    green: "#34D399", red: "#F87171", amber: "#FBBF24", purple: "#A78BFA", teal: "#2DD4BF", pink: "#F472B6",
    gradient1: "linear-gradient(135deg, #1E3A5F 0%, #0D2137 100%)",
    sidebarBg: "#0D1425", glass: "rgba(17,24,39,0.8)",
  },
};

const CATEGORIES = ["Food","Travel","Shopping","Bills","Health","Entertainment","Others"];

function fullINR(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

function today() {
  return new Date().toISOString().split("T")[0];
}

// Example Component
function Card({ children, style, onClick, hover, t }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov && hover ? t.cardHover : t.card,
        border: `1px solid ${t.border}`,
        borderRadius: 16,
        padding: 20,
        transition: "all 0.2s",
        cursor: onClick ? "pointer" : "default",
        ...style
      }}
    >
      {children}
    </div>
  );
}

export default Card;
