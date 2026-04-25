import { useContent } from "../../data/ContentContext";

export default function EducationApp() {
  const { education } = useContent();

  return (
    <div style={{ padding: 20, color: "#1c1c1e" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: -0.4 }}>
        Education
      </h1>
      <p style={{ color: "#8a8a8e", fontSize: 14, marginTop: 4, marginBottom: 24 }}>
        Schooling, programs, and the big things you've studied.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {education.map((e) => (
          <article
            key={e.id}
            style={{
              borderRadius: 14,
              background: "white",
              padding: 16,
              boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 8px 18px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: e.color ?? "#7a8a9e",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {e.school.replace(/[^A-Za-z]/g, "").charAt(0) || "S"}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>{e.school}</div>
                <div style={{ fontSize: 13, color: "#6b6b70" }}>
                  {e.degree} · {e.period}
                </div>
              </div>
            </div>
            <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.55, color: "#3a3a3c" }}>
              {e.description}
            </p>
            {e.highlights.length > 0 && (
              <ul style={{ marginTop: 8, paddingLeft: 18, color: "#3a3a3c", fontSize: 14 }}>
                {e.highlights.map((h, i) => (
                  <li key={i} style={{ marginBottom: 4 }}>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
