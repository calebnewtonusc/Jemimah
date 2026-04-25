import { useContent } from "../../data/ContentContext";

export default function WorkApp() {
  const { experience } = useContent();

  return (
    <div style={{ padding: 20, color: "#1c1c1e" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: -0.4 }}>
        Work
      </h1>
      <p style={{ color: "#8a8a8e", fontSize: 14, marginTop: 4, marginBottom: 24 }}>
        Roles you've held, projects you've shipped, and the work you're proud of.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {experience.map((job) => (
          <article
            key={job.id}
            style={{
              borderRadius: 14,
              background: "white",
              padding: 16,
              boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 8px 18px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: job.color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  {job.company.replace(/[^A-Za-z]/g, "").charAt(0) || "C"}
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{job.title}</div>
                  <div style={{ fontSize: 13, color: "#6b6b70" }}>
                    {job.company} · {job.period}
                  </div>
                </div>
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  color: "#6b6b70",
                  background: "#f0f0f3",
                  padding: "4px 8px",
                  borderRadius: 6,
                }}
              >
                {job.year}
              </span>
            </div>
            <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.55, color: "#3a3a3c" }}>
              {job.description}
            </p>
            <ul style={{ marginTop: 8, paddingLeft: 18, color: "#3a3a3c", fontSize: 14 }}>
              {job.achievements.map((a, i) => (
                <li key={i} style={{ marginBottom: 4 }}>
                  {a}
                </li>
              ))}
            </ul>
            {job.website && (
              <a
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 10,
                  fontSize: 13,
                  color: "#0a66c2",
                  textDecoration: "none",
                }}
              >
                Visit ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
