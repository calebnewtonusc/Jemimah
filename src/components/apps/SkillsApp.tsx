import { useContent } from "../../data/ContentContext";

export default function SkillsApp() {
  const { skills } = useContent();

  return (
    <div style={{ padding: 20, color: "#1c1c1e" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: -0.4 }}>
        Skills
      </h1>
      <p style={{ color: "#8a8a8e", fontSize: 14, marginTop: 4, marginBottom: 24 }}>
        Things you've learned and like working with. Group them however feels true.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {skills.map((group) => (
          <section
            key={group.category}
            style={{
              borderRadius: 14,
              background: "white",
              padding: 16,
              boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 8px 18px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 0.5,
                color: "#8a8a8e",
                textTransform: "uppercase",
                marginTop: 0,
                marginBottom: 10,
              }}
            >
              {group.category}
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.items.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "#f0eef7",
                    fontSize: 13,
                    color: "#5a3a85",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
