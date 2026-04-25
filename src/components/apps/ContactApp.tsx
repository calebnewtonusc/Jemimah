import { useContent } from "../../data/ContentContext";

export default function ContactApp() {
  const { contact, profile } = useContent();

  return (
    <div style={{ padding: 20, color: "#1c1c1e" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: -0.4 }}>
        Contact
      </h1>
      <p style={{ color: "#8a8a8e", fontSize: 14, marginTop: 4, marginBottom: 22 }}>
        The good ways to reach {profile.name}.
      </p>

      <section
        style={{
          background: "white",
          borderRadius: 14,
          padding: 16,
          boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 8px 18px rgba(0,0,0,0.05)",
          marginBottom: 14,
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
          }}
        >
          Email
        </h2>
        <a
          href={`mailto:${contact.email}`}
          style={{
            fontSize: 17,
            color: "#0a66c2",
            textDecoration: "none",
            display: "block",
            marginTop: 4,
          }}
        >
          {contact.email}
        </a>
        <p style={{ fontSize: 13, color: "#6b6b70", marginTop: 6 }}>
          {contact.emailNote}
        </p>
      </section>

      <section
        style={{
          background: "white",
          borderRadius: 14,
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
          Elsewhere
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {contact.social.map((s, i) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                color: "#1c1c1e",
                textDecoration: "none",
                borderTop:
                  i === 0 ? "none" : "0.5px solid rgba(60,60,67,0.18)",
              }}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "#eef0f3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#3a3a3c",
                }}
              >
                {s.glyph}
              </span>
              <span style={{ fontSize: 15, flex: 1 }}>{s.label}</span>
              <span style={{ color: "#c7c7cc", fontSize: 18 }}>›</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
