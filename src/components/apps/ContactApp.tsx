// "Mail" — mirrors Caleb's ContactApp: compose-style contact card with social links.
import { useState } from "react";
import { useContent } from "../../data/ContentContext";

export default function ContactApp() {
  const { profile, contact, social } = useContent();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    subject || "Hello",
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div style={{ height: "100%", display: "flex", background: "#f2f2f7" }}>
      <div
        style={{
          width: 280,
          flexShrink: 0,
          background: "white",
          borderRight: "0.5px solid rgba(60,60,67,0.18)",
          padding: 22,
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, marginBottom: 6 }}>
          Mail
        </div>
        <div style={{ fontSize: 13, color: "#6b6b70" }}>To: {profile.name}</div>
        <div style={{ fontSize: 12, color: "#8a8a8e", marginTop: 2 }}>{contact.email}</div>

        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 12, color: "#8a8a8e", textTransform: "uppercase", letterSpacing: 0.5 }}>
            Elsewhere
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
            {Object.entries(social)
              .filter(([k]) => k !== "email")
              .map(([k, url]) => (
                <a
                  key={k}
                  href={url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13, color: "#007AFF", textDecoration: "none" }}
                >
                  {k} ↗
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className="ios-scroll" style={{ flex: 1, overflowY: "auto", padding: "22px 28px" }}>
        <div
          style={{
            background: "white",
            borderRadius: 14,
            padding: 18,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 12, color: "#8a8a8e" }}>{contact.emailNote}</div>

          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            style={{
              padding: "10px 12px",
              border: "1px solid rgba(60,60,67,0.18)",
              borderRadius: 8,
              fontSize: 14,
            }}
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write a thoughtful message…"
            rows={10}
            style={{
              padding: "10px 12px",
              border: "1px solid rgba(60,60,67,0.18)",
              borderRadius: 8,
              fontSize: 14,
              resize: "vertical",
              fontFamily: "inherit",
            }}
          />

          <a
            href={mailto}
            style={{
              alignSelf: "flex-start",
              padding: "10px 18px",
              borderRadius: 999,
              background: "#007AFF",
              color: "white",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Open in Mail
          </a>
        </div>
      </div>
    </div>
  );
}
