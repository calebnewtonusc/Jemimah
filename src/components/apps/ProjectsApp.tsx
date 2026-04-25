// "Ideas" — mirrors Caleb's projects screen: a grid of project cards.
import { motion } from "framer-motion";
import { useContent } from "../../data/ContentContext";

export default function ProjectsApp() {
  const { projects } = useContent();

  return (
    <div style={{ height: "100%", background: "#fffaf2", color: "#1c1c1e" }}>
      <div
        style={{
          padding: "20px 22px",
          borderBottom: "0.5px solid rgba(60,60,67,0.12)",
          background: "white",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>Ideas</div>
        <div style={{ fontSize: 12, color: "#8a8a8e", marginTop: 2 }}>
          Things in the works · placeholder list
        </div>
      </div>

      <div
        className="ios-scroll"
        style={{ height: "calc(100% - 70px)", overflowY: "auto", padding: 22 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {projects.map((p) => (
            <motion.a
              key={p.id}
              href={p.live === "#" ? undefined : p.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={p.comingSoon ? {} : { y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: p.color,
                color: "white",
                borderRadius: 14,
                padding: 18,
                aspectRatio: "1 / 1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textDecoration: "none",
                cursor: p.comingSoon ? "default" : "pointer",
                opacity: p.comingSoon ? 0.65 : 1,
                boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {p.title.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: -0.3 }}>
                  {p.title}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.7)",
                    marginTop: 4,
                  }}
                >
                  {p.comingSoon ? "Coming soon" : "Visit ↗"}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
