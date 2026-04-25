// "Organizations" — mirrors Caleb's FilesApp showing organizations as cards.
import { useState } from "react";
import { motion } from "framer-motion";
import { useContent } from "../../data/ContentContext";

const CATEGORIES = ["All", "Faith", "Professional", "Social", "Volunteering"];

export default function FilesApp() {
  const { organizations } = useContent();
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visible =
    filter === "All"
      ? organizations
      : organizations.filter((o) => o.category === filter);
  const selected = organizations.find((o) => o.id === selectedId);

  return (
    <div style={{ height: "100%", background: "#f2f2f7", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          padding: "18px 22px 10px",
          borderBottom: "0.5px solid rgba(60,60,67,0.12)",
          background: "white",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>
          Organizations
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                border: "none",
                fontSize: 12,
                cursor: "pointer",
                background: filter === c ? "#007AFF" : "rgba(60,60,67,0.08)",
                color: filter === c ? "white" : "#3a3a3c",
                fontWeight: 500,
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="ios-scroll" style={{ flex: 1, overflowY: "auto", padding: 22 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          {visible.map((org) => (
            <motion.button
              key={org.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedId(org.id)}
              style={{
                background: "white",
                borderRadius: 14,
                padding: 16,
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: org.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                {org.shortName.charAt(0)}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1c1c1e", lineHeight: 1.3 }}>
                {org.name}
              </div>
              <div style={{ fontSize: 12, color: "#6b6b70" }}>
                {org.role} · {org.period}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#8a8a8e",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {org.category}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedId(null)}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 50,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: 18,
              maxWidth: 540,
              width: "100%",
              padding: 28,
              maxHeight: "85%",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>{selected.name}</h2>
                <div style={{ fontSize: 13, color: "#6b6b70", marginTop: 4 }}>
                  {selected.role} · {selected.period}
                </div>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                style={{
                  border: "none",
                  background: "rgba(60,60,67,0.1)",
                  borderRadius: "50%",
                  width: 28,
                  height: 28,
                  cursor: "pointer",
                }}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "#1c1c1e", marginTop: 14 }}>
              {selected.description}
            </p>
            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: "#007AFF", textDecoration: "none" }}
              >
                Visit ↗
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
