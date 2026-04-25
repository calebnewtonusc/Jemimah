import { useContent } from "../../data/ContentContext";

export default function MusicApp() {
  const { music } = useContent();

  return (
    <div
      style={{
        padding: 0,
        color: "white",
        minHeight: "100%",
        background: "linear-gradient(160deg, #ff5f6d 0%, #ffc371 100%)",
      }}
    >
      <div style={{ padding: 20 }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, margin: 0, letterSpacing: -0.5 }}>
          Music
        </h1>
        <p style={{ fontSize: 14, opacity: 0.9, marginTop: 4 }}>
          A small list of songs worth playing again. Replace the placeholders.
        </p>

        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: "20px 0 0",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {music.map((m, i) => (
            <li
              key={m.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 12,
                borderRadius: 12,
                background: "rgba(255,255,255,0.16)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <span
                style={{
                  width: 28,
                  textAlign: "right",
                  fontWeight: 700,
                  opacity: 0.85,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                ♫
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 15,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {m.title}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    opacity: 0.85,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {m.artist} · {m.note}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
