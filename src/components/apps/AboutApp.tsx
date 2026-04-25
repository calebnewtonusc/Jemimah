import { useContent } from "../../data/ContentContext";

export default function AboutApp() {
  const { profile } = useContent();

  return (
    <div style={{ padding: 20, color: "#1c1c1e" }}>
      <div
        style={{
          display: "flex",
          gap: 18,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <img
          src={profile.photo}
          alt="Portrait placeholder"
          style={{
            width: 96,
            height: 120,
            borderRadius: 14,
            objectFit: "cover",
            background: "#dde6df",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
        />
        <div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: -0.4,
              margin: 0,
            }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "#6b6b70",
              marginTop: 4,
              marginBottom: 0,
            }}
          >
            {profile.tagline}
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#8a8a8e",
              marginTop: 4,
              marginBottom: 0,
            }}
          >
            {profile.location}
          </p>
        </div>
      </div>

      <section style={{ marginBottom: 22 }}>
        <h2 style={sectionHeader}>About</h2>
        <p style={paragraph}>{profile.bio}</p>
      </section>

      <section style={{ marginBottom: 22 }}>
        <h2 style={sectionHeader}>Roles</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {profile.roles.map((r) => (
            <span key={r} style={chip}>
              {r}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 style={sectionHeader}>Currently into</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {profile.skills.map((s) => (
            <span key={s} style={{ ...chip, background: "#e5efe9", color: "#345b44" }}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <p style={hint}>
        Tip: open <strong>Settings → Edit content</strong> to change any of this
        text.
      </p>
    </div>
  );
}

const sectionHeader: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: 0.5,
  color: "#8a8a8e",
  textTransform: "uppercase",
  marginBottom: 8,
};

const paragraph: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.55,
  color: "#1c1c1e",
};

const chip: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: 999,
  background: "#eef0f3",
  fontSize: 13,
  color: "#3a3a3c",
};

const hint: React.CSSProperties = {
  marginTop: 24,
  fontSize: 12,
  color: "#8a8a8e",
  fontStyle: "italic",
};
