import { useContent } from "../../data/ContentContext";

const kindIcon: Record<string, string> = {
  PDF: "📄",
  Folder: "📁",
  Markdown: "📝",
};

export default function FilesApp() {
  const { files } = useContent();

  return (
    <div style={{ padding: 20, color: "#1c1c1e" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: -0.4 }}>
        Files
      </h1>
      <p style={{ color: "#8a8a8e", fontSize: 14, marginTop: 4, marginBottom: 20 }}>
        A simple drawer for documents, samples, and folders. Placeholders for now.
      </p>

      <div
        style={{
          background: "white",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 8px 18px rgba(0,0,0,0.05)",
        }}
      >
        {files.map((f, i) => (
          <div
            key={f.id}
            style={{
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              borderTop: i === 0 ? "none" : "0.5px solid rgba(60,60,67,0.18)",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                background: "#eef0f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              {kindIcon[f.kind] ?? "📄"}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{f.name}</div>
              <div style={{ fontSize: 12, color: "#8a8a8e" }}>
                {f.kind} · {f.size} · {f.description}
              </div>
            </div>
            <span style={{ color: "#c7c7cc", fontSize: 18 }}>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}
