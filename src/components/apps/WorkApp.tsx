// "Docs" — mirrors Caleb's WorkApp: a list of experiences with details panel.
import { useState } from "react";
import { motion } from "framer-motion";
import { useContent } from "../../data/ContentContext";

export default function WorkApp() {
  const { experience } = useContent();
  const [selectedId, setSelectedId] = useState(experience[0]?.id ?? null);

  const selected = experience.find((e) => e.id === selectedId) ?? experience[0];

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
            Docs
          </div>
          <div style={{ fontSize: 12, color: "#8a8a8e", marginTop: 2 }}>
            Experience
          </div>
        </div>

        {experience.map((exp) => (
          <button
            key={exp.id}
            onClick={() => setSelectedId(exp.id)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "12px 16px",
              border: "none",
              borderTop: "0.5px solid rgba(60,60,67,0.12)",
              background:
                exp.id === selected?.id ? "rgba(0,122,255,0.08)" : "transparent",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, color: "#1c1c1e" }}>
              {exp.company}
            </div>
            <div style={{ fontSize: 12, color: "#6b6b70", marginTop: 2 }}>
              {exp.title}
            </div>
            <div style={{ fontSize: 11, color: "#8a8a8e", marginTop: 4 }}>
              {exp.period}
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
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: selected.color }} />
            <div style={{ fontSize: 12, color: "#8a8a8e", letterSpacing: 0.5, textTransform: "uppercase" }}>
              {selected.year}
            </div>
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0, letterSpacing: -0.4 }}>
            {selected.title}
          </h1>
          <h2 style={{ fontSize: 17, color: "#3a3a3c", marginTop: 4, marginBottom: 8, fontWeight: 500 }}>
            {selected.company} · {selected.period}
          </h2>
          <p style={{ fontSize: 15, color: "#1c1c1e", lineHeight: 1.55, marginTop: 8 }}>
            {selected.description}
          </p>

          {selected.achievements.length > 0 && (
            <section style={{ marginTop: 18 }}>
              <h3 style={sectionHead}>Highlights</h3>
              <ul style={{ paddingLeft: 18, margin: 0 }}>
                {selected.achievements.map((a, i) => (
                  <li key={i} style={{ fontSize: 14, color: "#1c1c1e", lineHeight: 1.55, marginBottom: 6 }}>
                    {a}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {selected.skills.length > 0 && (
            <section style={{ marginTop: 18 }}>
              <h3 style={sectionHead}>Skills</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {selected.skills.map((s) => (
                  <span key={s} style={chip}>{s}</span>
                ))}
              </div>
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

const chip: React.CSSProperties = {
  padding: "5px 11px",
  borderRadius: 999,
  background: "#eef0f3",
  fontSize: 12,
  color: "#3a3a3c",
};
