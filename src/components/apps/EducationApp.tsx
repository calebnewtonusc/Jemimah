// Mirrors Caleb's EducationApp: timeline of schools with details panel.
import { useState } from "react";
import { motion } from "framer-motion";
import { useContent } from "../../data/ContentContext";

export default function EducationApp() {
  const { education } = useContent();
  const [selectedId, setSelectedId] = useState(education[0]?.id ?? null);
  const selected = education.find((e) => e.id === selectedId) ?? education[0];

  return (
    <div style={{ display: "flex", height: "100%", background: "#f2f2f7" }}>
      <div
        className="ios-scroll"
        style={{
          width: 280,
          flexShrink: 0,
          borderRight: "0.5px solid rgba(60,60,67,0.18)",
          overflowY: "auto",
          background: "white",
        }}
      >
        <div style={{ padding: "16px 16px 8px" }}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>
            Education
          </div>
          <div style={{ fontSize: 12, color: "#8a8a8e", marginTop: 2 }}>
            Schools & programs
          </div>
        </div>

        {education.map((edu) => (
          <button
            key={edu.id}
            onClick={() => setSelectedId(edu.id)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "12px 16px",
              border: "none",
              borderTop: "0.5px solid rgba(60,60,67,0.12)",
              background: edu.id === selected?.id ? "rgba(0,122,255,0.08)" : "transparent",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, color: "#1c1c1e" }}>
              {edu.school}
            </div>
            <div style={{ fontSize: 12, color: "#6b6b70", marginTop: 2 }}>
              {edu.degree}
            </div>
            <div style={{ fontSize: 11, color: "#8a8a8e", marginTop: 4 }}>
              {edu.period}
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="ios-scroll"
          style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: selected.color }} />
            <div style={{ fontSize: 12, color: "#8a8a8e", letterSpacing: 0.5, textTransform: "uppercase" }}>
              {selected.status}
            </div>
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0, letterSpacing: -0.4 }}>
            {selected.school}
          </h1>
          {selected.subtitle && (
            <div style={{ fontSize: 14, color: "#6b6b70", marginTop: 4 }}>
              {selected.subtitle}
            </div>
          )}
          <h2 style={{ fontSize: 16, color: "#3a3a3c", marginTop: 6, marginBottom: 8, fontWeight: 500 }}>
            {selected.degree} · {selected.period}
          </h2>
          <p style={{ fontSize: 15, color: "#1c1c1e", lineHeight: 1.55, marginTop: 8 }}>
            {selected.description}
          </p>

          {selected.highlights.length > 0 && (
            <section style={{ marginTop: 18 }}>
              <h3 style={sectionHead}>Highlights</h3>
              <ul style={{ paddingLeft: 18, margin: 0 }}>
                {selected.highlights.map((h, i) => (
                  <li key={i} style={{ fontSize: 14, color: "#1c1c1e", lineHeight: 1.55, marginBottom: 6 }}>
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {selected.website && (
            <a
              href={selected.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 20,
                fontSize: 13,
                color: "#007AFF",
                textDecoration: "none",
              }}
            >
              Visit website ↗
            </a>
          )}
        </motion.div>
      )}
    </div>
  );
}

const sectionHead: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: 0.5,
  textTransform: "uppercase",
  color: "#8a8a8e",
  marginBottom: 8,
  marginTop: 0,
};
