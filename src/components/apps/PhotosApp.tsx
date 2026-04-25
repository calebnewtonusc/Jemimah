import { useState } from "react";
import { useContent } from "../../data/ContentContext";

export default function PhotosApp() {
  const { photos, setPhotoCaption } = useContent();
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div style={{ padding: 16, color: "#1c1c1e" }}>
      <div style={{ padding: "4px 4px 16px" }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: -0.4 }}>
          Photos
        </h1>
        <p style={{ color: "#8a8a8e", fontSize: 14, marginTop: 4 }}>
          A grid of placeholders. Drop in real images later — captions are
          editable inline.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 6,
        }}
      >
        {photos.map((p) => (
          <figure
            key={p.id}
            style={{
              margin: 0,
              aspectRatio: "1 / 1",
              overflow: "hidden",
              borderRadius: 6,
              position: "relative",
              background: "#dde6df",
              cursor: "pointer",
            }}
            onClick={() => setEditingId(editingId === p.id ? null : p.id)}
          >
            <img
              src={p.src}
              alt={p.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <figcaption
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "6px 8px",
                fontSize: 11,
                color: "white",
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0))",
              }}
            >
              {editingId === p.id ? (
                <input
                  autoFocus
                  defaultValue={p.caption}
                  onClick={(e) => e.stopPropagation()}
                  onBlur={(e) => {
                    setPhotoCaption(p.id, e.target.value);
                    setEditingId(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setPhotoCaption(p.id, (e.target as HTMLInputElement).value);
                      setEditingId(null);
                    }
                  }}
                  style={{
                    width: "100%",
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    borderRadius: 4,
                    color: "white",
                    fontSize: 11,
                    padding: "2px 6px",
                  }}
                />
              ) : (
                <span>{p.caption || "[ tap to caption ]"}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
